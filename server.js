// 2021-02-03 https://webpack.js.org/guides/development/#using-webpack-dev-middleware
const express = require('express'); // 2021-02-03 https://expressjs.com
const fs = require('fs');
const https = require('https'); // 2021-02-03 https://expressjs.com/en/api.html#app.listen
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);
const app = express();
app.use(webpackDevMiddleware(compiler, {publicPath: config.output.publicPath,}));
// 2021-02-03
// 1) https://stackoverflow.com/a/11745114
// 2) https://expressjs.com/en/api.html#app.listen
https.createServer({
	cert: fs.readFileSync('C:/server/cert/.crt', 'utf8')
	,host: 'localhost.com'
	,key: fs.readFileSync('C:/server/cert/.key', 'utf8')
}, app).listen(2212);