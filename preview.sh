#!/bin/bash

# 个人学术主页 - 本地预览脚本
# 使用方法: ./preview.sh

echo "🌐 启动本地预览服务器..."
echo ""
echo "📍 项目位置: $(pwd)"
echo ""

# 检查 Python 是否安装
if command -v python3 &> /dev/null; then
    PORT=8000
    
    # 检查端口是否被占用
    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "⚠️  端口 $PORT 已被占用，尝试使用端口 8001..."
        PORT=8001
    fi
    
    echo "✨ 服务器启动成功！"
    echo ""
    echo "📱 在浏览器中访问以下地址："
    echo "   主页面: http://localhost:$PORT/index.html"
    echo "   示例页面: http://localhost:$PORT/example.html"
    echo ""
    echo "💡 提示："
    echo "   - 主页面 (index.html) 需要你自定义内容"
    echo "   - 示例页面 (example.html) 展示了完整的填写示例"
    echo "   - 按 Ctrl+C 停止服务器"
    echo ""
    echo "📖 相关文档："
    echo "   - README.md - 项目说明"
    echo "   - QUICKSTART.md - 快速开始"
    echo "   - CUSTOMIZATION.md - 自定义指南"
    echo ""
    echo "---"
    echo ""
    
    python3 -m http.server $PORT
    
elif command -v php &> /dev/null; then
    echo "✨ 使用 PHP 启动服务器..."
    php -S localhost:8000
else
    echo "❌ 错误: 未找到 Python 或 PHP"
    echo ""
    echo "请安装 Python 3 或 PHP 来启动本地服务器。"
    echo ""
    echo "或者使用其他方式："
    echo "  - 使用 VSCode 的 Live Server 插件"
    echo "  - 直接用浏览器打开 index.html 文件"
    exit 1
fi
