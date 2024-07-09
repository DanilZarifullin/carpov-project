const path = require("path")
const { RuntimeModule } = require("webpack")

module.exports = {
    mode: "development",
    entry: "./js/script.js",
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.js$/, 
            use: "babel-loader",
            exclude: /node_modules/
        }]
    }
}