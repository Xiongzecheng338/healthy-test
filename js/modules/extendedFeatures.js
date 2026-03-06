// 扩展功能模块实现
// 包含虚拟宠物系统、健康挑战赛系统

class ExtendedFeatures {
    constructor(app) {
        this.app = app;
        this.pet = null;
        this.activeChallenges = [];
        this.completedChallenges = [];
        
        this.init();
    }

    init() {
        this.setupPetSystem();
        this.setupChallengeSystem();
        this.loadUserData();
    }

    // ==================== 虚拟宠物系统 ====================
    setupPetSystem() {
        // 检查是否已有宠物
        const savedPet = localStorage.getItem('userPet');
        if (savedPet) {
            this.pet = JSON.parse(savedPet);
            this.showPetMain();
        } else {
            this.showPetSelection();
        }

        // 确认选择宠物
        const confirmBtn = document.getElementById('confirmPetSelection');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => {
                const selectedAvatar = document.querySelector('.pet-avatar-option.selected');
                if (selectedAvatar) {
                    const avatarId = selectedAvatar.getAttribute('data-avatar');
                    this.createPet(avatarId);
                } else {
                    Utils.showToast('请选择一个宠物！');
                }
            });
        }

        // 互动按钮
        const actionButtons = document.querySelectorAll('.action-btn');
        actionButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.getAttribute('data-action');
                if (action) {
                    this.performPetAction(action);
                }
            });
        });
    }

    showPetSelection() {
        const selection = document.getElementById('petSelection');
        const main = document.getElementById('petMain');
        const avatarsContainer = document.getElementById('petAvatars');

        if (!selection || !avatarsContainer) return;

        selection.style.display = 'block';
        if (main) main.style.display = 'none';

        // 生成宠物选项
        avatarsContainer.innerHTML = '';
        PetSystem.avatars.forEach(avatar => {
            const avatarEl = document.createElement('div');
            avatarEl.className = 'pet-avatar-option';
            avatarEl.setAttribute('data-avatar', avatar.id);
            avatarEl.innerHTML = `
                <div class="avatar-image" style="background: ${avatar.color}">${avatar.image}</div>
                <div class="avatar-name">${avatar.name}</div>
            `;
            avatarEl.addEventListener('click', () => {
                document.querySelectorAll('.pet-avatar-option').forEach(opt => opt.classList.remove('selected'));
                avatarEl.classList.add('selected');
            });
            avatarsContainer.appendChild(avatarEl);
        });
    }

    showPetMain() {
        const selection = document.getElementById('petSelection');
        const main = document.getElementById('petMain');

        if (selection) selection.style.display = 'none';
        if (main) {
            main.style.display = 'block';
            this.updatePetDisplay();
        }
    }

    createPet(avatarId) {
        const avatar = PetSystem.avatars.find(a => a.id === avatarId);
        if (!avatar) return;

        this.pet = {
            id: Date.now(),
            avatarId: avatar.id,
            name: avatar.name,
            image: avatar.image,
            color: avatar.color,
            stage: 1,
            experience: 0,
            level: 1,
            health: 100,
            energy: 100,
            happiness: 100,
            createdAt: new Date().toISOString(),
            lastInteraction: null,
            actions: {
                feed: 0,
                exercise: 0,
                rest: 0,
                learn: 0,
                play: 0,
                clean: 0
            }
        };

        this.savePet();
        this.showPetMain();
        Utils.showToast(`欢迎 ${avatar.name}！开始你的健康之旅吧！`);
        Utils.createConfetti();
    }

    updatePetDisplay() {
        if (!this.pet) return;

        // 更新宠物外观
        const avatar = document.getElementById('petAvatar');
        const expression = document.getElementById('petExpression');
        const stageName = document.getElementById('petStageName');
        
        if (avatar) avatar.textContent = this.pet.image;
        if (stageName) stageName.textContent = PetSystem.stages[this.pet.stage - 1].name;

        // 更新表情
        if (expression) {
            const expr = this.getPetExpression();
            expression.textContent = expr.image;
        }

        // 更新状态值
        document.getElementById('petHealth').textContent = Math.round(this.pet.health);
        document.getElementById('petEnergy').textContent = Math.round(this.pet.energy);
        document.getElementById('petHappiness').textContent = Math.round(this.pet.happiness);
        document.getElementById('petExperience').textContent = this.pet.experience;
        document.getElementById('petLevel').textContent = this.pet.level;

        // 更新经验条
        const expFill = document.getElementById('expFill');
        if (expFill) {
            const nextLevelExp = this.pet.level * 100;
            const currentLevelExp = (this.pet.level - 1) * 100;
            const progress = ((this.pet.experience - currentLevelExp) / (nextLevelExp - currentLevelExp)) * 100;
            expFill.style.width = Math.min(100, Math.max(0, progress)) + '%';
        }

        // 更新提示
        this.updatePetTip();
    }

    getPetExpression() {
        const { health, energy, happiness } = this.pet;
        
        if (health < 20 || energy < 20 || happiness < 20) {
            return PetSystem.expressions.critical;
        } else if (health < 40) {
            return PetSystem.expressions.sick;
        } else if (energy < 40) {
            return PetSystem.expressions.tired;
        } else if (happiness < 40) {
            return PetSystem.expressions.sad;
        } else if (health >= 90 && energy >= 90 && happiness >= 90) {
            return PetSystem.expressions.excellent;
        } else if (health >= 70 && energy >= 70 && happiness >= 70) {
            return PetSystem.expressions.happy;
        } else {
            return PetSystem.expressions.normal;
        }
    }

    updatePetTip() {
        const tipText = document.getElementById('petTipText');
        if (!tipText || !this.pet) return;

        const { health, energy, happiness } = this.pet;
        
        if (health < 40) {
            tipText.textContent = PetSystem.tips.lowHealth[Math.floor(Math.random() * PetSystem.tips.lowHealth.length)];
        } else if (energy < 40) {
            tipText.textContent = PetSystem.tips.lowEnergy[Math.floor(Math.random() * PetSystem.tips.lowEnergy.length)];
        } else if (happiness < 40) {
            tipText.textContent = PetSystem.tips.lowHappiness[Math.floor(Math.random() * PetSystem.tips.lowHappiness.length)];
        } else {
            const time = new Date().getHours();
            let timeTips;
            if (time < 12) {
                timeTips = PetSystem.tips.morning;
            } else if (time < 18) {
                timeTips = PetSystem.tips.noon;
            } else {
                timeTips = PetSystem.tips.evening;
            }
            tipText.textContent = timeTips[Math.floor(Math.random() * timeTips.length)];
        }
    }

    performPetAction(actionType) {
        if (!this.pet) return;

        const action = PetSystem.actions[actionType];
        if (!action) return;

        // 检查冷却时间
        const lastAction = this.pet.lastAction || {};
        const lastTime = lastAction[actionType] || 0;
        const now = Date.now();
        const cooldownMs = action.cooldown * 60 * 1000;

        if (now - lastTime < cooldownMs) {
            const remaining = Math.ceil((cooldownMs - (now - lastTime)) / 60000);
            Utils.showToast(`技能冷却中，还需等待 ${remaining} 分钟`);
            return;
        }

        // 检查前置条件
        if (action.requirement) {
            if (action.requirement.minEnergy && this.pet.energy < action.requirement.minEnergy) {
                Utils.showToast(`能量不足！需要 ${action.requirement.minEnergy} 点能量`);
                return;
            }
        }

        // 检查特殊条件
        if (action.condition) {
            if (action.condition.healthBelow && this.pet.health >= action.condition.healthBelow) {
                Utils.showToast('宠物健康状况良好，不需要治疗');
                return;
            }
        }

        // 应用效果
        if (action.effects.health) this.pet.health = Math.min(100, Math.max(0, this.pet.health + action.effects.health));
        if (action.effects.energy) this.pet.energy = Math.min(100, Math.max(0, this.pet.energy + action.effects.energy));
        if (action.effects.happiness) this.pet.happiness = Math.min(100, Math.max(0, this.pet.happiness + action.effects.happiness));
        if (action.effects.experience) this.pet.experience += action.effects.experience;

        // 更新动作计数
        this.pet.actions[actionType] = (this.pet.actions[actionType] || 0) + 1;
        
        // 记录最后行动时间
        this.pet.lastAction = lastAction;
        lastAction[actionType] = now;
        this.pet.lastInteraction = new Date().toISOString();

        // 检查升级
        this.checkLevelUp();

        // 检查进化
        this.checkEvolution();

        // 保存
        this.savePet();
        this.updatePetDisplay();

        // 反馈
        Utils.showToast(`${action.name}成功！${this.getActionEffectText(action.effects)}`);
        
        // 宠物动画
        this.playPetAnimation();
    }

    getActionEffectText(effects) {
        const parts = [];
        if (effects.health) parts.push(`${effects.health > 0 ? '+' : ''}${effects.health}❤️`);
        if (effects.energy) parts.push(`${effects.energy > 0 ? '+' : ''}${effects.energy}⚡`);
        if (effects.happiness) parts.push(`${effects.happiness > 0 ? '+' : ''}${effects.happiness}😊`);
        if (effects.experience) parts.push(`+${effects.experience}⭐`);
        return parts.join(' ');
    }

    playPetAnimation() {
        const avatar = document.getElementById('petAvatar');
        if (!avatar) return;

        avatar.style.animation = 'bounce 0.5s ease-in-out';
        setTimeout(() => {
            avatar.style.animation = '';
        }, 500);
    }

    checkLevelUp() {
        const nextLevelExp = this.pet.level * 100;
        while (this.pet.experience >= nextLevelExp) {
            this.pet.level++;
            Utils.showToast(`🎉 恭喜！宠物升到 ${this.pet.level} 级！`);
        }
    }

    checkEvolution() {
        const stages = PetSystem.stages;
        for (let i = stages.length - 1; i >= 0; i--) {
            if (this.pet.experience >= stages[i].minExperience && this.pet.stage <= i) {
                this.pet.stage = i + 1;
                const newStage = stages[i];
                Utils.showToast(`🌟 恭喜！宠物进化到 ${newStage.name}！`);
                Utils.createConfetti();
                break;
            }
        }
    }

    savePet() {
        localStorage.setItem('userPet', JSON.stringify(this.pet));
    }

    // ==================== 健康挑战赛系统 ====================
    setupChallengeSystem() {
        this.renderChallengeCategories();
        this.renderChallengeList();
        this.loadChallenges();

        // 分类筛选
        const categoriesContainer = document.getElementById('challengeCategories');
        if (categoriesContainer) {
            categoriesContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.category-btn');
                if (btn) {
                    const category = btn.getAttribute('data-category');
                    this.filterChallenges(category);
                }
            });
        }
    }

    renderChallengeCategories() {
        const container = document.getElementById('challengeCategories');
        if (!container) return;

        container.innerHTML = '';
        
        // 全部按钮
        const allBtn = document.createElement('button');
        allBtn.className = 'category-btn active';
        allBtn.setAttribute('data-category', 'all');
        allBtn.textContent = '全部';
        container.appendChild(allBtn);

        // 分类按钮
        Object.values(ChallengeSystem.categories).forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.setAttribute('data-category', cat.id);
            btn.innerHTML = `${cat.icon} ${cat.name}`;
            container.appendChild(btn);
        });
    }

    renderChallengeList(filter = 'all') {
        const container = document.getElementById('challengeList');
        if (!container) return;

        container.innerHTML = '';

        const challenges = Object.values(ChallengeSystem.challenges).filter(c => {
            if (filter === 'all') return true;
            return c.category === filter;
        });

        challenges.forEach(challenge => {
            const card = document.createElement('div');
            card.className = 'challenge-card';
            
            const difficultyConfig = ChallengeSystem.difficulty[challenge.difficulty];
            
            card.innerHTML = `
                <div class="challenge-header">
                    <span class="challenge-icon">${challenge.icon}</span>
                    <div class="challenge-info">
                        <h4 class="challenge-name">${challenge.name}</h4>
                        <span class="challenge-difficulty" style="color: ${difficultyConfig.color}">
                            ${difficultyConfig.name}
                        </span>
                    </div>
                </div>
                <p class="challenge-description">${challenge.description}</p>
                <div class="challenge-meta">
                    <span class="challenge-duration">⏱️ ${challenge.duration}天</span>
                    <span class="challenge-reward">⭐ ${challenge.rewards.experience}经验</span>
                </div>
                <button class="btn btn-primary start-challenge-btn" data-challenge="${challenge.id}">
                    开始挑战
                </button>
            `;

            container.appendChild(card);
        });

        // 绑定开始按钮事件
        const startButtons = container.querySelectorAll('.start-challenge-btn');
        startButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const challengeId = btn.getAttribute('data-challenge');
                this.startChallenge(challengeId);
            });
        });
    }

    filterChallenges(category) {
        // 更新按钮状态
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-category') === category);
        });

        this.renderChallengeList(category);
    }

    startChallenge(challengeId) {
        const challenge = ChallengeSystem.challenges[challengeId];
        if (!challenge) return;

        // 检查是否已在进行中
        const alreadyActive = this.activeChallenges.find(c => c.id === challengeId);
        if (alreadyActive) {
            Utils.showToast('该挑战已在进行中！');
            return;
        }

        // 检查是否已完成
        const alreadyCompleted = this.completedChallenges.find(c => c.id === challengeId);
        if (alreadyCompleted) {
            Utils.showToast('你已完成过该挑战！');
            return;
        }

        // 创建挑战实例
        const challengeInstance = {
            id: challengeId,
            name: challenge.name,
            icon: challenge.icon,
            startDate: new Date().toISOString(),
            endDate: null,
            progress: 0,
            status: 'active'
        };

        this.activeChallenges.push(challengeInstance);
        this.saveChallenges();
        this.renderActiveChallenges();
        
        Utils.showToast(`挑战开始！祝你成功完成${challenge.name}！`);
    }

    renderActiveChallenges() {
        const container = document.getElementById('activeChallengeCards');
        const section = document.getElementById('activeChallenges');
        
        if (!container) return;

        if (this.activeChallenges.length === 0) {
            if (section) section.style.display = 'none';
            return;
        }

        if (section) section.style.display = 'block';
        container.innerHTML = '';

        this.activeChallenges.forEach(challenge => {
            const card = document.createElement('div');
            card.className = 'active-challenge-card';
            
            const startDate = new Date(challenge.startDate);
            const now = new Date();
            const daysPassed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
            
            card.innerHTML = `
                <div class="challenge-icon">${challenge.icon}</div>
                <div class="challenge-content">
                    <h4>${challenge.name}</h4>
                    <div class="challenge-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(100, (daysPassed / 30) * 100)}%"></div>
                        </div>
                        <span class="progress-text">第 ${daysPassed + 1} 天</span>
                    </div>
                    <button class="btn btn-outline complete-challenge-btn" data-challenge="${challenge.id}">
                        完成挑战
                    </button>
                </div>
            `;

            container.appendChild(card);
        });

        // 绑定完成按钮
        const completeButtons = container.querySelectorAll('.complete-challenge-btn');
        completeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const challengeId = btn.getAttribute('data-challenge');
                this.completeChallenge(challengeId);
            });
        });
    }

    completeChallenge(challengeId) {
        const challengeIndex = this.activeChallenges.findIndex(c => c.id === challengeId);
        if (challengeIndex === -1) return;

        const challenge = this.activeChallenges[challengeIndex];
        challenge.endDate = new Date().toISOString();
        challenge.status = 'completed';

        // 获取挑战奖励
        const challengeData = ChallengeSystem.challenges[challengeId];
        const rewards = challengeData.rewards;

        // 添加到已完成
        this.completedChallenges.push(challenge);
        
        // 从进行中移除
        this.activeChallenges.splice(challengeIndex, 1);

        // 如果有宠物，增加经验
        if (this.pet) {
            this.pet.experience += rewards.experience;
            this.checkLevelUp();
            this.checkEvolution();
            this.savePet();
        }

        // 保存
        this.saveChallenges();
        this.savePet();
        
        // 更新显示
        this.renderActiveChallenges();
        this.renderCompletedChallenges();
        this.updatePetDisplay();

        // 庆祝
        Utils.showToast(`🎉 恭喜完成${challenge.name}！获得 ${rewards.experience} 经验值！`);
        Utils.createConfetti();
    }

    renderCompletedChallenges() {
        const container = document.getElementById('completedChallengeCards');
        if (!container) return;

        container.innerHTML = '';

        if (this.completedChallenges.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 2rem;">还没有完成任何挑战</p>';
            return;
        }

        this.completedChallenges.forEach(challenge => {
            const card = document.createElement('div');
            card.className = 'challenge-card completed';
            
            card.innerHTML = `
                <div class="challenge-header">
                    <span class="challenge-icon">${challenge.icon}</span>
                    <div class="challenge-info">
                        <h4 class="challenge-name">${challenge.name}</h4>
                        <span class="challenge-status" style="color: var(--success)">✅ 已完成</span>
                    </div>
                </div>
                <p class="challenge-date">
                    完成于 ${new Date(challenge.endDate).toLocaleDateString('zh-CN')}
                </p>
            `;

            container.appendChild(card);
        });
    }

    saveChallenges() {
        localStorage.setItem('activeChallenges', JSON.stringify(this.activeChallenges));
        localStorage.setItem('completedChallenges', JSON.stringify(this.completedChallenges));
    }

    loadChallenges() {
        const savedActive = localStorage.getItem('activeChallenges');
        const savedCompleted = localStorage.getItem('completedChallenges');

        if (savedActive) {
            this.activeChallenges = JSON.parse(savedActive);
            this.renderActiveChallenges();
        }

        if (savedCompleted) {
            this.completedChallenges = JSON.parse(savedCompleted);
            this.renderCompletedChallenges();
        }
    }

    loadUserData() {
        this.loadChallenges();
        // 宠物数据在 setupPetSystem 中加载
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ExtendedFeatures;
}
