import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CarouselDavilaCircle = () => {
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
                    <div className="mx-4 grid grid-cols-1 gap-12 py-8 md:mx-8 md:gap-8 lg:mx-12 lg:grid-cols-2 xl:mx-32">
                        <div>
                            <h1 className="mb-6 text-3xl font-black">
                                Tiara Bintang
                            </h1>
                            <p className="text-xl">
                                Tiara Bintang is a singer, content creator who
                                lives in the city of Samarinda. Her various
                                singles and original content have been released
                                and attracted the interest of many people.
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
                        <div className="h-auto w-full overflow-hidden rounded-3xl bg-white ">
                            <img
                                className="h-full w-full object-cover"
                                src="/frontend/images/tiara_bintang_1.png"
                                alt="tiara_bintang_1"
                            />
                        </div>
                    </div>
                    <section className="py-12 xl:py-16">
                        <div className="mx-8 grid grid-cols-1 gap-4 md:mx-8 lg:mx-8 lg:grid-cols-2 xl:mx-32 xl:grid-cols-2 2xl:mx-32">
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/tiara_bintang_2.png"
                                    alt="tiara_bintang_2"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/tiara_bintang_3.png"
                                    alt="tiara_bintang_3"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/tiara_bintang_4.png"
                                    alt="tiara_bintang_4"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/tiara_bintang_5.png"
                                    alt="tiara_bintang_5"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <div className="mx-4 grid grid-cols-1 gap-12 py-8 md:mx-8 md:gap-8 lg:mx-12 lg:grid-cols-2 xl:mx-32">
                        <div>
                            <h1 className="mb-6 text-3xl font-black">Naila</h1>
                            <p className="text-xl">
                                Naila is a celebgram from the city of
                                samarinda.the content she shares on social media
                                (twitter,tiktok & instagram) attracts many
                                people tointeract on her personal social media
                                accounts.
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
                        <div className="h-auto w-full overflow-hidden rounded-3xl bg-white ">
                            <img
                                className="h-full w-full object-cover"
                                src="/frontend/images/naila_1.png"
                                alt="naila_1"
                            />
                        </div>
                    </div>
                    <section className="py-12 xl:py-16">
                        <div className="mx-8 grid grid-cols-1 gap-4 md:mx-8 lg:mx-8 lg:grid-cols-2 xl:mx-32 xl:grid-cols-2 2xl:mx-32">
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/naila_2.png"
                                    alt="naila_2"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/naila_3.png"
                                    alt="naila_3"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/naila_4.png"
                                    alt="naila_4"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/naila_5.png"
                                    alt="naila_5"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <div className="mx-4 grid grid-cols-1 gap-12 py-8 md:mx-8 md:gap-8 lg:mx-12 lg:grid-cols-2 xl:mx-32">
                        <div>
                            <h1 className="mb-6 text-3xl font-black">Arya</h1>
                            <p className="text-xl">
                                Arya is the next rising content creator who
                                lives inthe city of Samarinda. His various
                                original contents have been released and
                                attracted many people to visit his personal
                                social media accounts because his unique
                                character.
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
                        <div className="h-auto w-full overflow-hidden rounded-3xl bg-white ">
                            <img
                                className="h-full w-full object-cover"
                                src="/frontend/images/arya_1.png"
                                alt="arya_1"
                            />
                        </div>
                    </div>
                    <section className="py-12 xl:py-16">
                        <div className="mx-8 grid grid-cols-1 gap-4 md:mx-8 lg:mx-8 lg:grid-cols-2 xl:mx-32 xl:grid-cols-2 2xl:mx-32">
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/arya_2.png"
                                    alt="arya_2"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/arya_3.png"
                                    alt="arya_3"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/arya_4.png"
                                    alt="arya_4"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/arya_5.png"
                                    alt="arya_5"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </Slider>
        </section>
    );
};

export default CarouselDavilaCircle;
