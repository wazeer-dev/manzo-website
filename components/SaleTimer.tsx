"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SaleTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 15,
        seconds: 33
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeBlocks = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    return (
        <section className="flex flex-col md:flex-row h-auto md:h-[400px]">
            {/* Left Side - Product Image */}
            <div className="relative w-full md:w-1/3 bg-[#fedd5e] flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-8 left-8 z-10">
                    <h3 className="text-4xl font-bold text-black">-70% OFF</h3>
                </div>

                <div className="relative z-10 w-3/4 aspect-square">
                    <Image
                        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
                        alt="Sale Product"
                        fill
                        className="object-contain drop-shadow-xl rotate-[-15deg] hover:rotate-0 transition-transform duration-500"
                    />
                </div>

                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                    <span className="bg-[#1a1a1a]/10 text-black px-3 py-1 rounded text-sm font-bold line-through">$180</span>
                    <span className="bg-[#1a1a1a] text-white px-3 py-1 rounded text-sm font-bold">$50</span>
                    <button className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Right Side - Timer */}
            <div className="flex-1 bg-[#3a5a40] flex flex-col items-center justify-center p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">Sale ends soon</h2>

                <div className="flex gap-4 md:gap-8">
                    {timeBlocks.map((block, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-[#2d4632] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg mb-2 backdrop-blur-sm">
                                <span className="text-2xl md:text-3xl font-bold text-white">{block.value}</span>
                            </div>
                            <span className="text-xs text-gray-300 uppercase tracking-wider">{block.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SaleTimer;
