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
        { name: 'Inicio', href: '/', icon: Home },
        { name: 'La Carta', href: '/carta-pocholos.pdf', target: '_blank' },
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

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-land-brown text-white md:hidden flex flex-col"
                    >
                        <div className="p-6 flex justify-end">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 bg-white/10 rounded-full"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-4 text-2xl font-serif font-bold"
                                >
                                    {link.icon && <link.icon size={24} className="text-land-orange" />}
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
