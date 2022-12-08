const detectURLs = (text: any) => {
	const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
	return text.match(urlRegex);
};

const removeFields = (data: any) => {
	data.forEach((object: any) => {
		delete object["edit_history_tweet_ids"];
	});
	return data;
};

const findUrlAndAppend = (data: any) => {
	console.log("data", data);
	const newData = data.map((object: any) => {
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
