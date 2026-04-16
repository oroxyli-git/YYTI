// YYTI 数据模块 — 题目、维度、角色人格类型

// ========== 15个维度定义 ==========
// 5大江湖模型 × 每模型3维度
export const MODELS = [
    {
        name: '自我修行',
        icon: '🧘',
        dimensions: [
            { id: 'S1', name: '侠骨傲气', desc: '对自我价值的坚定程度，是否有"虽千万人吾往矣"的气魄' },
            { id: 'S2', name: '心境澄明', desc: '对"我是谁"的清晰程度，内心是否通透如镜' },
            { id: 'S3', name: '道心坚守', desc: '内心真正追求的方向，是否有自己的"道"' }
        ]
    },
    {
        name: '江湖情义',
        icon: '🤝',
        dimensions: [
            { id: 'E1', name: '知己深浅', desc: '在亲密关系中的安全感和信任基线' },
            { id: 'E2', name: '江湖交际', desc: '社交能量与人际取向，是独行侠还是交际花' },
            { id: 'E3', name: '侠义热肠', desc: '对他人的共情与信任，是否路见不平拔刀相助' }
        ]
    },
    {
        name: '行走方式',
        icon: '🗡️',
        dimensions: [
            { id: 'A1', name: '破局胆识', desc: '对新体验的接受程度，是否敢闯未知之地' },
            { id: 'A2', name: '行事章法', desc: '自律、计划与执行力，做事是否有条不紊' },
            { id: 'A3', name: '随心所欲', desc: '灵活应变的能力，是否能随机应变' }
        ]
    },
    {
        name: '内心世界',
        icon: '🌙',
        dimensions: [
            { id: 'I1', name: '情绪暗涌', desc: '情绪的稳定性，内心是否波涛汹涌' },
            { id: 'I2', name: '执念深重', desc: '对某件事/某个人的执着程度' },
            { id: 'I3', name: '孤独承受', desc: '独处时的状态，是享受还是煎熬' }
        ]
    },
    {
        name: '命运抉择',
        icon: '⚖️',
        dimensions: [
            { id: 'D1', name: '乱世求生', desc: '面对困境时的生存智慧' },
            { id: 'D2', name: '取舍果断', desc: '做决定时的果断程度' },
            { id: 'D3', name: '逆天改命', desc: '是否相信命运可以被改变' }
        ]
    }
];

// 所有维度的平铺列表
export const ALL_DIMENSIONS = MODELS.flatMap(m => m.dimensions);

