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
                <div className="fixed inset-0 -z-10">
                    <svg xmlns='http://www.w3.org/2000/svg' width='1242' height='149' viewBox='0 0 1000 120'><rect fill='#000000' width='1000' height='120' /><g fill='none' stroke='#222' strokeWidth='6.9' strokeOpacity='0.62'><path d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' /><path d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' /><path d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' /><path d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' /><path d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' /><path d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' /></g></svg>
                </div>
                <Navbar />
                <main>{children}</main>



            </div>
            <Footer />
        </>
    )

}

export default Layout;