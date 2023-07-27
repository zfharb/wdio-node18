exports.config = {
  services: [["chromedriver"]],
  runner: "local",
  //   path: "/",
  featureFlags: {
    specFiltering: false,
  },
  specs: ["./test/specs/testCase.js"],
  specFileRetries: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      // Comment out 'goog:chromeOptions' to launch browser during tests
      "goog:chromeOptions": {
        args: [
          // '--disable-gpu',
          // '--headless',
          "--no-sandbox",
          "--single-process",
          "--window-size=1920,1080",
        ],
      },
    },
  ],
  logLevel: "error",
  bail: 1,
  baseUrl: "https://beta.encompass.elliemae.io/pipeline",
  waitforTimeout: 90000,
  framework: "jasmine",
  jasmineOpts: {
    helpers: [require.resolve("@babel/register")],
    defaultTimeoutInterval: 90000,
  },
  reporters: ["spec"],
  beforeSession: async function () {},
  before: function () {
    require("@babel/register");
  },
};
