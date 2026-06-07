import React from 'react';
import { toast } from 'react-toastify';
import API_BASE from '../../../../api';

const UserList = ({ user, refetch }) => {
    const { email, role } = user;

    const appointAdmin = () => {
        fetch(`${API_BASE}/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`This User is Now An Admin`);
                refetch();
            })

    }

    const handleRemoveUser = () => {
        fetch(`${API_BASE}/users/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`User Removed successfully`);
                refetch();
            });
    }

    return (
        <tr>

            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={appointAdmin} className="btn btn-outline btn-success btn-sm">Make Admin</button> : <button className="btn btn-outline btn-success btn-sm" disabled>Admin</button>}</td>
            <td><button onClick={handleRemoveUser} className="btn btn-outline btn-error btn-sm">Remove User</button></td>

        </tr>
    );
};

export default UserList;