"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    contentHeight: wx.DEFAULT_CONTENT_HEIGHT,
    DEFAULT_CONTENT_HEIGHT: wx.DEFAULT_CONTENT_HEIGHT,
    current: 0,
    inkBarStyle: {
      "border-bottom": "2px solid #fff",
      width: "50%",
      top: "-4px"
    },
    tabStyle: {
      "background-color": "#3A84EF",
      color: "#fff"
    },
    navBarStyle: {
      "background-color": "#3A84EF",
      color: "#fff"
    },
    // 过滤工具栏
    popup_NAV_HEIGHT: 180,
    showPopup: [false, false, false, false],
    customStyle: {
      'background-color': '#eee',
      'height': '46px',
      'line-height': '46px'
    },
    navList: [{
      name: "推荐",
      active: "",
      arrow: "slide_down",
      bindtap: "openPopup1"
    }, {
      name: "销量",
      active: "",
      arrow: "slide_down",
      bindtap: "openPopup2"
    }, {
      name: "价格",
      active: "",
      arrow: "slide_down",
      bindtap: "openPopup3"
    }, {
      name: "筛选",
      active: "",
      arrow: "slide_down",
      bindtap: "openPopup3"
    }]
  },
  onLoad: function onLoad() {
    var that = this,
        query = wx.createSelectorQuery();
    query.select('.head').boundingClientRect(function (rect) {
      that.setData({
        'popup_NAV_HEIGHT': rect.height
      });
    }).exec();
  },
  onReady: function onReady() {},
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  handleChange: function handleChange(e) {
    console.log(e);
    var index = e.detail.index;
    this.setData({
      current: index
    });
  },
  handleContentChange: function handleContentChange(e) {
    console.log(e);
    var index = e.detail.current;
    this.setData({
      current: index
    });
  },

  // 过滤工具栏
  openPopup: function openPopup(e) {
    var index = e.currentTarget.dataset.idx,
        states = [false, false, false, false];
    states[index] = !this.data.showPopup[index];
    this.setData({
      'showPopup': states
    });
  }
});