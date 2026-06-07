import React from 'react';

const Review = ({ review }) => {
    const { name, text, comment, rate, rating } = review;
    const displayComment = text || comment || 'No comment provided.';
    const displayRating = rate || rating || 5;
    const initialLetter = name ? name.charAt(0).toUpperCase() : 'C';

    return (
        <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between max-w-sm w-full mx-auto overflow-hidden">
            {/* Decorative Quote Icon Background */}
            <div className="absolute top-6 right-8 text-slate-100 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-2.638 3.995-4.849h-4v-11h9.983zm14 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-2.638 3.996-4.849h-3.983v-11h9.983z"/>
                </svg>
            </div>

            {/* Testimonial message */}
            <div className="relative z-10 mb-6">
                {/* Stars Indicator */}
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <svg 
                                key={index} 
                                className={`w-5 h-5 ${starValue <= displayRating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        );
                    })}
                </div>
                
                <p className="text-slate-600 text-base leading-relaxed italic line-clamp-4">
                    "{displayComment}"
                </p>
            </div>

            {/* User Profile Footer section */}
            <div className="flex items-center gap-4 border-t border-slate-100 pt-5 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    {initialLetter}
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-base">{name || 'Anonymous Client'}</h3>
                    <p className="text-xs font-semibold text-blue-600">Verified Client</p>
                </div>
            </div>
        </div>
    );
};

export default Review;