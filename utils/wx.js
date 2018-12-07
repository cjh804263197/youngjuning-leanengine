const config = {
  appid: process.env.WX_APP_ID,
  token: process.env.WX_TOKEN,
  encodingAESKey: process.env.EncodingAESKey,
}

const menuConfig = {
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
          name: '搜索',
          url: 'http://www.baidu.com/',
        },
        {
          type: 'click',
          name: '赞一下我们',
          key: 'V1001_GOOD',
        },
      ],
    },
  ],
}


const wechat = asyncFn => require('co-wechat')(config).middleware(asyncFn)

module.exports = {
  wechat,
  menuConfig,
}
