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
const bookmark_1 = __importDefault(require("../../schema/bookmark"));
const dailyMailReminder_1 = __importDefault(require("../../schema/dailyMailReminder"));
const funcs = {
    // insert job
    insertJob: (userId, tweetId, applyUrl) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield bookmark_1.default.findOne({ userId, tweetId }).exec();
            if (!data) {
                yield bookmark_1.default.create({ userId, tweetId, applyUrl });
                dailyMailReminder_1.default.create({ userId, jobs: [{ tweetId }] }, (err) => __awaiter(void 0, void 0, void 0, function* () {
                    if (err) {
                        console.log("err", err);
                        // update jobs array
                        yield dailyMailReminder_1.default.findOneAndUpdate({ userId }, { $push: { jobs: { tweetId } } }, {});
                    }
                }));
                return {
                    error: false,
                    status: 200,
                    message: "Saved successfully",
                };
            }
            return {
                error: true,
                status: 403,
                message: "You have already saved it!",
            };
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }),
    // fetch bookmarks
    fetchBookmarks: (userId, page) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const perPage = 10;
            const pageNumber = Number(page);
            if (pageNumber > 0) {
                const data = yield bookmark_1.default
                    .find({ userId, isDeleted: false })
                    .sort({ _id: -1 })
                    .select("tweetId applyUrl")
                    .skip((pageNumber - 1) * perPage)
                    .limit(perPage);
                if (data.length !== 0) {
                    return {
                        error: false,
                        status: 200,
                        message: "bookmarks fetched",
                        data,
                    };
                }
                return { error: true, status: 404, message: "No data found" };
            }
            return { error: true, status: 404, message: "No data found" };
        }
        catch (error) {
            throw error;
        }
    }),
    // Remove Bookmarks
    removeBookmark: (tweetId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(tweetId);
        try {
            const filter = { tweetId };
            const update = { isDeleted: true };
            const data = yield bookmark_1.default.findOneAndUpdate(filter, update);
            if (data) {
                return {
                    error: false,
                    status: 200,
                    message: "Removed successfully",
                };
            }
            return { error: true, status: 404, message: "No resource found" };
        }
        catch (error) {
            throw error;
        }
    }),
};
exports.default = funcs;
