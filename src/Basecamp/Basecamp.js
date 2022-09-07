import React from 'react';
import { Routes, Route } from "react-router-dom";
import BecomeHost from "../pages/BecomeHost/BecomeHost";
import Home from '../pages/Home/Home';
import LiveAnywhere from "../pages/LiveAnywhere/LiveAnywhere";
import NotFound from "../pages/Not Found/NotFound";
import SavedPlace from "../pages/SavedPlace/SavedPlace";
import Trips from "../pages/Trips/Trips";

const Basecamp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="liveanywhere" element={<LiveAnywhere />} />
                <Route path="savedplace" element={<SavedPlace />} />
                <Route path="trips" element={<Trips />} />
                <Route path="becomehost" element={<BecomeHost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
    );
};

export default Basecamp;