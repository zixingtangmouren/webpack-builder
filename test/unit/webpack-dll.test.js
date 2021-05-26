/**
 * @Author: tangzhicheng
 * @Date: 2021-05-26 09:43:31
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-26 09:44:09
 * @Description: file content
 */

/**
 * @Author: tangzhicheng
 * @Date: 2021-05-25 19:05:51
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-26 09:43:08
 * @Description: file content
 */
const { describe, it } = require('mocha')
const webpack = require('webpack')

describe('test webpack production config', () => {
  it('runing dll', () => {
    const dllConfig = require('../../lib/webpack.dll')

    webpack(dllConfig, (err, stats) => {
      if (err) {
        console.error(err)
        process.exit(2)
      }

      stats.toString({
        colors: true,
        modules: false,
        children: false,
      })
    })
  })
})
