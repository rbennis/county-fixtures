const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
 app.use(
    createProxyMiddleware('api/fixtures/jsonp?owner=2149&countyBoardId=27', {
        target: 'https://people.gaa.ie/',
        changeOrigin: true
    })
 )   
}