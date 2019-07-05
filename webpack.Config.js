var webpack = require('webpack');
var path = require('path');

const config = {
	mode: 'development',
	entry: [
		'./src/index.jsx',
	],
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
		publicPath: './public',
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
	devServer: {
		contentBase: path.join(__dirname, './public'),
		compress: true,
		port: 9000
	}
};

module.exports = config;
