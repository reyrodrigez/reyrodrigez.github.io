const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'build')
  },
  plugins: [new HtmlWebpackPlugin({
	  template: './src/index.html'
  })],
  module: {
	rules: [
		{
		test: /\.js$/,
		exclude: /(node_modules)/,
		loader: 'babel-loader?presets[]=env'
		}
	]
  },
  devServer: {
	contentBase: path.join(__dirname, "dist"),
	port: 9000
  }
};