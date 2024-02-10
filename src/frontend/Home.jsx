import Header from './Header/Header';
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import hospitail from '../images/banner/banner1.jpg';
import bed from '../images/banner/banner2.jpg';
import bedtwo from '../images/banner/banner3.jpg';
import Footer from './footer/footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../src/index.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Home = () => {
  const [activePage, setActivePage] = useState(1);
  const [totalUser, setTotalUser] = useState(0);
  const limit = 8;

  const totalPages = (total, limit) => {
    const pages = [];
    for (let x = 1; x <= parseInt(total) / limit; x++) {
      pages.push(x);
    }
    return pages;
  };

  const [viewblogdata, setViewblogdata] = useState([])

  const getproduct = async () => {
    try {
      const result = await axios.get("https://home-s4qk.onrender.com/product/getproduct/", {
        params: {
          page: activePage,
          size: limit,
        }
      });
      setViewblogdata(result.data.products);
      setTotalUser(result.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproduct()
  }, [activePage])

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

  const handlePageClick = (e) => {
    console.log(e);
  }
  return (
    <>
      <Header />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={hospitail} /></SwiperSlide>
        <SwiperSlide><img src={bed} /></SwiperSlide>
        <SwiperSlide><img src={bedtwo} /></SwiperSlide>
      </Swiper>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-[40px] p-10 text-center">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {
              viewblogdata && viewblogdata.map((product, index) => (
                <Link key={index} to={`https://hospitalfurnituresale.com/product/${product.product_url}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={`https://home-s4qk.onrender.com/product/${product.cover}`}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <Link to={`https://hospitalfurnituresale.com/product/${product.product_url}`}>
                    <h2 className="mt-4 text-sm text-gray-700 text-[30px]">{product.product_name}</h2>
                  </Link>
                  <span className="inline-flex text-blue bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full">{product.product_cat}</span >
                </Link>
              ))
            }

          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {viewblogdata && viewblogdata.map((blog, index) => {
                return (
                  <div key={index} className="group border rounded-lg border-[#e7e7e7] ">
                    <Link to={`https://hospitalfurnituresale.com/blog/${blog.blog_url}`}>
                      <div className="mb-6 overflow-hidden transition-all group-hover:scale-105 border-b-2 border-[#e7e7e7]">
                        <img src={`https://home-s4qk.onrender.com/blog/${blog.cover}`} width={200} height={200} alt="image" className='mx-auto' />
                      </div>
                      <h4 className='mx-2'>
                        <Link to={`https://hospitalfurnituresale.com/blog/${blog.blog_url}`}>
                          <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                            {blog.blog_name}
                          </span>
                        </Link>
                      </h4>
                      <p className='mx-2'>
                        <div dangerouslySetInnerHTML={{ __html: blog.blog_desc }}></div>
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
          </div>
        </div>
      </div>
      <section
        className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Pricing Table
                </span>
                <h2
                  className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                >
                  Our Pricing Plan
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]"
              >
                <span className="mb-3 block text-lg font-semibold text-primary">
                  Personal
                </span>
                <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                  <span>$59</span>
                  <span
                    className="text-base font-medium text-body-color dark:text-dark-6"
                  >
                    / year
                  </span>
                </h2>
                <p
                  className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6"
                >
                  Perfect for using in a personal website or a client project.
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">1 User</p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    All UI components
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Lifetime access
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Free updates
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Use on 1 (one) project
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    3 Months support
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                >
                  Choose Personal
                </a>

                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.09" />
                          <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]"
              >
                <span className="mb-3 block text-lg font-semibold text-primary">
                  Business
                </span>
                <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                  <span>$199</span>
                  <span
                    className="text-base font-medium text-body-color dark:text-dark-6"
                  >
                    / year
                  </span>
                </h2>
                <p
                  className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6"
                >
                  Perfect for using in a Business website or a client project.
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                    5 Users
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    All UI components
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Lifetime access
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Free updates
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Use on 3 (Three) project
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    4 Months support
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                >
                  Choose Business
                </a>

                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.09" />
                          <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]"
              >
                <span className="mb-3 block text-lg font-semibold text-primary">
                  Professional
                </span>
                <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                  <span>$256</span>
                  <span
                    className="text-base font-medium text-body-color dark:text-dark-6"
                  >
                    / year
                  </span>
                </h2>
                <p
                  className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6"
                >
                  Perfect for using in a Professional website or a client project.
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                    Unlimited Users
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    All UI components
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Lifetime access
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Free updates
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Use on Unlimited project
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    12 Months support
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                >
                  Choose Professional
                </a>

                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.09" />
                          <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src={hospitail} width={900} />
              <div className="flex justify-between items-center mb-5 text-gray-500">

                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Tutorial
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How to quickly deploy a static website</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">
                    Jese Leos
                  </span>
                </div>
                <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src={hospitail} width={900} />
              <div className="flex justify-between items-center mb-5 text-gray-500">

                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Tutorial
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How to quickly deploy a static website</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">
                    Jese Leos
                  </span>
                </div>
                <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src={hospitail} width={900} />
              <div className="flex justify-between items-center mb-5 text-gray-500">

                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Tutorial
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How to quickly deploy a static website</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">
                    Jese Leos
                  </span>
                </div>
                <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="pb-20 pt-20 bg-white lg:pb-[120px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div
            x-data="
            {
              slides: ['1','2','3'],
              activeSlide: 1,
              activeButton: 'w-[30px] bg-primary',
              button: 'w-[10px] bg-[#E4E4E4]'
            }
          "
          >
            <div className="relative flex justify-center">
              <div
                className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0"
              >
                <div
                  className="flex-no-wrap snap mx-auto flex h-auto w-full max-w-[300px] overflow-hidden transition-all xs:max-w-[368px] sm:max-w-[508px] md:max-w-[630px] lg:max-w-[738px] 2xl:max-w-[910px]"
                  x-ref="carousel"
                >
                  <div
                    className="mx-auto h-full min-w-[300px] xs:min-w-[368px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[910px]"
                  >
                    <div className="w-full md:flex">
                      <div
                        className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] xl:max-w-[310px] 2xl:mr-16"
                      >
                        <img
                          src="assets/images/testimonials/testimonial-01/image-01.jpg"
                          alt="image"
                          className="w-full"
                        />
                        <span
                          className="absolute -left-6 -top-6 z-[-1] hidden sm:block"
                        >
                          <svg
                            width="77"
                            height="77"
                            viewBox="0 0 77 77"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="1.66343"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 1.66343 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 1.66343 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 16.3016 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 16.3016 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 30.9398 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 30.9398 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 45.578 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 45.578 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 60.2162 74.5216)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 74.6634 74.5216)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 60.2162 30.9398)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 74.6634 30.9398)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 1.66343 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 1.66343 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 16.3016 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 16.3016 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 30.9398 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 30.9398 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 45.578 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 45.578 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 60.2162 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 74.6634 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 60.2162 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 74.6634 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 1.66343 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 1.66343 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 16.3016 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 16.3016 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 30.9398 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 30.9398 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 45.578 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 45.578 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="45.2457"
                              r="1.66343"
                              transform="rotate(-90 60.2162 45.2457)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="45.2457"
                              r="1.66343"
                              transform="rotate(-90 74.6634 45.2457)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 60.2162 1.66371)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 74.6634 1.66371)"
                              fill="#3758F9"
                            />
                          </svg>
                        </span>
                        <span className="absolute -bottom-6 -right-6 z-[-1]">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                              stroke="#13C296"
                              stroke-width="6"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="w-full">
                        <div>
                          <div className="mb-8 mt-5">
                            <img
                              src="assets/images/testimonials/testimonial-01/lineicon.svg"
                              alt="lineicon"
                              className="dark:hidden"
                            />
                            <img
                              src="assets/images/testimonials/testimonial-01/lineicon-white.svg"
                              alt="lineicon"
                              className="hidden dark:block"
                            />
                          </div>
                          <p
                            className="mb-11 text-base font-normal italic leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]"
                          >
                            File storage made easy – including powerful features
                            you won’t find anywhere else. Whether you’re.
                          </p>

                          <h4
                            className="mb-2 text-[22px] font-semibold leading-[27px] text-dark dark:text-white"
                          >
                            Larry Diamond
                          </h4>
                          <p className="text-base text-body-color dark:text-dark-6">
                            Chief Executive Officer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mx-auto h-full min-w-[300px] xs:min-w-[368px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[910px]"
                  >
                    <div className="w-full md:flex">
                      <div
                        className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] xl:max-w-[310px] 2xl:mr-16"
                      >
                        <img
                          src="assets/images/testimonials/testimonial-01/image-01.jpg"
                          alt="image"
                          className="w-full"
                        />
                        <span
                          className="absolute -left-6 -top-6 z-[-1] hidden sm:block"
                        >
                          <svg
                            width="77"
                            height="77"
                            viewBox="0 0 77 77"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="1.66343"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 1.66343 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 1.66343 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 16.3016 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 16.3016 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 30.9398 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 30.9398 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 45.578 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 45.578 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 60.2162 74.5216)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 74.6634 74.5216)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 60.2162 30.9398)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 74.6634 30.9398)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 1.66343 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 1.66343 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 16.3016 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 16.3016 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 30.9398 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 30.9398 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 45.578 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 45.578 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 60.2162 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 74.6634 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 60.2162 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 74.6634 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 1.66343 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 1.66343 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 16.3016 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 16.3016 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 30.9398 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 30.9398 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 45.578 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 45.578 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="45.2457"
                              r="1.66343"
                              transform="rotate(-90 60.2162 45.2457)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="45.2457"
                              r="1.66343"
                              transform="rotate(-90 74.6634 45.2457)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 60.2162 1.66371)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 74.6634 1.66371)"
                              fill="#3758F9"
                            />
                          </svg>
                        </span>
                        <span className="absolute -bottom-6 -right-6 z-[-1]">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                              stroke="#13C296"
                              stroke-width="6"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="w-full">
                        <div>
                          <div className="mb-8 mt-5">
                            <img
                              src="assets/images/testimonials/testimonial-01/lineicon.svg"
                              alt="lineicon"
                              className="dark:hidden"
                            />
                            <img
                              src="assets/images/testimonials/testimonial-01/lineicon-white.svg"
                              alt="lineicon"
                              className="hidden dark:block"
                            />
                          </div>
                          <p
                            className="mb-11 text-base font-normal italic leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]"
                          >
                            File storage made easy – including powerful features
                            you won’t find anywhere else. Whether you’re.
                          </p>

                          <h4
                            className="mb-2 text-[22px] font-semibold leading-[27px] text-dark dark:text-white"
                          >
                            Larry Diamond
                          </h4>
                          <p className="text-base text-body-color dark:text-dark-6">
                            Chief Executive Officer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mx-auto h-full min-w-[300px] xs:min-w-[368px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[910px]"
                  >
                    <div className="w-full md:flex">
                      <div
                        className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] xl:max-w-[310px] 2xl:mr-16"
                      >
                        <img
                          src="assets/images/testimonials/testimonial-01/image-01.jpg"
                          alt="image"
                          className="w-full"
                        />
                        <span
                          className="absolute -left-6 -top-6 z-[-1] hidden sm:block"
                        >
                          <svg
                            width="77"
                            height="77"
                            viewBox="0 0 77 77"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="1.66343"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 1.66343 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 1.66343 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 16.3016 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 16.3016 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 30.9398 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 30.9398 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 45.578 74.5221)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="30.9401"
                              r="1.66343"
                              transform="rotate(-90 45.578 30.9401)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 60.2162 74.5216)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 74.6634 74.5216)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 60.2162 30.9398)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 74.6634 30.9398)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 1.66343 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 1.66343 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 16.3016 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 16.3016 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 30.9398 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 30.9398 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 45.578 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 45.578 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 60.2162 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 74.6634 59.8839)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 60.2162 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 74.6634 16.3017)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 1.66343 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="1.66343"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 1.66343 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 16.3016 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="16.3016"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 16.3016 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 30.9398 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="30.9398"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 30.9398 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 45.578 45.2455)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="45.578"
                              cy="1.66347"
                              r="1.66343"
                              transform="rotate(-90 45.578 1.66347)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="45.2457"
                              r="1.66343"
                              transform="rotate(-90 60.2162 45.2457)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="45.2457"
                              r="1.66343"
                              transform="rotate(-90 74.6634 45.2457)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="60.2162"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 60.2162 1.66371)"
                              fill="#3758F9"
                            />
                            <circle
                              cx="74.6634"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 74.6634 1.66371)"
                              fill="#3758F9"
                            />
                          </svg>
                        </span>
                        <span className="absolute -bottom-6 -right-6 z-[-1]">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                              stroke="#13C296"
                              stroke-width="6"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="w-full">
                        <div>
                          <div className="mb-8 mt-5">
                            <img
                              src="assets/images/testimonials/testimonial-01/lineicon.svg"
                              alt="lineicon"
                              className="dark:hidden"
                            />
                            <img
                              src="assets/images/testimonials/testimonial-01/lineicon-white.svg"
                              alt="lineicon"
                              className="hidden dark:block"
                            />
                          </div>
                          <p
                            className="mb-11 text-base font-normal italic leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]"
                          >
                            File storage made easy – including powerful features
                            you won’t find anywhere else. Whether you’re.
                          </p>

                          <h4
                            className="mb-2 text-[22px] font-semibold leading-[27px] text-dark dark:text-white"
                          >
                            Larry Diamond
                          </h4>
                          <p className="text-base text-body-color dark:text-dark-6">
                            Chief Executive Officer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -bottom-7 left-0 right-0 flex items-center justify-center gap-5 sm:bottom-0 lg:pl-[120px] 2xl:bottom-8 2xl:pl-[78px]"
                >
                  <button
                    className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        d="M17.5 9.5H4.15625L9.46875 4.09375C9.75 3.8125 9.75 3.375 9.46875 3.09375C9.1875 2.8125 8.75 2.8125 8.46875 3.09375L2 9.65625C1.71875 9.9375 1.71875 10.375 2 10.6562L8.46875 17.2188C8.59375 17.3438 8.78125 17.4375 8.96875 17.4375C9.15625 17.4375 9.3125 17.375 9.46875 17.25C9.75 16.9687 9.75 16.5313 9.46875 16.25L4.1875 10.9062H17.5C17.875 10.9062 18.1875 10.5937 18.1875 10.2187C18.1875 9.8125 17.875 9.5 17.5 9.5Z"
                        fill=""
                      />
                    </svg>
                  </button>
                  <button
                    className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
      <Footer />
    </>
  )
}

export default Home;