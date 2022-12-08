"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const bookmark_1 = __importDefault(require("./bookmark"));
const search_1 = __importDefault(require("./search"));
const login_1 = __importDefault(require("../../controllers/v1/login"));
const router = express_1.default.Router();
router.route("/login").get(login_1.default.login);
router.use("/user", user_1.default);
router.use("/bookmark", bookmark_1.default);
router.use("/search", search_1.default);
exports.default = router;
