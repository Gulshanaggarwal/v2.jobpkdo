import express from "express";
import user from "./user";
import loginController from "../../controllers/v1/login";

const router = express.Router();

router.route("/login").get(loginController.login);
router.use("/user", user);

export default router;
