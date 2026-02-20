"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NewCollection = () => {
    return (
        <section className="py-16 bg-[#fafafa]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif text-black mb-12 text-center md:text-left">New Collection</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1: Men's Winter Collection */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1974&auto=format&fit=crop"
                            alt="Men's Winter Collection"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                        <div className="absolute top-8 left-8">
                            <h3 className="text-2xl font-serif text-black">Men's Winter Collection</h3>
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
                            alt="Men's Denim Collection"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                        <div className="absolute top-8 right-8 text-right">
                            <h3 className="text-2xl font-serif text-black mb-1">Men's Denim</h3>
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
