# 🚀 快速部署指南（5分钟上线）

## 第一步：创建 GitHub 仓库（2分钟）

1. 访问 https://github.com/new
2. 仓库名：`你的用户名.github.io`（例如：`universalmariner.github.io`）
3. 勾选 **Public**
4. **不要**勾选 "Add a README"
5. 点击 "Create repository"

## 第二步：更新配置（1分钟）

**重要**：用文本编辑器替换以下文件中的 `yourusername` 为你的 GitHub 用户名：

1. `index.html`（大约10处）
2. `sitemap.xml`（1处）
3. `robots.txt`（1处）

快速查找替换命令：
```bash
cd ~/my-homepage

# macOS/Linux
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) -exec sed -i '' 's/yourusername/你的用户名/g' {} +

# 或手动替换（推荐，更安全）
```

## 第三步：部署上线（2分钟）

```bash
cd ~/my-homepage

# 运行部署脚本
./deploy.sh

# 输入你的仓库地址（会提示）
# 例如：https://github.com/universalmariner/universalmariner.github.io.git
```

## 第四步：启用 GitHub Pages（1分钟）

1. 访问你的仓库页面
2. 点击 **Settings**（设置）
3. 左侧菜单点击 **Pages**
4. Source 选择 **main** 分支
5. 点击 **Save**

## ✅ 完成！

等待 2-5 分钟后访问：`https://你的用户名.github.io`

---

## 📋 下一步：提交到搜索引擎

### Google（最重要）

1. 访问：https://search.google.com/search-console/
2. 添加资源：`https://你的用户名.github.io`
3. 选择 HTML 标签验证方法
4. 复制验证代码，添加到 `index.html` 的 `<head>` 部分
5. 推送更新
6. 点击"验证"
7. 提交站点地图：`https://你的用户名.github.io/sitemap.xml`

### Bing

1. 访问：https://www.bing.com/webmasters/
2. 重复类似步骤

### 百度（可选，中文搜索）

1. 访问：https://ziyuan.baidu.com/
2. 添加网站并验证

---

## 🎯 常见问题

**Q: 网站显示 404？**
A: 等待 2-5 分钟，GitHub Pages 需要时间部署。

**Q: 图片不显示？**
A: 检查图片路径，确保 `images/` 文件夹已上传。

**Q: 多久能被 Google 搜到？**
A: 提交 sitemap 后，通常 1-7 天。在 Search Console 请求索引可加快到几小时。

**Q: 如何更新内容？**
A: 修改文件后运行：
```bash
cd ~/my-homepage
git add .
git commit -m "Update homepage"
git push
```

---

## 📞 完整文档

详细部署和 SEO 指南：查看 `DEPLOYMENT_GUIDE.md`
