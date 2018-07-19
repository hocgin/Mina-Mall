"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    isShow: false,
    shoppingCarts: [{
      store: {
        id: "1",
        name: "康爱多大药房旗舰店"
      },
      productes: [{
        id: "1",
        name: "挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也",
        tags: ["XXL", "黑色"],
        price: 575.34,
        number: 12
      }, {
        id: "1",
        name: "挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也",
        tags: ["XXL", "黑色"],
        price: 575.34,
        number: 12
      }]
    }, {
      store: {
        id: "1",
        name: "康爱多大药房旗舰店"
      },
      productes: [{
        id: "1",
        name: "挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也",
        tags: ["XXL", "黑色"],
        price: 575.34,
        number: 12
      }, {
        id: "1",
        name: "挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也挺好用,就是 vscode 中 tab 变成ab了,不知道你是不是也",
        tags: ["XXL", "黑色"],
        price: 575.34,
        number: 12
      }]
    }]
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  starShow: function starShow() {
    this.setData({
      isShow: true
    });
  }
});