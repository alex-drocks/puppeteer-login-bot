"use strict";
const puppeteerController = require("./puppeteerController");
const {loginClicSequr} = require("./loginClicSequr/loginClicSequr");

// Manually set fake username and password to test
const {saveCredentials} = require("./db");
saveCredentials({username: "alex1234", password: "12345678"});


(async () => {
  await puppeteerController.initializeBrowser();

  const botFunction = process.argv[2];
  if (botFunction === "loginClicSequrEntreprises") {
    await loginClicSequr("entreprises", puppeteerController);
  } else if (botFunction === "loginClicSequrExpress") {
    await loginClicSequr("express", puppeteerController);
  } else {
    console.log("botFunction was not defined in process.argv[2], fallback to default clic sequr entreprise");
    await loginClicSequr("entreprises", puppeteerController);
  }
})();

