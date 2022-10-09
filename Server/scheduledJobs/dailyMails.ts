import cron from "node-cron";
import dailyMailReminder from "../schema/dailyMailReminder";
import user from "../schema/user";
import sendMail from "../utils/mailSend";

const funcs = {
	dailyMail: async () => {
		const task = cron.schedule("", async () => {
			// task logic
			try {
				const data = await dailyMailReminder.find().exec();
				data.forEach(async (userId) => {
					const userData = await user.findOne({ userId });

					if (
						userData &&
						userData.notificationEnabled &&
						userData.notificationEmail !== ""
					) {
						// send mail to the user
						sendMail();
					}
				});
			} catch (error) {
				console.log(error);
			}
		});

		task.start();
	},
};

export default funcs;
