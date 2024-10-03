"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "jia",
  setup(__props) {
    const currentPage = common_vendor.ref("part-time");
    function switchPage(page) {
      currentPage.value = page;
    }
    common_vendor.ref(true);
    common_vendor.ref(false);
    const thingName = common_vendor.ref("");
    const thingPrice = common_vendor.ref("");
    const thingCampusIndex = common_vendor.ref(0);
    const thingCampus = common_vendor.ref(["科教城西区", "科教城东区"]);
    const thingPhoneNumber = common_vendor.ref("");
    const thingDescribe = common_vendor.ref("");
    const thingImage = common_vendor.ref("");
    const buttonLoadingThing = common_vendor.ref(false);
    const jobName = common_vendor.ref("");
    const jobTime = common_vendor.ref("");
    const jobPlace = common_vendor.ref("");
    const jobRequir = common_vendor.ref("");
    const jobSalary = common_vendor.ref("");
    const jobWay = common_vendor.ref("");
    const jobDescribe = common_vendor.ref("");
    const buttonLoadingJob = common_vendor.ref(false);
    function handleCampusChange(event) {
      thingCampusIndex.value = event.detail.value;
    }
    function submitThing() {
      console.log("提交物品");
    }
    function submitJob() {
      console.log("提交兼职");
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => switchPage("part-time")),
        b: currentPage.value === "part-time" ? 1 : "",
        c: common_vendor.o(($event) => switchPage("second-hand")),
        d: currentPage.value === "second-hand" ? 1 : "",
        e: currentPage.value === "part-time"
      }, currentPage.value === "part-time" ? {
        f: jobName.value,
        g: common_vendor.o(($event) => jobName.value = $event.detail.value),
        h: jobTime.value,
        i: common_vendor.o(($event) => jobTime.value = $event.detail.value),
        j: jobPlace.value,
        k: common_vendor.o(($event) => jobPlace.value = $event.detail.value),
        l: jobRequir.value,
        m: common_vendor.o(($event) => jobRequir.value = $event.detail.value),
        n: jobSalary.value,
        o: common_vendor.o(($event) => jobSalary.value = $event.detail.value),
        p: jobWay.value,
        q: common_vendor.o(($event) => jobWay.value = $event.detail.value),
        r: jobDescribe.value,
        s: common_vendor.o(($event) => jobDescribe.value = $event.detail.value),
        t: !(jobName.value && jobTime.value && jobPlace.value && jobRequir.value && jobSalary.value && jobWay.value && jobDescribe.value),
        v: buttonLoadingJob.value,
        w: common_vendor.o(submitJob)
      } : {}, {
        x: currentPage.value === "second-hand"
      }, currentPage.value === "second-hand" ? {
        y: thingName.value,
        z: common_vendor.o(($event) => thingName.value = $event.detail.value),
        A: thingPrice.value,
        B: common_vendor.o(($event) => thingPrice.value = $event.detail.value),
        C: common_vendor.t(thingCampus.value[thingCampusIndex.value]),
        D: thingCampusIndex.value,
        E: thingCampus.value,
        F: common_vendor.o(handleCampusChange),
        G: thingPhoneNumber.value,
        H: common_vendor.o(($event) => thingPhoneNumber.value = $event.detail.value),
        I: thingDescribe.value,
        J: common_vendor.o(($event) => thingDescribe.value = $event.detail.value),
        K: !(thingName.value && thingPhoneNumber.value && thingImage.value && thingDescribe.value && thingPrice.value),
        L: buttonLoadingThing.value,
        M: common_vendor.o(submitThing)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-610f95c2"]]);
wx.createPage(MiniProgramPage);
