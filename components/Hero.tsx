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
            bg: "/photo_2026-02-21_11-30-57.jpg",
            mobileBg: "/photo_2026-02-20_20-58-27.jpg",
            fg: "/cherkkan (1).png",
            title: "",
            description: "Manzo is a contemporary men's clothing brand and one of the leading wholesale mens fashion manufacturers, dedicated to redefining modern fashion. We specialize in high-quality wholesale male clothing and premium wholesale mens wear, empowering individuals with ethically produced mens wholesale clothing. By prioritizing timeless aesthetics over fleeting trends, Manzo creates long-lasting wholesale mens fashion staples designed to stand the test of time."
        },
        {
            id: 2,
            bg: "/banner-2.jpg (1).jpeg",
            mobileBg: "/banner-2-mbl.jpg (1).jpeg",
            bgClassName: "hidden md:block w-full h-full object-cover object-center", // Adjusted for better zoom
            bgColor: "rgb(52, 52, 52)",
            fg: null,
            title: ""
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
        <section
            id="men"
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
                                className={
                                    currentSlide === 0
                                        ? "hidden xl:block w-full h-[110%] relative -translate-y-12"
                                        : (slides[currentSlide].bgClassName || "hidden md:block w-full h-[110%] relative -translate-y-12")
                                }
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
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

                        {/* Mobile/Tablet Background (Dynamic) */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`bg-mobile-${currentSlide}`}
                                className={
                                    currentSlide === 0
                                        ? "block xl:hidden w-full h-full relative"
                                        : "block md:hidden w-full h-full relative"
                                }
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
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
                <div className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" style={{ perspective: '1000px' }}>
                    <AnimatePresence mode="wait">
                        {slides[currentSlide].fg && (
                            <motion.div
                                key={`fg-${currentSlide}`}
                                className="absolute -top-4 left-1/2 -translate-x-1/2 w-auto h-[101%] pointer-events-auto cursor-pointer"
                                style={{
                                    rotateX,
                                    rotateY,
                                    x: moveX,
                                    y: moveY,
                                    z: 50
                                } as unknown as React.CSSProperties}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={slides[currentSlide].fg!}
                                    alt="Manzo Model"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Top Content: Description (Z-Index 30) */}
                <div className="absolute inset-0 z-30 w-full h-full p-4 md:p-6 lg:p-8 flex flex-col justify-start items-start pointer-events-none pt-0 md:pt-1">
                    <div className="max-w-md pointer-events-auto text-center flex flex-col items-center">
                        {/* Slide Title */}
                        {slides[currentSlide].title && (
                            <motion.div
                                key={`title-${currentSlide}`}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                className="mb-6"
                            >
                                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none drop-shadow-2xl">
                                    {slides[currentSlide].title}
                                </h2>
                            </motion.div>
                        )}

                        <AnimatePresence mode="wait">
                            {slides[currentSlide].description && (
                                <motion.div
                                    key={`desc-${currentSlide}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="mb-6 hidden md:block"
                                >
                                    <p className="text-gray-400 font-medium text-[7px] md:text-[8px] leading-relaxed tracking-[0.2em] font-sans drop-shadow-lg opacity-80">
                                        {slides[currentSlide].description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Content: Button (Z-Index 30) */}
                <div className="absolute inset-0 z-30 w-full h-full p-8 md:p-16 flex flex-col justify-end items-start pointer-events-none pb-28 md:pb-24">
                    <div className="pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                            className="flex justify-start"
                        >
                            <Link href="/best-sellers" className="group relative glass-card text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-2xl hover:scale-105 active:scale-95 hover:bg-white hover:text-black">
                                <span className="relative z-10">Browse Collections</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: [0.3, 0.7, 0.3],
                        y: [0, 10, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none"
                >
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold mb-2">Scroll</span>
                    <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7-7-7" />
                    </svg>
                </motion.div>

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
        </section>
    );
};

export default Hero;
