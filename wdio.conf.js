import LoginPage from "./test/pageobjects/login.page";
import ProfilePage from './test/pageobjects/portal/profile.portal.page';

exports.config = {

  runner: "local",

  specs: [
      "./test/specs/**/*.js",
      "./test/specs/navigation.spec.js"
  ],

  exclude: [
    //  "./test/specs/login.spec.js",

  ],

  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,

      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",

  bail: 0,

  baseUrl: "https://stage.localcoding.us",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ["devtools"],


  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    require: ["@babel/register"],
    ui: "bdd",
    timeout: 60000,
  },


  before: function (capabilities, specs) {
    browser.addCommand("login", function (username, password) {
      LoginPage.open();
      LoginPage.setLogin(username);
      LoginPage.setPassword(password);
      LoginPage.clickSubmitButton();
      ProfilePage.isOpen();
    });
  },

};
