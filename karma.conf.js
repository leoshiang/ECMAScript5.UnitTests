module.exports = function(config) {
  config.set({
    frameworks: ['qunit'],
    plugins: ['karma-qunit', 'karma-coverage', 'karma-phantomjs-launcher'],
    files: [
      'source/Utils.js',
      'source/Collection.js',
      'source/Strings.js',
      'tests/Collection.test.js'
    ],
    exclude: [],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'source/*.js': ['coverage']
    },
    // optionally, configure the reporter
    coverageReporter: {
      type: 'lcov',
      dir: 'reports/coverage-lcov/'
    },
    basePath: '.',
    port: 9999,
    colors: true,
    logLevel: config.LOG_DISABLE,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
