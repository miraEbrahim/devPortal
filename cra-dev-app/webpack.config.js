const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const modeConfiguration = env => require(`./build_utils/webpack.${env}`)(env);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = ({ mode } = { mode: 'production' }) => {
    console.log(`mode is: ${mode}`);

    return merge({
        mode,
        devServer: {
            hot: true,
            open: true
        },
        entry: './src/index.js',
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                    // More information here https://webpack.js.org/guides/asset-modules/
                    type: 'asset/resource',
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]

        }
    },
        modeConfiguration(mode)
    );
};
