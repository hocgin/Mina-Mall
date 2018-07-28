'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tagStyle = '\n  border: 1px solid #f1f2f3;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 25px;\n  font-size:12px;\n  padding: 0px 5px;\n  font-weight: 700;\n';

exports.default = Page({
  data: {
    STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT + 'px',
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    urls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
    height: '800px',
    showAttrsPopup: false,
    showSpecificationPopup: true,
    tags: [{ name: '颜色', list: [{ text: '908 EVO', tagStyle: tagStyle }, { text: '908 PRO', tagStyle: tagStyle }] }, { name: '型号', list: [{ text: '908-sdk', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }] }, { name: '容量', list: [{ text: '908-sdk', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }] }]
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  refreshSwiper: function refreshSwiper(e) {
    var w = wx.getSystemInfoSync().windowWidth,
        height = e.detail.height,
        width = e.detail.width;
    var h = w * height / width;
    this.setData({
      height: h + 'px'
    });
  },
  toggleAttrsPopup: function toggleAttrsPopup() {
    var that = this;
    this.setData({
      showAttrsPopup: !that.data.showAttrsPopup
    });
  },
  toggleSpecificationPopup: function toggleSpecificationPopup() {
    var that = this;
    this.setData({
      showSpecificationPopup: !that.data.showSpecificationPopup
    });
  }
});