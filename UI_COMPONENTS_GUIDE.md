# Healthy-test UI 组件库使用指南 🎨

本指南介绍如何使用 Healthy-test 项目的现代化 UI 组件库。

---

## 目录

1. [快速开始](#快速开始)
2. [按钮组件](#按钮组件)
3. [卡片组件](#卡片组件)
4. [表单组件](#表单组件)
5. [Toast 通知](#toast 通知)
6. [模态框](#模态框)
7. [CSS 变量](#css 变量)
8. [最佳实践](#最佳实践)

---

## 快速开始

### 1. 引入 CSS 文件

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Healthy-test</title>
    
    <!-- 核心 CSS 变量 -->
    <link rel="stylesheet" href="css/variables.css">
    
    <!-- UI 组件库 -->
    <link rel="stylesheet" href="css/components/buttons.css">
    <link rel="stylesheet" href="css/components/cards.css">
    <link rel="stylesheet" href="css/components/forms.css">
    <link rel="stylesheet" href="css/components/toast.css">
    <link rel="stylesheet" href="css/components/modal.css">
    
    <!-- 主样式 -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- 内容 -->
</body>
</html>
```

### 2. 引入 JavaScript 模块

```html
<script type="module">
    import { UIManager } from './js/modules/ui/UIManager.js';
    import { HealthCalculator } from './js/modules/calculator/HealthCalculator.js';
    import { cache } from './js/utils/cache.js';
    
    // 使用组件
    UIManager.showToast('欢迎使用 Healthy-test！', 3000, 'success');
</script>
```

---

## 按钮组件

### 基础用法

```html
<!-- 主色按钮 -->
<button class="btn btn-primary">主要按钮</button>

<!-- 次要按钮 -->
<button class="btn btn-secondary">次要按钮</button>

<!-- 成功按钮 -->
<button class="btn btn-success">成功</button>

<!-- 警告按钮 -->
<button class="btn btn-warning">警告</button>

<!-- 危险按钮 -->
<button class="btn btn-danger">危险</button>

<!-- 信息按钮 -->
<button class="btn btn-info">信息</button>
```

### 不同尺寸

```html
<button class="btn btn-primary btn-xs">超小</button>
<button class="btn btn-primary btn-sm">小</button>
<button class="btn btn-primary btn-md">中</button>
<button class="btn btn-primary btn-lg">大</button>
<button class="btn btn-primary btn-xl">超大</button>
```

### Outline 样式

```html
<button class="btn btn-outline-primary">Outline 主要</button>
<button class="btn btn-outline-secondary">Outline 次要</button>
```

### 幽灵按钮

```html
<button class="btn btn-ghost">幽灵按钮</button>
<button class="btn btn-link">链接按钮</button>
```

### 图标按钮

```html
<!-- 纯图标 -->
<button class="btn btn-icon-only">🔍</button>

<!-- 带图标 -->
<button class="btn btn-primary">
    <span class="btn-icon">📧</span>
    <span>发送邮件</span>
</button>
```

### 加载状态

```html
<button class="btn btn-primary btn-loading">
    加载中...
</button>
```

### 块级按钮

```html
<button class="btn btn-primary btn-block">块级按钮</button>
```

### 按钮组

```html
<div class="btn-group">
    <button class="btn btn-secondary">左</button>
    <button class="btn btn-secondary">中</button>
    <button class="btn btn-secondary">右</button>
</div>
```

### JavaScript 使用

```javascript
import { UIManager } from './js/modules/ui/UIManager.js';

// 显示 Toast
UIManager.showToast('操作成功！', 3000, 'success');

// 显示确认对话框
UIManager.showConfirm('确定要删除吗？', 
    () => console.log('确认'),
    () => console.log('取消')
);

// 显示加载
const loading = UIManager.showLoading('正在处理...');
// ... 异步操作
UIManager.hideLoading(loading);

// 复制文本
await UIManager.copyToClipboard('https://healthy-test.com');

// 粒子效果
UIManager.createParticles(100, 100);
```

---

## 卡片组件

### 基础卡片

```html
<div class="card">
    <div class="card-header">
        <h3 class="card-title">卡片标题</h3>
        <p class="card-subtitle">副标题</p>
    </div>
    <div class="card-body">
        <p class="card-text">这是卡片内容。</p>
    </div>
    <div class="card-footer">
        <button class="btn btn-sm btn-primary">操作</button>
    </div>
</div>
```

### 带图标的卡片

```html
<div class="card">
    <div class="card-header">
        <div class="card-icon card-icon-primary">🫀</div>
        <div>
            <h3 class="card-title">心脏健康</h3>
            <p class="card-subtitle">心血管健康评估</p>
        </div>
    </div>
    <div class="card-body">
        <p class="card-text">了解您的心脏健康状况。</p>
    </div>
</div>
```

### 图标颜色变体

```html
<div class="card-icon card-icon-primary">🟢</div>    <!-- 绿色 -->
<div class="card-icon card-icon-success">✅</div>   <!-- 绿色 -->
<div class="card-icon card-icon-warning">⚠️</div>   <!-- 橙色 -->
<div class="card-icon card-icon-danger">❌</div>    <!-- 红色 -->
<div class="card-icon card-icon-info">ℹ️</div>      <!-- 蓝色 -->
```

### 悬停卡片

```html
<div class="card card-hoverable">
    <div class="card-body">
        <h3 class="card-title">可悬停卡片</h3>
        <p class="card-text">鼠标悬停时会有动画效果。</p>
    </div>
</div>
```

### 统计卡片

```html
<div class="card card-stat">
    <div class="card-stat-label">今日步数</div>
    <div class="card-stat-value">8,542</div>
    <div class="card-stat-change positive">
        ↑ 12% 较昨日
    </div>
</div>
```

### 渐变卡片

```html
<div class="card card-gradient">
    <div class="card-body">
        <h3 class="card-title">渐变卡片</h3>
        <p class="card-text">带有渐变背景的卡片。</p>
    </div>
</div>
```

### 卡片网格

```html
<div class="card-grid">
    <div class="card">卡片 1</div>
    <div class="card">卡片 2</div>
    <div class="card">卡片 3</div>
</div>
```

---

## 表单组件

### 基础输入框

```html
<div class="form-group">
    <label class="form-label">姓名</label>
    <input type="text" class="form-input" placeholder="请输入姓名" />
</div>
```

### 必填项

```html
<div class="form-group">
    <label class="form-label form-label-required">邮箱</label>
    <input type="email" class="form-input" placeholder="请输入邮箱" />
</div>
```

### 带描述的标签

```html
<div class="form-group">
    <label class="form-label">
        密码
        <span class="form-label-optional">可选</span>
    </label>
    <input type="password" class="form-input" />
    <p class="form-label-description">至少 8 位，包含字母和数字</p>
</div>
```

### 输入框尺寸

```html
<input type="text" class="form-input form-input-sm" placeholder="小输入框" />
<input type="text" class="form-input" placeholder="默认输入框" />
<input type="text" class="form-input form-input-lg" placeholder="大输入框" />
```

### 带图标的输入框

```html
<div class="form-input-icon">
    <span class="input-icon">🔍</span>
    <input type="text" class="form-input" placeholder="搜索..." />
</div>

<div class="form-input-icon-right">
    <input type="email" class="form-input" placeholder="邮箱" />
    <span class="input-icon">✉️</span>
</div>
```

### 带前缀/后缀

```html
<div class="form-input-group">
    <input type="text" class="form-input" placeholder="金额" />
    <span class="input-addon">元</span>
</div>

<div class="form-input-group">
    <span class="input-addon">https://</span>
    <input type="text" class="form-input" placeholder="example.com" />
</div>
```

### 错误状态

```html
<div class="form-group">
    <label class="form-label">邮箱</label>
    <input type="email" class="form-input form-input-error" value="invalid@email" />
    <div class="form-error-message">
        ⚠️ 请输入有效的邮箱地址
    </div>
</div>
```

### 成功状态

```html
<div class="form-group">
    <label class="form-label">用户名</label>
    <input type="text" class="form-input form-input-success" value="zhangsan" />
    <div class="form-error-message" style="color: var(--success);">
        ✅ 用户名可用
    </div>
</div>
```

### 文本域

```html
<div class="form-group">
    <label class="form-label">简介</label>
    <textarea class="form-input form-textarea" rows="4" placeholder="介绍一下自己..."></textarea>
</div>
```

### 选择框

```html
<div class="form-group">
    <label class="form-label">城市</label>
    <select class="form-input form-select">
        <option>北京</option>
        <option>上海</option>
        <option>广州</option>
    </select>
</div>
```

### 复选框

```html
<label class="form-check">
    <input type="checkbox" class="form-check-input" />
    <span class="form-check-label">同意服务条款</span>
</label>

<label class="form-check">
    <input type="checkbox" class="form-check-input" checked />
    <div>
        <span class="form-check-label">订阅通讯</span>
        <span class="form-check-description">接收最新健康资讯</span>
    </div>
</label>
```

### 开关

```html
<label class="form-switch">
    <input type="checkbox" />
    <span class="form-switch-slider"></span>
</label>
```

### 范围滑块

```html
<div class="form-group">
    <label class="form-label">运动强度</label>
    <input type="range" class="form-range" min="0" max="100" value="50" />
    <span class="form-range-value">中等</span>
</div>
```

### 浮动标签

```html
<div class="form-floating">
    <input type="text" class="form-input" placeholder=" " />
    <label class="form-label">姓名</label>
</div>

<div class="form-floating">
    <input type="email" class="form-input" placeholder=" " />
    <label class="form-label">邮箱</label>
</div>
```

---

## Toast 通知

### JavaScript 使用

```javascript
import { UIManager } from './js/modules/ui/UIManager.js';

// 成功提示
UIManager.showToast('保存成功！', 3000, 'success');

// 错误提示
UIManager.showToast('操作失败，请重试', 3000, 'error');

// 警告提示
UIManager.showToast('请注意数据格式', 3000, 'warning');

// 信息提示
UIManager.showToast('系统更新完成', 3000, 'info');
```

### 自定义时长

```javascript
// 5 秒后消失
UIManager.showToast('长时间提示', 5000, 'info');

// 10 秒后消失
UIManager.showToast('超长提示', 10000, 'info');
```

---

## 模态框

### JavaScript 使用

```javascript
import { UIManager } from './js/modules/ui/UIManager.js';

// 简单模态框
UIManager.showModal({
    title: '提示',
    content: '<p>这是一个模态框</p>',
    onConfirm: () => console.log('确认'),
    onCancel: () => console.log('取消')
});

// 确认对话框
UIManager.showConfirm('确定要删除吗？', 
    () => console.log('已删除'),
    () => console.log('已取消')
);
```

### 自定义内容

```javascript
UIManager.showModal({
    title: '用户信息',
    content: `
        <div class="form-group">
            <label class="form-label">姓名</label>
            <input type="text" class="form-input" id="modalName" />
        </div>
        <div class="form-group">
            <label class="form-label">邮箱</label>
            <input type="email" class="form-input" id="modalEmail" />
        </div>
    `,
    onConfirm: () => {
        const name = document.getElementById('modalName').value;
        const email = document.getElementById('modalEmail').value;
        console.log('提交:', name, email);
    },
    onCancel: () => console.log('取消')
});
```

---

## CSS 变量

### 使用颜色变量

```css
.button {
    background: var(--primary-500);
    color: white;
}

.button:hover {
    background: var(--primary-600);
}

.alert-danger {
    background: var(--danger-light);
    color: var(--danger-dark);
    border: 1px solid var(--danger);
}
```

### 使用间距变量

```css
.card {
    padding: var(--spacing-6);
    margin-bottom: var(--spacing-4);
}

.header {
    padding: var(--spacing-4) var(--spacing-8);
}
```

### 使用字体变量

```css
body {
    font-family: var(--font-sans);
    font-size: var(--text-base);
    line-height: var(--leading-normal);
}

h1 {
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
}
```

### 使用圆角变量

```css
.button {
    border-radius: var(--radius-lg);
}

.card {
    border-radius: var(--radius-2xl);
}

.avatar {
    border-radius: var(--radius-full);
}
```

### 使用阴影变量

```css
.card {
    box-shadow: var(--shadow-md);
}

.card:hover {
    box-shadow: var(--shadow-xl);
}

.dropdown {
    box-shadow: var(--shadow-lg);
}
```

### 暗黑模式

```css
/* 默认亮色模式 */
:root {
    --bg-primary: white;
    --text-primary: var(--gray-900);
}

/* 暗黑模式 */
[data-theme="dark"] {
    --bg-primary: var(--gray-900);
    --text-primary: var(--gray-50);
}
```

```javascript
// 切换暗黑模式
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
}
```

---

## 最佳实践

### 1. 语义化命名

```html
<!-- 推荐 -->
<button class="btn btn-primary">保存</button>

<!-- 不推荐 -->
<button class="green-button">Click me</button>
```

### 2. 合理使用组件

```html
<!-- 推荐：使用卡片组件 -->
<div class="card">
    <div class="card-header">
        <h3 class="card-title">标题</h3>
    </div>
    <div class="card-body">内容</div>
</div>

<!-- 不推荐：手动实现样式 -->
<div style="background: white; padding: 20px; border-radius: 8px;">
    <h3>标题</h3>
    <p>内容</p>
</div>
```

### 3. 响应式设计

```html
<!-- 推荐：使用响应式类 -->
<div class="card-grid">
    <div class="card">卡片 1</div>
    <div class="card">卡片 2</div>
    <div class="card">卡片 3</div>
</div>

<!-- 不推荐：固定宽度 -->
<div style="display: flex; width: 900px;">
    <div style="width: 300px;">卡片 1</div>
    <div style="width: 300px;">卡片 2</div>
    <div style="width: 300px;">卡片 3</div>
</div>
```

### 4. 无障碍访问

```html
<!-- 推荐：添加 aria 标签 -->
<button class="btn btn-primary" aria-label="保存设置">
    💾
</button>

<!-- 表单关联 -->
<input type="text" id="name" aria-describedby="name-help" />
<span id="name-help" class="form-label-description">请输入真实姓名</span>
```

### 5. 性能优化

```html
<!-- 推荐：按需加载组件 -->
<link rel="preload" href="css/components/buttons.css" as="style">

<!-- 不推荐：一次性加载所有组件 -->
<link rel="stylesheet" href="css/components/all.css">
```

### 6. 一致性

```html
<!-- 推荐：统一使用一种风格 -->
<button class="btn btn-primary">保存</button>
<button class="btn btn-secondary">取消</button>

<!-- 不推荐：混用不同风格 -->
<button style="background: green;">保存</button>
<button class="cancel-btn">取消</button>
```

---

## 常见问题

### Q: 如何自定义按钮颜色？

A: 使用 CSS 变量覆盖：

```css
.btn-primary {
    background: linear-gradient(135deg, #your-color, #your-dark-color);
}
```

### Q: 如何创建自定义组件？

A: 遵循现有组件的命名规范：

```css
/* 新组件：警告框 */
.alert {
    padding: var(--spacing-4);
    border-radius: var(--radius-lg);
    border-left: var(--border-width-4) solid var(--warning);
}

.alert-warning {
    background: var(--warning-light);
    color: var(--warning-dark);
}
```

### Q: 如何禁用组件动画？

A: 添加 `prefers-reduced-motion` 媒体查询：

```css
@media (prefers-reduced-motion: reduce) {
    .btn {
        transition: none;
    }
    
    .card:hover {
        transform: none;
    }
}
```

---

## 更新日志

### v3.0.0 (2026-03-06)

- ✨ 新增 CSS 变量系统
- ✨ 新增按钮组件库
- ✨ 新增卡片组件库
- ✨ 新增表单组件库
- ✨ 新增 Toast 通知组件
- ✨ 新增模态框组件
- 🎨 优化暗黑模式支持
- 📱 优化响应式布局
- ♿ 改进无障碍访问

---

**最后更新**: 2026-03-06  
**版本**: v3.0.0
