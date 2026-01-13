import { useEffect, type ReactNode } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";


interface LayoutProps {
    children: ReactNode,
    title: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (


        <>
            <div className="">
                <Navbar />
                <main>{children}</main>



            </div>
            <Footer />
        </>
    )

}

export default Layout;