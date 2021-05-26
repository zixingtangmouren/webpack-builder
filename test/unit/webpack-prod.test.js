/**
 * @Author: tangzhicheng
 * @Date: 2021-05-25 19:05:51
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-26 16:00:55
 * @Description: file content
 */
const { describe, it } = require('mocha')
const webpack = require('webpack')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

describe('test webpack production config', () => {
  it('runing production', () => {
    const smp = new SpeedMeasurePlugin()

    const prodConfig = require('../../lib/webpack.prod')

    if (!prodConfig.module.rules[0].use.includes('thread-loader')) {
      throw new Error('未开启多线程编译')
    }

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
