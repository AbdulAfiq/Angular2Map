// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    //map tells the System loader where to look for things
  map: {
    'app': './src',
    
    '@angular/core': 'npm:@angular/core@2.4.1/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common@2.4.1/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@2.4.1/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.4.1/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.4.1/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http@2.4.1/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router@2.4.1/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms@2.4.1/bundles/forms.umd.js',
    
    '@angular/core/testing': 'npm:@angular/core@2.4.1/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles@2.4.1/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler@2.4.1/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser@2.4.1/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic@2.4.1/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http@2.4.1/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router@2.4.1/bundles/router-testing.umd.js',
    
    
    'rxjs': 'npm:rxjs',
    
    'angular2-google-maps/core': 'npm:angular2-google-maps/core/core.umd.js'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage-istanbul']
              : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
