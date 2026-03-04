// 导入工具函数
import { debounce, showToast, createConfetti } from './utils.js';

// 模块化架构
const VitalityLab = {
    // 全局状态
    state: {
        currentTab: 'overview',
        isPrivacyMode: false,
        userData: {},
        chartCache: new Map(),
        currentLanguage: 'zh'
    },
    
    // 语言资源
    i18n: {
        zh: {
            overview: '总览',
            body: '人体',
            chemistry: '化学',
            digestion: '消化',
            recommend: '推荐',
            title: 'VitalityLab Pro | 生命健康科学实验室',
            subtitle: '探索生命科学的无限可能 · 从分子到系统的健康全景',
            badges: {
                evidence: '🌱 循证医学',
                molecular: '🔬 分子生物学',
                biochemistry: '⚗️ 生物化学',
                genomics: '🧬 基因组学'
            },
            bodyLab: '身体数据实验室',
            bodyLabSubtitle: '输入您的生理参数，开启深度健康分析',
            height: '身高 Height',
            weight: '体重 Weight',
            age: '年龄 Age',
            gender: '性别 Sex',
            waist: '腰围 Waist',
            goal: '目标 Goal',
            male: '👨 男性 Male',
            female: '👩 女性 Female',
            maintain: '⚖️ 保持 Maintain',
            lose: '📉 减脂 Fat Loss',
            gain: '📈 增肌 Muscle Gain',
            performance: '🏃 运动表现 Performance',
            analyze: '🚀 启动全面分析',
            bmi: 'BMI 指数',
            bmr: '基础代谢 kcal',
            bfp: '体脂率',
            idealWeight: '理想体重 kg',
            tdee: '每日消耗 kcal',
            mets: 'METs',
            bodyComposition: '📈 身体成分分析',
            riskAssessment: '🎯 健康风险评估',
            weightPrediction: '⚖️ 体重变化预测',
            nutritionAnalysis: '🍎 营养素需求分析',
            interactiveAnatomy: '交互式人体解剖',
            interactiveAnatomySubtitle: '点击身体部位探索生理机制',
            brain: '大脑与神经系统',
            brainDesc: '仅占体重2%，消耗20%能量。包含860亿神经元，突触连接超过100万亿。',
            heart: '心血管系统',
            heartDesc: '每天泵血7000升，一生跳动25-30亿次。冠状动脉供血，心肌细胞极少再生。',
            liver: '肝脏代谢中心',
            liverDesc: '执行500+种功能，包括糖原储存、尿素循环、胆汁合成、药物代谢。',
            muscle: '骨骼肌系统',
            muscleDesc: '600+块肌肉，占体重40%。含肌原纤维，通过肌丝滑动原理收缩。',
            periodicTable: '人体必需元素周期表',
            periodicTableSubtitle: '点击元素查看生化功能与食物来源',
            electrolyteBalance: '⚡ 电解质平衡',
            traceElements: '🧬 微量元素需求',
            atpSynthesis: '🔬 生物化学焦点：ATP合成',
            digestionTimeline: '消化系统时间轴',
            digestionTimelineSubtitle: '从口腔到肛门的奇妙旅程',
            mouth: '口腔 (0-5分钟)',
            mouthDesc: '唾液淀粉酶(ptyalin)开始分解淀粉为麦芽糖。咀嚼刺激胃泌素释放。',
            esophagus: '食道 (5-10秒)',
            esophagusDesc: '蠕动波(peristalsis)推送食团。下食道括约肌(LES)防止胃酸反流。',
            stomach: '胃 (2-4小时)',
            stomachDesc: '胃蛋白酶原→胃蛋白酶(酸性环境激活)。胃脂酶分解短链脂肪。 intrinsic factor结合B₁₂。',
            smallIntestine: '小肠 (3-5小时)',
            smallIntestineDesc: '主要消化场所。胰液(碳酸氢盐+酶)、胆汁乳化脂肪。绒毛增加表面积600倍。',
            largeIntestine: '大肠 (12-48小时)',
            largeIntestineDesc: '水分重吸收。肠道菌群发酵膳食纤维产生短链脂肪酸(SCFA)：乙酸、丙酸、丁酸。',
            personalizedRecommendations: '个性化健康推荐',
            personalizedRecommendationsSubtitle: '基于您的生物数据生成的专属方案',
            privacyMode: '隐私模式',
            localCalculation: '本地计算',
            footer: '基于 WHO、NIH、Harvard Medical School 最新研究',
            privacyNote: '🔒 隐私模式：所有计算在本地完成，数据不会上传服务器',
            ageUnit: '岁'
        },
        en: {
            overview: 'Overview',
            body: 'Body',
            chemistry: 'Chemistry',
            digestion: 'Digestion',
            recommend: 'Recommend',
            title: 'VitalityLab Pro | Life Health Science Laboratory',
            subtitle: 'Explore the infinite possibilities of life science · From molecules to system-wide health panorama',
            badges: {
                evidence: '🌱 Evidence-based Medicine',
                molecular: '🔬 Molecular Biology',
                biochemistry: '⚗️ Biochemistry',
                genomics: '🧬 Genomics'
            },
            bodyLab: 'Body Data Laboratory',
            bodyLabSubtitle: 'Enter your physiological parameters to start deep health analysis',
            height: 'Height',
            weight: 'Weight',
            age: 'Age',
            gender: 'Gender',
            waist: 'Waist',
            goal: 'Goal',
            male: '👨 Male',
            female: '👩 Female',
            maintain: '⚖️ Maintain',
            lose: '📉 Fat Loss',
            gain: '📈 Muscle Gain',
            performance: '🏃 Performance',
            analyze: '🚀 Start Comprehensive Analysis',
            bmi: 'BMI Index',
            bmr: 'BMR kcal',
            bfp: 'Body Fat %',
            idealWeight: 'Ideal Weight kg',
            tdee: 'Daily Expenditure kcal',
            mets: 'METs',
            bodyComposition: '📈 Body Composition Analysis',
            riskAssessment: '🎯 Health Risk Assessment',
            weightPrediction: '⚖️ Weight Change Prediction',
            nutritionAnalysis: '🍎 Nutrient Requirement Analysis',
            interactiveAnatomy: 'Interactive Human Anatomy',
            interactiveAnatomySubtitle: 'Click on body parts to explore physiological mechanisms',
            brain: 'Brain & Nervous System',
            brainDesc: 'Only 2% of body weight, consumes 20% of energy. Contains 86 billion neurons with over 100 trillion synaptic connections.',
            heart: 'Cardiovascular System',
            heartDesc: 'Pumps 7000 liters of blood daily, beats 2.5-3 billion times in a lifetime. Coronary artery blood supply, minimal cardiomyocyte regeneration.',
            liver: 'Liver Metabolic Center',
            liverDesc: 'Performs 500+ functions including glycogen storage, urea cycle, bile synthesis, and drug metabolism.',
            muscle: 'Skeletal Muscle System',
            muscleDesc: '600+ muscles, accounting for 40% of body weight. Contains myofibrils, contracts through sliding filament mechanism.',
            periodicTable: 'Human Essential Elements Periodic Table',
            periodicTableSubtitle: 'Click on elements to view biochemical functions and food sources',
            electrolyteBalance: '⚡ Electrolyte Balance',
            traceElements: '🧬 Trace Element Requirements',
            atpSynthesis: '🔬 Biochemical Focus: ATP Synthesis',
            digestionTimeline: 'Digestive System Timeline',
            digestionTimelineSubtitle: 'The amazing journey from mouth to anus',
            mouth: 'Mouth (0-5 minutes)',
            mouthDesc: 'Salivary amylase (ptyalin) begins breaking down starch into maltose. Chewing stimulates gastrin release.',
            esophagus: 'Esophagus (5-10 seconds)',
            esophagusDesc: 'Peristaltic waves push food bolus. Lower esophageal sphincter (LES) prevents acid reflux.',
            stomach: 'Stomach (2-4 hours)',
            stomachDesc: 'Pepsinogen → pepsin (activated in acidic environment). Gastric lipase breaks down short-chain fats. Intrinsic factor binds B₁₂.',
            smallIntestine: 'Small Intestine (3-5 hours)',
            smallIntestineDesc: 'Main digestion site. Pancreatic juice (bicarbonate + enzymes), bile emulsifies fats. Villi increase surface area by 600 times.',
            largeIntestine: 'Large Intestine (12-48 hours)',
            largeIntestineDesc: 'Water reabsorption. Gut microbiota ferment dietary fiber to produce short-chain fatty acids (SCFAs): acetate, propionate, butyrate.',
            personalizedRecommendations: 'Personalized Health Recommendations',
            personalizedRecommendationsSubtitle: 'Tailored plans generated based on your biological data',
            privacyMode: 'Privacy Mode',
            localCalculation: 'Local Calculation',
            footer: 'Based on latest research from WHO, NIH, Harvard Medical School',
            privacyNote: '🔒 Privacy Mode: All calculations completed locally, data never uploaded to servers',
            ageUnit: 'yrs'
        }
    },
    
    // 数据
    data: {
        quotes: [
            { text: "让食物成为你的药物，让药物成为你的食物。", author: "希波克拉底 (Hippocrates) | 医学之父" },
            { text: "生命在于运动，但过度运动产生自由基氧化损伤。", author: "现代运动医学共识" },
            { text: "肠道是人体的第二大脑，拥有1亿个神经元和复杂的神经网络。", author: "Michael Gershon | 神经胃肠病学先驱" },
            { text: "睡眠是大脑清除β-淀粉样蛋白的关键时间窗口。", author: "Maiken Nedergaard | 类淋巴系统发现者" },
            { text: "热量限制(CR)是目前唯一被证实可延长哺乳动物寿命的干预手段。", author: "Valter Longo | USC长寿研究所所长" },
            { text: "线粒体不仅是能量工厂，也是细胞凋亡的调控中心和炎症信号平台。", author: "Douglas Wallace | 线粒体医学之父" },
            { text: "蛋白质合成需要亮氨酸触发mTORC1信号通路，阈值剂量为3克。", author: "John Layman | 蛋白质代谢专家" },
            { text: "肥胖是一种慢性低度炎症状态，脂肪组织分泌IL-6、TNF-α等促炎细胞因子。", author: "Gökhan Hotamisligil | 哈佛公共卫生学院" },
            { text: "NAD⁺水平随年龄下降，补充NMN可激活Sirtuins长寿蛋白家族。", author: "David Sinclair | 哈佛大学衰老研究中心" },
            { text: "肠道菌群产生的短链脂肪酸丁酸是结肠细胞的主要能量来源。", author: "Jeffrey Gordon | 华盛顿大学微生物组研究中心" }
        ],
        
        elements: [
            { symbol: 'H', name: '氢', mass: '1.008', type: 'essential', func: '水分子组成，pH调节' },
            { symbol: 'C', name: '碳', mass: '12.01', type: 'essential', func: '有机分子骨架，能量储存' },
            { symbol: 'N', name: '氮', mass: '14.01', type: 'essential', func: '氨基酸、核酸组成' },
            { symbol: 'O', name: '氧', mass: '16.00', type: 'essential', func: '呼吸作用，能量产生' },
            { symbol: 'Na', name: '钠', mass: '22.99', type: 'electrolyte', func: '神经传导，渗透压调节' },
            { symbol: 'Mg', name: '镁', mass: '24.31', type: 'essential', func: '300+酶辅因子，ATP稳定' },
            { symbol: 'P', name: '磷', mass: '30.97', type: 'essential', func: 'ATP、DNA、骨骼组成' },
            { symbol: 'S', name: '硫', mass: '32.07', type: 'essential', func: '半胱氨酸、甲硫氨酸' },
            { symbol: 'Cl', name: '氯', mass: '35.45', type: 'electrolyte', func: '胃酸组成，渗透压' },
            { symbol: 'K', name: '钾', mass: '39.10', type: 'electrolyte', func: '神经肌肉功能，心律' },
            { symbol: 'Ca', name: '钙', mass: '40.08', type: 'essential', func: '骨骼、信号传导、肌肉' },
            { symbol: 'Fe', name: '铁', mass: '55.85', type: 'trace', func: '血红蛋白，氧运输' },
            { symbol: 'Cu', name: '铜', mass: '63.55', type: 'trace', func: '细胞色素氧化酶' },
            { symbol: 'Zn', name: '锌', mass: '65.38', type: 'trace', func: '碳酸酐酶，免疫功能' },
            { symbol: 'Se', name: '硒', mass: '78.96', type: 'trace', func: '谷胱甘肽过氧化物酶' },
            { symbol: 'I', name: '碘', mass: '126.9', type: 'trace', func: '甲状腺激素合成' }
        ],
        
        organDetails: {
            brain: {
                title: '🧠 大脑与神经系统',
                content: `
                    <h3 style="color: var(--primary); margin-bottom: 1rem;">神经生物学基础</h3>
                    <p style="margin-bottom: 1rem;"><strong>能量代谢：</strong>大脑每天消耗约120g葡萄糖，占全身20%能量。血脑屏障(BBB)严格调控物质进入。</p>
                    <p style="margin-bottom: 1rem;"><strong>神经递质：</strong>多巴胺(奖赏)、血清素(情绪)、GABA(抑制)、谷氨酸(兴奋)。</p>
                    <p style="margin-bottom: 1rem;"><strong>关键营养素：</strong>DHA(占大脑脂肪酸25%)、胆碱(乙酰胆碱前体)、抗氧化物(维生素E、C)。</p>
                    <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.875rem;">
                        脑血流: 750ml/min | 神经元: 860亿 | 突触: 100-500万亿
                    </div>
                `
            },
            heart: {
                title: '❤️ 心血管系统',
                content: `
                    <h3 style="color: var(--danger); margin-bottom: 1rem;">心脏生理学与生物化学</h3>
                    <p style="margin-bottom: 1rem;"><strong>心肌代谢：</strong>优先使用脂肪酸(60-90%)，其次葡萄糖和乳酸。线粒体占心肌细胞体积30%。</p>
                    <p style="margin-bottom: 1rem;"><strong>电生理：</strong>窦房结起搏→房室结延迟→希氏束→浦肯野纤维。动作电位平台期由Ca²⁺内流维持。</p>
                    <p style="margin-bottom: 1rem;"><strong>保护因子：</strong>Omega-3(EPA/DHA)降低心律失常风险，CoQ10支持线粒体功能，镁调节钙通道。</p>
                `
            },
            liver: {
                title: '🫁 肝脏代谢中心',
                content: `
                    <h3 style="color: var(--accent); margin-bottom: 1rem;">肝脏的500+功能</h3>
                    <p style="margin-bottom: 1rem;"><strong>糖代谢：</strong>糖原合成/分解、糖异生(GNG)。胰岛素抑制GNG，胰高血糖素促进。</p>
                    <p style="margin-bottom: 1rem;"><strong>尿素循环：</strong>将有毒氨转化为尿素，每循环消耗3ATP，产生1尿素。</p>
                    <p style="margin-bottom: 1rem;"><strong>解毒作用：</strong>细胞色素P450酶系(Phase I)，结合反应(Phase II：葡萄糖醛酸化、硫酸化、谷胱甘肽结合)。</p>
                    <p style="margin-bottom: 1rem;"><strong>胆汁合成：</strong>胆固醇→胆酸→结合牛磺酸/甘氨酸，乳化脂肪。</p>
                `
            },
            muscle: {
                title: '💪 骨骼肌系统',
                content: `
                    <h3 style="color: var(--secondary); margin-bottom: 1rem;">肌肉收缩的分子机制</h3>
                    <p style="margin-bottom: 1rem;"><strong>肌丝滑动理论：</strong>肌球蛋白头部结合肌动蛋白→构象变化→滑动→ATP结合释放。</p>
                    <p style="margin-bottom: 1rem;"><strong>能量系统：</strong>磷酸原系统(ATP-PCr, 0-10s)、糖酵解(10s-2min)、氧化磷酸化(>2min)。</p>
                    <p style="margin-bottom: 1rem;"><strong>蛋白质合成：</strong>mTORC1通路激活需要亮氨酸(>3g)、胰岛素、机械张力。</p>
                    <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                        <strong>肌纤维类型：</strong>Type I(慢肌, 氧化) | Type IIa(快肌氧化) | Type IIx(快肌糖酵解)
                    </div>
                `
            }
        }
    },
    
    // 计算模块
    calc: {
        bmi: (height, weight) => {
            const heightM = height / 100;
            return weight / (heightM * heightM);
        },
        
        bmr: (weight, height, age, gender) => {
            return (10 * weight) + (6.25 * height) - (5 * age) + (gender === 'male' ? 5 : -161);
        },
        
        tdee: (bmr, goal) => {
            const activityMultipliers = { maintain: 1.375, lose: 1.2, gain: 1.55, performance: 1.725 };
            return bmr * activityMultipliers[goal];
        },
        
        bfp: (bmi, age, gender) => {
            return (1.20 * bmi) + (0.23 * age) - (10.8 * (gender === 'male' ? 1 : 0)) - 5.4;
        },
        
        idealWeight: (height) => {
            const heightM = height / 100;
            const idealMin = 18.5 * heightM * heightM;
            const idealMax = 24 * heightM * heightM;
            return Math.round((idealMin + idealMax) / 2);
        },
        
        met: (bmr, weight) => {
            return bmr / (3.5 * weight);
        }
    }
};

