const Dotenv = require('dotenv-webpack');
var webpack = require("webpack")
var path = require('path');

module.exports = {
    entry: [
        './app/app.jsx'
    ],
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: ["app/components", "app/api", "app/styles", "node_modules"],
        alias: {
            Main: "Main.jsx",
            Nav: "Nav.jsx",
            Timer: 'Timer.jsx',
            Countdown: 'Countdown.jsx',
            CountdownForm: 'CountdownForm.jsx',
            Clock: 'Clock.jsx',
            Controls: 'Controls.jsx',
            applicationStyles: 'app.scss',

        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },

                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    plugins: [
        new Dotenv({
            path: '.env',
            safe: false
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jquery': 'jquery',
            "jQuery": "jquery"

        })
    ],
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
