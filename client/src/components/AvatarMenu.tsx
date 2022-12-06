import Link from 'next/link'
import { useAuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router'


interface AvatarMenuProp {
    active: boolean;
    setActive: (type: boolean) => void;
}

const menuLinks = [
    {
        path: '/jobmarket',
        value: 'Jobmarket'
    },
    {
        path: '/bookmarks',
        value: 'Bookmarks'
    },
    {
        path: '/settings',
        value: 'Settings'
    }
]

export default function AvatarMenu({ active, setActive }: AvatarMenuProp) {

    const { logout } = useAuthContext();
    const router = useRouter();
    console.log(router.pathname);

    return active ? (
        <div className='absolute -top-5 -right-5 w-screen h-screen' onClick={() => setActive(!active)}>
            <div className='absolute flex flex-col gap-y-1 bg-grey-main rounded-sm top-20 right-6 w-36 shadow-md'>
                {
                    menuLinks.map((ele) => <Link key={ele.value} href={ele.path}>
                        <a>
                            <div className={`px-4 py-2 hover:bg-grey-secondary ${router.pathname === ele.path ? 'border-l-4 border-violet-main bg-grey-secondary' : ''}`}>{ele.value}</div>
                        </a>
                    </Link>)
                }
                <button className='block text-left px-4 py-2' onClick={() => logout()}>Logout</button>
            </div>
        </div>
    ) : null
}