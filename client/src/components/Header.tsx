import useModal from '../hooks/useModal';
import Modal from './Modal';
import SignIn from './Signin';
import { FaSpinner } from 'react-icons/fa'
import Avatar from './Avatar';
import { useAuthContext } from '../context/AuthContext';
import Spinner from '../utility/spinner';



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
            {loading ? <Spinner color="#F29393" fontSize="1rem" /> : (!user ? <button onClick={toggle} className='bg-violet-main text-grey-main rounded-full px-4 py-2 text-xs'>Sign in</button> :
                <Avatar url={user.avatar} />)}

            <Modal isShowing={isShowing} toggle={toggle} Component={SignIn} />
        </header>
    )
}