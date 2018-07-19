const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: './src/app.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.js'
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
  ],
  module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env','react']
                }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
             }
        ]
  }
};