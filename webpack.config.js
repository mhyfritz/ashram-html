module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
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
  }
}
