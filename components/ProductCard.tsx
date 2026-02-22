"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    category: string;
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
            className="group relative flex flex-col gap-4 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#f0f0f0] shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out">
                <Image
                    src={product.image}
                    alt={`${product.title} - Manzo ${product.category} wholesale mens wear collection`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay with Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <button
                        onClick={handleEnquire}
                        className="bg-white/90 backdrop-blur-md text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-100 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        Enquire Now
                    </button>
                </div>
            </div>

            {/* Details */}
            <div className="flex flex-col items-center text-center space-y-1">
                <h3 className="text-xl font-serif text-black group-hover:text-[#d4af37] transition-colors duration-300">{product.title}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{product.category}</p>

            </div>
        </motion.div>
    );
};

export default ProductCard;
