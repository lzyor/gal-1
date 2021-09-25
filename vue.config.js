const path = require('path');

function r(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack(config) {
    config.resolve.alias
      .set("@", r("src"))
      .set("@assets", r("assets"))
      .set("@scripts", r("scripts"))
  },

  publicPath: '/game/gal-1'
}
