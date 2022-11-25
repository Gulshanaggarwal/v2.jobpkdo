import Tweet from "./Tweet"
import Spinner from '../utility/spinner'

interface ListTweet {
    list: { id: string }[];
    count: number;
    setCount: (type: number) => void;
    isStart: boolean;
    token: string | null;
    nextLoading: boolean;
    setNextLoading: (type: boolean) => void;
}


export default function ListTweet({ list, count, setCount, isStart, token, nextLoading, setNextLoading }: ListTweet) {

    const handleClick = () => {
        setNextLoading(true);
        setCount(count + 1);
    }


    return <div className='py-4 px-4'>
        <div className='columns-3 gap-6'>
            {list.map((tweet) => <Tweet key={tweet.id} id={tweet.id} />)}
        </div>
        {(!isStart && token) && <button onClick={handleClick} disabled={nextLoading} className='flex items-center justify-center w-full rounded-md bg-violet-main text-grey-main font-bold py-2'>
            {
                nextLoading ? <Spinner color="#F5F5F5" fontSize="1rem" /> : 'Load more...'
            }
        </button>}
    </div>
}