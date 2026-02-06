'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Calendar, Home, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/', icon: Home },
        { name: 'La Carta', href: '/carta-pocholos.pdf', target: '_blank', icon: ShoppingBag },
        { name: 'Reservas', href: '/reservas', icon: Calendar },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo Mobile / Scrolled */}
                    <Link href="/" className="font-serif text-2xl text-white font-bold tracking-tight">
                        POCHOLO'S <span className="text-land-red">CHICKEN</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target={link.target}
                                className="text-white/90 hover:text-land-orange transition-colors font-medium text-sm tracking-widest uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href="https://wa.me/51936853996"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-6 py-2 rounded-full font-bold text-sm tracking-wider transition-all ${isScrolled
                                ? 'bg-land-red text-white hover:bg-white hover:text-land-red'
                                : 'bg-white text-land-brown hover:bg-land-orange hover:text-white'
                                }`}
                        >
                            CONTACTO
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay Redesigned */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 md:hidden"
                    >
                        {/* Backdrop Blur Strong */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

                        {/* Background Decoration */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] bg-land-red rounded-full blur-[100px]" />
                            <div className="absolute -bottom-[20%] -left-[20%] w-[500px] h-[500px] bg-land-orange rounded-full blur-[100px]" />
                        </div>

                        <div className="relative h-full flex flex-col p-6">
                            {/* Header Mobile */}
                            <div className="flex justify-between items-center mb-12">
                                <span className="font-serif text-2xl text-white font-bold tracking-tight">
                                    POCHOLO'S <span className="text-land-red">CHICKEN</span>
                                </span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Links Container */}
                            <div className="flex-1 flex flex-col justify-center space-y-8 px-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            target={link.target}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="group flex items-center gap-6"
                                        >
                                            <span className="text-white/40 group-hover:text-land-orange transition-colors">
                                                {link.icon && <link.icon size={32} />}
                                            </span>
                                            <span className="font-serif text-4xl text-white font-bold group-hover:text-land-orange transition-colors tracking-wide">
                                                {link.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer / Socials */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="border-t border-white/10 pt-8 mt-auto"
                            >
                                <p className="text-stone-400 text-sm mb-4 text-center">Síguenos en redes</p>
                                <div className="flex justify-center gap-6">
                                    <a href="#" className="p-3 bg-white/5 rounded-full text-white hover:bg-land-red transition-colors">
                                        <Facebook size={24} />
                                    </a>
                                    <a href="#" className="p-3 bg-white/5 rounded-full text-white hover:bg-land-orange transition-colors">
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
