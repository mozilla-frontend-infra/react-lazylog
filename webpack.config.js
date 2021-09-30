"use strict";

const path = require("path");

module.exports = () => {
    return {
        // Mode needs to be set for webpack to work correctly
        mode: "production",

        // The application entry point
        entry: path.resolve(__dirname, "src", "components", "index.js"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "lazylogs.bundle.js",
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
        devtool: "source-map",
        module: {
            rules: [
                  {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(jsx|js)$/,
                    include: path.resolve(__dirname, "src"),
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    [
                                        "@babel/preset-env",
                                        {
                                            targets: "defaults",
                                        },
                                    ],
                                    "@babel/preset-react",
                                ],
                            },
                        },
                    ],
                },
            ],
        },
    };
};
