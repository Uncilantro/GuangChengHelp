"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
<<<<<<< Updated upstream
  "./pages/job/job.js";
  "./pages/shop/shop.js";
=======
<<<<<<< HEAD
  "./pages/school/school.js";
  "./pages/jia/jia.js";
  "./pages/fenlei/fenlei.js";
=======
  "./pages/job/job.js";
  "./pages/shop/shop.js";
>>>>>>> 31bd41b3a091c76fa289d062195b5d30c71ab0e6
>>>>>>> Stashed changes
  "./pages/mine/mine.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