// 全局变量（保持兼容性）
let currentTab = VitalityLab.state.currentTab;
let isPrivacyMode = VitalityLab.state.isPrivacyMode;
let userData = VitalityLab.state.userData;
let quotes = VitalityLab.data.quotes;
const elements = VitalityLab.data.elements;
const organDetails = VitalityLab.data.organDetails;
const chartCache = VitalityLab.state.chartCache;

// 粒子系统
function initParticles() {
    const container = document.getElementById('particles');
    const colors = ['#10b981', '#0ea5e9', '#f59e0b', '#ec4899', '#8b5cf6'];
    
    // 减少粒子数量，提高性能
    const particleCount = window.innerWidth < 768 ? 10 : 15;
    
    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.width = Math.random() * 8 + 4 + 'px';
        p.style.height = p.style.width;
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (15 + Math.random() * 10) + 's';
        p.style.animationDelay = Math.random() * 5 + 's';
        p.style.willChange = 'transform, opacity';
        container.appendChild(p);
    }
}

// 浮动表情
function initFloatingEmojis() {
    const container = document.getElementById('floatingEmojis');
    const emojis = ['🌱', '🧬', '⚡', '💊', '🍎'];
    
    // 减少表情数量
    const emojiCount = window.innerWidth < 768 ? 3 : 5;
    
    for (let i = 0; i < emojiCount; i++) {
        const el = document.createElement('div');
        el.className = 'floating-emoji';
        el.textContent = emojis[i % emojis.length];
        el.style.left = (Math.random() * 90 + 5) + '%';
        el.style.top = (Math.random() * 90 + 5) + '%';
        el.style.animationDelay = (i * 0.5) + 's';
        el.style.animationDuration = (6 + Math.random() * 4) + 's';
        el.style.willChange = 'transform, opacity';
        container.appendChild(el);
    }
}

