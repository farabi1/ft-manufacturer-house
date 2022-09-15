import React from 'react';
import { toast } from 'react-toastify';

const UserList = ({ user, refetch }) => {
    const { email, role } = user;

    const appointAdmin = () => {
        fetch(`https://immense-shore-60421.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                toast.success(`This User is Now An Admin`);
                refetch();


            })

    }
    return (
        <tr>

            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={appointAdmin} className="btn btn-outline btn-success btn-sm">Make Admin</button> || <button className="btn btn-outline btn-success btn-sm">Admin</button>}</td>
            <td><button className="btn btn-outline btn-error btn-sm">Remove User</button></td>

        </tr>
    );
};

export default UserList;