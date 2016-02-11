module.exports= {
    entry:[
	'webpack-hot-middleware/client',
	'./client/client.js'
	],
    output:{
        path: './dist',
        filename: 'bundle.js',
        publicpath:'/'
    },
	plugins:[
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModeuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
    module: {
        loaders:[
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['react','es2015','react-hmre']
                    }
                }
            ]
    }
}
