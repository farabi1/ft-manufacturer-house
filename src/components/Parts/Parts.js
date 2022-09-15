import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);


    useEffect(() => {
        fetch('https://immense-shore-60421.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])


    return (
        <div>
            <h1 className='text-center text-5xl hover:underline font-bold mb-12'>Parts</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {
                        parts.map(part => <Part key={part._id} part={part}></Part>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Parts;