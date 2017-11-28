
module.exports = {
    context: __dirname + "/src",
    entry: "./app",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }]
        },
        {
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
          vue: 'vue/dist/vue.js'
        }
    }
}