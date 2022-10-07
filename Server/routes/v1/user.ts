import express from "express";
import userController from "../../controllers/v1/user";

const router = express.Router();

router
	.route("/")
	.get(userController.fetchUser)
	.patch(userController.updateUser);

export default router;
