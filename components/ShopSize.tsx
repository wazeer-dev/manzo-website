"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ShopSize = () => {
    return (
        <section className="bg-white py-16 flex flex-col items-center">

            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8 uppercase tracking-widest">
                Shop Your Size
            </h2>

            <div className="w-full h-[322px] bg-[#87CEEB] relative overflow-hidden">

                {/* Background Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src="/Represent Clo_.jpeg"
                        alt="Models posing"
                        fill
                        className="object-cover object-top"
                    />
                </motion.div>

                {/* Content Overlay */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-center items-end pr-10 md:pr-20 bg-black/10"
                >
                    <div className="text-right">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                            Last chance!
                        </h3>
                        <p className="text-lg md:text-xl text-white font-medium tracking-wide drop-shadow-md">
                            Last few sizes left
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ShopSize;
