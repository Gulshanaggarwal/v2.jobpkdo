import express from "express";
import user from "./user";
import loginController from "../../controllers/v1/login";
import bookmark from "./bookmark";

const router = express.Router();

router.route("/login").get(loginController.login);
router.use("/user", user);
router.use("/bookmark", bookmark);

export default router;
