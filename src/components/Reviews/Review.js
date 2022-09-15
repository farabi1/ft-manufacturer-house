import React from 'react';


const Review = ({ review }) => {

    const { name, text, rate } = review;
    return (
        <div className="card w-96 bg-teal-500 text-primary-content">
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">Client Name: {name}</h2>
                <h2 className="card-title text-2xl font-sans">Statement : {text}</h2>
                <p>Given ratings : {rate}</p>

            </div>
        </div>
    );
};

export default Review;