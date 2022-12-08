"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterTweets = (data) => {
    const nonRepeated = [
        ...new Set(data.map((ele) => JSON.stringify(ele))),
    ].map((string) => JSON.parse(string));
    return nonRepeated;
};
exports.default = filterTweets;
