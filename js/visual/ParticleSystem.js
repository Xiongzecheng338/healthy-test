/* ============================================
   Healthy-test Particle System v4.0
   专业级粒子动画系统
   ============================================ */

class ParticleSystem {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (!this.container) {
      console.warn('Particle container not found');
      return;
    }

    this.options = {
      particleCount: options.particleCount || 50,
      layers: options.layers || 3,
      colors: options.colors || [
        'rgba(14, 165, 233, 0.6)',
        'rgba(34, 197, 94, 0.5)',
        'rgba(168, 85, 247, 0.5)',
        'rgba(245, 158, 11, 0.4)'
      ],
      minSize: options.minSize || 2,
      maxSize: options.maxSize || 8,
      minSpeed: options.minSpeed || 0.5,
      maxSpeed: options.maxSpeed || 2,
      connectionDistance: options.connectionDistance || 150,
      mouseInteraction: options.mouseInteraction !== false,
      mouseRadius: options.mouseRadius || 100,
      ...options
    };

    this.particles = [];
    this.layers = [];
    this.mouse = { x: null, y: null };
    this.animationId = null;
    this.isRunning = false;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  init() {
    this.createCanvas();
    this.createLayers();
    this.createParticles();
    this.bindEvents();
    
    if (!this.reducedMotion) {
      this.start();
    }
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'particle-canvas';
    this.canvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    `;
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);
    this.resize();
  }

  createLayers() {
    for (let i = 0; i < this.options.layers; i++) {
      const layer = document.createElement('div');
      layer.className = `particles-layer layer-${i + 1}`;
      layer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      `;
      this.container.appendChild(layer);
      this.layers.push(layer);
    }
  }

  createParticles() {
    const count = this.reducedMotion ? Math.floor(this.options.particleCount / 3) : this.options.particleCount;
    
    for (let i = 0; i < count; i++) {
      const layer = i % this.options.layers;
      this.particles.push(this.createParticle(layer));
    }
  }

  createParticle(layer) {
    const size = this.random(this.options.minSize, this.options.maxSize);
    const speed = this.random(this.options.minSpeed, this.options.maxSpeed);
    const color = this.options.colors[Math.floor(Math.random() * this.options.colors.length)];
    
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      size: size,
      baseSize: size,
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed,
      color: color,
      layer: layer,
      opacity: Math.random() * 0.5 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03
    };
  }

  resize() {
    const rect = this.container.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
    });

    if (this.options.mouseInteraction) {
      this.container.addEventListener('mousemove', (e) => {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      });

      this.container.addEventListener('mouseleave', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
    }
  }

  update() {
    this.particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.pulse += particle.pulseSpeed;

      particle.size = particle.baseSize + Math.sin(particle.pulse) * (particle.baseSize * 0.3);

      if (particle.x < 0) particle.x = this.width;
      if (particle.x > this.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.height;
      if (particle.y > this.height) particle.y = 0;

      if (this.options.mouseInteraction && this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.options.mouseRadius) {
          const force = (this.options.mouseRadius - distance) / this.options.mouseRadius;
          const angle = Math.atan2(dy, dx);
          particle.x -= Math.cos(angle) * force * 2;
          particle.y -= Math.sin(angle) * force * 2;
        }
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fill();
    });

    if (this.options.connectionDistance > 0) {
      this.drawConnections();
    }

    this.ctx.globalAlpha = 1;
  }

  drawConnections() {
    const maxConnections = 3;
    
    for (let i = 0; i < this.particles.length; i++) {
      let connections = 0;
      
      for (let j = i + 1; j < this.particles.length && connections < maxConnections; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.options.connectionDistance) {
          const opacity = (1 - distance / this.options.connectionDistance) * 0.3;
          
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
          
          connections++;
        }
      }
    }
  }

  animate() {
    if (!this.isRunning) return;
    
    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  destroy() {
    this.stop();
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    this.layers.forEach(layer => {
      if (layer.parentNode) {
        layer.parentNode.removeChild(layer);
      }
    });
    this.particles = [];
    this.layers = [];
  }

  random(min, max) {
    return Math.random() * (max - min) + min;
  }

  addParticle(options = {}) {
    const layer = options.layer || Math.floor(Math.random() * this.options.layers);
    const particle = this.createParticle(layer);
    Object.assign(particle, options);
    this.particles.push(particle);
    return particle;
  }

  removeParticle(particle) {
    const index = this.particles.indexOf(particle);
    if (index > -1) {
      this.particles.splice(index, 1);
    }
  }

  setOptions(newOptions) {
    Object.assign(this.options, newOptions);
  }
}

class GlowOrbSystem {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (!this.container) return;

    this.options = {
      count: options.count || 3,
      colors: options.colors || [
        { color: 'rgba(14, 165, 233, 0.4)', size: 400 },
        { color: 'rgba(34, 197, 94, 0.3)', size: 300 },
        { color: 'rgba(168, 85, 247, 0.3)', size: 350 }
      ],
      ...options
    };

