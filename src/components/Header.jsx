import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-white shadow-sm border-b border-gray-100"
                    : "bg-white/10 backdrop-blur-md border-b border-white/20"
            }`}
        >
            <div className="h-16 px-4 md:px-8 flex items-center justify-between max-w-7xl mx-auto">

                {/* Logo */}
                <img
                    className="w-36 md:w-44 object-contain"
                    src={assets.logo}
                    alt="Logo"
                />

                {/* Desktop Navigation */}
                <ul
                    className={`hidden md:flex items-center gap-6 text-sm font-semibold transition-colors duration-300 ${
                        scrolled ? "text-gray-700" : "text-white"
                    }`}
                >
                    {/* Home */}
                    <li className="relative cursor-pointer transition-colors duration-300 hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                        <a href="#home">Home</a>
                    </li>

                    {/* About */}
                    <li className="relative cursor-pointer transition-colors duration-300 hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                        <a href="#about">About</a>
                    </li>

                    {/* Services */}
                    <li className="relative cursor-pointer transition-colors duration-300 hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                        <a href="#services">Services</a>
                    </li>

                    {/* Our Team */}
                    <li className="relative cursor-pointer transition-colors duration-300 hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                        <a href="#our-team">Our Team</a>
                    </li>

                    {/* Contact */}
                    <li className="relative cursor-pointer transition-colors duration-300 hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                        <a href="#contact-us">Contact Us</a>
                    </li>
                </ul>

                {/* Desktop Button */}
                <a
                    href="#"
                    className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-300 rounded-md shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1ba8b1] focus:ring-offset-2"
                >
                    Book Appointment
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden hover:text-primary focus:outline-none p-2 transition-colors duration-300 ${
                        scrolled ? "text-gray-700" : "text-white"
                    }`}
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-6 h-6 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 ${
                    isOpen
                        ? "max-h-96 opacity-100 py-4"
                        : "max-h-0 opacity-0 py-0"
                }`}
            >
                <div className="px-6 flex flex-col gap-4">

                    <ul className="flex flex-col gap-3 text-sm font-semibold text-gray-700">

                        <li>
                            <a
                                href="#home"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-primary transition-colors duration-300 block"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-primary transition-colors duration-300 block"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#services"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-primary transition-colors duration-300 block">
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#our-team"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-primary transition-colors duration-300 block">
                                Our Team
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact-us"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-primary transition-colors duration-300 block">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    {/* Mobile Button */}
                    <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-300 rounded-md shadow-sm text-center hover:-translate-y-0.5">
                        Book Appointment
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;