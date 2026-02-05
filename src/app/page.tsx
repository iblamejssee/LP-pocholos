'use client';

import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import FeaturedSection from '@/components/FeaturedSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-land-bg min-h-screen text-land-text selection:bg-land-red selection:text-white">
      {/* Barra de progreso de lectura */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-land-red origin-left z-50 shadow-md"
        style={{ scaleX }}
      />

      <main>
        <HeroSection />
        <FeaturedSection />
        <TeamSection />
        <MapSection />
      </main>

      <Footer />
    </div>
  );
}
