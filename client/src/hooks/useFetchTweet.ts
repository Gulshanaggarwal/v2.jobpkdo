import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

interface useFetchTweet {
	queryItems: string[];
	count: number;
	nextLoading: boolean;
	setNextLoading: (type: boolean) => void;
	filter: string[];
}

export default function useFetchTweet({
	queryItems,
	count,
	nextLoading,
	setNextLoading,
	filter,
}: useFetchTweet) {
	const [tweets, setTweets] = useState<{ id: string }[]>([]);
	const [token, setToken] = useState<string | null>(null);
	const [isStart, setIsStart] = useState<boolean>(true);
	const { user } = useAuthContext();

	console.log("quer", queryItems);

	useEffect(() => {
		const fetchTweets = async () => {
			const baseUrl =
				`http://localhost:5000/api/v1/search?search=${queryItems.join(
					" "
				)}` +
				" " +
				`${filter.join(" ")}`;
			console.log(baseUrl);
			const url = token ? baseUrl + `&next_token=${token}` : baseUrl;
			try {
				const header = {
					headers: {
						Authorization: "Bearer " + user?.token,
					},
				};
				let promiseRes = await fetch(url, header);
				const response = await promiseRes.json();

				if (nextLoading) {
					setNextLoading(!nextLoading);
				}

				if (!response.error && response.status === 200) {
					setTweets([...tweets, ...response.data.data]);
					if (response.data.next_token) {
						setIsStart(false);
						setToken(response.data.next_token);
						return;
					}
				}
				throw response.message;
			} catch (error) {
				alert(error);
			}
		};
		fetchTweets();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [queryItems, count, filter]);

	return { tweets, token, isStart };
}
