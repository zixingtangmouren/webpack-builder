/**
 * @Author: tangzhicheng
 * @Date: 2021-05-25 19:05:51
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-28 11:49:06
 * @Description: file content
 */
const { describe, it } = require('mocha')
// const webpack = require('webpack')

describe('test webpack development config', () => {
  it('runing development', () => {
    const devConfig = require('../../lib/webpack.dev')
    console.log(devConfig.output)
    // webpack(devConfig, (err, stats) => {
    //   if (err) {
    //     console.error(err)
    //     process.exit(2)
    //   }

    //   stats.toString({
    //     colors: true,
    //     modules: false,
    //     children: false,
    //   })
    // })
  })
})
