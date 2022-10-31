const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './dist'),
    },
    devServer: {
        // contentBase: path.join(__dirname, './dist')
        static: path.join(__dirname, './dist'),
        port: 9000,
        compress: true,
    },
      
}