'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    DEFAULT_CONTENT_HEIGHT: wx.DEFAULT_CONTENT_HEIGHT,
    contentHeight: wx.DEFAULT_CONTENT_HEIGHT,
    width: wx.WIN_WIDTH,
    current: 0,
    inkBarStyle: {
      'border-bottom': '2px solid #fff',
      'width': '50%',
      'top': '-4px'
    },
    tabStyle: {
      'background-color': '#3A84EF',
      'color': '#fff'
    },
    navBarStyle: {
      'background-color': '#3A84EF',
      'color': '#fff'
    }

  },
  handleChange: function handleChange(e) {
    console.log(e);
    var index = e.detail.index;
    this.setData({
      current: index
    });
  },
  handleContentChange: function handleContentChange(e) {
    var index = e.detail.current;
    this.setData({
      current: index
    });
  }
});