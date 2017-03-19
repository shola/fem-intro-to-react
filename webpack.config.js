const path = require('path');

module.exports = {
    context: __dirname, // makes your app know where it lives on your file system
    entry: './js/Main',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.es']
    },
    stats: {
        colors: true,
        reasons: true, // verbose error messages
        chunks: false
    },
    module: {
        // sequential processing utilities in our build pipeline
        loaders: [
            {
                // if a file name passes the "test" regexp, run it through babel
                test: /\.(js|jsx|es)?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};
