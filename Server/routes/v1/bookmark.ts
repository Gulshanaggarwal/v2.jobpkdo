import express from "express";
import bookmarkController from "../../controllers/v1/bookmark";

const router = express.Router();

router
	.route("/")
	.post(bookmarkController.insertViaEndpoint)
	.get(bookmarkController.fetchBookmarks)
	.patch(bookmarkController.removeBookmark);

export default router;
