const api = require('./api')

module.exports = {
  /**
   * [sendTemplate 发送模版消息]
   *
   * wechat: http://t.cn/RT9fI1F
   *
   * co-wechat-api: http://t.cn/E4Icw0Q
   *
   * @param  {[String]}  openid      [接收者openid]
   * @param  {[String]}  templateId  [模板ID]
   * @param  {[String]}  url         [模板跳转链接]
   * @param  {[String]}  topColor    [顶部颜色]
   * @param  {[Object]}  data        [渲染模板的数据]
   * @param  {[Object]}  miniprogram [跳转小程序所需数据 {appid, pagepath}]
   */
  async sendTemplate({ openid, templateId, url, topColor, data, miniprogram }) {
    console.log(openid, templateId, url, topColor, data, miniprogram)
    const result = await api.sendTemplate(openid, templateId, url, topColor, data, miniprogram)
    return result
  },

  /**
   * 发送模板消息支持小程序
   * 文档： https://developers.weixin.qq.com/miniprogram/dev/api/notice.html
   *
   * @param {String} openid 用户的openid
   * @param {String} templateId 模板ID
   * @param {String} url URL置空，则在发送后，点击模板消息会进入一个空白页面（ios），或无法点击（android）
   * @param {String} appid 小程序 appid
   * @param {String} pagepath 小程序路径
   * @param {Object} data 渲染模板的数据
   * @param {String} color 字体颜色
   */
  async sendMiniProgramTemplate({ openid, templateId, url, appid, pagepath, data, color }) {
    const result = await api.sendMiniProgramTemplate(openid, templateId, url, appid, pagepath, data, color)
    return result
  },
}
