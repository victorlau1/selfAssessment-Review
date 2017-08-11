var path =  require('path');
var BUILD_DIR = path.join(__dirname, '/client/src/public');
var APP_DIR = path.join(__dirname, '/client/src/private');


module.exports = {
  target: 'node',
  entry: `${APP_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx/,
        include : APP_DIR,
        exclude: '/node_modules/',
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
