const withPWA = require('next-pwa');
const withImages = require('next-images')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages({
    esModule: true
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});
