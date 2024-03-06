import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import CarouselMediaCommunity from "./CarouselMediaCommunity";
import CarouselLifestyleLeisure from "./CarouselLifestyleLeisure";
import CarouselCulinaryDelight from "./CarouselCulinaryDelight";
import CarouselDavilaCircle from "./CarouselDavilaCircle";

const OurEcosystem = () => {
    const [activeSection, setActiveSection] = useState("mediaCommunity");

    return (
        <section className="font-montserrat">
            <h2 className="py-20 text-center text-4xl font-bold">
                Our Ecosystem <br /> Diverse Yet Unified{" "}
            </h2>
            <div className="mx-auto w-11/12 overflow-x-auto rounded-full  bg-gray-100 md:w-9/12">
                <ul className="whitespace-no-wrap flex flex-row items-center justify-start gap-2 py-2 sm:gap-4 md:gap-8 xl:justify-center xl:gap-16">
                    <li className="flex-shrink-0 px-2 py-2 text-base text-gray-700 sm:px-4 md:text-2xl">
                        <Link
                            activeClass="active"
                            to="mediaCommunity"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={() => setActiveSection("mediaCommunity")}
                            className={
                                activeSection === "mediaCommunity"
                                    ? "font-bold"
                                    : ""
                            }
                            style={{ cursor: "pointer" }}
                        >
                            Media & Community
                        </Link>
                    </li>
                    <li className="flex-shrink-0 px-2 py-2 text-base  text-gray-700 sm:px-4 md:text-2xl">
                        <Link
                            activeClass="active"
                            to="lifestyleLeisure"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={() => setActiveSection("lifestyleLeisure")}
                            className={
                                activeSection === "lifestyleLeisure"
                                    ? "font-bold"
                                    : ""
                            }
                            style={{ cursor: "pointer" }}
                        >
                            Lifestyle & Leisure
                        </Link>
                    </li>
                    <li className="flex-shrink-0 px-2 py-2 text-base text-gray-700 sm:px-4 md:text-2xl">
                        <Link
                            activeClass="active"
                            to="culinaryDelight"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={() => setActiveSection("culinaryDelight")}
                            className={
                                activeSection === "culinaryDelight"
                                    ? "font-bold"
                                    : ""
                            }
                            style={{ cursor: "pointer" }}
                        >
                            Culinary Delight
                        </Link>
                    </li>
                    <li className="flex-shrink-0 px-2 py-2 text-base text-gray-700 sm:px-4 md:text-2xl">
                        <Link
                            activeClass="active"
                            to="davilaCircle"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={() => setActiveSection("davilaCircle")}
                            className={
                                activeSection === "davilaCircle"
                                    ? "font-bold"
                                    : ""
                            }
                            style={{ cursor: "pointer" }}
                        >
                            Davila Circle
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="container mx-auto">
                <div
                    className="h-fit overflow-hidden "
                    id="mediaCommunity"
                    style={{
                        display:
                            activeSection === "mediaCommunity"
                                ? "block"
                                : "none",
                    }}
                >
                    <div>
                        <CarouselMediaCommunity />
                    </div>
                </div>
                <div
                    className="h-fit overflow-hidden "
                    id="mediaCommunity"
                    style={{
                        display:
                            activeSection === "lifestyleLeisure"
                                ? "block"
                                : "none",
                    }}
                >
                    <div>
                        <CarouselLifestyleLeisure />
                    </div>
                </div>
                <div
                    className="h-fit overflow-hidden "
                    id="mediaCommunity"
                    style={{
                        display:
                            activeSection === "culinaryDelight"
                                ? "block"
                                : "none",
                    }}
                >
                    <div>
                        <CarouselCulinaryDelight />
                    </div>
                </div>
                <div
                    className="h-fit overflow-hidden "
                    id="mediaCommunity"
                    style={{
                        display:
                            activeSection === "davilaCircle" ? "block" : "none",
                    }}
                >
                    <div>
                        <CarouselDavilaCircle />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurEcosystem;
