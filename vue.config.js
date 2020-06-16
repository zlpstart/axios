// 默认代理 /api
// module.exports = {
//     devServer: {
//         proxy: 'http://139.196.234.125:8080'
//     }
// }

// 配置多个代理
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://139.196.234.125:8080',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          },
        }
      }
    }
  }