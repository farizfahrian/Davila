const Header = () => {
    return (
        <section className="font-montserrat" id="header">
            <div className="relative flex overflow-hidden bg-black opacity-95 md:mt-8">
                <img
                    className="animate__animated animate__shakeX absolute hidden h-96 md:block"
                    style={{ top: "-90px", left: "-80px" }}
                    src="/frontend/images/Pattern_v_2.png"
                    alt=""
                />
                <img
                    className="animate__animated animate__shakeX absolute hidden h-96 md:block"
                    style={{ bottom: "-40px", left: "-220px" }}
                    src="/frontend/images/Pattern_v_3.png"
                    alt=""
                />
                <img
                    className="animate__animated animate__shakeX absolute hidden h-96 2xl:block"
                    style={{ top: "-90px", right: "700px" }}
                    src="/frontend/images/Pattern_v_3.png"
                    alt=""
                />
                <div className="container mx-auto grid grid-cols-2 gap-6 px-4 pb-36 pt-28 md:px-28 md:pt-32 xl:pb-52">
                    <div className="col-span-2 lg:col-span-1">
                        <h1 className="animate__animated  animate__zoomInRight  select-none text-5xl font-bold text-white sm:text-7xl lg:text-5xl xl:text-7xl">
                            STELLAR <br /> MARKETING <br /> FOR A GOOD <br />{" "}
                            LIVING
                        </h1>
                        <p className="mb-4 mt-8 tracking-wider text-white">
                            TRUSTED BY
                        </p>
                        <ul className="grid w-80 grid-cols-6 gap-2">
                            <li className="w-full">
                                <img
                                    src="/frontend/images/brand/wardah.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full">
                                <img
                                    src="/frontend/images/brand/clas_mild.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full ">
                                <img
                                    src="/frontend/images/brand/cps.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full ">
                                <img
                                    src="/frontend/images/brand/emina.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full">
                                <img
                                    src="/frontend/images/brand/kahf.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full">
                                <img
                                    src="/frontend/images/brand/make_over.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full">
                                <img
                                    src="/frontend/images/brand/miniso.jpg"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full">
                                <img
                                    src="/frontend/images/brand/paragon.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full">
                                <img
                                    src="/frontend/images/brand/smaland.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full ">
                                <img
                                    src="/frontend/images/brand/treasure_hit.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full">
                                <img
                                    src="/frontend/images/brand/tulus_tur_samarinda.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                            <li className="w-full">
                                <img
                                    src="/frontend/images/brand/visinema.png"
                                    alt=""
                                    className="w-full rounded"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <img
                            className="mb-8 hidden  h-24 w-full rounded-full object-cover grayscale duration-500 hover:grayscale-0 sm:block"
                            src="/frontend/images/header.jpg"
                        ></img>
                        <p className="animate__animated animate__fadeIn select-none text-white">
                            We believe in the power of synergy. As a
                            multifaceted enterprise in East Borneo, our mission
                            is to create a vibrant ecosystem where innovation,
                            lifestyle, media and community intersect. Our
                            diverse portfolio encompasses a range of businesses,
                            each uniquely contributing to the enrichment of
                            everyday experiences.
                        </p>
                        <p className="animate__animated animate__headShake mt-12 select-none text-right text-white">
                            Based On
                        </p>
                        <p className="select-none text-right font-bold text-white">
                            Samarinda, Indonesia
                        </p>
                    </div>
                </div>
                <img
                    className="animate__animated animate__headShake absolute -z-10 hidden h-96 rotate-45 md:block"
                    style={{ top: "50px", right: "-120px" }}
                    src="/frontend/images/Pattern_v_1.png"
                    alt=""
                />
            </div>
        </section>
    );
};

export default Header;
