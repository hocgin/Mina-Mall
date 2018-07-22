'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    current: 0,
    height: wx.DEFAULT_CONTENT_HEIGHT,
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    chat_style: {
      bottom: 0 + 'px',
      top: 0 + 'px'
    },
    showMore: false,
    badgeStyle: {
      'background-color': '#3A84EF'
    }
  },
  onLoad: function onLoad(options) {
    this.refreshChatWidget();
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  refreshChatWidget: function refreshChatWidget() {
    var that = this,
        query = wx.createSelectorQuery();

    query.select('.footer').boundingClientRect(function (rect) {
      that.setData({
        'chat_style.bottom': rect.height + 'px'
      });
    }).exec();

    query.select('.appbar').boundingClientRect(function (rect) {
      that.setData({
        'chat_style.top': rect.height + 'px'
      });
    }).exec();
  },
  showMore: function showMore() {
    var that = this;
    that.setData({
      showMore: !that.data.showMore
    });
  }
});