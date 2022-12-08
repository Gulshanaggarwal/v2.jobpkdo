import { HiOutlineShare } from 'react-icons/hi'

type shareButtonProps = {
    applyUrl: string
}


export default function ShareButton({ applyUrl }: shareButtonProps) {


    const handleShare = async () => {
        const data = {
            text: `Hey are you looking for an opportunity then don't forget to check it out👇`,
            url: applyUrl
        }
        try {
            await navigator.share(data);
        } catch (error) {
            alert("couldn't share try again!")
        }

    }
    return (
        <button onClick={handleShare} className='p-2 border-2 border-orange-main rounded-md hover:bg-orange-main'>
            <HiOutlineShare />
        </button>
    )
}