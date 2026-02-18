const { defineConfig } = require("cypress");
const fs = require("fs");   
const path = require("path"); 

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalOriginDependencies: true,

    setupNodeEvents(on, config) {
      on('task', {
        createDir(dirPath) {
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }
          return null;
        }
      });
    }
  },
});
