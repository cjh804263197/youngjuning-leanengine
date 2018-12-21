const api = require('./api')

module.exports = {
  /**
   * 设置所属行业
   *
   * wechat: http://t.cn/RT9fI1F
   *
   * co-wechat-api: http://t.cn/E4xve4K
   *
   * Example:
   * ```
   * const industryIds = {
   *   "industry_id1": "1"
   *   "industry_id2": "4"
   * }
   * ```
   *
   * @param  {Object}  industryIds 公众号模版消息所属行业编号
   */
  async setIndustry(industryIds) {
    const result = await api.setIndustry(industryIds)
    return result
  },


  // http://t.cn/E4x2X95
  /**
   * 获得模版ID
   *
   * @wechat http://t.cn/RT9fI1F
   *
   * @co http://t.cn/E4xUtov
   *
   * @param  {String}  templateIdShort 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式
   *
   */
  async addTemplate(templateIdShort) {
    const result = await api.addTemplate(templateIdShort)
    return result
  },

  /**
   * 发送模版消息
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
    const result = await api.sendTemplate(openid, templateId, url, topColor, data, miniprogram)
    return result
  },

  /**
   * 发送模板消息支持小程序
   *
   * miniprogram: http://t.cn/EZeydcl
   *
   * co-wechat-api: http://t.cn/E4MdMHb
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
