const AV = require('leanengine')

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', request => 'Hello world!')
