"use client";
import Image from 'next/image';
import logo from "../assets/cover.png";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUpCircle } from 'react-icons/fi';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export const TopBar = () => {
    const [theme, setTheme] = useState('light');
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsSidebarVisible] = useState(false);

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsSidebarVisible(true);
            } else {
                setIsSidebarVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const navLinks = [
        { href: "about-me", label: "About" },
        { href: "education", label: "Education" },
        { href: "experience", label: "Experience" },
        { href: "skills", label: "Skills" },
        { href: "projects", label: "Projects" },
        { href: "contact", label: "Contact" },
    ];

    return (
        <>
            <header className={`${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'} px-4 py-3 sticky top-0 z-10 w-full shadow-sm sm:px-8`}>
                <nav className="container mx-auto flex justify-between items-center">
                    <a href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
                        <Image src={logo} alt="Your Logo" width={140} height={70} />
                    </a>
                    <button className={`md:hidden text-3xl p-2 ${menuOpen ? "fixed right-5 top-5 z-40" : ""}`} onClick={toggleMenu}>
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                    <div className={`${menuOpen ? 'flex' : 'hidden'} md:hidden fixed inset-0 bg-black bg-opacity-75 z-30`}>
                        <div className="bg-white h-full w-64 shadow-xl fixed right-0 top-0 flex flex-col p-4">
                            {navLinks.map((item) => (
                                <ScrollLink
                                    key={item.label}
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true}
                                    activeClass="font-bold text-blue-800"
                                    className="text-lg py-2 hover:bg-gray-200 rounded-md cursor-pointer"
                                    onClick={handleCloseMenu}
                                >
                                    {item.label}
                                </ScrollLink>
                            ))}
                            <div className="mt-auto flex justify-around">
                                {SocialMediaIcons.map((icon) => (
                                    <a key={icon.id} href={icon.url} target="_blank" rel="noopener noreferrer" aria-label={icon.title} title={icon.title} className="py-2 text-lg hover:bg-gray-200 rounded-md">
                                        {icon.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ul className="hidden md:flex items-center gap-10">
                        {navLinks.map((item) => (
                            <li key={item.label} className="hover:scale-110 transition-transform duration-300">
                                <ScrollLink
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true}
                                    activeClass="font-bold text-blue-800"
                                    className="text-lg cursor-pointer"
                                    onClick={handleCloseMenu}
                                >
                                    {item.label}
                                </ScrollLink>
                            </li>
                        ))}
                        <li className="flex gap-8 ml-20">
                            {SocialMediaIcons.map((icon) => (
                                <a key={icon.id} href={icon.url} target="_blank" rel="noopener noreferrer" aria-label={icon.title} title={icon.title} className="text-lg hover:scale-110 transition-transform duration-300">
                                    {icon.icon}
                                </a>
                            ))}
                        </li>
                    </ul>
                </nav>
            </header>
            {isVisible && (
                <div className="fixed bottom-4 right-4 z-50">
                    <button
                        onClick={scrollToTop}
                        className="text-3xl text-gray-800 hover:text-blue-500 transition-colors duration-300"
                    >
                        <FiArrowUpCircle />
                    </button>
                </div>
            )}
        </>
    );
};
