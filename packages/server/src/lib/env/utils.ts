import { join } from "path";

export const getOsEnv = (key: string): string => {
	if (typeof process.env[key] === "undefined") {
		throw new Error(`Environment variable ${key} is not set.`);
	}

	return process.env[key];
};

export const getOsEnvOptional = (key: string): string | undefined =>
	process.env[key];

export const getPath = (path: string): string =>
	process.env.NODE_ENV === "production"
		? join(
				process.cwd(),
				path.replace("src/", "dist/").slice(0, -3) + ".js"
		  )
		: join(process.cwd(), path);

export const getPaths = (paths: string[]): string[] =>
	paths.map((p) => getPath(p));

export const getOsPath = (key: string): string => getPath(getOsEnv(key));

export const getOsPaths = (key: string): string[] =>
	getPaths(getOsEnvArray(key));

export const getOsEnvArray = (key: string, delimiter: string = ","): string[] =>
	(process.env[key] && process.env[key].split(delimiter)) || [];

export const toNumber = (value: string): number => parseInt(value, 10);

export const toBool = (value: string): boolean => value === "true";

export const normalizePort = (port: string): number | string | boolean => {
	const parsedPort = parseInt(port, 10);
	if (isNaN(parsedPort)) {
		// named pipe
		return port;
	}
	if (parsedPort >= 0) {
		// port number
		return parsedPort;
	}
	return false;
};
