const fetchCall = async (
	url: string,
	token: string | undefined,
	method: string,
	body?: string
) => {
	const headers = {
		Authorization: "Bearer " + token,
	};
	let res;

	try {
		if (method === "GET") {
			res = await fetch(url, { headers });
		} else if (method === "POST") {
			res = await fetch(url, {
				method,
				headers: {
					...headers,
					"Content-type": "application/json",
				},
				body,
			});
		}
		return await res?.json();
	} catch (error) {
		return { error: true, message: "error occurred" };
	}
};

export default fetchCall;
