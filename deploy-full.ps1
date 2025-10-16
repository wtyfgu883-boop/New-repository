# Полный скрипт с GitHub CLI (если установлен)
# Установи GitHub CLI: winget install GitHub.cli

Write-Host "🚀 Полный деплой с GitHub CLI..." -ForegroundColor Green

# Проверяем GitHub CLI
if (!(Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "❌ GitHub CLI не установлен. Установите: winget install GitHub.cli" -ForegroundColor Red
    exit 1
}

# Авторизуемся в GitHub
Write-Host "🔐 Авторизуемся в GitHub..." -ForegroundColor Yellow
gh auth login

# Создаем репозиторий
$repoName = Read-Host "Введите название репозитория"
Write-Host "📁 Создаем репозиторий $repoName..." -ForegroundColor Yellow
gh repo create $repoName --public --source=. --remote=origin --push

# Деплоим на Vercel
Write-Host "🚀 Деплоим на Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host "✅ Готово! Репозиторий создан и проект задеплоен!" -ForegroundColor Green
