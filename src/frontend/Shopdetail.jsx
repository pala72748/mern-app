import React from 'react'
import Header from './Header/Header'
import Footer from './footer/footer'
import { useNavigate, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'

const Shopdetail = () => {

    const navigate = useNavigate();
    const [viewblogdata, setViewblogdata] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [msg, setMsg] = useState('');
    const [type, setType] = useState('');

    const { product_url } = useParams();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchblog = async () => {
            try {
                const response = await fetch(`https://home-s4qk.onrender.com/product/getproduct/${product_url}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog data');
                }
                const data = await response.json();
                setViewblogdata(data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
                // Handle error, show a message, or redirect as needed
            }
        };

        fetchblog();
    }, [product_url]);

    useEffect(() => {
        const checkToken = () => {
            if (token == null) {
                navigate('/admin/login');
            }
        };

        checkToken();
    }, [token, navigate]);

    return (
        <>
            <Header />
            <div className='bg-white'>
                <div className="container bg-white relative md:py-24 py-16 mx-auto">
                    <div className="container relative">
                        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6 items-center">
                            <div className="lg:col-span-5">
                                <div className="tiny-single-item">
                                    <div className="tiny-slide justify-center">
                                        <div className="m-0.5">
                                            <img
                                                src={`https://home-s4qk.onrender.com/product/${viewblogdata.cover}`}
                                                width={500}
                                                className="shadow dark:shadow-gray-700"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*end tiny slider*/}
                            </div>
                            {/*end col*/}
                            <div className="lg:col-span-7">
                                <h5 className="text-2xl font-semibold">{viewblogdata.product_name}</h5>
                                <span className="inline-flex text-blue my-5 bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full">{viewblogdata.product_cat?.cat_name}</span >
                                <div className="mt-4">
                                    <h5 className="text-lg font-semibold">Short Description :</h5>
                                    <p className="text-slate-400 mt-2">
                                    <div dangerouslySetInnerHTML={{__html:viewblogdata.product_short_desc}}></div>
                                    </p>
                                </div>
                                <div className="mt-4 space-x-1">
                                    <a
                                        href=""
                                        className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-[#f97316] text-white rounded-md mt-2"
                                    >
                                       Order on Whatsapp
                                    </a>
                                </div>
                            </div>
                            {/*end content*/}
                        </div>
                        {/*end grid*/}
                        <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                            <div className="lg:col-span-3 md:col-span-5">
                                <div className="sticky top-20">
                                    <ul
                                        className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
                                        id="myTab"
                                        data-tabs-toggle="#myTabContent"
                                        role="tablist"
                                    >
                                        <li role="presentation">
                                            <button
                                                className="px-4 py-2 text-start text-base font-semibold rounded-md bg-[#f97316] w-full hover:text-[#ffffff] hover:bg-[#f97316] duration-500"
                                                id="description-tab"
                                                data-tabs-target="#description"
                                                type="button"
                                                role="tab"
                                                aria-controls="description"
                                                aria-selected="true"
                                            >
                                                Description
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-9 md:col-span-7">
                                <div
                                    id="myTabContent"
                                    className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
                                >
                                    <div
                                        className=""
                                        id="description"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                    >
                                        <p className="text-slate-400">
                                            <div dangerouslySetInnerHTML={{__html:viewblogdata.product_desc}}></div>
                                        </p>
                                    </div>
                                    <div
                                        className="hidden"
                                        id="addinfo"
                                        role="tabpanel"
                                        aria-labelledby="addinfo-tab"
                                    >
                                        <table className="w-full text-start">
                                            <tbody>
                                                <tr className="bg-white dark:bg-slate-900">
                                                    <td className="font-semibold pb-4" style={{ width: 100 }}>
                                                        Color
                                                    </td>
                                                    <td className="text-slate-400 pb-4">
                                                        Red, White, Black, Orange
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                                    <td className="font-semibold py-4">Material</td>
                                                    <td className="text-slate-400 py-4">Cotton</td>
                                                </tr>
                                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                                    <td className="font-semibold pt-4">Size</td>
                                                    <td className="text-slate-400 pt-4">S, M, L, XL, XXL</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div
                                        className="hidden"
                                        id="review"
                                        role="tabpanel"
                                        aria-labelledby="review-tab"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <img
                                                        src="https://shreethemes.in/cartzio/layouts/assets/images/client/01.jpg"
                                                        className="h-11 w-11 rounded-full shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3 flex-1">
                                                        <a
                                                            href=""
                                                            className="text-lg font-semibold hover:text-[#f97316] duration-500"
                                                        >
                                                            Calvin Carlo
                                                        </a>
                                                        <p className="text-sm text-slate-400">
                                                            6th May 2022 at 01:25 pm
                                                        </p>
                                                    </div>
                                                </div>
                                                <a
                                                    href=""
                                                    className="text-slate-400 hover:text-[#f97316] duration-500 ms-5"
                                                >
                                                    <i className="mdi mdi-reply" /> Reply
                                                </a>
                                            </div>
                                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                                <ul className="list-none inline-block text-orange-400">
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline text-slate-400 font-semibold">5.0</li>
                                                </ul>
                                                <p className="text-slate-400 italic">
                                                    " There are many variations of passages of Lorem Ipsum
                                                    available, but the majority have suffered alteration in some
                                                    form, by injected humour "
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <img
                                                        src="https://shreethemes.in/cartzio/layouts/assets/images/client/02.jpg"
                                                        className="h-11 w-11 rounded-full shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3 flex-1">
                                                        <a
                                                            href=""
                                                            className="text-lg font-semibold hover:text-[#f97316] duration-500"
                                                        >
                                                            Calvin Carlo
                                                        </a>
                                                        <p className="text-sm text-slate-400">
                                                            6th May 2022 at 01:25 pm
                                                        </p>
                                                    </div>
                                                </div>
                                                <a
                                                    href=""
                                                    className="text-slate-400 hover:text-[#f97316] duration-500 ms-5"
                                                >
                                                    <i className="mdi mdi-reply" /> Reply
                                                </a>
                                            </div>
                                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                                <ul className="list-none inline-block text-orange-400">
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline text-slate-400 font-semibold">5.0</li>
                                                </ul>
                                                <p className="text-slate-400 italic">
                                                    " There are many variations of passages of Lorem Ipsum
                                                    available, but the majority have suffered alteration in some
                                                    form, by injected humour "
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <img
                                                        src="https://shreethemes.in/cartzio/layouts/assets/images/client/03.jpg"
                                                        className="h-11 w-11 rounded-full shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3 flex-1">
                                                        <a
                                                            href=""
                                                            className="text-lg font-semibold hover:text-[#f97316] duration-500"
                                                        >
                                                            Calvin Carlo
                                                        </a>
                                                        <p className="text-sm text-slate-400">
                                                            6th May 2022 at 01:25 pm
                                                        </p>
                                                    </div>
                                                </div>
                                                <a
                                                    href=""
                                                    className="text-slate-400 hover:text-[#f97316] duration-500 ms-5"
                                                >
                                                    <i className="mdi mdi-reply" /> Reply
                                                </a>
                                            </div>
                                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                                <ul className="list-none inline-block text-orange-400">
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline text-slate-400 font-semibold">5.0</li>
                                                </ul>
                                                <p className="text-slate-400 italic">
                                                    " There are many variations of passages of Lorem Ipsum
                                                    available, but the majority have suffered alteration in some
                                                    form, by injected humour "
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <img
                                                        src="https://shreethemes.in/cartzio/layouts/assets/images/client/04.jpg"
                                                        className="h-11 w-11 rounded-full shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3 flex-1">
                                                        <a
                                                            href=""
                                                            className="text-lg font-semibold hover:text-[#f97316] duration-500"
                                                        >
                                                            Calvin Carlo
                                                        </a>
                                                        <p className="text-sm text-slate-400">
                                                            6th May 2022 at 01:25 pm
                                                        </p>
                                                    </div>
                                                </div>
                                                <a
                                                    href=""
                                                    className="text-slate-400 hover:text-[#f97316] duration-500 ms-5"
                                                >
                                                    <i className="mdi mdi-reply" /> Reply
                                                </a>
                                            </div>
                                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                                <ul className="list-none inline-block text-orange-400">
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline">
                                                        <i className="mdi mdi-star text-lg" />
                                                    </li>
                                                    <li className="inline text-slate-400 font-semibold">5.0</li>
                                                </ul>
                                                <p className="text-slate-400 italic">
                                                    " There are many variations of passages of Lorem Ipsum
                                                    available, but the majority have suffered alteration in some
                                                    form, by injected humour "
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>
                                            <form className="mt-8">
                                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                                    <div className="lg:col-span-6 mb-5">
                                                        <div className="text-start">
                                                            <label htmlFor="name" className="font-semibold">
                                                                Your Name:
                                                            </label>
                                                            <div className="form-icon relative mt-2">
                                                                <i
                                                                    data-feather="user"
                                                                    className="w-4 h-4 absolute top-3 start-4"
                                                                />
                                                                <input
                                                                    name="name"
                                                                    id="name"
                                                                    type="text"
                                                                    className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                                    placeholder="Name :"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="lg:col-span-6 mb-5">
                                                        <div className="text-start">
                                                            <label htmlFor="email" className="font-semibold">
                                                                Your Email:
                                                            </label>
                                                            <div className="form-icon relative mt-2">
                                                                <i
                                                                    data-feather="mail"
                                                                    className="w-4 h-4 absolute top-3 start-4"
                                                                />
                                                                <input
                                                                    name="email"
                                                                    id="email"
                                                                    type="email"
                                                                    className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                                    placeholder="Email :"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1">
                                                    <div className="mb-5">
                                                        <div className="text-start">
                                                            <label htmlFor="comments" className="font-semibold">
                                                                Your Comment:
                                                            </label>
                                                            <div className="form-icon relative mt-2">
                                                                <i
                                                                    data-feather="message-circle"
                                                                    className="w-4 h-4 absolute top-3 start-4"
                                                                />
                                                                <textarea
                                                                    name="comments"
                                                                    id="comments"
                                                                    className="ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                                    placeholder="Message :"
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    id="submit"
                                                    name="send"
                                                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-[#f97316] text-white rounded-md w-full"
                                                >
                                                    Send Message
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end grid*/}
                    </div>
                    {/*end container*/}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shopdetail;