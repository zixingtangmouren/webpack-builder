/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:52
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-24 22:33:45
 * @Description: file content
 */

const { merge } = require('webpack-merge')
const OptimizeCssAssest = require('optimize-css-assets-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.base')

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
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: false,
    //   analyzerPort: 8888,
    // }),
  ],
  optimization: {
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
      },
    },
  },
}

module.exports = merge(baseConfig, prodConfig)
