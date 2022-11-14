import { MdClear } from 'react-icons/md'


interface QueryItemsProp {
    queryItems: string[];
    setQueryItems: (type: string[]) => void;
}

export default function QueryItems({ queryItems, setQueryItems }: QueryItemsProp) {


    const handleRemoveQuery = (query: string) => {
        const filteredArray = queryItems.filter((item) => item !== query);
        setQueryItems(filteredArray);
    }
    return queryItems.length > 0 ? (
        <div className='flex flex-wrap justify-center space-x-2'>
            {
                queryItems.map((query) => <div className='flex items-center rounded-full bg-orange-light my-2' key={query}>
                    <span className='px-3'>{query}</span>
                    <MdClear className='mx-2 cursor-pointer text-lg' onClick={() => handleRemoveQuery(query)} />
                </div>)
            }
        </div>
    ) : null
}