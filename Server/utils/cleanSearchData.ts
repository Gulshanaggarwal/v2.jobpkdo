//  function to to return array of urls if exists
const detectURLs = (text: string) => {
	const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
	return text.match(urlRegex);
};

type dataType = {
	id: string;
	text?: string;
	edit_history_tweet_ids?: string[];
	applyUrl?: string;
};

// function to remove edit_history_tweet_ids field

const removeFields = (data: dataType[]) => {
	data.forEach((object) => {
		delete object["edit_history_tweet_ids"];
	});
	return data;
};

// function to remove find and append applyURL and remove text field

const findUrlAndAppend = (data: dataType[]) => {
	const newData = data.map((object) => {
		const res = detectURLs(object.text as string);
		delete object["text"]; // delete text property;
		if (res && res.length > 0) {
			object.applyUrl = res[0];
			return object;
		}
		object.applyUrl = `https://twitter.com/twitter/status/${object.id}`;
		return object;
	});
	return newData;
};

export { removeFields, findUrlAndAppend };
