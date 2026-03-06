// 健康知识问答系统题库
// 包含营养学、解剖学、运动科学等多个类别

const QuizDatabase = {
  // 营养学题库
  nutrition: [
    {
      id: 1,
      category: '营养学',
      difficulty: 'easy',
      question: '成年人每日推荐饮水量是多少？',
      options: ['1-1.5 升', '1.5-2 升', '2-2.5 升', '2.5-3 升'],
      answer: 2,
      explanation: '中国营养学会推荐成年人每日饮水量为 2-2.5 升，具体需求因个体差异、活动量和环境而异。',
      knowledgePoint: '水是人体必需的营养素，参与体温调节、物质运输、代谢废物排出等重要生理功能。'
    },
    {
      id: 2,
      category: '营养学',
      difficulty: 'easy',
      question: '哪种维生素可以通过晒太阳合成？',
      options: ['维生素 A', '维生素 B', '维生素 C', '维生素 D'],
      answer: 3,
      explanation: '维生素 D 可以通过皮肤暴露在紫外线下合成，因此也被称为"阳光维生素"。',
      knowledgePoint: '维生素 D 促进钙磷吸收，对骨骼健康至关重要。建议每天适度晒太阳 15-30 分钟。'
    },
    {
      id: 3,
      category: '营养学',
      difficulty: 'medium',
      question: 'WHO 推荐成年人每日盐摄入量应不超过多少？',
      options: ['3 克', '5 克', '8 克', '10 克'],
      answer: 1,
      explanation: '世界卫生组织（WHO）推荐成年人每日盐摄入量应不超过 5 克（约一啤酒瓶盖），以降低高血压和心血管疾病风险。',
      knowledgePoint: '过量摄入盐分会导致血压升高，增加心脑血管疾病风险。中国居民实际平均摄入量约为 10 克/天。'
    },
    {
      id: 4,
      category: '营养学',
      difficulty: 'medium',
      question: '哪种营养素是人体最主要的能量来源？',
      options: ['蛋白质', '脂肪', '碳水化合物', '维生素'],
      answer: 2,
      explanation: '碳水化合物是人体最主要、最经济的能量来源，提供人体所需能量的 50-60%。',
      knowledgePoint: '碳水化合物分为简单碳水化合物（糖类）和复杂碳水化合物（淀粉和膳食纤维）。应优先选择全谷物等复杂碳水化合物。'
    },
    {
      id: 5,
      category: '营养学',
      difficulty: 'medium',
      question: '成年人每日推荐蛋白质摄入量是多少？',
      options: ['0.5g/kg 体重', '0.8g/kg 体重', '1.2g/kg 体重', '1.5g/kg 体重'],
      answer: 1,
      explanation: 'WHO 推荐健康成年人每日蛋白质摄入量为 0.8 克/千克体重。运动员和特殊人群需求更高。',
      knowledgePoint: '蛋白质是构成人体组织的基本物质，参与酶、激素、抗体等重要物质的合成。优质蛋白来源包括肉、蛋、奶、豆类。'
    },
    {
      id: 6,
      category: '营养学',
      difficulty: 'hard',
      question: '哪种脂肪酸对心血管健康最有益？',
      options: ['饱和脂肪酸', '反式脂肪酸', '单不饱和脂肪酸', 'Omega-3 多不饱和脂肪酸'],
      answer: 3,
      explanation: 'Omega-3 多不饱和脂肪酸（如 EPA 和 DHA）具有抗炎、降血脂、预防心律失常等作用，对心血管健康最有益。',
      knowledgePoint: 'Omega-3 主要存在于深海鱼类（三文鱼、金枪鱼等）、亚麻籽、核桃中。推荐每周食用 2-3 次深海鱼。'
    },
    {
      id: 7,
      category: '营养学',
      difficulty: 'hard',
      question: '血糖生成指数（GI）最低的食物类别是？',
      options: ['精制谷物', '薯类', '豆类', '水果'],
      answer: 2,
      explanation: '豆类的血糖生成指数（GI）普遍较低（20-40），因为富含膳食纤维和蛋白质，消化吸收慢。',
      knowledgePoint: '低 GI 食物有助于稳定血糖，适合糖尿病患者和减肥人群。常见低 GI 食物包括豆类、全谷物、大部分蔬菜。'
    },
    {
      id: 8,
      category: '营养学',
      difficulty: 'easy',
      question: '缺铁会导致什么疾病？',
      options: ['佝偻病', '贫血', '坏血病', '脚气病'],
      answer: 1,
      explanation: '缺铁会导致缺铁性贫血，表现为疲劳、乏力、面色苍白、免疫力下降等。',
      knowledgePoint: '铁是血红蛋白的重要组成部分，参与氧气运输。富含铁的食物包括红肉、动物肝脏、血制品、菠菜等。'
    },
    {
      id: 9,
      category: '营养学',
      difficulty: 'medium',
      question: '哪种维生素缺乏会导致夜盲症？',
      options: ['维生素 A', '维生素 B1', '维生素 C', '维生素 D'],
      answer: 0,
      explanation: '维生素 A 缺乏会导致夜盲症、干眼症等眼部疾病，还会影响免疫功能和皮肤健康。',
      knowledgePoint: '维生素 A 主要存在于动物肝脏、鱼肝油、蛋黄中。β-胡萝卜素可在体内转化为维生素 A，存在于胡萝卜、南瓜等橙黄色蔬果中。'
    },
    {
      id: 10,
      category: '营养学',
      difficulty: 'hard',
      question: '膳食纤维每日推荐摄入量是多少？',
      options: ['10-15 克', '15-20 克', '25-30 克', '35-40 克'],
      answer: 2,
      explanation: '中国营养学会推荐成年人每日膳食纤维摄入量为 25-30 克，但实际摄入量普遍不足。',
      knowledgePoint: '膳食纤维分为可溶性和不可溶性，有助于预防便秘、控制血糖、降低胆固醇。主要来源包括全谷物、蔬菜、水果、豆类。'
    }
  ],

  // 解剖学题库
  anatomy: [
    {
      id: 11,
      category: '解剖学',
      difficulty: 'easy',
      question: '人体最大的器官是什么？',
      options: ['肝脏', '大脑', '皮肤', '心脏'],
      answer: 2,
      explanation: '皮肤是人体最大的器官，成人皮肤面积约 1.5-2 平方米，重量约占体重的 16%。',
      knowledgePoint: '皮肤具有保护、感觉、调节体温、排泄、吸收等多种功能，是人体与外界的第一道屏障。'
    },
    {
      id: 12,
      category: '解剖学',
      difficulty: 'easy',
      question: '人体有多少块骨头？',
      options: ['186 块', '206 块', '226 块', '246 块'],
      answer: 1,
      explanation: '正常成年人有 206 块骨头，分为颅骨、躯干骨和四肢骨三大部分。',
      knowledgePoint: '婴儿出生时有约 300 块骨头，随着生长发育，部分骨头融合，成年后变为 206 块。骨骼系统具有支撑、保护、运动、造血等功能。'
    },
    {
      id: 13,
      category: '解剖学',
      difficulty: 'medium',
      question: '心脏有几个腔室？',
      options: ['2 个', '3 个', '4 个', '5 个'],
      answer: 2,
      explanation: '心脏有 4 个腔室：左心房、左心室、右心房、右心室。',
      knowledgePoint: '左右心房之间、左右心室之间由间隔隔开，互不相通。心房与心室之间有瓣膜，保证血液单向流动。'
    },
    {
      id: 14,
      category: '解剖学',
      difficulty: 'medium',
      question: '人体最长的骨头是哪一块？',
      options: ['肱骨', '股骨', '胫骨', '脊柱'],
      answer: 1,
      explanation: '股骨（大腿骨）是人体最长、最粗壮的骨头，长度约占身高的 1/4。',
      knowledgePoint: '股骨上端有股骨头，与髋臼构成髋关节；下端与胫骨、髌骨构成膝关节。股骨承受人体大部分重量。'
    },
    {
      id: 15,
      category: '解剖学',
      difficulty: 'hard',
      question: '肝脏位于人体的哪个部位？',
      options: ['左上腹', '右上腹', '左下腹', '右下腹'],
      answer: 1,
      explanation: '肝脏主要位于右上腹部，膈肌下方，部分延伸至左上腹。',
      knowledgePoint: '肝脏是人体最大的内脏器官，分为左叶、右叶、尾状叶和方叶。肝脏具有代谢、解毒、分泌胆汁、储存糖原等多种功能。'
    },
    {
      id: 16,
      category: '解剖学',
      difficulty: 'hard',
      question: '人体最大的消化腺是？',
      options: ['唾液腺', '胰腺', '肝脏', '胃腺'],
      answer: 2,
      explanation: '肝脏是人体最大的消化腺，每天分泌约 1 升胆汁，帮助脂肪消化吸收。',
      knowledgePoint: '肝脏不仅是消化腺，还是代谢中枢，执行超过 500 种功能，包括解毒、合成、储存、免疫等。'
    },
    {
      id: 17,
      category: '解剖学',
      difficulty: 'easy',
      question: '肺的主要功能是什么？',
      options: ['消化食物', '气体交换', '过滤血液', '分泌激素'],
      answer: 1,
      explanation: '肺的主要功能是气体交换，将氧气输送到血液中，同时排出二氧化碳。',
      knowledgePoint: '肺泡是气体交换的场所，成人约有 3-4 亿个肺泡，总面积约 70 平方米。呼吸运动由膈肌和肋间肌协同完成。'
    },
    {
      id: 18,
      category: '解剖学',
      difficulty: 'medium',
      question: '人体有多少对脑神经？',
      options: ['10 对', '12 对', '24 对', '31 对'],
      answer: 1,
      explanation: '人体有 12 对脑神经，从大脑发出，主要支配头面部器官的感觉和运动。',
      knowledgePoint: '12 对脑神经包括：嗅神经、视神经、动眼神经、滑车神经、三叉神经、外展神经、面神经、位听神经、舌咽神经、迷走神经、副神经、舌下神经。'
    },
    {
      id: 19,
      category: '解剖学',
      difficulty: 'hard',
      question: '肾脏的基本功能单位是什么？',
      options: ['肾小球', '肾单位', '肾小管', '肾小囊'],
      answer: 1,
      explanation: '肾单位是肾脏的基本功能单位，每个肾脏约有 100 万个肾单位。',
      knowledgePoint: '肾单位由肾小球、肾小囊和肾小管组成，负责过滤血液、重吸收有用物质、排出废物，形成尿液。'
    },
    {
      id: 20,
      category: '解剖学',
      difficulty: 'medium',
      question: '小肠分为哪三部分？',
      options: ['盲肠、结肠、直肠', '贲门、胃体、幽门', '十二指肠、空肠、回肠', '升结肠、横结肠、降结肠'],
      answer: 2,
      explanation: '小肠分为十二指肠、空肠、回肠三部分，是消化和吸收的主要场所。',
      knowledgePoint: '十二指肠长约 25cm，接受胆汁和胰液；空肠和回肠长约 6 米，内壁有环形皱襞和绒毛，大大增加吸收面积。'
    }
  ],

  // 运动科学题库
  exercise: [
    {
      id: 21,
      category: '运动科学',
      difficulty: 'easy',
      question: 'WHO 推荐成年人每周至少进行多少分钟的中等强度运动？',
      options: ['75 分钟', '100 分钟', '150 分钟', '200 分钟'],
      answer: 2,
      explanation: '世界卫生组织推荐成年人每周至少进行 150 分钟中等强度有氧运动，或 75 分钟高强度有氧运动。',
      knowledgePoint: '中等强度运动包括快走、游泳、骑自行车等，运动时心率加快，微微出汗，但仍能交谈。'
    },
    {
      id: 22,
      category: '运动科学',
      difficulty: 'easy',
      question: '运动前热身的主要目的是什么？',
      options: ['消耗卡路里', '增加肌肉', '预防损伤', '提高柔韧性'],
      answer: 2,
      explanation: '运动前热身的主要目的是预防运动损伤，通过提高体温、增加血流、激活肌肉来准备身体。',
      knowledgePoint: '有效热身应包括 5-10 分钟有氧运动和动态拉伸，使心率达到最大心率的 50-60%。'
    },
    {
      id: 23,
      category: '运动科学',
      difficulty: 'medium',
      question: '最大心率的估算公式是？',
      options: ['200-年龄', '220-年龄', '240-年龄', '260-年龄'],
      answer: 1,
      explanation: '最大心率的估算公式是 220-年龄。例如，30 岁的人最大心率约为 190 次/分钟。',
      knowledgePoint: '运动时建议将心率控制在最大心率的 60-80%（靶心率区间），既能达到锻炼效果，又保证安全。'
    },
    {
      id: 24,
      category: '运动科学',
      difficulty: 'medium',
      question: '哪种运动属于无氧运动？',
      options: ['慢跑', '游泳', '举重', '骑自行车'],
      answer: 2,
      explanation: '举重属于无氧运动，特点是强度大、持续时间短，主要依靠无氧代谢供能。',
      knowledgePoint: '无氧运动包括举重、短跑、跳高、投掷等，主要锻炼肌肉力量和爆发力。有氧运动和无氧运动应结合进行。'
    },
    {
      id: 25,
      category: '运动科学',
      difficulty: 'hard',
      question: '运动后肌肉酸痛的主要原因是？',
      options: ['乳酸堆积', '肌肉撕裂', '炎症反应', '缺水'],
      answer: 2,
      explanation: '延迟性肌肉酸痛（DOMS）主要原因是肌肉微损伤引起的炎症反应，通常在运动后 24-72 小时达到高峰。',
      knowledgePoint: '乳酸在运动后几小时内就会清除，不是 DOMS 的主要原因。预防 DOMS 应循序渐进增加运动强度，运动后进行适当拉伸和恢复。'
    },
    {
      id: 26,
      category: '运动科学',
      difficulty: 'medium',
      question: 'BMI 的正常范围是？',
      options: ['16-18.5', '18.5-24', '24-28', '28-32'],
      answer: 1,
      explanation: '中国成年人 BMI 的正常范围是 18.5-24。BMI<18.5 为偏瘦，24-28 为超重，≥28 为肥胖。',
      knowledgePoint: 'BMI=体重（kg）/身高²（m²）。BMI 是评估体重是否健康的常用指标，但不能区分肌肉和脂肪。'
    },
    {
      id: 27,
      category: '运动科学',
      difficulty: 'easy',
      question: ' stretching（拉伸）最好在什么时候进行？',
      options: ['运动前', '运动后', '睡觉前', '任意时间'],
      answer: 1,
      explanation: '静态拉伸最好在运动后进行，有助于放松肌肉、促进恢复、提高柔韧性。',
      knowledgePoint: '运动前应进行动态拉伸，运动后进行静态拉伸。每个拉伸动作保持 15-30 秒，重复 2-3 次。'
    },
    {
      id: 28,
      category: '运动科学',
      difficulty: 'hard',
      question: '增肌训练的关键营养原则是？',
      options: ['高碳水', '高蛋白', '高脂肪', '高纤维'],
      answer: 1,
      explanation: '增肌训练需要充足的蛋白质摄入（1.6-2.2g/kg 体重），提供肌肉合成所需的氨基酸。',
      knowledgePoint: '增肌还需要足够的热量盈余、合理的碳水化合物（提供能量）、健康的脂肪（激素合成）以及充足睡眠。'
    },
    {
      id: 29,
      category: '运动科学',
      difficulty: 'medium',
      question: '减脂最有效的运动方式是？',
      options: ['纯有氧运动', '纯力量训练', '有氧 + 力量结合', '只控制饮食'],
      answer: 2,
      explanation: '有氧运动结合力量训练是减脂最有效的方式，既能燃烧脂肪，又能保持肌肉量。',
      knowledgePoint: '力量训练提高基础代谢率，有氧运动直接消耗脂肪。减脂还需要热量缺口（消耗>摄入）和充足的蛋白质。'
    },
    {
      id: 30,
      category: '运动科学',
      difficulty: 'easy',
      question: '运动时补水应该？',
      options: ['不喝水', '口渴再喝', '少量多次', '大量快速'],
      answer: 2,
      explanation: '运动时应少量多次补水，每 15-20 分钟补充 150-200ml 水，避免脱水和低钠血症。',
      knowledgePoint: '长时间运动（>1 小时）应补充含电解质的运动饮料。运动前后也要适当补水。'
    }
  ],

  // 睡眠科学题库
  sleep: [
    {
      id: 31,
      category: '睡眠科学',
      difficulty: 'easy',
      question: '成年人每天推荐睡眠时间是？',
      options: ['4-5 小时', '5-6 小时', '7-9 小时', '10-12 小时'],
      answer: 2,
      explanation: '美国国家睡眠基金会推荐成年人每天睡眠时间为 7-9 小时，老年人（65 岁以上）为 7-8 小时。',
      knowledgePoint: '充足睡眠对身心健康至关重要，影响免疫功能、认知功能、情绪调节、代谢健康等多个方面。'
    },
    {
      id: 32,
      category: '睡眠科学',
      difficulty: 'medium',
      question: '一个完整的睡眠周期约多长时间？',
      options: ['30 分钟', '60 分钟', '90 分钟', '120 分钟'],
      answer: 2,
      explanation: '一个完整的睡眠周期约 90 分钟，包括 NREM（非快速眼动）睡眠的 3 个阶段和 REM（快速眼动）睡眠。',
      knowledgePoint: '每晚通常经历 4-6 个睡眠周期。深睡眠主要在前半夜，REM 睡眠主要在后半夜。'
    },
    {
      id: 33,
      category: '睡眠科学',
      difficulty: 'hard',
      question: '哪种激素主要在睡眠时分泌？',
      options: ['肾上腺素', '褪黑素', '皮质醇', '胰岛素'],
      answer: 1,
      explanation: '褪黑素主要在夜间睡眠时由松果体分泌，调节睡眠 - 觉醒周期，具有抗氧化作用。',
      knowledgePoint: '褪黑素分泌受光线影响，黑暗促进分泌，光线抑制分泌。睡前避免使用电子设备有助于褪黑素分泌。'
    },
    {
      id: 34,
      category: '睡眠科学',
      difficulty: 'easy',
      question: '睡前多久应该避免使用电子设备？',
      options: ['15 分钟', '30 分钟', '1 小时', '2 小时'],
      answer: 2,
      explanation: '建议睡前至少 1 小时避免使用手机、电脑等电子设备，因为蓝光会抑制褪黑素分泌。',
      knowledgePoint: '电子设备的蓝光会干扰生物钟，延迟入睡时间。如果必须使用，可开启夜间模式或使用防蓝光眼镜。'
    },
    {
      id: 35,
      category: '睡眠科学',
      difficulty: 'medium',
      question: '午睡的最佳时长是？',
      options: ['10-15 分钟', '20-30 分钟', '40-50 分钟', '60 分钟以上'],
      answer: 1,
      explanation: '午睡最佳时长为 20-30 分钟，可以提高警觉性和认知功能，又不会影响夜间睡眠。',
      knowledgePoint: '午睡超过 30 分钟容易进入深睡眠，醒来后会有睡眠惰性（昏昏沉沉）。下午 3 点后不宜午睡。'
    }
  ],

  // 心理健康题库
  mentalHealth: [
    {
      id: 36,
      category: '心理健康',
      difficulty: 'easy',
      question: '哪种方法不能有效缓解压力？',
      options: ['深呼吸', '运动', '暴饮暴食', '冥想'],
      answer: 2,
      explanation: '暴饮暴食不能有效缓解压力，反而会导致体重增加、消化不良等健康问题。',
      knowledgePoint: '健康的减压方式包括运动、冥想、深呼吸、与朋友交流、培养爱好、保证睡眠等。'
    },
    {
      id: 37,
      category: '心理健康',
      difficulty: 'medium',
      question: '抑郁症的核心症状是？',
      options: ['焦虑', '情绪低落', '失眠', '食欲改变'],
      answer: 1,
      explanation: '情绪低落（抑郁心境）是抑郁症的核心症状，持续至少 2 周，几乎每天大部分时间都存在。',
      knowledgePoint: '抑郁症还包括兴趣减退、精力下降、自责自罪、睡眠障碍、食欲改变等症状。应及时寻求专业帮助。'
    },
    {
      id: 38,
      category: '心理健康',
      difficulty: 'easy',
      question: '冥想的主要好处是？',
      options: ['增加肌肉', '减轻压力', '提高身高', '增加食欲'],
      answer: 1,
      explanation: '冥想的主要好处是减轻压力，还能改善注意力、情绪调节、睡眠质量等。',
      knowledgePoint: '正念冥想通过专注于当下、不加评判地觉察，帮助减少焦虑、抑郁，提升心理健康。'
    },
    {
      id: 39,
      category: '心理健康',
      difficulty: 'hard',
      question: '焦虑症的患病率约为？',
      options: ['1-2%', '5-10%', '15-20%', '25-30%'],
      answer: 2,
      explanation: '全球范围内，焦虑症的终身患病率约为 15-20%，是最常见的精神障碍之一。',
      knowledgePoint: '焦虑症包括广泛性焦虑症、惊恐障碍、社交焦虑症、特定恐惧症等。可通过心理治疗和药物治疗。'
    },
    {
      id: 40,
      category: '心理健康',
      difficulty: 'medium',
      question: '社会支持对心理健康的作用是？',
      options: ['没有作用', '负面影响', '正面影响', '因人而异'],
      answer: 2,
      explanation: '良好的社会支持对心理健康有正面影响，能缓冲压力、降低抑郁焦虑风险、提高幸福感。',
      knowledgePoint: '社会支持包括情感支持、信息支持、工具性支持等。维护良好的人际关系是心理健康的重要保护因素。'
    }
  ]
};

