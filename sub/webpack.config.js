const path = require('path');

const nodeConfig = {
    target: 'node',
    mode: 'development',
    devtool: 'source-map',
    entry: './src/api.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'core.node.js',
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /node_modules/,
            },
        ],
    },
    stats: {
        warnings: false,
    },
};

module.exports = [nodeConfig];