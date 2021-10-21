const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//--------------------------------------->  main module export
module.exports = {
  //-->  build mode
  mode: 'development',

  //-->  development server
  devServer: {
    port: 3000,
  },

  //-->  entry file to start bundling
  entry: './src/index.js',

  //-->  location to save bundle pack
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  //-->  main odule settings
  module: {
    rules: [
      //-->  js loader(s)
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      //-->  css loader(s)
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      //-->  sass loader(s)
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      //-->  svg loader(s)
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },

  //-->  plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
