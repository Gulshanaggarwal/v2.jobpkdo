import fetch from "cross-fetch";

const funcs = {
	searchJob: async (
		search: string,
		filter: string,
		page: string,
		next_token: string
	) => {
		try {
			const tweetQuery = `("we are hiring" OR "is hiring" OR "we are looking for" OR "i am looking for") ${search} -flatmate -roommate -something lang:en -is:retweet`;
			const pageNumber = parseInt(page);
			const baseURL = `https://api.twitter.com/2/tweets/search/recent?query=${tweetQuery}`;
			if (pageNumber >= 1) {
				const url =
					pageNumber > 1
						? baseURL + `&next_token=${next_token}`
						: baseURL;
				const response = await fetch(url, {
					headers: {
						Authorization: "Bearer " + process.env.BEARER_TOKEN,
					},
				});

				return {
					error: false,
					status: 200,
					message: "successfully fetched",
					data: await response.json(),
				};
			}
			return {
				error: true,
				status: 400,
				message: "Page value should be greater than zero",
			};
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
};

export default funcs;
