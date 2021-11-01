"use strict";

const path = require("path");
const webpack = require('webpack')

module.exports = () => {
    return {
        // Mode needs to be set for webpack to work correctly
        mode: "production",

        // The application entry point
        entry: path.resolve(__dirname, "src", "components", "index.ts"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "lazylogs.bundle.js",
        },
        // File extensions to support resolving
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
        devtool: "source-map",
        plugins: [
          // fix "process is not defined" error:
          new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        {
                            loader: "@teamsupercell/typings-for-css-modules-loader",
                            options: {},
                        },
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
    };
};
