import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Navbar = ({ activePage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleContactClick = () => {
        const getInTouchSection = document.getElementById("get_in_touch");
        if (getInTouchSection) {
            // Menghitung posisi vertikal dari elemen "get_in_touch"
            const offsetTop = getInTouchSection.offsetTop;

            // Menggulir secara halus ke posisi vertikal elemen "get_in_touch"
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="fixed left-0 right-0 top-0 z-10 overflow-hidden bg-white font-inter shadow-sm ">
            <div className="container mx-auto flex items-center justify-between px-5   py-2  md:px-8 lg:px-10 xl:px-28  ">
                <Link href="/">
                    <img
                        className="h-8 md:h-9"
                        src="/frontend/images/davila-logo.png"
                        alt=""
                    />
                </Link>
                <div className="hidden md:block">
                    <ul className="flex space-x-16">
                        <li>
                            <Link
                                href="/"
                                className={`text-black hover:text-gray-700 ${
                                    activePage === "Home" ? "font-semibold" : ""
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/AboutUs"
                                className={`text-black hover:text-gray-700 ${
                                    activePage === "AboutUs"
                                        ? "font-semibold"
                                        : ""
                                }`}
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <button
                        onClick={handleContactClick}
                        className="rounded bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800"
                    >
                        Contact Us
                    </button>
                </div>
                {/* Hamburger button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {/* Responsive menu */}
            {isOpen && (
                <div className="container mx-auto px-5 md:hidden md:px-8">
                    <ul className="flex flex-col">
                        <li>
                            <Link
                                href="/"
                                className={`text-black ${
                                    activePage === "Home" ? "font-semibold" : ""
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/AboutUs"
                                className={`text-black ${
                                    activePage === "AboutUs"
                                        ? "font-semibold"
                                        : ""
                                }`}
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                    <button
                        onClick={handleContactClick}
                        className="my-2 rounded bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800"
                    >
                        Contact Us
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
