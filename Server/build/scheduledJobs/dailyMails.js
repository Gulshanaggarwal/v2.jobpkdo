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
const node_cron_1 = __importDefault(require("node-cron"));
const dailyMailReminder_1 = __importDefault(require("../schema/dailyMailReminder"));
const user_1 = __importDefault(require("../schema/user"));
const mailSend_1 = __importDefault(require("../utils/mailSend"));
const funcs = {
    dailyMail: () => __awaiter(void 0, void 0, void 0, function* () {
        const task = node_cron_1.default.schedule("", () => __awaiter(void 0, void 0, void 0, function* () {
            // task logic
            try {
                const data = yield dailyMailReminder_1.default.find().exec();
                data.forEach((userId) => __awaiter(void 0, void 0, void 0, function* () {
                    const userData = yield user_1.default.findOne({ userId });
                    if (userData &&
                        userData.notificationEnabled &&
                        userData.notificationEmail !== "") {
                        // send mail to the user
                        (0, mailSend_1.default)();
                    }
                }));
            }
            catch (error) {
                console.log(error);
            }
        }));
        task.start();
    }),
};
exports.default = funcs;
