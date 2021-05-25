/**
 * @Author: tangzhicheng
 * @Date: 2021-05-24 10:19:07
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-25 09:37:15
 * @Description: file content
 */
const webpack = require('webpack')
const path = require('path')
const rimraf = require('rimraf')
const Mocha = require('mocha')

const mocha = new Mocha()

process.chdir(path.join(__dirname, 'template'))

rimraf('./dist', () => {
  const config = require('../../lib/webpack.prod')
  // const config = require('../../lib/webpack.dev')

  webpack(config, (err, stats) => {
    if (err) {
      console.log(err)
      process.exit(2)
    }

    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }))

    mocha.addFile(path.join(__dirname, 'css-js.test.js'))
    mocha.addFile(path.join(__dirname, 'html.test.js'))

    mocha.run()
  })
})
