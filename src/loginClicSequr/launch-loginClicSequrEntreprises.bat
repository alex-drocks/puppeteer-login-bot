rem The desktop shortcut link that uses this batch script must have its "start in" property set to %V
rem to properly set dynamic invokedFrom directory value.
@echo off
Set invokedFrom=%__CD__:~,-1%
cd C:\Users\Alex\Desktop\local-dev-tests\puppeteer-login-bot
start /Min node src/index.js loginClicSequrEntreprises
