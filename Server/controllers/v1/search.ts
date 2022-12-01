import { Response } from "express";
import { RequestUserAuth } from "../../middlewares/auth";
import searchService from "../../services/v1/search";

interface search {
	searchJob: (req: RequestUserAuth, res: Response) => Promise<void>;
}

const funcs: search = {
	searchJob: async (req, res) => {
		try {
			const response = await searchService.searchJob(
				req.query.search as string,
				req.query.filter as string,
				req.query.next_token as string
			);
			res.status(response.status).json(response);
		} catch (error) {
			res.status(500).json({
				error: true,
				status: 500,
				message: "Server error",
			});
		}
	},
};

export default funcs;
