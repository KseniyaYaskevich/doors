const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './scripts/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            fonts: path.resolve(__dirname, 'src/fonts'),
            db: path.resolve(__dirname, 'src/db')
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        })
    ],
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {

                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff2|woff|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[name][ext]',
                },
              },
        ]
    }
};