'use client'

import Image from 'next/image'
import React, { useState } from 'react'


function Bookmark({id}) {
    const savedItems = JSON.parse(window.localStorage.getItem('saved')) || [];
    const [isSaved, setSaved] = useState(savedItems?.includes(id))
    
    const handleClick = ()=>{
        const savedItems = JSON.parse(window.localStorage.getItem('saved')) || [];

        if(isSaved){
            let newSavedItems = savedItems.filter((savedId,i)=> savedId!==id)
            window?.localStorage?.setItem('saved', JSON.stringify(newSavedItems))
            setSaved(false);
        } else {
            const newSavedItems = [...savedItems, id];
            window.localStorage.setItem('saved', JSON.stringify(newSavedItems));
            setSaved(true);
        }
    }

    return (
        <div onClick={handleClick} className='cursor-pointer absolute right-0 top-0 z-[1] rounded-bl-xl w-[45px] h-[45px] flex items-center justify-center bg-white'>
            <Image
                src={`/images/${isSaved ? 'bookmark_filled.png' : 'bookmark_empty.png'}`}
                width={25}
                height={25}
            />
        </div>
    )
}

export default Bookmark