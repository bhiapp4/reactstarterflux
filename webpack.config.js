const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PostCssImport = require('postcss-easy-import');
const precss = require('precss');
const autoPrefixer = require('autoPrefixer');

const APP = __dirname + "/app/";
const BUILD = __dirname + "/build/";
const STYLE = __dirname + "/app/styles.css";
const PUBLIC = __dirname + "/app/public/";
const TEMPLATE = __dirname+ "/app/templates/index_default.html";
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
  entry: {
    app: APP,
    style: STYLE
  },
  output: {
    path: BUILD,
    filename: '[name].js',
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
        use: [{loader:'style-loader'},
              {loader:'css-loader'},
              {loader:'postcss-loader',
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
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer:{
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{from:PUBLIC, to: BUILD}],{ignore:['.DS_STORE']})
  ]
}
