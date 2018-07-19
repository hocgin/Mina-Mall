'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    current: 0,
    height: wx.DEFAULT_CONTENT_HEIGHT,
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px'
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  /**
   * Tab改变监听
   */
  handleChange: function handleChange(e) {
    var index = e.detail.index;
    this.setData({
      current: index
    });
  },

  /**
   * Tab Content 滑动监听
   */
  handleContentChange: function handleContentChange(e) {
    var current = e.detail.current;
    this.setData({
      current: current
    });
  }
});