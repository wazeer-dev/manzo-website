"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NewCollection = ({ titleTag: TitleTag = "h2" }: { titleTag?: "h1" | "h2" }) => {
    return (
        <section id="new-collection" className="py-16 bg-[#fafafa]">
            <div className="container mx-auto px-6">
                <TitleTag className="text-4xl md:text-5xl font-serif text-black mb-12 text-center md:text-left">New Collection</TitleTag>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1: Men's Winter Collection */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden group"
                    >
                        <Image
                            src="/men's fashion_old money style_mans style_ mans outfits.jpeg"
                            alt="Manzo Men's Winter Collection - High-quality wholesale mens fashion"
                            fill
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />

                        <div className="absolute top-8 left-8">
                            <h3 className="text-2xl font-serif text-black">Men&apos;s Winter Collection</h3>
                        </div>

                        <div className="absolute bottom-8 right-8">
                            <button className="bg-black/80 backdrop-blur-md text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Discover Now
                            </button>
                        </div>
                    </motion.div>

                    {/* Card 2: Men's Denim Collection */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden group"
                    >
                        <Image
                            src="/Take an Official Look at AMBUSH x Levi's Denim___.jpeg"
                            alt="Manzo Men's Denim Collection - Premium wholesale male clothing"
                            fill
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />

                        <div className="absolute top-8 right-8 text-right">
                            <h3 className="text-2xl font-serif text-black mb-1">Men&apos;s Denim</h3>
                            <p className="text-xl font-serif text-black">Collection</p>
                        </div>

                        <div className="absolute bottom-8 right-8">
                            <button className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Discover Now
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewCollection;
