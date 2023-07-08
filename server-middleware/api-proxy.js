// server-middleware/api-proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (req, res, next) {
  const options = {
    target: process.env.NUXT_PUBLIC_API_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('Access-Control-Allow-Origin', process.env.NUXT_PUBLIC_API_URL);
      proxyReq.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, PATCH, DELETE');
      proxyReq.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    },
  };

  const proxy = createProxyMiddleware(options);
  proxy(req, res, next);
};
