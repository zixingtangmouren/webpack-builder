/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:42
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-24 10:57:14
 * @Description: file content
 */

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'cheap-source-map',
}

module.exports = merge(baseConfig, devConfig)
