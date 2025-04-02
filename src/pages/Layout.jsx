import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Home } from "./Home"


export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <Home />
        </ScrollToTop>
    )
}