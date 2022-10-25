import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import SignIn from "../Signin";



export default function Header() {
    const { isShowing, toggle } = useModal();
    return (
        <header className='bg-grey-main flex justify-between items-center px-5 py-4'>
            <h1 className='font-extrabold'>
                <span className='text-orange-main'>JOB</span>
                <span className='text-black-main'>PKDO</span>
            </h1>
            <button onClick={toggle} className='bg-violet-main text-grey-main rounded-full px-3 py-1 text-xs'>Signin</button>
            <Modal isShowing={isShowing} toggle={toggle} Component={SignIn} />
        </header>
    )
}