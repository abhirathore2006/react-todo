module.exports= {
    entry:['./client/client.js'],
    output:{
        path: './dist',
        filename: 'bundle.js',
        publicpath:'/'
    },
    module: {
        loaders:[
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['react','es2015']
                    }
                }
            ]
    }
}
