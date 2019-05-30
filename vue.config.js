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
  publicPath: process.env.NODE_ENV === 'production' ? '/coreui-free-vue-admin-template/' : '/',

}
