require.config({
  baseUrl: 'js',
  paths: {
    'zepto': 'libs/zeptojs/src/zepto',
    'zepto.event': 'libs/zeptojs/src/event',
    'zepto.touch': 'libs/zeptojs/src/touch'
  },
  shim: {
    'zepto': {
        exports: '$'
    },
    'zepto.event': ['zepto'],
    'zepto.touch': ['zepto']
  }
});
require(['app'], function (app) {
  console.log('start');
});
