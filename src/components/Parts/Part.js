import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, img, images, name, text, description, rate, price, minOrder } = part;

    // Handle mapping of new schema fields back to old variables for seamless UI rendering
    const displayImg = img || (images && images.length > 0 ? images[0] : '');
    const displayDesc = text || description || '';
    const displayPrice = rate || price || 0;

    const navigate = useNavigate();

    const navigateToPartsDetail = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl card-bordered border-white p-4">
                <figure><img className="rounded-lg h-48 w-full object-cover" src={displayImg} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="line-clamp-2">Description: {displayDesc}</p>
                    <p>Min. Order: {minOrder || 1}</p>
                    <p>Price : ${displayPrice}</p>
                    <div className="card-actions justify-center mt-8">
                        <button onClick={() => navigateToPartsDetail(_id)} className="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;