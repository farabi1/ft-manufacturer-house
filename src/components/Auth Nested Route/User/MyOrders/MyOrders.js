import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);

    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`https://immense-shore-60421.herokuapp.com/orders?customer=${user.email}`)
                .then(res => res.json())
                .then(data => { setOrders(data) })

        }
    }, [user])

    const handlePending = () => {
        toast.error(`You Cannot Change the pending State`);
    }

    return (
        <div>
            <h1 className='ml-5'>My order List: {orders.length}</h1>

            <div className="overflow-x-auto ml-5">
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
                            orders.map((order, index) =>
                                <tr key={index} >
                                    <th>{index + 1}</th>
                                    <td>{order.customerName}</td>
                                    <td>{order.customerMail}</td>
                                    <td>{order.purchase}</td>
                                    <td>{order.address}</td>
                                    <td><button onClick={handlePending} className="btn btn-outline btn-warning btn-sm cursor-not-allowed" >Pending</button></td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;