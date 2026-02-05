'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamSection() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-land-bg relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-land-text font-bold mb-4"
                    >
                        El Corazón de la <span className="text-land-red">Brasa</span>
                    </motion.h2>
                    <p className="font-body text-stone-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
                        3 años sirviendo con pasión. Una familia dedicada a brindarte la mejor experiencia gastronómica.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    {/* Foto Principal del Equipo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 50 }}
                        className="lg:col-span-7 relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(210,32,39,0.5)] group bg-stone-800"
                    >
                        <Image
                            src="/images/PC1.jpg"
                            alt="Equipo Pocholos"
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <h3 className="font-serif text-2xl font-bold">Nuestros Expertos</h3>
                                <p className="font-body text-sm opacity-90">Pasión en cada servicio</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Texto inspirador / Valores */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
                        className="lg:col-span-5 space-y-8 p-6"
                    >
                        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border-l-4 border-land-red hover:shadow-xl transition-shadow">
                            <h4 className="font-serif text-xl font-bold text-land-red mb-2">Pasión Joven</h4>
                            <p className="text-stone-600 font-body">3 años de sabor auténtico ayacuchano. Un sueño hecho realidad.</p>
                        </div>
                        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border-l-4 border-land-red hover:shadow-xl transition-shadow">
                            <h4 className="font-serif text-xl font-bold text-land-red mb-2">Calidad</h4>
                            <p className="text-stone-600 font-body">Insumos seleccionados y frescos cada mañana para tu mesa.</p>
                        </div>
                        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border-l-4 border-land-red hover:shadow-xl transition-shadow">
                            <h4 className="font-serif text-xl font-bold text-land-red mb-2">Servicio</h4>
                            <p className="text-stone-600 font-body">Tu satisfacción es nuestra mayor recompensa. Te servimos con una sonrisa.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
