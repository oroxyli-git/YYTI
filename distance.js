// YYTI 曼哈顿距离矩阵计算与渲染
import { PERSONALITY_TYPES, ALL_DIMENSIONS } from './data.js';

// ========== 计算曼哈顿距离 ==========
function manhattanDistance(vecA, vecB) {
    let dist = 0;
    ALL_DIMENSIONS.forEach(d => {
        const a = vecA[d.id] || 2;
        const b = vecB[d.id] || 2;
        dist += Math.abs(a - b);
    });
    return dist;
}

// ========== 计算所有角色对的距离 ==========
function computeAllDistances() {
    const types = PERSONALITY_TYPES;
    const n = types.length;
    const matrix = [];
    const pairs = [];

    // 初始化矩阵
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                matrix[i][j] = 0;
            } else if (j > i) {
                const dist = manhattanDistance(types[i].vector, types[j].vector);
                matrix[i][j] = dist;
                pairs.push({
                    idxA: i,
                    idxB: j,
                    nameA: types[i].character,
                    nameB: types[j].character,
                    emojiA: types[i].emoji,
                    emojiB: types[j].emoji,
                    codeA: types[i].code,
                    codeB: types[j].code,
                    typeNameA: types[i].name,
                    typeNameB: types[j].name,
                    distance: dist,
                    vectorA: types[i].vector,
                    vectorB: types[j].vector
                });
            } else {
                matrix[i][j] = matrix[j][i];
            }
        }
    }

    // 按距离排序
    pairs.sort((a, b) => a.distance - b.distance);

    return { matrix, pairs, types };
}

// ========== 距离对应CSS类 ==========
function distClass(d) {
    if (d <= 12) return `dist-${d}`;
    return 'dist-high';
}

// ========== 风险等级 ==========
function riskLevel(d) {
    if (d <= 4) return { label: '🔴 极高', cls: 'text-red-400', bg: 'bg-red-900/30 border-red-700/50' };
    if (d <= 6) return { label: '🟠 高', cls: 'text-orange-400', bg: 'bg-orange-900/30 border-orange-700/50' };
    if (d <= 7) return { label: '🟡 中', cls: 'text-yellow-400', bg: 'bg-yellow-900/30 border-yellow-700/50' };
    if (d <= 10) return { label: '🟢 低', cls: 'text-green-400', bg: 'bg-green-900/30 border-green-700/50' };
    return { label: '⚪ 安全', cls: 'text-gray-400', bg: 'bg-gray-800/30 border-gray-700/50' };
}

// ========== 渲染统计概览 ==========
function renderStats(pairs) {
    const container = document.getElementById('stats-overview');
    const distances = pairs.map(p => p.distance);
    const minDist = Math.min(...distances);
    const maxDist = Math.max(...distances);
    const avgDist = (distances.reduce((a, b) => a + b, 0) / distances.length).toFixed(1);
    const dangerCount = distances.filter(d => d <= 7).length;
    const safeCount = distances.filter(d => d > 10).length;

    const stats = [
        { icon: '📏', label: '最小距离', value: minDist, color: 'text-red-400' },
        { icon: '📐', label: '最大距离', value: maxDist, color: 'text-green-400' },
        { icon: '📊', label: '平均距离', value: avgDist, color: 'text-amber-400' },
        { icon: '⚠️', label: '高危对(≤7)', value: dangerCount, color: 'text-orange-400' },
        { icon: '✅', label: '安全对(>10)', value: safeCount, color: 'text-green-400' }
    ];

    container.innerHTML = stats.map(s => `
        <div class="bg-gray-900/80 rounded-xl border border-gray-800 p-3 text-center">
            <div class="text-lg mb-1">${s.icon}</div>
            <div class="${s.color} text-xl font-black">${s.value}</div>
            <div class="text-gray-500 text-xs mt-1">${s.label}</div>
        </div>
    `).join('');
}

