"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    category: string;
    price: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const handleEnquire = () => {
        const phoneNumber = "919876543210";
        const message = encodeURIComponent(`Hi Manzo, I am interested in ${product.title}. Please share more details.`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <motion.div
            className="group relative flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#f0f0f0]">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay with Button */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                        onClick={handleEnquire}
                        className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-100 shadow-xl hover:shadow-2xl"
                    >
                        Enquire Now
                    </button>
                </div>
            </div>

            {/* Details */}
            <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-serif text-black mb-1">{product.title}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>

            </div>
        </motion.div>
    );
};

export default ProductCard;
