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
		// 1) «To make the library compatible with other environments, add `libraryTarget` property to the config.
		// This will add various options about how the library can be exposed.»
		// 2) «You can expose the library in the following ways:
		// 	- Variable: as a global variable made available by a script tag (libraryTarget:'var').
		// 	- This: available through the this object (libraryTarget:'this').
		// 	- Window: available through the `window` object, in the browser (libraryTarget:'window').
		// 	- UMD: available after AMD or CommonJS require (libraryTarget:'umd').
		// If `library` is set and `libraryTarget` is not,
		// `libraryTarget` defaults to `var` as specified in the output configuration documentation.»
		// https://webpack.js.org/guides/author-libraries#expose-the-library
		// https://webpack.js.org/configuration/output
		,libraryTarget: 'umd'
		,path: path.resolve(__dirname, 'dist')
	}
}));