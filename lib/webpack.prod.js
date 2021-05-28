/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:52
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-28 15:29:26
 * @Description: file content
 */

const { merge } = require('webpack-merge')
const OptimizeCssAssest = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin') // 用于检测各个plugin loader的运行速度
const TerserPlugin = require('terser-webpack-plugin') // 用于并行压缩
const path = require('path')
const HardSourcePlugin = require('hard-source-webpack-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const baseConfig = require('./webpack.base')

const CURRENTDIR = process.cwd()
const manifest = path.join(CURRENTDIR, 'library/manifest.json')

// const smp = new SpeedMeasurePlugin()

// const PATHS = {
//   src: path.join(__dirname, 'src'),
// }

console.log(glob.sync(`${path.join(CURRENTDIR, 'src')}/**/*`, { nodir: true }))

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
    new webpack.DllReferencePlugin({
      context: CURRENTDIR,
      manifest: require(manifest),
      name: 'library',
    }),
    new HardSourcePlugin(), // 增加模块缓存
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: true,
    //   analyzerPort: 8888,
    // }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(CURRENTDIR, 'src')}/**/*`, { nodir: true }),
    }),
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
    minimizer: [new TerserPlugin({
      parallel: 4,
      cache: true,
    })],
  },
}

// module.exports = smp.wrap(merge(baseConfig, prodConfig))

baseConfig.module.rules[0].use.unshift('thread-loader') // 加入多线程打包

module.exports = merge(baseConfig, prodConfig)
