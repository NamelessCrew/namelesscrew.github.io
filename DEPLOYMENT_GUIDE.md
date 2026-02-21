# 🌐 部署指南 - 让你的主页上线并被搜索到

## 📋 目录
1. [部署到 GitHub Pages](#部署到-github-pages)
2. [搜索引擎优化 (SEO)](#搜索引擎优化-seo)
3. [提交到搜索引擎](#提交到搜索引擎)
4. [域名绑定（可选）](#域名绑定可选)
5. [检查与验证](#检查与验证)

---

## 🚀 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. **登录 GitHub**
   - 访问 https://github.com
   - 登录你的账号

2. **创建新仓库**
   - 点击右上角 "+" → "New repository"
   - 仓库名：`yourusername.github.io`（替换 yourusername 为你的 GitHub 用户名）
   - 示例：如果你的用户名是 `universalmariner`，则仓库名为 `universalmariner.github.io`
   - 勾选 "Public"（必须是公开的）
   - **不要**勾选 "Add a README file"
   - 点击 "Create repository"

### 第二步：部署代码

#### 方法一：使用部署脚本（推荐）

```bash
cd ~/my-homepage

# 运行部署脚本
./deploy.sh

# 按照提示输入你的 GitHub 仓库地址
# 格式：https://github.com/yourusername/yourusername.github.io.git
```

#### 方法二：手动部署

```bash
cd ~/my-homepage

# 1. 初始化 Git 仓库
git init
git branch -M main

# 2. 添加文件
git add .

# 3. 提交
git commit -m "Initial commit: Academic homepage with CVPR 2026 acceptance"

# 4. 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# 5. 推送到 GitHub
git push -u origin main
```

### 第三步：启用 GitHub Pages

1. **进入仓库设置**
   - 访问你的仓库：`https://github.com/yourusername/yourusername.github.io`
   - 点击 "Settings"（设置）

2. **配置 GitHub Pages**
   - 在左侧菜单找到 "Pages"
   - Source（源）：选择 "main" 分支
   - Folder（文件夹）：保持 "/ (root)"
   - 点击 "Save"

3. **等待部署**
   - 部署需要 2-5 分钟
   - 页面顶部会显示："Your site is live at https://yourusername.github.io/"
   - 点击链接查看你的主页！

### 第四步：更新 SEO 文件

**重要**：在部署前，需要更新以下文件中的用户名：

1. **index.html**
   - 搜索 `yourusername`，替换为你的 GitHub 用户名
   - 共有多处需要替换

2. **sitemap.xml**
   ```xml
   <loc>https://yourusername.github.io/</loc>
   <!-- 替换为 -->
   <loc>https://你的用户名.github.io/</loc>
   ```

3. **robots.txt**
   ```
   Sitemap: https://yourusername.github.io/sitemap.xml
   <!-- 替换为 -->
   Sitemap: https://你的用户名.github.io/sitemap.xml
   ```

---

## 🔍 搜索引擎优化 (SEO)

### ✅ 已完成的 SEO 优化

你的主页已经包含以下 SEO 优化：

1. **HTML Meta 标签**
   - ✅ Title 标签（包含姓名和研究方向）
   - ✅ Description 标签（描述个人信息和研究兴趣）
   - ✅ Keywords 标签（关键词：Robotic Manipulation, Robot Learning 等）
   - ✅ Open Graph 标签（社交媒体分享优化）
   - ✅ Twitter Card 标签（Twitter 分享优化）
   - ✅ Canonical URL（规范网址）

2. **SEO 文件**
   - ✅ `robots.txt`（允许搜索引擎爬取）
   - ✅ `sitemap.xml`（网站地图）

3. **内容优化**
   - ✅ 语义化 HTML 标签
   - ✅ 图片 alt 属性
   - ✅ 结构化内容（H1, H2 层级）
   - ✅ 响应式设计（移动端友好）

### 📈 SEO 最佳实践

1. **定期更新内容**
   - 更新 News 部分（新论文、获奖等）
   - 添加新项目和发表
   - 保持活跃度

2. **外部链接**
   - 在简历中添加主页链接
   - 在 GitHub profile 添加主页链接
   - 在 Google Scholar 个人资料添加主页链接
   - 在学术社交网站（ResearchGate, LinkedIn）添加链接

3. **社交媒体分享**
   - 在 Twitter/X 分享你的主页
   - 在 LinkedIn 分享
   - 在学术论坛分享

---

## 🌐 提交到搜索引擎

### Google Search Console

1. **注册并验证网站**
   - 访问：https://search.google.com/search-console/
   - 点击 "添加资源"
   - 输入：`https://yourusername.github.io`
   - 选择验证方法：
     - **HTML 文件验证**（推荐）：下载验证文件，上传到网站根目录
     - **HTML 标签验证**：在 index.html 的 `<head>` 中添加验证标签

2. **提交网站地图**
   ```
   在 Google Search Console 中：
   左侧菜单 → 站点地图 → 添加新的站点地图
   输入：sitemap.xml
   点击提交
   ```

3. **请求索引**
   ```
   在 Google Search Console 中：
   顶部搜索框 → 输入你的网站 URL
   点击 "请求编入索引"
   ```

### Bing Webmaster Tools

1. **注册并验证**
   - 访问：https://www.bing.com/webmasters/
   - 添加站点：`https://yourusername.github.io`
   - 验证方法同 Google

2. **提交网站地图**
   ```
   站点地图 → 提交站点地图
   输入：https://yourusername.github.io/sitemap.xml
   ```

### Baidu 百度站长平台（针对中文搜索）

1. **注册验证**
   - 访问：https://ziyuan.baidu.com/
   - 添加网站，验证所有权

2. **提交链接**
   ```
   链接提交 → 主动推送
   提交你的主页 URL
   ```

---

## 🌟 域名绑定（可选）

如果你想使用自己的域名（如 `wenboyü.com`）：

### 购买域名

推荐域名注册商：
- Namecheap（便宜）
- GoDaddy
- 阿里云（国内）
- 腾讯云（国内）

### 配置 DNS

1. **在域名提供商设置 DNS**
   ```
   类型: A
   主机: @
   值: 185.199.108.153
   
   类型: A
   主机: @
   值: 185.199.109.153
   
   类型: A
   主机: @
   值: 185.199.110.153
   
   类型: A
   主机: @
   值: 185.199.111.153
   
   类型: CNAME
   主机: www
   值: yourusername.github.io
   ```

2. **在 GitHub 仓库配置**
   - 在仓库根目录创建 `CNAME` 文件
   - 文件内容：你的域名（如 `wenboyu.com`）
   - 提交并推送
   - GitHub Settings → Pages → Custom domain → 输入域名
   - 勾选 "Enforce HTTPS"

---

## ✅ 检查与验证

### 上线后检查清单

- [ ] 网站能正常访问：`https://yourusername.github.io`
- [ ] 所有图片正常显示
- [ ] 所有链接可以点击
- [ ] 手机端显示正常
- [ ] robots.txt 可访问：`https://yourusername.github.io/robots.txt`
- [ ] sitemap.xml 可访问：`https://yourusername.github.io/sitemap.xml`
- [ ] 回到顶部按钮工作正常
- [ ] 所有特效动画正常

### SEO 检查工具

1. **Google Mobile-Friendly Test**
   - 网址：https://search.google.com/test/mobile-friendly
   - 测试移动端友好度

2. **Google PageSpeed Insights**
   - 网址：https://pagespeed.web.dev/
   - 测试页面加载速度

3. **SEO 检查工具**
   - Seobility：https://www.seobility.net/en/seocheck/
   - 全面的 SEO 分析

4. **验证结构化数据**
   - Google Rich Results Test：https://search.google.com/test/rich-results

---

## 📊 搜索引擎收录时间线

- **Google**：1-7 天（通过 Search Console 可加快到几小时）
- **Bing**：3-7 天
- **百度**：7-30 天（中文内容更快）
- **其他搜索引擎**：7-14 天

### 加快收录的方法

1. ✅ 提交 sitemap.xml
2. ✅ 在 Search Console 请求索引
3. ✅ 从其他网站链接到你的主页
4. ✅ 在社交媒体分享
5. ✅ 定期更新内容

---

## 🎯 完整部署命令速查

```bash
# 1. 进入项目目录
cd ~/my-homepage

# 2. 更新 sitemap.xml 和 robots.txt（替换 yourusername）
# 使用编辑器手动替换

# 3. 初始化并部署
git init
git branch -M main
git add .
git commit -m "Deploy academic homepage with CVPR 2026"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main

# 4. 等待 2-5 分钟后访问
# https://yourusername.github.io
```

---

## 📞 需要帮助？

如果遇到问题：
1. 检查 GitHub Actions 日志（仓库 → Actions）
2. 查看 GitHub Pages 状态（Settings → Pages）
3. 确认所有文件正确上传
4. 清除浏览器缓存后重试

---

## 🎉 恭喜！

按照以上步骤，你的主页将：
- ✅ 成功上线并可公开访问
- ✅ 被 Google、Bing 等搜索引擎收录
- ✅ 在搜索 "Wenbo Yu" 或 "余文博" 时出现
- ✅ 优化了 SEO，提高搜索排名

**预计 7-14 天内，搜索引擎会完全收录你的主页！**
