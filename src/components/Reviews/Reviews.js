import React, { useEffect, useState } from 'react';
import Review from './Review';
import API_BASE from '../../api';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`${API_BASE}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    
    return (
        <section className="bg-slate-50/50 py-20 border-t border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
                        What Our Clients Say
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {reviews.map((review, index) => (
                        <Review key={review._id || index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;