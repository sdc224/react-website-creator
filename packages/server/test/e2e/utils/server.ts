import { migrateDatabase } from "../../utils/database";
import { bootstrapApp, BootstrapSettings } from "./bootstrap";

export const prepareServer = async (options?: {
	migrate: boolean;
}): Promise<BootstrapSettings> => {
	const settings = await bootstrapApp();
	if (options && options.migrate) {
		await migrateDatabase(settings.connection);
	}

	return settings;
};
