import { Response } from "express";
import { RequestUserAuth } from "../../middlewares/auth";

interface login {
	login: (req: RequestUserAuth, res: Response) => void;
}

const funcs: login = {
	login: (req, res) => {
		if (req.user) {
			res.status(200).json({
				error: false,
				message: "Authorized",
				data: req.user,
			});
			return;
		}
		res.status(500).json({ error: true, message: "Server error!" });
	},
};

export default funcs;
