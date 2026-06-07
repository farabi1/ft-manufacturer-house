import { useEffect, useState } from "react"
import API_BASE from '../../api'

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`${API_BASE}/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        } else {
            setAdminLoading(false);
        }
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin;