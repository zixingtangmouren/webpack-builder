/**
 * @Author: tangzhicheng
 * @Date: 2021-06-18 17:09:34
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-18 17:21:29
 * @Description: file content
 */

const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const express = require('express')
const path = require('path')

process.chdir(path.join(process.cwd(), 'test/smoke/template'))

console.log(path.join(process.cwd(), 'test/smoke/template'))
const compiler = webpack(require('../lib/webpack.dev'))

const app = express()

app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
  }),
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
