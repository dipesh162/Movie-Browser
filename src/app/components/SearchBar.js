'use client';

import React, { useEffect, useRef } from 'react'


function SearchBar({handleSearch}) {
    const inputRef = useRef()
    useEffect(()=>{
        inputRef?.current?.focus()
    },[])


    return (
        <input ref={inputRef} type="text" name='QUERY' className='p-3 w-full border-[1px] border-[#000] rounded-xl' onInput={(e)=>handleSearch(e)}/>
    )
}

export default SearchBar