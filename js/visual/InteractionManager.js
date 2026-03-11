/* ============================================
   Healthy-test Interaction System v4.0
   专业级交互效果系统
   ============================================ */

class InteractionManager {
  constructor(options = {}) {
    this.options = {
      hoverEffects: options.hoverEffects !== false,
      clickEffects: options.clickEffects !== false,
      scrollEffects: options.scrollEffects !== false,
      touchEffects: options.touchEffects !== false,
      ...options
    };

    this.observers = [];
    this.eventListeners = [];
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!this.reducedMotion) {
      this.init();
    }
  }

  init() {
    this.initHoverEffects();
    this.initClickEffects();
    this.initScrollReveal();
    this.initParallax();
    this.initTouchEffects();
    this.initFocusEffects();
  }

  initHoverEffects() {
    if (!this.options.hoverEffects) return;

    const hoverElements = document.querySelectorAll('.card, .feature-card, .metric-card, .btn, .rec-card, .food-card, .challenge-card');
    
    hoverElements.forEach(element => {
      const handleMouseEnter = () => {
        element.style.willChange = 'transform, box-shadow';
      };

      const handleMouseLeave = () => {
        element.style.willChange = 'auto';
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      this.eventListeners.push({ element, event: 'mouseenter', handler: handleMouseEnter });
      this.eventListeners.push({ element, event: 'mouseleave', handler: handleMouseLeave });
    });
  }

  initClickEffects() {
    if (!this.options.clickEffects) return;

    const rippleElements = document.querySelectorAll('.btn, .hero-button, .sidebar-tab, .quiz-option');
    
    rippleElements.forEach(element => {
      element.classList.add('ripple');

      const handleClick = (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transform: scale(0);
          animation: ripple-animation 0.6s ease-out;
          pointer-events: none;
          left: ${x}px;
          top: ${y}px;
          width: 10px;
          height: 10px;
          margin-left: -5px;
          margin-top: -5px;
        `;

        element.style.position = element.style.position || 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 600);
      };

      element.addEventListener('click', handleClick);
      this.eventListeners.push({ element, event: 'click', handler: handleClick });
    });

    if (!document.querySelector('#ripple-styles')) {
      const style = document.createElement('style');
      style.id = 'ripple-styles';
      style.textContent = `
        @keyframes ripple-animation {
          to {
            transform: scale(40);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  initScrollReveal() {
    if (!this.options.scrollEffects) return;

    const revealElements = document.querySelectorAll('.card, .feature-card, .metric-card, .rec-card, .chart-box');
    
    revealElements.forEach(el => el.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
    this.observers.push(observer);
  }

  initParallax() {
    if (!this.options.scrollEffects) return;

    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        parallaxElements.forEach(element => {
          const speed = parseFloat(element.dataset.parallax) || 0.5;
          const rect = element.getBoundingClientRect();
          const scrolled = window.scrollY;
          const rate = (scrolled - rect.top) * speed;
          
          element.style.transform = `translateY(${rate}px)`;
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    this.eventListeners.push({ element: window, event: 'scroll', handler: handleScroll });
  }

  initTouchEffects() {
    if (!this.options.touchEffects || !('ontouchstart' in window)) return;

    const touchElements = document.querySelectorAll('.card, .btn, .feature-card');
    
    touchElements.forEach(element => {
      const handleTouchStart = () => {
        element.style.transform = 'scale(0.98)';
      };

      const handleTouchEnd = () => {
        element.style.transform = '';
      };

      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchend', handleTouchEnd, { passive: true });

      this.eventListeners.push({ element, event: 'touchstart', handler: handleTouchStart });
      this.eventListeners.push({ element, event: 'touchend', handler: handleTouchEnd });
    });
  }

  initFocusEffects() {
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
      const handleFocus = () => {
        element.style.outline = 'none';
        element.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.3)';
      };

      const handleBlur = () => {
        element.style.boxShadow = '';
      };

      element.addEventListener('focus', handleFocus);
      element.addEventListener('blur', handleBlur);

      this.eventListeners.push({ element, event: 'focus', handler: handleFocus });
      this.eventListeners.push({ element, event: 'blur', handler: handleBlur });
    });
  }

  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];

    this.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.eventListeners = [];
  }
}

class ScrollProgress {
  constructor(options = {}) {
    this.options = {
      color: options.color || 'linear-gradient(90deg, #0ea5e9, #3b82f6)',
      height: options.height || 3,
      ...options
    };

    this.progressBar = null;
    this.init();
  }

  init() {
    this.createProgressBar();
    this.bindEvents();
  }

  createProgressBar() {
    this.progressBar = document.createElement('div');
    this.progressBar.id = 'scroll-progress';
    this.progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: ${this.options.height}px;
      background: ${this.options.color};
      z-index: 9999;
      transition: width 0.1s ease-out;
    `;
    document.body.appendChild(this.progressBar);
  }

  bindEvents() {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      if (this.progressBar) {
        this.progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  destroy() {
    if (this.progressBar && this.progressBar.parentNode) {
      this.progressBar.parentNode.removeChild(this.progressBar);
    }
    this.progressBar = null;
  }
}

class SmoothScroll {
  constructor(options = {}) {
    this.options = {
      duration: options.duration || 800,
      offset: options.offset || 0,
      ...options
    };

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          this.scrollTo(target);
        }
      });
    });
  }

  scrollTo(target, duration = this.options.duration) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - this.options.offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutQuad(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
}

class TooltipManager {
  constructor(options = {}) {
    this.options = {
      delay: options.delay || 300,
      offset: options.offset || 10,
      ...options
    };

    this.activeTooltip = null;
    this.init();
  }

  init() {
    this.createTooltipContainer();
    this.bindEvents();
  }

  createTooltipContainer() {
    this.container = document.createElement('div');
    this.container.id = 'tooltip-container';
    this.container.style.cssText = `
      position: fixed;
      z-index: 9999;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
    `;
    document.body.appendChild(this.container);
  }

  bindEvents() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
      let showTimeout;

      const handleMouseEnter = (e) => {
        showTimeout = setTimeout(() => {
          this.show(element);
        }, this.options.delay);
      };

      const handleMouseLeave = () => {
        clearTimeout(showTimeout);
        this.hide();
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      element.addEventListener('focus', () => this.show(element));
      element.addEventListener('blur', () => this.hide());
    });
  }

  show(element) {
    const text = element.dataset.tooltip;
    if (!text) return;

    this.container.textContent = text;
    this.container.style.opacity = '1';

    const rect = element.getBoundingClientRect();
    const tooltipRect = this.container.getBoundingClientRect();

    let top = rect.top - tooltipRect.height - this.options.offset;
    let left = rect.left + (rect.width - tooltipRect.width) / 2;

    if (top < 0) {
      top = rect.bottom + this.options.offset;
    }

    if (left < 0) {
      left = 0;
    } else if (left + tooltipRect.width > window.innerWidth) {
      left = window.innerWidth - tooltipRect.width;
    }

    this.container.style.top = `${top}px`;
    this.container.style.left = `${left}px`;

    this.container.style.cssText += `
      background: #1f2937;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 14px;
      max-width: 250px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
  }

  hide() {
    this.container.style.opacity = '0';
  }

  destroy() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.container = null;
  }
}

class NotificationManager {
  constructor(options = {}) {
    this.options = {
      position: options.position || 'bottom-right',
      maxNotifications: options.maxNotifications || 5,
      duration: options.duration || 5000,
      ...options
    };

    this.container = null;
    this.notifications = [];
    this.init();
  }

  init() {
    this.createContainer();
  }

  createContainer() {
    this.container = document.createElement('div');
    this.container.className = 'notification-container';
    
    const positions = {
      'top-right': 'top: 20px; right: 20px;',
      'top-left': 'top: 20px; left: 20px;',
      'bottom-right': 'bottom: 20px; right: 20px;',
      'bottom-left': 'bottom: 20px; left: 20px;'
    };

    this.container.style.cssText = `
      position: fixed;
      ${positions[this.options.position]}
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    `;

    document.body.appendChild(this.container);
  }

  show(message, type = 'info', duration = this.options.duration) {
    if (this.notifications.length >= this.options.maxNotifications) {
      const oldest = this.notifications.shift();
      this.remove(oldest);
    }

    const notification = this.createNotification(message, type);
    this.container.appendChild(notification);
    this.notifications.push(notification);

    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    });

    if (duration > 0) {
      setTimeout(() => this.remove(notification), duration);
    }

    return notification;
  }

  createNotification(message, type) {
    const notification = document.createElement('div');
    
    const colors = {
      info: 'var(--color-primary-500)',
      success: 'var(--color-secondary-500)',
      warning: 'var(--color-warning-500)',
      error: 'var(--color-danger-500)'
    };

    const icons = {
      info: 'ℹ️',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    };

    notification.style.cssText = `
      background: white;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border-left: 4px solid ${colors[type] || colors.info};
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 300px;
      max-width: 400px;
      pointer-events: auto;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
      cursor: pointer;
    `;

    notification.innerHTML = `
      <span style="font-size: 20px;">${icons[type] || icons.info}</span>
      <span style="flex: 1; color: #1f2937; font-size: 14px;">${message}</span>
      <button style="background: none; border: none; font-size: 18px; cursor: pointer; opacity: 0.5; padding: 0;">×</button>
    `;

    notification.querySelector('button').addEventListener('click', () => {
      this.remove(notification);
    });

    notification.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') {
        this.remove(notification);
      }
    });

    return notification;
  }

  remove(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';

    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
      const index = this.notifications.indexOf(notification);
      if (index > -1) {
        this.notifications.splice(index, 1);
      }
    }, 300);
  }

  success(message, duration) {
    return this.show(message, 'success', duration);
  }

  error(message, duration) {
    return this.show(message, 'error', duration);
  }

  warning(message, duration) {
    return this.show(message, 'warning', duration);
  }

  info(message, duration) {
    return this.show(message, 'info', duration);
  }

  destroy() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.container = null;
    this.notifications = [];
  }
}

window.InteractionManager = InteractionManager;
window.ScrollProgress = ScrollProgress;
window.SmoothScroll = SmoothScroll;
window.TooltipManager = TooltipManager;
window.NotificationManager = NotificationManager;

document.addEventListener('DOMContentLoaded', () => {
  window.interactionManager = new InteractionManager();
  window.scrollProgress = new ScrollProgress();
  window.smoothScroll = new SmoothScroll({ offset: 80 });
  window.tooltipManager = new TooltipManager();
  window.notificationManager = new NotificationManager();
});
