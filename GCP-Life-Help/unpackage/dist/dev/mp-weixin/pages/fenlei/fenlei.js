"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      categories: [
        {
          name: "计算机科学",
          id: "cs",
          books: [
            { title: "算法导论", id: "cs1" },
            { title: "数据结构与算法分析", id: "cs2" },
            { title: "计算机网络", id: "cs3" }
          ]
        },
        {
          name: "经济学",
          id: "economics",
          books: [
            { title: "经济学原理", id: "eco1" },
            { title: "微观经济学", id: "eco2" },
            { title: "宏观经济学", id: "eco3" }
          ]
        },
        {
          name: "文学",
          id: "literature",
          books: [
            { title: "红楼梦", id: "lit1" },
            { title: "三国演义", id: "lit2" },
            { title: "西游记", id: "lit3" }
          ]
        }
      ],
      activeNames: []
    };
  },
  methods: {
    handleChange(e) {
      this.activeNames = e.detail;
      console.log("当前激活的项:", e.detail);
    }
  }
};
if (!Array) {
  const _component_uni_collapse_item = common_vendor.resolveComponent("uni-collapse-item");
  const _component_uni_collapse = common_vendor.resolveComponent("uni-collapse");
  (_component_uni_collapse_item + _component_uni_collapse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.categories, (category, index, i0) => {
      return {
        a: common_vendor.f(category.books, (book, k1, i1) => {
          return {
            a: common_vendor.t(book.title),
            b: book.id
          };
        }),
        b: index,
        c: "39d7eb98-1-" + i0 + ",39d7eb98-0",
        d: common_vendor.p({
          title: category.name,
          name: category.id
        })
      };
    }),
    b: common_vendor.o($options.handleChange),
    c: common_vendor.p({
      accordion: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39d7eb98"]]);
wx.createPage(MiniProgramPage);
