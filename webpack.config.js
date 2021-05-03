const { resolve } = require('path');
const htmlPlugin = require("html-webpack-plugin");
const miniCssPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");


module.exports = {
    entry: resolve(__dirname, 'lesson2', 'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'lesson2', 'build'),
        filename: 'main.[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [miniCssPlugin.loader, 'css-loader', 'sass-loader',]
            },
            {
                test: /.mp3$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'audio',
                },
            }

        ]
    },
    plugins: [
        new htmlPlugin({
            template: resolve(__dirname, 'lesson2', 'index.html')
        }),
        new miniCssPlugin({
            filename: '[name].[contenthash].css'
        }),
        new BundleAnalyzerPlugin(),
    ],
}
