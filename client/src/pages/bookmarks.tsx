import useFetchBookmark from "../hooks/useFetchBookmark"
import { useState } from "react";
import Tweet from "../components/Tweet";
import ErrorTemplate from "../utility/error";
import Protected from "../components/Protected";
import LoadMoreButton from "../utility/LoadmoreButton";
import Spinner from "../utility/spinner";


export default function Bookmarks() {
    const [page, setPage] = useState<number>(1);
    const { data, error, loading, nextLoading, setNextLoading } = useFetchBookmark(page);
    return (
        <Protected>
            <main className='p-4'>
                <h3 className='text-center font-extrabold text-xl py-16'>Find your all saved jobs here 🚀</h3>
                {/* List tweets */}
                {loading && <Spinner color="#F29393" fontSize="2rem" />}
                {(error && page === 1) && <ErrorTemplate message={error} />}
                {
                    data.length > 0 && (
                        <div>
                            <div className='grid grid-cols-3 gap-8'>
                                {
                                    data.map((tweet) => <Tweet key={tweet.tweetId} id={tweet.tweetId} />)
                                }
                            </div>
                            {error ? <ErrorTemplate message={error} /> : <LoadMoreButton page={page} setPage={setPage} nextLoading={nextLoading} setNextLoading={setNextLoading} />}
                        </div>
                    )
                }
            </main>
        </Protected>
    )
}