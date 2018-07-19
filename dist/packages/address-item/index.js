"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  data: {
    msg: "This is a test msg!"
  },
  methods: {
    handleTap: function handleTap() {
      console.log(this.data.msg);
    }
  }
});