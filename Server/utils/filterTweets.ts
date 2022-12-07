const filterTweets = (data) => {
	const nonRepeated = [
		...new Set(data.map((ele) => JSON.stringify(ele))),
	].map((string) => JSON.parse(string));

	return nonRepeated;
};

export default filterTweets;
