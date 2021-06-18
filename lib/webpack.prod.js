/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:52
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-18 16:24:06
 * @Description: file content
 */

const { merge } = require('webpack-merge')
const OptimizeCssAssest = require('optimize-css-assets-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin') // 用于并行压缩
const path = require('path')
const HardSourcePlugin = require('hard-source-webpack-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const baseConfig = require('./webpack.base')
const TestPlugin = require('../plugin/TestPlugin')

const CURRENTDIR = process.cwd()

const prodConfig = {
  mode: 'production',
  plugins: [
    new OptimizeCssAssest({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
    new HardSourcePlugin(), // 增加模块缓存
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: true,
    //   analyzerPort: 8888,
    // }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(CURRENTDIR, 'src')}/**/*`, { nodir: true }),
    }),
    new TestPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        cache: true,
      }),
    ],
  },
}

// module.exports = smp.wrap(merge(baseConfig, prodConfig))

baseConfig.module.rules[0].use.unshift('thread-loader') // 加入多线程打包

module.exports = merge(baseConfig, prodConfig)