// 元素周期表
function initPeriodicTable() {
    const container = document.getElementById('periodicTable');
    elements.forEach(el => {
        const div = document.createElement('div');
        div.className = `element element-${el.type}`;
        div.innerHTML = `
            <span class="element-symbol">${el.symbol}</span>
            <span class="element-name">${el.name}</span>
            <span class="element-mass">${el.mass}</span>
        `;
        div.onclick = () => showElementDetail(el);
        container.appendChild(div);
    });
}

// Canvas图表函数
function createPieChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    
    // 缓存键
    const cacheKey = canvasId + JSON.stringify(data) + rect.width + rect.height;
    
    // 检查缓存
    if (chartCache.has(cacheKey)) {
        const cachedCanvas = chartCache.get(cacheKey);
        ctx.clearRect(0, 0, rect.width, rect.height);
        ctx.drawImage(cachedCanvas, 0, 0, rect.width, rect.height);
        return;
    }
    
    // 调整画布大小
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    
    let total = data.reduce((a, b) => a + b.value, 0);
    let currentAngle = -Math.PI / 2;
    
    data.forEach(item => {
        const sliceAngle = (item.value / total) * 2 * Math.PI;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = item.color;
        ctx.fill();
        
        // 标签
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius + 20);
        const labelY = centerY + Math.sin(labelAngle) * (radius + 20);
        
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.label, labelX, labelY);
        ctx.fillText(item.value + '%', labelX, labelY + 14);
        
        currentAngle += sliceAngle;
    });
    
    // 缓存结果
    const cacheCanvas = document.createElement('canvas');
    cacheCanvas.width = rect.width;
    cacheCanvas.height = rect.height;
    const cacheCtx = cacheCanvas.getContext('2d');
    cacheCtx.drawImage(canvas, 0, 0, rect.width, rect.height);
    chartCache.set(cacheKey, cacheCanvas);
}

function createRadarChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    
    // 缓存键
    const cacheKey = canvasId + JSON.stringify(data) + rect.width + rect.height;
    
    // 检查缓存
    if (chartCache.has(cacheKey)) {
        const cachedCanvas = chartCache.get(cacheKey);
        ctx.clearRect(0, 0, rect.width, rect.height);
        ctx.drawImage(cachedCanvas, 0, 0, rect.width, rect.height);
        return;
    }
    
    // 调整画布大小
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    const sides = data.length;
    
    // 绘制网格
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        for (let j = 0; j < sides; j++) {
            const angle = (Math.PI * 2 * j) / sides - Math.PI / 2;
            const r = (radius * i) / 5;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = '#e5e7eb';
        ctx.stroke();
    }
    
    // 绘制数据
    ctx.beginPath();
    data.forEach((item, i) => {
        const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
        const r = (item.value / 100) * radius;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 标签
    data.forEach((item, i) => {
        const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
        const x = centerX + Math.cos(angle) * (radius + 25);
        const y = centerY + Math.sin(angle) * (radius + 25);
        ctx.fillStyle = '#374151';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.label, x, y);
    });
    
    // 缓存结果
    const cacheCanvas = document.createElement('canvas');
    cacheCanvas.width = rect.width;
    cacheCanvas.height = rect.height;
    const cacheCtx = cacheCanvas.getContext('2d');
    cacheCtx.drawImage(canvas, 0, 0, rect.width, rect.height);
    chartCache.set(cacheKey, cacheCanvas);
}

function createLineChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    
    // 缓存键
    const cacheKey = canvasId + JSON.stringify(data) + rect.width + rect.height;
    
    // 检查缓存
    if (chartCache.has(cacheKey)) {
        const cachedCanvas = chartCache.get(cacheKey);
        ctx.clearRect(0, 0, rect.width, rect.height);
        ctx.drawImage(cachedCanvas, 0, 0, rect.width, rect.height);
        return;
    }
    
    // 调整画布大小
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const padding = 40;
    const chartWidth = rect.width - padding * 2;
    const chartHeight = rect.height - padding * 2;
    
    const max = Math.max(...data.map(d => d.value));
    const min = Math.min(...data.map(d => d.value));
    const range = max - min;
    
    // 绘制线条
    ctx.beginPath();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    data.forEach((item, i) => {
        const x = padding + (i / (data.length - 1)) * chartWidth;
        const y = rect.height - padding - ((item.value - min) / range) * chartHeight;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // 绘制点
    data.forEach((item, i) => {
        const x = padding + (i / (data.length - 1)) * chartWidth;
        const y = rect.height - padding - ((item.value - min) / range) * chartHeight;
        
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 标签
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.value + 'kg', x, y - 10);
        ctx.fillStyle = '#6b7280';
        ctx.font = '10px sans-serif';
        ctx.fillText(item.label, x, rect.height - 20);
    });
    
    // 缓存结果
    const cacheCanvas = document.createElement('canvas');
    cacheCanvas.width = rect.width;
    cacheCanvas.height = rect.height;
    const cacheCtx = cacheCanvas.getContext('2d');
    cacheCtx.drawImage(canvas, 0, 0, rect.width, rect.height);
    chartCache.set(cacheKey, cacheCanvas);
}

function createBarChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    
    // 缓存键
    const cacheKey = canvasId + JSON.stringify(data) + rect.width + rect.height;
    
    // 检查缓存
    if (chartCache.has(cacheKey)) {
        const cachedCanvas = chartCache.get(cacheKey);
        ctx.clearRect(0, 0, rect.width, rect.height);
        ctx.drawImage(cachedCanvas, 0, 0, rect.width, rect.height);
        return;
    }
    
    // 调整画布大小
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const barWidth = (rect.width - 80) / data.length;
    const max = Math.max(...data.map(d => d.value));
    
    data.forEach((item, i) => {
        const height = (item.value / max) * (rect.height - 60);
        const x = 40 + i * barWidth + barWidth * 0.1;
        const y = rect.height - 30 - height;
        
        // 渐变
        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, item.color);
        gradient.addColorStop(1, item.color + '80');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth * 0.8, height);
        
        // 标签
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.value + 'g', x + barWidth * 0.4, y - 5);
        ctx.fillStyle = '#6b7280';
        ctx.font = '10px sans-serif';
        ctx.fillText(item.label, x + barWidth * 0.4, rect.height - 10);
    });
    
    // 缓存结果
    const cacheCanvas = document.createElement('canvas');
    cacheCanvas.width = rect.width;
    cacheCanvas.height = rect.height;
    const cacheCtx = cacheCanvas.getContext('2d');
    cacheCtx.drawImage(canvas, 0, 0, rect.width, rect.height);
    chartCache.set(cacheKey, cacheCanvas);
}

