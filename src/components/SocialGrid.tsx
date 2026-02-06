'use client';

import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const SOCIAL_POSTS = [
    {
        id: 1,
        image: '/images/mp1.jpg',
        alt: 'Pollo a la brasa jugoso',
        likes: '1.2k',
        comments: '45'
    },
    {
        id: 2,
        image: '/images/mp2.jpg',
        alt: 'Ambiente familiar renovado',
        likes: '850',
        comments: '23'
    },
    {
        id: 3,
        image: '/images/mp3.jpg',
        alt: 'Momentos Pocholos',
        likes: '2.1k',
        comments: '112'
    },
    {
        id: 4,
        image: '/images/mp5.jpg',
        alt: 'Brasa Light opción saludable',
        likes: '940',
        comments: '34'
    }
];

export default function SocialGrid() {
    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <span className="text-land-orange font-bold tracking-widest uppercase text-sm">Síguenos</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-land-text font-black mt-2">
                            @pocholoschicken
                        </h2>
                    </div>

                    <a
                        href="https://www.facebook.com/profile.php?id=100092052827995"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 bg-stone-100 hover:bg-land-red hover:text-white rounded-full transition-all duration-300"
                    >
                        <Instagram size={20} />
                        <span className="font-medium">Ver Facebook</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {SOCIAL_POSTS.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className="group relative aspect-square overflow-hidden rounded-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={post.image}
                                alt={post.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
