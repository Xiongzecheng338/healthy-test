/**
 * 健康计算器模块
 * 提供各类健康指标计算功能
 * @module calculator/HealthCalculator
 */

import { AppConfig } from '../config/app.config.js';

/**
 * 健康指标计算结果
 * @typedef {Object} HealthMetric
 * @property {number} value - 计算值
 * @property {string} status - 状态描述
 * @property {string} level - 等级（normal, warning, danger）
 */

export class HealthCalculator {
    /**
     * 计算身体质量指数 (BMI)
     * @param {number} weight - 体重 (kg)
     * @param {number} height - 身高 (cm)
     * @returns {HealthMetric} BMI 计算结果
     * @throws {Error} 当参数无效时
     * 
     * @example
     * const result = HealthCalculator.calculateBMI(70, 175);
     * console.log(result); // { value: 22.86, status: '正常', level: 'normal' }
     */
    static calculateBMI(weight, height) {
        // 参数验证
        if (typeof weight !== 'number' || weight <= 0 || weight > 300) {
            throw new Error('体重必须是 0-300 之间的正数');
        }
        if (typeof height !== 'number' || height <= 0 || height > 250) {
            throw new Error('身高必须是 0-250 之间的正数');
        }
        
        // 计算 BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // 判断状态
        const { UNDERWEIGHT, NORMAL, OVERWEIGHT, OBESE } = AppConfig.HEALTH.BMI;
        let status, level;
        
        if (bmi < UNDERWEIGHT) {
            status = '偏瘦';
            level = 'warning';
        } else if (bmi < NORMAL) {
            status = '正常';
            level = 'normal';
        } else if (bmi < OVERWEIGHT) {
            status = '超重';
            level = 'warning';
        } else if (bmi < OBESE) {
            status = '肥胖';
            level = 'danger';
        } else {
            status = '重度肥胖';
            level = 'danger';
        }
        
        return {
            value: parseFloat(bmi.toFixed(1)),
            status,
            level,
            category: this.getBMICategory(bmi)
        };
    }
    
    /**
     * 获取 BMI 分类
     * @param {number} bmi - BMI 值
     * @returns {string} 分类名称
     * @private
     */
    static getBMICategory(bmi) {
        const { UNDERWEIGHT, NORMAL, OVERWEIGHT, OBESE } = AppConfig.HEALTH.BMI;
        
        if (bmi < UNDERWEIGHT) return 'underweight';
        if (bmi < NORMAL) return 'normal';
        if (bmi < OVERWEIGHT) return 'overweight';
        if (bmi < OBESE) return 'obese';
        return 'severely_obese';
    }
    
    /**
     * 计算基础代谢率 (BMR) - Mifflin-St Jeor 方程
     * @param {number} weight - 体重 (kg)
     * @param {number} height - 身高 (cm)
     * @param {number} age - 年龄 (岁)
     * @param {string} gender - 性别 ('male' | 'female')
     * @returns {HealthMetric} BMR 计算结果
     * @throws {Error} 当参数无效时
     */
    static calculateBMR(weight, height, age, gender) {
        // 参数验证
        if (typeof weight !== 'number' || weight <= 0) {
            throw new Error('体重必须是正数');
        }
        if (typeof height !== 'number' || height <= 0) {
            throw new Error('身高必须是正数');
        }
        if (typeof age !== 'number' || age < 0 || age > 150) {
            throw new Error('年龄必须是 0-150 之间的数字');
        }
        if (!['male', 'female'].includes(gender)) {
            throw new Error('性别必须是 male 或 female');
        }
        
        // Mifflin-St Jeor 方程
        const base = 10 * weight + 6.25 * height - 5 * age;
        const bmr = gender === 'male' ? base + 5 : base - 161;
        
        return {
            value: Math.round(bmr),
            unit: 'kcal/day',
            status: '正常',
            level: 'normal'
        };
    }
    
