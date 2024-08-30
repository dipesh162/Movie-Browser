'use client';

import React, { useState } from 'react'
import SearchBar from '../SearchBar'
import genresFilters from '@/app/static/genresFilters'
import typeFilters from '@/app/static/typeFilters'
import sortFilters from '@/app/static/sortFilters'
import yearFilters from '@/app/static/YearFilters'
import RatingSlider from './RatingSlider';

function Header({filters, handleFilter}) {

    const handleChange = (e) =>{
        const selectedOption = e.target.selectedOptions[0]
        const optionValue = selectedOption.getAttribute('value')
        const optionName = selectedOption.getAttribute('name')
        handleFilter(optionName, optionValue)
    }

    const handleMovieSearch = (e) =>{
        const optionValue = e.target.value
        const optionName = e.target.name
        handleFilter(optionName,optionValue)
    }

    const handleRatingChange = (optionName, minRating, maxRating) => {

        handleFilter(optionName,minRating)
        handleFilter(optionName,maxRating)
    };

    return (
        <nav className='flex flex-col gap-6 sticky top-0 z-[10] bg-white py-4' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
            <div className='flex gap-4 items-center'>
                <div className='flex-1'>
                    <SearchBar
                        handleSearch={handleMovieSearch}
                    />
                </div>
            </div>

            <div className='max-w-[1200px] m-auto'>
                <div className='flex-1 flex gap-4 flex-wrap'>
                    <div className='flex gap-2 items-center'>
                        <label className='font-semibold' htmlFor="type-filter">Type: </label>
                        <select className='cursor-pointer py-1 px-2 border-[1px] border-gray-400' id="type-filter" value={filters.TYPE ?? 'movie'} onChange={handleChange}>
                            {typeFilters.map((type, i) => (
                                <option key={i} name='TYPE' value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <label className='font-semibold' htmlFor="sort-filter">Sort: </label>
                        <select className='cursor-pointer py-1 px-2 border-[1px] border-gray-400' id="sort-filter" value={filters.SORT ?? 'popular'} onChange={handleChange}>
                            {sortFilters.map((filter, i) => (
                                <option key={i} name='SORT' value={filter}>{filter}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <label className='font-semibold' htmlFor="year-filter">Year: </label>
                        <select className='cursor-pointer py-1 px-2 border-[1px] border-gray-400' id="year-filter" value={filters.YEAR ?? Math.max(...yearFilters)} onChange={handleChange}>
                            {yearFilters.map((year, i) => (
                                <option key={i} name='YEAR' value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <label className='font-semibold' htmlFor="genre-filter">Genre: </label>
                        <select className='cursor-pointer py-1 px-2 border-[1px] border-gray-400' id="genre-filter" value={filters.GENRE_ID ?? 'Action'} onChange={handleChange}>
                            {genresFilters.map((genre, i) => (
                                <option key={i} name='GENRE_ID' value={genre.id}>{genre.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <RatingSlider filters={filters} onRatingChange={handleRatingChange} />
            </div>

        </nav>
  )
}

export default Header