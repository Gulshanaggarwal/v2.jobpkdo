"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../../controllers/v1/user"));
const router = express_1.default.Router();
router
    .route("/")
    .get(user_1.default.fetchUser)
    .patch(user_1.default.updateUser);
exports.default = router;
