const path = require("path");

module.exports = {
  entry: {
    "react-app": "./src/react-app.jsx"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "amd",
    library: "reactApp"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/assets/"
            }
          }
        ]
      }
    ]
  },

  mode: "development",

  devtool: "eval-source-map"
};
