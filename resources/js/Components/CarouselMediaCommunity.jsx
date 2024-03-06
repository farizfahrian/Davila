import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CarouselMediaCommunity = () => {
    const sliderRef = useRef(null); // Mendefinisikan referensi untuk Slider

    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1250,
        cssEase: "ease-out",
        arrows: false,
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext(); // Memanggil metode slickNext dari Slider
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev(); // Memanggil metode slickPrev dari Slider
    };

    return (
        <section className="container ml-auto mr-auto lg:ml-auto ">
            <Slider {...settings} ref={sliderRef}>
                <div>
                    <div className="mx-8 grid grid-cols-1 gap-12 py-8 md:mx-8 md:gap-8 lg:mx-12 lg:grid-cols-2 xl:mx-32">
                        <div>
                            <h1 className="mb-6 text-3xl font-black">
                                KALTIMFOLKS
                            </h1>
                            <p className="text-xl">
                                KALTIMFOLKS is a digital media company that
                                focuses on disseminating information about news,
                                arts, culture, social issues, economy, and
                                brands or creative culture originating from East
                                Kalimantan. KALTIMFOLKS also provides up-to-date
                                information from both local and international
                                sources.
                                <br />
                                <br />
                                We strive to be East Kalimantan's top online
                                media, representing the future of our culture
                                and connecting communities. KALTIMFOLKS can
                                provide a variety of high-quality content and
                                can collaborate and synergize with creative
                                talents so that the digital ecosystem and
                                community can develop widely and sustainably in
                                East Kalimantan
                            </p>
                            <ul className="flex">
                                <li>
                                    <div
                                        className="prev-arrow mt-5 flex h-12 w-24 items-center justify-center rounded-full bg-black text-white duration-100  hover:bg-gray-100 hover:text-black"
                                        onClick={goToPrevSlide}
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowLeft}
                                            size="2x"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="next-arrow ms-4 mt-5 flex h-12 w-24 items-center justify-center rounded-full bg-black text-white duration-100 hover:bg-gray-100 hover:text-black"
                                        onClick={goToNextSlide}
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            size="2x"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="h-96 w-full overflow-hidden rounded-3xl bg-white ">
                            <img
                                className="h-full w-full object-cover"
                                src="/frontend/images/kaltimfolks.png"
                                alt="kaltimfolks"
                            />
                        </div>
                    </div>
                    <section className="py-12 xl:py-16">
                        <div className="mx-8 grid grid-cols-1 gap-4 md:mx-8 lg:mx-8 lg:grid-cols-2 xl:mx-32 xl:grid-cols-2 2xl:mx-32">
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/kaltimfolks_1.png"
                                    alt="Placeholder"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/kaltimfolks_2.png"
                                    alt="Placeholder"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/kaltimfolks_3.png"
                                    alt="Placeholder"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/kaltimfolks_4.png"
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </Slider>
        </section>
    );
};

export default CarouselMediaCommunity;
