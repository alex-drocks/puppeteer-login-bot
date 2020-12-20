//puppeteerWrapper.js
//Simplifies logic in macros that use puppeteer.
const puppeteer = require("puppeteer");

module.exports = {
  puppeteerWrapper: {
    browser: null,
    page: null,

    initializeBrowser: async () => {
      try {
        this.browser = await puppeteer.launch({
          headless: false,
          args: ["--start-maximized"],
          defaultViewport: null,
          userDataDir: "./.browser-cache",
        });
        this.page = (await this.browser.pages())[0];
      } catch (e) {
        console.log(e);
      }
    },

    /**
     * Navigates the puppeteer browser to the specified URL
     * and waits for the presence of the provided selector
     * @param {string} url
     * @param {querySelector} waitForSelector
     */
    goTo: async (url, waitForSelector) => {
      if (!url || !waitForSelector) {
        throw new Error("provide url and waitForSelector");
      }
      await this.page.goto(url);
      await this.page.waitForSelector(waitForSelector);
    },

    /**
     * Type a string of text in the active page on the querySelected element.
     * @param {string} text
     * @param {*} querySelector
     */
    typeText: async (text, querySelector) => {
      if (!text || !querySelector) {
        throw new Error("provide text and querySelector");
      }
      const elm = await this.page.$(querySelector);
      await elm.focus();
      await elm.type(text);
    },

    /**
     * Clicks a button element on the active page
     * @param {*} querySelector
     */
    clickBtn: async querySelector => {
      if (!querySelector) {
        throw new Error("provide querySelector");
      }
      const elm = await this.page.$(querySelector);
      await elm.click();
    },
  },
};
