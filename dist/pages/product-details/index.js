'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tagStyle = '\n  border: 1px solid #f1f2f3;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 25px;\n  font-size:12px;\n  padding: 0px 5px;\n  font-weight: 700;\n';

exports.default = Page({
  data: {
    STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT + 'px',
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    height: '800px',
    showAttrsPopup: false,
    showSpecificationPopup: true,
    images: [],
    product: {
      urls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      tags: [{ name: '颜色', list: [{ text: '908 EVO', tagStyle: tagStyle }, { text: '908 PRO', tagStyle: tagStyle }] }, { name: '型号', list: [{ text: '908-sdk', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }] }, { name: '容量', list: [{ text: '908-sdk', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }, { text: '908JJX', tagStyle: tagStyle }] }],
      descriptionImages: ['http://qiniu.remmoe.com/1.jpg', 'http://qiniu.remmoe.com/2.jpg', 'http://qiniu.remmoe.com/3.jpg'],
      services: ['店铺发货', '假一赔十', '无理由退款']
    }
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  imageLoad: function imageLoad(e) {
    var $width = e.detail.width,
        //获取图片真实宽度
    $height = e.detail.height,
        ratio = $width / $height; //图片的真实宽高比例
    var viewWidth = 718,
        //设置图片显示宽度，左右留有16rpx边距
    viewHeight = 718 / ratio; //计算的高度值
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    };
    this.setData({
      images: image
    });
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