const WechatAPI = require('co-wechat-api')

const appid = process.env.WX_APP_ID
const appsecret = process.env.WX_APP_SC

const wechatAPI = new WechatAPI(appid, appsecret)

const defaultMenus = {
  button: [
    {
      type: 'click',
      name: '今日歌曲',
      key: 'TODAY_MUSIC',
    },
    {
      name: '菜单',
      sub_button: [
        {
          type: 'view',
          name: '百度',
          url: 'http://www.baidu.com/',
        },
        {
          type: 'view',
          name: '新浪',
          key: 'http://www.sina.com/',
        },
      ],
    },
  ],
}

const menu = {
  /**
   * [createMenu 自定义菜单创建接口]
   *
   * wechat: http://t.cn/RWeIP2N
   *
   * co-wechat-api: http://t.cn/Eyl9fxX
   *
   * @return {Promise} [Result:{"errcode":0,"errmsg":"ok"}]
   */
  async createMenu(menus = defaultMenus) {
    const result = await wechatAPI.createMenu(menus)
    return result
  },
}

module.exports = {
  menu,
}
