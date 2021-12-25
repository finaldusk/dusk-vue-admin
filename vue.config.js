'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
					@import "@/style/gobal.scss";
        `
      }
    }
  },
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/assets/svg')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
