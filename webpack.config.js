const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = () => {
  return {
    optimization: {
      moduleIds: "named",
      chunkIds: "named",
    },
    entry: "./src/index.js",
    output: {
      filename: "[bundle].js",
      publicPath: "auto",
      uniqueName: "vue",
      chunkFilename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: "url-loader",
          },
        },
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["@babel/env"],
              },
            },
          ],
        },
        {
          test: /\.(sass|css|scss)$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: () => [require("autoprefixer")()],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
      }),
      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "crosscountry",
        library: { type: "var", name: "crosscountry" },
        filename: "remoteEntry.js",
        exposes: {
          "./module": ".//src/index.js",
        },
        shared: ["vue", "core-js", "axios"],
      }),
    ],
    devServer: {
      port: 4202,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },
  };
};
