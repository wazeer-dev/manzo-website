"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

const WhatsAppButton = () => {
    // WhatsApp link - using a placeholder number based on the site's contact point
    const whatsappUrl = "https://wa.me/20123456789";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-4 right-4 z-[100]"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 transition-all hover:scale-110 active:scale-95 overflow-visible"
                aria-label="Chat on WhatsApp"
            >
                {/* Custom Glassy Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/419858326_11740799-removebg-preview.png"
                        alt="WhatsApp Button Background"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Visual Glow Effect */}
                <div className="absolute inset-0 rounded-[1.5rem] bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <MessageCircle className="w-6 h-6 text-white group-hover:text-green-400 transition-colors relative z-10" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-4 py-2 rounded-xl glass-card text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                    Chat with us
                </span>
            </a>
        </motion.div>
    );
};

export default WhatsAppButton;
