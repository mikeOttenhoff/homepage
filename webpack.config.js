const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  devtool: "inline-source-map",
  devServer: {
    static: false, // don't serve 'dist', use in-memory bundle
    watchFiles: ["src/**/*"], // watch all source files
    devMiddleware: {
      writeToDisk: true, // forces dev server to write files to disk
    },
    open: true, // auto-open browser
    hot: false, // full reload (simpler for vanilla JS)
    liveReload: true, // refresh browser on changes
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // your HTML template
      title: "Mike Ottenhoff, audiovisual vormgever", // optional, overrides <title>
      favicon: "./src/img/mo_favicon.svg",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // clean dist before each build
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // allow import './file.css'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // copy images to dist
      },
    ],
  },

  resolve: {
    alias: {
      "@img": path.resolve(__dirname, "src/img"),
    },
  },
};