    /**
     * 计算体脂率 (BFP) - 基于 BMI 估算
     * @param {number} bmi - BMI 值
     * @param {number} age - 年龄 (岁)
     * @param {string} gender - 性别 ('male' | 'female')
     * @returns {HealthMetric} 体脂率计算结果
     */
    static calculateBodyFatPercentage(bmi, age, gender) {
        // 参数验证
        if (typeof bmi !== 'number' || bmi <= 0) {
            throw new Error('BMI 必须是正数');
        }
        if (typeof age !== 'number' || age < 0) {
            throw new Error('年龄必须是正数');
        }
        
        // Deurenberg 公式
        let bfp;
        if (gender === 'male') {
            bfp = 1.20 * bmi + 0.23 * age - 16.2;
        } else {
            bfp = 1.20 * bmi + 0.23 * age - 5.4;
        }
        
        bfp = Math.max(0, bfp); // 体脂率不能为负
        
        // 判断状态
        const ranges = AppConfig.HEALTH.BFP[gender.toUpperCase()];
        let status, level;
        
        if (bfp < ranges.ESSENTIAL[1]) {
            status = '过低';
            level = 'danger';
        } else if (bfp < ranges.ATHLETIC[1]) {
            status = '运动员水平';
            level = 'normal';
        } else if (bfp < ranges.FITNESS[1]) {
            status = '健康';
            level = 'normal';
        } else if (bfp < ranges.AVERAGE[1]) {
            status = '偏高';
            level = 'warning';
        } else {
            status = '肥胖';
            level = 'danger';
        }
        
        return {
            value: parseFloat(bfp.toFixed(1)),
            unit: '%',
            status,
            level
        };
    }
    
    /**
     * 计算理想体重范围
     * @param {number} height - 身高 (cm)
     * @returns {Object} 理想体重范围
     */
    static calculateIdealWeight(height) {
        // 参数验证
        if (typeof height !== 'number' || height <= 0) {
            throw new Error('身高必须是正数');
        }
        
        const heightInMeters = height / 100;
        const minWeight = 18.5 * heightInMeters * heightInMeters;
        const maxWeight = 24 * heightInMeters * heightInMeters;
        const idealWeight = (minWeight + maxWeight) / 2;
        
        return {
            min: parseFloat(minWeight.toFixed(1)),
            max: parseFloat(maxWeight.toFixed(1)),
            ideal: parseFloat(idealWeight.toFixed(1)),
            unit: 'kg'
        };
    }
    
    /**
     * 计算每日总能量消耗 (TDEE)
     * @param {number} bmr - 基础代谢率
     * @param {number} activityLevel - 活动水平 (1.2-2.4)
     * @returns {HealthMetric} TDEE 计算结果
     */
    static calculateTDEE(bmr, activityLevel = 1.55) {
        // 参数验证
        if (typeof bmr !== 'number' || bmr <= 0) {
            throw new Error('BMR 必须是正数');
        }
        if (typeof activityLevel !== 'number' || activityLevel < 1.2 || activityLevel > 2.4) {
            throw new Error('活动水平必须在 1.2-2.4 之间');
        }
        
        const tdee = bmr * activityLevel;
        
        return {
            value: Math.round(tdee),
            unit: 'kcal/day',
            status: '正常',
            level: 'normal',
            activityLevel: this.getActivityLevelDescription(activityLevel)
        };
    }
    
    /**
     * 获取活动水平描述
     * @param {number} level - 活动水平系数
     * @returns {string} 活动水平描述
     * @private
     */
    static getActivityLevelDescription(level) {
        if (level < 1.4) return '久坐不动';
        if (level < 1.6) return '轻度活动';
        if (level < 1.8) return '中度活动';
        if (level < 2.0) return '高度活动';
        return '极度活动';
    }
    
