const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const jsRules = {
  test: /\.js|[x]$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "entry",
            corejs: "core-js@3",
            targets: {
              edge: "17",
              firefox: "60",
              chrome: "67",
              safari: "11.1",
            },
          },
        ],
        [
          "@babel/preset-react",
          {
            useBuiltIns: "entry",
            corejs: "core-js@3",
            targets: {
              edge: "17",
              firefox: "60",
              chrome: "67",
              safari: "11.1",
            },
          },
        ],
      ],
    },
  },
};

const cssRules = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
};

const sassRules = {
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    "css-loader",
    "sass-loader",
  ],
};

const config = {
  entry: "./src/index.js",
  output: {
    filename: "js/[name].[contenthash].bundle.js",
    chunkFilename: "js/[name].[contenthash].chunk.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".jsx", ".js", ".scss", ".css"],
    alias: {
      Pages: path.resolve(__dirname, 'src/Pages/'),
      Sass: path.resolve(__dirname, 'src/Sass/'),
      Components: path.resolve(__dirname, 'src/Components/'),
      Layouts: path.resolve(__dirname, 'src/Layouts/'),
      Redux: path.resolve(__dirname, 'src/Redux/')
    }
  },
  module: {
    rules: [jsRules, cssRules, sassRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "E-commerce",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
  ],
};

module.exports = (env, { mode }) => {
  if (mode === "development") {
    config.devtool = "eval";
  }
  return config;
};
