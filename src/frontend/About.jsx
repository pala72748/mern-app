import React from 'react';
import Header from './Header/Header';
import Footer from './footer/footer';

const About = () => {
    const iconBoxes = [
        {
            icon: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg', // Replace with the actual icon path
            title: 'Box 1',
            description: 'Description for Box 1.',
        },
        {
            icon: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg', // Replace with the actual icon path
            title: 'Box 2',
            description: 'Description for Box 2.',
        },
        {
            icon: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg', // Replace with the actual icon path
            title: 'Box 3',
            description: 'Description for Box 3.',
        },
    ];
    return (
        <>
            <div className='bg-white'>
                <Header />
                <div className="container mx-auto mt-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg leading-relaxed">
                        Welcome to our About Us page! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        vehicula ex ut erat facilisis, at convallis lacus congue. Proin id neque et arcu
                        bibendum hendrerit.
                    </p>
                </div>
            </div>
            <section
                className="overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
            >
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap items-center justify-between">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src="assets/images/about/image-1.jpg"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src="assets/images/about/image-2.jpg"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src="assets/images/about/image-3.jpg"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                        <span className="absolute -bottom-7 -right-7 z-[-1]">
                                            <svg
                                                width="134"
                                                height="106"
                                                viewBox="0 0 134 106"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="1.66667"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="31"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3334"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3334 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="103"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="132"
                                                    cy="104"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="31"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="103"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="132"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="74.6673"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 74.6673)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="31"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="31"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="103"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="103"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="132"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="132"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="31"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="31"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="103"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="103"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="132"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="132"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="31"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="31"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="103"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="103"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="132"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="132"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 1.66683)"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="mb-4 block text-lg font-semibold text-primary">
                                    Why Choose Us
                                </span>
                                <h2
                                    className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]"
                                >
                                    Make your customers happy by giving services.
                                </h2>
                                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less.
                                </p>
                                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                    A domain name is one of the first steps to establishing your
                                    brand. Secure a consistent brand image with a domain name that
                                    matches your business.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pb-12 pt-20 bg-white lg:pb-[90px] lg:pt-[120px]">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                            <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                                <span class="mb-2 block text-lg font-semibold text-primary">
                                    Our Services
                                </span>
                                <h2
                                    class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                                >
                                    What We Offer
                                </h2>
                                <p class="text-base text-body-color dark:text-dark-6">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10"
                            >
                                <div
                                    class="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
                                >
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h4
                                    class="mb-[14px] text-2xl font-semibold text-dark dark:text-white"
                                >
                                    Refreshing Design
                                </h4>
                                <p class="text-body-color dark:text-dark-6">
                                    We dejoy working with discerning clients, people for whom
                                    qualuty, service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10"
                            >
                                <div
                                    class="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
                                >
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.89195 14.625C10.9995 10.1252 13.769 7.875 18.1996 7.875C24.8458 7.875 25.6765 12.9375 28.9996 13.7812C31.2151 14.3439 33.1535 13.5002 34.815 11.25C33.7075 15.7498 30.9379 18 26.5073 18C19.8611 18 19.0304 12.9375 15.7073 12.0938C13.4918 11.5311 11.5535 12.3748 9.89195 14.625ZM1.58423 24.75C2.69174 20.2502 5.46132 18 9.89195 18C16.5381 18 17.3689 23.0625 20.692 23.9062C22.9075 24.4689 24.8458 23.6252 26.5073 21.375C25.3998 25.8748 22.6302 28.125 18.1996 28.125C11.5535 28.125 10.7227 23.0625 7.39963 22.2188C5.18405 21.6561 3.24576 22.4998 1.58423 24.75Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h4
                                    class="mb-[14px] text-2xl font-semibold text-dark dark:text-white"
                                >
                                    Based on Tailwind CSS
                                </h4>
                                <p class="text-body-color dark:text-dark-6">
                                    We dejoy working with discerning clients, people for whom
                                    qualuty, service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10"
                            >
                                <div
                                    class="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
                                >
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.2063 1.9126H5.0625C3.15 1.9126 1.575 3.4876 1.575 5.4001V12.5438C1.575 14.4563 3.15 16.0313 5.0625 16.0313H12.2063C14.1188 16.0313 15.6938 14.4563 15.6938 12.5438V5.45635C15.75 3.4876 14.175 1.9126 12.2063 1.9126ZM13.2188 12.6001C13.2188 13.1626 12.7688 13.6126 12.2063 13.6126H5.0625C4.5 13.6126 4.05 13.1626 4.05 12.6001V5.45635C4.05 4.89385 4.5 4.44385 5.0625 4.44385H12.2063C12.7688 4.44385 13.2188 4.89385 13.2188 5.45635V12.6001Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M30.9375 1.9126H23.7937C21.8812 1.9126 20.3062 3.4876 20.3062 5.4001V12.5438C20.3062 14.4563 21.8812 16.0313 23.7937 16.0313H30.9375C32.85 16.0313 34.425 14.4563 34.425 12.5438V5.45635C34.425 3.4876 32.85 1.9126 30.9375 1.9126ZM31.95 12.6001C31.95 13.1626 31.5 13.6126 30.9375 13.6126H23.7937C23.2312 13.6126 22.7812 13.1626 22.7812 12.6001V5.45635C22.7812 4.89385 23.2312 4.44385 23.7937 4.44385H30.9375C31.5 4.44385 31.95 4.89385 31.95 5.45635V12.6001Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12.2063 19.8564H5.0625C3.15 19.8564 1.575 21.4314 1.575 23.3439V30.4877C1.575 32.4002 3.15 33.9752 5.0625 33.9752H12.2063C14.1188 33.9752 15.6938 32.4002 15.6938 30.4877V23.4002C15.75 21.4314 14.175 19.8564 12.2063 19.8564ZM13.2188 30.5439C13.2188 31.1064 12.7688 31.5564 12.2063 31.5564H5.0625C4.5 31.5564 4.05 31.1064 4.05 30.5439V23.4002C4.05 22.8377 4.5 22.3877 5.0625 22.3877H12.2063C12.7688 22.3877 13.2188 22.8377 13.2188 23.4002V30.5439Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M30.9375 19.8564H23.7937C21.8812 19.8564 20.3062 21.4314 20.3062 23.3439V30.4877C20.3062 32.4002 21.8812 33.9752 23.7937 33.9752H30.9375C32.85 33.9752 34.425 32.4002 34.425 30.4877V23.4002C34.425 21.4314 32.85 19.8564 30.9375 19.8564ZM31.95 30.5439C31.95 31.1064 31.5 31.5564 30.9375 31.5564H23.7937C23.2312 31.5564 22.7812 31.1064 22.7812 30.5439V23.4002C22.7812 22.8377 23.2312 22.3877 23.7937 22.3877H30.9375C31.5 22.3877 31.95 22.8377 31.95 23.4002V30.5439Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h4
                                    class="mb-[14px] text-2xl font-semibold text-dark dark:text-white"
                                >
                                    100+ Components
                                </h4>
                                <p class="text-body-color dark:text-dark-6">
                                    We dejoy working with discerning clients, people for whom
                                    qualuty, service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10"
                            >
                                <div
                                    class="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
                                >
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M30.2625 10.6312C27.1688 7.36875 22.8375 5.34375 18 5.34375C8.60626 5.34375 1.01251 12.9937 1.01251 22.3875C1.01251 25.0312 1.63126 27.6187 2.75626 29.925C2.92501 30.2625 3.20626 30.4875 3.54376 30.6C3.65626 30.6 3.71251 30.6562 3.82501 30.6562C3.82501 30.6562 3.82501 30.6562 3.88126 30.6562C3.88126 30.6562 3.88126 30.6562 3.93751 30.6562C3.99376 30.6562 4.05001 30.6562 4.10626 30.6562C4.21876 30.6562 4.38751 30.6 4.50001 30.5437L6.80626 29.4187C7.42501 29.1375 7.70626 28.35 7.36876 27.7312C7.03126 27.1125 6.30001 26.8312 5.68126 27.1687L4.55626 27.7312C3.88126 26.1 3.60001 24.3562 3.54376 22.5562H5.90626C6.58126 22.5562 7.20001 21.9937 7.20001 21.2625C7.20001 20.5312 6.63751 19.9687 5.90626 19.9687H3.71251C4.10626 17.4937 5.17501 15.2437 6.69376 13.3875L8.71876 15.4125C8.94376 15.6375 9.28126 15.8062 9.61876 15.8062C9.95626 15.8062 10.2938 15.6937 10.5188 15.4125C11.025 14.9062 11.025 14.1187 10.5188 13.6125L8.43751 11.5312C10.6875 9.5625 13.5563 8.2125 16.7625 7.9875V11.4187C16.7625 12.0937 17.325 12.7125 18.0563 12.7125C18.7313 12.7125 19.35 12.15 19.35 11.4187V7.9875C22.5 8.26875 25.425 9.5625 27.675 11.5312L26.1 13.1062C25.5938 13.6125 25.5938 14.4 26.1 14.9062C26.325 15.1312 26.6625 15.3 27 15.3C27.3375 15.3 27.675 15.1875 27.9 14.9062L29.4188 13.3875C30.9375 15.2437 31.95 17.4937 32.4 19.9687H30.2063C29.5313 19.9687 28.9125 20.5312 28.9125 21.2625C28.9125 21.9937 29.475 22.5562 30.2063 22.5562H32.5688C32.5688 24.3562 32.2313 26.1 31.5563 27.7875L30.4313 27.225C29.8125 26.8875 29.025 27.1687 28.7438 27.7875C28.4625 28.4062 28.6875 29.1937 29.3063 29.475L31.6125 30.6C31.7813 30.7125 32.0063 30.7125 32.175 30.7125C32.175 30.7125 32.175 30.7125 32.2313 30.7125C32.2313 30.7125 32.2313 30.7125 32.2875 30.7125C32.7375 30.7125 33.1875 30.4312 33.4125 30.0375C34.5938 27.7312 35.1563 25.0875 35.1563 22.5C35.0438 17.8312 33.1875 13.6687 30.2625 10.6312Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M21.4313 19.3499L17.6625 22.1624C16.9875 22.2749 16.3688 22.6687 15.975 23.2312C15.9188 23.3437 15.8625 23.3999 15.8063 23.5124L15.6938 23.6249H15.75C15.1313 24.8062 15.4688 26.2687 16.5938 27.1124C17.7188 27.8999 19.2375 27.7874 20.1375 26.8312H20.1938L20.25 26.7187C20.3063 26.6624 20.4188 26.5499 20.475 26.4374C20.925 25.8749 21.0375 25.1437 20.9813 24.4687L22.4438 19.9687C22.6125 19.4624 21.9375 19.0124 21.4313 19.3499Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h4
                                    class="mb-[14px] text-2xl font-semibold text-dark dark:text-white"
                                >
                                    Speed Optimized
                                </h4>
                                <p class="text-body-color dark:text-dark-6">
                                    We dejoy working with discerning clients, people for whom
                                    qualuty, service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10"
                            >
                                <div
                                    class="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
                                >
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M30.0937 21.8251L29.6437 21.6001L30.2062 21.2626C31.3312 20.5876 31.95 19.4063 31.95 18.0563C31.95 16.7626 31.2187 15.5813 30.0937 14.9063L28.9125 14.2313L30.2062 13.4438C31.3312 12.7688 31.95 11.5876 31.95 10.2376C31.95 8.94385 31.2187 7.7626 30.0937 7.14385L19.9125 1.4626C18.7875 0.843848 17.3812 0.843848 16.3125 1.4626L5.84999 7.5376C4.72499 8.2126 4.04999 9.39385 4.04999 10.6876C4.04999 11.9813 4.72499 13.2188 5.84999 13.8376L7.08749 14.5688L5.84999 15.3001C4.72499 15.9751 4.04999 17.1563 4.04999 18.4501C4.04999 19.7438 4.72499 20.9813 5.84999 21.6001L6.35624 21.8813L5.84999 22.1626C4.72499 22.8376 3.99374 24.0188 3.99374 25.3126C3.99374 26.6626 4.66874 27.8438 5.79374 28.4626L16.1437 34.4813C16.7062 34.8188 17.325 34.9876 18 34.9876C18.675 34.9876 19.35 34.8188 19.9125 34.4251L30.2625 28.1251C31.3875 27.4501 32.0062 26.2688 32.0062 24.9188C31.95 23.6251 31.275 22.4438 30.0937 21.8251ZM6.52499 10.6876C6.52499 10.5188 6.58124 10.0126 7.08749 9.73135L17.55 3.65635C17.8875 3.43135 18.3375 3.43135 18.675 3.65635L28.9125 9.3376C29.4187 9.61885 29.475 10.1251 29.475 10.2938C29.475 10.4626 29.4187 10.9688 28.9125 11.3063L18.6187 17.6626C18.2812 17.8876 17.8312 17.8876 17.4375 17.6626L7.08749 11.6438C6.58124 11.3626 6.52499 10.8563 6.52499 10.6876ZM7.08749 17.4938L9.56249 16.0313L16.1437 19.8563C16.7062 20.1938 17.325 20.3626 18 20.3626C18.675 20.3626 19.35 20.1938 19.9125 19.8001L26.4375 15.8063L28.8562 17.1563C29.3625 17.4376 29.4187 17.9438 29.4187 18.1126C29.4187 18.2813 29.3625 18.7876 28.8562 19.1251L18.6187 25.4251C18.2812 25.6501 17.8312 25.6501 17.4375 25.4251L7.08749 19.4063C6.58124 19.1251 6.52499 18.6188 6.52499 18.4501C6.52499 18.2813 6.58124 17.7751 7.08749 17.4938ZM28.9125 25.9876L18.6187 32.3438C18.2812 32.5688 17.8312 32.5688 17.4375 32.3438L7.08749 26.3251C6.58124 26.0438 6.52499 25.5376 6.52499 25.3688C6.52499 25.2001 6.58124 24.6938 7.08749 24.4126L8.83124 23.4001L16.2 27.6751C16.7625 28.0126 17.3812 28.1813 18.0562 28.1813C18.7312 28.1813 19.4062 28.0126 19.9687 27.6188L27.225 23.1751L28.9125 24.0751C29.4187 24.3563 29.475 24.8626 29.475 25.0313C29.475 25.2001 29.4187 25.7063 28.9125 25.9876Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h4
                                    class="mb-[14px] text-2xl font-semibold text-dark dark:text-white"
                                >
                                    Fully Customizable
                                </h4>
                                <p class="text-body-color dark:text-dark-6">
                                    We dejoy working with discerning clients, people for whom
                                    qualuty, service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10"
                            >
                                <div
                                    class="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
                                >
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.725 16.3124C4.89375 16.3124 5.11875 16.2562 5.2875 16.1999L11.5312 14.0062C12.2062 13.7812 12.5437 13.0499 12.3187 12.3749C12.0937 11.6999 11.3625 11.3624 10.6875 11.5874L6.80625 12.9374C8.6625 8.0999 13.3875 4.8374 18.7875 4.8374C24.6938 4.8374 29.8125 8.7749 31.275 14.3999C31.4437 15.0749 32.1187 15.4687 32.7937 15.2999C33.4687 15.1312 33.8625 14.4562 33.6938 13.7812C31.95 7.03115 25.8187 2.30615 18.7312 2.30615C12.4312 2.30615 6.8625 6.01865 4.55625 11.5874L3.375 8.2124C3.15 7.5374 2.41875 7.1999 1.74375 7.4249C1.06875 7.6499 0.73125 8.38115 0.95625 9.05615L3.09375 15.1874C3.43125 15.9187 4.05 16.3124 4.725 16.3124Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M34.9312 27.9562L32.625 21.9375C32.4562 21.5437 32.175 21.2062 31.7812 21.0375C31.3875 20.8687 30.9375 20.8687 30.5437 21.0375L24.3562 23.3999C23.6812 23.6249 23.4 24.3562 23.625 25.0312C23.85 25.7062 24.5813 25.9875 25.2563 25.7625L29.1375 24.3C26.8875 28.4062 22.5 31.1062 17.6062 31.1062C12.0375 31.1062 7.14375 27.6187 5.4 22.4437C5.175 21.7687 4.44375 21.4312 3.825 21.6562C3.15 21.8812 2.8125 22.6124 3.0375 23.2312C5.11875 29.4187 10.9687 33.5812 17.6062 33.5812C23.4 33.5812 28.6312 30.375 31.275 25.425L32.5688 28.8562C32.7375 29.3625 33.2437 29.6437 33.75 29.6437C33.9187 29.6437 34.0312 29.6437 34.2 29.5312C34.875 29.3625 35.1562 28.6312 34.9312 27.9562Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h4
                                    class="mb-[14px] text-2xl font-semibold text-dark dark:text-white"
                                >
                                    Regular Updates
                                </h4>
                                <p class="text-body-color dark:text-dark-6">
                                    We dejoy working with discerning clients, people for whom
                                    qualuty, service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
            >
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                            <div class="mx-auto mb-[60px] max-w-[510px] text-center">
                                <span class="mb-2 block text-lg font-semibold text-primary">
                                    Pricing Table
                                </span>
                                <h2
                                    class="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                                >
                                    Our Pricing Plan
                                </h2>
                                <p class="text-base text-body-color dark:text-dark-6">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="-mx-4 flex flex-wrap justify-center">
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]"
                            >
                                <span class="mb-3 block text-lg font-semibold text-primary">
                                    Personal
                                </span>
                                <h2 class="mb-5 text-[42px] font-bold text-dark dark:text-white">
                                    <span>$59</span>
                                    <span
                                        class="text-base font-medium text-body-color dark:text-dark-6"
                                    >
                                        / year
                                    </span>
                                </h2>
                                <p
                                    class="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6"
                                >
                                    Perfect for using in a personal website or a client project.
                                </p>
                                <div class="mb-9 flex flex-col gap-[14px]">
                                    <p class="text-base text-body-color dark:text-dark-6">1 User</p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        All UI components
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Lifetime access
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Free updates
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Use on 1 (one) project
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        3 Months support
                                    </p>
                                </div>
                                <a
                                    href="javascript:void(0)"
                                    class="block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                                >
                                    Choose Personal
                                </a>

                                <div>
                                    <span class="absolute right-0 top-7 z-[-1]">
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
                                    <span class="absolute right-4 top-4 z-[-1]">
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
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]"
                            >
                                <span class="mb-3 block text-lg font-semibold text-primary">
                                    Business
                                </span>
                                <h2 class="mb-5 text-[42px] font-bold text-dark dark:text-white">
                                    <span>$199</span>
                                    <span
                                        class="text-base font-medium text-body-color dark:text-dark-6"
                                    >
                                        / year
                                    </span>
                                </h2>
                                <p
                                    class="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6"
                                >
                                    Perfect for using in a Business website or a client project.
                                </p>
                                <div class="mb-9 flex flex-col gap-[14px]">
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        5 Users
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        All UI components
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Lifetime access
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Free updates
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Use on 3 (Three) project
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        4 Months support
                                    </p>
                                </div>
                                <a
                                    href="javascript:void(0)"
                                    class="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                                >
                                    Choose Business
                                </a>

                                <div>
                                    <span class="absolute right-0 top-7 z-[-1]">
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
                                    <span class="absolute right-4 top-4 z-[-1]">
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
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]"
                            >
                                <span class="mb-3 block text-lg font-semibold text-primary">
                                    Professional
                                </span>
                                <h2 class="mb-5 text-[42px] font-bold text-dark dark:text-white">
                                    <span>$256</span>
                                    <span
                                        class="text-base font-medium text-body-color dark:text-dark-6"
                                    >
                                        / year
                                    </span>
                                </h2>
                                <p
                                    class="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6"
                                >
                                    Perfect for using in a Professional website or a client project.
                                </p>
                                <div class="mb-9 flex flex-col gap-[14px]">
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Unlimited Users
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        All UI components
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Lifetime access
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Free updates
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        Use on Unlimited project
                                    </p>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        12 Months support
                                    </p>
                                </div>
                                <a
                                    href="javascript:void(0)"
                                    class="block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                                >
                                    Choose Professional
                                </a>

                                <div>
                                    <span class="absolute right-0 top-7 z-[-1]">
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
                                    <span class="absolute right-4 top-4 z-[-1]">
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
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why Choose Us</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" width={1000} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ffc000] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" width={1000} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ffc000] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" width={1000} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ffc000] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Jese Leos</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">CTO</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the flowbite platform and brand.</p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Michael Gough</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Michael drives the technical strategy of the flowbite platform and brand.</p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Lana Byrd</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Marketing & Sale</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Lana drives the technical strategy of the flowbite platform and brand.</p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;