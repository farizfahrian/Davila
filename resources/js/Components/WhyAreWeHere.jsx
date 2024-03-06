const WhyAreWeHere = () => {
    return (
        <section
            id="why-are-we-here?"
            className="font-montserrat overflow-hidden bg-black py-14 opacity-95 md:py-20 lg:py-28"
        >
            <h1
                className="mb-8  text-center text-3xl text-white md:mb-14 lg:mb-28 lg:text-7xl"
                style={{ fontWeight: 100 }}
            >
                WHY ARE WE HERE ?
            </h1>

            <div className="container mx-auto grid grid-cols-1 gap-x-2 px-4 md:grid-cols-3 md:px-8 lg:gap-8 lg:px-10 xl:px-28">
                <div
                    className="mb-10 h-fit  overflow-hidden rounded-lg text-white md:mb-0"
                    style={{ backgroundColor: "#1E1E1E" }}
                >
                    <ul className="p-8">
                        <li>
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                                <img
                                    className="h-12"
                                    src="/frontend/images/market_acumen.png"
                                    alt=""
                                />
                            </div>
                        </li>
                        <li>
                            <h1 className="py-4 text-xl font-bold">
                                Market Acumen
                            </h1>
                        </li>
                        <li>
                            <p>
                                We aren't just observers; we are immersed in the
                                marketintricacies of East Kalimantan. DAVILA
                                CORP stands as a testament to ourcommitment to
                                comprehending the nuances that make this region
                                unique.
                            </p>
                        </li>
                    </ul>
                </div>
                <div
                    className="mb-10 h-fit  overflow-hidden rounded-lg text-white md:mb-0"
                    style={{ backgroundColor: "#1E1E1E" }}
                >
                    <ul className="p-8">
                        <li>
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                                <img
                                    className="h-12"
                                    src="/frontend/images/delivering_impact.png"
                                    alt=""
                                />
                            </div>
                        </li>
                        <li>
                            <h1 className="py-4 text-xl font-bold">
                                Delivering Impact
                            </h1>
                        </li>
                        <li>
                            <p>
                                Beyond understanding lies our ability to
                                deliver. We takepride in our capability to
                                transform insights into tangible results.
                                Ourinitiatives are designed not just to coexist
                                with the market but to shape andelevate it.
                            </p>
                        </li>
                    </ul>
                </div>
                <div
                    className="mb-10 h-fit  overflow-hidden rounded-lg text-white md:mb-0"
                    style={{ backgroundColor: "#1E1E1E" }}
                >
                    <ul className="p-8">
                        <li>
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                                <img
                                    className="h-12"
                                    src="/frontend/images/community_centric.png"
                                    alt=""
                                />
                            </div>
                        </li>
                        <li>
                            <h1 className="py-4 text-xl font-bold">
                                Community Centric
                            </h1>
                        </li>
                        <li>
                            <p>
                                DAVILA CORP is not merely a corporate entity;
                                it's a collaborative force that believes in the
                                power of community. We engage, listen, and
                                co-create to ensure that our impact resonates
                                with the very heart of East Kalimantan.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhyAreWeHere;
