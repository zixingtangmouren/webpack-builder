/**
 * @Author: tangzhicheng
 * @Date: 2021-05-16 21:05:20
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-28 09:55:33
 * @Description: file content
 */
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-px-to-viewport')({
      unitToConvert: 'px', // 默认值`px`，需要转换的单位
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度 750*1334是iphone6的宽高
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: [], // 指定不转换为视窗单位的类
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中转换`px`，默认false
      exclude: [/node_modules/], // 如果是regexp, 忽略全部匹配文件;如果是数组array, 忽略指定文件
    }),
  ],
}
