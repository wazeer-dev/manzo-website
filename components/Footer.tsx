"use client";

import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Footer component with social links
const Footer = () => {
    return (
        <footer className="bg-[#444459] pt-12 md:pt-20 pb-20 md:pb-40 px-4 md:px-6 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 w-full text-black relative overflow-hidden shadow-2xl">

                    {/* Top Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-10 md:mb-16 relative z-10">

                        {/* Brand Column (Left) */}
                        <div className="lg:col-span-5 flex flex-col items-start">
                            <Link href="/" className="flex items-center gap-2 mb-6">
                                <div className="relative h-8 w-32">
                                    <Image
                                        src="/Manzo Logo White@4x.webp"
                                        alt="Manzo"
                                        fill
                                        className="object-contain filter invert" // Invert color for white background
                                    />
                                </div>
                            </Link>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
                                Manzo empowers retailers to transform their inventory with premium wholesale mens fashion.
                                Making high-quality male clothing accessible and profitable.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                {[
                                    { name: 'Twitter', icon: Twitter, href: '#' },
                                    { name: 'Instagram', icon: Instagram, href: '#' },
                                    { name: 'LinkedIn', icon: Linkedin, href: '#' },
                                    { name: 'GitHub', icon: Github, href: '#' }
                                ].map((social) => (
                                    <Link key={social.name} href={social.href} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition-colors text-gray-600">
                                        <span className="sr-only">{social.name}</span>
                                        <social.icon className="w-4 h-4" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns (Right) */}
                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">

                            {/* Column 1 */}
                            <div>
                                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Product</h4>
                                <ul className="space-y-4 text-sm text-gray-500">
                                    <li><Link href="#features" className="hover:text-black transition-colors">Features</Link></li>
                                    <li><Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link></li>
                                    <li><Link href="#integrations" className="hover:text-black transition-colors">Integrations</Link></li>
                                    <li><Link href="#changelog" className="hover:text-black transition-colors">Changelog</Link></li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div>
                                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
                                <ul className="space-y-4 text-sm text-gray-500">
                                    <li><Link href="#docs" className="hover:text-black transition-colors">Documentation</Link></li>
                                    <li><Link href="#tutorials" className="hover:text-black transition-colors">Tutorials</Link></li>
                                    <li><Link href="#blog" className="hover:text-black transition-colors">Blog</Link></li>
                                    <li><Link href="#support" className="hover:text-black transition-colors">Support</Link></li>
                                </ul>
                            </div>

                            {/* Column 3 */}
                            <div>
                                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
                                <ul className="space-y-4 text-sm text-gray-500">
                                    <li><Link href="#about" className="hover:text-black transition-colors">About</Link></li>
                                    <li><Link href="#careers" className="hover:text-black transition-colors">Careers</Link></li>
                                    <li><Link href="#contact" className="hover:text-black transition-colors">Contact</Link></li>
                                    <li><Link href="#partners" className="hover:text-black transition-colors">Partners</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4 relative z-10">
                        <p>&copy; {new Date().getFullYear()} Manzo Wholesale. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="#privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                            <Link href="#terms" className="hover:text-black transition-colors">Terms of Service</Link>
                            <Link href="#cookies" className="hover:text-black transition-colors">Cookies Settings</Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Watermark (Behind the card) */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none opacity-[0.1] select-none overflow-hidden pb-0">
                <span className="text-[25vw] font-serif font-black text-white leading-none tracking-tighter translate-y-1/4">
                    MANZO
                </span>
            </div>
        </footer>
    );
};

export default Footer;
