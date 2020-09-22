const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const Webpack = require('webpack')
const Path = require('path')

const productionPlugins = new CompressionPlugin({
  filename: '[path][base].br',
  algorithm: 'brotliCompress',
  test: /\.(js|css|html|svg)$/,
  compressionOptions: {
    // zlib’s `level` option matches Brotli’s `BROTLI_PARAM_QUALITY` option.
    level: 11
  },
  threshold: 10240,
  minRatio: 0.8,
  deleteOriginalAssets: false
})

const developmentPlugins = new Webpack.HotModuleReplacementPlugin()

module.exports = (env, { mode }) => ({
  entry: {
    home: Path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: 'app.[Hash].js',
    publicPath: '/'
  },
  devServer: {
    hot: true, // activando hotmodule del lado de webpack
    contentBase: './dist',
    compress: true,
    open: false,
    port: 8080
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'commons'
    }
  },
  plugins: [
    mode === 'production' && productionPlugins,
    mode === 'development' && developmentPlugins,
    new HtmlWebpackPlugin({
      title: 'Practica de React.js',
      template: 'src/index.html'
      // meta: {
      // 'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', content: 'default-src https:' },
      // Will generate: <meta http-equiv="Content-Security-Policy" content="default-src https:">
      // Which equals to the following http header: `Content-Security-Policy: default-src https:`
      // 'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' }
      // Will generate: <meta http-equiv="set-cookie" content="value; expires=date; path=url">
      // Which equals to the following http header: `set-cookie: value; expires=date; path=url`
      // }
    })
  ].filter(Boolean),
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm|webp$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 9000,
          encoding: true,
          name: '[hash].[ext]',
          outputPath: 'assets'
          // el fallback loader por default de alternativa es file loader
        }
      }
    }
    ]
  }
})
