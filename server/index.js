/**
 * @Author: tangzhicheng
 * @Date: 2021-06-15 14:17:26
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-17 19:54:12
 * @Description: file content
 */
const express = require('express')
const path = require('path')

const app = express()
const ROOT = process.cwd()

console.log(ROOT)

// // 匹配任意请求*, 并且放到express.static 静态服务器的前面。
// app.get('*', (req, res) => {
//   res.send('Hello word')
// })

app.use(express.static(path.join(ROOT, 'test/smoke/template/dist')))

app.listen(5000, () => {
  console.log('start: 5000')
})
