import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import useAdmin from '../../../components/Hooks/useAdmin';
import auth from '../../../firebase.init';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!admin) {
        return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireAdmin;
