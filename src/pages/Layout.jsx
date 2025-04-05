import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <div className="container">
                <Outlet /> {/* Renderiza las rutas hijas */}
            </div>
        </ScrollToTop>
    );
};