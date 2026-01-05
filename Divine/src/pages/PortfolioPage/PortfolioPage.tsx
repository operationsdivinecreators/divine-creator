import PortfolioBlogs from "../../components/PortfolioPage/portfolioBlogs";
import Layout from "../../utils/layout/layout";

export default function PortfolioPage() {

    return <>

        <Layout title="Portfolio | Interior Designs in Trivandrum | Best Interior Design">
            <section>

                <div className="relative w-full">
                    <img
                        src="https://res.cloudinary.com/dez4snjqf/image/upload/f_auto,q_auto/v1767332626/heroImg_n0zg4n.png"
                        alt="Landing"
                        className="w-full h-[70vh] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                        <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-8xl">
                            PORTFOLIO
                        </h1>

                        <p className="mt-4 text-gray-200 md:text-5xl text-2xl">
                            10+ YEARS OF EXPERIENCE
                        </p>
                    </div>
                </div>
                <PortfolioBlogs/>
            </section>
        </Layout>

    </>
}