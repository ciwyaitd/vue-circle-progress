var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')

var config = {
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, './src'),
            path.join(__dirname, './node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'circle-progress': 'circle-progress.vue'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

var build = merge(config, {
    entry: {
        'index': './index.js'
    },
    devtool: '',
    output: {
        library: 'VueSvgIcon',
        libraryTarget: 'umd'
    }
})

var demo = merge(config, {
    entry: {
        'demo': './demo/src/index.js'
    },
    output: {
        chunkFilename: '[name].js'
    }
})


if (process.env.NODE_ENV === 'production') {
    module.exports = [build]
} else {
    module.exports = [demo]
}
