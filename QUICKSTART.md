# 🚀 快速开始指南

## 第一步：查看本地预览

1. 打开终端，进入项目目录：
```bash
cd ~/my-homepage
```

2. 启动本地服务器（选择其中一种方式）：

**使用 Python（推荐）：**
```bash
python3 -m http.server 8000
```

**使用 PHP：**
```bash
php -S localhost:8000
```

3. 在浏览器中访问：`http://localhost:8000`

## 第二步：自定义内容

### 必须修改的内容

1. **个人信息** (index.html 第 20-28 行)
   - [ ] 修改姓名和中文名
   - [ ] 修改学校和专业信息
   - [ ] 修改研究方向
   - [ ] 修改导师信息

2. **联系方式** (index.html 第 29-37 行)
   - [ ] 更新邮箱地址
   - [ ] 更新 Google Scholar 链接
   - [ ] 更新 GitHub 链接

3. **个人照片**
   - [ ] 准备一张个人照片（500x500 像素）
   - [ ] 保存为 `images/profile.jpg`
   - [ ] 在 index.html 中更新图片路径（第 40 行）

4. **论文发表**
   - [ ] 添加你的论文信息
   - [ ] 为每篇论文准备配图（800x600 像素）
   - [ ] 保存为 `images/paper1.jpg`, `images/paper2.jpg` 等

### 可选修改的内容

5. **最新消息** (index.html 第 52-72 行)
   - [ ] 添加或更新新闻动态

6. **学术服务** (index.html 第 117-128 行)
   - [ ] 添加担任审稿人的会议

7. **关于我** (index.html 第 44-50 行)
   - [ ] 添加更详细的个人介绍

## 第三步：部署到 GitHub Pages

### 3.1 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称必须是：`你的用户名.github.io`
   - 例如：如果你的 GitHub 用户名是 `zhangsan`，仓库名就是 `zhangsan.github.io`
4. 选择 "Public"（公开）
5. 不要勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 3.2 上传代码到 GitHub

方法一：使用部署脚本（推荐）
```bash
cd ~/my-homepage
./deploy.sh
```
按照提示输入你的 GitHub 仓库地址。

方法二：手动上传
```bash
cd ~/my-homepage
git init
git add .
git commit -m "Initial commit: Add personal homepage"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

### 3.3 启用 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 "Settings"（设置）
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 下拉菜单中选择 "main" 分支
5. 点击 "Save"（保存）

### 3.4 访问你的网站

等待 2-5 分钟后，你的网站就会在以下地址上线：
```
https://你的用户名.github.io/
```

## 第四步：后续更新

当你需要更新网站内容时：

1. 修改本地文件
2. 运行部署脚本：
```bash
cd ~/my-homepage
./deploy.sh
```

或者手动推送：
```bash
git add .
git commit -m "Update: 描述你的更改"
git push
```

## 💡 常见问题

### Q1: 网站没有显示？
A: 等待 5-10 分钟，GitHub Pages 需要时间构建和部署。

### Q2: 图片不显示？
A: 检查图片路径是否正确，确保图片文件在 `images/` 文件夹中。

### Q3: 如何修改主题颜色？
A: 编辑 `css/style.css` 文件中的 CSS 变量（第 10-17 行）。

### Q4: 如何添加更多论文？
A: 在 `index.html` 中复制一个 `<div class="publication-item">` 块，修改其中的内容。

### Q5: 可以使用自定义域名吗？
A: 可以！在仓库根目录创建一个名为 `CNAME` 的文件，内容是你的域名（如 `www.example.com`）。

## 📚 更多资源

- [GitHub Pages 官方文档](https://docs.github.com/pages)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [Git 教程](https://git-scm.com/book/zh/v2)

## 🆘 需要帮助？

如果遇到问题，可以：
1. 查看 GitHub Pages 的构建日志
2. 在 GitHub 仓库的 Issues 中提问
3. 参考其他学术主页的源代码

---

祝你的主页上线顺利！🎉