// 图表初始化
function initCharts() {
    // 身体成分饼图
    createPieChart('bodyChart', [
        { label: '水分', value: 60, color: '#3b82f6' },
        { label: '脂肪', value: 20, color: '#f59e0b' },
        { label: '蛋白质', value: 15, color: '#ef4444' },
        { label: '矿物质', value: 5, color: '#8b5cf6' }
    ]);

    // 风险雷达图
    createRadarChart('riskChart', [
        { label: '心血管', value: 80 },
        { label: '代谢', value: 70 },
        { label: '营养', value: 85 },
        { label: '运动', value: 60 },
        { label: '睡眠', value: 75 }
    ]);

    // 体重预测折线图
    createLineChart('weightChart', [
        { label: '当前', value: 70 },
        { label: '1月', value: 68 },
        { label: '3月', value: 65 },
        { label: '6月', value: 63 },
        { label: '1年', value: 62 }
    ]);

    // 营养素柱状图
    createBarChart('nutritionChart', [
        { label: '蛋白质', value: 100, color: '#ef4444' },
        { label: '碳水', value: 120, color: '#f59e0b' },
        { label: '脂肪', value: 65, color: '#3b82f6' },
        { label: '纤维', value: 30, color: '#10b981' }
    ]);

    // 电解质图
    createBarChart('electrolyteChart', [
        { label: 'Na⁺', value: 140, color: '#3b82f6' },
        { label: 'K⁺', value: 4.5, color: '#10b981' },
        { label: 'Ca²⁺', value: 2.5, color: '#f59e0b' },
        { label: 'Mg²⁺', value: 1.0, color: '#8b5cf6' }
    ]);

    // 微量元素
    createPieChart('traceChart', [
        { label: '铁', value: 40, color: '#ef4444' },
        { label: '锌', value: 25, color: '#f59e0b' },
        { label: '铜', value: 15, color: '#8b5cf6' },
        { label: '硒', value: 10, color: '#10b981' },
        { label: '碘', value: 10, color: '#0ea5e9' }
    ]);
}

// 人体交互
function initBodyInteractions() {
    const parts = document.querySelectorAll('.body-part');
    const info = document.getElementById('organInfo');
    
    parts.forEach(part => {
        part.addEventListener('click', (e) => {
            const organ = part.getAttribute('data-organ');
            showOrganDetail(organ);
            
            // 高亮效果
            parts.forEach(p => p.classList.remove('active'));
            part.classList.add('active');
        });
        
        part.addEventListener('mouseenter', (e) => {
            const organ = part.getAttribute('data-organ');
            const names = {
                brain: '大脑', heart: '心脏', lung: '肺部',
                liver: '肝脏', stomach: '胃部', intestine: '肠道',
                muscle: '肌肉', digestive: '消化系统'
            };
            
            info.style.display = 'block';
            info.style.left = e.pageX + 10 + 'px';
            info.style.top = e.pageY + 10 + 'px';
            document.getElementById('organTitle').textContent = names[organ] || organ;
            document.getElementById('organDesc').textContent = '点击查看详细生理机制';
        });
        
        part.addEventListener('mouseleave', () => {
            info.style.display = 'none';
        });
    });
}

// 标签切换
function switchTab(tab) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
    currentTab = tab;
    
    // 重新渲染图表
    if (tab === 'overview') setTimeout(initCharts, 100);
}

// 核心计算
function calculateAll(force = false) {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const waist = parseFloat(document.getElementById('waist').value) || 0;
    const goal = document.getElementById('goal').value;
    
    if (!height || !weight || !age) {
        if (force) showToast('请填写完整的身体数据 📋');
        return;
    }
    
    userData = { height, weight, age, gender, waist, goal };
    
    // BMI
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    
    // BMR (Mifflin-St Jeor)
    let bmr = (10 * weight) + (6.25 * height) - (5 * age) + (gender === 'male' ? 5 : -161);
    
    // TDEE
    const activityMultipliers = { maintain: 1.375, lose: 1.2, gain: 1.55, performance: 1.725 };
    const tdee = bmr * activityMultipliers[goal];
    
    // 体脂率 (Deurenberg)
    const bfp = (1.20 * bmi) + (0.23 * age) - (10.8 * (gender === 'male' ? 1 : 0)) - 5.4;
    
    // 理想体重
    const idealMin = 18.5 * heightM * heightM;
    const idealMax = 24 * heightM * heightM;
    
    // MET
    const met = bmr / (3.5 * weight);
    
    // 更新显示
    document.getElementById('bmiValue').textContent = bmi.toFixed(1);
    document.getElementById('bmrValue').textContent = Math.round(bmr);
    document.getElementById('bfpValue').textContent = bfp.toFixed(1) + '%';
    document.getElementById('idealWeight').textContent = Math.round((idealMin + idealMax) / 2);
    document.getElementById('tdeeValue').textContent = Math.round(tdee);
    document.getElementById('metValue').textContent = met.toFixed(1);
    
    // 状态标签
    updateStatus('bmiStatus', bmi, [
        { max: 18.5, text: '偏瘦', class: 'status-warning' },
        { max: 24, text: '正常', class: 'status-good' },
        { max: 28, text: '超重', class: 'status-warning' },
        { max: 99, text: '肥胖', class: 'status-danger' }
    ]);
    
    updateStatus('bfpStatus', bfp, [
        { max: gender === 'male' ? 10 : 20, text: '偏低', class: 'status-warning' },
        { max: gender === 'male' ? 20 : 30, text: '健康', class: 'status-good' },
        { max: gender === 'male' ? 25 : 35, text: '偏高', class: 'status-warning' },
        { max: 99, text: '过高', class: 'status-danger' }
    ]);
    
    // 生成推荐
    generateRecommendations(bmi, bfp, tdee, goal);
    
    // 检查彩蛋
    checkEasterEggs(bmi, weight, height);
    
    showToast('分析完成！🎉');
}

