import { FaSpinner } from 'react-icons/fa'

interface Spinner {
    color: string;
    fontSize: string;
}


export default function Spinner({ color, fontSize }: Spinner) {
    return (
        <FaSpinner className='animate-spin' style={{ color, fontSize }} />
    )
}