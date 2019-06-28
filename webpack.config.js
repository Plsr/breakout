const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    publicPath: '/dist/'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
