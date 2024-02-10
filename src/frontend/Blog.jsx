import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Footer from './footer/footer';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Blog = () => {
    const [viewblogdata, setViewblogdata] = useState([]);
    const { blog_url } = useParams();
    const [activePage, setActivePage] = useState(1);
    const [totalUser, setTotalUser] = useState(0);
    const limit = 15;

    const totalPages = (total, limit) => {
        const pages = [];
        for (let x = 1; x <= parseInt(total) / limit; x++) {
            pages.push(x);
        }
        return pages;
    };
    const getblog = async () => {
        try {
            const result = await axios.get("https://home-s4qk.onrender.com/blog/getblog", {
                params: {
                    page: activePage,
                    size: limit,
                }
            });
            setViewblogdata(result.data.blogs);
            setTotalUser(result.data.total);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getblog();
    }, [activePage]);

    return (
        <>
            <Header />
            <section className="pt-34 pb-17.5 bg-white">
                <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="max-w-[770px] mx-auto w-full text-center mb-12.5">
                        <h1 className="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-4">
                            Blog
                        </h1>
                        <p>See all posts we have ever written.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5">
                        {viewblogdata && viewblogdata.map((blog, index) => {
                            return (
                                <div key={index} className="group border rounded-lg border-[#e7e7e7] ">
                                    <Link to={`/blog/${blog.blog_url}`}>
                                        <div className="mb-6 overflow-hidden transition-all group-hover:scale-105 border-b-2 border-[#e7e7e7]">
                                            <img src={`https://home-s4qk.onrender.com/blog/${blog.cover}`} width={200} height={200} alt="image" className='mx-auto' />
                                        </div>
                                        <h4 className='mx-2'>
                                            <Link to={`/blog/${blog.blog_url}`}>
                                                <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                                                    {blog.blog_name}
                                                </span>
                                            </Link>
                                        </h4>
                                        <p className='mx-2'>
                                            <div dangerouslySetInnerHTML={{ __html: blog.blog_desc.substring(0, 100) }}></div>
                                        </p>
                                    </Link>
                                    <div className="flex flex-wrap gap-3 items-center justify-between m-2">
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex items-center gap-3">
                                                <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                                    <img src="https://clarity-tailwind.preview.uideck.com/images/user-01.png" alt="user" />
                                                </div>
                                                <p className="text-sm">Admin</p>
                                            </div>
                                            <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                                            <p className="text-sm">Sep 10, 2025</p>
                                        </div>
                                        <span className="inline-flex text-blue bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full">{blog.blog_cat}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center">
                        <div className="inline-flex items-center justify-center rounded-md border-[0.8px] border-gray-3 shadow-1 mt-17.5">
                            {activePage !== 1 &&
                                <button onClick={() => setActivePage(activePage - 1)} href="javascript:void(null)" className="page-link rounded-l-md text-[#5A6A85] py-1 lsm:py-2.5 px-3 lsm:px-4.5 [&:not(:last-child)]:border-r-[0.8px] border-gray-3 ease-in duration-300 hover:text-dark hover:bg-gray">
                                    Previous
                                </button>
                            }

                            {totalPages(totalUser, limit).map(page => (
                                <button key={page} className="text-[#5A6A85] py-1 lsm:py-2.5 px-3 lsm:px-4.5 [&:not(:last-child)]:border-r-[0.8px] border-gray-3 ease-in duration-300 hover:text-dark hover:bg-gray">
                                    {page +1}
                                </button>
                            ))}
                            {activePage !== totalPages(totalUser, limit).length &&
                                <button onClick={() => setActivePage(activePage + 1)} href="javascript:void(null)" className="page-link rounded-r-md text-[#5A6A85] py-1 lsm:py-2.5 px-3 lsm:px-4.5 [&:not(:last-child)]:border-r-[0.8px] border-gray-3 ease-in duration-300 hover:text-dark hover:bg-gray">
                                    Next
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
