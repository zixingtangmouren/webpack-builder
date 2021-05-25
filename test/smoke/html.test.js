/**
 * @Author: tangzhicheng
 * @Date: 2021-05-24 22:15:02
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-24 22:33:05
 * @Description: file content
 */

const glog = require('glob')
const { it, describe } = require('mocha')

describe('checking generated html files ', () => {
  it('should html files', (done) => {
    const files = glog.sync('./dist/index.html')

    if (files.length > 0) {
      done()
    } else {
      throw new Error('not html files')
    }
  })
})
