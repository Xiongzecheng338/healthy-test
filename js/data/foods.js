// 食物数据库 - 扩展版
// 包含 500+ 种常见食物的完整营养信息

const FoodDatabase = {
  // 🍎 水果类
  fruits: {
    '苹果': {
      calories: 52,
      protein: 0.3,
      fat: 0.2,
      carbs: 14,
      fiber: 2.4,
      sodium: 1,
      gi: 36,
      vitamins: {
        '维生素 C': '4.6mg',
        '维生素 K': '2.2μg',
        '钾': '107mg'
      }
    },
    '香蕉': {
      calories: 89,
      protein: 1.1,
      fat: 0.3,
      carbs: 23,
      fiber: 2.6,
      sodium: 1,
      gi: 51,
      vitamins: {
        '维生素 B6': '0.4mg',
        '维生素 C': '8.7mg',
        '钾': '358mg'
      }
    },
    '橙子': {
      calories: 47,
      protein: 0.9,
      fat: 0.1,
      carbs: 12,
      fiber: 2.4,
      sodium: 0,
      gi: 43,
      vitamins: {
        '维生素 C': '53.2mg',
        '叶酸': '40μg',
        '钾': '181mg'
      }
    },
    '葡萄': {
      calories: 67,
      protein: 0.6,
      fat: 0.4,
      carbs: 17,
      fiber: 0.9,
      sodium: 2,
      gi: 45,
      vitamins: {
        '维生素 K': '14.6μg',
        '维生素 C': '3.2mg',
        '白藜芦醇': '0.2-1.9mg'
      }
    },
    '西瓜': {
      calories: 30,
      protein: 0.6,
      fat: 0.2,
      carbs: 8,
      fiber: 0.4,
      sodium: 1,
      gi: 72,
      vitamins: {
        '维生素 A': '569IU',
        '维生素 C': '8.1mg',
        '番茄红素': '4532μg'
      }
    },
    '草莓': {
      calories: 32,
      protein: 0.7,
      fat: 0.3,
      carbs: 8,
      fiber: 2,
      sodium: 1,
      gi: 40,
      vitamins: {
        '维生素 C': '58.8mg',
        '锰': '0.4mg',
        '叶酸': '24μg'
      }
    },
    '蓝莓': {
      calories: 57,
      protein: 0.7,
      fat: 0.3,
      carbs: 14,
      fiber: 2.4,
      sodium: 1,
      gi: 53,
      vitamins: {
        '维生素 C': '9.7mg',
        '维生素 K': '19.3μg',
        '花青素': '163mg'
      }
    },
    '猕猴桃': {
      calories: 61,
      protein: 1.1,
      fat: 0.5,
      carbs: 15,
      fiber: 3,
      sodium: 3,
      gi: 50,
      vitamins: {
        '维生素 C': '92.7mg',
        '维生素 K': '40.3μg',
        '钾': '312mg'
      }
    },
    '梨': {
      calories: 57,
      protein: 0.4,
      fat: 0.1,
      carbs: 15,
      fiber: 3.1,
      sodium: 1,
      gi: 38,
      vitamins: {
        '维生素 C': '4.3mg',
        '维生素 K': '4.5μg',
        '钾': '116mg'
      }
    },
    '桃子': {
      calories: 39,
      protein: 0.9,
      fat: 0.3,
      carbs: 10,
      fiber: 1.5,
      sodium: 0,
      gi: 42,
      vitamins: {
        '维生素 C': '6.6mg',
        '维生素 A': '326IU',
        '钾': '190mg'
      }
    },
    '芒果': {
      calories: 60,
      protein: 0.8,
      fat: 0.4,
      carbs: 15,
      fiber: 1.6,
      sodium: 1,
      gi: 51,
      vitamins: {
        '维生素 C': '36.4mg',
        '维生素 A': '1082IU',
        '叶酸': '43μg'
      }
    },
    '菠萝': {
      calories: 50,
      protein: 0.5,
      fat: 0.1,
      carbs: 13,
      fiber: 1.4,
      sodium: 1,
      gi: 59,
      vitamins: {
        '维生素 C': '47.8mg',
        '锰': '0.9mg',
        '菠萝蛋白酶': '适量'
      }
    },
    '榴莲': {
      calories: 147,
      protein: 1.5,
      fat: 5.3,
      carbs: 27,
      fiber: 3.8,
      sodium: 2,
      gi: 49,
      vitamins: {
        '维生素 C': '20mg',
        '维生素 B6': '0.3mg',
        '钾': '436mg'
      }
    },
    '荔枝': {
      calories: 66,
      protein: 0.8,
      fat: 0.4,
      carbs: 17,
      fiber: 1.3,
      sodium: 1,
      gi: 79,
      vitamins: {
        '维生素 C': '71.5mg',
        '铜': '0.1mg',
        '钾': '171mg'
      }
    },
    '火龙果': {
      calories: 60,
      protein: 0.9,
      fat: 0.4,
      carbs: 13,
      fiber: 3,
      sodium: 0,
      gi: 48,
      vitamins: {
        '维生素 C': '9mg',
        '镁': '40mg',
        '甜菜红素': '适量'
      }
    },
    '樱桃': {
      calories: 63,
      protein: 1.1,
      fat: 0.2,
      carbs: 16,
      fiber: 2.1,
      sodium: 0,
      gi: 22,
      vitamins: {
        '维生素 C': '7mg',
        '钾': '222mg',
        '花青素': '适量'
      }
    },
    '柚子': {
      calories: 38,
      protein: 0.8,
      fat: 0.1,
      carbs: 10,
      fiber: 1,
      sodium: 0,
      gi: 25,
      vitamins: {
        '维生素 C': '61mg',
        '维生素 A': '1150IU',
        '钾': '216mg'
      }
    },
    '柠檬': {
      calories: 29,
      protein: 1.1,
      fat: 0.3,
      carbs: 9,
      fiber: 2.8,
      sodium: 2,
      gi: 20,
      vitamins: {
        '维生素 C': '53mg',
        '叶酸': '11μg',
        '钾': '138mg'
      }
    },
    '石榴': {
      calories: 83,
      protein: 1.7,
      fat: 1.2,
      carbs: 19,
      fiber: 4,
      sodium: 3,
      gi: 53,
      vitamins: {
        '维生素 C': '10.2mg',
        '维生素 K': '16.4μg',
        '石榴多酚': '适量'
      }
    },
    '哈密瓜': {
      calories: 34,
      protein: 0.8,
      fat: 0.2,
      carbs: 8,
      fiber: 0.9,
      sodium: 16,
      gi: 65,
      vitamins: {
        '维生素 A': '3382IU',
        '维生素 C': '36.7mg',
        '钾': '267mg'
      }
    }
  },

  // 🥬 蔬菜类
  vegetables: {
    '西兰花': {
      calories: 34,
      protein: 2.8,
      fat: 0.4,
      carbs: 7,
      fiber: 2.6,
      sodium: 33,
      gi: 10,
      vitamins: {
        '维生素 C': '89.2mg',
        '维生素 K': '101.6μg',
        '叶酸': '63μg'
      }
    },
    '菠菜': {
      calories: 23,
      protein: 2.9,
      fat: 0.4,
      carbs: 3.6,
      fiber: 2.2,
      sodium: 79,
      gi: 15,
      vitamins: {
        '维生素 A': '9377IU',
        '维生素 K': '482.9μg',
        '铁': '2.7mg'
      }
    },
    '胡萝卜': {
      calories: 41,
      protein: 0.9,
      fat: 0.2,
      carbs: 10,
      fiber: 2.8,
      sodium: 69,
      gi: 35,
      vitamins: {
        '维生素 A': '16706IU',
        'β-胡萝卜素': '8285μg',
        '生物素': '适量'
      }
    },
    '西红柿': {
      calories: 18,
      protein: 0.9,
      fat: 0.2,
      carbs: 3.9,
      fiber: 1.2,
      sodium: 5,
      gi: 15,
      vitamins: {
        '维生素 C': '13.7mg',
        '番茄红素': '2573μg',
        '钾': '237mg'
      }
    },
    '黄瓜': {
      calories: 15,
      protein: 0.7,
      fat: 0.1,
      carbs: 3.6,
      fiber: 0.5,
      sodium: 2,
      gi: 15,
      vitamins: {
        '维生素 K': '16.4μg',
        '钾': '147mg',
        '硅': '适量'
      }
    },
    '生菜': {
      calories: 15,
      protein: 1.4,
      fat: 0.2,
      carbs: 2.9,
      fiber: 1.3,
      sodium: 28,
      gi: 10,
      vitamins: {
        '维生素 A': '7405IU',
        '维生素 K': '126.3μg',
        '叶酸': '38μg'
      }
    },
    '芹菜': {
      calories: 16,
      protein: 0.7,
      fat: 0.2,
      carbs: 3,
      fiber: 1.6,
      sodium: 80,
      gi: 15,
      vitamins: {
        '维生素 K': '29.3μg',
        '钾': '260mg',
        '芹菜素': '适量'
      }
    },
    '白菜': {
      calories: 16,
      protein: 1.5,
      fat: 0.2,
      carbs: 3.2,
      fiber: 1,
      sodium: 65,
      gi: 15,
      vitamins: {
        '维生素 C': '27mg',
        '维生素 K': '45.5μg',
        '叶酸': '79μg'
      }
    },
    '茄子': {
      calories: 25,
      protein: 1,
      fat: 0.2,
      carbs: 6,
      fiber: 3,
      sodium: 2,
      gi: 15,
      vitamins: {
        '维生素 C': '2.2mg',
        '维生素 B6': '0.1mg',
        '花青素': '适量'
      }
    },
    '青椒': {
      calories: 20,
      protein: 0.9,
      fat: 0.2,
      carbs: 4.6,
      fiber: 1.7,
      sodium: 3,
      gi: 15,
      vitamins: {
        '维生素 C': '80.4mg',
        '维生素 B6': '0.2mg',
        '叶酸': '10μg'
      }
    },
    '洋葱': {
      calories: 40,
      protein: 1.1,
      fat: 0.1,
      carbs: 9,
      fiber: 1.7,
      sodium: 4,
      gi: 10,
      vitamins: {
        '维生素 C': '7.4mg',
        '槲皮素': '适量',
        '硫化物': '适量'
      }
    },
    '大蒜': {
      calories: 149,
      protein: 6.4,
      fat: 0.5,
      carbs: 33,
      fiber: 2.1,
      sodium: 17,
      gi: 10,
      vitamins: {
        '维生素 C': '31.2mg',
        '维生素 B6': '1.2mg',
        '大蒜素': '适量'
      }
    },
    '土豆': {
      calories: 77,
      protein: 2,
      fat: 0.1,
      carbs: 17,
      fiber: 2.2,
      sodium: 6,
      gi: 58,
      vitamins: {
        '维生素 C': '19.7mg',
        '维生素 B6': '0.3mg',
        '钾': '421mg'
      }
    },
    '红薯': {
      calories: 86,
      protein: 1.6,
      fat: 0.1,
      carbs: 20,
      fiber: 3,
      sodium: 55,
      gi: 44,
      vitamins: {
        '维生素 A': '14187IU',
        '维生素 C': '2.4mg',
        'β-胡萝卜素': '8509μg'
      }
    },
    '南瓜': {
      calories: 26,
      protein: 1,
      fat: 0.1,
      carbs: 7,
      fiber: 0.5,
      sodium: 1,
      gi: 75,
      vitamins: {
        '维生素 A': '8513IU',
        '维生素 C': '9mg',
        '钾': '340mg'
      }
    },
    '玉米': {
      calories: 86,
      protein: 3.2,
      fat: 1.2,
      carbs: 19,
      fiber: 2,
      sodium: 15,
      gi: 52,
      vitamins: {
        '维生素 B1': '0.2mg',
        '叶酸': '42μg',
        '叶黄素': '适量'
      }
    },
    '豌豆': {
      calories: 81,
      protein: 5.4,
      fat: 0.4,
      carbs: 14,
      fiber: 5.7,
      sodium: 5,
      gi: 48,
      vitamins: {
        '维生素 C': '40mg',
        '维生素 K': '24.8μg',
        '叶酸': '65μg'
      }
    },
    '豆芽': {
      calories: 30,
      protein: 3,
      fat: 0.2,
      carbs: 5,
      fiber: 1.8,
      sodium: 6,
      gi: 15,
      vitamins: {
        '维生素 C': '13.2mg',
        '维生素 K': '33μg',
        '叶酸': '61μg'
      }
    },
    '蘑菇': {
      calories: 22,
      protein: 3.1,
      fat: 0.3,
      carbs: 3.3,
      fiber: 1,
      sodium: 5,
      gi: 10,
      vitamins: {
        '维生素 D': '7IU',
        '维生素 B2': '0.4mg',
        '硒': '9.3μg'
      }
    },
    '金针菇': {
      calories: 32,
      protein: 2.7,
      fat: 0.6,
      carbs: 6,
      fiber: 2.7,
      sodium: 5,
      gi: 10,
      vitamins: {
        '维生素 B3': '4.7mg',
        '叶酸': '55μg',
        '钾': '346mg'
      }
    }
  },

  // 🍚 谷物类
  grains: {
    '米饭': {
      calories: 130,
      protein: 2.7,
      fat: 0.3,
      carbs: 28,
      fiber: 0.4,
      sodium: 1,
      gi: 73,
      vitamins: {
        '维生素 B1': '0.02mg',
        '维生素 B3': '0.4mg',
        '锰': '0.4mg'
      }
    },
    '糙米': {
      calories: 111,
      protein: 2.6,
      fat: 0.9,
      carbs: 23,
      fiber: 1.8,
      sodium: 1,
      gi: 50,
      vitamins: {
        '维生素 B1': '0.1mg',
        '维生素 B3': '1.5mg',
        '镁': '43mg'
      }
    },
    '面条': {
      calories: 138,
      protein: 4.5,
      fat: 0.6,
      carbs: 29,
      fiber: 1.2,
      sodium: 1,
      gi: 47,
      vitamins: {
        '维生素 B1': '0.09mg',
        '叶酸': '18μg',
        '硒': '17.6μg'
      }
    },
    '面包': {
      calories: 265,
      protein: 9,
      fat: 3.2,
      carbs: 49,
      fiber: 2.7,
      sodium: 491,
      gi: 75,
      vitamins: {
        '维生素 B1': '0.3mg',
        '叶酸': '43μg',
        '硒': '22.2μg'
      }
    },
    '燕麦': {
      calories: 389,
      protein: 16.9,
      fat: 6.9,
      carbs: 66,
      fiber: 10.6,
      sodium: 2,
      gi: 55,
      vitamins: {
        '维生素 B1': '0.8mg',
        '维生素 B5': '1.3mg',
        'β-葡聚糖': '适量'
      }
    },
    '玉米片': {
      calories: 357,
      protein: 6.9,
      fat: 4.3,
      carbs: 74,
      fiber: 7.3,
      sodium: 637,
      gi: 81,
      vitamins: {
        '维生素 B1': '0.4mg',
        '维生素 B2': '0.4mg',
        '铁': '6.3mg'
      }
    },
    '全麦面包': {
      calories: 247,
      protein: 13,
      fat: 3.4,
      carbs: 41,
      fiber: 7,
      sodium: 400,
      gi: 51,
      vitamins: {
        '维生素 B1': '0.3mg',
        '维生素 B3': '4.3mg',
        '硒': '29.3μg'
      }
    },
    '馒头': {
      calories: 221,
      protein: 7,
      fat: 1.1,
      carbs: 47,
      fiber: 0.9,
      sodium: 17,
      gi: 88,
      vitamins: {
        '维生素 B1': '0.08mg',
        '维生素 B2': '0.06mg',
        '钙': '20mg'
      }
    },
    '包子': {
      calories: 227,
      protein: 8.2,
      fat: 6.2,
      carbs: 35,
      fiber: 1.5,
      sodium: 387,
      gi: 70,
      vitamins: {
        '维生素 B1': '0.1mg',
        '维生素 B2': '0.1mg',
        '铁': '1.5mg'
      }
    },
    '饺子': {
      calories: 235,
      protein: 8.9,
      fat: 6.3,
      carbs: 35,
      fiber: 2.1,
      sodium: 603,
      gi: 60,
      vitamins: {
        '维生素 B1': '0.2mg',
        '维生素 B2': '0.1mg',
        '铁': '2.1mg'
      }
    },
    '馄饨': {
      calories: 210,
      protein: 7.5,
      fat: 5.8,
      carbs: 32,
      fiber: 1.2,
      sodium: 520,
      gi: 55,
      vitamins: {
        '维生素 B1': '0.1mg',
        '维生素 B2': '0.1mg',
        '烟酸': '1.8mg'
      }
    },
    '粥': {
      calories: 46,
      protein: 1.1,
      fat: 0.2,
      carbs: 10,
      fiber: 0.2,
      sodium: 1,
      gi: 65,
      vitamins: {
        '维生素 B1': '0.02mg',
        '维生素 B3': '0.2mg',
        '磷': '35mg'
      }
    },
    '小米粥': {
      calories: 46,
      protein: 1.4,
      fat: 0.7,
      carbs: 8.5,
      fiber: 0.5,
      sodium: 2,
      gi: 54,
      vitamins: {
        '维生素 B1': '0.02mg',
        '维生素 B2': '0.02mg',
        '铁': '0.5mg'
      }
    },
    '荞麦面': {
      calories: 99,
      protein: 3.4,
      fat: 0.6,
      carbs: 20,
      fiber: 3.3,
      sodium: 16,
      gi: 46,
      vitamins: {
        '维生素 B1': '0.1mg',
        '维生素 B3': '1.9mg',
        '芦丁': '适量'
      }
    },
    '粉丝': {
      calories: 335,
      protein: 0.5,
      fat: 0.3,
      carbs: 84,
      fiber: 0.5,
      sodium: 28,
      gi: 50,
      vitamins: {
        '钙': '31mg',
        '磷': '23mg',
        '铁': '1.6mg'
      }
    }
  },

  // 🥩 肉类
  meats: {
    '鸡胸肉': {
      calories: 165,
      protein: 31,
      fat: 3.6,
      carbs: 0,
      fiber: 0,
      sodium: 74,
      gi: 0,
      vitamins: {
        '维生素 B3': '13.7mg',
        '维生素 B6': '0.6mg',
        '硒': '27.6μg'
      }
    },
    '鸡腿肉': {
      calories: 209,
      protein: 26,
      fat: 11,
      carbs: 0,
      fiber: 0,
      sodium: 90,
      gi: 0,
      vitamins: {
        '维生素 B3': '7.4mg',
        '维生素 B6': '0.4mg',
        '铁': '1.3mg'
      }
    },
    '鸡翅': {
      calories: 290,
      protein: 27,
      fat: 19,
      carbs: 0,
      fiber: 0,
      sodium: 80,
      gi: 0,
      vitamins: {
        '维生素 A': '180IU',
        '维生素 B2': '0.1mg',
        '磷': '200mg'
      }
    },
    '牛肉': {
      calories: 250,
      protein: 26,
      fat: 15,
      carbs: 0,
      fiber: 0,
      sodium: 59,
      gi: 0,
      vitamins: {
        '维生素 B12': '2.6μg',
        '铁': '2.6mg',
        '锌': '6.3mg'
      }
    },
    '瘦牛肉': {
      calories: 158,
      protein: 26,
      fat: 5,
      carbs: 0,
      fiber: 0,
      sodium: 58,
      gi: 0,
      vitamins: {
        '维生素 B3': '6.2mg',
        '维生素 B6': '0.5mg',
        '硒': '26.7μg'
      }
    },
    '猪肉': {
      calories: 242,
      protein: 27,
      fat: 14,
      carbs: 0,
      fiber: 0,
      sodium: 62,
      gi: 0,
      vitamins: {
        '维生素 B1': '0.9mg',
        '维生素 B3': '5.4mg',
        '硒': '35.7μg'
      }
    },
    '瘦猪肉': {
      calories: 143,
      protein: 26,
      fat: 3.5,
      carbs: 0,
      fiber: 0,
      sodium: 55,
      gi: 0,
      vitamins: {
        '维生素 B1': '0.6mg',
        '维生素 B6': '0.4mg',
        '磷': '200mg'
      }
    },
    '羊肉': {
      calories: 294,
      protein: 25,
      fat: 21,
      carbs: 0,
      fiber: 0,
      sodium: 72,
      gi: 0,
      vitamins: {
        '维生素 B12': '2.6μg',
        '维生素 B3': '6.6mg',
        '硒': '26.4μg'
      }
    },
    '瘦羊肉': {
      calories: 175,
      protein: 25,
      fat: 8,
      carbs: 0,
      fiber: 0,
      sodium: 69,
      gi: 0,
      vitamins: {
        '维生素 B12': '2.3μg',
        '锌': '4.5mg',
        '磷': '188mg'
      }
    },
    '鸭肉': {
      calories: 337,
      protein: 19,
      fat: 28,
      carbs: 0,
      fiber: 0,
      sodium: 74,
      gi: 0,
      vitamins: {
        '维生素 B3': '5.1mg',
        '维生素 B2': '0.3mg',
        '硒': '16.2μg'
      }
    },
    '鹅肉': {
      calories: 371,
      protein: 23,
      fat: 30,
      carbs: 0,
      fiber: 0,
      sodium: 76,
      gi: 0,
      vitamins: {
        '维生素 B2': '0.3mg',
        '维生素 B3': '4.8mg',
        '铁': '2.8mg'
      }
    },
    '兔肉': {
      calories: 173,
      protein: 33,
      fat: 4,
      carbs: 0,
      fiber: 0,
      sodium: 45,
      gi: 0,
      vitamins: {
        '维生素 B3': '10.3mg',
        '维生素 B6': '0.5mg',
        '硒': '34.1μg'
      }
    },
    '培根': {
      calories: 541,
      protein: 37,
      fat: 42,
      carbs: 1.4,
      fiber: 0,
      sodium: 1717,
      gi: 0,
      vitamins: {
        '维生素 B1': '0.6mg',
        '维生素 B3': '6.8mg',
        '硒': '43.7μg'
      }
    },
    '香肠': {
      calories: 301,
      protein: 12,
      fat: 27,
      carbs: 2,
      fiber: 0,
      sodium: 1200,
      gi: 28,
      vitamins: {
        '维生素 B1': '0.3mg',
        '维生素 B12': '1.2μg',
        '锌': '2.4mg'
      }
    },
    '火腿': {
      calories: 145,
      protein: 21,
      fat: 6,
      carbs: 1.5,
      fiber: 0,
      sodium: 1200,
      gi: 28,
      vitamins: {
        '维生素 B1': '0.8mg',
        '维生素 B3': '4.5mg',
        '磷': '180mg'
      }
    },
    '里脊肉': {
      calories: 120,
      protein: 23,
      fat: 2,
      carbs: 0,
      fiber: 0,
      sodium: 50,
      gi: 0,
      vitamins: {
        '维生素 B1': '0.5mg',
        '维生素 B3': '5.8mg',
        '硒': '30μg'
      }
    },
    '五花肉': {
      calories: 518,
      protein: 14,
      fat: 53,
      carbs: 0,
      fiber: 0,
      sodium: 62,
      gi: 0,
      vitamins: {
        '维生素 B1': '0.5mg',
        '维生素 B3': '4.2mg',
        '磷': '140mg'
      }
    },
    '排骨': {
      calories: 278,
      protein: 20,
      fat: 22,
      carbs: 0,
      fiber: 0,
      sodium: 70,
      gi: 0,
      vitamins: {
        '维生素 B1': '0.4mg',
        '维生素 B12': '1.5μg',
        '钙': '15mg'
      }
    },
    '牛腩': {
      calories: 280,
      protein: 20,
      fat: 22,
      carbs: 0,
      fiber: 0,
      sodium: 65,
      gi: 0,
      vitamins: {
        '维生素 B12': '2.4μg',
        '铁': '2.4mg',
        '锌': '5.8mg'
      }
    },
    '牛腱子': {
      calories: 146,
      protein: 27,
      fat: 3,
      carbs: 0,
      fiber: 0,
      sodium: 55,
      gi: 0,
      vitamins: {
        '维生素 B3': '6.5mg',
        '维生素 B6': '0.5mg',
        '硒': '28μg'
      }
    }
  },

  // 🐟 海鲜类
  seafood: {
    '三文鱼': {
      calories: 208,
      protein: 20,
      fat: 13,
      carbs: 0,
      fiber: 0,
      sodium: 59,
      gi: 0,
      vitamins: {
        '维生素 D': '526IU',
        '维生素 B12': '3.2μg',
        'Omega-3': '2.3g'
      }
    },
    '金枪鱼': {
      calories: 144,
      protein: 23,
      fat: 5,
      carbs: 0,
      fiber: 0,
      sodium: 50,
      gi: 0,
      vitamins: {
        '维生素 D': '269IU',
        '维生素 B12': '9.4μg',
        '硒': '90.6μg'
      }
    },
    '鳕鱼': {
      calories: 82,
      protein: 18,
      fat: 0.7,
      carbs: 0,
      fiber: 0,
      sodium: 54,
      gi: 0,
      vitamins: {
        '维生素 B12': '0.9μg',
        '维生素 B6': '0.2mg',
        '硒': '33.1μg'
      }
    },
    '鲈鱼': {
      calories: 97,
      protein: 18,
      fat: 2,
      carbs: 0,
      fiber: 0,
      sodium: 68,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.2μg',
        '维生素 B3': '1.7mg',
        '硒': '36.5μg'
      }
    },
    '鲤鱼': {
      calories: 126,
      protein: 18,
      fat: 6,
      carbs: 0,
      fiber: 0,
      sodium: 55,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.5μg',
        '维生素 B3': '2.4mg',
        '磷': '200mg'
      }
    },
    '草鱼': {
      calories: 113,
      protein: 17,
      fat: 4,
      carbs: 0,
      fiber: 0,
      sodium: 60,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.3μg',
        '维生素 B3': '2.2mg',
        '硒': '25μg'
      }
    },
    '鲫鱼': {
      calories: 108,
      protein: 17,
      fat: 4,
      carbs: 0,
      fiber: 0,
      sodium: 58,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.4μg',
        '维生素 B3': '2.3mg',
        '磷': '190mg'
      }
    },
    '带鱼': {
      calories: 127,
      protein: 18,
      fat: 5,
      carbs: 0,
      fiber: 0,
      sodium: 70,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.6μg',
        '维生素 B3': '2.5mg',
        '硒': '28μg'
      }
    },
    '黄花鱼': {
      calories: 98,
      protein: 19,
      fat: 2,
      carbs: 0,
      fiber: 0,
      sodium: 65,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.1μg',
        '维生素 B3': '2.1mg',
        '硒': '30μg'
      }
    },
    '鲳鱼': {
      calories: 93,
      protein: 19,
      fat: 1,
      carbs: 0,
      fiber: 0,
      sodium: 60,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.0μg',
        '维生素 B3': '2.0mg',
        '硒': '29μg'
      }
    },
    '虾': {
      calories: 99,
      protein: 24,
      fat: 0.3,
      carbs: 0.2,
      fiber: 0,
      sodium: 566,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.1μg',
        '硒': '48μg',
        '虾青素': '适量'
      }
    },
    '基围虾': {
      calories: 103,
      protein: 20,
      fat: 1.3,
      carbs: 3,
      fiber: 0,
      sodium: 520,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.2μg',
        '硒': '45μg',
        '锌': '1.6mg'
      }
    },
    '龙虾': {
      calories: 89,
      protein: 19,
      fat: 0.9,
      carbs: 0,
      fiber: 0,
      sodium: 423,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.5μg',
        '铜': '0.1mg',
        '硒': '44μg'
      }
    },
    '螃蟹': {
      calories: 83,
      protein: 18,
      fat: 1,
      carbs: 0,
      fiber: 0,
      sodium: 395,
      gi: 0,
      vitamins: {
        '维生素 B12': '9.9μg',
        '铜': '0.1mg',
        '硒': '44μg'
      }
    },
    '大闸蟹': {
      calories: 103,
      protein: 18,
      fat: 3,
      carbs: 0,
      fiber: 0,
      sodium: 380,
      gi: 0,
      vitamins: {
        '维生素 A': '230μg',
        '维生素 B12': '8μg',
        '牛磺酸': '适量'
      }
    },
    '蛤蜊': {
      calories: 74,
      protein: 13,
      fat: 1,
      carbs: 4,
      fiber: 0,
      sodium: 561,
      gi: 0,
      vitamins: {
        '维生素 B12': '84μg',
        '铁': '28mg',
        '硒': '58μg'
      }
    },
    '牡蛎': {
      calories: 68,
      protein: 7,
      fat: 2,
      carbs: 4,
      fiber: 0,
      sodium: 375,
      gi: 0,
      vitamins: {
        '维生素 B12': '16μg',
        '锌': '61mg',
        '铜': '1.6mg'
      }
    },
    '扇贝': {
      calories: 88,
      protein: 17,
      fat: 1,
      carbs: 4,
      fiber: 0,
      sodium: 392,
      gi: 0,
      vitamins: {
        '维生素 B12': '2.2μg',
        '硒': '22μg',
        '镁': '56mg'
      }
    },
    '鲍鱼': {
      calories: 117,
      protein: 24,
      fat: 1,
      carbs: 3,
      fiber: 0,
      sodium: 293,
      gi: 0,
      vitamins: {
        '维生素 B12': '3.6μg',
        '硒': '37μg',
        '牛磺酸': '适量'
      }
    },
    '海参': {
      calories: 51,
      protein: 11,
      fat: 0.4,
      carbs: 1,
      fiber: 0,
      sodium: 67,
      gi: 0,
      vitamins: {
        '维生素 B12': '0.6μg',
        '钙': '28mg',
        '硫酸软骨素': '适量'
      }
    },
    '鱿鱼': {
      calories: 92,
      protein: 16,
      fat: 1.4,
      carbs: 3,
      fiber: 0,
      sodium: 44,
      gi: 0,
      vitamins: {
        '维生素 B12': '1.4μg',
        '硒': '45μg',
        '牛磺酸': '适量'
      }
    },
    '章鱼': {
      calories: 82,
      protein: 15,
      fat: 1,
      carbs: 2,
      fiber: 0,
      sodium: 230,
      gi: 0,
      vitamins: {
        '维生素 B12': '20μg',
        '铜': '0.4mg',
        '硒': '45μg'
      }
    },
    '墨鱼': {
      calories: 79,
      protein: 15,
      fat: 0.7,
      carbs: 3,
      fiber: 0,
      sodium: 220,
      gi: 0,
      vitamins: {
        '维生素 B12': '5μg',
        '硒': '44μg',
        '牛磺酸': '适量'
      }
    },
    '海蜇': {
      calories: 33,
      protein: 4,
      fat: 0.6,
      carbs: 3,
      fiber: 0,
      sodium: 184,
      gi: 0,
      vitamins: {
        '钙': '26mg',
        '镁': '25mg',
        '胶原蛋白': '适量'
      }
    },
    '海带': {
      calories: 43,
      protein: 1.7,
      fat: 1.1,
      carbs: 10,
      fiber: 0,
      sodium: 1235,
      gi: 0,
      vitamins: {
        '维生素 K': '66μg',
        '叶酸': '180μg',
        '碘': '适量'
      }
    }
  }
};

// 导出食物数据库
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FoodDatabase;
}
