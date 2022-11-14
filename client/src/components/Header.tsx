import useModal from '../hooks/useModal';
import Modal from './Modal';
import SignIn from './Signin';
import { FaSpinner } from 'react-icons/fa'
import Avatar from './Avatar';
import { useAuthContext } from '../context/AuthContext';



export default function Header() {
    const { isShowing, toggle } = useModal();
    const { user, loading } = useAuthContext();
    console.log(user);
    return (
        <header className='bg-grey-main flex justify-between items-center px-5 py-4'>
            <h1 className='font-extrabold'>
                <span className='text-orange-main'>JOB</span>
                <span className='text-black-main'>PKDO</span>
            </h1>
            {loading ? <FaSpinner className='animate-spin' style={{ color: '#F29393' }} /> : (!user ? <button onClick={toggle} className='bg-violet-main text-grey-main rounded-full px-3 py-1 text-xs'>Signin</button> :
                <Avatar url={user.avatar} />)}

            <Modal isShowing={isShowing} toggle={toggle} Component={SignIn} />
        </header>
    )
}