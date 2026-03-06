// 新功能模块实现
// 包含问答系统、食物百科、健康追踪器

class NewFeatures {
    constructor(app) {
        this.app = app;
        this.quizSystem = null;
        this.currentFood = null;
        this.trackerData = {
            water: 0,
            steps: 0,
            weights: [],
            sleep: []
        };
        this.badges = [];
        
        this.init();
    }

    init() {
        this.setupQuizSystem();
        this.setupFoodDatabase();
        this.setupTracker();
        this.loadTrackerData();
    }

    // ==================== 问答系统 ====================
    setupQuizSystem() {
        // 初始化问答系统
        this.quizSystem = new QuizSystem();

        // 类别选择
        const categoryButtons = document.querySelectorAll('[data-category]');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                if (category) {
                    this.startQuiz(category);
                }
            });
        });

        // 下一题按钮
        const nextQuestionBtn = document.getElementById('nextQuestionBtn');
        if (nextQuestionBtn) {
            nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        }

        // 重新开始按钮
        const restartQuizBtn = document.getElementById('restartQuizBtn');
        if (restartQuizBtn) {
            restartQuizBtn.addEventListener('click', () => this.resetQuiz());
        }
    }

    startQuiz(category) {
        const quizContent = document.getElementById('quizContent');
        const categorySelect = document.querySelector('.quiz-category-select');
        
        if (!quizContent) return;

        // 隐藏分类选择，显示问答内容
        categorySelect.style.display = 'none';
        quizContent.style.display = 'block';

        // 开始测验
        const isDaily = category === 'daily';
        const quizCategory = isDaily ? null : category;
        this.quizSystem.startQuiz(quizCategory, null, 10);

        // 显示第一题
        this.showQuestion(0);
    }

    showQuestion(index) {
        const question = this.quizSystem.currentQuiz.questions[index];
        if (!question) return;

        // 更新进度
        document.getElementById('questionCount').textContent = `${index + 1}/${this.quizSystem.currentQuiz.totalQuestions}`;
        document.getElementById('quizScore').textContent = this.quizSystem.score;
        
        const progressPercent = ((index + 1) / this.quizSystem.currentQuiz.totalQuestions) * 100;
        document.getElementById('quizProgress').style.width = progressPercent + '%';

        // 更新题目信息
        document.getElementById('questionDifficulty').textContent = this.getDifficultyText(question.difficulty);
        document.getElementById('questionCategory').textContent = question.category;
        document.getElementById('questionText').textContent = question.question;

        // 生成选项
        const optionsList = document.getElementById('optionsList');
        optionsList.innerHTML = '';
        
        question.options.forEach((option, i) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.addEventListener('click', () => this.selectAnswer(i));
            optionsList.appendChild(optionBtn);
        });

        // 隐藏反馈和结果
        document.getElementById('quizFeedback').style.display = 'none';
        document.getElementById('quizResult').style.display = 'none';
    }

    selectAnswer(answerIndex) {
        const result = this.quizSystem.answerQuestion(
            this.quizSystem.currentQuestionIndex,
            answerIndex
        );

        // 显示反馈
        this.showFeedback(result, answerIndex);
    }

    showFeedback(result, userAnswer) {
        const feedback = document.getElementById('quizFeedback');
        const feedbackIcon = document.getElementById('feedbackIcon');
        const feedbackTitle = document.getElementById('feedbackTitle');
        const feedbackExplanation = document.getElementById('feedbackExplanation');
        const knowledgePoint = document.getElementById('knowledgePoint');

        feedback.style.display = 'block';
        
        if (result.isCorrect) {
            feedbackIcon.textContent = '✅';
            feedbackTitle.textContent = '回答正确！';
            feedbackTitle.style.color = 'var(--success)';
        } else {
            feedbackIcon.textContent = '❌';
            feedbackTitle.textContent = '回答错误';
            feedbackTitle.style.color = 'var(--danger)';
        }

        feedbackExplanation.textContent = result.explanation;
        knowledgePoint.textContent = result.knowledgePoint;
    }

    nextQuestion() {
        this.quizSystem.currentQuestionIndex++;
        
        if (this.quizSystem.currentQuestionIndex < this.quizSystem.currentQuiz.questions.length) {
            this.showQuestion(this.quizSystem.currentQuestionIndex);
        } else {
            this.showQuizResult();
        }
    }

    showQuizResult() {
        const results = this.quizSystem.getResults();
        const quizResult = document.getElementById('quizResult');
        const questionCard = document.querySelector('.question-card');
        const quizFeedback = document.getElementById('quizFeedback');

        if (questionCard) questionCard.style.display = 'none';
        if (quizFeedback) quizFeedback.style.display = 'none';
        
        quizResult.style.display = 'block';

        document.getElementById('finalScore').textContent = results.score;
        document.getElementById('finalAccuracy').textContent = results.accuracy + '%';
        document.getElementById('finalCorrect').textContent = `${results.correctAnswers}/${results.totalQuestions}`;

        // 授予徽章
        this.earnBadges(results);
    }

    earnBadges(results) {
        const badgesContainer = document.getElementById('earnedBadges');
        if (!badgesContainer) return;

        badgesContainer.innerHTML = '';
        const earnedBadges = [];

        // 根据成绩授予徽章
        if (results.accuracy === '100') {
            earnedBadges.push({ name: '完美大师', icon: '🏆', desc: '全部答对' });
        }
        if (parseInt(results.accuracy) >= 80) {
            earnedBadges.push({ name: '知识达人', icon: '🎓', desc: '正确率 80%+' });
        }
        if (parseInt(results.accuracy) >= 60) {
            earnedBadges.push({ name: '学习之星', icon: '⭐', desc: '正确率 60%+' });
        }

        earnedBadges.forEach(badge => {
            const badgeEl = document.createElement('div');
            badgeEl.className = 'earned-badge';
            badgeEl.innerHTML = `
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-desc">${badge.desc}</div>
            `;
            badgesContainer.appendChild(badgeEl);
            
            // 保存到本地存储
            this.saveBadge(badge);
        });

        if (earnedBadges.length === 0) {
            badgesContainer.innerHTML = '<p>继续加油，下次一定能获得徽章！</p>';
        }
    }

    saveBadge(badge) {
        if (!this.badges.find(b => b.name === badge.name)) {
            this.badges.push(badge);
            localStorage.setItem('healthy_badges', JSON.stringify(this.badges));
        }
    }

    resetQuiz() {
        const quizContent = document.getElementById('quizContent');
        const categorySelect = document.querySelector('.quiz-category-select');
        const questionCard = document.querySelector('.question-card');

        if (quizContent) quizContent.style.display = 'none';
        if (categorySelect) categorySelect.style.display = 'block';
        if (questionCard) questionCard.style.display = 'block';
    }

    getDifficultyText(difficulty) {
        const texts = {
            'easy': '简单',
            'medium': '中等',
            'hard': '困难'
        };
        return texts[difficulty] || difficulty;
    }

    // ==================== 食物数据库 ====================
    setupFoodDatabase() {
        // 搜索功能
        const searchBtn = document.getElementById('searchFoodBtn');
        const searchInput = document.getElementById('foodSearchInput');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.searchFood());
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.searchFood();
            });
        }

        // 分类筛选
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                this.filterFoodByCategory(category);
            });
        });

        // 关闭详情
        const closeBtn = document.getElementById('closeFoodDetail');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                document.getElementById('foodDetailModal').style.display = 'none';
            });
        }

        // 重量计算器
        const foodWeightCalc = document.getElementById('foodWeightCalc');
        if (foodWeightCalc) {
            foodWeightCalc.addEventListener('input', () => this.calculateFoodCalories());
        }

        // 初始显示所有食物
        this.displayAllFoods();
    }

    displayAllFoods() {
        this.showFoodResults(FoodDatabase);
    }

    searchFood() {
        const searchTerm = document.getElementById('foodSearchInput').value.trim().toLowerCase();
        if (!searchTerm) {
            this.displayAllFoods();
            return;
        }

        const results = {};
        
        // 在各个类别中搜索
        Object.keys(FoodDatabase).forEach(category => {
            const categoryFoods = FoodDatabase[category];
            Object.keys(categoryFoods).forEach(foodName => {
                if (foodName.toLowerCase().includes(searchTerm)) {
                    if (!results[category]) {
                        results[category] = {};
                    }
                    results[category][foodName] = categoryFoods[foodName];
                }
            });
        });

        this.showFoodResults(results);
    }

    filterFoodByCategory(category) {
        // 更新按钮状态
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            }
        });

        if (category === 'all') {
            this.displayAllFoods();
        } else {
            const filtered = {};
            if (FoodDatabase[category]) {
                filtered[category] = FoodDatabase[category];
            }
            this.showFoodResults(filtered);
        }
    }

    showFoodResults(foodData) {
        const resultsContainer = document.getElementById('foodResults');
        if (!resultsContainer) return;

        resultsContainer.innerHTML = '';

        let hasResults = false;
        Object.keys(foodData).forEach(category => {
            const categoryFoods = foodData[category];
            const categoryNames = {
                'fruits': '水果类',
                'vegetables': '蔬菜类',
                'grains': '谷物类',
                'meats': '肉类',
                'seafood': '海鲜类'
            };

            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'food-category-section';
            categoryDiv.innerHTML = `<h3>${categoryNames[category] || category}</h3>`;

            const foodsGrid = document.createElement('div');
            foodsGrid.className = 'foods-grid';

            Object.keys(categoryFoods).forEach(foodName => {
                const food = categoryFoods[foodName];
                const foodCard = document.createElement('div');
                foodCard.className = 'food-card';
                foodCard.innerHTML = `
                    <div class="food-name">${foodName}</div>
                    <div class="food-calories">${food.calories} kcal/100g</div>
                `;
                foodCard.addEventListener('click', () => this.showFoodDetail(foodName, food));
                foodsGrid.appendChild(foodCard);
            });

            categoryDiv.appendChild(foodsGrid);
            resultsContainer.appendChild(categoryDiv);
            hasResults = true;
        });

        if (!hasResults) {
            resultsContainer.innerHTML = '<p class="no-results">未找到相关食物</p>';
        }
    }

    showFoodDetail(name, food) {
        this.currentFood = { name, data: food };
        
        document.getElementById('foodDetailName').textContent = name;
        document.getElementById('foodCalories').textContent = food.calories;
        document.getElementById('foodProtein').textContent = food.protein;
        document.getElementById('foodFat').textContent = food.fat;
        document.getElementById('foodCarbs').textContent = food.carbs;
        document.getElementById('foodFiber').textContent = food.fiber;
        document.getElementById('foodGI').textContent = food.gi;

        // 显示维生素信息
        const vitaminsContainer = document.getElementById('foodVitamins');
        if (vitaminsContainer && food.vitamins) {
            vitaminsContainer.innerHTML = '<h3>维生素与矿物质</h3>';
            Object.entries(food.vitamins).forEach(([vitamin, amount]) => {
                const vitDiv = document.createElement('div');
                vitDiv.className = 'vitamin-item';
                vitDiv.innerHTML = `<span>${vitamin}:</span> <strong>${amount}</strong>`;
                vitaminsContainer.appendChild(vitDiv);
            });
        }

        // 计算初始卡路里
        this.calculateFoodCalories();

        // 显示详情弹窗
        document.getElementById('foodDetailModal').style.display = 'block';
    }

    calculateFoodCalories() {
        if (!this.currentFood) return;

        const weight = parseInt(document.getElementById('foodWeightCalc').value) || 100;
        const calories = (this.currentFood.data.calories * weight / 100).toFixed(1);
        
        const resultDiv = document.getElementById('calculatedResult');
        resultDiv.innerHTML = `
            <p><strong>${this.currentFood.name}</strong> (${weight}g) 的卡路里：</p>
            <div class="calorie-highlight">${calories} kcal</div>
        `;
    }

    // ==================== 健康追踪器 ====================
    setupTracker() {
        // 饮水追踪
        const waterButtons = document.querySelectorAll('[data-amount]');
        waterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const amount = parseInt(e.target.getAttribute('data-amount'));
                this.addWater(amount);
            });
        });

        const resetWaterBtn = document.getElementById('resetWaterBtn');
        if (resetWaterBtn) {
            resetWaterBtn.addEventListener('click', () => {
                this.trackerData.water = 0;
                this.updateWaterDisplay();
                this.saveTrackerData();
            });
        }

        // 步数追踪
        const updateStepsBtn = document.getElementById('updateStepsBtn');
        const stepInput = document.getElementById('stepInput');
        if (updateStepsBtn && stepInput) {
            updateStepsBtn.addEventListener('click', () => {
                const steps = parseInt(stepInput.value);
                if (steps) {
                    this.trackerData.steps = steps;
                    this.updateStepsDisplay();
                    this.saveTrackerData();
                    stepInput.value = '';
                }
            });
        }

        // 体重记录
        const saveWeightBtn = document.getElementById('saveWeightBtn');
        const weightInput = document.getElementById('weightInput');
        if (saveWeightBtn && weightInput) {
            saveWeightBtn.addEventListener('click', () => {
                const weight = parseFloat(weightInput.value);
                if (weight) {
                    this.trackerData.weights.push({
                        date: new Date().toISOString(),
                        weight: weight
                    });
                    this.updateWeightDisplay();
                    this.saveTrackerData();
                    weightInput.value = '';
                }
            });
        }

        // 睡眠记录
        const saveSleepBtn = document.getElementById('saveSleepBtn');
        const sleepInput = document.getElementById('sleepInput');
        if (saveSleepBtn && sleepInput) {
            saveSleepBtn.addEventListener('click', () => {
                const hours = parseFloat(sleepInput.value);
                if (hours) {
                    this.trackerData.sleep.push({
                        date: new Date().toISOString(),
                        hours: hours
                    });
                    this.updateSleepDisplay();
                    this.saveTrackerData();
                    sleepInput.value = '';
                }
            });
        }

        // 加载数据
        this.loadTrackerData();
    }

    addWater(amount) {
        this.trackerData.water += amount;
        this.updateWaterDisplay();
        this.saveTrackerData();

        // 检查成就
        if (this.trackerData.water >= 2000) {
            this.saveBadge({ name: '饮水达人', icon: '💧', desc: '每日饮水 2000ml' });
            Utils.showToast('🏆 获得成就：饮水达人！');
        }
    }

    updateWaterDisplay() {
        const waterDisplay = document.getElementById('waterIntake');
        if (waterDisplay) {
            waterDisplay.textContent = `${this.trackerData.water}/2000ml`;
        }
    }

    updateStepsDisplay() {
        const stepsDisplay = document.getElementById('stepCount');
        if (stepsDisplay) {
            stepsDisplay.textContent = `${this.trackerData.steps}/10000 步`;
        }
    }

    updateWeightDisplay() {
        const weightDisplay = document.getElementById('weightRecord');
        if (weightDisplay && this.trackerData.weights.length > 0) {
            const latestWeight = this.trackerData.weights[this.trackerData.weights.length - 1];
            weightDisplay.textContent = `${latestWeight.weight} kg`;
        }
    }

    updateSleepDisplay() {
        const sleepDisplay = document.getElementById('sleepRecord');
        if (sleepDisplay && this.trackerData.sleep.length > 0) {
            const latestSleep = this.trackerData.sleep[this.trackerData.sleep.length - 1];
            sleepDisplay.textContent = `${latestSleep.hours} 小时`;
        }
    }

    loadTrackerData() {
        const saved = localStorage.getItem('healthy_tracker');
        if (saved) {
            this.trackerData = JSON.parse(saved);
            this.updateWaterDisplay();
            this.updateStepsDisplay();
            this.updateWeightDisplay();
            this.updateSleepDisplay();
        }

        const savedBadges = localStorage.getItem('healthy_badges');
        if (savedBadges) {
            this.badges = JSON.parse(savedBadges);
            this.displayBadges();
        }
    }

    saveTrackerData() {
        localStorage.setItem('healthy_tracker', JSON.stringify(this.trackerData));
    }

    displayBadges() {
        const badgesGrid = document.getElementById('badgesGrid');
        if (!badgesGrid) return;

        badgesGrid.innerHTML = '';
        this.badges.forEach(badge => {
            const badgeEl = document.createElement('div');
            badgeEl.className = 'badge-item';
            badgeEl.innerHTML = `
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-desc">${badge.desc}</div>
            `;
            badgesGrid.appendChild(badgeEl);
        });

        if (this.badges.length === 0) {
            badgesGrid.innerHTML = '<p>完成挑战获得徽章！</p>';
        }
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NewFeatures;
}
