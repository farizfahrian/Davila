"use client";
import React, { useState } from "react";
import { TbBrandGmail } from "react-icons/tb";

const sendEmail = () => {
    window.location.href = "mailto:contact.davilacorp@gmail.com";
};

const GetInTouch = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSendMessage = () => {
        if (!name && !email && !message) {
            setError("Name, Email, and Messsage Must be Filled");
            return;
        } else if (!name && !email) {
            setError("Name and Email Must be Filled");
            return;
        } else if (!name && !message) {
            setError("Name and Message Must be Filled");
            return;
        } else if (!email && !message) {
            setError("Email and Message Must be Filled");
            return;
        } else if (!name) {
            setError("Name Must be Filled");
            return;
        } else if (!email) {
            setError("Email Must be Filled");
            return;
        } else if (!message) {
            setError("Message Must be Filled");
            return;
        }

        const whatsappNumber = "+62811555254";
        const formattedPhoneNumber = whatsappNumber.replace(/\D/g, ""); // Hapus karakter non-digit
        const contact = `${formattedPhoneNumber}@c.us`;

        // Gabungkan nilai name, email, dan website ke dalam pesan
        const fullMessage = `Nama: ${name}%0AEmail: ${email}%0AMessage: ${encodeURIComponent(
            message,
        )}`;

        const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${fullMessage}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <section
            id="get_in_touch"
            className="overflow-hidden bg-white py-14 font-montserrat md:py-20 lg:py-28"
        >
            <h1 className="mb-2  text-center text-2xl font-thin text-black lg:text-7xl">
                LET'S GET IN <br /> TOUCH
            </h1>
            <p className="mb-8 text-center text-sm font-thin tracking-wider md:mb-14 md:text-2xl lg:mb-20">
                So we can Boost your business
            </p>
            <div className="container mx-auto px-4 md:px-8 lg:px-10 xl:px-32 ">
                <a
                    onClick={sendEmail}
                    className="mb-4 flex  w-fit cursor-pointer items-center rounded-xl bg-black py-4 pl-4 pr-5 hover:bg-gray-800"
                >
                    <TbBrandGmail className="cursor-pointer text-xl text-white lg:text-3xl" />
                    <label className="cursor-pointer ps-2 text-lg text-white lg:ps-5 lg:text-xl">
                        contact.davilacorp@gmail.com
                    </label>
                </a>
                <form className="grid gap-4 sm:grid-cols-1 sm:gap-2 md:gap-4 lg:grid-cols-2 lg:gap-6">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            className="mt-2 h-12 w-full rounded border py-2"
                            placeholder="John Doe"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="mt-2 h-12 w-full rounded border py-2"
                            placeholder="john@gmail.com"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <label htmlFor="message" className="mb-2 block">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="focus:shadow-outline h-48 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                            placeholder="Put your message here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {error && (
                            <p className="mx-auto mt-4 w-fit rounded-lg bg-red-800 px-4 py-2 text-center text-white">
                                {error}
                            </p>
                        )}
                    </div>
                    <div className="text-center lg:col-span-2">
                        <button
                            className="w-full rounded bg-black px-4 py-2 text-white hover:bg-green-800 md:w-52 lg:w-40"
                            type="button"
                            onClick={handleSendMessage}
                        >
                            Send VIA WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default GetInTouch;
