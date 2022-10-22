import { FaTwitter } from "react-icons/fa"


export default function SignIn() {
    return (
        <>
            <input type="checkbox" checked id="signin-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gradient-to-b from-twitter_light">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='font-extrabold text-center text-xl py-4'>
                        <span className='text-orange-main'>JOB</span>
                        <span className='text-black-main'>PKDO✨</span>
                    </h1>
                    <p className='font-extrabold text-center py-4 text-black-main'>Search, Save and Share the Jobs.</p>
                    <p className='font-extrabold text-center py-1 text-black-main'>Start working Remotely.</p>
                    <button className='flex items-center bg-twitter rounded-full px-4 py-2 mx-auto my-4'>
                        <FaTwitter style={{ color: '#F5F5F5' }} />
                        <span className='text-grey-main font-bold px-2'>Login to get started</span>
                    </button>
                </div>
            </div>
        </>
    )
}