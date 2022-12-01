import React, { useState } from 'react';
import { MdOutlineRefresh } from 'react-icons/md'

interface FilterProp {
    filter: string[];
    setFilter: (type: string[]) => void;
}

type Filter = {
    fulltime: boolean,
    parttime: boolean,
    intern: boolean
}

export default function Filter({ filter, setFilter }: FilterProp) {

    const [filterState, setFilterState] = useState<Filter>({
        fulltime: false,
        parttime: false,
        intern: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value, checked } = e.target as HTMLInputElement;
        const values = { ...filterState };
        values[name as keyof Filter] = checked;
        setFilterState({ ...values });

        if (checked) {
            setFilter([...filter, value])
        }
        else {
            const filtered = filter.filter((ele) => ele !== value)
            setFilter(filtered);
        }

    }

    const handleReset = () => {
        if (filter.length !== 0) {
            setFilter([]);
            setFilterState({
                fulltime: false,
                parttime: false,
                intern: false
            })
        }
    }


    return (
        <div className='flex justify-between px-5'>
            <div className='space-y-2 py-4'>
                <div className='space-x-3'>
                    <input type='checkbox' name='fulltime' value="full-time" checked={filterState.fulltime} onChange={handleChange} />
                    <label>Full-Time</label>
                </div>
                <div className='space-x-3'>
                    <input type='checkbox' name='parttime' value="part-time" checked={filterState.parttime} onChange={handleChange} />
                    <label>Part-Time</label>
                </div>
                <div className='space-x-3'>
                    <input type='checkbox' name='intern' value="intern" checked={filterState.intern} onChange={handleChange} />
                    <label>Intern</label>
                </div>
            </div>
            <button onClick={handleReset} className='flex items-center self-end hover:underline cursor-pointer text-orange-main'>
                <MdOutlineRefresh />
                reset filters
            </button>

        </div>
    )
}