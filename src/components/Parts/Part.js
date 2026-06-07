import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { 
        _id, 
        img, 
        images, 
        name, 
        text, 
        description, 
        rate, 
        price, 
        minOrder,
        stock,
        category,
        subCategory,
        specifications
    } = part;

    // Mapping new database fields with fallback to old ones
    const displayImg = img || (images && images.length > 0 ? images[0] : 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80');
    const displayDesc = text || description || 'No description available.';
    const displayPrice = rate || price || 0;
    const displayCategory = category || 'Equipment';
    const displaySubCategory = subCategory || '';

    const navigate = useNavigate();

    const navigateToPartsDetail = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden max-w-sm w-full mx-auto">
            {/* Top Image Section with Category Badges */}
            <div className="relative overflow-hidden h-52 bg-slate-50">
                <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={displayImg} 
                    alt={name} 
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-600/90 backdrop-blur-md text-white shadow-sm">
                        {displayCategory}
                    </span>
                    {displaySubCategory && (
                        <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-slate-800/80 backdrop-blur-md text-white">
                            {displaySubCategory}
                        </span>
                    )}
                </div>
            </div>

            {/* Card Body Contents */}
            <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {name}
                    </h2>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {displayDesc}
                    </p>

                    {/* Industrial Specs Summary */}
                    {specifications && (
                        <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600">
                            {specifications.brand && (
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-slate-400">Brand</span>
                                    <span className="font-semibold text-slate-700 truncate">{specifications.brand}</span>
                                </div>
                            )}
                            {specifications.warranty && (
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-slate-400">Warranty</span>
                                    <span className="font-semibold text-slate-700 truncate">{specifications.warranty}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Pricing & Stock Details */}
                <div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 mb-4">
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Price</span>
                            <span className="text-2xl font-black text-slate-900">${displayPrice}</span>
                        </div>
                        <div className="text-right">
                            {stock > 0 ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                    <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-500"></span>
                                    {stock} in stock
                                </span>
                            ) : (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100">
                                    <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-rose-500"></span>
                                    Out of Stock
                                </span>
                            )}
                            <span className="block text-[11px] text-slate-400 mt-1">
                                Min. Order: <span className="font-bold text-slate-600">{minOrder || 1} units</span>
                            </span>
                        </div>
                    </div>

                    <button 
                        onClick={() => navigateToPartsDetail(_id)} 
                        className="w-full btn btn-primary text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg shadow-primary/20 hover:scale-[1.01]"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Part;