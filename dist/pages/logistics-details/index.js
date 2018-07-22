'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    list: [{
      date: '2017-10-16',
      info: '【厦门】正在配送中'
    }, {
      date: '2017-10-15',
      info: '【厦门】厦门T4机场'
    }, {
      date: '2017-10-16',
      info: '《羞羞的铁拳》也在上映第15天时，票房突破16.15亿（不含电商服务费），打破了2015年《港囧》的票房纪录，成为新的国产2D票房冠军。'
    }, {
      date: '2017-10-16',
      info: '《羞羞的铁拳》也在上映第15天时，票房突破16.15亿（不含电商服务费），打破了2015年《港囧》的票房纪录，成为新的国产2D票房冠军。'
    }]
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  }
});