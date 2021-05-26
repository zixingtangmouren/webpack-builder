/**
 * @Author: tangzhicheng
 * @Date: 2021-05-26 09:20:09
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-26 09:49:06
 * @Description: file content
 */

const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const ROOT = process.cwd()

module.exports = {
  entry: {
    library: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: '[name]_[hash].dll.js',
    path: path.join(ROOT, 'library'),
    library: '[name]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]_[hash:8]',
      path: path.join(ROOT, 'library/manifest.json'),
    }),
  ],
}
