"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    notificationEnabled: {
        type: Boolean,
        default: false,
    },
    notificationEmail: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
});
const user = mongoose_1.default.model("user", schema);
exports.default = user;
