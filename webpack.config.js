var static = require('node-static');

module.exports={
    entry:'./js/index.js',
    output:{
        filename:"./bundle.js",
        library:'myApp'
    },
      watch: true,
      watchOptions:{
        aggregateTime:100
      },
module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
};

var file = new static.Server('./');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        
        //Serve files! 
        
        file.serve(request, response);
    }).resume();
}).listen(3030);
console.log("listen port 3030")