"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { TfiInstagram } from "react-icons/tfi";

const toInstagram = () => {
    window.location.href = "https://www.instagram.com/davila.corp/";
};

const Footer = () => {
    return (
        <section className=" bg-black font-montserrat text-white">
            <div className="container mx-auto grid gap-4 px-4 py-4 md:grid-cols-1 md:py-12 lg:grid-cols-3 lg:px-10 xl:px-32 ">
                <div className="mb-2 md:mb-0">
                    <p className="text-lg">LET’S COLLABORATE WITH</p>
                    <img
                        className="mb-2 h-16"
                        src="/frontend/images/davila-logo-white.png"
                        alt=""
                    />
                </div>
                <div className="mb-2 md:mb-0">
                    <h1 className="font-bold md:mb-2">Samarinda, Indonesia</h1>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p className="ms-4 mt-2 text-xs">
                            JL. D.I PANJAITAN CITRALAND CITY THE ORCHARD C5 /02
                            SAMARINDA, KALIMANTAN TIMUR 75117
                        </p>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} />
                        <p className="ms-4 mt-2 text-xs">(+62) 811-555254</p>
                    </div>
                </div>
                <div className="mb-2 md:mb-0">
                    <a
                        onClick={toInstagram}
                        className="flex cursor-pointer items-center"
                    >
                        <TfiInstagram className="cursor-pointer text-2xl" />
                    </a>
                </div>
            </div>
            <div className="bg-white text-black">
                <p className="text-center text-xs font-semibold">
                    © DAVILA CORP 2024
                </p>
            </div>
        </section>
    );
};

export default Footer;
