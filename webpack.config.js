module.exports = {
  entry: './public/app.jsx', //start processing your code.
  output: {
    path:__dirname,               //where to put bundle
    filename:'./public/bundle.js' // bundle file
  } ,
  resolve:{
    /*extension array, file extension to be processed*/
    extension:['', 'js', 'jsx']
  } ,
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{ // what does babel loader to do
          presets:['react', 'es2015'] // parse them to react , get the out put , run them in es2015
        } ,
        // what file should this loader process, put in regx format
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};