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
const firebase_1 = __importDefault(require("../config/firebase"));
const user_1 = __importDefault(require("../controllers/v1/user"));
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        const decodedToken = yield firebase_1.default.auth().verifyIdToken(token);
        if (decodedToken) {
            const userId = decodedToken.firebase.identities["twitter.com"][0];
            const user = yield user_1.default.findOrCreate(userId);
            req.user = user;
            return next();
        }
        res.status(401).json({ error: false, message: "Unauthorized" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: true, message: "Server error!" });
    }
});
exports.default = authMiddleware;
