'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verificar si ya aceptó las cookies
        const consent = localStorage.getItem('pocholos-cookie-consent');
        if (!consent) {
            // Mostrar después de 2 segundos para no ser intrusivo inmediatamente
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('pocholos-cookie-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring", damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto bg-stone-900/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border-t border-white/10 flex flex-col md:flex-row items-center gap-6 justify-between">

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-land-orange/20 rounded-full shrink-0">
                                <Cookie className="text-land-orange" size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-lg mb-1">Usamos Cookies 🍪</h4>
                                <p className="text-stone-300 text-sm leading-relaxed max-w-xl">
                                    Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación y analizar el tráfico de nuestra web.
                                    Al continuar navegando, entendemos que aceptas nuestra política de cookies.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-6 py-3 bg-white text-land-brown font-bold rounded-xl text-sm uppercase tracking-wide hover:bg-land-orange hover:text-white transition-colors shadow-lg"
                            >
                                Aceptar Todo
                            </button>
                            {/* Opción de rechazar o cerrar si se desea en el futuro */}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
