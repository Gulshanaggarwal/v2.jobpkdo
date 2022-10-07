import { Response } from "express";
import { RequestUserAuth } from "../../middlewares/auth";

const funcs = {
	login: (req: RequestUserAuth, res: Response) => {
		if (req.user) {
			return res.status(200).json({
				error: false,
				message: "Authorized",
				data: req.user,
			});
		}
		res.status(500).json({ error: true, message: "Server error!" });
	},
};

export default funcs;
