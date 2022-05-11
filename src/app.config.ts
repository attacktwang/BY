export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/info/index",
    "pages/phone/index",
    "pages/mine/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#CCCCCC",
    selectedColor: "#026DFF",
    backgroundColor: "#FFFFFF",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/s_c.png",
        selectedIconPath: "assets/s_b.png",
      },
      {
        pagePath: "pages/info/index",
        text: "数据",
        iconPath: "assets/j_c.png",
        selectedIconPath: "assets/j_b.png",
      },
      {
        pagePath: "pages/phone/index",
        text: "通讯录",
        iconPath: "assets/d_c.png",
        selectedIconPath: "assets/d_b.png",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "assets/p_c.png",
        selectedIconPath: "assets/p_b.png",
      },
    ],
  },
});
