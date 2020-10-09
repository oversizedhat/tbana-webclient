process.env.VUE_APP_VERSION = require('./package.json').version

var webpack = require("webpack");
module.exports = {
    publicPath: './',
    runtimeCompiler: true,
    configureWebpack: {
        plugins: [
          new webpack.BannerPlugin({
            banner: 'Hello! <3',
          })
        ]
    }
}