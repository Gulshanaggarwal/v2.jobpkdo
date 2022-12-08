"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookmark_1 = __importDefault(require("../../controllers/v1/bookmark"));
const router = express_1.default.Router();
router
    .route("/")
    .post(bookmark_1.default.insertViaEndpoint)
    .get(bookmark_1.default.fetchBookmarks)
    .patch(bookmark_1.default.removeBookmark);
exports.default = router;
