module.exports = {
  pages: {
    'popup/popup': {
      entry: 'src/popup/popup.js',
      title: 'Popup',
    },
  },
  pluginOptions: {
    browserExtension: {
      components: {
        popup: true,
        background: true,
      },
      componentOptions: {
        background: {
          entry: 'src/background/index.js'
        }
      },
      api: 'browser',
      usePolyfill: true,
      autoImportPolyfill: true,
    },
  },
};
