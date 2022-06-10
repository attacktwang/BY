export default defineAppConfig({
  pages: ['pages/index/index', 'pages/info/index', 'pages/phone/index', 'pages/mine/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#CCCCCC',
    selectedColor: '#026DFF',
    backgroundColor: '#FFFFFF',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/img/s_c.png',
        selectedIconPath: 'assets/img/s_b.png'
      },
      {
        pagePath: 'pages/info/index',
        text: '数据',
        iconPath: 'assets/img/j_c.png',
        selectedIconPath: 'assets/img/j_b.png'
      },
      {
        pagePath: 'pages/phone/index',
        text: '通讯录',
        iconPath: 'assets/img/d_c.png',
        selectedIconPath: 'assets/img/d_b.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/img/p_c.png',
        selectedIconPath: 'assets/img/p_b.png'
      }
    ]
  }
})
