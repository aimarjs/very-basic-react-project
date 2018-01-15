var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: {
		'assets/js/app': './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		hot: true,
		stats: 'errors-only',
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			minify: { collapseWhitespace: true },
			hash: true
		}),
		new ExtractTextPlugin({
			filename: '[name].min.css',
			disable: true
			// filename: getPath => {
			// 	return getPath('[name].min.css').replace('assets/js', 'assets/css');
			// }
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};
