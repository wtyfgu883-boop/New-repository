# PowerShell скрипт для деплоя на Vercel
# Запуск: .\deploy.ps1

Write-Host "🚀 Начинаем деплой проекта на Vercel..." -ForegroundColor Green

# Проверяем наличие Git
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git не установлен. Установите Git и повторите попытку." -ForegroundColor Red
    exit 1
}

# Проверяем наличие Vercel CLI
if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "📦 Устанавливаем Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Проверяем наличие Node.js
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js не установлен. Установите Node.js и повторите попытку." -ForegroundColor Red
    exit 1
}

# Устанавливаем зависимости
Write-Host "📦 Устанавливаем зависимости..." -ForegroundColor Yellow
npm install

# Собираем проект
Write-Host "🔨 Собираем проект..." -ForegroundColor Yellow
npm run build

# Инициализируем Git если не инициализирован
if (!(Test-Path ".git")) {
    Write-Host "📁 Инициализируем Git репозиторий..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit"
}

# Проверяем статус Vercel
Write-Host "🔐 Проверяем авторизацию Vercel..." -ForegroundColor Yellow
$vercelStatus = vercel whoami 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "🔑 Авторизуемся в Vercel..." -ForegroundColor Yellow
    vercel login
}

# Деплоим на Vercel
Write-Host "🚀 Деплоим на Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host "✅ Деплой завершен!" -ForegroundColor Green
Write-Host "📝 Следующие шаги:" -ForegroundColor Cyan
Write-Host "1. Создайте новый репозиторий на GitHub" -ForegroundColor White
Write-Host "2. Подключите его к Vercel для автоматического деплоя" -ForegroundColor White
Write-Host "3. Настройте домен если нужно" -ForegroundColor White
