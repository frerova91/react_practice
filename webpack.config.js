const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackPwaManifestPluing = require('webpack-pwa-manifest')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const Webpack = require('webpack')
const Path = require('path')

// - - - - PLUGINS CONFIGURATIONS - - - -

const commonPlugins = [
  new HtmlWebpackPlugin({
    title: 'Practica de React.js',
    template: 'src/index.html',
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyJS: true
    }
  }),
  new WebpackPwaManifestPluing({
    name: 'Portfolio - Web Developer',
    shortname: 'Portfolio_FR',
    description: 'Web developer Profesional Porfolio',
    display: 'standalone',
    background_color: '#151515',
    theme_color: '#454545',
    ios: true,
    icons: [
      {
        src: Path.resolve('src/assets/icons/pwaiconfr.png'),
        sizes: [120, 152, 167, 180, 1024],
        destination: Path.join('icons', 'ios'),
        ios: true
      },
      {
        src: Path.resolve('src/assets/icons/pwaiconfr.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: Path.join('icons', 'android')
      }
    ]
  }),
  new workboxPlugin.GenerateSW({
    //  exclude: [/\.(?:png|jpg|jpeg|svg|webp)$/],
    // this avoid precaching all in the website in workbox on load the first page
    runtimeCaching: [
    // And this specify the Routes and files for caching on load
      {
        urlPattern: new RegExp(/\.(?:js)$/),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'javaScript',
          expiration: {
            maxAgeSeconds: 30 * 60
          }
        }
      },
      {
        urlPattern: new RegExp(/\.(?:png|jpg|jpeg|svg|webp)$/),
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 30 * 60 * 60
          }
        }
      }
    ],
    clientsClaim: true,
    skipWaiting: true
  })
]

const productionPlugins = [
  new CompressionPlugin({
    filename: '[path].[base].br',
    algorithm: 'brotliCompress',
    test: /\.(?:js|css|html|svg|png|webp)$/,
    compressionOptions: {
      // zlib’s level option matches Brotli’s BROTLI_PARAM_QUALITY option.
      level: 11
    },
    threshold: 10240,
    minRatio: 0.8,
    deleteOriginalAssets: false
  }),
  new CleanWebpackPlugin()
]

const developmentPlugins = [
  new Webpack.HotModuleReplacementPlugin(),
  new BundleAnalyzerPlugin({
    openAnalyzer: false
  })
]

// - - - - MAIN WEBPACK CONFIGURATIONS - - - -

module.exports = (env, { mode }) => ({
  devtool: (mode === 'deveplopment' ? 'source-map' : 'hidden-source-map'),
  entry: {
    home: Path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: 'main.[Hash].js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    // activando hotmodule del lado de webpack
    contentBase: './dist',
    compress: true,
    open: false,
    port: 8080
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'chunks'
    }
  },
  plugins: [

    ...(mode === 'production' ? productionPlugins : developmentPlugins),
    ...(commonPlugins)

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
      test: /\.(?:jpg|png|gif|woff|eot|ttf|svg|mp4|webm|webp)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 9000,
          encoding: true,
          name: '[hash].[ext]', // or [name].[hash].[ext]
          outputPath: 'assets'
          // el fallback loader por default de alternativa es file loader
        }
      }
    }
    ]
  }
})
