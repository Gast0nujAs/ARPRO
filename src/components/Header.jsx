import Navbar from "./Navbar";
import logo from "../assets/img/logo.jpeg.jpeg"
import logoArpro from "../assets/logo-arpro/arpro-Logo.jpeg"

export function Header() {
    return (
        <header className="flex mb-4 mt-2 sm:mx-2 w-full bg-white place-content-between items-center shadow-sm	">
            <img src={logoArpro} alt="logo" className="w-[90px] h-[90px] sm:w-[160px] sm:h-[150px]"/>
            <Navbar />
        </header>
    )
};
