'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  data: {},
  properties: {
    text: String,
    theme: {
      type: String,
      value: 'default'
    },
    src: {
      type: String,
      value: 'http://qiniu.remmoe.com/pending_pay.png'
    }
  },
  methods: {}
});