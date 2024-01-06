const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    host:'localhost',
    port: 9797,
    open: true,
    client: {
      webSocketURL: 'ws://0.0.0.0:9797/ws'
    }
  }
})
