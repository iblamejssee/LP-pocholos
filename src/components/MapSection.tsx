'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import Image from 'next/image';

export default function MapSection() {
    const directionsUrl = "https://maps.app.goo.gl/5PFE83J4MbeoTERk8";

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-stone-900 relative overflow-hidden">
            {/* Patrón decorativo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[30px_30px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4"
                    >
                        ¿Cómo <span className="text-land-red">Llegar</span>?
                    </motion.h2>
                    <p className="font-body text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Visítanos en nuestro local. ¡Te esperamos con el mejor pollo a la brasa!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                    {/* Mapa - Imagen estática Full HD */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 50 }}
                        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-land-red/30"
                    >
                        {/* Imagen del mapa - Clickeable */}
                        <a
                            href={directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full relative group"
                        >
                            <Image
                                src="/images/mapa-pocholos.png"
                                alt="Ubicación Pocholo's Chicken - Mapa"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Overlay hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <div className="bg-land-red text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Navigation size={20} />
                                    Ver en Google Maps
                                </div>
                            </div>
                        </a>

                        {/* Overlay con branding */}
                        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-4 pointer-events-none">
                            <p className="text-white font-serif font-bold text-lg">📍 Pocholo's Chicken</p>
                            <p className="text-stone-300 text-sm font-body">Urb. Luis Carranza Mz. A-06, Ayacucho</p>
                        </div>
                    </motion.div>

                    {/* Info de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
                        className="flex flex-col justify-center space-y-6"
                    >
                        {/* Dirección */}
                        <div className="bg-stone-800/50 backdrop-blur-sm p-6 rounded-2xl border border-stone-700 hover:border-land-red/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="bg-land-red p-3 rounded-xl shrink-0">
                                    <MapPin size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-white mb-2">Dirección</h3>
                                    <p className="text-stone-300 font-body">
                                        Urbanización Luis Carranza Mz. A – 06 (FONAVI), Ayacucho
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Horario */}
                        <div className="bg-stone-800/50 backdrop-blur-sm p-6 rounded-2xl border border-stone-700 hover:border-land-orange/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="bg-land-orange p-3 rounded-xl shrink-0">
                                    <Clock size={24} className="text-land-brown" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-white mb-2">Horario</h3>
                                    <p className="text-stone-300 font-body">
                                        Lunes a Domingo: 5:30 PM - 11:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div className="bg-stone-800/50 backdrop-blur-sm p-6 rounded-2xl border border-stone-700 hover:border-green-500/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-600 p-3 rounded-xl shrink-0">
                                    <Phone size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-white mb-2">Teléfono</h3>
                                    <p className="text-stone-300 font-body">
                                        +51 936 853 996
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Botón de direcciones */}
                        <a
                            href={directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-land-red hover:bg-land-brown text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl group"
                        >
                            <Navigation size={20} className="group-hover:animate-pulse" />
                            <span className="uppercase tracking-wider">Cómo Llegar</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
