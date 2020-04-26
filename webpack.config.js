module.exports = {
  mode: "production",
  entry: {
    background: __dirname + "/src/background.js",
    popup: __dirname + "/src/popup.js",
    content: __dirname + "/src/content.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist/scripts",
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
};
