"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jobSchema = new mongoose_1.default.Schema({
    tweetId: {
        type: String,
        required: true,
        unique: true,
    },
});
const schema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    jobs: {
        type: [jobSchema],
        required: true,
    },
});
const dailyMailReminder = mongoose_1.default.model("dailyMailReminder", schema);
exports.default = dailyMailReminder;
