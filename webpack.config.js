const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'assets/index.html'
    }),
   new GenerateSW({
     // 这些选项帮助快速启用 ServiceWorkers
     // 不允许遗留任何“旧的” ServiceWorkers
     clientsClaim: true,
     skipWaiting: true,
     navigateFallback: '/index.html',
     runtimeCaching: [
        {
          urlPattern:  '/',
          handler: 'NetworkFirst'
        }
     ]
   }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};