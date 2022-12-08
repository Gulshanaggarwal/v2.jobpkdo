import useSearch from "../hooks/useSearch";

interface Searchhintsprops {
    search: string;
    handleSubmit: (type: string) => void;

}


export default function Searchhints({ search, handleSubmit }: Searchhintsprops) {

    const result = useSearch(search);
    return result.length > 0 ? (
        <div className='absolute bg-grey-main top-12 w-full rounded-sm shadow-md max-h-48 overflow-x-hidden overflow-y-scroll'>
            {
                result.map((item) => <div key={item} onClick={() => handleSubmit(item)} className='text-black-secondary rounded-sm hover:bg-grey-secondary mx-2 my-2 px-2 py-2 cursor-pointer max-h-96'>{item}</div>)
            }
        </div>
    ) : null
}