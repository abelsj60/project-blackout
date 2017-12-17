module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  devtool: 'source-map',
  modules: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
