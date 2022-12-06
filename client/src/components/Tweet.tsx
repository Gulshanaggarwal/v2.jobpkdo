import { TwitterTweetEmbed } from 'react-twitter-embed'
import { HiOutlineShare } from 'react-icons/hi'
import { useRouter } from 'next/router';
import BookmarkButton from './bookMarkButton';
import RemoveButton from './removeButton';


type TweetProps = {
    id: string
}

export default function Tweet({ id }: TweetProps) {
    const router = useRouter();


    return (
        <div className='inline-block w-full border-2 border-grey-secondary rounded-md p-4 mb-8'>
            {router.pathname !== '/bookmarks' ? <BookmarkButton tweetId={id} /> : <RemoveButton tweetId={id} />}
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