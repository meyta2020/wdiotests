const hooks = require('./config/hooks.konf');
const base = require('./config/base.conf');

exports.config = {
    runner: "local",

    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox'
        }
    ],

    services: ["geckodriver"],

    ...base,
    ...hooks

};
