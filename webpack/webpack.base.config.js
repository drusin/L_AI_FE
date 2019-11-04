const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/main.ts',
		vendors: ['phaser']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html"
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|svg|jpg|gif|ogg)$/,
				use: 'file-loader'
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: '',
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
};