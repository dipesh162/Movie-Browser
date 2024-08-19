import React, { useState } from 'react';
import './Slider.css';

const RatingSlider = ({ onRatingChange }) => {
    const [minRating, setMinRating] = useState(4.0);
    const [maxRating, setMaxRating] = useState(5.0);

    const handleMinChange = (e) => {
        const optionName = e.target.name
        const value = parseFloat(e.target.value);
        if (value <= maxRating) {
            setMinRating(value);
            onRatingChange(optionName, value, maxRating);
        } else {
            setMinRating(maxRating);
            onRatingChange(optionName, maxRating, maxRating);
        }
    };

    const handleMaxChange = (e) => {
        const optionName = e.target.name
        const value = parseFloat(e.target.value);
        if (value >= minRating) {
            setMaxRating(value);
            onRatingChange(optionName, minRating, value);
        } else {
            setMaxRating(minRating);
            onRatingChange(optionName, minRating, minRating);
        }
    };

    return (
        <div className="slider-container">
            <div className="slider-labels">
                <label className='font-semibold'>Min Rating: {minRating.toFixed(1)}</label>
                <label className='font-semibold'>Max Rating: {maxRating.toFixed(1)}</label>
            </div>
            <div className="sliders">
                <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="0.5" 
                    value={minRating} 
                    onChange={handleMinChange} 
                    className="slider"
                    name='RATING_MIN'
                />
                <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="0.5" 
                    value={maxRating} 
                    onChange={handleMaxChange} 
                    className="slider"
                    name='RATING_MAX'
                />
            </div>
        </div>
    );
};

export default RatingSlider;
