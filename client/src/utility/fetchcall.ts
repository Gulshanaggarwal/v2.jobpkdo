interface Response {
	error: boolean;
	message: string;
	data?: any;
	status: number;
}

const fetchCall = async (
	url: string,
	token: string | undefined,
	method: string,
	body?: string
): Promise<Response> => {
	const headers = {
		Authorization: "Bearer " + token,
	};

	let res: globalThis.Response | undefined;
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
		return { error: true, message: "error occurred", status: 500 };
	}
};

export default fetchCall;
