const { puppeteerWrapper } = require("./puppeteerWrapper");
const { loginClicSequr } = require("./loginBots/loginClicSequr");

(async () => {
  await puppeteerWrapper.initializeBrowser();

  await loginClicSequr("entreprises", puppeteerWrapper);
})();
