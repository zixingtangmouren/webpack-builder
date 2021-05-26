/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 12:55:21
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-26 10:53:21
 * @Description: file content
 */

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
    'react/button-has-type': 'off',
    'import/no-dynamic-require': 'off',
  },
}
