import express from "express";
import searchController from "../../controllers/v1/search";
const router = express.Router();

router.route("/").get(searchController.searchJob);

export default router;
