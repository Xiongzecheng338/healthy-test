/**
 * 缓存管理模块
 * 提供本地缓存功能，支持 TTL 过期时间
 * @module utils/cache
 */

import { AppConfig } from '../config/app.config.js';

export class Cache {
    /**
     * 创建缓存实例
     * @param {string} prefix - 缓存键前缀
     */
    constructor(prefix = AppConfig.STORAGE.PREFIX) {
        this.prefix = prefix;
        this.maxItems = AppConfig.STORAGE.MAX_ITEMS;
        this.defaultTTL = AppConfig.STORAGE.MAX_AGE;
    }
    
    /**
     * 设置缓存项
     * @param {string} key - 缓存键
     * @param {any} value - 缓存值
     * @param {number} ttl - 过期时间 (毫秒)，默认 30 天
     * @returns {boolean} 是否设置成功
     */
    set(key, value, ttl = this.defaultTTL) {
        try {
            // 检查是否超过最大缓存项数
            const keys = this.getAllKeys();
            if (keys.length >= this.maxItems) {
                // 清理过期缓存
                this.clearExpired();
                
                // 如果仍然超过限制，删除最旧的缓存
                if (keys.length >= this.maxItems) {
                    const oldestKey = keys[0];
                    this.remove(oldestKey);
                }
            }
            
            const item = {
                value: value,
                expiry: Date.now() + ttl,
                createdAt: Date.now()
            };
            
            localStorage.setItem(this.prefix + key, JSON.stringify(item));
            return true;
        } catch (error) {
            console.error('缓存设置失败:', error);
            return false;
        }
    }
    
    /**
     * 获取缓存项
     * @param {string} key - 缓存键
     * @param {any} defaultValue - 默认值（缓存不存在或已过期时返回）
     * @returns {any} 缓存值或默认值
     */
    get(key, defaultValue = null) {
        try {
            const itemStr = localStorage.getItem(this.prefix + key);
            
            if (!itemStr) {
                return defaultValue;
            }
            
            const item = JSON.parse(itemStr);
            
            // 检查是否过期
            if (Date.now() > item.expiry) {
                this.remove(key);
                return defaultValue;
            }
            
            return item.value;
        } catch (error) {
            console.error('缓存获取失败:', error);
            return defaultValue;
        }
    }
    
    /**
     * 删除缓存项
     * @param {string} key - 缓存键
     * @returns {boolean} 是否删除成功
     */
    remove(key) {
        try {
            localStorage.removeItem(this.prefix + key);
            return true;
        } catch (error) {
            console.error('缓存删除失败:', error);
            return false;
        }
    }
    
    /**
     * 清空所有缓存
     * @returns {boolean} 是否清空成功
     */
    clear() {
        try {
            const keys = this.getAllKeys();
            keys.forEach(key => {
                localStorage.removeItem(key);
            });
            return true;
        } catch (error) {
            console.error('缓存清空失败:', error);
            return false;
        }
    }
    
    /**
     * 清空过期缓存
     * @returns {number} 清理的缓存数量
     */
    clearExpired() {
        try {
            const keys = this.getAllKeys();
            let count = 0;
            
            keys.forEach(key => {
                try {
                    const itemStr = localStorage.getItem(key);
                    if (!itemStr) return;
                    
                    const item = JSON.parse(itemStr);
                    if (Date.now() > item.expiry) {
                        localStorage.removeItem(key);
                        count++;
                    }
                } catch (e) {
                    // 忽略解析错误的缓存项
                }
            });
            
            return count;
        } catch (error) {
            console.error('清理过期缓存失败:', error);
            return 0;
        }
    }
    
    /**
     * 获取所有缓存键
     * @returns {string[]} 缓存键数组
     */
    getAllKeys() {
        try {
            const keys = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(this.prefix)) {
                    keys.push(key);
                }
            }
            return keys;
        } catch (error) {
            console.error('获取缓存键失败:', error);
            return [];
        }
    }
    
    /**
     * 获取缓存统计信息
     * @returns {Object} 统计信息
     */
    getStats() {
        try {
            const keys = this.getAllKeys();
            let totalSize = 0;
            let expiredCount = 0;
            
            keys.forEach(key => {
                const itemStr = localStorage.getItem(key);
                if (itemStr) {
                    totalSize += itemStr.length;
                    
                    try {
                        const item = JSON.parse(itemStr);
                        if (Date.now() > item.expiry) {
                            expiredCount++;
                        }
                    } catch (e) {
                        // 忽略解析错误
                    }
                }
            });
            
            return {
                totalItems: keys.length,
                expiredItems: expiredCount,
                totalSize: totalSize, // 字符数
                sizeInKB: (totalSize / 1024).toFixed(2)
            };
        } catch (error) {
            console.error('获取缓存统计失败:', error);
            return {
                totalItems: 0,
                expiredItems: 0,
                totalSize: 0,
                sizeInKB: '0'
            };
        }
    }
    
    /**
     * 检查缓存项是否存在（未过期）
     * @param {string} key - 缓存键
     * @returns {boolean} 是否存在
     */
    has(key) {
        const value = this.get(key);
        return value !== null;
    }
    
    /**
     * 获取缓存项的剩余生存时间
     * @param {string} key - 缓存键
     * @returns {number} 剩余毫秒数，-1 表示不存在，0 表示已过期
     */
    getTTL(key) {
        try {
            const itemStr = localStorage.getItem(this.prefix + key);
            
            if (!itemStr) {
                return -1;
            }
            
            const item = JSON.parse(itemStr);
            const remaining = item.expiry - Date.now();
            
            return remaining > 0 ? remaining : 0;
        } catch (error) {
            console.error('获取缓存 TTL 失败:', error);
            return -1;
        }
    }
}

// 创建全局缓存实例
export const cache = new Cache();

export default Cache;
