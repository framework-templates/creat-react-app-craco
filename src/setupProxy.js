const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://wztqy.top/test/api',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true
    })
  );
};
