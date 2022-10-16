import express from "express";
import user from "./user";
import bookmark from "./bookmark";
import search from "./search";
import loginController from "../../controllers/v1/login";

const router = express.Router();

router.route("/login").get(loginController.login);
router.use("/user", user);
router.use("/bookmark", bookmark);
router.use("/search", search);

export default router;
