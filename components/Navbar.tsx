"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logoSrc = isScrolled ? "/Manzo Logo Black@4x.webp" : "/Manzo Logo White@4x.webp";
    const navTextClass = isScrolled ? "text-gray-800 hover:text-black" : "text-gray-300 hover:text-white";
    const navBgClass = isScrolled ? "bg-white/80 border-black/5 shadow-sm" : "bg-[#444459]/80 border-white/10";
    const navContainerClass = isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "py-6";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 font-sans transition-all duration-300 ${navContainerClass}`}>
            {/* Logo (Left Aligned) */}
            <div className="flex-shrink-0 z-50">
                <Link href="/" className="flex items-center gap-2 group">
                    <div
                        className="glitch-wrapper relative h-8 md:h-10 w-auto aspect-[3/1]"
                        style={{ '--logo-url': `url('${logoSrc}')` } as React.CSSProperties}
                    >
                        <Image
                            src={logoSrc}
                            alt="Manzo"
                            width={120}
                            height={40}
                            className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10"
                            priority
                        />
                    </div>
                </Link>
            </div>

            {/* Desktop Pill Menu (Right Aligned - Hidden on Mobile) */}
            <div className={`hidden md:flex backdrop-blur-md rounded-full px-1 py-1 items-center border transition-all duration-300 ${navBgClass}`}>
                <ul className="flex items-center space-x-1">
                    {['Men', 'Women', 'Kids'].map((item) => (
                        <li key={item}>
                            <Link
                                href={`#${item.toLowerCase()}`}
                                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all block ${navTextClass} hover:bg-black/5`}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="#contact"
                            className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all block ${isScrolled ? 'bg-black text-white hover:bg-gray-800' : 'text-white bg-white/10 hover:bg-white/20'}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button (Visible on Mobile) */}
            <button
                className={`md:hidden z-50 p-2 backdrop-blur-md rounded-full border transition-all ${isScrolled ? 'text-black border-black/10 bg-white/50' : 'text-white bg-black/20 border-white/10'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-[#444459]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
                    {['Men', 'Women', 'Kids'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-2xl font-serif text-white hover:text-[#eec170] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-8 py-3 rounded-full text-sm uppercase tracking-widest font-bold text-black bg-white hover:bg-gray-200 transition-all shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