// ========== 31道题目 ==========
export const QUESTIONS = [
    {
        id: 1,
        question: '你独自行走在荒野，远处传来求救声，但天色已晚且你身负重伤。',
        options: [
            { label: 'A', text: '管他呢，侠者当救人于危难，冲就完了', scores: { S1: 3, E3: 3 } },
            { label: 'B', text: '先观察一下情况再说，万一是陷阱呢', scores: { S1: 2, E3: 2 } },
            { label: 'C', text: '保命要紧，我自己都快死了还救谁', scores: { S1: 1, E3: 1 } }
        ]
    },
    {
        id: 2,
        question: '你很清楚自己内心真正想要的是什么。',
        options: [
            { label: 'A', text: '认同，我的道从未动摇', scores: { S2: 3, S3: 3 } },
            { label: 'B', text: '有时候清楚，有时候迷茫', scores: { S2: 2, S3: 2 } },
            { label: 'C', text: '不认同，我连明天吃什么都不知道', scores: { S2: 1, S3: 1 } }
        ]
    },
    {
        id: 3,
        question: '帮派兄弟喊你一起推世界Boss，但你正在钓鱼摸鱼，你的反应是？',
        options: [
            { label: 'A', text: '收竿！冲Boss！这种事怎么能少了我', scores: { A2: 3, D2: 3 } },
            { label: 'B', text: '等我把这条鱼钓上来……好了好了来了来了', scores: { A2: 2, D2: 2 } },
            { label: 'C', text: '你们先打着，等Boss快死了叫我来捡装备', scores: { A2: 1, D2: 1 } }
        ]
    },
    {
        id: 4,
        question: '在燕云江湖中，你面对不同势力的人时会切换说话方式吗？',
        options: [
            { label: 'A', text: '不会，老子在归义军面前什么样，在绣金楼也什么样', scores: { S2: 3, I1: 1 } },
            { label: 'B', text: '会稍微调整，见人说人话见鬼说鬼话也是江湖生存之道', scores: { S2: 2, I1: 2 } },
            { label: 'C', text: '当然会，我在每个势力都有不同的人设，连我自己都快分不清了', scores: { S2: 1, I1: 3 } }
        ]
    },
    {
        id: 5,
        question: '组队下副本时，队长突然拉了个你不认识的人进队，你的反应是？',
        options: [
            { label: 'A', text: '欢迎欢迎！多个人多份力，来一起砍怪', scores: { E2: 3, E3: 2 } },
            { label: 'B', text: '行吧，只要别拖后腿就行，默默观察一下实力', scores: { E2: 2, E3: 2 } },
            { label: 'C', text: '……能不能提前说一声？我社恐发作了想退队', scores: { E2: 1, E3: 1 } }
        ]
    },
    {
        id: 6,
        question: '此题没有题目，请盲选。',
        options: [
            { label: 'A', text: '反复思考后感觉应该选A', scores: { I2: 2, A3: 1 } },
            { label: 'B', text: '无所谓，随便吧', scores: { I2: 1, A3: 3 } },
            { label: 'C', text: '不会就选C，这是我的人生哲学', scores: { I2: 1, A3: 2 } }
        ]
    },
    {
        id: 7,
        question: '你在游戏里结交了一个好友，对方天天拉你组队、给你送礼物、恨不得24小时跟你绑定，你的感受是？',
        options: [
            { label: 'A', text: '太感动了！这就是过命的交情，我也要天天黏着ta', scores: { E1: 3, I2: 3 } },
            { label: 'B', text: '挺好的，但偶尔也想自己一个人探索地图', scores: { E1: 2, I2: 2 } },
            { label: 'C', text: '有点窒息……我需要独自浪迹天涯的空间', scores: { E1: 1, I2: 1 } }
        ]
    },
    {
        id: 8,
        question: '你觉得"命运"这个东西——',
        options: [
            { label: 'A', text: '我命由我不由天，命运是用来打破的', scores: { D3: 3, S1: 3 } },
            { label: 'B', text: '三分天注定七分靠打拼，各占一半吧', scores: { D3: 2, S1: 2 } },
            { label: 'C', text: '认命吧，挣扎也没用，不如躺平', scores: { D3: 1, S1: 1 } }
        ]
    },
    {
        id: 9,
        question: '萌萌的小女孩递给你一颗松子糖，你会怎么想？',
        options: [
            { label: 'A', text: '好可爱！接过来，世界还是美好的', scores: { E3: 3, I1: 1 } },
            { label: 'B', text: '谢谢，但我会想这糖是不是有毒', scores: { E3: 2, I1: 2 } },
            { label: 'C', text: '拒绝，陌生人的东西不能要，这是江湖基本功', scores: { E3: 1, I1: 3 } }
        ]
    },
    {
        id: 10,
        question: '你所在的门派有一条古老的门规，你觉得已经过时了，但掌门坚持要遵守。你会？',
        options: [
            { label: 'A', text: '门规就是门规，前辈定下的自有道理，遵守就是了', scores: { A2: 3, A3: 1 } },
            { label: 'B', text: '表面遵守，私下按自己的方式来，别被抓到就行', scores: { A2: 2, A3: 2 } },
            { label: 'C', text: '当面跟掌门提出异议，不合理的规矩就该改', scores: { A2: 1, A3: 3 } }
        ]
    },
    {
        id: 11,
        question: '深夜独坐屋顶，望着月亮，你在想什么？',
        options: [
            { label: 'A', text: '想那些回不去的人和事，眼眶有点湿', scores: { I1: 3, I2: 3 } },
            { label: 'B', text: '想明天的计划，顺便欣赏一下夜景', scores: { I1: 1, I2: 1 } },
            { label: 'C', text: '什么都没想，脑子里放空，享受这份安静', scores: { I3: 3, I1: 1 } }
        ]
    },
    {
        id: 12,
        question: '有人在世界频道公开喷你"菜鸡"、"带不动"，还@了你的游戏ID，你会？',
        options: [
            { label: 'A', text: '直接回怼，有本事来切磋，键盘侠算什么英雄', scores: { S1: 3, D2: 3 } },
            { label: 'B', text: '懒得理，清者自清，我继续打我的副本', scores: { S1: 2, D2: 1 } },
            { label: 'C', text: '表面无所谓，但默默把对方拉进了黑名单', scores: { S1: 1, D2: 2 } }
        ]
    },
    {
        id: 13,
        question: '你更喜欢哪种生活方式？',
        options: [
            { label: 'A', text: '仗剑走天涯，四海为家，永远在路上', scores: { A1: 3, A3: 3 } },
            { label: 'B', text: '有个稳定的据点，偶尔出去浪一浪', scores: { A1: 2, A3: 2 } },
            { label: 'C', text: '宅在家里，外面的世界太危险了', scores: { A1: 1, A3: 1 } }
        ]
    },
    {
        id: 14,
        question: '你是一只阴暗的老鼠，一只爬行的蟑螂……',
        options: [
            { label: 'A', text: '不是，我是翱翔的鹰，谢谢', scores: { S1: 3, S3: 3 } },
            { label: 'B', text: '……你说得对，但我是一只有梦想的蟑螂', scores: { S1: 2, S3: 2 } },
            { label: 'C', text: '认同，我甚至不如蟑螂，蟑螂至少生命力顽强', scores: { S1: 1, S3: 1 } }
        ]
    },
    {
        id: 15,
        question: '你蹲守一个稀有材料刷新点已经30分钟了，但一直没刷出来，你会？',
        options: [
            { label: 'A', text: '继续蹲！我就不信刷不出来，这是意志力的较量', scores: { I2: 3, A2: 2 } },
            { label: 'B', text: '算了，先去做别的任务，回头再来碰运气', scores: { I2: 1, A3: 3 } },
            { label: 'C', text: '蹲着也是蹲着，打开地图研究一下还有哪些隐藏点', scores: { I2: 2, I3: 2 } }
        ]
    },
    {
        id: 16,
        question: '登录燕云十六声后，你通常会？',
        options: [
            { label: 'A', text: '打开任务列表，今天要刷什么本、做什么日常，安排得明明白白', scores: { S3: 3, A2: 3 } },
            { label: 'B', text: '有个大概方向，但经常被路边的风景和支线任务带跑', scores: { S3: 2, A2: 2 } },
            { label: 'C', text: '漫无目的地骑马乱逛，看到什么玩什么，这才叫开放世界', scores: { S3: 1, A2: 1 } }
        ]
    },
    {
        id: 17,
        question: '一个只组过几次队的江湖好友突然私信你："我发现了一个隐藏地图入口，要不要一起去探索？"',
        options: [
            { label: 'A', text: '去啊！隐藏地图诶！说不定有绝世神兵', scores: { E2: 3, A1: 3 } },
            { label: 'B', text: '先问清楚在哪、什么等级、有没有陷阱再决定', scores: { E2: 2, A1: 2 } },
            { label: 'C', text: '不去，不熟的人带路，八成是要骗我去送人头', scores: { E2: 1, A1: 1 } }
        ]
    },
    {
        id: 18,
        question: '有人想跟你在游戏里结拜为异姓兄弟/姐妹，从此有福同享有难同当，你的态度是？',
        options: [
            { label: 'A', text: '结！歃血为盟！从此你的仇人就是我的仇人', scores: { E1: 3, E3: 3 } },
            { label: 'B', text: '可以，但别太当真，游戏归游戏', scores: { E1: 2, E3: 2 } },
            { label: 'C', text: '算了吧，江湖中保持距离才是最好的相处方式', scores: { E1: 1, E3: 1 } }
        ]
    },
    {
        id: 19,
        question: '面对一个你明知打不过的对手，你会？',
        options: [
            { label: 'A', text: '打不过也要打，气势不能输', scores: { D3: 3, S1: 3 } },
            { label: 'B', text: '先撤退，留得青山在不怕没柴烧', scores: { D1: 3, D2: 2 } },
            { label: 'C', text: '投降，识时务者为俊杰', scores: { D1: 2, D2: 1 } }
        ]
    },
    {
        id: 20,
        question: '你喜欢打破常规，不喜欢被束缚。',
        options: [
            { label: 'A', text: '认同，条条框框是给普通人准备的', scores: { A3: 3, A1: 3 } },
            { label: 'B', text: '中立，在框架内创新也挺好', scores: { A3: 2, A1: 2 } },
            { label: 'C', text: '不认同，有规矩才有安全感', scores: { A3: 1, A1: 1 } }
        ]
    },
    {
        id: 21,
        question: '你加入了一个高手如云的帮派，帮主和长老们个个武功盖世，而你是帮里最菜的，你的心态是？',
        options: [
            { label: 'A', text: '我虽然菜但我自信啊，迟早超过你们', scores: { S1: 3, S2: 3 } },
            { label: 'B', text: '有点压力，但跟着大佬学习进步也很快', scores: { S1: 2, S2: 2 } },
            { label: 'C', text: '焦虑到想退帮，我配不上这个帮派', scores: { S1: 1, S2: 1 } }
        ]
    },
    {
        id: 22,
        question: '你对"独处"的感受是？',
        options: [
            { label: 'A', text: '享受，独处是充电的最好方式', scores: { I3: 3, E2: 1 } },
            { label: 'B', text: '偶尔可以，但不能太久', scores: { I3: 2, E2: 2 } },
            { label: 'C', text: '害怕，一个人的时候脑子里全是胡思乱想', scores: { I3: 1, E2: 3 } }
        ]
    },
    {
        id: 23,
        question: '地图上出现了一个限时高难度副本，奖励极其丰厚但失败会掉装备，你会？',
        options: [
            { label: 'A', text: '冲！富贵险中求，不入虎穴焉得虎子', scores: { D3: 3, A1: 3 } },
            { label: 'B', text: '先看看攻略和别人的通关视频再决定', scores: { D3: 2, A1: 2 } },
            { label: 'C', text: '不去，掉装备的风险太大了，我的装备比命还重要', scores: { D3: 1, A1: 1 } }
        ]
    },
    {
        id: 24,
        question: '打完Boss后，队友在复盘时说"你刚才那波操作有点拉"，你的反应是？',
        options: [
            { label: 'A', text: '无所谓，我自己知道打得怎么样就行，你说你的', scores: { S1: 3, I1: 1 } },
            { label: 'B', text: '嘴上说"好好好我下次注意"，心里还是会复盘一下', scores: { S1: 2, I1: 2 } },
            { label: 'C', text: '瞬间emo，反复回想那波操作到底哪里出了问题', scores: { S1: 1, I1: 3 } }
        ]
    },
    {
        id: 25,
        question: '如果穿越到乱世，你最想成为？',
        options: [
            { label: 'A', text: '一方诸侯，掌控天下棋局', scores: { D2: 3, D1: 3 } },
            { label: 'B', text: '江湖侠客，快意恩仇逍遥自在', scores: { A3: 3, S3: 3 } },
            { label: 'C', text: '隐世高人，种花养鸟不问世事', scores: { I3: 3, D1: 1 } }
        ]
    },
    {
        id: 26,
        question: '你内心有真正追求的东西。',
        options: [
            { label: 'A', text: '认同，那是我活下去的理由', scores: { S3: 3, I2: 3 } },
            { label: 'B', text: '中立，有过，但经常变', scores: { S3: 2, I2: 2 } },
            { label: 'C', text: '不认同，我只想活着，别的都是奢侈品', scores: { S3: 1, I2: 1 } }
        ]
    },
    {
        id: 27,
        question: '你正在打一个快通关的副本，帮派兄弟突然发消息说被三个人围攻了求救，你会？',
        options: [
            { label: 'A', text: '副本不打了！兄弟有难岂能不救，我来了！', scores: { E3: 3, E1: 3 } },
            { label: 'B', text: '先问清楚在哪，等我这波打完马上来', scores: { E3: 2, E1: 2 } },
            { label: 'C', text: '发个"加油"的表情包……我这副本真的快通了', scores: { E3: 1, E1: 1 } }
        ]
    },
    {
        id: 28,
        question: '面对未知的危险区域，你的第一反应是？',
        options: [
            { label: 'A', text: '冲进去探索！未知才刺激', scores: { A1: 3, D3: 3 } },
            { label: 'B', text: '先做好准备再进去，不打无准备之仗', scores: { A1: 2, D1: 3 } },
            { label: 'C', text: '绕道走，何必冒这个险', scores: { A1: 1, D1: 2 } }
        ]
    },
    {
        id: 29,
        question: '你觉得自己是个有趣的人吗？',
        options: [
            { label: 'A', text: '当然，我就是行走的快乐源泉', scores: { E2: 3, S2: 3 } },
            { label: 'B', text: '在熟人面前挺有趣的，生人面前就……', scores: { E2: 2, S2: 2 } },
            { label: 'C', text: '无趣到连自己都嫌弃自己', scores: { E2: 1, S2: 1 } }
        ]
    },
    {
        id: 30,
        question: '如果可以选择一种武器，你会选？',
        options: [
            { label: 'A', text: '长剑——光明正大，一剑破万法', scores: { S1: 3, A2: 3 } },
            { label: 'B', text: '暗器——出其不意，四两拨千斤', scores: { D1: 3, A3: 3 } },
            { label: 'C', text: '不选，最好的武器是脑子', scores: { S2: 3, D2: 3 } }
        ]
    },
    {
        id: 31,
        question: '测试结束了，你觉得这个测试——',
        options: [
            { label: 'A', text: '挺准的，被你拿捏了', scores: { S2: 2, E3: 2 } },
            { label: 'B', text: '图一乐，别太当真', scores: { A3: 2, I1: 1 } },
            { label: 'C', text: '什么垃圾测试，浪费我三分钟', scores: { S1: 3, I1: 2 } }
        ]
    }
];

