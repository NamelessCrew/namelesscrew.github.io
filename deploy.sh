#!/bin/bash

# 部署脚本 - 将你的主页部署到 GitHub Pages
# 使用方法: ./deploy.sh

echo "🚀 开始部署个人主页到 GitHub Pages..."

# 检查是否已经初始化 git 仓库
if [ ! -d .git ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    git branch -M main
fi

# 添加所有文件
echo "📝 添加文件到暂存区..."
git add .

# 提交更改
echo "💾 提交更改..."
read -p "请输入提交信息 (默认: Update homepage): " commit_message
commit_message=${commit_message:-"Update homepage"}
git commit -m "$commit_message"

# 检查是否已经设置远程仓库
if ! git remote | grep -q origin; then
    echo "🔗 请输入你的 GitHub 仓库地址..."
    read -p "GitHub 仓库 URL (例如: https://github.com/username/username.github.io.git): " repo_url
    git remote add origin "$repo_url"
fi

# 推送到 GitHub
echo "⬆️  推送到 GitHub..."
git push -u origin main

echo "✅ 部署完成！"
echo "🌐 你的网站将在几分钟后可以访问"
echo "📍 确保在 GitHub 仓库设置中启用了 GitHub Pages"
