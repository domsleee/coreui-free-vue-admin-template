const fs = require('fs');
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  },
  chainWebpack: config => {
    /*config.optimization.delete('splitChunks');
    config.plugins.delete('NamedChunksPlugin');
    config.plugins.delete('HashedModuleIdsPlugin');
    console.log(config);*/
  },
  devServer: {
    https: {
      key: fs.readFileSync('./certs/key.pem'),
      cert: fs.readFileSync('./certs/cert.pem'),
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/coreui-free-vue-admin-template/' : '/',

}
