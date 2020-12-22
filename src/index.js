"use strict";
const {puppeteerWrapper} = require("./puppeteerWrapper");
const {loginClicSequr} = require("./loginClicSequr");

(async () => {
  await puppeteerWrapper.initializeBrowser();
  await loginClicSequr("entreprises", puppeteerWrapper);
})();
