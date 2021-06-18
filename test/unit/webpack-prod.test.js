/**
 * @Author: tangzhicheng
 * @Date: 2021-05-25 19:05:51
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-18 16:57:04
 * @Description: file content
 */
const { describe, it } = require('mocha')
const webpack = require('webpack')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

describe('test webpack production config', () => {
  it('runing production', () => {
    const smp = new SpeedMeasurePlugin()

    const prodConfig = require('../../lib/webpack.prod')

    webpack(smp.wrap(prodConfig), (err, stats) => {
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
