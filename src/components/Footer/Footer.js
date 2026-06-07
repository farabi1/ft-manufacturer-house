import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-50 text-slate-600 border-t border-slate-100 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
                {/* Brand Logo matching Header */}
                <Link to="/" className="text-xl font-black text-slate-800 tracking-tight hover:opacity-90 transition-opacity">
                    FT <span className="text-blue-600 font-extrabold ml-1">Manufacturer House</span>
                </Link>
                
                {/* Quick Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-slate-500">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <Link to="/portfolio" className="hover:text-blue-600 transition-colors">Academic Portfolio</Link>
                    <Link to="/dashboard" className="hover:text-blue-600 transition-colors">Client Dashboard</Link>
                    <Link to="/login" className="hover:text-blue-600 transition-colors">Account Login</Link>
                </div>
                
                {/* Separator Accent */}
                <div className="w-12 h-1 bg-blue-600/20 rounded-full"></div>
                
                {/* Contact & Copyright Info */}
                <div className="text-xs text-slate-400 leading-relaxed">
                    <p className="font-semibold text-slate-500 mb-1">
                        Email: rashidfarabi@gmail.com | Location: Mirpur, Dhaka
                    </p>
                    <p>
                        Copyright © {new Date().getFullYear()} - All rights reserved by FT Manufacturer House
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 mt-2">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-slate-200 hover:text-blue-600 hover:border-blue-200 hover:scale-110 transition-all duration-300 shadow-sm text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-slate-200 hover:text-red-600 hover:border-red-200 hover:scale-110 transition-all duration-300 shadow-sm text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-slate-200 hover:text-blue-800 hover:border-blue-200 hover:scale-110 transition-all duration-300 shadow-sm text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;