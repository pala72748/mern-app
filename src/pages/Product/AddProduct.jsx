import Breadcrumb from '../../components/Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import Errormessage from '../../components/Errormessage';
import axios from 'axios';


const AddProduct = () => {
    const navigate = useNavigate();

    // Assuming you are setting values to localStorage somewhere else in your code
    // and here you want to retrieve those values
    const aid = localStorage.getItem('aid');
    const auser = localStorage.getItem('auser');
    const token = localStorage.getItem('token');
    const [showToast, setShowToast] = useState(false);
    const [msg, setMsg] = useState('');
    const [type, setType] = useState('');
    const [viewcatdata, setViewcatdata] = useState([]);

    const getcat = async () => {
        try {
            const result = await axios.get(
                'https://home-s4qk.onrender.com/product-category/getcategory',
            );
            setViewcatdata(result.data.cat);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const checkToken = () => {
            if (token == null) {
                navigate('/admin/login');
            } else {
                getcat();
            }
        };

        checkToken();
    }, [token, navigate]);

    const editorDescription = useRef(null); // Separate ref for the description editor
    const editorShortDescription = useRef(null);
    const config = useMemo(
        () => ({
            readonly: false,
            buttons: ["bold", "italic", "underline"],
        }),
        []
    );

    const [editorContent, setEditorContent] = useState('');
    const [shortEditorContent, setShortEditorContent] = useState('');
    const [productName, setProductName] = useState('');
    const [productURL, setProductURL] = useState('');
    const [productcat, setProductcat] = useState('');

    const [file, setFile] = useState(null);
    const handlechange = (e) => {
        const { name, value } = e.target;

        if (name === 'product_name') {
            setProductName(value);
        } else if (name === 'product_url') {
            setProductURL(value);
        } else if (name === 'product_cat') {
            setProductcat(value);
        }
    };

    const handlefilechange = (e) => {
        setFile(e.target.files[0]);
    };

    const addproductHandeler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        // Append text data
        formData.append('product_name', productName);
        formData.append('product_url', productURL);
        formData.append('product_cat', productcat);
        formData.append('product_desc', editorContent);
        formData.append('product_short_desc', shortEditorContent);
        // Append the 'cover' file
        if (file) {
            formData.append('cover', file);
        }


        // for (const [key, value] of formData.entries()) {
        //   console.log(${key}: ${value});
        // }

        try {

            const res = await axios.post(
                'https://home-s4qk.onrender.com/product/product',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );

            console.log('Response from server:', res.data);
        } catch (error) {
            console.error('Error:', error);

            // Log more details about the error if needed
            if (error.response) {
                console.error(
                    'Server responded with non-2xx status:',
                    error.response.data,
                );
            } else if (error.request) {
                console.error('No response received from server:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
        navigate('/all-product')
    };

    const { id } = useParams();

    // Delete Product Category

    const delcat = async (id) => {
        try {
            const res = await axios.delete(
                `https://home-s4qk.onrender.com/product/deleteproduct/${id}`,
            );
            getcat();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Breadcrumb pageName="Add Product" />
            <Errormessage showToast={showToast} msg={msg} type={type} />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Product
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
                                        onChange={handlechange}
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
                                        onChange={handlechange}
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
                                            onChange={handlechange}
                                            name="product_cat"
                                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        >
                                            <option value="">Select your Category</option>
                                            {viewcatdata &&
                                                viewcatdata.map((item, index) => (
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
                                        tabIndex={2}
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
                                        tabIndex={2}
                                        onBlur={(newContent) => setShortEditorContent(newContent)}
                                        onChange={(newContent) => {
                                            setShortEditorContent(newContent);
                                            console.log(' ShortDescription Content:', newContent);
                                        }}
                                        config={config}
                                    />
                                </div>
                                <div className="mb-4.5 w-full xl:w-1/4">
                                    <label
                                        htmlFor="cover"
                                        className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-3 px-6 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
                                    >
                                        <input
                                            type="file"
                                            onChange={handlefilechange}
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
                                    onClick={addproductHandeler}
                                    className="flex justify-center rounded bg-primary p-3 font-medium text-gray"
                                >
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;