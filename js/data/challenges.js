// 健康挑战赛系统数据
// 包含挑战类型、任务定义、奖励机制等

const ChallengeSystem = {
  // 挑战类别
  categories: {
    hydration: {
      id: 'hydration',
      name: '饮水挑战',
      icon: '💧',
      color: '#3b82f6',
      description: '培养健康饮水习惯'
    },
    exercise: {
      id: 'exercise',
      name: '运动挑战',
      icon: '🏃',
      color: '#10b981',
      description: '坚持每日运动'
    },
    diet: {
      id: 'diet',
      name: '饮食挑战',
      icon: '🥗',
      color: '#f59e0b',
      description: '健康饮食计划'
    },
    sleep: {
      id: 'sleep',
      name: '睡眠挑战',
      icon: '😴',
      color: '#8b5cf6',
      description: '规律作息'
    },
    knowledge: {
      id: 'knowledge',
      name: '知识挑战',
      icon: '📚',
      color: '#ec4899',
      description: '学习健康知识'
    },
    weight: {
      id: 'weight',
      name: '体重管理',
      icon: '⚖️',
      color: '#ef4444',
      description: '科学管理体重'
    }
  },

  // 预设挑战模板
  challenges: {
    // 饮水挑战
    hydration_7days: {
      id: 'hydration_7days',
      name: '7 天饮水挑战',
      category: 'hydration',
      duration: 7,
      difficulty: 'easy',
      icon: '💧',
      description: '连续 7 天，每天饮水 2000ml',
      goal: {
        type: 'daily_water',
        target: 2000,
        unit: 'ml',
        frequency: 'daily'
      },
      rewards: {
        experience: 100,
        badge: 'hydration_starter',
        title: '饮水新手'
      },
      tips: [
        '早起一杯水，开启新陈代谢',
        '随身带水杯，随时补充水分',
        '设置提醒，每小时喝水'
      ]
    },

    hydration_21days: {
      id: 'hydration_21days',
      name: '21 天饮水习惯养成',
      category: 'hydration',
      duration: 21,
      difficulty: 'medium',
      icon: '🥤',
      description: '连续 21 天，每天饮水 2500ml',
      goal: {
        type: 'daily_water',
        target: 2500,
        unit: 'ml',
        frequency: 'daily'
      },
      rewards: {
        experience: 300,
        badge: 'hydration_master',
        title: '饮水达人'
      }
    },

    // 运动挑战
    steps_7days: {
      id: 'steps_7days',
      name: '7 天万步挑战',
      category: 'exercise',
      duration: 7,
      difficulty: 'medium',
      icon: '👟',
      description: '连续 7 天，每天 10000 步',
      goal: {
        type: 'daily_steps',
        target: 10000,
        unit: 'steps',
        frequency: 'daily'
      },
      rewards: {
        experience: 150,
        badge: 'walker',
        title: '步行者'
      }
    },

    steps_30days: {
      id: 'steps_30days',
      name: '30 天万步挑战',
      category: 'exercise',
      duration: 30,
      difficulty: 'hard',
      icon: '🏃',
      description: '连续 30 天，每天 10000 步',
      goal: {
        type: 'daily_steps',
        target: 10000,
        unit: 'steps',
        frequency: 'daily'
      },
      rewards: {
        experience: 500,
        badge: 'marathoner',
        title: '马拉松选手'
      }
    },

    workout_14days: {
      id: 'workout_14days',
      name: '14 天健身挑战',
      category: 'exercise',
      duration: 14,
      difficulty: 'hard',
      icon: '💪',
      description: '连续 14 天，每天运动 30 分钟',
      goal: {
        type: 'daily_exercise',
        target: 30,
        unit: 'minutes',
        frequency: 'daily'
      },
      rewards: {
        experience: 350,
        badge: 'fitness_enthusiast',
        title: '健身爱好者'
      }
    },

    // 饮食挑战
    healthy_diet_7days: {
      id: 'healthy_diet_7days',
      name: '7 天健康饮食',
      category: 'diet',
      duration: 7,
      difficulty: 'medium',
      icon: '🥗',
      description: '连续 7 天，每日摄入 5 种蔬果',
      goal: {
        type: 'daily_fruits_vegetables',
        target: 5,
        unit: 'servings',
        frequency: 'daily'
      },
      rewards: {
        experience: 200,
        badge: 'healthy_eater',
        title: '健康饮食者'
      }
    },

    no_sugar_14days: {
      id: 'no_sugar_14days',
      name: '14 天戒糖挑战',
      category: 'diet',
      duration: 14,
      difficulty: 'hard',
      icon: '🚫',
      description: '连续 14 天，不摄入添加糖',
      goal: {
        type: 'no_added_sugar',
        target: 0,
        unit: 'grams',
        frequency: 'daily'
      },
      rewards: {
        experience: 400,
        badge: 'sugar_free',
        title: '无糖达人'
      }
    },

    // 睡眠挑战
    sleep_7days: {
      id: 'sleep_7days',
      name: '7 天规律作息',
      category: 'sleep',
      duration: 7,
      difficulty: 'medium',
      icon: '😴',
      description: '连续 7 天，每晚睡眠 7-8 小时',
      goal: {
        type: 'daily_sleep',
        target: {
          min: 7,
          max: 8
        },
        unit: 'hours',
        frequency: 'daily'
      },
      rewards: {
        experience: 150,
        badge: 'good_sleeper',
        title: '睡眠良好'
      }
    },

    early_bird_14days: {
      id: 'early_bird_14days',
      name: '14 天早起鸟',
      category: 'sleep',
      duration: 14,
      difficulty: 'hard',
      icon: '🌅',
      description: '连续 14 天，早上 7 点前起床',
      goal: {
        type: 'early_rise',
        target: '07:00',
        unit: 'time',
        frequency: 'daily'
      },
      rewards: {
        experience: 350,
        badge: 'early_bird',
        title: '早起鸟'
      }
    },

    // 知识挑战
    quiz_master_7days: {
      id: 'quiz_master_7days',
      name: '7 天知识达人',
      category: 'knowledge',
      duration: 7,
      difficulty: 'easy',
      icon: '🧠',
      description: '连续 7 天，每天完成 1 次问答',
      goal: {
        type: 'daily_quiz',
        target: 1,
        unit: 'quizzes',
        frequency: 'daily'
      },
      rewards: {
        experience: 100,
        badge: 'learner',
        title: '学习者'
      }
    },

    perfect_score: {
      id: 'perfect_score',
      name: '满分挑战',
      category: 'knowledge',
      duration: 1,
      difficulty: 'hard',
      icon: '💯',
      description: '单次问答正确率达到 100%',
      goal: {
        type: 'quiz_accuracy',
        target: 100,
        unit: 'percent',
        frequency: 'once'
      },
      rewards: {
        experience: 200,
        badge: 'genius',
        title: '天才'
      }
    },

    // 体重管理挑战
    weight_loss_30days: {
      id: 'weight_loss_30days',
      name: '30 天减重挑战',
      category: 'weight',
      duration: 30,
      difficulty: 'hard',
      icon: '📉',
      description: '30 天内健康减重 2-4kg',
      goal: {
        type: 'weight_loss',
        target: {
          min: 2,
          max: 4
        },
        unit: 'kg',
        frequency: 'total'
      },
      rewards: {
        experience: 600,
        badge: 'weight_warrior',
        title: '减重勇士'
      }
    },

    weight_record_21days: {
      id: 'weight_record_21days',
      name: '21 天体重记录',
      category: 'weight',
      duration: 21,
      difficulty: 'medium',
      icon: '⚖️',
      description: '连续 21 天，每天记录体重',
      goal: {
        type: 'daily_weight_record',
        target: 1,
        unit: 'records',
        frequency: 'daily'
      },
      rewards: {
        experience: 300,
        badge: 'tracker',
        title: '追踪者'
      }
    }
  },

  // 挑战难度配置
  difficulty: {
    easy: {
      name: '简单',
      color: '#10b981',
      multiplier: 1.0,
      description: '适合新手入门'
    },
    medium: {
      name: '中等',
      color: '#f59e0b',
      multiplier: 1.5,
      description: '有一定挑战性'
    },
    hard: {
      name: '困难',
      color: '#ef4444',
      multiplier: 2.0,
      description: '适合进阶用户'
    }
  },

  // 成就徽章
  badges: {
    // 饮水徽章
    hydration_starter: {
      name: '饮水新手',
      description: '完成 7 天饮水挑战',
      icon: '💧',
      level: 'bronze'
    },
    hydration_master: {
      name: '饮水达人',
      description: '完成 21 天饮水挑战',
      icon: '🥤',
      level: 'silver'
    },
    hydration_legend: {
      name: '饮水传奇',
      description: '完成 90 天饮水挑战',
      icon: '🌊',
      level: 'gold'
    },

    // 运动徽章
    walker: {
      name: '步行者',
      description: '完成 7 天万步挑战',
      icon: '👟',
      level: 'bronze'
    },
    marathoner: {
      name: '马拉松选手',
      description: '完成 30 天万步挑战',
      icon: '🏃',
      level: 'silver'
    },
    fitness_enthusiast: {
      name: '健身爱好者',
      description: '完成 14 天健身挑战',
      icon: '💪',
      level: 'silver'
    },
    athlete: {
      name: '运动员',
      description: '完成 90 天健身挑战',
      icon: '🏆',
      level: 'gold'
    },

    // 饮食徽章
    healthy_eater: {
      name: '健康饮食者',
      description: '完成 7 天健康饮食挑战',
      icon: '🥗',
      level: 'bronze'
    },
    nutrition_expert: {
      name: '营养专家',
      description: '完成 30 天健康饮食挑战',
      icon: '🍎',
      level: 'silver'
    },
    sugar_free: {
      name: '无糖达人',
      description: '完成 14 天戒糖挑战',
      icon: '🚫',
      level: 'silver'
    },

    // 睡眠徽章
    good_sleeper: {
      name: '睡眠良好',
      description: '完成 7 天规律作息',
      icon: '😴',
      level: 'bronze'
    },
    early_bird: {
      name: '早起鸟',
      description: '完成 14 天早起挑战',
      icon: '🌅',
      level: 'silver'
    },
    sleep_master: {
      name: '睡眠大师',
      description: '完成 90 天规律作息',
      icon: '🛌',
      level: 'gold'
    },

    // 知识徽章
    learner: {
      name: '学习者',
      description: '完成 7 天知识挑战',
      icon: '📚',
      level: 'bronze'
    },
    knowledge_seeker: {
      name: '求知者',
      description: '完成 30 天知识挑战',
      icon: '🎓',
      level: 'silver'
    },
    genius: {
      name: '天才',
      description: '单次问答获得满分',
      icon: '💯',
      level: 'special'
    },

    // 体重管理徽章
    tracker: {
      name: '追踪者',
      description: '完成 21 天体重记录',
      icon: '📊',
      level: 'bronze'
    },
    weight_warrior: {
      name: '减重勇士',
      description: '完成 30 天减重挑战',
      icon: '📉',
      level: 'silver'
    },
    body_master: {
      name: '身材大师',
      description: '成功减重 10kg',
      icon: '👑',
      level: 'gold'
    }
  },

  // 排行榜配置
  leaderboards: {
    weekly: {
      name: '周榜',
      duration: 7,
      resetDay: 'monday',
      categories: ['hydration', 'exercise', 'knowledge']
    },
    monthly: {
      name: '月榜',
      duration: 30,
      resetDay: 'first_day',
      categories: ['all']
    },
    alltime: {
      name: '总榜',
      duration: Infinity,
      resetDay: null,
      categories: ['all']
    }
  },

  // PK 挑战配置
  pkChallenges: {
    quiz_battle: {
      name: '知识 PK',
      description: '与好友进行知识问答对决',
      duration: 10, // 分钟
      rounds: 5,
      scoring: {
        correct: 10,
        speedBonus: 'time_remaining / 10'
      }
    },
    steps_battle: {
      name: '步数 PK',
      description: '比拼每日步数',
      duration: 1, // 天
      scoring: {
        steps: 'total_steps'
      }
    },
    water_battle: {
      name: '饮水 PK',
      description: '比拼每日饮水量',
      duration: 1, // 天
      scoring: {
        water: 'total_ml'
      }
    }
  },

  // 提示信息
  tips: {
    start: [
      '选择一个适合你的挑战开始吧！',
      '挑战自我，成就更好的自己！',
      '坚持就是胜利，加油！'
    ],
    progress: [
      '你已经完成 {progress}%，继续加油！',
      '太棒了！保持这个节奏！',
      '距离成功还有 {remaining} 天！'
    ],
    complete: [
      '恭喜你完成挑战！🎉',
      '你做到了！为自己骄傲吧！',
      '新的挑战在等着你！'
    ],
    failed: [
      '没关系，下次再来！',
      '失败是成功之母，继续努力！',
      '休息一下，重新开始吧！'
    ]
  }
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChallengeSystem;
}
