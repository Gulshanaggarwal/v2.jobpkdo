"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const search_1 = __importDefault(require("../../controllers/v1/search"));
const router = express_1.default.Router();
router.route("/").get(search_1.default.searchJob);
exports.default = router;
