const path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['react-hot-loader/webpack', 'ts-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: [
      path.join(process.cwd(), 'app'),
      'node_modules',
    ]
  },
  plugins: []
};
