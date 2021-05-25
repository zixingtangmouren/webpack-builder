/**
 * @Author: tangzhicheng
 * @Date: 2021-05-24 22:14:39
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-24 22:32:58
 * @Description: file content
 */

const glog = require('glob')
const { it, describe } = require('mocha')

describe('checking generated html files ', () => {
  it('should css and js files', (done) => {
    const files = glog.sync('./dist/index_*.js')

    if (files.length > 0) {
      done()
    } else {
      throw new Error('not html files')
    }
  })
})
