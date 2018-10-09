export default {
    "publicPath": "/static/",
    "proxy": {
      "/api": {
        "target": "http://jsonplaceholder.typicode.com/",
        "changeOrigin": true,
        "pathRewrite": { "^/api" : "" }
      },
      "/bigdata": {
        "target": "http://192.168.102.226:8888/",
        "changeOrigin": true
      }
    },
  }
  