"use strict";
const {puppeteerController} = require("./puppeteerController");
const {loginClicSequr} = require("./loginClicSequr/loginClicSequr");

(async () => {
  await puppeteerController.initializeBrowser();

  const botFunction = process.argv[2];
  if (botFunction === "loginClicSequrEntreprises")
    await loginClicSequr("entreprises", puppeteerController);
  else if (botFunction === "loginClicSequrExpress")
    await loginClicSequr("express", puppeteerController);
})();

