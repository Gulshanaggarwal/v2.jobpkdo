import express from "express";
import user from "./user";
import loginController from "../../controllers/v1/login";

const router = express.Router();

router.use("/login", loginController.login);
router.use("/user", user);

export default router;
