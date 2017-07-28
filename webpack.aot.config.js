var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs-extra');
var CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var public = path.join(__dirname,'/public');
var publicScripts = path.join(__dirname,'/public/scripts');


module.exports = {
  entry: {
    main:'./src/app/main.browser.ts'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: publicScripts
  },
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
  plugins: [
   
       new CopyWebpackPlugin([
         // Copy glob results (with dot files) to /absolute/path/
            {
                context: 'src',
                from:'images/**/*',
                to: public,
                flatten: false
            }
      ]),
      
       new CopyWebpackPlugin([
         // Copy glob results (with dot files) to /absolute/path/
            {
                
                context: 'src',
                from:'*.ico',
                to: public,
                flatten: false
            }
      ]),
       new HtmlWebpackPlugin({  // Also generate a test.html
       filename: path.join(__dirname,'/public/index.html'),
       template: './src/index.html'
     }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module){
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['commons','bootstrap']
    }),

    new CleanObsoleteChunks(),

    new BrowserSyncPlugin(
            // BrowserSync options 
            {
                // browse to http://localhost:3000/ during development 
                host: 'localhost',
                port: 9000,
                // proxy the Webpack Dev Server endpoint 
                // (which should be serving on http://localhost:3100/) 
                // through BrowserSync 
                proxy: 'http://localhost:3000/',
                files: [
                   path.join(public,'/**/*')
                ],
                injectChanges: true,
            },
            // plugin options 
            {
                // prevent BrowserSync from reloading the page 
                // and let Webpack Dev Server take care of this 
                // reload: false
            }
        ),

],
devServer: {
  contentBase: public,
  // compress: true,
  port: 9000,
  proxy: {
    "/": "http://localhost:3000"
  } 
}
};
