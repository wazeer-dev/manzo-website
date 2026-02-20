"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            bg: "/banner-1.jpg.jpeg",
            mobileBg: "/banner-1-mbl.jpg.jpeg",
            fg: "/banner-1.jpg-removebg-preview (1).png",
            title: "Premium Wholesale Mens Fashion"
        },
        {
            id: 2,
            bg: "/banner-2.jpg (1).jpeg",
            mobileBg: "/banner-2-mbl.jpg (1).jpeg",
            bgClassName: "hidden md:block w-full h-full object-cover object-center", // Adjusted for better zoom
            bgColor: "rgb(52, 52, 52)",
            fg: null,
            title: "Premium Wholesale Mens Fashion"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // 3D Tilt State
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for tilt & parallax
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [2.5, -2.5]), { stiffness: 100, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-2.5, 2.5]), { stiffness: 100, damping: 20 });
    const moveX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });
    const moveY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate normalized mouse position (-0.5 to 0.5)
        const mouseX = (e.clientX - rect.left) / width - 0.5;
        const mouseY = (e.clientY - rect.top) / height - 0.5;

        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className="bg-[#444459] min-h-screen w-full px-4 pt-24 pb-4 md:px-6 md:pb-6 flex flex-col overflow-visible perspective-container"
            style={{ perspective: '1000px' }}
        >

            {/* Main Container Wrapper */}
            <div
                className="relative flex-grow w-full group"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

                {/* Clipped Background Container */}
                <motion.div
                    className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        backgroundColor: slides[currentSlide].bgColor || "#e5e5e5"
                    }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Layer 1: Background Image */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`bg-${currentSlide}`}
                                className={slides[currentSlide].bgClassName || "hidden md:block w-full h-[110%] relative -translate-y-12"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={slides[currentSlide].bg}
                                    alt="Background"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Mobile Background (Dynamic) */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`bg-mobile-${currentSlide}`}
                                className="block md:hidden w-full h-full relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={slides[currentSlide].mobileBg}
                                    alt="Background"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Watermark Text (Now z-10 to be visible above BG) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-overlay">
                        <h1 className="text-[15vw] md:text-[22vw] font-black text-white/10 tracking-tighter leading-none select-none">
                            MANZO
                        </h1>
                    </div>

                </motion.div>

                {/* Layer 3: Cutout Image (Foreground - Z-Index 20) */}
                <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" style={{ perspective: '1000px' }}>
                    <AnimatePresence mode="wait">
                        {slides[currentSlide].fg && (
                            <motion.div
                                key={`fg-${currentSlide}`}
                                className="absolute top-0 left-0 w-full h-[108%] -translate-y-12 pointer-events-auto cursor-pointer glitch-hero"
                                style={{
                                    '--hero-url': `url('${slides[currentSlide].fg}')`,
                                    rotateX,
                                    rotateY,
                                    x: moveX,
                                    y: moveY,
                                    z: 50 // Pull forward slightly
                                } as any}
                                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={slides[currentSlide].fg!}
                                    alt="Manzo Model"
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none'; // Hide if broken
                                    }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Content (Z-Index 30 - Topmost for usability) */}
                <div className="relative z-30 w-full h-full p-8 md:p-16 flex flex-col justify-center items-start pointer-events-none">
                    <div className="max-w-xl pointer-events-auto">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="#collections" className="bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-2xl inline-block">
                                Browse Collections
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-10 right-10 z-50 flex gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-800 hover:bg-white hover:text-black transition cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-800 hover:bg-white hover:text-black transition cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Hero;
