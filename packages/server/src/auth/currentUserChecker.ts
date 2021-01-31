import { Action } from "routing-controllers";
import { Connection } from "typeorm";

import { User } from "../api/models/User";

export const currentUserChecker = (
	connection: Connection
): ((action: Action) => Promise<User | undefined>) => (
	action: Action
): Promise<User | undefined> => action.request.user;
