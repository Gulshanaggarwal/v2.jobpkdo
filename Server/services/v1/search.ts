import apiFetch from "../../utils/apiFetch";
import { removeFields, findUrlAndAppend } from "../../utils/cleanSearchData";
const funcs = {
	searchJob: async (search: string, filter: string, next_token: string) => {
		try {
			const tweetQuery = `("we are hiring" OR "is hiring" OR "we are looking for" OR "i am looking for") ${search} ${filter} -flatmate -roommate -something -sex lang:en -is:retweet`;
			const baseURL = `https://api.twitter.com/2/tweets/search/recent?query=${tweetQuery}`;
			const url = next_token
				? baseURL + `&next_token=${next_token}`
				: baseURL;

			const response = await apiFetch(url);
			if (!response.errors && response.meta.result_count !== 0) {
				// find if the tweet contains url & append them to the result
				const d = removeFields(response.data);
				const data = findUrlAndAppend(d);
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
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
};

export default funcs;
