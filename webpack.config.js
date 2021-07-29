const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'RestaurantJS',
			template: './src/template.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		})
	],
	module: {
	  	rules: [
			{
		  		test: /\.css$/i,
		  		use: [
			  		MiniCssExtractPlugin.loader, "css-loader"
				],
			},
		],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};