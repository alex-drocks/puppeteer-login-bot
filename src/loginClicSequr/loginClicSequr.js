"use strict";
//loginClicSequr.js
//logs in either clic sequr express or entreprises using puppeteer wrapper object methods
const {getCredentials} = require("../db");

module.exports = {
  loginClicSequr: async (mode, puppeteerWrapper) => {
    const target = getValidTargetFromParams(mode, puppeteerWrapper);

    //go to url
    await puppeteerWrapper.goTo(target.url, target.selector.username);

    //execute login steps
    const credentials = getCredentials();
    await puppeteerWrapper.typeText(credentials.username, target.selector.username);
    await puppeteerWrapper.typeText(credentials.password, target.selector.password);
    await puppeteerWrapper.clickBtn(target.selector.loginBtn);
  },
};

function getValidTargetFromParams(mode, puppeteerWrapper) {
  const {gouvQc} = require("./websiteConfigs");

  if (!mode || (mode !== "entreprises" && mode !== "express") || !gouvQc.clicSequr.hasOwnProperty(mode)) {
    throw new Error("provide login mode for clic sequr (one of 'entreprises' or 'express')");
  }
  if (!puppeteerWrapper) {
    throw new Error("provide puppeteerController object");
  }

  const target = gouvQc.clicSequr[mode];
  return target;
}
