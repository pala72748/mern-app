import React, { useState } from 'react'
import Errormessage from '../components/Errormessage'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [showToast, setShowToast] = useState(false)
    const [msg, setMsg] = useState('')
    const [type, setType] = useState('')
    const navigate = useNavigate()
    const [login, setLogin] = useState({ admin_user: "", admin_pass: "" });
    const handlechange = (e) => {
        const {name, value} = e.target
        setLogin({...login, [name]:value})
    }
    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://home-s4qk.onrender.com/admin/api/token', login);
            console.log(res);
            if (res.data.sts === 0) {
                localStorage.setItem("aid",res.data.aid)
                localStorage.setItem("auser",res.data.auser)
                localStorage.setItem("token",res.data.token)
                setShowToast(true);
                setMsg(res.data.msg);
                setType('success');
                setTimeout(() => {
                    setShowToast(false);
                }, 3000); 
                navigate('/admin')
            } else {
                setShowToast(true);
                setMsg(res.data.msg);
                setType('error');
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
            }
            
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>

            <section className="bg-gray-50 dark:bg-gray-900">
                <Errormessage showToast={showToast} msg={msg} type={type} />
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Admin Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="admin_user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Username</label>
                                    <input type="text" name="admin_user" id="admin_user" onChange={handlechange} className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="admin_pass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="admin_pass" id="admin_pass" onChange={handlechange} placeholder="••••••••" className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" onClick={handlelogin} className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90">Admin  Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login