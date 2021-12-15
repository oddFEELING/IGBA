const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//--------------------------------------->  main module export
module.exports = {
  //-->  build mode
  mode: 'production',

  //-->  development server
  devServer: {
    port: 3001,
    contentBase: './build',
  },

  //-->  set source map as dev tool
  devtool: 'source-map',

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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      //-->  css loader(s)
      {
        test: /\.css$/,
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
              sourceMap: true,
            },
          },
        ],
      },
      //-->  svg loader(s)
      {
        test: /\.svg$/i,
        type: 'asset',
      },
      //-->  file loader(s)
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
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
