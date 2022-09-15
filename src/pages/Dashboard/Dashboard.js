import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAdmin from '../../components/Hooks/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='ml-5 text-2xl text-emerald-600'>DashBoard</h1>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side shadow-2xl">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                        <li><Link to="/dashboard/addreviews">Add a Reviews</Link></li>
                        {admin && <li><Link to="/dashboard/manageallorder">Manage All Order</Link></li>}
                        {admin && <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>}
                        {admin && <li><Link to="/dashboard/users">Make Admin</Link></li>}
                        {admin && <li><Link to="/dashboard/addproducts">Add Products</Link></li>}
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Dashboard;