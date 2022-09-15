import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const ManageProducts = () => {
    const [parts, setParts] = useState([]);


    useEffect(() => {
        fetch('https://immense-shore-60421.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])



    const handleDelete = id => {
        const url = `https://immense-shore-60421.herokuapp.com/purchase/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remained = parts.filter(part => part._id !== id);
                setParts(remained);
                toast.success(`Product Deleted`)
            })

    }


    return (
        <div className='ml-5'>
            <h1 className='text-center text-5xl hover:underline font-bold mt-12 mb-2'>Manage Your Products</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Products</th>
                            <th>Remove Product</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            parts.map(part =>
                                <tr>
                                    <td>{part.name}</td>
                                    <td><button onClick={() => handleDelete(part._id)} className="btn btn-outline btn-error btn-sm">Remove Product</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div >
    );
};

export default ManageProducts;