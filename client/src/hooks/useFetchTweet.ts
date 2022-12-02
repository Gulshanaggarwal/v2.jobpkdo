import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import fetchCall from "../utility/fetchcall";

interface useFetchTweet {
	queryItems: string[];
	page: number;
	nextLoading: boolean;
	setNextLoading: (type: boolean) => void;
	filter: string[];
}

export default function useFetchTweet({
	queryItems,
	page,
	nextLoading,
	setNextLoading,
	filter,
}: useFetchTweet) {
	const [tweets, setTweets] = useState<{ id: string }[]>([]);
	const [token, setToken] = useState<string | null>(null);
	const [isStart, setIsStart] = useState<boolean>(true);
	const [prevQueryUrl, setPrevQueryUrl] = useState<string>("");
	const { user } = useAuthContext();

	console.log("quer", queryItems);

	useEffect(() => {
		const fetchTweets = async () => {
			const baseUrl =
				`http://localhost:5000/api/v1/search?search=${queryItems.join(
					" "
				)}` +
				" " +
				`&filter=${filter.join(" ")}`;
			const url = token ? baseUrl + `&next_token=${token}` : baseUrl;
			const response = await fetchCall(url, user?.token, "GET");

			if (nextLoading) {
				setNextLoading(!nextLoading);
			}

			if (!response.error && response.status === 200) {
				if (prevQueryUrl !== baseUrl) {
					setTweets([...response.data.data]);
					setPrevQueryUrl(baseUrl);
				} else {
					setTweets([...tweets, ...response.data.data]);
				}
				if (response.data.next_token) {
					setIsStart(false);
					setToken(response.data.next_token);
					return;
				}
			}
			alert(response.message);
		};
		fetchTweets();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [queryItems, page, filter]);

	return { tweets, token, isStart };
}
