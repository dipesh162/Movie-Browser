'use client'

import React from 'react'

function SearchBar({handleSearch}) {
  return (
        <input type="text" className='w-full border-[1px] border-[#000] rounded-md' onInput={(e)=>handleSearch(e)}/>
  )
}

export default SearchBar