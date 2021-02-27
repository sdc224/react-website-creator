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
		/* Added host as Edge doesn't recognize localhost for rendering favicon
		 * @see https://stackoverflow.com/questions/33081965/favicon-not-working-on-edge
		 */
		host: "127.0.0.1",
		port: 5000,
		historyApiFallback: true,
		publicPath: "/",
		contentBase: paths.build,
		compress: true,
		open: {
			// TODO : Config
			// For Google Chrome:
			// app: ['chrome', '--incognito'],

			// For Microsoft Edge
			app: ["msedge", "-inprivate"]
		}
	}
});

export default config;