function updateStatus(elementId, value, ranges) {
    const el = document.getElementById(elementId);
    for (let range of ranges) {
        if (value <= range.max) {
            el.textContent = range.text;
            el.className = 'metric-status ' + range.class;
            return;
        }
    }
}

// 生成推荐
function generateRecommendations(bmi, bfp, tdee, goal) {
    const container = document.getElementById('recommendations');
    const recommendations = [];
    
    // 基于BMI
    if (bmi > 24) {
        recommendations.push({
            icon: '🏃',
            title: '有氧训练计划',
            desc: '每周150分钟中等强度有氧，或75分钟高强度。推荐心率区间：最大心率的60-70%。',
            tags: ['减脂', '心血管'],
            color: 'var(--gradient-3)'
        });
    }
    
    // 基于体脂
    if (bfp > (userData.gender === 'male' ? 20 : 30)) {
        recommendations.push({
            icon: '🏋️',
            title: '抗阻训练',
            desc: '每周2-3次力量训练，重点复合动作（深蹲、硬拉、卧推）。增加瘦体重可提高基础代谢5-10%。',
            tags: ['增肌', '代谢'],
            color: 'var(--gradient-1)'
        });
    }
    
    // 基于目标
    if (goal === 'lose') {
        recommendations.push({
            icon: '🥗',
            title: '热量赤字饮食',
            desc: `建议每日摄入 ${Math.round(tdee - 500)} kcal，创造500kcal赤字。蛋白质摄入 ${Math.round(userData.weight * 1.6)}g，防止肌肉流失。`,
            tags: ['蛋白质', '膳食纤维'],
            color: 'var(--gradient-4)'
        });
    } else if (goal === 'gain') {
        recommendations.push({
            icon: '🥩',
            title: '热量盈余策略',
            desc: `每日 ${Math.round(tdee + 300)} kcal，蛋白质 ${Math.round(userData.weight * 2)}g。训练后30分钟内补充碳水+蛋白质（3:1或4:1）。`,
            tags: ['蛋白质', '碳水'],
            color: 'var(--gradient-2)'
        });
    }
    
    // 通用建议
    recommendations.push({
        icon: '💧',
        title: '水合状态管理',
        desc: `每日饮水 ${Math.round(userData.weight * 35)}ml。运动时每15分钟补充150-200ml含电解质饮料。`,
        tags: ['水', '电解质'],
        color: 'linear-gradient(135deg, #0ea5e9, #06b6d4)'
    });
    
    recommendations.push({
        icon: '😴',
        title: '睡眠优化',
        desc: '保证7-9小时睡眠。深度睡眠期间生长激素分泌达峰值，促进组织修复。避免睡前蓝光暴露。',
        tags: ['褪黑素', '生长激素'],
        color: 'linear-gradient(135deg, #8b5cf6, #a855f7)'
    });
    
    // 渲染
    container.innerHTML = recommendations.map(rec => `
        <div class="rec-card" onclick="showRecDetail('${rec.title}')">
            <div class="rec-image" style="background: ${rec.color};">${rec.icon}</div>
            <div class="rec-content">
                <div class="rec-title">${rec.title}</div>
                <div class="rec-desc">${rec.desc}</div>
                <div class="rec-tags">
                    ${rec.tags.map(tag => `<span class="rec-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// 名言轮播
function startQuoteRotation() {
    let index = 0;
    const container = document.getElementById('quoteCarousel');
    
    setInterval(() => {
        index = (index + 1) % quotes.length;
        const quote = quotes[index];
        container.innerHTML = `
            <div class="quote-slide">
                <div class="quote-text">"${quote.text}"</div>
                <div class="quote-author">—— ${quote.author}</div>
            </div>
        `;
    }, 8000);
}

// 详情弹窗
function showOrganDetail(organ) {
    const detail = organDetails[organ];
    if (!detail) return;
    
    document.getElementById('modalBody').innerHTML = detail.content;
    document.getElementById('modal').classList.add('active');
}

function showElementDetail(el) {
    document.getElementById('modalBody').innerHTML = `
        <h2 style="color: var(--primary); margin-bottom: 1rem;">${el.symbol} - ${el.name}</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1rem;"><strong>原子量：</strong>${el.mass} g/mol</p>
        <p style="margin-bottom: 1rem;"><strong>生物功能：</strong>${el.func}</p>
        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">食物来源：</h4>
            <p style="font-size: 0.9rem; color: var(--text-light);">
                ${getElementSources(el.symbol)}
            </p>
        </div>
    `;
    document.getElementById('modal').classList.add('active');
}

function getElementSources(symbol) {
    const sources = {
        'Fe': '红肉、动物肝脏、菠菜、扁豆',
        'Zn': '牡蛎、牛肉、南瓜籽、腰果',
        'Ca': '乳制品、豆腐、深绿叶蔬菜、杏仁',
        'Mg': '黑巧克力、牛油果、坚果、全谷物',
        'Se': '巴西坚果、海鲜、鸡蛋、蘑菇',
        'I': '海带、紫菜、鱼类、碘盐'
    };
    return sources[symbol] || '广泛存在于各类食物中';
}

function showRecDetail(title) {
    showToast(`已保存 "${title}" 到您的健康计划 📌`);
}

function closeModal(e) {
    if (e.target === document.getElementById('modal')) {
        document.getElementById('modal').classList.remove('active');
    }
}

// 隐私模式
function togglePrivacy() {
    isPrivacyMode = !isPrivacyMode;
    document.getElementById('privacyToggle').classList.toggle('active', isPrivacyMode);
    
    if (isPrivacyMode) {
        showToast('🔒 隐私模式已开启 - 数据仅保存在本地');
        document.body.style.filter = 'grayscale(0.2)';
    } else {
        showToast('🔓 隐私模式已关闭');
        document.body.style.filter = '';
    }
}

// 彩蛋系统
function checkEasterEggs(bmi, weight, height) {
    const egg = document.getElementById('easterEgg');
    
    if (weight && height && !egg.classList.contains('visible')) {
        setTimeout(() => egg.classList.add('visible'), 2000);
    }
    
    if (Math.abs(bmi - 42) < 0.5) {
        showToast('🌌 生命、宇宙以及任何事情的终极答案！');
        document.body.style.animation = 'gradientBG 0.5s linear infinite';
        setTimeout(() => {
            document.body.style.animation = 'gradientBG 15s ease infinite';
        }, 3000);
    }
    
    if (height / weight > 2.4 && height / weight < 2.6) {
        showToast('✨ 黄金比例身材！φ = 1.618...');
        createConfetti();
    }
}

function triggerEasterEgg() {
    const facts = [
        "🧬 DNA每分钟旋转3000次，每秒复制1000个碱基对！",
        "⚡ 线粒体每年产生约10²⁰个ATP分子，总重量超过你的体重！",
        "🧠 大脑每天产生7万个想法，神经元连接长度达16万公里！",
        "❤️ 心脏一生泵血1.8亿升，足够装满3个奥运会游泳池！",
        "💪 骨骼肌共60亿条肌纤维，同时收缩可产生25吨力量！",
        "🦴 骨骼每10年完全更新，破骨细胞和成骨细胞持续重塑！",
        "🫁 肺泡表面积70-100㎡，相当于一个网球场！",
        "🧪 胃酸pH 1.5-3.5，可溶解金属（但胃黏液保护胃壁）！"
    ];
    
    showToast(facts[Math.floor(Math.random() * facts.length)]);
    createConfetti();
}

// 语言切换
function toggleLanguage() {
    const newLang = VitalityLab.state.currentLanguage === 'zh' ? 'en' : 'zh';
    VitalityLab.state.currentLanguage = newLang;
    
    // 更新页面标题
    document.title = VitalityLab.i18n[newLang].title;
    
    // 更新语言切换按钮
    document.getElementById('languageToggle').textContent = newLang === 'zh' ? 'EN' : '中文';
    
    // 更新所有带data-lang属性的元素
    document.querySelectorAll('[data-lang]').forEach(element => {
        const langKey = element.getAttribute('data-lang');
        const value = getI18nValue(langKey, newLang);
        if (value) {
            element.textContent = value;
        }
    });
    
    // 更新选择框选项
    updateSelectOptions(newLang);
    
    showToast(`语言已切换至 ${newLang === 'zh' ? '中文' : 'English'} 🔄`);
}

function getI18nValue(key, lang) {
    const keys = key.split('.');
    let value = VitalityLab.i18n[lang];
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

function updateSelectOptions(lang) {
    // 更新性别选择
    const genderSelect = document.getElementById('gender');
    if (genderSelect) {
        const options = genderSelect.options;
        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            const langKey = option.getAttribute('data-lang');
            if (langKey) {
                option.textContent = VitalityLab.i18n[lang][langKey];
            }
        }
    }
    
    // 更新目标选择
    const goalSelect = document.getElementById('goal');
    if (goalSelect) {
        const options = goalSelect.options;
        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            const langKey = option.getAttribute('data-lang');
            if (langKey) {
                option.textContent = VitalityLab.i18n[lang][langKey];
            }
        }
    }
}

// 初始化语言
function initLanguage() {
    // 设置初始语言
    const lang = VitalityLab.state.currentLanguage;
    document.title = VitalityLab.i18n[lang].title;
    document.getElementById('languageToggle').textContent = lang === 'zh' ? 'EN' : '中文';
    
    // 更新所有带data-lang属性的元素
    document.querySelectorAll('[data-lang]').forEach(element => {
        const langKey = element.getAttribute('data-lang');
        const value = getI18nValue(langKey, lang);
        if (value) {
            element.textContent = value;
        }
    });
    
    // 更新选择框选项
    updateSelectOptions(lang);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initFloatingEmojis();
    initPeriodicTable();
    initCharts();
    initBodyInteractions();
    startQuoteRotation();
    initLanguage();
    
    // 延迟显示动画
    setTimeout(() => {
        document.querySelectorAll('.card').forEach((card, i) => {
            setTimeout(() => card.style.opacity = '1', i * 100);
        });
    }, 500);
    
    // 绑定输入事件（带防抖）
    const debouncedCalculate = debounce(() => calculateAll(), 300);
    
    document.getElementById('height').addEventListener('input', debouncedCalculate);
    document.getElementById('weight').addEventListener('input', debouncedCalculate);
    document.getElementById('age').addEventListener('input', debouncedCalculate);
    document.getElementById('gender').addEventListener('change', debouncedCalculate);
    document.getElementById('waist').addEventListener('input', debouncedCalculate);
    document.getElementById('goal').addEventListener('change', debouncedCalculate);
});

// 响应式重绘
window.addEventListener('resize', () => {
    if (currentTab === 'overview') {
        setTimeout(initCharts, 100);
    }
});