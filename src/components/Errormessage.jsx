import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Errormessage = ({ showToast, msg, type }) => {
    const notify = () => {
        toast[type](msg);
    }
    useEffect(() => {
        if (showToast) {
            notify()
        }
    }, [showToast])
    return (
        <div><ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce /></div>
    )
}

export default Errormessage