'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex flex-col overflow-hidden bg-black">
            {/* Background Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Overlay degradado oscuro profesional */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80 z-10" />

                <Image
                    src="/images/sala1.jpg"
                    alt="Fachada Pocholo's Chicken"
                    fill
                    className="object-cover scale-105"
                    priority
                />
            </motion.div>

            {/* Logo en la parte superior - Estilo Maido */}
            <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-6 pt-16 sm:pt-20">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-center"
                >
                    {/* Nombre del restaurante - Limpio y elegante */}
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight mb-2">
                        POCHOLO'S
                    </h1>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-land-red font-black tracking-tight"
                        style={{ textShadow: '0 0 30px rgba(210, 32, 30, 0.5)' }}
                    >
                        CHICKEN
                    </h2>
                </motion.div>
            </div>

            {/* Mensaje de bienvenida en la parte inferior - Estilo Maido */}
            <div className="relative z-20 px-6 pb-24 sm:pb-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-left"
                >
                    <p className="text-white/60 font-body text-sm sm:text-base uppercase tracking-widest mb-2">
                        Bienvenido a
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight">
                        LA TRADICIÓN<br />
                        <span className="text-land-orange">DEL SABOR</span>
                    </h3>
                </motion.div>

                {/* Botón de acción - Elegante para reservas */}
                <motion.a
                    href="https://wa.me/51936853996?text=Hola%2C%20quisiera%20hacer%20una%20reserva%20en%20Pocholo's%20Chicken"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="inline-flex items-center gap-3 mt-8 sm:mt-10 bg-transparent border-2 border-white/80 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-land-brown transition-all duration-300"
                >
                    Reservar Mesa
                </motion.a>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
                    <motion.div
                        className="w-1 h-2 bg-white/60 rounded-full"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
