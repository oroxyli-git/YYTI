// YYTI 主逻辑模块
import { QUESTIONS, PERSONALITY_TYPES, ALL_DIMENSIONS, MODELS } from './data.js';

// ========== 状态管理 ==========
const state = {
    currentPage: 'home',
    answers: {},       // { questionId: optionIndex }
    result: null
};

// ========== DOM 引用 ==========
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ========== 页面切换 ==========
function showPage(pageId) {
    ['page-home', 'page-quiz', 'page-result'].forEach(id => {
        const el = $(`#${id}`);
        if (id === `page-${pageId}`) {
            el.classList.remove('hidden');
            el.classList.add('page-transition-enter');
        } else {
            el.classList.add('hidden');
            el.classList.remove('page-transition-enter');
        }
    });
    state.currentPage = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== 粒子背景 ==========
function initParticles() {
    const canvas = $('#particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 60;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = Math.random() > 0.5 ? '217, 119, 6' : '251, 191, 36';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ========== 渲染题目 ==========
function renderQuiz() {
    const container = $('#quiz-container');
    container.innerHTML = '';

    QUESTIONS.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `question-${q.id}`;
        card.style.animationDelay = `${idx * 0.05}s`;

        const optionsHTML = q.options.map((opt, optIdx) => `
            <button class="option-btn" data-qid="${q.id}" data-oidx="${optIdx}">
                <span class="option-label">${opt.label}</span>
                ${opt.text}
            </button>
        `).join('');

        card.innerHTML = `
            <span class="question-number">第 ${q.id} 题</span>
            <p class="question-text">${q.question}</p>
            <div class="options-group">
                ${optionsHTML}
            </div>
        `;

        container.appendChild(card);
    });

    // 事件委托
    container.addEventListener('click', handleOptionClick);
    updateProgress();
}

// ========== 选项点击 ==========
function handleOptionClick(e) {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;

    const qid = parseInt(btn.dataset.qid);
    const oidx = parseInt(btn.dataset.oidx);

    // 取消同题其他选项
    const siblings = btn.parentElement.querySelectorAll('.option-btn');
    siblings.forEach(s => s.classList.remove('selected'));
    btn.classList.add('selected');

    state.answers[qid] = oidx;
    updateProgress();

    // 自动滚动到下一题
    const answeredCount = Object.keys(state.answers).length;
    if (answeredCount < QUESTIONS.length) {
        const nextQ = QUESTIONS.find(q => state.answers[q.id] === undefined);
        if (nextQ) {
            setTimeout(() => {
                const nextCard = $(`#question-${nextQ.id}`);
                if (nextCard) {
                    nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
    }
}

// ========== 更新进度 ==========
function updateProgress() {
    const total = QUESTIONS.length;
    const answered = Object.keys(state.answers).length;
    const pct = (answered / total) * 100;

    $('#quiz-progress-text').textContent = `${answered} / ${total}`;
    $('#quiz-progress-bar').style.width = `${pct}%`;

    // 显示/隐藏提交按钮
    if (answered === total) {
        $('#quiz-submit-area').classList.remove('hidden');
    } else {
        $('#quiz-submit-area').classList.add('hidden');
    }
}

// ========== 计算结果 ==========
function calculateResult() {
    // 1. 汇总各维度得分
    const dimScores = {};
    ALL_DIMENSIONS.forEach(d => { dimScores[d.id] = 0; });

    const dimCounts = {};
    ALL_DIMENSIONS.forEach(d => { dimCounts[d.id] = 0; });

    QUESTIONS.forEach(q => {
        const oidx = state.answers[q.id];
        if (oidx === undefined) return;
        const opt = q.options[oidx];
        Object.entries(opt.scores).forEach(([dimId, score]) => {
            dimScores[dimId] = (dimScores[dimId] || 0) + score;
            dimCounts[dimId] = (dimCounts[dimId] || 0) + 1;
        });
    });

    // 2. 归一化到 H/M/L (3/2/1)
    const normalizedVector = {};
    ALL_DIMENSIONS.forEach(d => {
        const count = dimCounts[d.id] || 1;
        const avg = dimScores[d.id] / count;
        // 映射到 1-3
        normalizedVector[d.id] = Math.round(Math.max(1, Math.min(3, avg)) * 10) / 10;
    });

    // 3. 曼哈顿距离匹配
    let bestMatch = null;
    let bestDist = Infinity;

    PERSONALITY_TYPES.forEach(type => {
        let dist = 0;
        ALL_DIMENSIONS.forEach(d => {
            const userVal = normalizedVector[d.id] || 2;
            const typeVal = type.vector[d.id] || 2;
            dist += Math.abs(userVal - typeVal);
        });
        if (dist < bestDist) {
            bestDist = dist;
            bestMatch = type;
        }
    });

    // 4. 计算匹配度
    const maxDist = ALL_DIMENSIONS.length * 2; // 最大可能距离
    const matchRate = Math.round((1 - bestDist / maxDist) * 100);

    return {
        type: bestMatch,
        matchRate: Math.max(60, Math.min(98, matchRate)),
        dimScores: normalizedVector,
        rawScores: dimScores
    };
}

// ========== 渲染结果 ==========
function renderResult(result) {
    const { type, matchRate, dimScores } = result;

    // 主类型信息
    $('#result-type-code').textContent = `${type.emoji} ${type.code}（${type.character}）`;
    $('#result-type-name').textContent = type.name;
    $('#result-match-rate').textContent = `匹配度 ${matchRate}%`;
    $('#result-note').textContent = type.note;
    $('#result-description').textContent = type.description;

    // 标签
    const tagsContainer = $('#result-tags');
    tagsContainer.innerHTML = type.tags.map(tag => `<span class="result-tag">${tag}</span>`).join('');

    // 十五维度评分
    const dimContainer = $('#result-dimensions');
    dimContainer.innerHTML = '';

    MODELS.forEach(model => {
        const modelDiv = document.createElement('div');
        modelDiv.className = 'mb-4';
        modelDiv.innerHTML = `<p class="text-xs text-gray-500 mb-2">${model.icon} ${model.name}</p>`;

        model.dimensions.forEach(dim => {
            const score = dimScores[dim.id] || 2;
            const pct = ((score / 3) * 100).toFixed(0);
            const barDiv = document.createElement('div');
            barDiv.className = 'dimension-bar-container mb-1';
            barDiv.innerHTML = `
                <span class="dimension-label" title="${dim.desc}">${dim.name}</span>
                <div class="dimension-bar-bg">
                    <div class="dimension-bar-fill" style="width: 0%"></div>
                </div>
                <span class="dimension-score">${score.toFixed(1)}</span>
            `;
            modelDiv.appendChild(barDiv);

            // 动画延迟
            setTimeout(() => {
                barDiv.querySelector('.dimension-bar-fill').style.width = `${pct}%`;
            }, 300);
        });

        dimContainer.appendChild(modelDiv);
    });
}

// ========== 事件绑定 ==========
function bindEvents() {
    // 开始测试
    $('#btn-start').addEventListener('click', () => {
        state.answers = {};
        showPage('quiz');
        renderQuiz();
    });

    // 提交结果
    $('#btn-submit').addEventListener('click', () => {
        const result = calculateResult();
        state.result = result;
        showPage('result');
        renderResult(result);
    });

    // 重新测试
    $('#btn-restart').addEventListener('click', () => {
        state.answers = {};
        state.result = null;
        showPage('home');
    });
}

// ========== 初始化 ==========
function init() {
    initParticles();
    bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
