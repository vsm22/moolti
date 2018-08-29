module.exports = [{
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: __dirname + "/",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
}]
