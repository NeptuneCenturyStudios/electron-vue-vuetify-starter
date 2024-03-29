const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // This tells the output to use relative URLs instead of absolute. We need this because Electron
  // loads the dist/index.html file, but can't find the scripts generated by the vue cli when they
  // have a / in front of the path name. This option gets rid of the beginning slash
  publicPath: './',
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      customFileProtocol: './',
      builderOptions: {
      }
    }
  }
});
