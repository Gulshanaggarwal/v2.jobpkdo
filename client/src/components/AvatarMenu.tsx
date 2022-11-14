import Link from 'next/link'
import { useAuthContext } from '../context/AuthContext';


interface AvatarMenuProp {
    active: boolean;
    setActive: (type: boolean) => void;
}



export default function AvatarMenu({ active, setActive }: AvatarMenuProp) {

    const { logout } = useAuthContext();
    return active ? (
        <div className='absolute -top-5 -right-5 w-screen' onClick={() => setActive(!active)}>
            <div className='absolute bg-grey-main rounded-sm top-20 right-6 w-36 shadow-md'>
                <div className='px-4 py-2 hover:bg-grey-secondary'>
                    <Link href='/jobmarket'>Job Market</Link>
                </div>
                <div className='px-4 py-2 hover:bg-grey-secondary'>
                    <Link href='/saved-jobs'>Saved Jobs</Link>
                </div>
                <div className='px-4 py-2 hover:bg-grey-secondary'>
                    <Link href='/Settings'>Settings</Link>
                </div>
                <div className='px-4 py-2 hover:bg-grey-secondary block'>
                    <button onClick={() => logout()}>Logout</button>
                </div>
            </div>
        </div>
    ) : null
}