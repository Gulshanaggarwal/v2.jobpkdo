import Spinner from "../utility/spinner";
import { FaRegBookmark } from 'react-icons/fa'
import fetchCall from '../utility/fetchcall'
import { useState } from 'react'
import { useAuthContext } from "../context/AuthContext";

type BookmarkButtonProps = {
    tweetId: string
}


export default function BookmarkButton({ tweetId }: BookmarkButtonProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useAuthContext();

    const handleClick = async () => {
        const url = 'http://localhost:5000/api/v1/bookmark'
        const body = JSON.stringify({ tweetId, applyUrl: 'xyz' });

        setLoading(true);
        const response = await fetchCall(url, user?.token, "POST", body);
        setLoading(false);
        if (!response.error) {
            alert('bookmarked successfully');
            return;
        }
        alert(response.message)

    }
    return (
        <button onClick={handleClick} className='flex justify-center items-center border-2 border-grey-secondary rounded-md py-1 px-2 gap-1 float-right my-2 hover:bg-green-700 hover:text-grey-main w-24'>
            {loading ? <Spinner color="#F5F5F5" fontSize="1rem" /> : (
                <>
                    <FaRegBookmark style={{ fontSize: '0.8rem' }} />
                    <span className='text-xs'>Bookmark</span>
                </>
            )}
        </button>
    )
}