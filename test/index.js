/**
 * @Author: tangzhicheng
 * @Date: 2021-05-24 22:45:33
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-18 17:08:25
 * @Description: file content
 */

const path = require('path')
const { describe } = require('mocha')

process.chdir(path.join(__dirname, 'smoke/template'))

describe('checking weboack-config', () => {
  // require('./unit/webpack-base.test')
  // require('./unit/webpack-prod.test')
  require('./unit/webpack-dev.test')
})
