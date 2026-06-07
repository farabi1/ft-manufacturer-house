import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://iili.io/PBZOWN.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">FT Manufacturer House</h1>
                        <p className="mb-5 text-xl font-semibold text-white">Get best Product in your city</p>
                        <button 
                            onClick={() => document.getElementById('parts-section')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="btn btn-primary text-white"
                        >Explore</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;