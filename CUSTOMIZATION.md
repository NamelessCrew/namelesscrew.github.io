# 自定义配置指南

本文档详细说明如何自定义你的个人学术主页的各个部分。

## 📝 基本信息配置

### 1. 修改页面标题

在 `index.html` 第 6 行：

```html
<title>Your Name - Personal Homepage</title>
```

改为：

```html
<title>张三 - 个人主页</title>
```

### 2. 修改个人信息

在 `index.html` 第 20-28 行，找到以下部分：

```html
<h1 class="hero-title">Your Name (你的中文名)</h1>
<p class="hero-description">
    我是某某大学某某学院的博士研究生。
</p>
<p class="hero-description">
    我的导师是某某教授。我的研究兴趣主要集中在机器学习、计算机视觉等领域。
</p>
<p class="hero-description">
    我于2022年在某某大学获得学士学位。
</p>
```

### 3. 修改联系方式

在 `index.html` 第 29-37 行：

```html
<div class="contact-links">
    <a href="mailto:your.email@example.com" class="contact-link" title="Email">
        <i class="fas fa-envelope"></i> Email
    </a>
    <a href="https://scholar.google.com" target="_blank" class="contact-link" title="Google Scholar">
        <i class="fas fa-graduation-cap"></i> Scholar
    </a>
    <a href="https://github.com/yourusername" target="_blank" class="contact-link" title="GitHub">
        <i class="fab fa-github"></i> GitHub
    </a>
</div>
```

**示例：** 添加更多社交链接

```html
<a href="https://twitter.com/yourusername" target="_blank" class="contact-link" title="Twitter">
    <i class="fab fa-twitter"></i> Twitter
</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact-link" title="LinkedIn">
    <i class="fab fa-linkedin"></i> LinkedIn
</a>
```

## 📰 新闻动态配置

在 `index.html` 第 52-72 行，添加或修改新闻项：

```html
<div class="news-item">
    <span class="news-date">2025-02</span>
    <p class="news-content">
        <strong>CVPR 2025</strong> - 一篇论文被接收！感谢所有合作者！
    </p>
</div>
```

**添加新新闻：** 复制整个 `<div class="news-item">...</div>` 块。

## 📚 论文发表配置

### 添加新论文

在 `index.html` 论文部分，复制以下模板：

```html
<div class="publication-item">
    <div class="pub-image">
        <img src="images/你的论文图片.jpg" alt="论文标题">
    </div>
    <div class="pub-content">
        <h3 class="pub-title">你的论文完整标题</h3>
        <p class="pub-authors">作者1, 作者2*, 作者3*</p>
        <p class="pub-venue">会议/期刊名称 年份</p>
        <div class="pub-links">
            <a href="论文arXiv链接" class="pub-link">arXiv</a>
            <a href="代码链接" class="pub-link">Code</a>
            <a href="项目网站链接" class="pub-link">Project Website</a>
            <a href="视频链接" class="pub-link">Video</a>
        </div>
    </div>
</div>
```

### 论文排序

- 最新的论文放在最上面
- 按时间倒序排列（2025, 2024, 2023...）

## 🎨 样式自定义

### 1. 修改主题颜色

编辑 `css/style.css` 第 10-17 行：

```css
:root {
    --primary-color: #2563eb;      /* 主色调 - 蓝色 */
    --text-primary: #1f2937;       /* 主要文字颜色 - 深灰 */
    --text-secondary: #6b7280;     /* 次要文字颜色 - 中灰 */
    --bg-primary: #ffffff;         /* 主背景色 - 白色 */
    --bg-secondary: #f9fafb;       /* 次要背景色 - 浅灰 */
    --border-color: #e5e7eb;       /* 边框颜色 - 灰色 */
}
```

**常用颜色方案：**

科技蓝（默认）：
```css
--primary-color: #2563eb;
```

学术绿：
```css
--primary-color: #059669;
```

专业紫：
```css
--primary-color: #7c3aed;
```

### 2. 修改字体大小

在 `css/style.css` 中找到对应的类并修改：

