import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AboutUs_Carousel from "@/Components/AboutUs_Carousel";
import InsightsSales from "@/Components/InsightsSales";
import GetInTouch from "@/Components/GetInTouch";
import OurEcosystem from "@/Components/OurEcosystem";

export default function LandingPage({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="About Us" />
            <Navbar activePage="AboutUs" />
            <AboutUs_Carousel />
            <OurEcosystem />
            <InsightsSales /> <GetInTouch />
            <Footer />
        </>
    );
}
