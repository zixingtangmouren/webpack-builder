/**
 * @Author: tangzhicheng
 * @Date: 2021-05-24 22:46:53
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-24 22:57:42
 * @Description: file content
 */

const { describe, it } = require('mocha')
const assert = require('assert')

describe('webpack.base test case', () => {
  const baseConfig = require('../../lib/webpack.base')

  it('entry', () => {
    // if (baseConfig.entry)
    assert.deepStrictEqual(baseConfig.entry, { index: './src/index/index.js' })
  })
})
