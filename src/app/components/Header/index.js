'use client'

import React from 'react'
import SearchBar from '../SearchBar'

function Header({handleFilter}) {

    const handleChange = (e) =>{
        const selectedOption = e.target.selectedOptions[0]
        const optionValue = selectedOption.getAttribute('value')
        const optionName = selectedOption.getAttribute('name')
        handleFilter(optionName, optionValue)
    }

    // const handleSort = (e) =>{
    //     const selectedOption = e.target.selectedOptions[0]
    //     const optionName = selectedOption.getAttribute('value')
    //     handleFilter(optionName)
    // }

    return (
        <div className='flex gap-4 items-center'>
            <div className='flex-1'>
                <SearchBar
                // handleSearch={handleMovieSearch}
                />
            </div>

            <div className='flex-1 flex'>
                <div className='flex'>
                    Type: 
                    <select onChange={handleChange}>
                        <option name='type' value='movie'>Movie</option>
                        <option name='type' value='tv'>TV</option>
                    </select>
                </div>
                <div className='flex'>
                    Sort: 
                    <select onChange={handleChange}>
                        <option name='sort' value='now_playing'>Now Playing</option>
                        <option name='sort' value='popular'>Popular</option>               
                        <option name='sort' value='top_rated'>Top Rated</option>               
                        <option name='sort' value='upcoming'>Upcoming</option>               
                    </select>
                </div>
            </div>
        </div>
  )
}

export default Header