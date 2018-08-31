module.exports = [{

    devtool: "source-map",

    context: __dirname + "/src",

    entry: "./index.js",

    output: {
        path: __dirname + "/",
        filename: "build.js"
    },

    module: {
        rules: [
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
