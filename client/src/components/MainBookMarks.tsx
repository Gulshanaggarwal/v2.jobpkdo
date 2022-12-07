import { useContext } from "react";
import ErrorTemplate from "../utility/error";
import LoadMoreButton from "../utility/LoadmoreButton";
import Spinner from "../utility/spinner";
import { BookMarkContext } from "../context/BookMarkContext";
import Tweet from "../components/Tweet";


export default function MainBookMark() {

    const { data, page, setPage, error, loading, nextLoading, setNextLoading } = useContext(BookMarkContext);
    return (
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
                        {error ? <ErrorTemplate message={error} /> : (
                            <>
                                {
                                    data.length >= 10 ? <LoadMoreButton page={page} setPage={setPage} nextLoading={nextLoading} setNextLoading={setNextLoading} /> : null
                                }
                            </>
                        )}
                    </div>
                )
            }
        </main>

    )
}