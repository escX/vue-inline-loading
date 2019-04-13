const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProjectHtmlTemplate = require('project-html-template');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {name, description} = require('./package');

module.exports = merge(common, {
  mode: 'development',
  entry: './examples/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'examples')
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['*', '!src']
    }),
    new HtmlWebpackPlugin({
      title: name,
      desc: description,
      repository: `https://github.com/escX/${name}.git`,
      template: ProjectHtmlTemplate,
      favicon: './examples/src/favicon.ico'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
});