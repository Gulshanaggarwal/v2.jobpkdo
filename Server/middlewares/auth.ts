import { Request, Response, NextFunction } from "express";
import admin from "../config/firebase";
import userController from "../controllers/v1/user";

export interface RequestUserAuth extends Request {
	user?: string | null;
}

const authMiddleware = async (
	req: RequestUserAuth,
	res: Response,
	next: NextFunction
) => {
	try {
		const token: string | undefined = req.headers.authorization?.replace(
			"Bearer ",
			""
		);
		const decodedToken = await admin.auth().verifyIdToken(token as string);

		if (decodedToken) {
			const userId = decodedToken.firebase.identities["twitter.com"][0];
			const user = await userController.findOrCreate(userId);
			req.user = user;
			return next();
		}
		res.status(401).json({ message: "Unauthorized" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server error!" });
	}
};

export default authMiddleware;
