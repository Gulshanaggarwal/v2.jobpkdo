import { BiLoaderAlt } from 'react-icons/bi'

interface Spinner {
    color: string;
    fontSize: string;
}


export default function Spinner({ color, fontSize }: Spinner) {
    return (
        <BiLoaderAlt className='motion-safe:animate-spin' style={{ color, fontSize }} />
    )
}