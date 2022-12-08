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
const apiFetch_1 = __importDefault(require("../../utils/apiFetch"));
const cleanSearchData_1 = require("../../utils/cleanSearchData");
const funcs = {
    searchJob: (search, filter, next_token) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tweetQuery = `("we are hiring" OR "is hiring" OR "we are looking for" OR "i am looking for") ${search} ${filter} -flatmate -roommate -something -sex lang:en -is:retweet`;
            const baseURL = `https://api.twitter.com/2/tweets/search/recent?query=${tweetQuery}`;
            const url = next_token
                ? baseURL + `&next_token=${next_token}`
                : baseURL;
            const response = yield (0, apiFetch_1.default)(url);
            if (!response.errors && response.meta.result_count !== 0) {
                // find if the tweet contains url & append them to the result
                const d = (0, cleanSearchData_1.removeFields)(response.data);
                const data = (0, cleanSearchData_1.findUrlAndAppend)(d);
                return {
                    error: false,
                    status: 200,
                    message: "successfully fetched",
                    data: {
                        data,
                        next_token: response.meta.next_token,
                    },
                };
            }
            return {
                error: true,
                status: 404,
                message: "No Data found",
            };
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }),
};
exports.default = funcs;
