"use strict";
const removeFields = (data) => {
    data.forEach((object) => {
        delete object["edit_history_tweet_ids"];
        delete object['text'];
    });
};
