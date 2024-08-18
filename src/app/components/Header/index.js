'use client'

import React from 'react'
import SearchBar from '../SearchBar'
import genresFilters from '@/app/static/genresFilters'
import typeFilters from '@/app/static/typeFilters'
import sortFilters from '@/app/static/sortFilters'
import yearFilters from '@/app/static/YearFilters'

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
                    Type: 
                    <select onChange={handleChange}>
                        { typeFilters.map((type,i)=>(
                            <option key={i} name='TYPE' value={type}>{type}</option>
                        ))
                        }
                    </select>
                </div>
                <div className='flex'>
                    Sort: 
                    <select onChange={handleChange}>
                        { sortFilters.map((filter,i)=>(
                            <option key={i} name='SORT' value={filter}>{filter}</option>
                        ))
                        }
                    </select>
                </div>
                <div className='flex'>
                    Year: 
                    <select onChange={handleChange}>
                        { yearFilters.map((year,i)=>(
                            <option key={i} name='YEAR' value={year}>{year}</option>
                        ))
                        }
                    </select>
                </div>
                <div className='flex'>
                    Genre: 
                    <select onChange={handleChange}>
                        { genresFilters.map((genre,i)=>(
                            <option key={i} name='GENRE_ID' value={genre.id}>{genre.name}</option>
                        ))
                        }          
                    </select>
                </div>
            </div>
        </>
  )
}

export default Header