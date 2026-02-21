"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LoaderProps {
    onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fafafa]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="relative flex flex-col items-center">
                {/* Logo Image Reveal */}
                <div className="overflow-hidden relative h-16 md:h-24 w-[300px] md:w-[400px]">
                    <motion.div
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.2
                        }}
                        className="relative h-full w-full flex items-center justify-center"
                    >
                        <div
                            className="glitch-loader w-[250px] md:w-[350px] h-16 md:h-24"
                            style={{ '--logo-url': "url('/logo-black.webp')" } as React.CSSProperties}
                        >
                            <Image
                                src="/logo-black.webp"
                                alt="Manzo Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Subtitle Reveal */}
                <div className="overflow-hidden mt-6">
                    <motion.p
                        className="text-[10px] md:text-xs text-black/40 uppercase tracking-[0.5em] font-bold"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 1
                        }}
                        onAnimationComplete={() => {
                            setTimeout(onLoadingComplete, 1200);
                        }}
                    >
                        Premium Menswear
                    </motion.p>
                </div>

                {/* Loading Line */}
                <motion.div
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-black/10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                />
            </div>
        </motion.div>
    );
};

export default Loader;
