import user from "../../schema/user";

const funcs = {
	// fetch user

	fetchUser: async (userId: string) => {
		try {
			const data = await user
				.findOne(
					{ userId },
					"userId notificationEnabled notificationEmail notificationInterval"
				)
				.exec();
			if (data) {
				return {
					error: false,
					status: 200,
					message: "User fetched",
					data,
				};
			}
			return { error: true, status: 404, message: "User not found" };
		} catch (error) {
			throw error;
		}
	},

	// update User

	updateUser: async (
		userId: string,
		updateItem: { notificationEnabled: boolean; notificiationEmail: string }
	) => {
		try {
			const query = { userId };

			const data = await user.findOneAndUpdate(query, updateItem, {
				new: true,
			});

			return {
				error: false,
				status: 200,
				message: "User settings updated",
				data,
			};
		} catch (error) {
			throw error;
		}
	},
};

export default funcs;
