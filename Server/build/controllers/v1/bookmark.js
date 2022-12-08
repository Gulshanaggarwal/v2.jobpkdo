"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookmark_1 = __importDefault(require("../../services/v1/bookmark"));
const funcs = {
    // insert via Endpoint
    insertViaEndpoint: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { tweetId, applyUrl } = req.body;
            const response = yield bookmark_1.default.insertJob(req.user, tweetId, applyUrl);
            res.status(response.status).json(response);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                status: 500,
                message: "Server error",
            });
        }
    }),
    // fetch bookmarks
    fetchBookmarks: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield bookmark_1.default.fetchBookmarks(req.user, req.query.page);
            res.status(response.status).json(response);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                status: 500,
                message: "Server error",
            });
        }
    }),
    removeBookmark: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield bookmark_1.default.removeBookmark(req.body.tweetId);
            res.status(response.status).json(response);
        }
        catch (error) {
            res.status(500).json({
                error: true,
                status: 500,
                message: "Server error",
            });
        }
    }),
};
exports.default = funcs;
