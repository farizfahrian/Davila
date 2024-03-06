import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CarouselCulinaryDelight = () => {
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
                                HIDDEN STATE
                            </h1>
                            <p className="text-xl">
                                Hidden State; it's a sanctuary nestled far from
                                the city's hustle and bustle. It'swhere peace
                                seekers and quiet enthusiasts find solace,
                                savoring the art ofslowing down and connecting
                                with the serenity of their surroundings. With
                                itsunassuming charm, 'Hidden State' embodies the
                                essence of a friendlyneighborhood, where
                                regulars become friends and newcomers are
                                warmlywelcomed. It's a place where the world
                                outside fades into the background,making room
                                for whispered conversations, shared stories, and
                                the joy of findinglike-minded souls in the heart
                                of serenity.
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
                                src="/frontend/images/hidden_state_1.png"
                                alt="hidden_state_1"
                            />
                        </div>
                    </div>
                    <section className="py-12 xl:py-16">
                        <div className="mx-8 grid grid-cols-1 gap-4 md:mx-8 lg:mx-8 lg:grid-cols-2 xl:mx-32 xl:grid-cols-2 2xl:mx-32">
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/hidden_state_2.png"
                                    alt="hidden_state_2"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/hidden_state_3.png"
                                    alt="hidden_state_3"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/hidden_state_4.png"
                                    alt="hidden_state_4"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/hidden_state_5.png"
                                    alt="hidden_state_5"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <div className="mx-4 grid grid-cols-1 gap-12 py-8 md:mx-8 md:gap-8 lg:mx-12 lg:grid-cols-2 xl:mx-32">
                        <div>
                            <h1 className="mb-6 text-3xl font-black">
                                HIDDEN WINGS
                            </h1>
                            <p className="text-xl">
                                As the region's first 24-hour local fast food
                                brand, Hidden Wings is set torevolutionize the
                                late-night dining scene with its unique blend of
                                flavors and fun-filled experiences. Hidden Wings
                                proudly carries the motto, "Where Flavors
                                MeetFun," embodying a commitment to bring
                                happiness and excitement to the localcommunity.
                                This exciting new culinary journey is a result
                                of five months ofdedicated development, fueled
                                by the feedback and preferences of over
                                10,000visitors to Hidden State Cafe and the
                                Culinary Playland Samarinda event.Inspired by
                                American, Korean, and Japanese cuisines, Hidden
                                Wings hasmeticulously crafted a menu that caters
                                to the diverse tastes of the Samarindacommunity
                                while infusing a local touch.
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
                                src="/frontend/images/hidden_wings_1.png"
                                alt="hidden_wings_1"
                            />
                        </div>
                    </div>
                    <section className="py-12 xl:py-16">
                        <div className="mx-8 grid grid-cols-1 gap-4 md:mx-8 lg:mx-8 lg:grid-cols-2 xl:mx-32 xl:grid-cols-2 2xl:mx-32">
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/hidden_wings_2.png"
                                    alt="hidden_wings_2"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/hidden_wings_3.png"
                                    alt="hidden_wings_3"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/hidden_wings_4.png"
                                    alt="hidden_wings_4"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/hidden_wings_5.png"
                                    alt="hidden_wings_5"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </Slider>
        </section>
    );
};

export default CarouselCulinaryDelight;
