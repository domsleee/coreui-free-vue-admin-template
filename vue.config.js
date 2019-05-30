module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
    config.plugins.delete('NamedChunksPlugin');
    config.plugins.delete('HashedModuleIdsPlugin');
    console.log(config);

    if(config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: '[name].css',
        chunkFilename: '[name].css'
      }])
    }
    
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/coreui-free-vue-admin-template/' : '/',
  build: {
    assetsPublicPath: process.env.NODE_ENV === 'production' ? '/coreui-free-vue-admin-template/' : '/',
  }
}
