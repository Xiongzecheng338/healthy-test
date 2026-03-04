// 工具函数
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// 显示提示信息
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        background: #1f2937;
        color: white;
        padding: 1rem 2rem;
        border-radius: 1rem;
        font-weight: 600;
        z-index: 9999;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        animation: slide-up 0.3s ease-out;
        max-width: 90%;
        text-align: center;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// 创建彩带动画
function createConfetti() {
    const colors = ['#10b981', '#0ea5e9', '#f59e0b', '#ec4899', '#8b5cf6'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);
        
        const angle = (Math.PI * 2 * i) / 50;
        const velocity = 200 + Math.random() * 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        confetti.animate([
            { transform: 'translate(0,0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => confetti.remove();
    }
}

// 导出工具函数
export { debounce, showToast, createConfetti };