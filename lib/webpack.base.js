/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:34
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-15 10:50:08
 * @Description: file content
 */

const path = require('path')
const MiniCssExtract = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const setMAP = require('./utils/setMAP')

const ROOT = process.cwd()

const { entry, htmlPlugins } = setMAP(ROOT)

module.exports = {
  entry,
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.join(ROOT, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // 开启构建缓存
          },
        }, 'eslint-loader'],
      },
      {
        test: /.css$/i,
        use: [MiniCssExtract.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /.s[ac]ss$/i,
        use: [
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgae/[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtract({
      filename: 'css/[name]_[contenthash:8].css',
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          'You application is running here http://localhost:3000',
          '我丢，你倒是生效啊',
        ],
        notes: [
          'Some additionnal notes to be displayed unpon successful compilation',
        ],
      },
    }),
  ].concat(htmlPlugins),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: 'errors-only',
}
