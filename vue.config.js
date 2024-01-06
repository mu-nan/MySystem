const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, 
  devServer:{
    port: 9797,
    open: true,
    client: {
      webSocketURL: 'ws://0.0.0.0:9797/ws'
    }
  }
})
