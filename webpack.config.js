const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: './src/BrowserEntry.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.json', '.jsx', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [new CheckerPlugin()]
};
