// 虚拟宠物系统数据
// 包含宠物成长阶段、状态定义、互动动作等

const PetSystem = {
  // 宠物成长阶段
  stages: [
    {
      id: 1,
      name: '细胞阶段',
      description: '生命的最初形态，充满无限可能',
      minExperience: 0,
      image: '🧬',
      unlockTip: '开始你的健康之旅！'
    },
    {
      id: 2,
      name: '组织阶段',
      description: '细胞聚集形成组织，逐渐发育',
      minExperience: 100,
      image: '🔬',
      unlockTip: '累计获得 100 点经验值'
    },
    {
      id: 3,
      name: '器官阶段',
      description: '组织分化形成器官，功能完善',
      minExperience: 300,
      image: '🫀',
      unlockTip: '累计获得 300 点经验值'
    },
    {
      id: 4,
      name: '系统阶段',
      description: '器官协同工作，形成完整系统',
      minExperience: 600,
      image: '🧠',
      unlockTip: '累计获得 600 点经验值'
    },
    {
      id: 5,
      name: '完整人体',
      description: '所有系统协调运作，健康完美！',
      minExperience: 1000,
      image: '👤',
      unlockTip: '累计获得 1000 点经验值'
    }
  ],

  // 宠物形象选择
  avatars: [
    { id: 'cell', name: '细胞宝宝', image: '🧬', color: '#10b981' },
    { id: 'heart', name: '小心脏', image: '❤️', color: '#ef4444' },
    { id: 'brain', name: '智慧脑', image: '🧠', color: '#8b5cf6' },
    { id: 'muscle', name: '强壮肌', image: '💪', color: '#f59e0b' },
    { id: 'stomach', name: '消化王', image: '🫃', color: '#3b82f6' },
    { id: 'lung', name: '呼吸者', image: '🫁', color: '#06b6d4' }
  ],

  // 状态指标
  metrics: {
    health: {
      name: '健康值',
      icon: '❤️',
      min: 0,
      max: 100,
      criticalLow: 20,
      low: 40,
      good: 70,
      excellent: 90
    },
    energy: {
      name: '能量值',
      icon: '⚡',
      min: 0,
      max: 100,
      criticalLow: 20,
      low: 40,
      good: 70,
      excellent: 90
    },
    happiness: {
      name: '幸福值',
      icon: '😊',
      min: 0,
      max: 100,
      criticalLow: 20,
      low: 40,
      good: 70,
      excellent: 90
    },
    experience: {
      name: '经验值',
      icon: '⭐',
      min: 0,
      max: Infinity
    }
  },

  // 互动动作
  actions: {
    // 喂食类
    feed: {
      name: '喂食',
      icon: '🍎',
      description: '给宠物喂食健康食物',
      effects: {
        health: 10,
        energy: 5,
        happiness: 5,
        experience: 10
      },
      cooldown: 30, // 冷却时间（分钟）
      cost: null
    },

    // 运动类
    exercise: {
      name: '运动',
      icon: '🏃',
      description: '陪宠物一起运动',
      effects: {
        health: 15,
        energy: -10,
        happiness: 10,
        experience: 20
      },
      cooldown: 60,
      requirement: {
        minEnergy: 20
      }
    },

    // 休息类
    rest: {
      name: '休息',
      icon: '😴',
      description: '让宠物好好休息',
      effects: {
        health: 5,
        energy: 30,
        happiness: 5,
        experience: 5
      },
      cooldown: 120
    },

    // 学习类
    learn: {
      name: '学习',
      icon: '📚',
      description: '学习健康知识',
      effects: {
        health: 5,
        energy: -5,
        happiness: 15,
        experience: 25
      },
      cooldown: 90,
      requirement: {
        minEnergy: 10
      }
    },

    // 医疗类
    heal: {
      name: '治疗',
      icon: '💊',
      description: '为宠物治疗伤病',
      effects: {
        health: 30,
        energy: -15,
        happiness: -5,
        experience: 15
      },
      cooldown: 180,
      condition: {
        healthBelow: 40
      }
    },

    // 娱乐类
    play: {
      name: '玩耍',
      icon: '🎮',
      description: '和宠物一起玩游戏',
      effects: {
        health: 5,
        energy: -5,
        happiness: 20,
        experience: 10
      },
      cooldown: 60,
      requirement: {
        minEnergy: 15
      }
    },

    // 清洁类
    clean: {
      name: '清洁',
      icon: '🧹',
      description: '保持宠物清洁卫生',
      effects: {
        health: 10,
        happiness: 10,
        experience: 5
      },
      cooldown: 240
    }
  },

  // 状态变化事件
  events: {
    // 正面事件
    positive: [
      {
        id: 'good_sleep',
        name: '充足睡眠',
        description: '昨晚睡得很好！',
        trigger: 'morning',
        effects: {
          energy: 20,
          health: 5
        }
      },
      {
        id: 'healthy_meal',
        name: '健康饮食',
        description: '吃了一顿营养均衡的饭',
        trigger: 'meal_time',
        effects: {
          health: 10,
          energy: 10
        }
      },
      {
        id: 'exercise_completed',
        name: '运动完成',
        description: '完成了今日运动目标',
        trigger: 'exercise',
        effects: {
          health: 15,
          experience: 20
        }
      }
    ],

    // 负面事件
    negative: [
      {
        id: 'lack_sleep',
        name: '睡眠不足',
        description: '昨晚没睡好，精神不佳',
        trigger: 'morning',
        condition: {
          sleepHours: '<7'
        },
        effects: {
          energy: -20,
          health: -5
        }
      },
      {
        id: 'junk_food',
        name: '垃圾食品',
        description: '吃了不健康的食物',
        trigger: 'meal_time',
        effects: {
          health: -10,
          happiness: 10
        }
      },
      {
        id: 'no_exercise',
        name: '缺乏运动',
        description: '今天还没有运动',
        trigger: 'evening',
        condition: {
          steps: '<5000'
        },
        effects: {
          health: -5,
          happiness: -5
        }
      }
    ]
  },

  // 宠物表情（根据状态显示）
  expressions: {
    excellent: {
      condition: {
        health: '>=90',
        energy: '>=90',
        happiness: '>=90'
      },
      image: '😄',
      description: '状态极佳！'
    },
    happy: {
      condition: {
        health: '>=70',
        energy: '>=70',
        happiness: '>=70'
      },
      image: '😊',
      description: '状态良好'
    },
    normal: {
      condition: {
        health: '>=40',
        energy: '>=40',
        happiness: '>=40'
      },
      image: '😐',
      description: '状态一般'
    },
    tired: {
      condition: {
        energy: '<40'
      },
      image: '😫',
      description: '好累啊...'
    },
    sick: {
      condition: {
        health: '<40'
      },
      image: '😷',
      description: '生病了...'
    },
    sad: {
      condition: {
        happiness: '<40'
      },
      image: '😢',
      description: '不开心'
    },
    critical: {
      condition: {
        health: '<20',
        or: true
      },
      condition2: {
        energy: '<20',
        or: true
      },
      condition3: {
        happiness: '<20'
      },
      image: '😵',
      description: '需要帮助！'
    }
  },

  // 成就系统
  achievements: [
    {
      id: 'first_step',
      name: '第一步',
      description: '创建你的第一个宠物',
      icon: '🎉',
      requirement: {
        type: 'create_pet',
        count: 1
      },
      reward: {
        experience: 50
      }
    },
    {
      id: 'health_master',
      name: '健康大师',
      description: '保持宠物健康值 90+ 连续 7 天',
      icon: '🏆',
      requirement: {
        type: 'consecutive_days',
        metric: 'health',
        minValue: 90,
        days: 7
      },
      reward: {
        experience: 200,
        badge: 'health_master'
      }
    },
    {
      id: 'fitness_expert',
      name: '健身专家',
      description: '累计运动 100 次',
      icon: '💪',
      requirement: {
        type: 'action_count',
        action: 'exercise',
        count: 100
      },
      reward: {
        experience: 150,
        badge: 'fitness_expert'
      }
    },
    {
      id: 'knowledge_seeker',
      name: '求知者',
      description: '完成 50 次学习',
      icon: '🎓',
      requirement: {
        type: 'action_count',
        action: 'learn',
        count: 50
      },
      reward: {
        experience: 100,
        badge: 'knowledge_seeker'
      }
    },
    {
      id: 'evolution_master',
      name: '进化大师',
      description: '宠物达到最终形态',
      icon: '👑',
      requirement: {
        type: 'evolution_stage',
        stage: 5
      },
      reward: {
        experience: 500,
        badge: 'evolution_master',
        special: '金色宠物皮肤'
      }
    }
  ],

  // 提示语
  tips: {
    morning: [
      '早上好！记得给宠物喂食哦～',
      '新的一天，和宠物一起运动吧！',
      '美好的一天从照顾宠物开始！'
    ],
    noon: [
      '中午啦，别忘了给宠物补充能量',
      '午休时间，陪宠物玩一会儿吧',
      '记得让宠物也休息一下'
    ],
    evening: [
      '晚上好，今天和宠物过得开心吗？',
      '准备休息了，让宠物也早点睡吧',
      '睡前别忘了检查宠物状态哦'
    ],
    lowHealth: [
      '宠物健康值较低，需要照顾！',
      '你的宠物好像生病了，快关心一下',
      '健康最重要，立即照顾宠物吧'
    ],
    lowEnergy: [
      '宠物累了，让它休息一下吧',
      '能量不足，需要补充能量',
      '别让宠物太累了'
    ],
    lowHappiness: [
      '宠物不开心了，陪它玩吧',
      '你的宠物需要关爱',
      '让宠物开心起来！'
    ]
  }
};

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PetSystem;
}
