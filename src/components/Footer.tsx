'use client';

import { Facebook, Instagram, Twitter, MapPin, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-land-text pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-stone-800 text-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Pocholo's Chicken</h3>
                        <p className="font-body text-stone-400 text-sm leading-relaxed">
                            3 años de pasión y sabor que une familias. La verdadera experiencia del pollo a la brasa en Ayacucho.
                        </p>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h4 className="font-bold text-land-red text-sm tracking-widest uppercase mb-6">Explorar</h4>
                        <ul className="space-y-3 text-stone-400 font-body text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Nosotros</Link></li>
                            <li><Link href="carta-pocholos.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Carta</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Promociones</Link></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-bold text-land-red text-sm tracking-widest uppercase mb-6">Contacto</h4>
                        <div className="space-y-4 text-stone-400 font-body text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-land-gold mt-1 shrink-0" />
                                <p>Urbanización Luis Carranza Mz. A – 06 (FONAVI), Ayacucho</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={18} className="text-land-gold mt-1 shrink-0" />
                                <div>
                                    <p>Lun - Dom: 5:30 PM - 11:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-land-gold shrink-0" />
                                <p>+51 936 853 996</p>
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-land-red text-sm tracking-widest uppercase mb-6">Síguenos</h4>
                        <div className="flex gap-3 sm:gap-4">
                            <Link href="https://www.facebook.com/profile.php?id=100092052827995"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-stone-800 p-3 rounded-full hover:bg-land-red transition-colors text-white">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="bg-stone-800 p-3 rounded-full hover:bg-land-red transition-colors text-white">
                                <Instagram size={20} />
                            </Link>
                        </div>
                        <div className="mt-8">
                            <Link
                                href="https://pocholos.vercel.app/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-stone-600 hover:text-stone-400 transition-colors border-b border-stone-800 hover:border-stone-600 pb-1"
                            >
                                Acceso Personal
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-body">
                    <p>&copy; 2026 Pocholo's Chicken. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
