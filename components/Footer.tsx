"use client";

import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Footer component with social links
const Footer = ({ className = "bg-transparent" }: { className?: string }) => {
    return (
        <footer className={`${className} pt-10 md:pt-16 pb-0 relative overflow-hidden`}>
            <div className="container mx-auto relative z-10">
                <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-12 w-full text-black relative shadow-2xl">

                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-8 relative z-10">

                        {/* Brand Column */}
                        <div className="lg:col-span-5 flex flex-col items-start">
                            <Link href="/" className="flex items-center gap-2 mb-6">
                                <div className="relative h-8 w-32 translate-x-[-4px]">
                                    <Image
                                        src="/Manzo Logo White@4x.webp"
                                        alt="Manzo"
                                        fill
                                        className="object-contain filter invert"
                                    />
                                </div>
                            </Link>
                            <p className="text-gray-500 text-[13px] leading-relaxed max-w-sm mb-8">
                                Manzo is one of the premier wholesale mens fashion manufacturers. We specialize in
                                wholesale male clothing and mens wear, helping retailers transform their inventory
                                with the best mens wholesale clothing.
                            </p>

                            <div className="flex gap-4">
                                {[
                                    { name: 'Twitter', icon: Twitter, href: '#' },
                                    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/manzo_clothing_india_/' },
                                    { name: 'LinkedIn', icon: Linkedin, href: '#' },
                                    { name: 'GitHub', icon: Github, href: '#' }
                                ].map((social) => (
                                    <Link key={social.name} href={social.href} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 text-gray-400">
                                        <span className="sr-only">{social.name}</span>
                                        <social.icon className="w-4 h-4" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Navigational Links (Right Side) */}
                        <div className="lg:col-span-7 grid grid-cols-2 gap-8 md:gap-6 lg:mt-2">
                            {/* Shop Column */}
                            <div className="flex flex-col space-y-5">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-black/30">Shop</h4>
                                <ul className="flex flex-col space-y-3">
                                    {['Men', 'New Collection', 'Best Sellers'].map((link) => (
                                        <li key={link}>
                                            <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-bold text-black/60 hover:text-black transition-colors">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Help Column */}
                            <div className="flex flex-col space-y-5">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-black/30">Help</h4>
                                <ul className="flex flex-col space-y-3">
                                    <li>
                                        <Link href="/contact" className="text-sm font-bold text-black/60 hover:text-black transition-colors">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => window.dispatchEvent(new Event('trigger-pwa-install'))}
                                            className="text-sm font-bold text-black/60 hover:text-black transition-colors text-left"
                                        >
                                            Install App
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Copyright Section */}
                    <div className="mt-12 md:mt-18 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[11px] font-bold text-black/20 uppercase tracking-widest">
                            &copy; {new Date().getFullYear()} Manzo. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <span className="text-[10px] font-black text-black/10 uppercase tracking-tighter">Premium Wholesale Manufacturing</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
