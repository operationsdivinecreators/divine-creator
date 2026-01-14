import { useEffect, useState } from "react";
import { getBlogs, getCategories } from "../../utils/fetchPortfolio/fetchPortfolio";
import PortfolioCarousel from "../../utils/portfolioCarousel/portfolioCarousel";


interface Category {
    id: number;
    Title: string;
    slug: string;
}

interface Blog {
    id: number;
    Title: string;
    Description: string;
    slug: string;
    images: Images[];
    category?: Category[];
}

interface Images {
    id: number,
    name: string,
    url: string
}


export default function PortfolioBlogs() {
    const [portfolioBlog, setPortfolioBlogs] = useState<Blog[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const [openBlog, setOpenBlog] = useState<Blog | null>(null);

    useEffect(() => {
        getBlogs().then(setPortfolioBlogs);
        getCategories().then(setCategories);
    }, []);


    useEffect(() => {
        document.body.style.overflow = openBlog ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openBlog]);

    const filteredPortfolio =
        activeCategory === "all"
            ? portfolioBlog
            : portfolioBlog.filter((blog) =>
                blog.category?.some(
                    (cat) => cat.slug === activeCategory
                )
            );

    return (
        <>
            <section className={`md:px-30 px-2  md:mb-30 transition-all duration-300 ${openBlog
                ? "blur-sm opacity-50 pointer-events-none"
                : "blur-0 opacity-100"
                }`}>
                <div className="container mx-auto pt-4 pb-0">
                    <ul className="flex flex-row gap-2 overflow-x-auto justify-start border-b border-gray-300 whitespace-nowrap scroll-smooth no-scrollbar">
                        <li>
                            <button
                                onClick={() => setActiveCategory("all")}
                                className={`px-4 py-2 text-sm font-medium border-b-2 my-1.5 transition 
                ${activeCategory === "all"
                                        ? "border-(--secondaryColor) text-secondary font-bold"
                                        : "border-transparent text-white hover:text-secondary"
                                    }
              `}
                            >
                                All
                            </button>
                        </li>

                        {categories.map((cat) => (
                            <li key={cat.id}>
                                <button
                                    onClick={() => setActiveCategory(cat.slug)}
                                    className={`px-4 py-2 text-sm font-medium border-b-2 my-1.5 transition cursor-pointer ${activeCategory === cat.slug
                                            ? "border-(--secondaryColor) text-secondary font-bold"
                                            : "border-transparent text-white hover:text-secondary"
                                        }
                `}
                                >
                                    {cat.Title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-3 my-10">
                    {filteredPortfolio.map((blog) => (
                        <div
                            key={blog.id}
                            className="border-2 rounded-2xl overflow-hidden flex flex-col p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]"
                        >


                            <img
                                src={blog.images?.[0]?.url}
                                alt={blog.Title}
                                className="w-full aspect-4/3 object-cover rounded-2xl"
                            />





                            <h1 className="mt-2 text-start font-bold text-secondary text-(--sec">
                                {blog.Title}
                            </h1>

                            <p className="text-start text-sm font-thin">
                                {blog.Description?.slice(0, 100) + "..."}
                            </p>
                            <div className="flex justify-between mt-3">
                                {blog.category?.map((cat) => (
                                    <span key={cat.id} className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                                        {cat.Title}
                                    </span>
                                ))}

                                <button
                                    className="text-(--secondaryColor) cursor-pointer"
                                    onClick={() => setOpenBlog(blog)}
                                >
                                    Read more
                                </button>

                            </div>
                        </div>
                    ))}
                </div>




            </section>
            {openBlog && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={() => setOpenBlog(null)}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Modal */}
                    <div
                        className="relative z-10 bg-black border-2 text-white rounded-2xl max-w-2xl w-[90%] max-h-[85vh] overflow-y-auto p-6 animate-fadeIn no-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-2xl cursor-pointer"
                            onClick={() => setOpenBlog(null)}
                        >
                            ✕
                        </button>

                        <div className="w-full rounded-xl mb-4">
                            <PortfolioCarousel
                                images={openBlog.images.map(img => img.url)}
                            />

                        </div>

                        <h2 className="text-xl font-semibold text-secondary mb-2">
                            {openBlog.Title}
                        </h2>
                        {openBlog.category?.map((cat) => (
                            <span key={cat.id} className="inline-block mb-4 text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                                {cat.Title}
                            </span>
                        ))}
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                            {openBlog.Description}
                        </p>
                    </div>
                </div>
            )}

        </>

    );
}
