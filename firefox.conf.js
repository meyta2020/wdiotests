import LoginPage from "./test/pageobjects/login.page";
import ProfilePage from "./test/pageobjects/portal/profile.portal.page";

exports.config = {
    runner: "local",

    specs: [
        "./test/specs/**/*.js"
    ],
    exclude: [
        "./test/specs/navigation.spec.js"
    ],

    maxInstances: 1,
    capabilities: [

        {
            maxInstances: 1,
            browserName: 'firefox'
        }
    ],

    logLevel: "info",
    bail: 0,
    baseUrl: "https://stage.localcoding.us",

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    services: ["geckodriver"],

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
