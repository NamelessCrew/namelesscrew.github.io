## 🔄 重命名 GitHub 仓库，修正 URL

### 第一步：在 GitHub 上重命名仓库

1. **访问仓库页面**
   https://github.com/NamelessCrew/astrobo.github.io

2. **进入设置**
   点击仓库顶部的 "Settings"（设置）

3. **重命名仓库**
   - 在页面顶部找到 "Repository name"
   - 将 `astrobo.github.io` 改为 `namelesscrew.github.io`
   - 点击 "Rename" 按钮
   - ⚠️ 确认对话框，点击 "I understand, rename repository"

### 第二步：更新本地仓库的远程地址

在终端运行：

```bash
cd ~/my-homepage

# 更新远程 URL（使用 SSH）
git remote set-url origin git@github.com:NamelessCrew/namelesscrew.github.io.git

# 或者使用 HTTPS
git remote set-url origin https://github.com/NamelessCrew/namelesscrew.github.io.git

# 验证更改
git remote -v
```

### 第三步：更新网站内的 URL 引用

需要更新以下文件中的 URL：

1. **index.html**（约10处）
   - 搜索：`namelesscrew.github.io/astrobo.github.io`
   - 替换为：`namelesscrew.github.io`

2. **sitemap.xml**
   - 搜索：`yourusername.github.io`
   - 替换为：`namelesscrew.github.io`

3. **robots.txt**
   - 搜索：`yourusername.github.io`
   - 替换为：`namelesscrew.github.io`

快速替换命令（macOS）：
```bash
cd ~/my-homepage

# 更新 sitemap.xml
sed -i '' 's|yourusername.github.io|namelesscrew.github.io|g' sitemap.xml

# 更新 robots.txt
sed -i '' 's|yourusername.github.io|namelesscrew.github.io|g' robots.txt

# 更新 index.html
sed -i '' 's|yourusername.github.io|namelesscrew.github.io|g' index.html
```

### 第四步：推送更新

```bash
cd ~/my-homepage

git add .
git commit -m "Fix: Update URLs after repository rename"
git push
```

### ✅ 完成！

等待 2-5 分钟后，你的网站将可以通过以下地址访问：

🌐 **https://namelesscrew.github.io/**

旧的 URL 会自动重定向到新地址。

---

## ⚠️ 注意事项

1. **GitHub 会自动设置重定向**
   - 旧地址 `namelesscrew.github.io/astrobo.github.io/` 会自动跳转到新地址
   - 但建议更新所有引用

2. **可能需要清除浏览器缓存**
   - 按 `Cmd + Shift + R` (macOS) 或 `Ctrl + Shift + R` (Windows) 强制刷新

3. **等待 DNS 传播**
   - 通常 2-5 分钟
   - 最多可能需要 10 分钟

---

## 📊 修改前后对比

| 项目 | 修改前 | 修改后 |
|------|--------|--------|
| 仓库名 | `astrobo.github.io` | `namelesscrew.github.io` |
| 网站 URL | `namelesscrew.github.io/astrobo.github.io/` | `namelesscrew.github.io/` |
| 类型 | 项目页面 | 用户主页 ✅ |

---

## 🎯 为什么要这样改？

- ✅ URL 更短更专业
- ✅ 符合 GitHub Pages 用户主页规范
- ✅ SEO 更友好
- ✅ 容易记忆和分享
- ✅ 更符合学术主页的标准格式
