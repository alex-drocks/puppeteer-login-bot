@echo off
Set InvokedFrom=%__CD__:~,-1%
cd C:\Users\Alex\Desktop\local-dev-tests\puppeteer-login-bot
start /Min node src/index.js
