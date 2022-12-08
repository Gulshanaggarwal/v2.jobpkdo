"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true,
    },
    tweetId: {
        type: String,
        required: true,
    },
    applyUrl: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const bookmark = mongoose_1.default.model("bookmark", schema);
exports.default = bookmark;
