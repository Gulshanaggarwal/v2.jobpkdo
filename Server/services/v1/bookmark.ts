import bookmark from "../../schema/bookmark";
import dailyMailReminder from "../../schema/dailyMailReminder";

const funcs = {
	// insert job

	insertJob: async (userId: string, tweetId: string, applyUrl: string) => {
		try {
			await bookmark.create({ userId, tweetId, applyUrl });
			dailyMailReminder.create(
				{ userId, jobs: [{ tweetId }] },
				async (err) => {
					if (err) {
						console.log("err", err);
						// update jobs array
						await dailyMailReminder.findOneAndUpdate(
							{ userId },
							{ $push: { jobs: { tweetId } } },
							{}
						);
					}
				}
			);

			return { error: false, status: 200, message: "Saved successfully" };
		} catch (error) {
			console.log(error);
			throw error;
		}
	},

	// fetch bookmarked

	fetchBookmarks: async () => {},
};

export default funcs;
