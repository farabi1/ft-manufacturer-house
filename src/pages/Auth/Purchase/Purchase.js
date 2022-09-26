import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import PurchaseModal from './PurchaseModal';



const Purchase = () => {
    const [purchase, setPurchase] = useState(null);

    const { purchaseId } = useParams();

    const [parts, setParts] = useState([]);

    useEffect(() => {
        const url = `https://immense-shore-60421.herokuapp.com/purchase/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [purchaseId])


    return (
        <div>
            <Header></Header>
            <div className="card w-96 bg-base-100 shadow-xl w-50 mx-auto">
                <figure><img src={parts.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{parts.name}</h2>
                    <p>Description: {parts.text}</p>
                    <p>Per piece : ${parts.rate}</p>
                    <p>Minimum order: {parts.minorder}</p>
                    <p>Available : {parts.availquantity}</p>
                    <p>Price : ${parts.price}</p>
                    <div className="card-actions justify-center">
                        <label onClick={() => setPurchase(parts)} htmlFor="purchase-modal" className="btn btn-primary">Buy Now</label>

                    </div>
                </div>
            </div>
            <Footer></Footer>
            {purchase && <PurchaseModal purchase={purchase}></PurchaseModal>}
        </div>
    );
};

export default Purchase;