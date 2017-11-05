var CopyWebpackPlugin = require('copy-webpack-plugin')

const dirDist = 'dist'

module.exports = {
  entry: './index.js',
  output: {
    path: `${__dirname}/${dirDist}`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: function (filePath) {
          return /node_modules/.test(filePath) &&
            !/node_modules\/@mhyfritz/.test(filePath)
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html' },
      { from: 'style.css' }
    ])
  ]
}
