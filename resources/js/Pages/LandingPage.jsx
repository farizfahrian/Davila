import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header";
import Insights from "@/Components/Insights";
import WhyAreWeHere from "@/Components/WhyAreWeHere";
import OurServices from "@/Components/OurServices";
import GetInTouch from "@/Components/GetInTouch";
import Footer from "@/Components/Footer";

import "animate.css";

export default function LandingPage({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <Navbar activePage="Home" />
            <Header />
            <Insights />
            <WhyAreWeHere />
            <OurServices />
            <GetInTouch />
            <Footer />
        </>
    );
}
