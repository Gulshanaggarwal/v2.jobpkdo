import bookmark from "../../schema/bookmark";
import dailyMailReminder from "../../schema/dailyMailReminder";

const funcs = {
	// insert job

	insertJob: async (userId: string, tweetId: string, applyUrl: string) => {
		try {
			const data = await bookmark.findOne({ userId, tweetId }).exec();
			if (!data) {
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
				return {
					error: false,
					status: 200,
					message: "Saved successfully",
				};
			}
			return {
				error: true,
				status: 403,
				message: "You have already saved it!",
			};
		} catch (error) {
			console.log(error);
			throw error;
		}
	},

	// fetch bookmarks

	fetchBookmarks: async (userId: string, page: string) => {
		try {
			const perPage = 10;
			const pageNumber = Number(page);

			if (pageNumber > 0) {
				const data = await bookmark
					.find({ userId, isDeleted: false })
					.sort({ _id: -1 })
					.select("tweetId applyUrl")
					.skip((pageNumber - 1) * perPage)
					.limit(perPage);
				if (data.length !== 0) {
					return {
						error: false,
						status: 200,
						message: "bookmarks fetched",
						data,
					};
				}
				return { error: true, status: 404, message: "No data found" };
			}
			return { error: true, status: 404, message: "No data found" };
		} catch (error) {
			throw error;
		}
	},

	// Remove Bookmarks
	removeBookmark: async (tweetId: string) => {
		console.log(tweetId);
		try {
			const filter = { tweetId };
			const update = { isDeleted: true };
			const data = await bookmark.findOneAndUpdate(filter, update);
			if (data) {
				return {
					error: false,
					status: 200,
					message: "Removed successfully",
				};
			}
			return { error: true, status: 404, message: "No resource found" };
		} catch (error) {
			throw error;
		}
	},
};

export default funcs;
