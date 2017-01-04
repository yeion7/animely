const ExtractTextPlugin = require('extract-text-webpack-plugin');

const stylusLoader = ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader');

module.exports = {
  entry: './source/client.jsx',
  output: {
    filename: 'app.js',
    path: './built/statics',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules)/,
      },
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016', 'react'],
          plugins: ['transform-es2015-modules-commonjs'],
        },
      },
      {
        test: /\.styl$/,
        loader: stylusLoader,
      },
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
  },
  plugins: [
    new ExtractTextPlugin('../statics/styles.css'),
  ],
};
