import Spinner from "./spinner"

type LoadMoreButtonProps = {
    page: number;
    setPage: (type: number) => void;
    nextLoading: boolean;
    setNextLoading: (type: boolean) => void;

}

export default function LoadMoreButton({ page, setPage, nextLoading, setNextLoading }: LoadMoreButtonProps) {

    const handleClick = () => {
        setNextLoading(true);
        setPage(page + 1);
    }

    return (
        <button onClick={handleClick} disabled={nextLoading} className='flex items-center justify-center w-full rounded-md bg-violet-main text-grey-main font-bold py-2'>
            {
                nextLoading ? <Spinner color="#F5F5F5" fontSize="1rem" /> : 'Load more...'
            }
        </button>
    )
}