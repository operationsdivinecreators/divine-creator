import AboutSection from "../../components/HomePage/aboutsection/aboutSection";
import HeroSection from "../../components/HomePage/herosection/heroSection";
import ProcessSection from "../../components/HomePage/processsection/processSection";
import ServiceSection from "../../components/HomePage/servicesection/serviceSection";
import TestimonialSection from "../../components/HomePage/testimonialsection/testimonial";
import Bulb from "../../utils/bulb/bulb";
import Layout from "../../utils/layout/layout";


const HomePage = () => {

    return <>
        <Layout title="Homepage">
            <div className="container mx-auto px-4 pt-32">
                <Bulb />
                <HeroSection />
                <AboutSection />
                <ServiceSection />
                <ProcessSection />
                <TestimonialSection />
            </div>
        </Layout>
    </>
}
export default HomePage;