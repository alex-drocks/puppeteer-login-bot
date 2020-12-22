"use strict";
const {saveCredentials} = require("./db");
const {puppeteerController} = require("./puppeteerController");
const {loginClicSequr} = require("./loginClicSequr/loginClicSequr");

// saveCredentials({username: "client1", password: "12345"});

(async () => {
  await puppeteerController.initializeBrowser();
  await loginClicSequr("entreprises", puppeteerController);
})();