```css
.hero-title {
    font-size: 2.5rem;  /* 主标题大小 */
}

.hero-description {
    font-size: 1.125rem;  /* 描述文字大小 */
}
```

### 3. 修改布局宽度

在 `css/style.css` 第 23 行：

```css
.container {
    max-width: 1200px;  /* 改为 1000px 或 1400px */
}
```

## 🖼️ 图片管理

### 图片规格建议

1. **个人照片** (`profile.jpg`)
   - 尺寸：500x500 像素（正方形）
   - 格式：JPG 或 PNG
   - 大小：< 200KB

2. **论文配图** (`paper1.jpg`, `paper2.jpg`, ...)
   - 尺寸：800x600 像素（4:3 比例）
   - 格式：JPG 或 PNG
   - 大小：< 500KB

### 图片优化工具

- [TinyPNG](https://tinypng.com/) - 在线压缩图片
- [Squoosh](https://squoosh.app/) - Google 的图片优化工具
- ImageOptim (macOS) - 本地图片压缩工具

### 替换占位符图片

当前使用的是在线占位符图片。要替换为真实图片：

1. 准备好你的图片文件
2. 将图片放入 `images/` 文件夹
3. 在 `index.html` 中修改图片路径：

```html
<!-- 从 -->
<img src="https://via.placeholder.com/500x500/..." alt="Your Name" class="profile-img">

<!-- 改为 -->
<img src="images/profile.jpg" alt="Your Name" class="profile-img">
```

## 🔍 SEO 优化

### 添加元标签

在 `index.html` 的 `<head>` 部分添加：

```html
<meta name="description" content="张三的个人学术主页，研究方向：机器学习、计算机视觉">
<meta name="keywords" content="机器学习,计算机视觉,深度学习,AI研究">
<meta name="author" content="张三">

<!-- Open Graph 标签（社交媒体分享） -->
<meta property="og:title" content="张三 - 个人学术主页">
<meta property="og:description" content="博士研究生，研究方向：机器学习、计算机视觉">
<meta property="og:image" content="https://yourusername.github.io/images/profile.jpg">
<meta property="og:url" content="https://yourusername.github.io/">
```

### 添加网站图标 (Favicon)

1. 准备一个 32x32 或 64x64 像素的图标文件
2. 将其命名为 `favicon.ico` 并放在根目录
3. 在 `<head>` 中添加：

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## 📊 添加访客统计

### Google Analytics

在 `</head>` 之前添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

将 `G-XXXXXXXXXX` 替换为你的 Google Analytics ID。

## 🌐 自定义域名

### 步骤

1. 购买一个域名（如 `www.yourname.com`）
2. 在域名提供商处设置 DNS 记录：

```
类型: CNAME
名称: www
值: yourusername.github.io
```

3. 在仓库根目录创建 `CNAME` 文件：

```
www.yourname.com
```

4. 提交并推送到 GitHub
5. 在 GitHub 仓库设置中启用 HTTPS

## 🔧 高级功能

### 添加深色模式

在 `js/script.js` 末尾添加：

```javascript
// 深色模式切换
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 页面加载时检查深色模式设置
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
```

在 `css/style.css` 末尾添加：

```css
/* 深色模式 */
body.dark-mode {
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --bg-primary: #1f2937;
    --bg-secondary: #111827;
    --border-color: #374151;
}
```

### 添加论文搜索功能

在导航栏添加搜索框，然后在 `js/script.js` 中添加搜索逻辑。

### 添加标签/分类

为论文添加研究方向标签，实现按类别筛选。

## 📱 响应式调整

如果你想调整移动端布局，编辑 `css/style.css` 中的媒体查询部分（从第 320 行开始）。

## ✅ 检查清单

在发布之前，确保：

- [ ] 所有个人信息已更新
- [ ] 所有链接都有效
- [ ] 所有图片已替换（不再使用占位符）
- [ ] 在多个浏览器中测试（Chrome, Firefox, Safari）
- [ ] 在移动设备上测试
- [ ] 检查拼写和语法
- [ ] 添加了 Google Analytics（可选）
- [ ] 设置了自定义域名（可选）

---

如有问题，请参考 `README.md` 或 `QUICKSTART.md`。
