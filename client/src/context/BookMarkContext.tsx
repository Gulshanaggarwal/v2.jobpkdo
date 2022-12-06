import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import fetchCall from "../utility/fetchcall";

type BookMarkContextProviderProps = {
    children: React.ReactNode;
}

export type BookMarkContextProps = {
    data: string[];
    setData: (type: string[]) => void;
    page: number;
    setPage: (type: number) => void;
    error: string | null;
    loading: boolean;
    nextLoading: boolean;
    setNextLoading: (type: boolean) => void;
}

export const BookMarkContext = createContext<BookMarkContextProps | undefined>(undefined);



export default function BookMarkContextProvider({ children }: BookMarkContextProviderProps) {

    const [data, setData] = useState<string[]>([]);
    const [page, setPage] = useState<number>(1);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [nextLoading, setNextLoading] = useState(false);
    const { user } = useAuthContext();

    console.log("datata", data);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <BookMarkContext.Provider value={{ data, setData, page, setPage, error, loading, nextLoading, setNextLoading }}>
            {children}
        </BookMarkContext.Provider>
    )
}


export function useFetchBookMarks() {
    const context = useContext(BookMarkContext);

    if (context === undefined) throw Error('error');
    return context;

}