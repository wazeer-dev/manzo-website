"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from './ProductCard';

const BestSellers = ({ titleTag: TitleTag = "h2" }: { titleTag?: "h1" | "h2" }) => {
    const products = [
        { id: 1, title: "Shirt", category: "MEN", image: "/link-block-1.jpg.jpeg" },
        { id: 2, title: "Pant", category: "MEN", image: "/link-block-2.jpg.jpeg" },
        { id: 3, title: "Hoody", category: "MEN", image: "/link--block-3.jpg.jpeg" },
        { id: 4, title: "Boxy Fit Shirt", category: "MEN", image: "/link--block-5.jpg.jpeg" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "circOut"
            }
        }
    };

    return (
        <section id="best-sellers" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div className="max-w-2xl text-center md:text-left">
                        <TitleTag className="text-4xl md:text-5xl font-serif text-black mb-4">Best Sellers</TitleTag>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            Discover our most wanted pieces. Curated premium mens wholesale clothing,
                            wholesale male clothing, and wholesale mens wear designed for the modern lifestyle.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
                >
                    {products.map(product => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mt-16"
                >
                    <Link href="/best-sellers" className="group relative bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 inline-block">
                        <span className="relative z-10">Load More Products</span>
                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default BestSellers;
