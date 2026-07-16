import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="pocetna"
      className="relative min-h-screen flex items-center pt-32 sm:pt-40 lg:pt-48 pb-16 bg-gradient-to-b from-[#fbfaf5] via-white to-[#fcfcf9] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-gold-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-80 h-80 bg-gold-50/50 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8" id="hero-left-content">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200/40 shadow-sm"
              id="hero-badge"
            >
              <Sparkles size={14} className="text-gold-500" />
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-700">
                Premium posredovanje u kućnoj njezi
              </span>
            </motion.div>

            {/* LARGE Golden Care Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="py-2"
              id="hero-large-logo"
            >
              {/* Very large logo as requested */}
              <Logo iconSize="xl" showText={true} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950 leading-[1.12]"
              id="hero-headline"
            >
              POVJERENJE KOJE TRAJE.
              <br />
              <span className="text-gold-gradient font-semibold">BRIGA KOJA PRAVI RAZLIKU.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-light"
              id="hero-subtitle"
            >
              Golden Care povezuje porodice sa profesionalnim njegovateljima i njegovateljicama pružajući sigurnu, kvalitetnu i pouzdanu njegu starijih i nemoćnih osoba.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              id="hero-buttons"
            >
              <button
                onClick={() => handleScrollTo('kontakt')}
                className="relative overflow-hidden group bg-gold-500 text-white px-8 py-4 rounded-full text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/35 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-btn-contact"
              >
                <span className="relative z-10">Kontaktirajte nas</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gold-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
              </button>

              <button
                onClick={() => handleScrollTo('usluge')}
                className="group border border-gold-400 text-gold-600 px-8 py-4 rounded-full text-[14px] font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-gold-50 hover:text-gold-700 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer bg-transparent"
                id="hero-btn-services"
              >
                <span>Naše usluge</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual Elements / Caregiver Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center" id="hero-right-visual">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
            >
              {/* Back Gold Circle Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/25 to-gold-500/10 rounded-[3rem] rotate-3 blur-sm" />

              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gold-200/30 group">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                  alt="Golden Care Profesionalna Njega"
                  className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Badge 1: Verified candidates */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -left-6 bottom-1/4 glass-card px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-gold-200/40 max-w-[240px]"
                id="floating-card-1"
              >
                <div className="p-2.5 rounded-xl bg-gold-100/50 text-gold-600 flex-shrink-0">
                  <ShieldCheck size={20} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-sans text-[13px] font-bold text-slate-800 leading-tight">Provjereni Kadar</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-normal">100% verifikovani profili i preporuke</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Local region focus */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -right-4 top-12 glass-card px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-gold-200/40"
                id="floating-card-2"
              >
                <div className="p-2.5 rounded-xl bg-gold-500 text-white flex-shrink-0 shadow-md shadow-gold-500/10">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[13px] font-bold text-slate-800 leading-none">Tuzlanska regija</h4>
                  <p className="font-sans text-[11px] text-slate-500 mt-1 leading-none">Pouzdanost u Vašoj blizini</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: Compassion Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-4 right-12 bg-white/95 border border-gold-100 px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold text-slate-800"
                id="floating-card-3"
              >
                <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                <span>Briga sa ljubavlju i dostojanstvom</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
