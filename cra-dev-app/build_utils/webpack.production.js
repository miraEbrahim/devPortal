const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = () => ({
    output: {
        filename: "production.js"
    },
    module: {
        rules: [
            {
                test: /\.yaml$/,
                use: [
                    { loader: 'json-loader' },
                    { loader: 'yaml-loader' }
                ]
            },
            {
                test: /\.sa?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),

        new CopyWebpackPlugin(

            //     [{
            //     // Copy the Swagger OAuth2 redirect file to the project root;
            //     // that file handles the OAuth2 redirect after authenticating the end-user.
            //     from: require.resolve('swagger-ui/dist/oauth2-redirect.html'),
            //     to: './'
            // }]

            {
                patterns: [
                    './src/swagger-ui/swagger-ui.css',
                    './src/swagger-ui/swagger-ui-bundle.js',
                    './src/swagger-ui/swagger-ui-standalone-preset.js',
                    './src/swagger-ui/favicon-16x16.png',
                    './src/swagger-ui/favicon-32x32.png'
                ]
            }

        )
    ],
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin(),
        ],
    }
});