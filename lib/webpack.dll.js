/**
 * @Author: tangzhicheng
 * @Date: 2021-05-26 09:20:09
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-15 14:57:43
 * @Description: 预编译文件
 */

const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const CURRENTDIR = process.cwd()

module.exports = {
  entry: {
    library: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: '[name]_[chunkhash:8].dll.js',
    path: path.join(CURRENTDIR, '/library'),
    library: '[name]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      context: CURRENTDIR,
      name: '[name]',
      path: path.join(CURRENTDIR, '/library/manifest.json'),
    }),
  ],
}
