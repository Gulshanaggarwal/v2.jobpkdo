import React from 'react';
import { MdOutlineRefresh } from 'react-icons/md'

interface FilterProp {
    filter: string[];
    setFilter: (type: string[]) => void;
}

export default function Filter({ filter, setFilter }: FilterProp) {

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {

        const { value, checked } = e.target as HTMLInputElement;

        if (checked) {
            setFilter([...filter, value]);
            return;
        }
        setFilter(filter.filter((ele) => ele !== value))
    }


    return (
        <div className='flex justify-between px-5'>
            <div className='space-y-2 py-4'>
                <div className='space-x-3'>
                    <input type='checkbox' name='type' value='full-time' onClick={handleClick} />
                    <label>Full-Time</label>
                </div>
                <div className='space-x-3'>
                    <input type='checkbox' name='type' value='part-time' onClick={handleClick} />
                    <label>Part-Time</label>
                </div>
                <div className='space-x-3'>
                    <input type='checkbox' name='type' value='intern' onClick={handleClick} />
                    <label>Intern</label>
                </div>
            </div>
            <div className='flex items-center self-end hover:underline cursor-pointer text-orange-main'>
                <MdOutlineRefresh />
                reset
            </div>

        </div>
    )
}