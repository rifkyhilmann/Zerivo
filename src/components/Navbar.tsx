import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../assets";
import BtnNav from "./BtnNav";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    // Toggle function for the navbar
    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="w-full bg-white h-14 shadow-lg px-4 md:px-14 fixed flex justify-between items-center font-poppins">
            <div className="flex items-center w-full">
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="h-10 w-10"
                />
                <p className="text-[#081530] font-semibold text-4xl font-Knewave ">
                    erivo
                </p>
            </div>
            <div className="md:hidden flex">
                <FontAwesomeIcon 
                    icon={isActive ? faX : faBars}
                    className="flex cursor-pointer"
                    onClick={handleToggle} // Call toggle function on click
                />
            </div>
            {/* Navbar links */}
            <div className={`md:flex md:items-center md:flex-row flex-col gap-3 font-semibold justify-end text-primary text-xs ${isActive ? 'flex ' : 'hidden'} absolute top-20 w-[300px] left-10    md:w-full md:bg-transparent bg-white  md:shadow-none shadow  md:static`}>
                <BtnNav title="Home" />
                <BtnNav title="About" />
                <BtnNav title="Services" />
                <BtnNav title="Contact" />
            </div>
        </div>
    );
};

export default Navbar;
