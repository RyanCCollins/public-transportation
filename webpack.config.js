const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);
const ServiceWorkerWepbackPlugin = require('serviceworker-webpack-plugin').default;
const HOST = '0.0.0.0';
const PORT = 8079;

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: [
    path.resolve(ROOT_PATH,'app/src/index')
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: process.env.NODE_ENV === 'production' ? [] : ['eslint'],
        include: path.resolve(ROOT_PATH, './app')
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },
    {
      test: /\.txt$/,
      loader: 'raw',
    },
    {
      test: /\.svg$/,
      loader: 'babel!svg-react'
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.module\.scss$/,
      loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass'
      ]
    },
    {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "url-loader?mimetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "file-loader?name=[name].[ext]"
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file?name=[path][name].[hash].[ext]'
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: path.resolve(ROOT_PATH, 'app/src/actions'),
      utils: path.resolve(ROOT_PATH, 'app/src/utils'),
      reducers: path.resolve(ROOT_PATH, 'app/src/reducers'),
      store: path.resolve(ROOT_PATH, 'app/src/stores'),
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      constants: path.resolve(ROOT_PATH, 'app/src/constants'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages')
  },
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: HOST,
    port: PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin(),
    new ServiceWorkerWepbackPlugin({
      entry: path.join(__dirname, 'app/src/sw.js'),
    }),
    new HtmlwebpackPlugin({
      title: 'London Public Transportation',
      template: 'index.html'
    })
  ]
};
