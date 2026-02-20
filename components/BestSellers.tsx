"use client";

import React from 'react';
import ProductCard from './ProductCard';

const BestSellers = () => {
    const products = [
        {
            id: 1,
            title: "Shirt",
            category: "MEN",
            price: "$120",
            image: "/link-block-1.jpg.jpeg"
        },
        {
            id: 2,
            title: "Beige Pant",
            category: "MEN",
            price: "$180",
            image: "/link-block-2.jpg.jpeg"
        },
        {
            id: 3,
            title: "Grey Hoody",
            category: "MEN",
            price: "$180",
            image: "/link--block-3.jpg.jpeg"
        },
        {
            id: 4,
            title: "Grey Boxy Fit Shirt",
            category: "MEN",
            price: "$140",
            image: "/link--block-5.jpg.jpeg"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif text-black mb-12">Best Sellers</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <button className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Load More Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
