const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const Path = require("path")
const Webpack = require('webpack')

const productionPlugins = new CompressionPlugin({algorithm: 'gzip'})
const developmentPlugins = new Webpack.HotModuleReplacementPlugin()

module.exports = (env, {mode}) => ({
    entry:{ 
      home: Path.resolve(__dirname,'./src/index.js'),
    },
    output: {
      filename: 'app.[Hash].js',
      publicPath: "/"
    },
    devServer:{
      hot: true, // activando hotmodule del lado de webpack
      contentBase: './dist',
      open: false,
      port: 8080,
    },
    plugins: [
      mode === 'production' && productionPlugins,
      mode === 'development' && developmentPlugins,
      new HtmlWebpackPlugin({
        title:'Practica de React.js',
        template: 'src/index.html'
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
      }]
    }
})