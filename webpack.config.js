const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/scripts/bundle.js',

  mode : 'development',  // 'production'

  devtool : 'eval-source-map',
  // watch: true,     


  devServer: {
    contentBase : './dist',
    port : 8000
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/bundle.js'
  },

  module : {
    rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ]
        },
        {
          test: /\.(png|jpg|gif)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name : '[name].[ext]',
                outputPath : 'images'
              }
            }
          ]
        }
      ]
  },

  plugins: [
   new CopyPlugin([
     {
        from: './src/index.html',
        to:  'index.html'
     }
   ]),
 ]
};
