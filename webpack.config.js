const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Automatically find all HTML pages in src/pages
const pagesDir = path.resolve(__dirname, "src/pages");
const pageFiles = fs.existsSync(pagesDir)
  ? fs.readdirSync(pagesDir).filter(f => f.endsWith(".html"))
  : [];

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  devtool: "inline-source-map",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // serve static files from public
      publicPath: "/",
    },
    watchFiles: [
      "src/**/*", // watch all source files (JS, CSS, templates)
      "src/pages/**/*.html", // watch page templates
    ],
    devMiddleware: {
      writeToDisk: true, // write files to disk (optional)
    },
    open: true,
    hot: false,
    liveReload: true,
    historyApiFallback: false, // serve static files normally
  },

  plugins: [
    // Main index.html
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "Mike Ottenhoff, audiovisual vormgever",
      favicon: "./src/img/mo_favicon.svg",
    }),

    // Auto-generate HtmlWebpackPlugin for each page in src/pages
    ...pageFiles.map(
      file =>
        new HtmlWebpackPlugin({
          template: path.join(pagesDir, file),
          filename: `pages/${file}`, // output into dist/pages/
          title: file.replace(".html", ""),
        }),
    ),

    // Extract CSS into a separate file
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
  ],

  module: {
    rules: [
      // CSS: extract to separate file
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      // Images & media files
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|webm)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]", // copy all images to dist/img
        },
      },

      // Canva HTML exports in src/img
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "src/img"),
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]", // copy to dist/img without parsing
        },
      },

      // Static HTML from public (excluding src/img)
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "public"),
        exclude: path.resolve(__dirname, "src/img"),
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    alias: {
      "@img": path.resolve(__dirname, "src/img"),
    },
  },
};
