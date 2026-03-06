// 人体器官百科知识库
// 包含详细的解剖学、生理学信息和健康指导

const OrganEncyclopedia = {
  brain: {
    id: 'brain',
    name: '大脑',
    scientificName: 'Encephalon',
    position: '颅腔内',
    weight: '成人约 1.3-1.4 千克',
    size: '长约 17cm，宽约 14cm，高约 13cm',
    description: '大脑是人体的控制中心，负责处理感觉信息、控制运动、思考、记忆、情感和认知功能。',
    detailedFunctions: [
      '认知功能：思考、判断、决策、问题解决',
      '感觉处理：接收和解释来自感官的信息',
      '运动控制：规划和执行 voluntary movements',
      '记忆功能：短期记忆、长期记忆、工作记忆',
      '情绪调节：产生和调节情绪反应',
      '语言功能：语言理解、语言表达',
      '意识状态：维持清醒、睡眠周期调节',
      '自主神经调节：控制心率、呼吸、消化等'
    ],
    structure: {
      parts: [
        {
          name: '大脑皮层',
          description: '大脑外层的灰质，负责高级认知功能',
          areas: ['额叶', '顶叶', '颞叶', '枕叶']
        },
        {
          name: '边缘系统',
          description: '情绪和记忆的中枢',
          components: ['海马体', '杏仁核', '下丘脑', '扣带回']
        },
        {
          name: '基底节',
          description: '协调运动和习惯形成',
          components: ['尾状核', '壳核', '苍白球']
        },
        {
          name: '脑干',
          description: '连接大脑和脊髓，控制基本生命功能',
          components: ['中脑', '脑桥', '延髓']
        }
      ]
    },
    bloodSupply: {
      arteries: ['颈内动脉', '椎动脉', '大脑前动脉', '大脑中动脉', '大脑后动脉'],
      veins: ['颈内静脉', '大脑静脉窦'],
      bloodFlow: '每分钟约 750ml，占心输出量的 15%'
    },
    healthMetrics: {
      normalValues: {
        intracranialPressure: '7-15 mmHg',
        cerebralBloodFlow: '50-60 ml/100g/min',
        glucoseConsumption: '5.6mg/100g/min'
      }
    },
    commonDiseases: [
      {
        name: '阿尔茨海默病',
        symptoms: ['记忆力减退', '认知功能下降', '行为改变'],
        prevention: '保持脑力活动、健康饮食、规律运动、社交活动',
        treatment: '药物治疗、认知训练、生活干预'
      },
      {
        name: '帕金森病',
        symptoms: ['震颤', '肌肉僵硬', '运动迟缓', '平衡障碍'],
        prevention: '避免接触毒素、规律运动、健康饮食',
        treatment: '药物治疗、深部脑刺激、康复训练'
      },
      {
        name: '脑卒中',
        symptoms: ['突然面部歪斜', '肢体无力', '言语不清', '视力障碍'],
        prevention: '控制血压、戒烟限酒、健康饮食、规律运动',
        treatment: '溶栓治疗、抗血小板治疗、康复训练'
      },
      {
        name: '偏头痛',
        symptoms: ['剧烈头痛', '恶心呕吐', '对光敏感', '视觉先兆'],
        prevention: '避免诱因、规律作息、压力管理',
        treatment: '止痛药、预防性药物、生活方式调整'
      },
      {
        name: '癫痫',
        symptoms: ['意识丧失', '抽搐', '感觉异常', '行为异常'],
        prevention: '避免脑损伤、控制发热、规律服药',
        treatment: '抗癫痫药物、手术、生酮饮食'
      }
    ],
    healthTips: [
      '保证充足睡眠（7-9 小时），促进大脑修复和记忆巩固',
      '保持脑力活动，如阅读、下棋、学习新技能',
      '规律有氧运动，增加脑部血液供应',
      '摄入富含 Omega-3 的食物，如深海鱼类',
      '保持社交活动，刺激大脑多个区域',
      '控制压力，练习冥想或深呼吸',
      '避免过度饮酒和吸烟',
      '保护头部，避免外伤'
    ],
    nutrients: [
      { name: 'DHA', source: '深海鱼类', function: '构成神经元细胞膜' },
      { name: '卵磷脂', source: '蛋黄、大豆', function: '合成神经递质' },
      { name: '维生素 B 族', source: '全谷物', function: '支持神经传导' },
      { name: '抗氧化剂', source: '浆果类', function: '保护神经元' },
      { name: '锌', source: '坚果、种子', function: '神经信号传递' }
    ],
    interestingFacts: [
      '大脑包含约 860 亿个神经元',
      '神经元之间的连接超过 100 万亿个',
      '大脑消耗身体总能量的 20%',
      '大脑没有痛觉感受器',
      '人类大脑的存储容量相当于 2.5 亿 GB'
    ]
  },

  heart: {
    id: 'heart',
    name: '心脏',
    scientificName: 'Cor',
    position: '胸腔中部偏左，两肺之间',
    weight: '成人约 250-350 克',
    size: '长约 12cm，宽约 9cm，厚约 6cm',
    description: '心脏是一个肌肉泵，负责将血液输送到全身各个组织和器官，维持生命活动。',
    detailedFunctions: [
      '泵血功能：将含氧血泵入体循环，将缺氧血泵入肺循环',
      '维持血压：通过收缩和舒张产生血压',
      '内分泌功能：分泌心房钠尿肽（ANP）等激素',
      '调节血流量：根据身体需求调节各器官血流量'
    ],
    structure: {
      chambers: [
        { name: '左心房', function: '接收来自肺静脉的含氧血' },
        { name: '左心室', function: '将含氧血泵入主动脉' },
        { name: '右心房', function: '接收来自体循环的缺氧血' },
        { name: '右心室', function: '将缺氧血泵入肺动脉' }
      ],
      valves: [
        { name: '二尖瓣', location: '左心房和左心室之间' },
        { name: '主动脉瓣', location: '左心室和主动脉之间' },
        { name: '三尖瓣', location: '右心房和右心室之间' },
        { name: '肺动脉瓣', location: '右心室和肺动脉之间' }
      ],
      layers: [
        { name: '心内膜', description: '心脏内层' },
        { name: '心肌层', description: '心脏中层，心肌组织' },
        { name: '心外膜', description: '心脏外层' }
      ]
    },
    bloodSupply: {
      arteries: ['左冠状动脉', '右冠状动脉'],
      veins: ['冠状窦', '心前静脉'],
      bloodFlow: '每分钟约 250ml'
    },
    healthMetrics: {
      normalValues: {
        heartRate: '60-100 次/分钟（静息）',
        bloodPressure: '<120/80 mmHg',
        ejectionFraction: '50-70%',
        cardiacOutput: '4-6 升/分钟'
      }
    },
    commonDiseases: [
      {
        name: '冠心病',
        symptoms: ['胸痛', '气短', '心悸', '疲劳'],
        prevention: '健康饮食、规律运动、戒烟、控制血压血脂',
        treatment: '药物治疗、支架植入、搭桥手术'
      },
      {
        name: '高血压',
        symptoms: ['头痛', '头晕', '视力模糊', '胸痛'],
        prevention: '低盐饮食、控制体重、规律运动、限酒',
        treatment: '降压药物、生活方式改变'
      },
      {
        name: '心力衰竭',
        symptoms: ['呼吸困难', '水肿', '疲劳', '心悸'],
        prevention: '控制心血管疾病风险因素',
        treatment: '药物治疗、器械治疗、心脏移植'
      },
      {
        name: '心律失常',
        symptoms: ['心悸', '心跳过快或过慢', '头晕', '晕厥'],
        prevention: '避免刺激物、管理压力、规律作息',
        treatment: '药物、射频消融、起搏器'
      },
      {
        name: '心肌炎',
        symptoms: ['胸痛', '心悸', '呼吸困难', '疲劳'],
        prevention: '预防病毒感染、避免过度劳累',
        treatment: '休息、药物治疗、支持治疗'
      }
    ],
    healthTips: [
      '每周至少 150 分钟中等强度有氧运动',
      '采用地中海饮食，多吃蔬菜水果全谷物',
      '控制盐摄入量（每日<5g）',
      '戒烟限酒',
      '保持健康体重（BMI 18.5-24）',
      '管理压力，保证充足睡眠',
      '定期体检，监测血压血脂血糖',
      '避免久坐，每小时起身活动'
    ],
    nutrients: [
      { name: '辅酶 Q10', source: '肉类、鱼类', function: '心肌能量代谢' },
      { name: 'Omega-3', source: '深海鱼', function: '降低炎症、调节心律' },
      { name: '镁', source: '坚果、绿叶蔬菜', function: '维持正常心律' },
      { name: '钾', source: '香蕉、土豆', function: '调节血压' },
      { name: '精氨酸', source: '坚果、种子', function: '扩张血管' }
    ],
    interestingFacts: [
      '心脏每天跳动约 10 万次',
      '心脏一生泵血约 2.5 亿升',
      '心脏有自己的 electrical system',
      '女性的心率通常比男性快',
      '心脏可以在体外继续跳动（如有足够氧气）'
    ]
  },

  lung: {
    id: 'lung',
    name: '肺',
    scientificName: 'Pulmo',
    position: '胸腔内，心脏两侧',
    weight: '成人约 1000-1200 克（双肺）',
    size: '右肺长约 23cm，左肺长约 20cm',
    description: '肺是呼吸系统的主要器官，负责气体交换，将氧气输送到血液中，同时排出二氧化碳。',
    detailedFunctions: [
      '气体交换：氧气从肺泡进入血液，二氧化碳从血液排出',
      '酸碱平衡：调节血液 pH 值',
      '过滤功能：过滤小血栓和空气泡',
      '内分泌功能：转化血管紧张素 I 为 II',
      '防御功能：黏液和纤毛清除异物'
    ],
    structure: {
      parts: [
        { name: '右肺', lobes: 3, description: '分为上、中、下三叶' },
        { name: '左肺', lobes: 2, description: '分为上、下两叶，有心切迹' }
      ],
      airways: [
        '气管',
        '主支气管',
        '叶支气管',
        '段支气管',
        '细支气管',
        '终末细支气管',
        '呼吸性细支气管',
        '肺泡管',
        '肺泡囊',
        '肺泡'
      ],
      volumes: {
        tidalVolume: '500ml（潮气量）',
        vitalCapacity: '3500-4500ml（肺活量）',
        totalCapacity: '5000-6000ml（肺总量）'
      }
    },
    bloodSupply: {
      arteries: ['肺动脉', '支气管动脉'],
      veins: ['肺静脉', '支气管静脉'],
      bloodFlow: '每分钟约 5 升（全部心输出量）'
    },
    healthMetrics: {
      normalValues: {
        respiratoryRate: '12-20 次/分钟（成人静息）',
        oxygenSaturation: '95-100%',
        FEV1: '>80% 预计值',
        FVC: '>80% 预计值'
      }
    },
    commonDiseases: [
      {
        name: '哮喘',
        symptoms: ['喘息', '气短', '胸闷', '咳嗽'],
        prevention: '避免过敏原、戒烟、预防感染',
        treatment: '吸入激素、支气管扩张剂、避免诱因'
      },
      {
        name: '慢性阻塞性肺疾病 (COPD)',
        symptoms: ['慢性咳嗽', '咳痰', '呼吸困难'],
        prevention: '戒烟、避免有害气体和颗粒',
        treatment: '支气管扩张剂、激素、氧疗、肺康复'
      },
      {
        name: '肺炎',
        symptoms: ['发热', '咳嗽', '胸痛', '呼吸困难'],
        prevention: '接种疫苗、增强免疫力、戒烟',
        treatment: '抗生素、抗病毒药物、支持治疗'
      },
      {
        name: '肺癌',
        symptoms: ['持续咳嗽', '咯血', '胸痛', '体重下降'],
        prevention: '戒烟、避免二手烟、减少职业暴露',
        treatment: '手术、放疗、化疗、靶向治疗、免疫治疗'
      },
      {
        name: '肺结核',
        symptoms: ['慢性咳嗽', '咯血', '低热', '盗汗', '消瘦'],
        prevention: '接种卡介苗、避免接触患者',
        treatment: '抗结核药物联合治疗（6-9 个月）'
      }
    ],
    healthTips: [
      '戒烟并避免二手烟',
      '规律有氧运动，增强肺功能',
      '练习深呼吸和腹式呼吸',
      '保持室内空气清新，使用空气净化器',
      '接种流感疫苗和肺炎疫苗',
      '避免接触有害气体和粉尘',
      '保持正确姿势，有利于肺扩张',
      '多喝水，稀释呼吸道分泌物'
    ],
    nutrients: [
      { name: '维生素 C', source: '柑橘类', function: '抗氧化，保护肺组织' },
      { name: '维生素 D', source: '阳光、鱼类', function: '增强免疫力' },
      { name: 'Omega-3', source: '深海鱼', function: '减轻炎症' },
      { name: 'β-胡萝卜素', source: '胡萝卜', function: '保护呼吸道黏膜' },
      { name: '硒', source: '巴西坚果', function: '抗氧化' }
    ],
    interestingFacts: [
      '肺泡总面积约 70 平方米（相当于一个网球场）',
      '每天呼吸约 2 万次',
      '左肺比右肺小，为心脏腾出空间',
      '肺是唯一能浮在水面上的内脏器官',
      '城市居民每天吸入数百万个颗粒物'
    ]
  },

  liver: {
    id: 'liver',
    name: '肝脏',
    scientificName: 'Hepar',
    position: '腹腔右上部，膈肌下方',
    weight: '成人约 1.2-1.5 千克',
    size: '长约 28cm，宽约 15cm，厚约 7cm',
    description: '肝脏是人体最大的内脏器官，执行 500 多种功能，包括代谢、解毒、储存糖原、分泌胆汁等。',
    detailedFunctions: [
      '代谢功能：碳水化合物、脂肪、蛋白质代谢',
      '解毒功能：分解毒素、药物、酒精',
      '合成功能：合成血浆蛋白、凝血因子、胆固醇',
      '储存功能：储存糖原、维生素、矿物质',
      '分泌胆汁：帮助脂肪消化吸收',
      '免疫功能：Kupffer 细胞清除病原体',
      '调节功能：调节血糖、血脂、激素'
    ],
    structure: {
      lobes: [
        { name: '左叶', description: '较小' },
        { name: '右叶', description: '较大' },
        { name: '尾状叶', description: '位于后方' },
        { name: '方叶', description: '位于下方' }
      ],
      functionalUnits: {
        name: '肝小叶',
        description: '六边形结构，中央有中央静脉',
        components: ['肝细胞索', '肝血窦', '胆小管']
      },
      bloodSupply: {
        hepaticArtery: '提供 25% 血液（含氧）',
        portalVein: '提供 75% 血液（含营养物质）',
        totalFlow: '每分钟约 1500ml'
      }
    },
    healthMetrics: {
      normalValues: {
        ALT: '7-56 U/L',
        AST: '10-40 U/L',
        bilirubin: '0.1-1.2 mg/dL',
        albumin: '3.5-5.0 g/dL'
      }
    },
    commonDiseases: [
      {
        name: '脂肪肝',
        symptoms: ['疲劳', '右上腹不适', '肝肿大'],
        prevention: '控制体重、健康饮食、规律运动、限酒',
        treatment: '减重、饮食控制、运动、药物治疗'
      },
      {
        name: '肝炎',
        symptoms: ['乏力', '食欲减退', '恶心', '黄疸', '尿色深'],
        prevention: '接种疫苗、避免血液接触、安全性行为',
        treatment: '抗病毒药物、保肝药物、休息'
      },
      {
        name: '肝硬化',
        symptoms: ['腹水', '黄疸', '食管静脉曲张', '肝性脑病'],
        prevention: '治疗肝炎、戒酒、避免肝毒性物质',
        treatment: '病因治疗、并发症处理、肝移植'
      },
      {
        name: '肝癌',
        symptoms: ['右上腹疼痛', '体重下降', '黄疸', '腹水'],
        prevention: '预防肝炎、戒酒、避免黄曲霉素',
        treatment: '手术、放疗、化疗、靶向治疗、肝移植'
      },
      {
        name: '胆结石',
        symptoms: ['右上腹绞痛', '恶心呕吐', '黄疸'],
        prevention: '健康饮食、控制体重、规律进食',
        treatment: '药物溶石、体外碎石、胆囊切除术'
      }
    ],
    healthTips: [
      '限制酒精摄入（男性<25g/天，女性<15g/天）',
      '保持健康体重，避免肥胖',
      '接种甲肝和乙肝疫苗',
      '避免滥用药物和保健品',
      '健康饮食，减少高脂肪高糖食物',
      '规律运动，每周至少 150 分钟',
      '避免接触有毒化学物质',
      '定期体检，监测肝功能'
    ],
    nutrients: [
      { name: '谷胱甘肽', source: '西兰花、牛油果', function: '强效抗氧化' },
      { name: '维生素 E', source: '坚果', function: '保护肝细胞' },
      { name: '硒', source: '巴西坚果', function: '抗氧化解毒' },
      { name: '奶蓟草素', source: '奶蓟草', function: '保护肝细胞膜' },
      { name: '胆碱', source: '鸡蛋', function: '脂肪代谢' }
    ],
    interestingFacts: [
      '肝脏是唯一能再生的内脏器官（切除 70% 后可再生）',
      '肝脏执行超过 500 种功能',
      '肝脏每天产生约 1 升胆汁',
      '肝脏储存人体约 25% 的糖原',
      '胎儿时期肝脏是主要的造血器官'
    ]
  },

  stomach: {
    id: 'stomach',
    name: '胃',
    scientificName: 'Gaster',
    position: '腹腔左上部，膈肌下方',
    weight: '成人约 150-200 克（空胃）',
    size: '长约 25cm，宽约 10cm',
    description: '胃是消化道的重要器官，负责储存和初步消化食物，分泌胃酸和消化酶。',
    detailedFunctions: [
      '储存食物：可扩张容纳 1.5-2 升食物',
      '机械消化：通过蠕动搅拌和研磨食物',
      '化学消化：分泌胃酸和胃蛋白酶',
      '杀菌功能：胃酸杀死大部分细菌',
      '分泌内因子：帮助维生素 B12 吸收',
      '控制排空：调节食糜进入小肠的速度'
    ],
    structure: {
      regions: [
        { name: '贲门', description: '连接食道' },
        { name: '胃底', description: '胃的上部' },
        { name: '胃体', description: '胃的主要部分' },
        { name: '幽门', description: '连接十二指肠' }
      ],
      layers: [
        { name: '黏膜层', description: '分泌胃液' },
        { name: '黏膜下层', description: '血管神经丰富' },
        { name: '肌层', description: '三层平滑肌' },
        { name: '浆膜层', description: '外层保护' }
      ],
      secretions: {
        gastricJuice: '每天分泌 1.5-2.5 升胃液',
        components: ['盐酸', '胃蛋白酶原', '黏液', '内因子']
      }
    },
    healthMetrics: {
      normalValues: {
        pH: '1.5-3.5（空腹）',
        gastricEmptying: '2-4 小时',
        acidOutput: '1-5 mEq/h（基础）'
      }
    },
    commonDiseases: [
      {
        name: '胃炎',
        symptoms: ['上腹痛', '恶心', '呕吐', '饱胀感'],
        prevention: '规律饮食、避免刺激性食物、戒烟限酒',
        treatment: '抑酸药、胃黏膜保护剂、根除幽门螺杆菌'
      },
      {
        name: '胃溃疡',
        symptoms: ['餐后痛', '反酸', '嗳气', '黑便'],
        prevention: '避免 NSAIDs、戒烟限酒、减压',
        treatment: '质子泵抑制剂、抗生素（如有 HP 感染）'
      },
      {
        name: '胃食管反流病',
        symptoms: ['烧心', '反酸', '胸痛', '吞咽困难'],
        prevention: '避免饱餐、睡前 3 小时不进食、抬高床头',
        treatment: '抑酸药、促动力药、生活方式改变'
      },
      {
        name: '胃癌',
        symptoms: ['上腹痛', '消瘦', '贫血', '黑便'],
        prevention: '治疗 HP 感染、少吃腌制食品、戒烟',
        treatment: '手术、化疗、放疗、靶向治疗'
      },
      {
        name: '功能性消化不良',
        symptoms: ['餐后饱胀', '早饱', '上腹痛', '上腹烧灼感'],
        prevention: '规律饮食、细嚼慢咽、避免油腻',
        treatment: '促动力药、抑酸药、消化酶'
      }
    ],
    healthTips: [
      '规律饮食，定时定量',
      '细嚼慢咽，每口咀嚼 20-30 次',
      '避免暴饮暴食',
      '少吃辛辣、油腻、过冷过热食物',
      '戒烟限酒',
      '避免空腹服用 NSAIDs 类药物',
      '保持心情愉快，避免压力过大',
      '睡前 3 小时不进食'
    ],
    nutrients: [
      { name: '维生素 U', source: '卷心菜', function: '保护胃黏膜' },
      { name: '锌', source: '牡蛎', function: '促进黏膜修复' },
      { name: '益生菌', source: '酸奶', function: '维持菌群平衡' },
      { name: '谷氨酰胺', source: '高蛋白食物', function: '肠黏膜营养' },
      { name: '芦荟', source: '芦荟汁', function: '舒缓胃部不适' }
    ],
    interestingFacts: [
      '胃每 3-4 天更新一次黏膜',
      '胃酸可以溶解金属',
      '胃的表面积展开约 50 平方米',
      '情绪直接影响胃的功能（\"肠脑轴\"）',
      '幽门螺杆菌是唯一能在胃酸中生存的细菌'
    ]
  },

  intestine: {
    id: 'intestine',
    name: '肠道',
    scientificName: 'Intestinum',
    position: '腹腔内',
    weight: '成人约 2-3 千克',
    size: '小肠长约 6 米，大肠长约 1.5 米',
    description: '肠道是消化和吸收的主要场所，包括小肠和大肠，负责营养吸收和废物排出。',
    detailedFunctions: [
      '消化功能：完成食物的最终消化',
      '吸收功能：吸收营养物质、水分、电解质',
      '免疫功能：肠道免疫系统占全身 70%',
      '运动功能：通过蠕动推动内容物',
      '分泌功能：分泌消化酶和激素',
      '屏障功能：防止有害物质进入血液',
      '菌群功能：肠道菌群参与代谢和免疫'
    ],
    structure: {
      smallIntestine: {
        parts: ['十二指肠', '空肠', '回肠'],
        length: '约 6 米',
        diameter: '约 2.5-3cm',
        surfaceArea: '约 200 平方米（含绒毛）'
      },
      largeIntestine: {
        parts: ['盲肠', '结肠', '直肠', '肛管'],
        length: '约 1.5 米',
        diameter: '约 6cm',
        functions: ['吸收水分', '形成粪便', '储存粪便']
      },
      microstructure: {
        villi: '小肠绒毛，增加吸收面积',
        microvilli: '微绒毛，形成刷状缘',
        crypts: '肠腺，分泌肠液'
      }
    },
    healthMetrics: {
      normalValues: {
        transitTime: '24-72 小时',
        bowelMovements: '每天 3 次到每周 3 次（正常范围）',
        microbiotaCount: '约 10^14 个细菌'
      }
    },
    commonDiseases: [
      {
        name: '肠易激综合征',
        symptoms: ['腹痛', '腹胀', '腹泻或便秘'],
        prevention: '规律饮食、减压、避免诱发食物',
        treatment: '饮食调整、益生菌、解痉药'
      },
      {
        name: '炎症性肠病',
        symptoms: ['腹痛', '腹泻', '血便', '体重下降'],
        prevention: '尚无明确预防方法',
        treatment: '抗炎药、免疫抑制剂、生物制剂'
      },
      {
        name: '结直肠癌',
        symptoms: ['排便习惯改变', '血便', '腹痛', '消瘦'],
        prevention: '高纤维饮食、筛查、戒烟限酒',
        treatment: '手术、化疗、放疗、靶向治疗'
      },
      {
        name: '便秘',
        symptoms: ['排便困难', '排便次数减少', '粪便干硬'],
        prevention: '高纤维饮食、多喝水、规律运动',
        treatment: '饮食调整、泻药、益生菌'
      },
      {
        name: '腹泻',
        symptoms: ['排便次数增多', '粪便稀薄', '腹痛'],
        prevention: '注意饮食卫生、避免不洁食物',
        treatment: '补液、止泻药、益生菌'
      }
    ],
    healthTips: [
      '高纤维饮食（每天 25-30g 膳食纤维）',
      '充足饮水（每天 1.5-2 升）',
      '规律运动，促进肠道蠕动',
      '摄入益生菌和益生元',
      '建立规律的排便习惯',
      '避免久坐',
      '减少高脂肪、高糖食物',
      '管理压力，保持心情愉快'
    ],
    nutrients: [
      { name: '膳食纤维', source: '全谷物、蔬菜', function: '促进肠道蠕动' },
      { name: '益生菌', source: '酸奶、发酵食品', function: '维持菌群平衡' },
      { name: '益生元', source: '洋葱、大蒜', function: '促进益生菌生长' },
      { name: '谷氨酰胺', source: '高蛋白食物', function: '肠黏膜营养' },
      { name: 'Omega-3', source: '深海鱼', function: '减轻肠道炎症' }
    ],
    interestingFacts: [
      '肠道菌群数量是人体细胞的 10 倍',
      '肠道神经系统有 1 亿个神经元（\"第二大脑\"）',
      '95% 的血清素在肠道产生',
      '小肠绒毛使吸收面积增加 600 倍',
      '肠道每天分泌约 7 升消化液'
    ]
  },

  kidney: {
    id: 'kidney',
    name: '肾脏',
    scientificName: 'Ren',
    position: '腹腔后部，脊柱两侧',
    weight: '成人约 120-170 克（单侧）',
    size: '长约 11cm，宽约 6cm，厚约 4cm',
    description: '肾脏是泌尿系统的主要器官，负责过滤血液、排泄废物、调节水电解质平衡。',
    detailedFunctions: [
      '过滤功能：每天过滤约 180 升血液',
      '排泄功能：排出代谢废物和毒素',
      '调节功能：调节水、电解质、酸碱平衡',
      '内分泌功能：分泌肾素、促红细胞生成素',
      '活化维生素 D：促进钙吸收',
      '血压调节：通过肾素 - 血管紧张素系统'
    ],
    structure: {
      parts: [
        { name: '皮质', description: '外层，含肾小球' },
        { name: '髓质', description: '内层，含肾小管' },
        { name: '肾盂', description: '收集尿液' }
      ],
      nephron: {
        count: '每侧肾脏约 100 万个肾单位',
        components: ['肾小球', '肾小囊', '肾小管'],
        function: '尿液形成的基本单位'
      },
      bloodSupply: {
        arteries: ['肾动脉'],
        veins: ['肾静脉'],
        bloodFlow: '每分钟约 1200ml（心输出量的 20-25%）'
      }
    },
    healthMetrics: {
      normalValues: {
        GFR: '90-120 ml/min/1.73m²',
        creatinine: '0.6-1.2 mg/dL',
        BUN: '7-20 mg/dL',
        urineOutput: '1000-2000 ml/天'
      }
    },
    commonDiseases: [
      {
        name: '慢性肾病',
        symptoms: ['疲劳', '水肿', '尿量改变', '高血压'],
        prevention: '控制血糖血压、避免肾毒性药物',
        treatment: '病因治疗、透析、肾移植'
      },
      {
        name: '肾结石',
        symptoms: ['剧烈腰痛', '血尿', '恶心呕吐'],
        prevention: '多喝水、低盐饮食、控制草酸摄入',
        treatment: '排石药、体外碎石、手术'
      },
      {
        name: '肾小球肾炎',
        symptoms: ['血尿', '蛋白尿', '水肿', '高血压'],
        prevention: '预防感染、避免过敏原',
        treatment: '激素、免疫抑制剂、对症治疗'
      },
      {
        name: '尿路感染',
        symptoms: ['尿频', '尿急', '尿痛', '发热'],
        prevention: '多喝水、注意个人卫生',
        treatment: '抗生素、多饮水'
      },
      {
        name: '肾功能衰竭',
        symptoms: ['恶心', '呕吐', '意识障碍', '少尿'],
        prevention: '早期治疗肾病、避免肾毒性物质',
        treatment: '透析、肾移植'
      }
    ],
    healthTips: [
      '充足饮水（每天 1.5-2 升）',
      '低盐饮食（每日<5g）',
      '控制血糖和血压',
      '避免滥用止痛药和抗生素',
      '规律运动，保持健康体重',
      '戒烟限酒',
      '定期体检，监测肾功能',
      '避免憋尿'
    ],
    nutrients: [
      { name: '维生素 B6', source: '全谷物', function: '减少草酸钙结石' },
      { name: '镁', source: '坚果', function: '预防肾结石' },
      { name: '蔓越莓', source: '蔓越莓汁', function: '预防尿路感染' },
      { name: '欧米伽 -3', source: '深海鱼', function: '减轻肾脏炎症' },
      { name: '维生素 D', source: '阳光、鱼类', function: '促进钙吸收' }
    ],
    interestingFacts: [
      '肾脏每天过滤约 180 升血液',
      '肾脏包含约 200 万个肾单位',
      '肾脏可以捐献一个而正常生活',
      '肾脏产生促红细胞生成素',
      '古代人认为肾脏是情感器官'
    ]
  }
};

// 导出器官百科
if (typeof module !== 'undefined' && module.exports) {
  module.exports = OrganEncyclopedia;
}
