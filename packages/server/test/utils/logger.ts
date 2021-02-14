import { configure, transports } from "winston";

export const configureLogger = (): void => {
	configure({
		transports: [
			new transports.Console({
				level: "none",
				handleExceptions: false
			})
		]
	});
};
