import { TwitterTweetEmbed } from 'react-twitter-embed'
import { FaRegBookmark } from 'react-icons/fa'
import { HiOutlineShare } from 'react-icons/hi'
import { useAuthContext } from '../context/AuthContext'
import fetchCall from '../utility/fetchcall';
import { useState } from 'react'
import Spinner from '../utility/spinner';


export default function Tweet({ id }: { id: string }) {
    const [loading, setLoading] = useState<boolean>(false)
    const { user } = useAuthContext();

    const handleBookmark = async () => {
        const url = 'http://localhost:5000/api/v1/bookmark'
        const body = JSON.stringify({ tweetId: id, applyUrl: 'xyz' })
        setLoading(true);
        const response = await fetchCall(url, user?.token, 'POST', body);
        console.log(response);
        setLoading(false);
        if (!response.error) {
            alert('bookmarked successfully');
            return;
        }
        alert(response.message)
    }
    return (
        <div className='inline-block w-full border-2 border-grey-secondary rounded-md p-4 mb-8'>
            <button onClick={handleBookmark} className='flex justify-center items-center border-2 border-grey-secondary rounded-md py-1 px-2 gap-1 float-right my-2 hover:bg-grey-main w-24'>
                {loading ? <Spinner color="#F29393" fontSize="1rem" /> : (
                    <>
                        <FaRegBookmark style={{ fontSize: '0.8rem' }} />
                        <span className='text-xs'>Bookmark</span>
                    </>
                )}
            </button>
            <TwitterTweetEmbed tweetId={id} />
            <div className='flex space-x-2'>
                <button className='w-full bg-orange-main text-grey-main font-bold rounded-md py-2'>Apply</button>
                <button className='p-2 border-2 border-orange-main rounded-md'>
                    <HiOutlineShare />
                </button>
            </div>
        </div>
    )
}