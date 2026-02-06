'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function PromoPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Mostrar POPUP siempre al cargar (o usa sessionStorage si quieres limitar)
        // Para pruebas y demos de marketing, suele ser mejor que salga siempre o con cierta frecuencia
        const hasSeenPromo = sessionStorage.getItem('pocholos-seen-promo');

        if (!hasSeenPromo) {
            const timer = setTimeout(() => {
                setIsVisible(true);
                sessionStorage.setItem('pocholos-seen-promo', 'true');
            }, 1000); // 1 segundo de delay para que cargue la web primero
            return () => clearTimeout(timer);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVisible(false)}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Popup Content */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md bg-transparent rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Botón Cerrar */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-2 right-2 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Imagen Promo */}
                        <div className="relative aspect-square w-full bg-white">
                            {/* Nota: Aquí el usuario debe poner su imagen real 'promo-popup.jpg' */}
                            <Image
                                src="/images/promo_pc.jpg"
                                alt="Promo Pocholos Chicken"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Fallback visual si no hay imagen (solo dev) */}
                            <div className="absolute inset-0 flex items-center justify-center bg-stone-100 -z-10">
                                <p className="text-stone-400 text-sm">Cargando imagen promo...</p>
                            </div>
                        </div>

                        {/* Call to Action Sticky Bottom */}
                        <div className="bg-white p-4">
                            <a
                                href="https://wa.me/51936853996?text=Hola%20Pocholo's%2C%20quisiera%20la%20promo%20de%20S%2F83.00%20(Pollo%2BChaufa%2BChicha)"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-land-brown text-white font-bold rounded-xl hover:bg-land-orange transition-all shadow-lg animate-pulse"
                            >
                                <MessageCircle size={24} />
                                ¡LO QUIERO AHORA! - S/ 83.00
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