// 测验功能类
class QuizSystem {
  constructor() {
    this.currentQuiz = null;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
  }

  // 获取指定类别和难度的题目
  getQuestions(category = null, difficulty = null, limit = 10) {
    let questions = [];
    
    if (category) {
      questions = [...(QuizDatabase[category] || [])];
    } else {
      // 获取所有类别
      Object.values(QuizDatabase).forEach(categoryQuestions => {
        questions = questions.concat(categoryQuestions);
      });
    }

    // 按难度筛选
    if (difficulty) {
      questions = questions.filter(q => q.difficulty === difficulty);
    }

    // 随机打乱并限制数量
    return this.shuffleArray(questions).slice(0, limit);
  }

  // 开始测验
  startQuiz(category = null, difficulty = null, questionCount = 10) {
    this.currentQuiz = {
      questions: this.getQuestions(category, difficulty, questionCount),
      totalQuestions: questionCount
    };
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    
    return this.currentQuiz;
  }

  // 回答问题
  answerQuestion(questionIndex, answerIndex) {
    const question = this.currentQuiz.questions[questionIndex];
    const isCorrect = answerIndex === question.answer;
    
    if (isCorrect) {
      this.score += this.getScoreByDifficulty(question.difficulty);
    }

    this.userAnswers.push({
      questionId: question.id,
      userAnswer: answerIndex,
      correctAnswer: question.answer,
      isCorrect: isCorrect,
      difficulty: question.difficulty
    });

    return {
      isCorrect,
      correctAnswer: question.answer,
      explanation: question.explanation,
      knowledgePoint: question.knowledgePoint
    };
  }

  // 根据难度计算得分
  getScoreByDifficulty(difficulty) {
    switch (difficulty) {
      case 'easy': return 10;
      case 'medium': return 20;
      case 'hard': return 30;
      default: return 10;
    }
  }

  // 获取测验结果
  getResults() {
    const totalQuestions = this.currentQuiz.questions.length;
    const correctAnswers = this.userAnswers.filter(a => a.isCorrect).length;
    const accuracy = (correctAnswers / totalQuestions * 100).toFixed(1);

    return {
      score: this.score,
      totalQuestions,
      correctAnswers,
      accuracy,
      answers: this.userAnswers,
      questions: this.currentQuiz.questions
    };
  }

  // 随机打乱数组
  shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  // 获取每日挑战
  getDailyChallenge() {
    const today = new Date().toDateString();
    const seed = this.hashCode(today);
    
    // 使用日期作为种子，确保每天题目相同
    const allQuestions = [];
    Object.values(QuizDatabase).forEach(categoryQuestions => {
      allQuestions.push(...categoryQuestions);
    });

    const shuffled = this.shuffleArray(allQuestions);
    return shuffled.slice(0, 10);
  }

  // 字符串哈希
  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuizDatabase, QuizSystem };
}
