import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Errormessage from './Errormessage'
const Logout = () => {
    const [showToast, setShowToast] = useState(false)
    const [msg, setMsg] = useState('')
    const [type, setType] = useState('')
    const navigate = useNavigate()
    const [tokendt, setTokendt] = useState({ token })
    const handlelogout = () => {
        const res = axios.post("http://localhost:3000/admin/logout", tokendt)
        if (res.data.logoutsts === 0) {
            localStorage.removeItem('token')
            localStorage.removeItem('aid')
            localStorage.removeItem('auser')
            setShowToast(true);
            setMsg(res.data.msg);
            setType('success');
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
            navigate('/admin/login')
        } else {
            setShowToast(true);
            setMsg(res.data.msg);
            setType('error');
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
    }
    return (
        <div>
            <Errormessage showToast={showToast} msg={msg} type={type} />
        </div>
    )
}

export default Logout