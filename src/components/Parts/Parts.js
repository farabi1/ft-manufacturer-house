import React, { useEffect, useState } from 'react';
import Part from './Part';
import API_BASE from '../../api';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE}/purchase`)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    return (
        <section id="parts-section" className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">PRODUCT CATALOG</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
                    Industrial Grade Parts & Machinery
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {parts.map(part => (
                    <Part key={part._id} part={part} />
                ))}
            </div>
        </section>
    );
};

export default Parts;