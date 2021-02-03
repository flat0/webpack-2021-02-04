// 2021-02-04
const path = require('path');
module.exports = ['source-map'].map(devtool => ({
	devtool
	,entry: {index: './src/index.js'}
	,mode: 'development' // 2021-02-01 https://webpack.js.org/guides/development
	// 2021-02-04 https://webpack.js.org/guides/author-libraries/#base-configuration-with-source-map
	,optimization: {runtimeChunk: true}
	,output: {
		filename: 'webpack-numbers.js'
		,path: path.resolve(__dirname, 'dist')
		,publicPath: '/' // 2021-02-03 https://webpack.js.org/guides/development#using-webpack-dev-middleware
	}
}));