const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
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
      publicPath: 'auto',
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

      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "crossCountry",
        library: { type: "var", name: "crossCountry" },
        filename: "remoteEntry.js",
        exposes: {
          "./Module": "./src/main.js",
        },
        shared: ["vue", "core-js", "axios"],
      }),
     new htmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
      }),
    ],
    devServer: {
      port: 4202,
      historyApiFallback: true
    },
  };
};
