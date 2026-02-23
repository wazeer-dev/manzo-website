"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MenSection = () => {
    return (
        <section className="relative w-full h-[90vh] overflow-hidden bg-black">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-[center_15%] opacity-60"
            >
                <source src="https://res.cloudinary.com/dau1xacoe/video/upload/v1771830580/0219_bwsgjg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6 text-center pt-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
                        Wholesale Mens Fashion
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-medium tracking-wide mb-10 max-w-2xl mx-auto drop-shadow-lg">
                        Leading wholesale mens fashion manufacturers. Redefining the modern silhouette with Egyptian craftsmanship and premium male clothing.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button className="bg-white text-black px-8 py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all shadow-2xl hover:scale-105 active:scale-95">
                            Shop the Collection
                        </button>
                        <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all shadow-2xl hover:scale-105 active:scale-95">
                            View Lookbook
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient for smoother transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0" />
        </section>
    );
};

export default MenSection;
