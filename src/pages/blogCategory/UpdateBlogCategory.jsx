import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import Errormessage from '../../components/Errormessage';
import axios from 'axios';

const UpdateBlogCategory = () => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [msg, setMsg] = useState('');
    const [type, setType] = useState('');

    const token = localStorage.getItem('token');

    const getcat = async () => {
        try {
            const result = await axios.get("http://localhost:3000/blog-category/getcategory");
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

    
    // update product category
    const { aid } = useParams();
    const [viewcatdata, setViewcatdata] = useState({
        blog_cat_name: "",
        blog_url: "",
        cover: "",
    });

    const [imageFile, setImageFile] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/blog-category/getcategory/${aid}`);
                console.log(response);
                setViewcatdata({
                    ...viewcatdata,
                    "blog_cat_name": response.data.blog_cat_name,
                    "blog_url": response.data.blog_url,
                    // You might want to update other properties based on your API response
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [aid]);

    const handleInputChange = (e) => {
        setViewcatdata({ ...viewcatdata, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData();
        formData.append('blog_cat_name', viewcatdata.blog_cat_name);
        formData.append('blog_url', viewcatdata.blog_url);
        if (imageFile) {
          formData.append('cover', imageFile);
        }
    
        try {
          const res = await axios.put(`http://localhost:3000/blog-category/updatecategory/${aid}`, formData, {
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
        }

        navigate("/add-blog-category")
    };
    return (
        <>
            <Breadcrumb pageName="Edit Product Category" />
            <Errormessage showToast={showToast} msg={msg} type={type} />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* <!-- Contact Form --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Edit Product Category
                            </h3>
                            <h2>{aid}</h2>
                        </div>
                        <form action="#">
                            <div className="p-6.5">
                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Category Name
                                        <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='blog_cat_name'
                                        id='blog_cat_name'
                                        placeholder="Enter your Category name"
                                        required=""
                                        value={viewcatdata.blog_cat_name}
                                        onChange={handleInputChange}
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Category Url <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='blog_url'
                                        id='blog_url'
                                        value={viewcatdata.blog_url}
                                        placeholder="Enter your category url"
                                        onChange={handleInputChange}
                                        required=""
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className="mb-4.5 w-full xl:w-1/3">
                                    <p>{viewcatdata.cover}</p>
                                    <label
                                        htmlFor="cover"
                                        className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-3 px-6 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
                                    >
                                        <input type="file" name="cover" id="cover"  className="sr-only" onChange={handleImageChange} />
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
                                <button onClick={handleSubmit} className="flex justify-center rounded bg-primary p-3 font-medium text-gray">
                                    Add Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UpdateBlogCategory