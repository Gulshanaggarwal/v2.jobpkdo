const detectURLs = (text) => {
	const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
	return text.match(urlRegex);
};

const removeFields = (data) => {
	data.forEach((object) => {
		delete object["edit_history_tweet_ids"];
	});
	return data;
};

const findUrlAndAppend = (data) => {
	console.log("data", data);
	const newData = data.map((object) => {
		const res = detectURLs(object.text);
		delete object["text"]; // delete text property;
		if (res && res.length > 0) {
			object.applyUrl = res[0];
			return object;
		}
		object.applyUrl = `https://twitter.com/twitter/status/${object.id}`;
		return object;
	});
	console.log(newData);
	return newData;
};

export { removeFields, findUrlAndAppend };
