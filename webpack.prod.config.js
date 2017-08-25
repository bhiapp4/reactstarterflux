const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PostCssImport = require('postcss-easy-import');
const precss = require('precss');
const autoPrefixer = require('autoPrefixer');


const APP = __dirname + "/app/";
const BUILD = __dirname + "/build/";
const PUBLIC = __dirname + "/app/public/";
const STYLE = __dirname + "/app/styles.css";
const TEMPLATE = __dirname+ "/app/templates/index_default.html";
const PACKAGE = Object.keys(require('./package.json').dependencies);

module.exports = {
  entry: {
    app: APP,
    style: STYLE,
    vendor: PACKAGE
  },
  output: {
    path: BUILD,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js','.css']
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        loaders:  ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use:ExtractTextPlugin.extract({fallback: "style-loader",
        use: [{loader:"css-loader"},
              {loader:"postcss-loader",
               options:{
                  plugins: (loader)=>{
                    return[
                      PostCssImport({
                        addDependencyTo: webpack
                      }),
                      precss,
                      autoPrefixer({
                        browsers: ['last 2 versions']
                      })
                    ]
                  }
                }
              }
            ]
      })
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }]
  },
  plugins: [
    new CleanPlugin([BUILD]),
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({names: ['vendor','manifest']}),
    new webpack.DefinePlugin({'process.env':{'NODE_ENV':JSON.stringify('production')}}),
    new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}}),
    new CopyWebpackPlugin([{from:PUBLIC, to: BUILD}],{ignore:['.DS_STORE']})
  ]
}
