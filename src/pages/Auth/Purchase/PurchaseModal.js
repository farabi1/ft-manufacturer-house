import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init'


const PurchaseModal = ({ purchase }) => {

    const { _id, name, price } = purchase || {};

    const [user] = useAuthState(auth);

    const handlePurchase = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(quantity);
        const order = {
            purchaseId: _id,
            purchase: name,
            quantity,
            customerMail: user.email,
            customerName: user.displayName,
            address: event.target.address.value

        }
        fetch('https://immense-shore-60421.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast.success(`Order is set`)
                }
                else {
                    toast.error(`Already have and Order`)
                }

            });

    }




    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Customer Name : {name}</h3>
                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-4 mt-3'>
                        <input type="text" readOnly value={price} className="input input-bordered input-success w-full max-w-xs" />

                        <input type="text" name="name" readOnly value={user?.displayName} className="input input-bordered input-success w-full max-w-xs" />

                        <input type="email" name="email" readOnly value={user?.email} className="input input-bordered input-success w-full max-w-xs" />

                        <input type="text" name="address" placeholder="Home Address" className="input input-bordered input-success w-full max-w-xs" />

                        <input type="number" name="quantity" min={40} max={100} placeholder="Enter No of Products" className="input input-bordered input-success w-full max-w-xs" />

                        <input type="submit" value="submit" placeholder="Type here" className="btn btn-secondary input-success w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;