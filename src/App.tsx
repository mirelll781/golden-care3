import React from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#fcfcf9] text-slate-800 font-sans selection:bg-gold-500 selection:text-white" id="golden-care-app-root">
      {/* Floating Elements / Ambient Atmosphere Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" id="ambient-layer">
        {/* Soft, warm, out-of-focus background lights representing comfort and care */}
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] rounded-full bg-gold-100/20 blur-[150px]" />
        <div className="absolute top-[40%] right-[5%] w-[35rem] h-[35rem] rounded-full bg-gold-50/30 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[45rem] h-[45rem] rounded-full bg-gold-100/15 blur-[180px]" />
      </div>

      {/* Header and Nav System */}
      <Navbar />

      {/* Main Structural Layout blocks */}
      <main id="main-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Welcome / About Section */}
          <About />

          {/* 3. Dynamic Services Section */}
          <Services />

          {/* 4. Bento Why Choose Us Section */}
          <WhyChooseUs />

          {/* 5. Masonry Gallery with Lightbox */}
          <Gallery />

          {/* 6. Testimonials Section */}
          <Testimonials />

          {/* 7. Accordion FAQ Section */}
          <FAQ />

          {/* 8. Interactive Contact Section */}
          <Contact />
        </motion.div>
      </main>

      {/* Master Footer containing Logo, Quick Links, and Privacy Modal */}
      <Footer />
    </div>
  );
}
