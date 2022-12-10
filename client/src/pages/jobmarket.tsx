import type { NextPage } from 'next'
import { FaSistrix } from 'react-icons/fa'
import { useState } from 'react'
import QueryItems from '../components/queryItems'
import Protected from '../components/Protected'
import Searchhints from '../components/Searchhints'
import ListTweet from '../components/ListTweet'
import Filter from '../components/Filter'
import useFetchTweet from '../hooks/useFetchTweet'
import Spinner from '../utility/spinner'
import ErrorTemplate from '../utility/error'



const Jobmarket: NextPage = () => {

    const [search, setSearch] = useState<string>('');
    const [queryItems, setQueryItems] = useState<string[]>([]);
    const [page, setPage] = useState<number>(0);
    const [nextLoading, setNextLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string[]>([]);
    const { tweets, token, setToken, loading, error } = useFetchTweet({ queryItems, page, nextLoading, setNextLoading, filter });



    const handleSubmit = (search: string) => {
        if (search.trim().length === 0) return alert('field cannot be empty');


        if (queryItems.length >= 5) return alert('Remove a item from the search');

        if (!queryItems.find((query) => query === search.trim())) {

            if (token) {
                setToken(null);
            }
            setQueryItems([...queryItems, search.trim()])
            setSearch('');
        }

    }





    return (
        <>
            <Protected>
                <div className='py-8'>
                    <main>
                        <div className='bg-violet-main py-4'>
                            <p className='text-center py-4 text-grey-main font-bold'>Search for the jobs you love ❤</p>
                            <div className='relative w-3/4 lg:w-1/3 z-9 mx-auto'>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit(search)
                                }} className='flex'>
                                    <input value={search} onChange={(e) => setSearch(e.target.value)} className='bg-grey-main rounded-l outline-none px-3 py-2 w-full' type='text' placeholder='Search for skill, techstack..' />
                                    <button className='bg-orange-main px-4 rounded-r py-2'>
                                        <FaSistrix style={{ color: '#F5F5F5', fontSize: '1.2rem' }} />
                                    </button>
                                </form>
                                {search !== '' && <Searchhints search={search} handleSubmit={handleSubmit} />}
                            </div>
                            <QueryItems queryItems={queryItems} setQueryItems={setQueryItems} />
                        </div>
                        {/* Filter */}
                        <Filter filter={filter} setFilter={setFilter} token={token} setToken={setToken} />
                        {
                            loading && <div className='flex justify-center items-center py-4'><Spinner color="#F29393" fontSize="2rem" /></div>
                        }
                        {
                            error && <ErrorTemplate message={error} />
                        }
                        <ListTweet token={token} page={page} setPage={setPage} list={tweets} nextLoading={nextLoading} setNextLoading={setNextLoading} />

                    </main>
                </div>
            </Protected>
        </>
    )

}

export default Jobmarket