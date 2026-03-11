/* ============================================
   Healthy-test Loading System v4.0
   专业级加载动画系统
   ============================================ */

class LoadingManager {
  constructor(options = {}) {
    this.options = {
      minDuration: options.minDuration || 1500,
      fadeOutDuration: options.fadeOutDuration || 700,
      progressDuration: options.progressDuration || 2000,
      ...options
    };

    this.loadingScreen = null;
    this.progressBar = null;
    this.loadingText = null;
    this.progress = 0;
    this.isComplete = false;
    this.onCompleteCallbacks = [];

    this.init();
  }

  init() {
    this.createLoadingScreen();
    this.simulateProgress();
  }

  createLoadingScreen() {
    this.loadingScreen = document.createElement('div');
    this.loadingScreen.className = 'loading-screen';
    this.loadingScreen.innerHTML = `
      <div class="loading-logo">
        <span class="logo-text">Healthy-test</span>
        <div class="logo-shine"></div>
      </div>
      <div class="loading-progress">
        <div class="loading-progress-bar"></div>
      </div>
      <div class="loading-text">正在加载健康数据...</div>
      <div class="loading-particles"></div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0c4a6e 0%, #1e3a5f 50%, #0f172a 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        transition: opacity 0.7s ease-out, visibility 0.7s ease-out;
      }

      .loading-screen.hidden {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }

      .loading-logo {
        position: relative;
        margin-bottom: 2rem;
      }

      .loading-logo .logo-text {
        font-size: 3rem;
        font-weight: 800;
        color: white;
        letter-spacing: -0.02em;
        animation: pulse-glow 2s ease-in-out infinite;
      }

      .loading-logo .logo-shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        animation: shine 3s infinite;
      }

      @keyframes pulse-glow {
        0%, 100% {
          text-shadow: 0 0 20px rgba(14, 165, 233, 0.5);
          transform: scale(1);
        }
        50% {
          text-shadow: 0 0 40px rgba(14, 165, 233, 0.8), 0 0 60px rgba(14, 165, 233, 0.4);
          transform: scale(1.02);
        }
      }

      @keyframes shine {
        0% { left: -100%; }
        50%, 100% { left: 150%; }
      }

      .loading-progress {
        width: 200px;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 9999px;
        overflow: hidden;
        margin-bottom: 1rem;
      }

      .loading-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #0ea5e9, #3b82f6, #8b5cf6);
        border-radius: 9999px;
        width: 0%;
        transition: width 0.3s ease-out;
      }

      .loading-text {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.875rem;
        letter-spacing: 0.05em;
      }

      .loading-particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
      }

      .loading-particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(14, 165, 233, 0.6);
        border-radius: 50%;
        animation: float-particle 8s linear infinite;
      }

      @keyframes float-particle {
        0% {
          transform: translateY(100vh) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) rotate(720deg);
          opacity: 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .loading-logo .logo-text,
        .loading-logo .logo-shine,
        .loading-particle {
          animation: none;
        }
        .loading-progress-bar {
          transition: none;
        }
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(this.loadingScreen);

    this.progressBar = this.loadingScreen.querySelector('.loading-progress-bar');
    this.loadingText = this.loadingScreen.querySelector('.loading-text');
    this.particlesContainer = this.loadingScreen.querySelector('.loading-particles');

    this.createLoadingParticles();
  }

  createLoadingParticles() {
    const count = 20;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'loading-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${6 + Math.random() * 4}s`;
      particle.style.width = `${2 + Math.random() * 4}px`;
      particle.style.height = particle.style.width;
      particle.style.opacity = 0.3 + Math.random() * 0.5;
      this.particlesContainer.appendChild(particle);
    }
  }

  simulateProgress() {
    const loadingTexts = [
      '正在加载健康数据...',
      '初始化计算引擎...',
      '准备可视化组件...',
      '加载营养数据库...',
      '优化用户体验...',
      '即将完成...'
    ];

    let textIndex = 0;
    const textInterval = setInterval(() => {
      if (textIndex < loadingTexts.length - 1) {
        textIndex++;
        if (this.loadingText) {
          this.loadingText.textContent = loadingTexts[textIndex];
        }
      }
    }, this.options.progressDuration / loadingTexts.length);

    const progressInterval = setInterval(() => {
      if (this.progress < 90) {
        this.progress += Math.random() * 15;
        if (this.progress > 90) this.progress = 90;
        this.updateProgress(this.progress);
      }
    }, 200);

    setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    }, this.options.progressDuration);
  }

  updateProgress(value) {
    if (this.progressBar) {
      this.progress = Math.min(100, Math.max(0, value));
      this.progressBar.style.width = `${this.progress}%`;
    }
  }

  complete() {
    if (this.isComplete) return;
    this.isComplete = true;

    this.updateProgress(100);
    if (this.loadingText) {
      this.loadingText.textContent = '加载完成!';
    }

    setTimeout(() => {
      this.hide();
    }, 300);
  }

  hide() {
    if (this.loadingScreen) {
      this.loadingScreen.classList.add('hidden');
      
      setTimeout(() => {
        if (this.loadingScreen && this.loadingScreen.parentNode) {
          this.loadingScreen.parentNode.removeChild(this.loadingScreen);
        }
        this.executeCallbacks();
      }, this.options.fadeOutDuration);
    }
  }

  onComplete(callback) {
    if (typeof callback === 'function') {
      if (this.isComplete) {
        callback();
      } else {
        this.onCompleteCallbacks.push(callback);
      }
    }
  }

  executeCallbacks() {
    this.onCompleteCallbacks.forEach(callback => {
      try {
        callback();
      } catch (e) {
        console.error('Loading callback error:', e);
      }
    });
    this.onCompleteCallbacks = [];
  }

  destroy() {
    if (this.loadingScreen && this.loadingScreen.parentNode) {
      this.loadingScreen.parentNode.removeChild(this.loadingScreen);
    }
    this.loadingScreen = null;
    this.progressBar = null;
    this.loadingText = null;
  }
}

