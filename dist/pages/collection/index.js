'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    current: 1,
    height: wx.DEFAULT_CONTENT_HEIGHT,
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    goods_item_height: 10 + 'px',
    shop_item_height: 10 + 'px',
    tabStyle: {},
    activeItemStyle: {}
  },
  onLoad: function onLoad(options) {
    this.setData({
      current: options.current
    });
    this.refreshWidgetHeight();
  },
  refreshWidgetHeight: function refreshWidgetHeight() {
    // 刷新组件高度
    var query = wx.createSelectorQuery(),
        that = this,
        current = this.data.current;

    if (current == 0) {
      query.select('.goods-item').boundingClientRect(function (rect) {
        console.log('goods', rect);
        that.setData({
          goods_item_height: rect.height + 'px'
        });
      }).exec();
    } else if (current == 1) {
      query.select('.shop-item').boundingClientRect(function (rect) {
        console.log('shop', rect.height);
        that.setData({
          shop_item_height: rect.height + 'px'
        });
      }).exec();
    }
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  deleteGoodsChange: function deleteGoodsChange() {},
  deleteShopChange: function deleteShopChange() {},

  /**
   * Tab改变监听
   */
  changTab: function changTab(e) {
    var index = e.detail.index;
    this.setData({
      current: index
    });
    this.refreshWidgetHeight();
  }
});