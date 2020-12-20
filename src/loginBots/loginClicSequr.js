//loginClicSequr.js
//logs in either clic sequr express or entreprises using puppeteer wrapper object methods
module.exports = {
  loginClicSequr: async (mode, puppeteerWrapper) => {
    target = getValidTargetFromParams(mode, puppeteerWrapper);

    //go to url
    await puppeteerWrapper.goTo(target.url, target.selector.username);

    //execute login steps
    await puppeteerWrapper.typeText("myUsername", target.selector.username);
    await puppeteerWrapper.typeText("myPassword", target.selector.password);
    await puppeteerWrapper.clickBtn(target.selector.loginBtn);
  },
};

function getValidTargetFromParams(mode, puppeteerWrapper) {
  const { gouvQc } = require("./targetsConfig");

  if (!mode || (mode !== "entreprises" && mode !== "express") || !gouvQc.clicSequr.hasOwnProperty(mode)) {
    throw new Error("provide login mode for clic sequr (one of 'entreprises' or 'express')");
  }
  if (!puppeteerWrapper) {
    throw new Error("provide puppeteerWrapper object");
  }

  const target = gouvQc.clicSequr[mode];
  return target;
}
