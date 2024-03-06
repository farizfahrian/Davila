import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ end }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && !isVisible) {
            setIsVisible(true);
        }
    }, [inView, isVisible]);

    return (
        <span ref={ref}>
            {isVisible && <CountUp end={end} duration={5} decimals={1} />}
        </span>
    );
};

const Insights = () => {
    return (
        <section id="insights" className="font-montserrat bg-white text-black">
            <div className="container mx-auto px-14 py-28 md:py-40 lg:px-8 xl:px-16 2xl:px-24">
                <h2 className="mb-8  text-center text-3xl md:mb-14 lg:mb-28 lg:text-7xl">
                    OUR INSIGHTS
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                    <div className="text-center">
                        <h3 className="mb-2 text-5xl font-black">
                            <AnimatedNumber end={5.5} />
                            M+
                        </h3>
                        <p className="text-2xl font-thin tracking-widest">
                            MONTHLY IMPRESSIONS
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="mb-2 text-5xl font-black">
                            <AnimatedNumber end={359} />
                            K+
                        </h3>
                        <p className="text-2xl font-thin tracking-widest">
                            FOLLOWERS
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="mb-2 text-5xl font-black">
                            <AnimatedNumber end={490} />
                            K+
                        </h3>
                        <p className="text-2xl font-thin tracking-widest">
                            INTERACTING ACCOUNTS
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
