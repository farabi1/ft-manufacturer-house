import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import API_BASE from '../../../../api';

const ManageAllOrders = () => {
    const [allorders, setAllorders] = useState([]);
    useEffect(() => {
        fetch(`${API_BASE}/orders`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => { setAllorders(data) })
    }, [])

    const handlePending = id => {
        fetch(`${API_BASE}/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Order is approved`);
                const remained = allorders.map(order => {
                    if (order._id === id) {
                        return { ...order, status: 'approved' };
                    }
                    return order;
                });
                setAllorders(remained);
            })
    }
    return (
        <div className='ml-5'>

            <h1 className='text-center text-5xl hover:underline font-bold mt-12 mb-2'>Manage All Orders</h1>
            <h1>All order List: {allorders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allorders.map((allorder, index) =>
                                <tr key={allorder._id || index} >
                                    <th>{index + 1}</th>
                                    <td>{allorder.customerName}</td>
                                    <td>{allorder.customerMail}</td>
                                    <td>{allorder.purchase}</td>
                                    <td>{allorder.address}</td>
                                    <td>
                                        <button 
                                            onClick={() => handlePending(allorder._id)} 
                                            className="btn btn-outline btn-success btn-sm"
                                            disabled={allorder.status === 'approved'}
                                        >
                                            {allorder.status === 'approved' ? 'Approved' : 'Pending'}
                                        </button>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;