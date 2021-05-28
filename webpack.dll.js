/**
 * @Author: tangzhicheng
 * @Date: 2021-05-26 09:20:09
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-28 09:48:16
 * @Description: 预编译文件
 */

const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    library: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: '[name]_[chunkhash:8].dll.js',
    path: path.join(__dirname, 'library'),
    library: '[name]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_[chunkhash:8]',
      path: path.join(__dirname, 'library/manifest.json'),
    }),
  ],
}
