require.config({
  baseUrl: 'js',
  paths: {
    'zepto': 'libs/zeptojs/src/zepto',
    'zepto.event': 'libs/zeptojs/src/event',
  },
  shim: {
    'zepto': {
        exports: '$'
    },
    'zepto.event': ['zepto']
  }
});
require(['app'], function (app) {
  console.log('start');
});
