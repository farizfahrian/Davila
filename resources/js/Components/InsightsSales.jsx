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

const InsightsSales = () => {
    return (
        <section id="insightsSales" className="bg-black text-white ">
            <div className="container mx-auto px-14 py-28 lg:px-8 xl:px-16 2xl:px-24">
                <h2 className="mb-12 text-center text-3xl font-thin  lg:text-7xl">
                    Our Insights
                </h2>
                <div className="grid grid-cols-1 ">
                    <div className="text-center">
                        <h3 className="mb-2 text-6xl font-black">
                            <AnimatedNumber end={15} />-
                            <AnimatedNumber end={20} />%
                        </h3>
                        <h3 className="mb-2 text-3xl font-thin italic">
                            AVERAGES GROWTH SALES
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightsSales;
