import user from "../../schema/user";

interface user {
	findOrCreate: (userId: string) => Promise<string | null>;
}

const funcs: user = {
	findOrCreate: async (userId) => {
		try {
			let data = await user.findOne({ userId }).exec();

			if (!data) {
				data = await user.create({ userId });
			}
			if (data) {
				return userId;
			}
			return null;
		} catch (error) {
			throw error;
		}
	},
};

export default funcs;