    this.orbs = [];
    this.init();
  }

  init() {
    for (let i = 0; i < this.options.count; i++) {
      this.createOrb(i);
    }
  }

  createOrb(index) {
    const orb = document.createElement('div');
    const colorConfig = this.options.colors[index % this.options.colors.length];
    
    orb.className = `glow-orb ${['primary', 'secondary', 'accent'][index % 3]}`;
    orb.style.cssText = `
      position: absolute;
      width: ${colorConfig.size}px;
      height: ${colorConfig.size}px;
      background: radial-gradient(circle, ${colorConfig.color} 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0.4;
      pointer-events: none;
      animation: orb-float 15s ease-in-out infinite;
      animation-delay: ${-index * 5}s;
    `;

    const positions = [
      { top: '10%', left: '10%' },
      { top: '60%', right: '10%' },
      { bottom: '10%', left: '30%' }
    ];
    
    Object.assign(orb.style, positions[index % positions.length]);
    
    this.container.appendChild(orb);
    this.orbs.push(orb);
  }

  destroy() {
    this.orbs.forEach(orb => {
      if (orb.parentNode) {
        orb.parentNode.removeChild(orb);
      }
    });
    this.orbs = [];
  }
}

class FloatingEmojiSystem {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (!this.container) return;

    this.options = {
      emojis: options.emojis || ['🔬', '🧬', '💊', '❤️', '🩺', '🧪', '🦠', '💉', '🩹', '🧲'],
      maxEmojis: options.maxEmojis || 15,
      spawnInterval: options.spawnInterval || 3000,
      ...options
    };

    this.emojis = [];
    this.spawnTimer = null;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!this.reducedMotion) {
      this.init();
    }
  }

  init() {
    this.spawn();
    this.spawnTimer = setInterval(() => this.spawn(), this.options.spawnInterval);
  }

  spawn() {
    if (this.emojis.length >= this.options.maxEmojis) {
      const oldEmoji = this.emojis.shift();
      if (oldEmoji.parentNode) {
        oldEmoji.parentNode.removeChild(oldEmoji);
      }
    }

    const emoji = document.createElement('div');
    const randomEmoji = this.options.emojis[Math.floor(Math.random() * this.options.emojis.length)];
    
    emoji.textContent = randomEmoji;
    emoji.style.cssText = `
      position: absolute;
      font-size: ${20 + Math.random() * 20}px;
      left: ${Math.random() * 100}%;
      bottom: -50px;
      opacity: 0;
      pointer-events: none;
      animation: float-up 8s ease-out forwards;
      z-index: 1;
    `;

    this.container.appendChild(emoji);
    this.emojis.push(emoji);

    setTimeout(() => {
      const index = this.emojis.indexOf(emoji);
      if (index > -1) {
        this.emojis.splice(index, 1);
      }
      if (emoji.parentNode) {
        emoji.parentNode.removeChild(emoji);
      }
    }, 8000);
  }

  destroy() {
    if (this.spawnTimer) {
      clearInterval(this.spawnTimer);
    }
    this.emojis.forEach(emoji => {
      if (emoji.parentNode) {
        emoji.parentNode.removeChild(emoji);
      }
    });
    this.emojis = [];
  }
}

class ConfettiEffect {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' 
      ? document.querySelector(container) 
      : container || document.body;
    
    this.options = {
      count: options.count || 50,
      colors: options.colors || ['#0ea5e9', '#22c55e', '#a855f7', '#f59e0b', '#ef4444'],
      duration: options.duration || 3000,
      ...options
    };

    this.particles = [];
  }

  burst(x, y) {
    for (let i = 0; i < this.options.count; i++) {
      this.createParticle(x, y);
    }
  }

  createParticle(x, y) {
    const particle = document.createElement('div');
    const color = this.options.colors[Math.floor(Math.random() * this.options.colors.length)];
    const size = 5 + Math.random() * 10;
    const angle = Math.random() * Math.PI * 2;
    const velocity = 5 + Math.random() * 10;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    particle.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      z-index: 9999;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
    `;

    this.container.appendChild(particle);

    let posX = x;
    let posY = y;
    let velX = vx;
    let velY = vy;
    let opacity = 1;
    let rotation = 0;
    const gravity = 0.3;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed > this.options.duration || opacity <= 0) {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
        return;
      }

      velY += gravity;
      posX += velX;
      posY += velY;
      rotation += velX * 2;
      opacity -= 0.02;

      particle.style.transform = `translate(${posX - x}px, ${posY - y}px) rotate(${rotation}deg)`;
      particle.style.opacity = opacity;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}

window.ParticleSystem = ParticleSystem;
window.GlowOrbSystem = GlowOrbSystem;
window.FloatingEmojiSystem = FloatingEmojiSystem;
window.ConfettiEffect = ConfettiEffect;

document.addEventListener('DOMContentLoaded', () => {
  const particlesContainer = document.getElementById('particles');
  const floatingEmojisContainer = document.getElementById('floatingEmojis');
  
  if (particlesContainer) {
    window.mainParticleSystem = new ParticleSystem(particlesContainer, {
      particleCount: 60,
      layers: 3,
      connectionDistance: 120,
      mouseInteraction: true,
      mouseRadius: 150
    });
  }

  if (floatingEmojisContainer) {
    window.mainEmojiSystem = new FloatingEmojiSystem(floatingEmojisContainer, {
      maxEmojis: 10,
      spawnInterval: 4000
    });
  }
});
