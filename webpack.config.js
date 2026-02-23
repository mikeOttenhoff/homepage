const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Automatically find all HTML pages in src/pages
const pagesDir = path.resolve(__dirname, "src/pages");
const pageFiles = fs.existsSync(pagesDir)
  ? fs.readdirSync(pagesDir).filter(f => f.endsWith(".html"))
  : [];

module.exports = {
  mode: "production",
  entry: "./src/js/main.js", // Make sure this file exists
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.[contenthash].js",
    clean: true,
    publicPath: "./",
  },
  plugins: [
    // Main index.html
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),

    // Auto-generate pages from src/pages
    ...pageFiles.map(
      file =>
        new HtmlWebpackPlugin({
          template: path.join(pagesDir, file),
          filename: `pages/${file}`,
          title: file.replace(".html", ""),
        }),
    ),

    // Extract CSS
    new MiniCssExtractPlugin({
      filename: "css/main.[contenthash].css",
    }),

    // Copy everything from public into dist
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: "", // copy into dist root
          noErrorOnMissing: true,
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["pages/*.html"],
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      // Images & media
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp|webm)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },

      // HTML exports inside src/img (like Canva exports)
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "src/img"),
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@img": path.resolve(__dirname, "src/img"),
    },
  },
};
