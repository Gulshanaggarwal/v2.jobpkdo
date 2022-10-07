import user from "../../schema/user";
import { RequestUserAuth } from "../../middlewares/auth";
import { Response } from "express";

interface user {
	findOrCreate: (userId: string) => Promise<string | Error>;
	fetchUser: (req: RequestUserAuth, res: Response) => Promise<void>;
	updateUser: (req: RequestUserAuth, res: Response) => Promise<void>;
}

const funcs: user = {
	// find or create
	findOrCreate: async (userId) => {
		try {
			let data = await user.findOne({ userId }).exec();

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
			const data = await user
				.findOne(
					{ userId: req.user },
					"userId notificationEnabled notificationEmail notificationInterval"
				)
				.exec();
			if (data) {
				res.status(200).json({
					error: false,
					message: "User fetched",
					data,
				});
				return;
			}
			res.status(404).json({ error: true, message: "User not found" });
		} catch (error) {
			res.status(500).json({ error: true, message: "Server error" });
		}
	},

	// update User

	updateUser: async (req, res) => {
		try {
			const query = { userId: req.user };
			const {
				notificationEnabled,
				notificationEmail,
				notificationInterval,
			} = req.body;

			const data = await user.findOneAndUpdate(
				query,
				{
					notificationEnabled,
					notificationEmail,
					notificationInterval,
				},
				{ new: true }
			);

			res.status(200).json({
				error: false,
				message: "User settings updated",
				data,
			});
		} catch (error) {
			res.status(500).json({ error: true, message: "Server error" });
		}
	},
};

export default funcs;
