import Breadcrumb from '../../components/Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor, { Jodit } from 'jodit-react';
import Errormessage from '../../components/Errormessage';
import axios from 'axios';

const Updateproduct = () => {
    const navigate = useNavigate();
    const { aid } = useParams();
    console.log(useParams());
    const [showToast, setShowToast] = useState(false);
    const [msg, setMsg] = useState('');
    const [type, setType] = useState('');
    const [viewcatdata, setViewcatdata] = useState([]);
    const [viewproductdata, setViewproductdata] = useState({
        product_name: "",
        product_url: "",
        product_cat: "",
        product_desc: "",
        product_short_desc: "",
        cover: "",
    });
    console.log(viewproductdata);
    const [editorContent, setEditorContent] = useState('');
    const [shortEditorContent, setShortEditorContent] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const editorDescription = useRef(null);
    const editorShortDescription = useRef(null);

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/admin/login');
            } else {
                try {
                    const result = await axios.get('https://home-s4qk.onrender.com/product-category/getcategory');
                    setViewcatdata(result.data.cat);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        checkToken();
    }, [navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ul = `https://home-s4qk.onrender.com/product/getproduct/${aid}`
                const response = await axios.get(`https://home-s4qk.onrender.com/product/getproduct/`,{
                    params:{
                        id:aid,
                    }
                });
                console.log(response.data.products[0]);
                setViewproductdata(prevData => ({
                    ...prevData,
                    product_name: response.data.products[0].product_name,
                    product_url: response.data.products[0].product_url,
                    product_short_desc: response.data.products[0].product_short_desc,
                    product_cat: response.data.products[0].product_cat,
                    cover: response.data.products[0].cover,
                }));
                setShortEditorContent(response.data.products[0].product_short_desc)
                setEditorContent(response.data.products[0].product_desc)
            } catch (error) {
                console.error(error);
            }

        };

        fetchData();
    }, [aid]);

    const handleInputChange = (e) => {
        setViewproductdata({
            ...viewproductdata,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const updateproductHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('product_name', viewproductdata.product_name);
        formData.append('product_url', viewproductdata.product_url);
        formData.append('product_cat', viewproductdata.product_cat);
        if (imageFile) {
            formData.append('cover', imageFile);
        }

        try {
            const res = await axios.put(`https://home-s4qk.onrender.com/product/updateproduct/${aid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (res.data.sts === 0) {
                setShowToast(true);
                setMsg(res.data.msg);
                setType('success');
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
            } else {
                setShowToast(true);
                setMsg('File upload fail');
                setType('error');
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
            }
        } catch (error) {
            console.error(error);
            // Handle error state here
        }

        navigate("/all-product");
    };

    return (
        <>
            <Breadcrumb pageName="Edit Product" />
            <Errormessage showToast={showToast} msg={msg} type={type} />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Edit Product
                            </h3>
                        </div>
                        <form action="#">
                            <div className="p-6.5">
                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Product Name <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="product_name"
                                        value={viewproductdata.product_name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your product name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Product url
                                    </label>
                                    <input
                                        type="text"
                                        name="product_url"
                                        value={viewproductdata.product_url}
                                        onChange={handleInputChange}
                                        placeholder="Enter Product Url"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Select Category
                                    </label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                                        <select
                                            onChange={handleInputChange}
                                            name="product_cat"
                                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        >
                                            <option value="">Select your Category</option>
                                            {viewcatdata && viewcatdata.map((item, index) => (
                                                <option key={index} value={item._id}>
                                                    {item.cat_name}
                                                </option>
                                            ))}
                                        </select>
                                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                            <svg
                                                className="fill-current"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.8">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                        fill=""
                                                    ></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Description
                                    </label>
                                    <JoditEditor
                                        type="text"
                                        ref={editorDescription}
                                        name="product_desc"
                                        value={editorContent}
                                        tabIndex={1}
                                        onChange={(newContent) => {
                                            setEditorContent(newContent);
                                            console.log('Description Content:', newContent);
                                        }}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Short Description
                                    </label>
                                    <JoditEditor
                                        ref={editorShortDescription}
                                        name="product_short_desc"
                                        value={shortEditorContent}
                                        tabIndex={1}
                                        onBlur={(newContent) => setShortEditorContent(newContent)}
                                        onChange={(newContent) => {
                                            setShortEditorContent(newContent);
                                            console.log(' ShortDescription Content:', newContent);
                                        }}
                                    />
                                </div>
                                <div className="mb-4.5 w-full xl:w-1/4">
                                    <label
                                        htmlFor="cover"
                                        className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-3 px-6 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
                                    >
                                        <input
                                            type="file"
                                            onChange={handleImageChange}
                                            name="cover"
                                            id="cover"
                                            className="sr-only"
                                        />
                                        <span>
                                            <svg
                                                className="fill-current"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                                                    fill="white"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <span>Upload Image</span>
                                    </label>
                                </div>
                                <button
                                    onClick={updateproductHandler}
                                    className="flex justify-center rounded bg-primary p-3 font-medium text-gray"
                                >
                                    Update Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Updateproduct;