import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://immense-shore-60421.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h1 className='text-center text-5xl hover:underline font-bold mt-12 mb-2'>Reviews</h1>
            <div className="flex justify-center">
                <div className='grid grid-cols-1 lg:grid-cols-3 my-12 gap-5'>
                    {
                        reviews.map((review, index) => <Review key={index} review={review}></Review>)
                    }
                </div >
            </div>
        </div>
    );
};

export default Reviews;