// ========== 渲染热力矩阵 ==========
function renderMatrix(matrix, types) {
    const table = document.getElementById('matrix-table');
    const n = types.length;

    // 表头
    let headerHTML = '<thead><tr><th class="corner-cell min-w-[100px]"></th>';
    for (let j = 0; j < n; j++) {
        const shortName = types[j].character.length > 4 
            ? types[j].character.substring(0, 4) 
            : types[j].character;
        headerHTML += `<th class="px-1 py-2" title="${types[j].character}（${types[j].name}）">
            <div class="flex flex-col items-center gap-0.5">
                <span>${types[j].emoji}</span>
                <span class="writing-mode-vertical" style="writing-mode: vertical-rl; text-orientation: mixed; max-height: 60px; overflow: hidden;">${shortName}</span>
            </div>
        </th>`;
    }
    headerHTML += '</tr></thead>';

    // 表体
    let bodyHTML = '<tbody>';
    for (let i = 0; i < n; i++) {
        const shortName = types[i].character.length > 4 
            ? types[i].character.substring(0, 4) 
            : types[i].character;
        bodyHTML += `<tr><th class="px-2 py-1 min-w-[100px]" title="${types[i].character}（${types[i].name}）">
            <span class="mr-1">${types[i].emoji}</span>${shortName}
        </th>`;
        for (let j = 0; j < n; j++) {
            const d = matrix[i][j];
            if (i === j) {
                bodyHTML += `<td class="bg-gray-800/50 text-gray-600">-</td>`;
            } else {
                bodyHTML += `<td class="${distClass(d)}" 
                    data-i="${i}" data-j="${j}" data-dist="${d}"
                    title="${types[i].character} ↔ ${types[j].character}: ${d}">${d}</td>`;
            }
        }
        bodyHTML += '</tr>';
    }
    bodyHTML += '</tbody>';

    table.innerHTML = headerHTML + bodyHTML;

    // 悬浮提示
    const tooltip = document.getElementById('tooltip');
    const tooltipContent = document.getElementById('tooltip-content');

    table.addEventListener('mouseover', (e) => {
        const td = e.target.closest('td[data-i]');
        if (!td) { tooltip.classList.add('hidden'); return; }

        const i = parseInt(td.dataset.i);
        const j = parseInt(td.dataset.j);
        const d = parseInt(td.dataset.dist);
        const risk = riskLevel(d);

        // 计算各维度差异
        const dimDiffs = ALL_DIMENSIONS.map(dim => {
            const a = types[i].vector[dim.id] || 2;
            const b = types[j].vector[dim.id] || 2;
            return { id: dim.id, name: dim.name, a, b, diff: Math.abs(a - b) };
        }).sort((a, b) => b.diff - a.diff);

        tooltipContent.innerHTML = `
            <div class="text-xs">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-amber-300 font-bold">${types[i].emoji} ${types[i].character}</span>
                    <span class="text-gray-500 mx-2">↔</span>
                    <span class="text-amber-300 font-bold">${types[j].emoji} ${types[j].character}</span>
                </div>
                <div class="flex items-center justify-between mb-2">
                    <span class="text-white font-black text-lg">${d}</span>
                    <span class="${risk.cls} text-xs">${risk.label}</span>
                </div>
                <div class="border-t border-gray-700 pt-2 mt-1">
                    <p class="text-gray-500 mb-1">维度差异（降序）：</p>
                    ${dimDiffs.slice(0, 6).map(dd => `
                        <div class="flex items-center justify-between py-0.5">
                            <span class="text-gray-400">${dd.name}</span>
                            <span class="flex items-center gap-1">
                                <span class="text-gray-500">${dd.a}</span>
                                <span class="text-gray-600">vs</span>
                                <span class="text-gray-500">${dd.b}</span>
                                <span class="${dd.diff >= 2 ? 'text-red-400' : dd.diff === 1 ? 'text-yellow-400' : 'text-green-400'} font-bold ml-1">Δ${dd.diff}</span>
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        tooltip.classList.remove('hidden');
        const rect = td.getBoundingClientRect();
        let left = rect.right + 10;
        let top = rect.top;
        if (left + 280 > window.innerWidth) left = rect.left - 290;
        if (top + 300 > window.innerHeight) top = window.innerHeight - 310;
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${Math.max(10, top)}px`;
    });

    table.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget || !e.relatedTarget.closest('#matrix-table')) {
            tooltip.classList.add('hidden');
        }
    });
}

// ========== 渲染距离排行列表 ==========
function renderPairList(pairs) {
    const tbody = document.getElementById('pair-list-body');
    const maxDist = Math.max(...pairs.map(p => p.distance));

    function renderRows(filteredPairs) {
        tbody.innerHTML = filteredPairs.map((p, idx) => {
            const risk = riskLevel(p.distance);
            const pct = ((p.distance / maxDist) * 100).toFixed(0);
            return `
                <tr class="pair-row border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                    <td class="py-2 px-3 text-gray-600 text-xs">${idx + 1}</td>
                    <td class="py-2 px-3">
                        <span class="mr-1">${p.emojiA}</span>
                        <span class="text-gray-200 text-xs">${p.nameA}</span>
                        <span class="text-gray-600 text-xs ml-1">${p.typeNameA}</span>
                    </td>
                    <td class="py-2 px-3">
                        <span class="mr-1">${p.emojiB}</span>
                        <span class="text-gray-200 text-xs">${p.nameB}</span>
                        <span class="text-gray-600 text-xs ml-1">${p.typeNameB}</span>
                    </td>
                    <td class="py-2 px-3 text-center">
                        <span class="inline-block px-2 py-0.5 rounded ${distClass(p.distance)} text-xs font-black">${p.distance}</span>
                    </td>
                    <td class="py-2 px-3 w-40">
                        <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div class="h-full rounded-full transition-all duration-500 ${p.distance <= 7 ? 'bg-gradient-to-r from-red-600 to-orange-500' : p.distance <= 10 ? 'bg-gradient-to-r from-amber-600 to-yellow-500' : 'bg-gradient-to-r from-green-600 to-emerald-500'}" style="width: ${pct}%"></div>
                        </div>
                    </td>
                    <td class="py-2 px-3 text-center">
                        <span class="${risk.cls} text-xs">${risk.label}</span>
                    </td>
                </tr>
            `;
        }).join('');
    }

    renderRows(pairs);

    // 搜索功能
    document.getElementById('search-pair').addEventListener('input', (e) => {
        const keyword = e.target.value.trim().toLowerCase();
        if (!keyword) {
            renderRows(pairs);
            return;
        }
        const filtered = pairs.filter(p =>
            p.nameA.toLowerCase().includes(keyword) ||
            p.nameB.toLowerCase().includes(keyword) ||
            p.typeNameA.toLowerCase().includes(keyword) ||
            p.typeNameB.toLowerCase().includes(keyword)
        );
        renderRows(filtered);
    });
}

// ========== 渲染高危混淆对 ==========
function renderDangerPairs(pairs) {
    const container = document.getElementById('danger-pairs-container');
    const dangerPairs = pairs.filter(p => p.distance <= 7);

    if (dangerPairs.length === 0) {
        container.innerHTML = '<p class="text-green-400 text-center py-8">🎉 没有高危混淆对，所有角色区分度良好！</p>';
        return;
    }

    container.innerHTML = dangerPairs.map(p => {
        const risk = riskLevel(p.distance);
        // 计算维度差异
        const dimDiffs = ALL_DIMENSIONS.map(dim => {
            const a = p.vectorA[dim.id] || 2;
            const b = p.vectorB[dim.id] || 2;
            return { id: dim.id, name: dim.name, a, b, diff: Math.abs(a - b) };
        });
        const sameDims = dimDiffs.filter(d => d.diff === 0);
        const diffDims = dimDiffs.filter(d => d.diff > 0).sort((a, b) => b.diff - a.diff);

        return `
            <div class="rounded-xl border ${risk.bg} p-4">
                <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <div class="flex items-center gap-3">
                        <div class="text-center">
                            <div class="text-lg">${p.emojiA}</div>
                            <div class="text-xs text-amber-300 font-bold">${p.nameA}</div>
                            <div class="text-xs text-gray-500">${p.typeNameA}</div>
                        </div>
                        <div class="text-center px-3">
                            <div class="text-2xl font-black ${risk.cls}">${p.distance}</div>
                            <div class="text-xs text-gray-500">曼哈顿距离</div>
                        </div>
                        <div class="text-center">
                            <div class="text-lg">${p.emojiB}</div>
                            <div class="text-xs text-amber-300 font-bold">${p.nameB}</div>
                            <div class="text-xs text-gray-500">${p.typeNameB}</div>
                        </div>
                    </div>
                    <span class="${risk.cls} text-xs font-bold">${risk.label}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div>
                        <p class="text-gray-500 mb-1">🔴 差异维度（${diffDims.length}个）：</p>
                        <div class="flex flex-wrap gap-1">
                            ${diffDims.map(d => `
                                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${d.diff >= 2 ? 'bg-red-900/40 text-red-300' : 'bg-yellow-900/40 text-yellow-300'}">
                                    ${d.name} <span class="font-bold">${d.a}→${d.b}</span> Δ${d.diff}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <p class="text-gray-500 mb-1">⚪ 相同维度（${sameDims.length}个）：</p>
                        <div class="flex flex-wrap gap-1">
                            ${sameDims.map(d => `
                                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-800 text-gray-400">
                                    ${d.name}=${d.a}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ========== 标签切换 ==========
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            // 切换按钮样式
            tabs.forEach(t => {
                t.classList.remove('active');
                t.classList.add('bg-gray-800', 'text-gray-300');
            });
            tab.classList.add('active');
            tab.classList.remove('bg-gray-800', 'text-gray-300');

            // 切换视图
            ['matrix', 'list', 'danger'].forEach(v => {
                const el = document.getElementById(`view-${v}`);
                if (v === target) {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });
        });
    });
}

// ========== 初始化 ==========
function init() {
    const { matrix, pairs, types } = computeAllDistances();

    document.getElementById('total-pairs').textContent = pairs.length;

    renderStats(pairs);
    renderMatrix(matrix, types);
    renderPairList(pairs);
    renderDangerPairs(pairs);
    initTabs();
}

document.addEventListener('DOMContentLoaded', init);
