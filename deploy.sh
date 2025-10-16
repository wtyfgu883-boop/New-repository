#!/bin/bash
# Bash скрипт для деплоя на Vercel
# Запуск: chmod +x deploy.sh && ./deploy.sh

echo "🚀 Начинаем деплой проекта на Vercel..."

# Проверяем наличие Git
if ! command -v git &> /dev/null; then
    echo "❌ Git не установлен. Установите Git и повторите попытку."
    exit 1
fi

# Проверяем наличие Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 Устанавливаем Vercel CLI..."
    npm install -g vercel
fi

# Проверяем наличие Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен. Установите Node.js и повторите попытку."
    exit 1
fi

# Устанавливаем зависимости
echo "📦 Устанавливаем зависимости..."
npm install

# Собираем проект
echo "🔨 Собираем проект..."
npm run build

# Инициализируем Git если не инициализирован
if [ ! -d ".git" ]; then
    echo "📁 Инициализируем Git репозиторий..."
    git init
    git add .
    git commit -m "Initial commit"
fi

# Проверяем статус Vercel
echo "🔐 Проверяем авторизацию Vercel..."
if ! vercel whoami &> /dev/null; then
    echo "🔑 Авторизуемся в Vercel..."
    vercel login
fi

# Деплоим на Vercel
echo "🚀 Деплоим на Vercel..."
vercel --prod

echo "✅ Деплой завершен!"
echo "📝 Следующие шаги:"
echo "1. Создайте новый репозиторий на GitHub"
echo "2. Подключите его к Vercel для автоматического деплоя"
echo "3. Настройте домен если нужно"
