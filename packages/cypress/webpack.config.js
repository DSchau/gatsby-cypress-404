module.exports = {
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};
