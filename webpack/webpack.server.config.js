const ExtractTextPlugin = require('extract-text-webpack-plugin');

const stylusLoader = ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader');

module.exports = {
  entry: './source/server.jsx',
  output: {
    filename: 'index.js',
    path: './built/server',
  },
  module: {
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
          presets: ['latest-minimal', 'react'],
        },
      },
      {
        test: /\.styl$/,
        loader: stylusLoader,
      },
    ],
  },
  target: 'node',
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
  },
  plugins: [
    new ExtractTextPlugin('../statics/styles.css'),
  ],
};
