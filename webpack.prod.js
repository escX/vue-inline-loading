const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {pascalCase} = require('change-case');
const {name, version, author, license, homepage} = require('./package');

const banner = () => {
  return [
    `${name} v${version}`,
    `${homepage}\n`,
    `Copyright 2019-present ${author}`,
    `Released under the ${license} license\n`,
    `Date: ${new Date().toLocaleString()}`
  ].join('\n');
};

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: `${name}.js`,
    libraryTarget: 'umd',
    library: `${pascalCase(name)}`,
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner
    })
  ]
});