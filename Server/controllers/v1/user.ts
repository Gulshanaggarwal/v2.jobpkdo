import user from "../../schema/user";
import { RequestUserAuth } from "../../middlewares/auth";
import { Response } from "express";
import userService from "../../services/v1/user";

interface user {
	findOrCreate: (userId: string) => Promise<string | Error>;
	fetchUser: (req: RequestUserAuth, res: Response) => Promise<void>;
	updateUser: (req: RequestUserAuth, res: Response) => Promise<void>;
}

const funcs: user = {
	// find or create
	findOrCreate: async (userId) => {
		try {
			const data = await user.findOne({ userId }).exec();

			if (data) {
				return userId;
			}
			await user.create({ userId });
			return userId;
		} catch (error) {
			throw error;
		}
	},

	// Fetch User details
	fetchUser: async (req, res) => {
		try {
			const response = await userService.fetchUser(req.user as string);
			res.status(response.status).json(response);
		} catch (error) {
			res.status(500).json({
				error: true,
				status: 500,
				message: "Server error",
			});
		}
	},

	// update User

	updateUser: async (req, res) => {
		try {
			const response = await userService.updateUser(
				req.user as string,
				req.body
			);
			res.status(response.status).json(response);
		} catch (error) {
			res.status(500).json({ error: true, message: "Server error" });
		}
	},
};

export default funcs;
