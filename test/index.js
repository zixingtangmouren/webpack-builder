/**
 * @Author: tangzhicheng
 * @Date: 2021-05-24 22:45:33
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-24 22:48:59
 * @Description: file content
 */

const path = require('path')
const { describe } = require('mocha')

process.chdir(path.join(__dirname, 'smoke/template'))

describe('checking weboack-base-config', () => {
  require('./unit/webpack-base.test')
})
