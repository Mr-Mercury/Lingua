const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '8000',
    proxy: {
      '/api': 'http://localhost:3000'
    },
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'public', 'index.html')
    })
  ]
};