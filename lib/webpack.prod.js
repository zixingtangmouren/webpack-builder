/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:52
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-15 16:28:28
 * @Description: file content
 */

const { merge } = require('webpack-merge')
const OptimizeCssAssest = require('optimize-css-assets-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin') // 用于并行压缩
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const path = require('path')
const HardSourcePlugin = require('hard-source-webpack-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const AutoDllPlugin = require('autodll-webpack-plugin')
const baseConfig = require('./webpack.base')

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
    new AutoDllPlugin({
      inject: true,
      filename: '[name].dll.js',
      entry: {
        libary: [
          'react',
          'react-dom',
        ],
      },
    }),
    // new webpack.DllReferencePlugin({
    //   context: CURRENTDIR,
    //   manifest: require(manifest),
    //   name: 'library',
    // }),
    // new AddAssetHtmlPlugin({
    //   filepath: path.join(CURRENTDIR, 'test/smoke/template/library/library_28b0d955.dll.js'),
    // }),
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
