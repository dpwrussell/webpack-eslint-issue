const path = require("path");

const targetDir = "./target";

module.exports = {
    cache: true,
    devtool: "source-map",
    entry: {
        app: ['./src/main/js/index.js']
    },
    output: {
        path: path.join(__dirname, targetDir, 'dist'),
        filename: '[name].bundle.js'
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(ttf|woff|woff2|svg|eot)$/,
                use: "file-loader"
            }
        ]
    }
}