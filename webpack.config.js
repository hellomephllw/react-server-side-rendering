/**
 * Created by Administrator on 2016/5/28.
 */
var webpack = require("webpack");

module.exports = {
    /**入口js*/
    entry: {
        normalPage: __dirname + "/app/src/js/entry/NormalPageEntry.js",
        routerPage: __dirname + "/app/src/js/entry/RouterPageEntry.js"
    },
    /**打包构建js*/
    output: {
        path: __dirname + "/build/js",//构建路径
        publicPath: "/server_render/build/js/",//使用按需加载必须配置
        filename: "[name].bundle.js"//构建文件名
    },
    /**插件配置*/
    plugins: [
    ],
    /**路径解决*/
    resolve: {
        alias: {
            rootPath: __dirname
        }
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ["jsx-loader?harmony"]}
        ]
    }
};