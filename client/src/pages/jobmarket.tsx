import type { NextPage } from 'next'
import { FaSistrix } from 'react-icons/fa'
import { MdOutlineRefresh } from 'react-icons/md'

const Jobmarket: NextPage = () => {
    return (
        <div className='py-8'>
            <main>
                <div className='bg-violet-main py-4'>
                    <p className='text-center py-1 text-grey-main font-bold'>Search for the jobs you love ❤</p>
                    <div className='flex justify-center py-4'>
                        <input className='bg-grey-main rounded-l outline-none p-2' type='text' />
                        <button className='bg-orange-main px-4 rounded-r'>
                            <FaSistrix style={{ color: '#F5F5F5', fontSize: '1.2rem' }} />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between px-5'>
                    <div className='space-y-2 py-4'>
                        <div className='space-x-3'>
                            <input type='checkbox' name='filter' />
                            <label>Full-Time</label>
                        </div>
                        <div className='space-x-3'>
                            <input type='checkbox' name='filter' />
                            <label>Part-Time</label>
                        </div>
                        <div className='space-x-3'>
                            <input type='checkbox' name='filter' />
                            <label>Internship</label>
                        </div>
                    </div>
                    <div className='flex items-center self-end hover:underline cursor-pointer text-orange-main'>
                        <MdOutlineRefresh />
                        reset filters
                    </div>

                </div>
            </main>
        </div>
    )

}

export default Jobmarket