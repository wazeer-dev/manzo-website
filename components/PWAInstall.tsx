"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

const PWAInstall = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIos, setIsIos] = useState(false);

    useEffect(() => {
        // Only show prompt on home page
        if (!isHomePage) {
            setShowPrompt(false);
            return;
        }

        // Check if app is already in standalone mode
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return;
        }

        // iOS detection
        const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        setIsIos(isIosDevice);

        // service worker registration
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then(
                (registration) => console.log('SW registered'),
                (error) => console.log('SW registration failed', error)
            );
        }

        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // Show prompt after a 5 second delay if on home page
            if (isHomePage) {
                setTimeout(() => setShowPrompt(true), 5000);
            }
        };

        const triggerHandler = () => {
            setShowPrompt(true);
            handleInstall();
        };

        window.addEventListener('beforeinstallprompt', handler);
        window.addEventListener('trigger-pwa-install', triggerHandler);

        // For iOS, just show it after some time if on home page
        if (isIosDevice && isHomePage) {
            setTimeout(() => setShowPrompt(true), 5000);
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
            window.removeEventListener('trigger-pwa-install', triggerHandler);
        };
    }, [isHomePage]);

    const handleInstall = async () => {
        if (isIos) {
            // For iOS, we keep the prompt open to show instructions
            return;
        }

        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setShowPrompt(false);
        }
        setDeferredPrompt(null);
    };

    return (
        <AnimatePresence>
            {showPrompt && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    className="fixed bottom-28 left-4 right-4 md:left-auto md:right-32 md:w-80 z-[110] p-5 bg-[#1c1c1c]/95 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
                >
                    <button
                        onClick={() => setShowPrompt(false)}
                        className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
                    >
                        <X size={18} />
                    </button>

                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/20 overflow-hidden shadow-inner">
                            <Image
                                src="/logo-black.webp"
                                alt="Manzo Logo"
                                width={45}
                                height={45}
                                className="object-contain filter drop-shadow-md"
                            />
                        </div>
                        <div className="flex-1 pt-0.5">
                            <h3 className="text-white text-sm font-black uppercase tracking-[0.15em]">Manzo Official</h3>
                            <p className="text-white/70 text-[11px] leading-relaxed mt-1.5 font-medium">
                                {isIos
                                    ? "Install Manzo for the fastest premium shopping experience. Tap 'Share' then 'Add to Home Screen'."
                                    : "Get the Manzo App for exclusive drops and a seamless premium experience."}
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 flex gap-2">
                        <button
                            onClick={handleInstall}
                            className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all 
                ${isIos
                                    ? 'bg-white/10 text-white/50 border border-white/10'
                                    : 'bg-white text-black hover:bg-[#d4af37] hover:text-white active:scale-95 shadow-lg'}`}
                        >
                            {isIos ? "iOS Instructions" : "Install Now"}
                        </button>
                        {isIos && (
                            <button
                                onClick={() => setShowPrompt(false)}
                                className="px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
                            >
                                Got it
                            </button>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PWAInstall;
