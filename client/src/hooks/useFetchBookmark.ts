import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import fetchCall from "../utility/fetchcall";

export default function useFetchBookmark(page: number) {
	const [data, setData] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [nextLoading, setNextLoading] = useState(false);
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchBookmarks = async () => {
			const url = `http://localhost:5000/api/v1/bookmark?page=${page}`;
			const response = await fetchCall(url, user?.token, "GET");
			console.log("res", response);
			if (loading) {
				setLoading(false);
			}
			if (nextLoading) {
				setNextLoading(false);
			}

			if (!response.error) {
				setData([...data, ...response.data]);
				return;
			}
			setError(response.message);
		};
		fetchBookmarks();
	}, [page]);

	return { data, error, loading, nextLoading, setNextLoading };
}
