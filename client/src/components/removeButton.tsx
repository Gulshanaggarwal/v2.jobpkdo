import Spinner from "../utility/spinner";
import { HiOutlineTrash } from 'react-icons/hi'
import fetchCall from '../utility/fetchcall'
import { useState, useContext } from 'react'
import { useAuthContext } from "../context/AuthContext";
import { BookMarkContext } from "../context/BookMarkContext";


type RemoveButtonProps = {
    tweetId: string
}

export default function RemoveButton({ tweetId }: RemoveButtonProps) {

    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useAuthContext();
    const { data, setData }: any = useContext(BookMarkContext)

    const handleClick = async () => {
        const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/bookmark`
        const body = JSON.stringify({ tweetId });

        setLoading(true);
        const response = await fetchCall(url, user?.token, "PATCH", body);
        setLoading(false);
        if (!response.error) {
            const filter = data.filter((ele: any) => ele.tweetId !== tweetId);
            setData(filter);
            alert('removed successfully');
            return;
        }
        alert(response.message)

    }


    return (
        <button disabled={loading ? true : false} onClick={handleClick} className='flex justify-center items-center border-1 border-grey-secondary rounded-md py-1 px-2 gap-1 float-right my-2 hover:bg-grey-secondary w-24'>
            {loading ? <Spinner color="#F29393" fontSize="1rem" /> : (
                <>
                    <HiOutlineTrash style={{ fontSize: '1rem' }} />
                    <span className='text-xs'>Remove</span>
                </>
            )}
        </button>
    )
}