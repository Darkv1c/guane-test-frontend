module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: "page-",
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/_variables.scss";`
      }
    }
  }
};
