/**
 * @Author: tangzhicheng
 * @Date: 2021-05-16 14:57:19
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-19 14:29:43
 * @Description: file content
 */

import './index.jsx'

const wm = new WeakMap()

Promise.resolve().finally(() => {
  console.log(wm)
})
