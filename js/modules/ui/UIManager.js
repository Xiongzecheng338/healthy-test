/**
 * UI 管理器模块
 * 提供统一的 UI 组件管理和交互功能
 * @module ui/UIManager
 */

import { AppConfig } from '../config/app.config.js';

export class UIManager {
    /**
     * 显示 Toast 提示
     * @param {string} message - 提示信息
     * @param {number} duration - 显示时长 (毫秒)
     * @param {string} type - 类型 (info, success, warning, error)
     * @returns {HTMLElement} Toast 元素
     */
    static showToast(message, duration = AppConfig.UI.TOAST_DURATION, type = 'info') {
        // 移除已存在的 toast
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }
        
        // 创建 toast 元素
        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        
        // 图标映射
        const icons = {
            info: 'ℹ️',
            success: '✅',
            warning: '⚠️',
            error: '❌'
        };
        
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">${icons[type] || icons.info}</span>
                <span class="toast-message">${message}</span>
            </div>
        `;
        
        // 样式设置
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-100%);
            background: ${this.getToastBackground(type)};
            color: white;
            padding: 1rem 2rem;
            border-radius: 1rem;
            font-weight: 600;
            z-index: 99999;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            max-width: 90%;
            text-align: center;
            transition: transform 0.3s ease-out;
            animation: slide-down 0.3s ease-out forwards;
        `;
        
        document.body.appendChild(toast);
        
        // 自动移除
        setTimeout(() => {
            toast.style.animation = 'slide-up 0.3s ease-out forwards';
            setTimeout(() => toast.remove(), 300);
        }, duration);
        
        return toast;
    }
    
    /**
     * 获取 Toast 背景色
     * @param {string} type - 类型
     * @returns {string} 背景色值
     * @private
     */
    static getToastBackground(type) {
        const colors = {
            info: '#0ea5e9',
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444'
        };
        return colors[type] || colors.info;
    }
    
    /**
     * 显示模态框
     * @param {Object} options - 模态框配置
     * @param {string} options.title - 标题
     * @param {string} options.content - 内容
     * @param {Function} options.onConfirm - 确认回调
     * @param {Function} options.onCancel - 取消回调
     * @returns {HTMLElement} 模态框元素
     */
    static showModal({ title, content, onConfirm, onCancel }) {
        // 移除已存在的模态框
        const existingModal = document.querySelector('.custom-modal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'custom-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <h2 class="modal-title">${title}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    <button class="modal-btn modal-btn-cancel">取消</button>
                    <button class="modal-btn modal-btn-confirm">确认</button>
                </div>
            </div>
        `;
        
        // 样式设置
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 99998;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease-out;
        `;
        
        const container = modal.querySelector('.modal-container');
        container.style.cssText = `
            background: white;
            border-radius: 1rem;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
            animation: slide-up 0.3s ease-out;
        `;
        
        document.body.appendChild(modal);
        
        // 绑定事件
        const closeBtn = modal.querySelector('.modal-close');
        const cancelBtn = modal.querySelector('.modal-btn-cancel');
        const confirmBtn = modal.querySelector('.modal-btn-confirm');
        const overlay = modal.querySelector('.modal-overlay');
        
        const closeModal = () => {
            modal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => modal.remove(), 300);
        };
        
        closeBtn.addEventListener('click', () => {
            if (onCancel) onCancel();
            closeModal();
        });
        
        cancelBtn.addEventListener('click', () => {
            if (onCancel) onCancel();
            closeModal();
        });
        
        confirmBtn.addEventListener('click', () => {
            if (onConfirm) onConfirm();
            closeModal();
        });
        
        overlay.addEventListener('click', () => {
            if (onCancel) onCancel();
            closeModal();
        });
        
        // ESC 键关闭
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                if (onCancel) onCancel();
                closeModal();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
        
        return modal;
    }
    
    /**
     * 显示加载指示器
     * @param {string} message - 加载提示
     * @returns {HTMLElement} 加载指示器元素
     */
    static showLoading(message = '加载中...') {
        const loading = document.createElement('div');
        loading.className = 'loading-overlay';
        loading.innerHTML = `
            <div class="loading-spinner"></div>
            <div class="loading-message">${message}</div>
        `;
        
        loading.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99997;
            color: white;
        `;
        
        document.body.appendChild(loading);
        return loading;
    }
    
    /**
     * 隐藏加载指示器
     * @param {HTMLElement} loading - 加载指示器元素
     */
    static hideLoading(loading) {
        if (loading) {
            loading.style.opacity = '0';
            loading.style.transition = 'opacity 0.3s ease';
            setTimeout(() => loading.remove(), 300);
        }
    }
    
    /**
     * 显示确认对话框
     * @param {string} message - 确认信息
     * @param {Function} onConfirm - 确认回调
     * @param {Function} onCancel - 取消回调
     */
    static showConfirm(message, onConfirm, onCancel) {
        return this.showModal({
            title: '确认操作',
            content: `<p style="font-size: 1rem; line-height: 1.6;">${message}</p>`,
            onConfirm,
            onCancel
        });
    }
    
    /**
     * 滚动到指定元素
     * @param {string|HTMLElement} target - 目标元素或选择器
     * @param {Object} options - 滚动配置
     * @param {number} options.offset - 偏移量
     * @param {string} options.behavior - 滚动行为 (smooth, auto)
     */
    static scrollTo(target, options = {}) {
        const { offset = 0, behavior = 'smooth' } = options;
        
        let element;
        if (typeof target === 'string') {
            element = document.querySelector(target);
        } else {
            element = target;
        }
        
        if (!element) return;
        
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior
        });
    }
    
    /**
     * 高亮显示元素
     * @param {HTMLElement} element - 目标元素
     * @param {string} color - 高亮颜色
     * @param {number} duration - 持续时间
     */
    static highlightElement(element, color = '#f59e0b', duration = 2000) {
        if (!element) return;
        
        const originalBackground = element.style.background;
        const originalTransition = element.style.transition;
        
        element.style.transition = 'background 0.3s ease';
        element.style.background = color;
        
        setTimeout(() => {
            element.style.background = originalBackground;
            element.style.transition = originalTransition;
        }, duration);
    }
    
    /**
     * 复制文本到剪贴板
     * @param {string} text - 要复制的文本
     * @returns {Promise<boolean>} 是否成功
     */
    static async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast('已复制到剪贴板', 2000, 'success');
            return true;
        } catch (err) {
            console.error('复制失败:', err);
            this.showToast('复制失败', 3000, 'error');
            return false;
        }
    }
    
    /**
     * 创建粒子效果
     * @param {number} x - X 坐标
     * @param {number} y - Y 坐标
     * @param {string[]} colors - 颜色数组
     * @param {number} count - 粒子数量
     */
    static createParticles(x, y, colors = ['#10b981', '#0ea5e9', '#f59e0b', '#ec4899'], count = 30) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.borderRadius = '50%';
            particle.style.zIndex = '99999';
            particle.style.pointerEvents = 'none';
            
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * Math.random());
            const velocity = 100 + Math.random() * 150;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0,0) scale(1)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
            ], {
                duration: 800 + Math.random() * 400,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }).onfinish = () => particle.remove();
        }
    }
}

export default UIManager;