    /**
     * 计算腰臀比 (WHR)
     * @param {number} waist - 腰围 (cm)
     * @param {number} hip - 臀围 (cm)
     * @param {string} gender - 性别
     * @returns {HealthMetric} 腰臀比结果
     */
    static calculateWHR(waist, hip, gender) {
        // 参数验证
        if (typeof waist !== 'number' || waist <= 0) {
            throw new Error('腰围必须是正数');
        }
        if (typeof hip !== 'number' || hip <= 0) {
            throw new Error('臀围必须是正数');
        }
        
        const whr = waist / hip;
        
        // 健康风险判断
        const riskThreshold = gender === 'male' ? 0.9 : 0.85;
        let status, level;
        
        if (whr < riskThreshold) {
            status = '低风险';
            level = 'normal';
        } else {
            status = '高风险';
            level = 'warning';
        }
        
        return {
            value: parseFloat(whr.toFixed(2)),
            status,
            level,
            riskThreshold
        };
    }
    
    /**
     * 计算每日建议饮水量
     * @param {number} weight - 体重 (kg)
     * @param {number} activityMinutes - 每日运动时间 (分钟)
     * @returns {Object} 饮水量建议
     */
    static calculateDailyWaterIntake(weight, activityMinutes = 0) {
        // 参数验证
        if (typeof weight !== 'number' || weight <= 0) {
            throw new Error('体重必须是正数');
        }
        
        // 基础公式：体重 (kg) × 35ml
        let baseIntake = weight * 35;
        
        // 运动额外补充：每 30 分钟补充 500ml
        const extraIntake = Math.floor(activityMinutes / 30) * 500;
        
        const totalIntake = baseIntake + extraIntake;
        
        return {
            base: Math.round(baseIntake),
            extra: Math.round(extraIntake),
            total: Math.round(totalIntake),
            unit: 'ml',
            recommendation: this.getWaterRecommendation(totalIntake)
        };
    }
    
    /**
     * 获取饮水建议
     * @param {number} intake - 饮水量 (ml)
     * @returns {string} 建议描述
     * @private
     */
    static getWaterRecommendation(intake) {
        if (intake < 1500) {
            return '饮水量偏少，建议增加';
        } else if (intake < 2500) {
            return '饮水量适中，继续保持';
        } else {
            return '饮水量充足，注意不要过量';
        }
    }
    
    /**
     * 计算卡路里目标
     * @param {number} tdee - 每日总能量消耗
     * @param {string} goal - 目标 ('lose', 'maintain', 'gain')
     * @param {number} goalWeight - 目标体重变化 (kg/周)
     * @returns {Object} 卡路里目标
     */
    static calculateCalorieGoal(tdee, goal = 'maintain', goalWeight = 0.5) {
        // 参数验证
        if (typeof tdee !== 'number' || tdee <= 0) {
            throw new Error('TDEE 必须是正数');
        }
        
        // 1kg 脂肪 ≈ 7700 卡路里
        const caloriePerKg = 7700;
        const dailyAdjustment = (goalWeight * caloriePerKg) / 7;
        
        let targetCalories;
        let goalDescription;
        
        switch (goal) {
            case 'lose':
                targetCalories = tdee - dailyAdjustment;
                goalDescription = `每周减重 ${goalWeight}kg`;
                break;
            case 'gain':
                targetCalories = tdee + dailyAdjustment;
                goalDescription = `每周增重 ${goalWeight}kg`;
                break;
            default:
                targetCalories = tdee;
                goalDescription = '维持当前体重';
        }
        
        // 确保安全范围
        targetCalories = Math.max(targetCalories, 1200); // 最低 1200 卡路里
        
        return {
            tdee: Math.round(tdee),
            target: Math.round(targetCalories),
            adjustment: Math.round(goal === 'lose' ? -dailyAdjustment : dailyAdjustment),
            goal: goalDescription,
            unit: 'kcal/day',
            safe: targetCalories >= 1200
        };
    }
}

export default HealthCalculator;
