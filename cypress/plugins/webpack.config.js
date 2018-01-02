module.exports = {
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env', 'babel-preset-react'],
              plugins: [
                'transform-es2015-destructuring',
                'transform-object-rest-spread',
                'babel-plugin-transform-class-properties',
              ],
            },
          },
        ],
      },
      // {
      //   test: /\.css$/,
      //   exclude: [/node_modules/],
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
}
