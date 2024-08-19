'use client';

import React, { useState } from 'react'
import SearchBar from '../SearchBar'
import genresFilters from '@/app/static/genresFilters'
import typeFilters from '@/app/static/typeFilters'
import sortFilters from '@/app/static/sortFilters'
import yearFilters from '@/app/static/YearFilters'
import RatingSlider from './RatingSlider';

function Header({handleFilter}) {

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

    // const [ratingRange, setRatingRange] = useState(5);

    // const handleRatingChange = (e) => {
    //     console.log(e.target.value)
    //     setRatingRange(e.target.value);
    //     // handleChange('RATING_RANGE', e.target.value);
    // };

    const handleRatingChange = (optionName, minRating, maxRating) => {
        // handleFilter(optionName,optionValue)
        handleFilter(optionName,minRating)
        handleFilter(optionName,maxRating)

        // setFilters(prevFilters => ({
        //     ...prevFilters,
        //     RATING_MIN: minRating,
        //     RATING_MAX: maxRating,
        // }));
    };

    return (
        <>
            <div className='flex gap-4 items-center'>
                <div className='flex-1'>
                    <SearchBar
                        handleSearch={handleMovieSearch}
                    />
                </div>
            </div>
            <div className='flex-1 flex gap-4 flex-wrap'>
                <div className='flex'>
                    <label htmlFor="type-filter">Type: </label>
                    <select id="type-filter" onChange={handleChange}>
                        {typeFilters.map((type, i) => (
                            <option key={i} name='TYPE' value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className='flex'>
                    <label htmlFor="sort-filter">Sort: </label>
                    <select id="sort-filter" onChange={handleChange}>
                        {sortFilters.map((filter, i) => (
                            <option key={i} name='SORT' value={filter}>{filter}</option>
                        ))}
                    </select>
                </div>

                <div className='flex'>
                    <label htmlFor="year-filter">Year: </label>
                    <select id="year-filter" onChange={handleChange}>
                        {yearFilters.map((year, i) => (
                            <option key={i} name='YEAR' value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div className='flex'>
                    <label htmlFor="genre-filter">Genre: </label>
                    <select id="genre-filter" onChange={handleChange}>
                        {genresFilters.map((genre, i) => (
                            <option key={i} name='GENRE_ID' value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </div>

                {/* <div className='flex'>
                    <label htmlFor="rating-filter">Rating: </label>
                    <input
                        id="rating-filter"
                        type="range"
                        min="1"
                        max="10"
                        step="0.5"
                        value={ratingRange}
                        onChange={(e) => handleRatingChange(e)}
                        name='RATING_RANGE'
                    />
                    <span>{ratingRange}</span>
                </div> */}
            </div>
            <RatingSlider onRatingChange={handleRatingChange} />

        </>
  )
}

export default Header