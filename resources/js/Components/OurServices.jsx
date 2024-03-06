import Carousel from "./Carousel";

const OurServices = () => {
    return (
        <section
            id="our_services"
            className="font-montserrat overflow-hidden bg-black py-16 opacity-95 sm:pb-20 md:py-20 md:pb-48"
        >
            <h1
                className="mb-8  text-center text-3xl text-white md:mb-14 lg:mb-28 lg:text-7xl"
                style={{ fontWeight: 100 }}
            >
                OUR SERVICES
            </h1>
            <Carousel />
        </section>
    );
};

export default OurServices;
