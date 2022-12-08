"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const connectDB = () => {
    mongoose_1.default
        .connect(`${process.env.DB_URL}`, {
        useNewURLParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("We are ready with database"))
        .catch((err) => console.log(`Database connection error ${err}`));
};
exports.default = connectDB;
