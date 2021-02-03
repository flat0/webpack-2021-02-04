// 2021-02-04
const path = require('path');
module.exports = ['source-map'].map(devtool => ({
	devtool
	,entry: {index: './src/index.js'}
	// 2021-02-04
	// «Now, if you run `webpack`, you will find that a largish bundle is created.
	// If you inspect the file, you'll see that `lodash` has been bundled along with your code.
	// In this case, we'd prefer to treat `lodash` as a `peerDependency`.
	// Meaning that the consumer should already have `lodash` installed.
	// Hence you would want to give up control of this external library to the consumer of your library.»
	// https://webpack.js.org/guides/author-libraries#externalize-lodash
	,externals: {
		lodash: {
			amd: 'lodash'
			,commonjs2: 'lodash'
			,commonjs: 'lodash'
			,root: '_'
		}
	}
	,mode: 'development' // 2021-02-01 https://webpack.js.org/guides/development
	// 2021-02-04 https://webpack.js.org/guides/author-libraries/#base-configuration-with-source-map
	,optimization: {runtimeChunk: true}
	,output: {
		filename: 'webpack-numbers.js'
		// 2021-02-04
		// «This exposes your library bundle available as a global variable named `webpackNumbers` when imported»
		// https://webpack.js.org/guides/author-libraries#expose-the-library
		,library: 'webpackNumbers'
		// 2021-02-04
		// «To make the library compatible with other environments, add `libraryTarget` property to the config.
		// This will add various options about how the library can be exposed.»
		// https://webpack.js.org/guides/author-libraries#expose-the-library
		,libraryTarget: 'umd'
		,path: path.resolve(__dirname, 'dist')
	}
}));