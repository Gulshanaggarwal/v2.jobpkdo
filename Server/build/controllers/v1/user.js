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
const user_2 = __importDefault(require("../../services/v1/user"));
const funcs = {
    // find or create
    findOrCreate: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield user_1.default.findOne({ userId }).exec();
            if (data) {
                return userId;
            }
            yield user_1.default.create({ userId });
            return userId;
        }
        catch (error) {
            throw error;
        }
    }),
    // Fetch User details
    fetchUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield user_2.default.fetchUser(req.user);
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
    // update User
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield user_2.default.updateUser(req.user, req.body);
            res.status(response.status).json(response);
        }
        catch (error) {
            res.status(500).json({ error: true, message: "Server error" });
        }
    }),
};
exports.default = funcs;
