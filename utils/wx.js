const config = {
  appid: process.env.WX_APP_ID,
  token: process.env.WX_TOKEN,
  encodingAESKey: process.env.EncodingAESKey,
}

// middleware() 方法接受一个 async function 作为参数
const wechat = asyncFn => require('co-wechat')(config).middleware(asyncFn)

module.exports = {
  wechat,
}
