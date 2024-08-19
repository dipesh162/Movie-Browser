'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function Bookmark({ id }) {
    const [isSaved, setSaved] = useState(false);

    useEffect(() => {
        // Only runs on the client side
        const savedItems = JSON.parse(window.localStorage.getItem('saved')) || [];
        setSaved(savedItems.includes(id));
    }, [id]);

    const handleClick = () => {
        const savedItems = JSON.parse(window.localStorage.getItem('saved')) || [];

        if (isSaved) {
            const newSavedItems = savedItems.filter((savedId) => savedId !== id);
            window.localStorage.setItem('saved', JSON.stringify(newSavedItems));
            setSaved(false);
        } else {
            const newSavedItems = [...savedItems, id];
            window.localStorage.setItem('saved', JSON.stringify(newSavedItems));
            setSaved(true);
        }
    };

    return (
        <div
            onClick={handleClick}
            className='cursor-pointer absolute right-0 top-0 z-[1] rounded-bl-xl w-[45px] h-[45px] flex items-center justify-center bg-white'
        >
            <Image
                unoptimized
                src={`/images/${isSaved ? 'bookmark_filled.png' : 'bookmark_empty.png'}`}
                width={25}
                height={25}
                alt={isSaved ? 'Saved' : 'Not Saved'}
            />
        </div>
    );
}

export default Bookmark;
