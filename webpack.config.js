const path = require('path')
const RefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name:"webpack-exam",
    mode:'development',
    devtool:'eval',
    resolve: {
        extensions:['.js','.jsx']
    },
    entry:{
        app: ['./client.jsx']
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env','@babel/preset-react'],
                    plugins:['react-refresh/babel']
                }
            }
        ]
    },
    plugins:[
        new RefreshWebpack()
    ],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname+'/build'),
        publicPath:'/build/'
    },
    devServer:{
        port:9001,
        hot:true
    }
}