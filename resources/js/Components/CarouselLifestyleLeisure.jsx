import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CarouselLifestyleLeisure = () => {
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
                            <h1 className="mb-6 text-3xl font-black">V3BKS</h1>
                            <p className="text-xl">
                                V3BKS Mini Soccer & Cafe, located in Samarinda
                                and catering to the entire East Kalimantan
                                region, is a premier destination for football
                                enthusiasts, dominating the market by appealing
                                to a broad demographic, from the lower to the
                                upperclass. It offers a FIFA-standard artificial
                                grass pitch, providing a high-qualitysporting
                                experience with features like FIFA-approved
                                STEMGRASS, ensuring resilience and wear
                                resistance. The facility, measuring 60×40
                                meters, adheres to Football Association
                                standards, complete with superior drainage and
                                grass quality. Averaging 23,832 visitors/month,
                                V3BKS showcases its widespread appeal. The venue
                                boasts an array of facilities, including a
                                FIFA-standard synthetic grass pitch, a lightning
                                rod for safety, clean and comfortable toilets
                                andshowers, a musholla for prayer, and the
                                Hidden State Cafe offering a variety of
                                delicious foods and beverages for up to 150
                                people. Additionally, it has spectator tribunes
                                for over 150 people and ample parking for 70
                                cars and 100 motorcycles.V3BKS Mini Soccer &
                                Cafe is committed to providing a unique and
                                unparalleled mini-soccer experience,
                                accommodating various market segments to ensure
                                aunique and fulfilling experience for every
                                visitor.
                                <br />
                                <br />
                                Founded in 2023 by H. Fitri Junaidi and Harry
                                Sivila, V3BKS Football Academy is apremier and
                                exclusive soccer academy in Samarinda, Citraland
                                City. Our missionis to provide high-quality
                                football training, preparing young players to
                                betalented, disciplined, and strong in
                                character. We are dedicated to creating
                                aninspiring football environment, focusing on
                                technical skills, tactics, and mentalaspects to
                                nurture and develop every child's potential on
                                the field. With ourcommitment to excellence,
                                V3BKS Football Academy aspires to produce
                                top-quality football players capable of
                                competing on both local and internationalstages,
                                shaping the future of football.
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
                                src="/frontend/images/v3bks_1.png"
                                alt="v3bks_1"
                            />
                        </div>
                    </div>
                    <section className="py-12 xl:py-16">
                        <div className="mx-8 grid grid-cols-1 gap-4 md:mx-8 lg:mx-8 lg:grid-cols-2 xl:mx-32 xl:grid-cols-2 2xl:mx-32">
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/v3bks_2.png"
                                    alt="v3bks_2"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/v3bks_3.png"
                                    alt="v3kbks_3"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/v3bks_4.png"
                                    alt="v3bks_4"
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-white sm:h-96">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/frontend/images/v3bks_5.png"
                                    alt="v3bks_5"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </Slider>
        </section>
    );
};

export default CarouselLifestyleLeisure;
