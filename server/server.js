var express = require('express');
var path = require('path');
var config=require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(complier,{noInfo: true,publicPath:config.output.publicPath}));
app.use(webpackHotMiddleware(complier));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 8001;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
