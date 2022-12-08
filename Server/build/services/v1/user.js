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
const user_1 = __importDefault(require("../../schema/user"));
const funcs = {
    // fetch user
    fetchUser: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield user_1.default
                .findOne({ userId }, "userId notificationEnabled notificationEmail notificationInterval")
                .exec();
            if (data) {
                return {
                    error: false,
                    status: 200,
                    message: "User fetched",
                    data,
                };
            }
            return { error: true, status: 404, message: "User not found" };
        }
        catch (error) {
            throw error;
        }
    }),
    // update User
    updateUser: (userId, updateItem) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const query = { userId };
            const data = yield user_1.default.findOneAndUpdate(query, updateItem, {
                new: true,
            });
            return {
                error: false,
                status: 200,
                message: "User settings updated",
                data,
            };
        }
        catch (error) {
            throw error;
        }
    }),
};
exports.default = funcs;
