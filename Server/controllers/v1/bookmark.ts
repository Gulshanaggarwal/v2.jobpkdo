import { RequestUserAuth } from "../../middlewares/auth";
import { Response } from "express";
import bookmarkService from "../../services/v1/bookmark";

interface bookmark {
	insertViaEndpoint: (req: RequestUserAuth, res: Response) => Promise<void>;
	fetchBookmarks: (req: RequestUserAuth, res: Response) => Promise<void>;
}

const funcs: bookmark = {
	// insert via Endpoint

	insertViaEndpoint: async (req, res) => {
		try {
			const { tweetId, applyUrl } = req.body;

			const response = await bookmarkService.insertJob(
				req.user as string,
				tweetId,
				applyUrl
			);

			res.status(response.status).json(response);
		} catch (error) {
			console.log(error);
			res.status(500).json({
				error: true,
				status: 500,
				message: "Server error",
			});
		}
	},

	// fetch bookmarks

	fetchBookmarks: async () => {},
};

export default funcs;
