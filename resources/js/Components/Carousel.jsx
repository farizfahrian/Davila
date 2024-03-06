import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function NextArrow(props) {
    const { className, style, onClick } = props;
    const [isHovered, setIsHovered] = useState(false);
    const [bottomPosition, setBottomPosition] = useState(-70);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const handleResize = () => {
            // Update left position based on window width
            const windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                setBottomPosition(-15); // Adjust left position for smaller screens
            } else {
                setBottomPosition(-70); // Initial left position for larger screens
            }
        };

        handleResize(); // Call the resize handler initially

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                ...style,
                textAlign: "center", // Mengatur teks di tengah secara horizontal
                display: "block",
                position: "absolute",
                left: 100,
                bottom: bottomPosition,
                fontSize: "1.5rem",
                color: isHovered ? "white" : "black",
                backgroundColor: isHovered ? "grey" : "white",
                width: 80,
                borderRadius: 30,
            }}
            onClick={onClick}
            onMouseEnter={handleMouseEnter} // Menetapkan event handler untuk saat kursor masuk
            onMouseLeave={handleMouseLeave} // Menetapkan event handler untuk saat kursor meninggalkan
        >
            {/* Gunakan tag <FontAwesomeIcon> */}
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    const [isHovered, setIsHovered] = useState(false);
    const [bottomPosition, setBottomPosition] = useState(-70);

    // Handler untuk saat kursor masuk ke panah
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Handler untuk saat kursor meninggalkan panah
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() => {
        const handleResize = () => {
            // Update left position based on window width
            const windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                setBottomPosition(-15); // Adjust left position for smaller screens
            } else {
                setBottomPosition(-70); // Initial left position for larger screens
            }
        };

        handleResize(); // Call the resize handler initially

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                textAlign: "center", // Mengatur teks di tengah secara horizontal
                display: "block",
                position: "absolute",
                left: 10,
                bottom: bottomPosition,
                fontSize: "1.5rem",
                color: isHovered ? "white" : "black",
                backgroundColor: isHovered ? "grey" : "white",
                width: 80,
                borderRadius: 30,
            }}
            onClick={onClick}
            onMouseEnter={handleMouseEnter} // Menetapkan event handler untuk saat kursor masuk
            onMouseLeave={handleMouseLeave}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
    );
}

const Carousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1250,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className="container ml-auto mr-auto  w-11/12  lg:ml-auto lg:mr-0">
            <Slider {...settings}>
                <div className="px-2">
                    <div className="relative mb-10 h-96 overflow-hidden rounded-lg text-white md:mb-0">
                        <img
                            className="h-full object-cover"
                            src="/frontend/images/Creative_Campaign.jpg"
                            alt=""
                        />
                        <h1 className="absolute bottom-5 right-3 z-10 w-1/2 bg-opacity-100 px-4 py-2 text-xl font-bold text-white">
                            Creative Campaign
                        </h1>
                        <div className="absolute inset-0 rounded-lg bg-black opacity-70"></div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="relative mb-10 h-96 overflow-hidden rounded-lg text-white md:mb-0">
                        <img
                            className="h-full object-cover"
                            src="/frontend/images/marketing_strategy.jpg"
                            alt=""
                        />
                        <h1 className="absolute bottom-5 right-3 z-10 w-1/2 bg-opacity-100 px-4 py-2 text-xl font-bold text-white">
                            Marketing Consulting Services
                        </h1>
                        <div className="absolute inset-0 rounded-lg bg-black opacity-70"></div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="relative mb-10 h-96 overflow-hidden rounded-lg text-white md:mb-0">
                        <img
                            className="h-full object-cover"
                            src="/frontend/images/creative_content_production.jpg"
                            alt=""
                        />
                        <h1 className="absolute bottom-5 right-3 z-10 w-1/2 bg-opacity-100 px-4 py-2 text-xl font-bold text-white">
                            Creative Content Production
                        </h1>
                        <div className="absolute inset-0 rounded-lg bg-black opacity-70"></div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="relative mb-10 h-96 overflow-hidden rounded-lg text-white md:mb-0">
                        <img
                            className="h-full object-cover"
                            src="/frontend/images/market_brand.jpg"
                            alt=""
                        />
                        <h1 className="absolute bottom-5 right-3 z-10 w-1/2 bg-opacity-100 px-4 py-2 text-xl font-bold text-white">
                            Market Brand Research & Analysis
                        </h1>
                        <div className="absolute inset-0 rounded-lg bg-black opacity-70"></div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="relative mb-10 h-96 overflow-hidden rounded-lg text-white md:mb-0">
                        <img
                            className="h-full object-cover"
                            src="/frontend/images/performance.jpg"
                            alt=""
                        />
                        <h1 className="absolute bottom-5 right-3 z-10 w-1/2 bg-opacity-100 px-4 py-2 text-xl font-bold text-white">
                            Performance Based Marketing
                        </h1>
                        <div className="absolute inset-0 rounded-lg bg-black opacity-70"></div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default Carousel;
