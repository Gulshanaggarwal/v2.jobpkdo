import fetch from "cross-fetch";

const apiFetch = async (url: string) => {
	const headers = {
		Authorization: "Bearer " + process.env.BEARER_TOKEN,
	};

	const response = await fetch(url, { headers });
	return await response.json();
};

export default apiFetch;