class SkeletonLoader {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (!this.container) return;

    this.options = {
      rows: options.rows || 3,
      lineHeight: options.lineHeight || 16,
      spacing: options.spacing || 12,
      animate: options.animate !== false,
      ...options
    };

    this.skeletons = [];
  }

  show() {
    this.container.innerHTML = '';
    this.skeletons = [];

    for (let i = 0; i < this.options.rows; i++) {
      const skeleton = this.createSkeletonLine(i);
      this.container.appendChild(skeleton);
      this.skeletons.push(skeleton);
    }
  }

  createSkeletonLine(index) {
    const line = document.createElement('div');
    const width = index === 0 ? '60%' : (index === this.options.rows - 1 ? '40%' : `${50 + Math.random() * 40}%`);
    
    line.style.cssText = `
      width: ${width};
      height: ${this.options.lineHeight}px;
      background: linear-gradient(
        90deg,
        #e5e7eb 25%,
        #f3f4f6 50%,
        #e5e7eb 75%
      );
      background-size: 200% 100%;
      border-radius: 8px;
      margin-bottom: ${this.options.spacing}px;
      ${this.options.animate ? 'animation: shimmer 1.5s infinite;' : ''}
    `;

    if (this.options.animate && !document.querySelector('#skeleton-styles')) {
      const style = document.createElement('style');
      style.id = 'skeleton-styles';
      style.textContent = `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `;
      document.head.appendChild(style);
    }

    return line;
  }

  hide() {
    this.skeletons.forEach(skeleton => {
      if (skeleton.parentNode) {
        skeleton.parentNode.removeChild(skeleton);
      }
    });
    this.skeletons = [];
  }

  replaceWith(content) {
    this.hide();
    if (typeof content === 'string') {
      this.container.innerHTML = content;
    } else if (content instanceof HTMLElement) {
      this.container.appendChild(content);
    }
  }
}

class ProgressIndicator {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (!this.container) return;

    this.options = {
      height: options.height || 4,
      color: options.color || 'linear-gradient(90deg, #0ea5e9, #3b82f6)',
      backgroundColor: options.backgroundColor || 'rgba(0, 0, 0, 0.1)',
      ...options
    };

    this.progressBar = null;
    this.init();
  }

  init() {
    this.progressBar = document.createElement('div');
    this.progressBar.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: ${this.options.height}px;
      background: ${this.options.color};
      transition: width 0.3s ease-out;
      z-index: 100;
    `;

    const bgBar = document.createElement('div');
    bgBar.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${this.options.height}px;
      background: ${this.options.backgroundColor};
    `;

    this.container.style.position = 'relative';
    this.container.insertBefore(bgBar, this.container.firstChild);
    this.container.insertBefore(this.progressBar, this.container.firstChild);
  }

  setProgress(value) {
    if (this.progressBar) {
      const progress = Math.min(100, Math.max(0, value));
      this.progressBar.style.width = `${progress}%`;
    }
  }

  complete() {
    this.setProgress(100);
    setTimeout(() => {
      if (this.progressBar) {
        this.progressBar.style.opacity = '0';
      }
    }, 300);
  }

  reset() {
    if (this.progressBar) {
      this.progressBar.style.opacity = '1';
      this.setProgress(0);
    }
  }

  destroy() {
    if (this.progressBar && this.progressBar.parentNode) {
      this.progressBar.parentNode.removeChild(this.progressBar);
    }
    this.progressBar = null;
  }
}

window.LoadingManager = LoadingManager;
window.SkeletonLoader = SkeletonLoader;
window.ProgressIndicator = ProgressIndicator;

document.addEventListener('DOMContentLoaded', () => {
  window.loadingManager = new LoadingManager({
    minDuration: 1500,
    progressDuration: 2000
  });
});
