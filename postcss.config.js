const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test: /.\css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: {
    autoprefixer: {}
  }
}
