# Script për të rregulluar npm probleme
cd C:\Users\User\Desktop\syria-renata

Write-Host "1. Duke fshirë node_modules..." -ForegroundColor Yellow
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
Remove-Item yarn.lock -ErrorAction SilentlyContinue

Write-Host "2. Duke pastruar cache..." -ForegroundColor Yellow
npm cache clean --force

Write-Host "3. Duke instaluar react-scripts..." -ForegroundColor Yellow
npm install react-scripts@5.0.1 --legacy-peer-deps --no-audit

Write-Host "4. Duke instaluar ajv..." -ForegroundColor Yellow
npm install ajv@8.12.0 ajv-keywords@5.1.0 --legacy-peer-deps

Write-Host "5. Duke instaluar react..." -ForegroundColor Yellow
npm install react@18.2.0 react-dom@18.2.0 --legacy-peer-deps

Write-Host "6. Duke instaluar të gjitha..." -ForegroundColor Yellow
npm install --legacy-peer-deps --no-audit

Write-Host "7. Duke filluar aplikacionin..." -ForegroundColor Green
npm start
