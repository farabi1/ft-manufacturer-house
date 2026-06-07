import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Loading/Loading';
import UserList from './UserList';
import API_BASE from '../../../../api';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`${API_BASE}/users`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='ml-5'>
            <h1 className='text-center text-5xl hover:underline font-bold mt-12 mb-2'>Make Admin</h1>
            <h1> Total User : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>User</th>
                            <th>Appoint Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <UserList key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserList>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;