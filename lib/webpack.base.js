/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:34
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-05-25 19:25:55
 * @Description: file content
 */

const path = require('path')
const MiniCssExtract = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const fs = require('fs')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const ROOT = process.cwd()

console.log(ROOT)
console.log(__dirname)

const setMAP = () => {
  const pageDirName = fs.readdirSync(path.join(ROOT, 'src'))
  const entry = {}
  const htmlPlugins = []
  pageDirName.forEach((name) => {
    entry[name] = `./src/${name}/index.js`
    htmlPlugins.push(
      new HtmlWebpackPlugin({
        filename: `${name}.html`,
        title: name,
        chunks: [`${name}`],
        template: path.join(ROOT, `src/${name}/index.html`),
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      }),
    )
  })

  return {
    entry,
    htmlPlugins,
  }
}

const { entry, htmlPlugins } = setMAP()

module.exports = {
  entry,
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.join(ROOT, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /.css$/i,
        use: [MiniCssExtract.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /.s[ac]ss$/i,
        use: [
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgae/[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtract({
      filename: 'css/[name]_[contenthash:8].css',
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          'You application is running here http://localhost:3000',
          '我丢，你倒是生效啊',
        ],
        notes: [
          'Some additionnal notes to be displayed unpon successful compilation',
        ],
      },
    }),
  ].concat(htmlPlugins),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: 'errors-only',
}
