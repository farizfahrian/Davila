import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const AboutUs_Carousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1250,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="font-montserrat overflow-hidden bg-black px-4  pb-14  pt-28  opacity-95 sm:px-6 sm:pb-16 md:px-24 md:pb-20">
            <h1 className="mb-8 text-center text-3xl font-bold text-white md:mb-14 lg:mb-20 lg:text-4xl  ">
                About Davila Corp
            </h1>

            <div className="container mx-auto mb-10 sm:mb-12 md:mb-24">
                <Slider {...settings}>
                    <div className="px-1 grayscale duration-1000 hover:grayscale-0 md:px-2 lg:px-3">
                        <div className="h-72 overflow-hidden rounded-lg text-white md:h-80">
                            <img
                                className="h-full object-cover"
                                src="/frontend/images/about_us_1.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mt-12 px-1 grayscale duration-1000 hover:grayscale-0 md:px-2 lg:px-3">
                        <div className="h-72 overflow-hidden rounded-lg  text-white md:h-80">
                            <img
                                className="h-full object-cover "
                                src="/frontend/images/about_us_2.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="px-1 grayscale duration-1000 hover:grayscale-0 md:px-2 lg:px-3">
                        <div className="h-72 overflow-hidden rounded-lg  text-white md:h-80">
                            <img
                                className="h-full object-cover"
                                src="/frontend/images/about_us_3.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mt-12 px-1 grayscale duration-1000 hover:grayscale-0 md:px-2 lg:px-3">
                        <div className="h-72 overflow-hidden rounded-lg text-white md:h-80">
                            <img
                                className="h-full object-cover "
                                src="/frontend/images/about_us_4.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="px-1 grayscale duration-1000 hover:grayscale-0 md:px-2 lg:px-3">
                        <div className="h-72 overflow-hidden rounded-lg  text-white md:h-80">
                            <img
                                className="h-full object-cover"
                                src="/frontend/images/about_us_5.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mt-12 px-1 grayscale duration-1000 hover:grayscale-0 md:px-2 lg:px-3">
                        <div className="h-72 overflow-hidden rounded-lg  text-white md:h-80">
                            <img
                                className="h-full object-cover "
                                src="/frontend/images/about_us_6.png"
                                alt=""
                            />
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="px-15 container mx-auto grid grid-cols-1 px-4">
                <div>
                    <h1 className="mb-2 text-3xl font-thin text-white md:text-center  md:text-3xl">
                        Stellar Marketing for a Good Living
                    </h1>
                </div>
                <div className="mb-16 md:text-center">
                    <strong className="text-base font-thin text-white md:text-xl">
                        We believe in the power of collaboration. Our objective
                        as a multifaceted organization in East Borneo is to
                        foster a vibrant ecosystem where innovation, lifestyle,
                        media, and community come together. Our varied portfolio
                        includes a variety of enterprises, each with their own
                        unique contribution to the enrichment of everyday lives.
                    </strong>
                </div>
                <div className="flex justify-center">
                    <img
                        className="hidden h-auto  max-w-full md:block"
                        src="/frontend/images/ecosystem_desktop.png"
                        alt=""
                    />
                    <img
                        className=" h-auto max-w-full md:hidden"
                        src="/frontend/images/ecosystem_mobile.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs_Carousel;
