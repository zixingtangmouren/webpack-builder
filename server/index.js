/**
 * @Author: tangzhicheng
 * @Date: 2021-06-15 14:17:26
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-16 20:49:56
 * @Description: file content
 */
const express = require('express')
const path = require('path')

const app = express()
const ROOT = process.cwd()


// // 匹配任意请求*, 并且放到express.static 静态服务器的前面。
// app.get('*', (req, res) => {
//   res.send('Hello word')
// })

app.use(express.static(path.join(ROOT, 'dist')))




app.listen(5000, () => {
  console.log('start: 5000')
})
