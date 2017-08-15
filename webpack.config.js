var webpack = require('webpack');
var path = require('path');
module.exports={
  watch:true,
  entry:{
    entry1:'./src/js/index.js',
    mysrcipt:'./src/js/mysrcipt.js'
  },
  output:{
    path:__dirname+'/static/',
    publicPath:'/static/',
    filename:'[name].js'
  },
  module:{
    loaders:[
      {
        test:/\.(js|jsx)$/,
       
        loader:'babel-loader',
        query:{
          presets:['react','es2017']
        }
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.less$/,
        loader:'style-loader!css-loader?url=false!less-loader'
      },
      { test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192&name=img/[name].[ext]"
      }
    ]
  },
  resolve:{
    extensions:['.js','.jsx','png','jpg','less']
  },
  plugins:[
     new webpack.ProvidePlugin({
       $:"jquery",
       jQuery:"jquery",
       "window.jQuery":"jquery"
     })
   ]
}
