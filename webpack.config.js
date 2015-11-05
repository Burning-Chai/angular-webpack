module.exports = {
  entry: {
    app: './app/app.js'
  },
  output: {
    filename: 'app/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.html/, loader: 'html?minimize' },
      { test: /\.css$/, loader: 'style!css?minimize' },

      { test: /\.(jpe|jpeg|jpg)$/, loader: 'url-loader?mimetype=image/jpeg' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.gif$/, loader: 'url-loader?mimetype=image/gif' },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?mimetype=application/font-woff' }
    ]
  },
  devServer: {
    host: 'localhost',
    port: '8090',
    proxy: {
      '/api/*': 'http://localhost:8882/'
    }
  }
};
