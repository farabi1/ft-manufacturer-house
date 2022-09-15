import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageAllOrders = () => {
    const [allorders, setAllorders] = useState([]);
    useEffect(() => {

        fetch(`https://immense-shore-60421.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => { setAllorders(data) })


    }, [])

    const handlePending = () => {
        toast.success(`Orders is approved`);

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
                                <tr key={index} >
                                    <th>{index + 1}</th>
                                    <td>{allorder.customerName}</td>
                                    <td>{allorder.customerMail}</td>
                                    <td>{allorder.purchase}</td>
                                    <td>{allorder.address}</td>
                                    <td><button onClick={handlePending} className="btn btn-outline btn-success btn-sm" >Pending</button></td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;