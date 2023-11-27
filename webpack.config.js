const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/App.js',
    modal: './src/common-components/Modal.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
  },
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
    modules: [path.resolve(__dirname, 'js'), 'node_modules'],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
