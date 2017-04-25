const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?sourceMap!sass-loader?sourceMap'	
				})
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin("styles.css"),
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 9000
	}
};

