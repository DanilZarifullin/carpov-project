const { default: test } = require("node:test")
const path = require("path")
const { RuntimeModule } = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require("os");

module.exports = {
    mode: process.env.NODE_ENV || "production",
    entry: "./src/script.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js"
    },
    module: {
        rules: [{
            test: /\.js$/, 
            use: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        }, {
            test: /\.svg$/,
            type: "asset/resource"
        }]
    },
    plugins:[new HtmlWebpackPlugin({
        template: "./src/index.html"
    })]
}