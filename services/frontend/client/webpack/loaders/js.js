/* global module */

module.exports = {
    test: /\.jsx?$/,
    use: [
        'babel-loader',
    ],
    exclude: /(node_modules|bower_components)/,
}
