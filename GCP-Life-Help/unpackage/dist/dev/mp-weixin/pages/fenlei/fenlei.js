"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 窗口的可用高度 = 屏幕高度 - navigationBar高度 - tabBar 高度
      wh: 0
    };
  },
  onLoad() {
    const sysInfo = common_vendor.index.getSystemInfoSync();
    this.wh = sysInfo.windowHeight;
  }
};
if (!Array) {
  const _component_template = common_vendor.resolveComponent("template");
  _component_template();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.wh + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
