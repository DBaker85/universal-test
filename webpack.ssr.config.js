var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs-extra');
var CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var public = path.join(__dirname,'/public');



module.exports = {
  entry: {
    main:'./src/app/main.server.ts'
  },
  output: {
    filename: 'app-universal.js',
    path: path.join(__dirname,'server')
  },
  target: 'node',
   resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
     loaders: [
        {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        /* Embed files. */
        { 
          test: /\.(html|css)$/, 
          loader: 'raw-loader',
          exclude: /\.async\.(html|css)$/
        }
      ]
  },
  
};
