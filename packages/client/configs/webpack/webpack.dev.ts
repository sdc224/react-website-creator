import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import { merge as webpackMerge } from "webpack-merge";

import paths from "../paths";
import baseConfig from "./webpack.common";

// Need to declare the module webpack for getting type details correctly for webpack-merge v5
// See: https://github.com/survivejs/webpack-merge/issues/141
declare module "webpack" {
	interface Configuration {
		devServer?: WebpackDevServer.Configuration;
	}
}

const config: webpack.Configuration = webpackMerge(baseConfig, {
	mode: "development",
	devtool: "#inline-source-map",
	devServer: {
		port: 5000,
		historyApiFallback: true,
		publicPath: "/",
		contentBase: paths.build,
		compress: true,
		open: true
	}
});

export default config;
