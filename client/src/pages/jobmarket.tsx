import type { NextPage } from 'next'
import { FaSistrix } from 'react-icons/fa'
import { MdOutlineRefresh } from 'react-icons/md'
import { useState } from 'react'
import QueryItems from '../components/queryItems'
import Protected from '../components/Protected'

const Jobmarket: NextPage = () => {

    const [search, setSearch] = useState<string>('');
    const [queryItems, setQueryItems] = useState<string[]>([]);


    const handleSubmit = () => {
        if (search.trim().length === 0) return alert('field cannot be empty');


        if (queryItems.length > 5) return alert('Remove a item from the search');

        if (!queryItems.find((query) => query === search.trim())) {
            setQueryItems([...queryItems, search.trim()])
            setSearch('');
        }

    }



    return (
        <Protected>
            <div className='py-8'>
                <main>
                    <div className='bg-violet-main py-4'>
                        <p className='text-center py-1 text-grey-main font-bold'>Search for the jobs you love ❤</p>
                        <div className='flex justify-center py-4'>
                            <input value={search} onChange={(e) => setSearch(e.target.value)} className='bg-grey-main rounded-l outline-none p-2' type='text' placeholder='search for skill, techstack' />
                            <button onClick={handleSubmit} className='bg-orange-main px-4 rounded-r'>
                                <FaSistrix style={{ color: '#F5F5F5', fontSize: '1.2rem' }} />
                            </button>
                        </div>
                        <QueryItems queryItems={queryItems} setQueryItems={setQueryItems} />
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
        </Protected>
    )

}

export default Jobmarket