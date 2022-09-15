import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    return (
        <div className='ml-5'>
            <h1>My Profile Name : {user?.displayName}</h1>
            <h1>My Email Address: {user?.email}</h1>
        </div>
    );
};

export default MyProfile;