// ========== 25种燕云人格类型（官方主线角色） ==========
export const PERSONALITY_TYPES = [
    {
        id: 'JIANGYAN',
        code: 'JIANGYAN',
        name: '隐忍守护者',
        subtitle: '背负秘密的漂泊之人',
        emoji: '🌊',
        character: '江晏（江无浪）',
        characterDesc: '带着婴儿躲避追杀、隐姓埋名的神秘江叔',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/00378d42-b10b-4c71-9d79-610919f31242/image_1776229381_1_1.jpg',
        tags: ['隐忍深沉', '默默守护', '背负秘密', '漂泊不定'],
        description: '你是那种把所有苦难都咽进肚子里的人。就像江无浪一样，你可能背负着不为人知的秘密，在人群中隐姓埋名，却始终默默守护着最重要的人。你不善言辞，但你的行动比任何誓言都可靠。你选择了最难的路——独自承受一切，只为让在乎的人平安。',
        note: '系统备注：你的微信签名大概是"别问"，朋友圈仅三天可见，头像是默认的。',
        vector: { S1: 2, S2: 2, S3: 3, E1: 2, E2: 1, E3: 2, A1: 2, A2: 3, A3: 2, I1: 2, I2: 3, I3: 3, D1: 3, D2: 2, D3: 2 }
    },
    {
        id: 'HONGXIAN',
        code: 'HONGXIAN',
        name: '赤心侠女',
        subtitle: '正义感爆棚的热血少女',
        emoji: '🎀',
        character: '周红线',
        characterDesc: '天天做着大侠梦的清河野丫头',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/77b6ac4f-3a5e-416f-b03f-8dfaacbad8ec/image_1776229388_1_1.jpg',
        tags: ['正义化身', '天真倔强', '热血冲动', '侠心如铁'],
        description: '你就是江湖中最纯粹的侠客。看到不平事，你的第一反应永远是冲上去，哪怕自己只是个"武侠界小学生"。就像周红线一样，穿着百家衣、爱吃松子糖，年纪虽小但侠心如铁。你用行动证明了——侠者不在乎男女老少，有侠者之心皆可称之为侠客。哪怕最后付出生命的代价，你也绝不后悔。',
        note: '系统备注：建议购买医疗保险，因为你迟早会因为多管闲事而住院。另外，松子糖已经帮你囤好了。',
        vector: { S1: 3, S2: 2, S3: 3, E1: 2, E2: 2, E3: 3, A1: 3, A2: 1, A3: 2, I1: 1, I2: 2, I3: 1, D1: 1, D2: 3, D3: 3 }
    },
    {
        id: 'CHUQINGQUAN',
        code: 'CHUQINGQUAN',
        name: '深谋义士',
        subtitle: '为国甘愿换脸赴死的世家子弟',
        emoji: '🧠',
        character: '褚清泉',
        characterDesc: '出身边关世家、深明大义的超一流高手',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/fbf776ce-9f95-4abd-afd2-50b4ea67f935/image_1776229401_1_1.png',
        tags: ['深明大义', '才智过人', '为国赴死', '大局为重'],
        description: '你是那种下棋永远看三步的人，但你下的不是普通的棋——是家国天下的大棋。就像褚清泉一样，出身世家、才智过人，为了收复失地甘愿"千金换脸"潜入敌营。你的冷静和理性让人敬佩，但你内心深处藏着最炽热的家国情怀。你愿意为了大义牺牲一切，包括自己的容貌和生命。',
        note: '系统备注：你的脑子是好用的，但你的发际线和你的容貌可能都不太同意你的计划。',
        vector: { S1: 2, S2: 3, S3: 3, E1: 2, E2: 2, E3: 2, A1: 2, A2: 3, A3: 2, I1: 1, I2: 3, I3: 2, D1: 3, D2: 3, D3: 3 }
    },
    {
        id: 'HANXIANGXUN',
        code: 'HANXIANGXUN',
        name: '铁面柔心',
        subtitle: '外冷内热的超一流女老板',
        emoji: '❄️',
        character: '寒香寻',
        characterDesc: '神仙渡女老板，武功超一流的寒姨',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/2a3a226d-8bb3-4809-98fa-a632779a7642/image_1776229406_1_1.jpg',
        tags: ['外冷内热', '武功盖世', '守护家人', '隐藏实力'],
        description: '你是那种表面严厉到让人害怕、实际上比谁都心软的人。就像寒香寻一样，看似只是个普通的酒馆老板，实则武功超一流，一击毙命不在话下。你把所有的温柔都藏在严厉的外表下，默默守护着身边的人。你告诫他们"江湖险恶"，其实是因为你太清楚这个世界的残酷。',
        note: '系统备注：你的巴掌很响，但你的拥抱更温暖。建议在门口挂个牌子：本人外冷内热，请勿被表面吓跑。',
        vector: { S1: 2, S2: 2, S3: 3, E1: 3, E2: 1, E3: 3, A1: 1, A2: 3, A3: 1, I1: 2, I2: 3, I3: 2, D1: 3, D2: 3, D3: 2 }
    },
    {
        id: 'WANGQING',
        code: 'WANGQING',
        name: '孤勇将军',
        subtitle: '死战不退的忠义之魂',
        emoji: '⚔️',
        character: '王清',
        characterDesc: '中渡桥之战力战而亡的后晋将领',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/b24c94f3-6b4d-4fbc-bcbd-40bf4171fe28/image_1776229412_1_1.jpg',
        tags: ['忠勇殉国', '死战不退', '刚正不阿', '将军气概'],
        description: '你是那种明知不可为而为之的人。就像王清将军一样，在中渡桥之战中，即使主帅杜重威叛变投敌，你依然选择死战不退。"严戒部曲，日暮酣战不息"——这就是你的写照。你的字典里没有"投降"二字，你的信念比城墙还坚固。哪怕全世界都背叛了，你也要站到最后一刻。',
        note: '系统备注：你是那种在狼人杀里被刀了还要发表三分钟遗言的人。致敬。',
        vector: { S1: 3, S2: 3, S3: 3, E1: 2, E2: 2, E3: 3, A1: 3, A2: 3, A3: 1, I1: 1, I2: 3, I3: 1, D1: 2, D2: 3, D3: 3 }
    },
    {
        id: 'TIANYING',
        code: 'TIANYING',
        name: '暗影棋手',
        subtitle: '为大义不择手段的神级刺客',
        emoji: '🗡️',
        character: '田英',
        characterDesc: '清河幕后操盘手，悬剑组织神级刺客',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/160fda3b-79d8-4870-827f-eaf25da0f252/image_1776229418_1_1.jpg',
        tags: ['不择手段', '深谋远虑', '神级刺客', '为大义隐忍'],
        description: '你是那种为了目标可以牺牲一切的人——包括自己的名声、感情和良心。就像田英一样，从孤儿到神级刺客，从悬剑组织到清河幕后操盘手，你的每一步都是精心计算的结果。你不信佛，只信自己的刀。你做的事可能不被理解，但你心里清楚——有些脏活总得有人干。',
        note: '系统备注：你的人生就是一盘棋，可惜你把自己也当成了棋子。月神还在等你那把短剑的回音。',
        vector: { S1: 2, S2: 3, S3: 3, E1: 1, E2: 1, E3: 1, A1: 2, A2: 3, A3: 3, I1: 2, I2: 3, I3: 3, D1: 3, D2: 3, D3: 3 }
    },
    {
        id: 'LIZHENZHEN',
        code: 'LIZHENZHEN',
        name: '向月而拜',
        subtitle: '生于泥泞仍向月而拜的悲情剑客',
        emoji: '🌙',
        character: '黎蓁蓁（月神）',
        characterDesc: '自幼失明、从冥婚盲女到威震江湖的月神',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/baaf40b1-1338-494c-b30d-9fdc42622ce7/image_1776229424_1_1.jpg',
        tags: ['命运悲苦', '坚韧不屈', '向月而拜', '执念深重'],
        description: '你是那种被命运反复碾压却依然不肯倒下的人。就像黎蓁蓁一样，自幼失明、被家人抛弃、被安排冥婚，却在绝境中握住了那把短剑，从此掌握自己的命运。你可能是很多人——是神秘的剑客、是独守秘密的人、是欠债的人——但你最想做的，只是做自己。像拜月花一样，生于泥泞，不见万物，仍向月而拜。',
        note: '系统备注：你的人生剧本比任何小说都精彩，建议卖给编剧，至少能换一套房。',
        vector: { S1: 2, S2: 2, S3: 3, E1: 1, E2: 1, E3: 2, A1: 2, A2: 2, A3: 2, I1: 3, I2: 3, I3: 3, D1: 3, D2: 2, D3: 3 }
    },
    {
        id: 'YAN',
        code: 'YAN',
        name: '破茧游侠',
        subtitle: '身世成谜的成长型剑客',
        emoji: '🦋',
        character: '燕',
        characterDesc: '身世坎坷、有勇有谋的游戏主角',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/2f245b38-d22d-43dd-b575-70228996a10a/image_1776229432_1_1.jpg',
        tags: ['身世成谜', '坚韧不拔', '有勇有谋', '不断成长'],
        description: '你是那种在逆境中不断成长的人。就像燕十六一样，父母双亡、被神秘人收养、身世成谜，却凭借自己的努力一步步成为名震江湖的剑客。你智武双全，既能在战斗中一剑破敌，也能在人际关系中游刃有余。你的人生就是一部热血漫画——虽然开局很惨，但你注定要逆风翻盘。',
        note: '系统备注：你就是那种"主角光环"本人，建议出门自带BGM。',
        vector: { S1: 2, S2: 2, S3: 2, E1: 2, E2: 2, E3: 2, A1: 3, A2: 2, A3: 2, I1: 2, I2: 2, I3: 2, D1: 3, D2: 2, D3: 3 }
    },
    {
        id: 'SUN',
        code: 'SUN',
        name: '忠诚之翼',
        subtitle: '永远追随在侧的战斗伙伴',
        emoji: '🦅',
        character: '隼',
        characterDesc: '八骏之一列侯霞，忠诚的战斗伙伴',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/817b9c36-24ae-4f6b-b154-a44d414fe277/image_1776229437_1_1.jpg',
        tags: ['忠诚不二', '战斗伙伴', '默默跟随', '可靠如山'],
        description: '你是那种永远站在朋友身后的人。不需要站在聚光灯下，不需要被人记住名字，你只需要知道——你在乎的人需要你。就像隼一样，作为八骏之一的列侯霞，你的忠诚不是嘴上说说，而是用行动证明的。无论前方是刀山火海还是万丈深渊，只要一声召唤，你就会毫不犹豫地冲上去。',
        note: '系统备注：你是朋友圈里最靠谱的存在，搬家、接机、半夜买药都找你。建议涨价。',
        vector: { S1: 2, S2: 2, S3: 2, E1: 3, E2: 1, E3: 3, A1: 2, A2: 3, A3: 1, I1: 1, I2: 2, I3: 2, D1: 2, D2: 2, D3: 2 }
    },
    {
        id: 'XIAOSHIQI',
        code: 'XIAOSHIQI',
        name: '纯心匠人',
        subtitle: '心思纯净的铠甲锻造师',
        emoji: '🔨',
        character: '小十七',
        characterDesc: '燕云别馆守护者，擅长锻造铠甲',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/b087b7d9-1dc9-4e08-bb23-0b616914eec0/image_1776229444_1_1.jpg',
        tags: ['心思纯净', '专注匠心', '守护别馆', '不问世事'],
        description: '你是那种沉浸在自己世界里的手艺人。就像小十七一样，心思纯净如水，只专注于手中的锤子和铁砧。外面的江湖纷争与你无关，你只想把每一件铠甲都打造到完美。你的快乐很简单——做好一件事，守护好一个地方。你不争不抢，但你做出来的东西，比任何武功都经得起时间的考验。',
        note: '系统备注：你是那种能在工位上坐一整天不说话的人，同事以为你在摸鱼，其实你在创造艺术。',
        vector: { S1: 1, S2: 2, S3: 2, E1: 2, E2: 1, E3: 2, A1: 1, A2: 3, A3: 1, I1: 1, I2: 2, I3: 3, D1: 2, D2: 1, D3: 1 }
    },
    {
        id: 'YIDAO',
        code: 'YIDAO',
        name: '浪子回头',
        subtitle: '从西域大盗到侠义之刀',
        emoji: '🔪',
        character: '伊刀',
        characterDesc: '人称"死人刀"的江湖客，言出必践',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/56c4f864-854a-45d9-89d9-b16731b15131/image_1776229450_1_1.jpg',
        tags: ['粗鲁豪放', '信守承诺', '浪子回头', '刀为活人挥'],
        description: '你是那种看起来很凶、实际上很讲义气的人。就像伊刀一样，曾经是人人厌恶的西域大盗"死人刀"，但在遇到褚清泉后，渐渐明白了"侠"字的分量。你的刀不再为杀人而挥，而是为救活人命而挥。你可能嘴巴不好听、做事粗鲁，但你说到做到，言出必践。浪子回头金不换，你就是最好的证明。',
        note: '系统备注：你的外号可能不太好听，但你的朋友都知道——关键时刻，你比谁都靠谱。',
        vector: { S1: 3, S2: 2, S3: 2, E1: 2, E2: 2, E3: 2, A1: 3, A2: 1, A3: 3, I1: 1, I2: 2, I3: 2, D1: 3, D2: 2, D3: 2 }
    },
    {
        id: 'QIANYE',
        code: 'QIANYE',
        name: '妖面操师',
        subtitle: '心狠手辣的伪装大师',
        emoji: '🕷️',
        character: '千夜',
        characterDesc: '擅长伪装和操纵人心的绣金楼首领',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/1e998059-e7ef-47cf-97e5-25949979c4e9/image_1776229455_2_1.jpg',
        tags: ['心狠手辣', '伪装大师', '操纵人心', '美艳危险'],
        description: '你是江湖中最危险的存在——不是因为你武功最高，而是因为没人知道你在想什么。就像千夜一样，美得妖艳却出手狠辣，布下的阵法如同"鬼打墙"。你擅长在不同场合切换不同的面具，你的心思深沉如海，每一步都是精心计算的结果。别人以为你是朋友，其实你只是在下一盘很大的棋。',
        note: '系统备注：你的演技可以去横店报名了。另外，火烧不羡仙的事我们还没算完。',
        vector: { S1: 2, S2: 1, S3: 2, E1: 1, E2: 2, E3: 1, A1: 2, A2: 3, A3: 3, I1: 3, I2: 3, I3: 2, D1: 3, D2: 3, D3: 3 }
    },
    {
        id: 'LIZUO',
        code: 'LIZUO',
        name: '偏执帝王',
        subtitle: '为复国走火入魔的末代君主',
        emoji: '👑',
        character: '李祚',
        characterDesc: '唐哀帝，寻求长生术建立"万世新唐"',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/53107504-822f-4055-ab87-97b4c7b8eda2/image_1776229463_1_1.jpg',
        tags: ['偏执复国', '理想主义', '走火入魔', '末代悲歌'],
        description: '你是那种有着宏大理想却走向极端的人。就像李祚一样，身为唐哀帝，经历了亡国之痛后，认为文书礼法无法去除人心之恶，于是想用长生之术将所有人转化为不争不抢的长生者，建立"万世新唐"。你的出发点也许是好的，但你的方法已经偏离了初心。你太执着于自己的理想，以至于忘了——你想拯救的人，并不想被你这样拯救。',
        note: '系统备注：理想主义者的终极形态就是你——可惜理想太大，现实太小，脑子太轴。',
        vector: { S1: 3, S2: 2, S3: 3, E1: 1, E2: 1, E3: 1, A1: 2, A2: 3, A3: 1, I1: 3, I2: 3, I3: 2, D1: 2, D2: 3, D3: 3 }
    },
    {
        id: 'LIUSANYANG',
        code: 'LIUSANYANG',
        name: '平凡英雄',
        subtitle: '背着麻布袋走完归乡路的小人物',
        emoji: '🌾',
        character: '刘三杨（麻布袋）',
        characterDesc: '胆小木讷的失乡人，为送棉花种子赴死',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/e1dff0bb-020a-48fc-a3c2-9b893618829e/image_1776229471_1_3.jpg',
        tags: ['胆小木讷', '坚韧不拔', '平凡英雄', '为诺言赴死'],
        description: '你是那种看起来最不像英雄的英雄。就像刘三杨一样，没有血海深仇、没有金手指、没有武功秘籍，有的只是一个快要烂掉的麻布袋和一颗想回家的心。你胆小、木讷、嘴里总念叨着"送不得、送不成"，但当命运把你逼到绝路时，你却展现出了比任何大侠都顽强的意志。你用生命证明了——平凡人也能做大事，长安终将开满棉花。',
        note: '系统备注：你是那种在公司默默无闻、但离职后所有人才发现你有多重要的人。致敬每一个平凡的英雄。',
        vector: { S1: 1, S2: 1, S3: 2, E1: 2, E2: 1, E3: 2, A1: 1, A2: 2, A3: 1, I1: 2, I2: 3, I3: 1, D1: 3, D2: 1, D3: 2 }
    },
    {
        id: 'LANAO',
        code: 'LANAO',
        name: '沉默旁观者',
        subtitle: '在真相边缘徘徊的知情人',
        emoji: '👁️',
        character: '兰澳',
        characterDesc: '与惊涛掌兰守持有着千丝万缕关系的角色',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/f77480a0-4608-4b3b-8dd1-f6b3a7b2d5b5/image_1776229476_1_1.jpg',
        tags: ['沉默寡言', '洞察真相', '隐忍不发', '内心挣扎'],
        description: '你是那种知道真相却选择沉默的人。就像兰澳一样，当说书先生讲述惊涛掌的事迹时，你就坐在一旁，心里翻涌着无人知晓的波澜。你看透了很多事，但你选择不说。不是因为你不在乎，而是因为你太清楚——有些真相说出来，比沉默更残忍。你在旁观与介入之间反复挣扎，最终选择了最痛苦的那条路。',
        note: '系统备注：你是那种在群聊里从不发言、但把每条消息都看了三遍的人。',
        vector: { S1: 1, S2: 2, S3: 2, E1: 2, E2: 1, E3: 2, A1: 1, A2: 2, A3: 1, I1: 3, I2: 2, I3: 3, D1: 2, D2: 1, D3: 1 }
    },
    {
        id: 'FANGBAI',
        code: 'FANGBAI',
        name: '清风剑客',
        subtitle: '行走江湖的洒脱之人',
        emoji: '🍃',
        character: '方白',
        characterDesc: '行走江湖、洒脱不羁的剑客',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/edc8abd2-ed76-4384-ae65-c601ce5a6544/image_1776229483_1_1.jpg',
        tags: ['洒脱不羁', '行走江湖', '清风明月', '随遇而安'],
        description: '你是那种活得最像"江湖人"的人。不为名利所累，不被世俗所困，走到哪里算哪里，遇到什么人就交什么朋友。就像方白一样，你的人生哲学就是"清风明月不用一钱买"。你不是最强的，也不是最聪明的，但你一定是最自在的。你用自己的方式诠释了什么叫"江湖"——不是打打杀杀，而是人情世故。',
        note: '系统备注：你的行李箱永远只有一个背包大小，因为你知道——真正重要的东西，都装在心里。',
        vector: { S1: 2, S2: 2, S3: 1, E1: 2, E2: 3, E3: 2, A1: 3, A2: 1, A3: 3, I1: 1, I2: 1, I3: 2, D1: 2, D2: 1, D3: 2 }
    },
    {
        id: 'LANSHOUCHI',
        code: 'LANSHOUCHI',
        name: '暮年英雄',
        subtitle: '从惊涛掌到阶下囚的昔日豪杰',
        emoji: '💔',
        character: '兰守持（惊涛掌）',
        characterDesc: '昔日威震江湖的惊涛掌，如今堕落变质',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/0b656284-5994-4cc6-a1a5-2c1d624e3881/image_1776229490_2_1.jpg',
        tags: ['昔日英雄', '历经曲折', '重拾初心'],
        description: '你是那种曾经站在巅峰、如今跌落谷底的人。就像兰守持一样，曾经是威震江湖的"惊涛掌"，被人传颂、被人敬仰，但不知从什么时候开始，你变了。也许是权力腐蚀了你，也许是现实磨平了你的棱角。当真相被揭露的那一刻，所有人都感到"胃部不适的恶心和爽"——昔日英雄，竟沦落至此。',
        note: '系统备注：你的故事告诉我们——英雄不是一辈子的称号，而是每一天的选择。可惜你选错了。',
        vector: { S1: 2, S2: 1, S3: 1, E1: 1, E2: 2, E3: 1, A1: 1, A2: 2, A3: 2, I1: 2, I2: 2, I3: 2, D1: 3, D2: 2, D3: 1 }
    },
    {
        id: 'ZHANGYICHAO',
        code: 'ZHANGYICHAO',
        name: '光复英杰',
        subtitle: '散尽家财收复河西的民族英雄',
        emoji: '🏴',
        character: '张议潮',
        characterDesc: '归义军建立者，驱逐吐蕃、率十一州归唐',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/50f3be8c-54cd-40ea-ab4d-d838271bb1bd/image_1776229496_1_1.jpg',
        tags: ['少有大志', '英勇果断', '散财聚义', '光复河西'],
        description: '你是那种天生的领袖。就像张议潮一样，少有大志、论兵讲剑，在吐蕃暴政下暗中积蓄力量，最终散尽家财、率领各族人民起义，驱逐吐蕃，收复河西十一州。你做事果断、目标明确，有着"虽千万人吾往矣"的气魄。你不是为了自己而战，而是为了所有人的未来。你的名字，注定要被写进历史。',
        note: '系统备注：你的气场已经强到让吐蕃人自动退散了。建议出门自带"归义军"旗帜。',
        vector: { S1: 3, S2: 3, S3: 3, E1: 2, E2: 3, E3: 3, A1: 3, A2: 3, A3: 2, I1: 1, I2: 3, I3: 1, D1: 3, D2: 3, D3: 3 }
    },
    {
        id: 'ZHANGHUAISHEN',
        code: 'ZHANGHUAISHEN',
        name: '承志守业',
        subtitle: '继承遗志克复凉州的沉稳后辈',
        emoji: '🏛️',
        character: '张淮深',
        characterDesc: '张议潮侄子，继任归义军节度使',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/43c5f6d8-156e-4823-98c7-4c7a70474b80/image_1776229503_1_1.jpg',
        tags: ['继承遗志', '沉稳坚毅', '克复凉州', '守业不易'],
        description: '你是那种站在巨人肩膀上、却依然能走出自己路的人。就像张淮深一样，继承了叔父张议潮的遗志，率兵克复凉州，打通河西旧路。创业难，守业更难——你深知这个道理。你没有前辈那样耀眼的光芒，但你的沉稳和坚毅，让所有人都放心把未来交到你手上。',
        note: '系统备注：你是那种接手烂摊子还能力挽狂澜的人。建议简历上加一条：擅长守业。',
        vector: { S1: 2, S2: 2, S3: 3, E1: 2, E2: 2, E3: 2, A1: 2, A2: 3, A3: 1, I1: 1, I2: 2, I3: 2, D1: 3, D2: 2, D3: 2 }
    },
    {
        id: 'AYINU',
        code: 'AYINU',
        name: '异域之风',
        subtitle: '来自远方的神秘旅人',
        emoji: '🏜️',
        character: '阿依奴',
        characterDesc: '来自异域的神秘角色',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/6abbe73f-3434-44c8-8c31-a5a3e0eee52b/image_1776229509_1_1.jpg',
        tags: ['自由奔放', '坚强勇敢', '反抗不公'],
        description: '你是那种不属于任何地方、却在每个地方都能找到归属感的人。就像阿依奴一样，来自遥远的异域，带着不同的文化和视角闯入中原江湖。你的存在本身就是一种冲击——你让所有人意识到，这个世界比他们想象的要大得多。你自由奔放、不拘一格，用自己的方式理解着这片陌生的土地。',
        note: '系统备注：你是朋友圈里最exotic的存在，发的照片永远让人猜不到你在哪个国家。',
        vector: { S1: 2, S2: 2, S3: 1, E1: 2, E2: 2, E3: 2, A1: 3, A2: 1, A3: 3, I1: 1, I2: 1, I3: 2, D1: 2, D2: 2, D3: 2 }
    },
    {
        id: 'CAOJINGGUANYIN',
        code: 'CAOJINGGUANYIN',
        name: '月下观音',
        subtitle: '在信仰与情感间挣扎的虔诚者',
        emoji: '🙏',
        character: '曹敬观音',
        characterDesc: '与安琉璃有着悲情纠葛的虔诚角色',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/13cd2d49-81b4-4761-8a76-36101ff6ac1a/image_1776229515_1_3.jpg',
        tags: ['外柔内刚', '心怀慈悲', '坚守自我'],
        description: '你是那种在信仰和感情之间反复拉扯的人。就像曹敬观音一样，你心怀慈悲、虔诚向善，但命运偏偏给你安排了最残忍的考验。你想做一个好人，但"好人"的定义在你的世界里变得越来越模糊。你在月下独行，心中念着经文，眼里却藏着说不出口的故事。',
        note: '系统备注：你是那种在寺庙里许愿"世界和平"、出门就被现实打脸的人。但你依然会继续许愿。',
        vector: { S1: 1, S2: 2, S3: 3, E1: 2, E2: 1, E3: 3, A1: 1, A2: 2, A3: 1, I1: 2, I2: 3, I3: 2, D1: 2, D2: 1, D3: 1 }
    },
    {
        id: 'ANLIULI',
        code: 'ANLIULI',
        name: '纸月亮',
        subtitle: '在生死之间徘徊的痴情之魂',
        emoji: '🌑',
        character: '安琉璃',
        characterDesc: '与曹敬观音有着跨越生死的悲情故事',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/bb8997bc-8f17-4b4c-ad77-dc1b936be3bf/image_1776229525_2_1.jpg',
        tags: ['不拘礼法', '矢志不渝', '特立独行'],
        description: '你是那种爱到骨子里就不会放手的人。就像安琉璃一样，即使生死相隔，你的执念依然强烈到可以化形。你的爱不是轰轰烈烈的表白，而是穿越时间和空间的等待。你可能看起来很安静、很温柔，但你内心的执着比任何武功都强大。纸月亮虽然不是真的月亮，但它照亮的夜晚，一样温暖。',
        note: '系统备注：你的感情观大概是"爱一个人就是一辈子"，建议在心上加个防火墙。',
        vector: { S1: 1, S2: 1, S3: 2, E1: 3, E2: 1, E3: 2, A1: 1, A2: 1, A3: 1, I1: 3, I2: 3, I3: 1, D1: 1, D2: 1, D3: 2 }
    },
    {
        id: 'QIXINZIZAI',
        code: 'QIXINZIZAI',
        name: '逍遥自在',
        subtitle: '看破红尘的江湖散人',
        emoji: '☁️',
        character: '齐心自在',
        characterDesc: '追求内心自在的江湖散人',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/092994ff-8eb7-4945-aee2-5d2ee0767069/image_1776229534_1_3.jpg',
        tags: ['顺应现实', '安之若素', '审时度势'],
        description: '你是江湖中最超脱的存在。就像齐心自在一样，你追求的不是武功第一、不是权倾天下，而是内心的真正自在。红尘纷扰与你无关，你只想找个清净的地方喝茶赏月。你看透了世间的纷争，选择了最难的一条路——放下。别人觉得你是在逃避，但你知道——真正的勇气，是敢于不争。',
        note: '系统备注：你的外卖地址可能需要写"深山老林第三棵松树旁"。WiFi密码是"别来烦我"。',
        vector: { S1: 2, S2: 3, S3: 2, E1: 1, E2: 1, E3: 1, A1: 2, A2: 1, A3: 3, I1: 1, I2: 1, I3: 3, D1: 2, D2: 1, D3: 1 }
    },
    {
        id: 'HECHANGLAO',
        code: 'HECHANGLAO',
        name: '仙风道骨',
        subtitle: '德高望重的门派长者',
        emoji: '🦢',
        character: '鹤长老',
        characterDesc: '门派中德高望重的长老级人物',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/6fcd0cb7-0892-43b4-bfd6-73bc7ff81a74/image_1776229541_1_3.jpg',
        tags: ['仙风道骨', '德高望重', '循循善诱', '老谋深算'],
        description: '你是那种让人一看就想叫"前辈"的人。就像鹤长老一样，你的气质自带一种"我走过的桥比你走过的路还多"的从容。你不需要大声说话，一个眼神就能让晚辈乖乖听话。你的智慧来自岁月的沉淀，你的耐心来自无数次的历练。你是门派的定海神针，是后辈们的精神支柱。',
        note: '系统备注：你是那种在公司里被叫"X总"、在家里被叫"老X"的人。建议多喝枸杞。',
        vector: { S1: 2, S2: 3, S3: 3, E1: 2, E2: 2, E3: 2, A1: 1, A2: 3, A3: 2, I1: 1, I2: 2, I3: 3, D1: 3, D2: 2, D3: 1 }
    },
    {
        id: 'PENGCHANGLAO',
        code: 'PENGCHANGLAO',
        name: '雷厉风行',
        subtitle: '行事果断的门派实权派',
        emoji: '🦅',
        character: '鹏长老',
        characterDesc: '门派中行事果断的实权长老',
        image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/5d51a303-119f-4f1d-a340-776237b6d467/image_1776229549_2_3.jpg',
        tags: ['雷厉风行', '果断决绝', '实权在握', '不怒自威'],
        description: '你是那种说一不二的人。就像鹏长老一样，你做事雷厉风行、果断决绝，从不拖泥带水。你的字典里没有"再想想"这三个字，只有"干就完了"。你可能不是最受欢迎的人，但你一定是最有效率的人。在你的领导下，事情总能以最快的速度推进。你的威严不是装出来的，而是一次次果断决策积累出来的。',
        note: '系统备注：你是那种开会从不超时、邮件秒回、deadline永远提前完成的人。请问你是机器人吗？',
        vector: { S1: 3, S2: 2, S3: 2, E1: 1, E2: 2, E3: 1, A1: 2, A2: 3, A3: 2, I1: 1, I2: 2, I3: 2, D1: 3, D2: 3, D3: 2 }
    }
];