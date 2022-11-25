import { TwitterTweetEmbed } from "react-twitter-embed"
import { FaRegBookmark } from 'react-icons/fa'
import { HiOutlineShare } from 'react-icons/hi'


export default function Tweet({ id }: { id: string }) {
    console.log(id);
    return (
        <div className='inline-block w-full border-2 border-grey-secondary rounded-md p-4 mb-8'>
            <button className='flex items-center border-2 border-grey-secondary rounded-md py-1 px-2 gap-1 float-right my-2 hover:bg-grey-main'>
                <FaRegBookmark style={{ fontSize: '0.8rem' }} />
                <span className='text-xs'>Bookmark</span>
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