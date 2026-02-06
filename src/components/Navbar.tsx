'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Calendar, Home } from 'lucide-react';

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
        { name: 'Inicio', href: '/' },
        { name: 'La Carta', href: '/carta-pocholos.pdf', target: '_blank' },
        { name: 'Reservas', href: '/reservas' },
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
                    <Link href="/" className="font-serif text-lg md:text-2xl text-white font-bold tracking-tight">
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

                    {/* Mobile Menu Button - Styled like reference */}
                    <button
                        className="md:hidden text-white border-2 border-white/30 rounded-lg p-1.5 hover:bg-white/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown - Reference Style */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop invisible to close on click outside */}
                        <div
                            className="fixed inset-0 z-40 bg-black/20"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-24 left-4 right-4 z-50 bg-white rounded-xl shadow-2xl overflow-hidden origin-top"
                        >
                            <div className="p-4 border-b border-stone-100 bg-stone-50">
                                <span className="font-serif font-bold text-stone-900 text-lg">
                                    Pocholo's Chicken
                                </span>
                            </div>

                            <div className="flex flex-col py-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        target={link.target}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="px-6 py-4 text-stone-600 font-medium hover:bg-stone-50 hover:text-land-red transition-colors border-b border-stone-50 last:border-0 text-base"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <a
                                    href="https://wa.me/51936853996"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-4 text-land-brown font-bold hover:bg-stone-50 transition-colors"
                                >
                                    Contacto WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
