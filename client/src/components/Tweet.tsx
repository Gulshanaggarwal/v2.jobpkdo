import { TwitterTweetEmbed } from 'react-twitter-embed'
import ShareButton from './ShareButton';
import { useRouter } from 'next/router';
import BookmarkButton from './bookMarkButton';
import RemoveButton from './removeButton';



type TweetProps = {
    id: string,
    applyUrl: string;
}

export default function Tweet({ id, applyUrl }: TweetProps) {
    const router = useRouter();


    return (
        <div className='inline-block w-full border-1 border-grey-secondary rounded-md p-4 mb-8'>
            {router.pathname !== '/bookmarks' ? <BookmarkButton tweetId={id} /> : <RemoveButton tweetId={id} />}
            <TwitterTweetEmbed tweetId={id} />
            <div className='flex space-x-2'>
                <a href={applyUrl} target="_blank" rel='noreferrer' className='w-full bg-orange-main text-grey-main font-bold rounded-md py-2 text-center'>Apply</a>
                <ShareButton applyUrl={applyUrl} />
            </div>
        </div>
    )
}