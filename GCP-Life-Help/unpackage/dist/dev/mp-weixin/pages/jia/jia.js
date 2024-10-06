"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "jia",
  setup(__props) {
    const currentPage = common_vendor.ref("part-time");
    function switchPage(page) {
      currentPage.value = page;
    }
    const jobName = common_vendor.ref("");
    const jobTime = common_vendor.ref("");
    const jobPlace = common_vendor.ref("");
    const jobRequir = common_vendor.ref("");
    const jobSalary = common_vendor.ref("");
    const jobWay = common_vendor.ref("");
    const jobDescribe = common_vendor.ref("");
    const buttonLoadingJob = common_vendor.ref(false);
    const thingName = common_vendor.ref("");
    const thingPrice = common_vendor.ref("");
    const thingCampusIndex = common_vendor.ref(0);
    const thingCampuser = ["二手书籍", "二手数码", "生活用品"];
    const thingCampus = ["科教城西区", "科教城东区"];
    const thingPhoneNumber = common_vendor.ref("");
    const thingDescribe = common_vendor.ref("");
    const thingImage = common_vendor.ref("");
    const buttonLoadingThing = common_vendor.ref(false);
    const lostItemName = common_vendor.ref("");
    const lostLocation = common_vendor.ref("");
    const lostTime = common_vendor.ref("");
    const lostContact = common_vendor.ref("");
    const lostDescribe = common_vendor.ref("");
    const lostImage = common_vendor.ref("");
    const buttonLoadingLost = common_vendor.ref(false);
    function handleCampusChange(event) {
      thingCampusIndex.value = event.detail.value;
    }
    async function chooseImage(type) {
      const result = await common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"]
      });
      if (type === "thing") {
        thingImage.value = result.tempFilePaths[0];
      } else if (type === "lost") {
        lostImage.value = result.tempFilePaths[0];
      }
    }
    async function uploadImage(fileUrl, type) {
      const result = await common_vendor.index.uploadFile({
        url: "https://your-upload-api-url",
        filePath: fileUrl,
        name: "file",
        formData: {
          user: "test"
        },
        header: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (result.statusCode === 200) {
        console.log("图片上传成功");
      } else {
        console.error("图片上传失败");
      }
    }
    function submitJob() {
      buttonLoadingJob.value = true;
      setTimeout(() => {
        console.log("提交兼职");
        buttonLoadingJob.value = false;
      }, 1e3);
    }
    function submitThing() {
      buttonLoadingThing.value = true;
      if (thingImage.value) {
        uploadImage(thingImage.value);
      }
      setTimeout(() => {
        console.log("提交二手物品");
        buttonLoadingThing.value = false;
      }, 1e3);
    }
    function submitLost() {
      buttonLoadingLost.value = true;
      if (lostImage.value) {
        uploadImage(lostImage.value);
      }
      setTimeout(() => {
        console.log("提交失物招领");
        buttonLoadingLost.value = false;
      }, 1e3);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => switchPage("part-time")),
        b: currentPage.value === "part-time" ? 1 : "",
        c: common_vendor.o(($event) => switchPage("second-hand")),
        d: currentPage.value === "second-hand" ? 1 : "",
        e: common_vendor.o(($event) => switchPage("lost-found")),
        f: currentPage.value === "lost-found" ? 1 : "",
        g: currentPage.value === "part-time"
      }, currentPage.value === "part-time" ? {
        h: jobName.value,
        i: common_vendor.o(($event) => jobName.value = $event.detail.value),
        j: jobTime.value,
        k: common_vendor.o(($event) => jobTime.value = $event.detail.value),
        l: jobPlace.value,
        m: common_vendor.o(($event) => jobPlace.value = $event.detail.value),
        n: jobRequir.value,
        o: common_vendor.o(($event) => jobRequir.value = $event.detail.value),
        p: jobSalary.value,
        q: common_vendor.o(($event) => jobSalary.value = $event.detail.value),
        r: jobWay.value,
        s: common_vendor.o(($event) => jobWay.value = $event.detail.value),
        t: jobDescribe.value,
        v: common_vendor.o(($event) => jobDescribe.value = $event.detail.value),
        w: !(jobName.value && jobTime.value && jobPlace.value && jobRequir.value && jobSalary.value && jobWay.value && jobDescribe.value),
        x: buttonLoadingJob.value,
        y: common_vendor.o(submitJob)
      } : {}, {
        z: currentPage.value === "second-hand"
      }, currentPage.value === "second-hand" ? common_vendor.e({
        A: thingName.value,
        B: common_vendor.o(($event) => thingName.value = $event.detail.value),
        C: thingImage.value
      }, thingImage.value ? {
        D: thingImage.value
      } : {}, {
        E: common_vendor.o(($event) => chooseImage("thing")),
        F: common_vendor.t(thingCampuser[thingCampusIndex.value]),
        G: thingCampusIndex.value,
        H: thingCampuser,
        I: common_vendor.o(handleCampusChange),
        J: thingPrice.value,
        K: common_vendor.o(($event) => thingPrice.value = $event.detail.value),
        L: common_vendor.t(thingCampus[thingCampusIndex.value]),
        M: thingCampusIndex.value,
        N: thingCampus,
        O: common_vendor.o(handleCampusChange),
        P: thingPhoneNumber.value,
        Q: common_vendor.o(($event) => thingPhoneNumber.value = $event.detail.value),
        R: thingDescribe.value,
        S: common_vendor.o(($event) => thingDescribe.value = $event.detail.value),
        T: !(thingName.value && thingPhoneNumber.value && thingImage.value && thingDescribe.value && thingPrice.value),
        U: buttonLoadingThing.value,
        V: common_vendor.o(submitThing)
      }) : {}, {
        W: currentPage.value === "lost-found"
      }, currentPage.value === "lost-found" ? common_vendor.e({
        X: lostItemName.value,
        Y: common_vendor.o(($event) => lostItemName.value = $event.detail.value),
        Z: lostImage.value
      }, lostImage.value ? {
        aa: lostImage.value
      } : {}, {
        ab: common_vendor.o(($event) => chooseImage("lost")),
        ac: lostLocation.value,
        ad: common_vendor.o(($event) => lostLocation.value = $event.detail.value),
        ae: lostTime.value,
        af: common_vendor.o(($event) => lostTime.value = $event.detail.value),
        ag: lostContact.value,
        ah: common_vendor.o(($event) => lostContact.value = $event.detail.value),
        ai: lostDescribe.value,
        aj: common_vendor.o(($event) => lostDescribe.value = $event.detail.value),
        ak: !(lostItemName.value && lostLocation.value && lostTime.value && lostContact.value && lostDescribe.value),
        al: buttonLoadingLost.value,
        am: common_vendor.o(submitLost)
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-610f95c2"]]);
wx.createPage(MiniProgramPage);
