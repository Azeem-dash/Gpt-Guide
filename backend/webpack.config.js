const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 

module.exports = {
  entry: './src/index.js', // Entry point of your application (assuming index.js in src folder)
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory (dist folder in your project's root)
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
          options: {
            presets: ['@babel/preset-env'], // Use the @babel/preset-env preset
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: '<!DOCTYPE html><html><head><title>Your App</title></head><body><div id="root"></div></body></html>',
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
