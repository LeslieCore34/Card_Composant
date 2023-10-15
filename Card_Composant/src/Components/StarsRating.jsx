import React from 'react';
import ReactStars from 'react-stars';

function StarsRating({ count, onChange, size, color2 }) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }

    return (
        <div className='stars-container'>
            <p id="rating">Rate this album</p>
            <ReactStars
                count={count}
                onChange={ratingChanged}
                size={size}
                color2={color2}
            />
        </div>
    );
}

export default StarsRating;
