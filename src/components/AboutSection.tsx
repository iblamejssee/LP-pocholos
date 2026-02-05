'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="py-24 md:py-32 bg-land-bg relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 order-2 md:order-1"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-land-text mb-8">
                            Nuestra <span className="text-land-gold italic">Esencia</span>
                        </h2>
                        <div className="space-y-6 text-stone-300 font-body text-lg leading-relaxed font-light">
                            <p>
                                En el corazón de Ayacucho, Pocholo's Chicken nació de una pasión inquebrantable por la auténtica cocina al fuego. No somos solo una pollería; somos guardianes de una tradición que celebra el sabor intenso y la calidad sin compromisos.
                            </p>
                            <p>
                                Cada pieza es marinada con nuestra receta secreta de especias andinas y asada lentamente al calor de las brasas, logrando ese dorado perfecto y jugosidad inigualable que nos define.
                            </p>
                        </div>
                    </motion.div>

                    {/* Imagen */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 order-1 md:order-2 relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                            {/* Marco decorativo */}
                            <div className="absolute inset-0 border border-land-gold/30 translate-x-4 translate-y-4" />

                            {/* REEMPLAZAR CON FOTO REAL (Chef o Carbón) */}
                            <div className="relative h-full w-full overflow-hidden bg-stone-900">
                                <Image
                                    src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
                                    alt="Fuego y Tradición"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-land-bg via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
