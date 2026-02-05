'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

// Componente de Partícula para efecto brillante
function Particle({ delay }: { delay: number }) {
    return (
        <motion.div
            className="absolute w-1 h-1 bg-land-orange rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -30],
                x: [0, (Math.random() - 0.5) * 40]
            }}
            transition={{
                duration: 2,
                delay: delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
            }}
        />
    );
}

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Generar partículas
    const particles = Array.from({ length: 20 }, (_, i) => i);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Overlay degradado oscuro profesional */}
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-land-red/40 z-10" />

                <Image
                    src="/images/sala1.jpg"
                    alt="Fachada Pocholo's Chicken"
                    fill
                    className="object-cover scale-105"
                    priority
                />
            </motion.div>

            {/* Content - Texto Grande y Profesional */}
            <div className="relative z-20 text-center px-2 sm:px-4 max-w-6xl mx-auto flex flex-col items-center">

                {/* Título Principal - POCHOLO'S */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 70, damping: 12, delay: 0.2 }}
                    className="w-full flex justify-center"
                >
                    <svg
                        viewBox="0 0 800 200"
                        className="w-full max-w-4xl h-auto drop-shadow-2xl"
                        style={{ filter: 'drop-shadow(0 0 20px rgba(210, 32, 30, 0.5))' }}
                    >
                        <defs>
                            {/* Arco centrado: M0,180 = inicio izquierda, Q400,0 = punto control arriba centro, 800,180 = fin derecha */}
                            <path
                                id="curvatitulo"
                                d="M 50,180 Q 400,20 750,180"
                                fill="transparent"
                            />
                        </defs>
                        <text
                            className="font-serif font-black uppercase fill-white"
                            style={{ fontSize: '110px', letterSpacing: '-0.02em' }}
                        >
                            <textPath
                                xlinkHref="#curvatitulo"
                                startOffset="50%"
                                textAnchor="middle"
                            >
                                POCHOLO'S
                            </textPath>
                        </text>
                    </svg>
                </motion.div>

                {/* Subtítulo - CHICKEN */}
                <motion.h2
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.4 }}
                    className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-land-red font-black tracking-tight mb-10"
                    style={{ textShadow: '0 0 30px rgba(255, 193, 7, 0.6), 0 4px 15px rgba(0,0,0,0.7)' }}
                >
                    CHICKEN
                </motion.h2>

                {/* Slogan Brillante con Partículas */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, delay: 0.8 }}
                    className="relative"
                >
                    {/* Contenedor de Partículas */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {particles.map((i) => (
                            <Particle key={i} delay={i * 0.15} />
                        ))}
                    </div>

                    {/* Slogan con efecto brillante */}
                    <div className="relative bg-linear-to-r from-land-red via-land-orange to-land-red px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-land-orange/50 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                        {/* Efecto de brillo que pasa por encima */}
                        <motion.div
                            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
                            initial={{ x: '-200%' }}
                            animate={{ x: '200%' }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        />

                        <p className="font-body text-sm sm:text-lg md:text-2xl lg:text-3xl text-white tracking-wide sm:tracking-widest uppercase font-black relative z-10"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                        >
                            ✦ La Pasión Hecha Sazón ✦
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-7 h-12 border-2 border-land-orange rounded-full flex justify-center p-2 bg-black/30 backdrop-blur-sm">
                    <motion.div
                        className="w-1.5 h-3 bg-land-orange rounded-full"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
