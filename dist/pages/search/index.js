'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tagStyle = '\n  background: #F6F6F6;\n  color: #393939;\n  padding: 0 10px;\n  border-radius: 20px;\n  text-align: center;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 20px;\n';
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    hotSearch: [{
      text: '口红',
      tagStyle: tagStyle
    }, {
      text: '香水',
      tagStyle: tagStyle
    }, {
      text: '毛衣',
      tagStyle: tagStyle
    }, {
      text: '围巾',
      tagStyle: tagStyle
    }]
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  }
});