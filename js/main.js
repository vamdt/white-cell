require.config({
  baseUrl: 'js',
  paths: {
    'zepto': 'libs/zepto/zepto',
  },
  shim: {
    'zepto': {
        exports: '$'
    }
  }
});
require(['app'], function (app) {
  console.log('start');
});
