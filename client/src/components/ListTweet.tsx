import Tweet from "./Tweet"
import LoadMoreButton from "../utility/LoadmoreButton";

interface ListTweet {
    list: { id: string }[];
    page: number;
    setPage: (type: number) => void;
    isStart: boolean;
    token: string | null;
    nextLoading: boolean;
    setNextLoading: (type: boolean) => void;
}


export default function ListTweet({ list, page, setPage, isStart, token, nextLoading, setNextLoading }: ListTweet) {



    return <div className='py-4 px-4'>
        <div className='columns-1 gap-6 sm:columns-2 lg:columns-3 3xl:columns-4'>
            {list.map((tweet) => <Tweet key={tweet.id} id={tweet.id} />)}
        </div>
        {(!isStart && token) && <LoadMoreButton page={page} setPage={setPage} nextLoading={nextLoading} setNextLoading={setNextLoading} />}
    </div>
}