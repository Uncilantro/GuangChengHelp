"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "school",
  setup(__props) {
    const currentIndex = common_vendor.ref(0);
    const navList = [
      {
        name: "校园趣事"
      },
      {
        name: "失物招领"
      },
      {
        name: "卖二手书"
      },
      {
        name: "跑腿兼职"
      },
      {
        name: "快递代拿"
      },
      {
        name: "闲置出售"
      }
    ];
    const selectTab = (index) => {
      currentIndex.value = index;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(navList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index,
            c: currentIndex.value === index ? 1 : "",
            d: common_vendor.o(($event) => selectTab(index), index)
          };
        }),
        b: currentIndex.value === 0
      }, currentIndex.value === 0 ? {} : {}, {
        c: currentIndex.value === 1
      }, currentIndex.value === 1 ? {} : {}, {
        d: currentIndex.value === 2
      }, currentIndex.value === 2 ? {} : {}, {
        e: currentIndex.value === 3
      }, currentIndex.value === 3 ? {} : {}, {
        f: currentIndex.value === 4
      }, currentIndex.value === 4 ? {} : {}, {
        g: currentIndex.value === 5
      }, currentIndex.value === 5 ? {} : {});
    };
  }
};
wx.createPage(_sfc_main);
