import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import PurchaseModal from './PurchaseModal';
import API_BASE from '../../../api';

const Purchase = () => {
    const [purchase, setPurchase] = useState(null);
    const { purchaseId } = useParams();
    const [parts, setParts] = useState(null);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const url = `${API_BASE}/purchase/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data))
            .catch(err => console.log('Error loading product details:', err));
    }, [purchaseId]);

    if (!parts) {
        return (
            <div className="min-h-screen flex flex-col justify-between">
                <Header></Header>
                <div className="flex justify-center items-center py-20">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
                <Footer></Footer>
            </div>
        );
    }

    // Mapping new database fields with fallback to old ones
    const displayImg = parts.img || (parts.images && parts.images[0]) || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80';
    const displayDesc = parts.text || parts.description || 'No description available.';
    const displayPrice = parts.rate || parts.price || 0;
    const displayMinOrder = parts.minorder || parts.minOrder || 1;
    const displayStock = parts.availquantity || parts.stock || 0;

    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-50/35">
            <Header></Header>
            
            <main className="max-w-6xl mx-auto px-6 py-16 flex-grow w-full">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12">
                    {/* Left Column: Visual Image Container */}
                    <div className="flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 p-4 h-[350px] md:h-[450px]">
                        <img 
                            className="max-h-full max-w-full object-contain hover:scale-[1.02] transition-transform duration-300 rounded-xl" 
                            src={displayImg} 
                            alt={parts.name} 
                        />
                    </div>

                    {/* Right Column: Information & Actions */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* Category badge */}
                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-50 text-blue-700 border border-blue-100 inline-block mb-4">
                                {parts.category || 'Machinery Component'}
                            </span>

                            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-4">
                                {parts.name}
                            </h1>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {displayDesc}
                            </p>

                            {/* Specifications Visualizer */}
                            {parts.specifications && (
                                <div className="mb-6">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Specifications</h3>
                                    <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-600">
                                        {parts.specifications.brand && (
                                            <div>
                                                <span className="text-[10px] uppercase font-bold text-slate-400 block">Brand</span>
                                                <span className="font-semibold text-slate-700">{parts.specifications.brand}</span>
                                            </div>
                                        )}
                                        {parts.specifications.power && (
                                            <div>
                                                <span className="text-[10px] uppercase font-bold text-slate-400 block">Power Rating</span>
                                                <span className="font-semibold text-slate-700">{parts.specifications.power}</span>
                                            </div>
                                        )}
                                        {parts.specifications.warranty && (
                                            <div>
                                                <span className="text-[10px] uppercase font-bold text-slate-400 block">Warranty</span>
                                                <span className="font-semibold text-slate-700">{parts.specifications.warranty}</span>
                                            </div>
                                        )}
                                        {parts.specifications.weight && (
                                            <div>
                                                <span className="text-[10px] uppercase font-bold text-slate-400 block">Weight</span>
                                                <span className="font-semibold text-slate-700">{parts.specifications.weight}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Order Placement and Pricing Summary */}
                        <div className="border-t border-slate-100 pt-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Price per Unit</span>
                                    <span className="text-3xl font-black text-slate-900">${displayPrice}</span>
                                </div>
                                <div className="text-right">
                                    {displayStock > 0 ? (
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 mb-1">
                                            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-500"></span>
                                            {displayStock} units available
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100 mb-1">
                                            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-rose-500"></span>
                                            Out of Stock
                                        </span>
                                    )}
                                    <p className="text-xs text-slate-500">
                                        Min. Order Limit: <span className="font-bold text-slate-700">{displayMinOrder} units</span>
                                    </p>
                                </div>
                            </div>

                            {user ? (
                                <label 
                                    onClick={() => setPurchase(parts)} 
                                    htmlFor="purchase-modal" 
                                    className="w-full btn btn-primary text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg shadow-primary/20 hover:scale-[1.01] flex justify-center items-center cursor-pointer"
                                >
                                    Proceed to Purchase
                                </label>
                            ) : (
                                <button 
                                    onClick={() => navigate('/login', { state: { from: location } })}
                                    className="w-full btn btn-outline btn-primary font-bold rounded-xl transition-all duration-300 hover:scale-[1.01]"
                                >
                                    Log in to Buy Now
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer></Footer>
            {purchase && <PurchaseModal purchase={purchase}></PurchaseModal>}
        </div>
    );
};

export default Purchase;