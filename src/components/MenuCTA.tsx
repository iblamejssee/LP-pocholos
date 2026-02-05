'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function MenuCTA() {
    return (
        <section className="relative py-24 bg-land-dark overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-land-bg/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Visual de Platos */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-video w-full rounded-sm overflow-hidden group">
                            {/* REEMPLAZAR CON FOTO BODEGÓN DE PLATOS */}
                            <Image
                                src="/d-pocholos.png"
                                alt="Nuestra Carta"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                    </motion.div>

                    {/* Texto y Acción */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-5/12 text-left lg:text-right"
                    >
                        <h2 className="font-serif text-4xl lg:text-5xl text-land-text mb-6">
                            Sabores que <br />
                            <span className="text-land-accent">Perduran</span>
                        </h2>
                        <p className="font-body text-stone-400 mb-10 text-lg font-light leading-relaxed">
                            Desde nuestros clásicos cortes a la brasa hasta acompañamientos que despiertan los sentidos. Descubre nuestra propuesta gastronómica completa.
                        </p>

                        <div className="flex lg:justify-end">
                            <Link
                                href="/carta-pocholos.pdf"
                                target="_blank"
                                className="group relative inline-flex items-center gap-4 py-3 px-1"
                            >
                                <span className="font-serif text-land-gold text-xl tracking-widest uppercase">
                                    Descubrir la carta
                                </span>
                                <span className="relative flex h-8 w-8 items-center justify-center border rounded-full border-land-gold/30 transition-colors group-hover:border-land-gold">
                                    <ArrowRight size={14} className="text-land-gold -rotate-45 transition-transform group-hover:rotate-0" />
                                </span>

                                {/* Underline animation */}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-land-gold transition-all duration-500 group-hover:w-full" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
