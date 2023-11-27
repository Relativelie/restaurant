const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/App.js',
    modal: './src/common-components/Modal.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'dist/assets/scripts/',
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: 3 } }]],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@commonComponents': path.resolve(__dirname, './src/common-components/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
    },
    extensions: ['.js'],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
