module.exports = (config) => {
    config.set({
      frameworks: ["jasmine", "karma-typescript"],
      files: [
          {pattern: "./test/*.ts" }
      ],
      colors: true,
      preprocessors: {
          "**/*.ts": ["karma-typescript"]
      },
      reporters: ["progress", "karma-typescript"],
      browsers: ["Chrome"],
      singleRun: true,
      karmaTypescriptonfig: {
          tsconfig: "./test/tsconfig.json",
          reports: {
              "html": "coverge",
              "text": ""
          }
      }
    })
}
