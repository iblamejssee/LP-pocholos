'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

export default function FeaturedSection() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-land-bg bg-andean-pattern relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-land-red font-black mb-4 drop-shadow-sm"
                    >
                        CLÁSICOS <span className="text-land-brown">IMPERDIBLES</span>
                    </motion.h2>
                    <div className="h-2 w-24 bg-land-orange mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {/* Card 1: Pollo 1/4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-b-8 border-land-red"
                    >
                        <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-amber-100">
                            <Image
                                src="/images/PB_1.jpg"
                                alt="Pollo a la Brasa"
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-land-orange text-land-brown px-4 py-1 rounded-full text-sm font-black shadow-md border border-white">
                                <span className="flex items-center gap-1"><Star size={16} fill="#5D4037" className="text-land-brown" /> FAVORITO</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8">
                            <h3 className="font-serif text-2xl text-land-text font-bold mb-2">Pollo a la Brasa</h3>
                            <p className="text-stone-600 font-body mb-6 line-clamp-3">
                                Marinado tradicional acompañado de papas doradas al punto justo. Una combinación clásica que resalta el auténtico sabor de siempre...
                            </p>
                            <div className="flex justify-between items-center pt-1 border-t border-dashed border-stone-200">
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Mostrito */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.1 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-b-8 border-land-red"
                    >
                        <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-amber-100">
                            <Image
                                src="/images/PBM_1.jpg"
                                alt="Mostrito"
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-land-orange text-land-brown px-4 py-1 rounded-full text-sm font-black shadow-md border border-white">
                                <span className="flex items-center gap-1"><Star size={16} fill="#5D4037" className="text-land-brown" /> FAVORITO</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8">
                            <h3 className="font-serif text-2xl text-land-text font-bold mb-2">Mostrito</h3>
                            <p className="text-stone-600 font-body mb-12 line-clamp-2">
                                Mostrito de pollo marinado con papas doradas y arroz chaufa. Tradición en su máxima expresión.
                            </p>
                            <div className="flex justify-between items-center pt-4 border-t border-dashed border-stone-200">
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Brasa Light */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.15 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-b-8 border-land-orange"
                    >
                        <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-amber-100">
                            <Image
                                src="/images/brasa.jpg"
                                alt="Brasa Light"
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-black shadow-md border border-white">
                                <span className="flex items-center gap-1">LIGHT</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8">
                            <h3 className="font-serif text-2xl text-land-text font-bold mb-2">Brasa Light</h3>
                            <p className="text-stone-600 font-body mb-1 line-clamp-4">
                                Nuestra versión saludable: pollo a la brasa acompañado de ensalada fresca, vegetales crocantes y aliño ligero artesanal, con opciones bajas en calorías sin perder el sabor.
                            </p>
                            <div className="flex justify-between items-center pt-4 border-t border-dashed border-stone-200">
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Carta PDF CTA - Re-styled - Centrado */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                        className="group bg-land-red rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8 border-4 border-white dashed ring-4 ring-land-red/20 sm:col-start-1 lg:col-start-2"
                    >
                        <div className="mb-6 bg-white p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                            <ArrowRight size={32} className="text-land-red" />
                        </div>
                        <h3 className="font-serif text-3xl text-white font-black mb-4">La Carta</h3>
                        <p className="text-red-100 font-body mb-8 font-medium">
                            Disfruta de nuestra variedad completa. <br />¡Hay para todos!
                        </p>
                        <Link
                            href="/carta-pocholos.pdf"
                            target="_blank"
                            className="bg-land-orange text-land-brown px-8 py-4 rounded-full font-black hover:bg-white hover:text-land-red transition-all shadow-xl uppercase tracking-widest text-sm"
                        >
                            Ver Carta Digital
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
