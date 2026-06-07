import React from 'react';


const Review = ({ review }) => {

    const { name, text, comment, rate, rating } = review;
    const displayComment = text || comment || '';
    const displayRating = rate || rating || 0;
    return (
        <div className="card w-96 bg-teal-500 text-primary-content">
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">Client Name: {name}</h2>
                <h2 className="card-title text-2xl font-sans">Statement : {displayComment}</h2>
                <p>Given ratings : {displayRating}</p>

            </div>
        </div>
    );
};

export default Review;