const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
	mode: 'production'
});