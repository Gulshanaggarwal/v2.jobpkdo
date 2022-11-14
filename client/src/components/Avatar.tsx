import Image from 'next/image';
import AvatarMenu from './AvatarMenu';
import { useState } from 'react';



export default function Avatar({ url }: { url: string }) {

    const [active, setActive] = useState<boolean>(false);

    return (
        <div className='avatar cursor-pointer relative' onClick={() => setActive(!active)}>
            <div className='w-12 rounded-full'>
                <Image src={url} alt='avatar' width='100%' height='100%' />
            </div>
            <AvatarMenu active={active} setActive={setActive} />
        </div>
    )
}