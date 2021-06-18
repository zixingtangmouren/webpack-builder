/**
 * @Author: tangzhicheng
 * @Date: 2021-06-18 15:22:18
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-18 15:28:18
 * @Description: file content
 */

// If your plugin is direct dependent to the html webpack plugin:
const HtmlWebpackPlugin = require('html-webpack-plugin')

class TestPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('TestPlugin', (compilation) => {
      console.log('The compiler is starting a new compilation...')

      // Static Plugin interface |compilation |HOOK NAME | register listener
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'TestPlugin', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          // Manipulate the content
          // data.html += 'The Magic Footer'
          // Tell webpack to move on
          console.log('1231231232132')
          console.log(data)
          cb(null, data)
        },
      )
    })
  }
}

module.exports = TestPlugin
