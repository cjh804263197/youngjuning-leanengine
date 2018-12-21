const WechatAPI = require('co-wechat-api')

const appid = process.env.WX_APP_ID
const appsecret = process.env.WX_APP_SC

const api = new WechatAPI(appid, appsecret)

const defaultMenus = {
  button: [
    {
      type: 'view',
      name: '员工绑定',
      url: 'http://3npas4.natappfree.cc/wechat/stuffBind',
    },
  ],
}

// 菜单操作: http://t.cn/Eyl3Ojs
module.exports = {
  /**
   * [createMenu 自定义菜单创建接口]
   *
   * wechat: http://t.cn/RWeIP2N
   *
   * co-wechat-api: http://t.cn/Eyl9fxX
   *
   * @param menu Object
   *
   * @return {Promise} [Result:{"errcode":0,"errmsg":"ok"}]
   */
  async createMenu(menus = defaultMenus) {
    const result = await api.createMenu(menus)
    return result
  },
  /**
   * [getMenu 获取菜单]
   *
   * wechat: http://t.cn/RmzIbEf
   *
   * co-wechat-api: http://t.cn/EylQB7t
   *
   * @return {Promise}
   */
  async getMenu() {
    const result = await api.getMenu()
    return result
  },

  /**
   * [removeMenu 删除自定义菜单]
   *
   * wecaht: http://t.cn/EyWSsPb
   *
   * co-wechat-api: http://t.cn/EylRzGH
   *
   * @return {Promise} [Result:{"errcode":0,"errmsg":"ok"}]
   */
  async removeMenu() {
    const result = await api.removeMenu()
    return result
  },

  /**
   * [removeMenu 获取自定义菜单配置]
   *
   * wecaht: http://t.cn/R3bSEqG
   *
   * co-wechat-api: http://t.cn/EylEYdq
   *
   * @return {Promise} [Result:{"errcode":0,"errmsg":"ok"}]
   */
  async getMenuConfig() {
    const result = await api.getMenuConfig()
    return result
  },
  /**
   * [addConditionalMenu 创建个性化自定义菜单]
   *
   * wechat: http://t.cn/RQV3ktt
   *
   * co-wechat-api: http://t.cn/EylmxTQ
   *
   * @return {Promise} [Result:{"errcode":0,"errmsg":"ok"}]
   */
  async addConditionalMenu(conditionalMenu) {
    const result = await api.addConditionalMenu(conditionalMenu)
    return result
  },

  /**
   * [delConditionalMenu 先用getMenu获取menuid，再调用此方法删除]
   *
   * wecaht: http://t.cn/RQV3ktt
   *
   * co-wechat-api: http://t.cn/Eyl3Zao
   *
   * @param  {[string]}  menuid [通过getMenu获取]
   *
   * @return {Promise}        [description]
   */
  async delConditionalMenu(menuid) {
    const result = await api.delConditionalMenu(menuid)
    return result
  },

  /**
   * [tryConditionalMenu 测试个性化自定义菜单]
   *
   * wechat: http://t.cn/RQV3ktt
   *
   * co-wechat-api: http://t.cn/EylB718
   *
   * @param  {[string]}  userid [可以是粉丝的OpenID，也可以是粉丝的微信号]
   *
   * @return {Promise}
   */
  async tryConditionalMenu(userid) {
    const result = await api.delConditionalMenu(userid)
    return result
  },
}
