import { HttpError } from "routing-controllers";

export class UserNotFoundError extends HttpError {
	public constructor() {
		super(404, "User not found!");
	}
}
