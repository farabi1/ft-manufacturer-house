import { Route, Routes } from 'react-router-dom';
import MyOrders from '../components/Auth Nested Route/User/MyOrders/MyOrders';
import MyProfile from '../components/Auth Nested Route/User/MyProfile/MyProfile';
import AddReviews from '../components/Auth Nested Route/User/MyReviews/AddReviews';

import Login from '../pages/Auth/Login/Login';
import Purchase from '../pages/Auth/Purchase/Purchase';
import RequireAuth from '../pages/Auth/RequireAuth/RequireAuth';
import RequireAdmin from '../pages/Auth/RequireAuth/RequireAdmin';
import Signup from '../pages/Auth/Signup/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ManageAllOrders from '../components/Auth Nested Route/Admin/Manage All Orders/ManageAllOrders';
import ManageProducts from '../components/Auth Nested Route/Admin/Manage Products/ManageProducts';
import MakeAdmin from '../components/Auth Nested Route/Admin/Make Admin/MakeAdmin';
import AddProducts from '../components/Auth Nested Route/Admin/Add A Product/AddProducts';
import NotFound from '../pages/Not Found/NotFound';
import Portfolio from '../pages/Portfolio/Portfolio';

const Basecamp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="dashboard" element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }>
                    <Route index element={<MyOrders></MyOrders>}></Route>
                    <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
                    <Route path="addreviews" element={<AddReviews></AddReviews>}></Route>
                    <Route path="manageallorder" element={
                        <RequireAdmin>
                            <ManageAllOrders></ManageAllOrders>
                        </RequireAdmin>
                    }></Route>
                    <Route path="manageproduct" element={
                        <RequireAdmin>
                            <ManageProducts></ManageProducts>
                        </RequireAdmin>
                    }></Route>
                    <Route path="users" element={
                        <RequireAdmin>
                            <MakeAdmin />
                        </RequireAdmin>
                    }></Route>
                    <Route path="addproducts" element={
                        <RequireAdmin>
                            <AddProducts></AddProducts>
                        </RequireAdmin>
                    }></Route>
                </Route>
                <Route path="purchase/:purchaseId" element={
                    <RequireAuth>
                        <Purchase />
                    </RequireAuth>
                } />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
};

export default Basecamp;