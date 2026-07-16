import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Heart, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('pocetna');

  // Navigation Links
  const navLinks = [
    { label: 'Početna', href: '#pocetna', id: 'pocetna' },
    { label: 'O nama', href: '#o-nama', id: 'o-nama' },
    { label: 'Usluge', href: '#usluge', id: 'usluge' },
    { label: 'Zašto Golden Care', href: '#zasto-mi', id: 'zasto-mi' },
    { label: 'Galerija', href: '#galerija', id: 'galerija' },
    { label: 'Česta pitanja', href: '#faq', id: 'faq' },
    { label: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down to apply style changes
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection based on element viewport coordinates
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-500/10'
            : 'bg-transparent'
        }`}
        id="app-header"
      >
        {/* Premium subtle top-bar indicating 24/7 localized support */}
        <div 
          className={`bg-slate-950 text-slate-400 text-[11px] px-4 border-b border-gold-500/10 hidden sm:block transition-all duration-500 ease-in-out ${
            isScrolled ? 'max-h-0 py-0 opacity-0 overflow-hidden border-b-transparent' : 'max-h-12 py-2 opacity-100'
          }`} 
          id="top-announcement-bar"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center font-light tracking-wider">
            <div className="flex items-center gap-4">
              <span>Radno vrijeme: <strong>00:00 - 24:00 (Pon - Ned)</strong></span>
              <span className="text-white/10">|</span>
              <span>Sjedište: <strong>Tuzla, Bosna i Hercegovina</strong></span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+38761509570" className="hover:text-gold-400 transition-all font-semibold">
                Tel: +387 61 509 570
              </a>
              <span className="text-white/10">|</span>
              <a href="mailto:goldencare.tuzla@gmail.com" className="hover:text-gold-400 transition-all">
                goldencare.tuzla@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation bar wrapper */}
        <div 
          className={`transition-all duration-500 flex items-center w-full px-10 lg:px-14 ${
            isScrolled ? 'h-[75px] lg:h-[85px]' : 'h-[90px] lg:h-[100px]'
          }`}
          id="main-navigation-bar-wrapper"
        >
          <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between h-full gap-4">
            {/* Left: Logo + tagline with responsive height & width */}
            <div 
              className="flex-shrink-0 w-auto sm:w-[260px] xl:w-[300px] flex items-center h-full"
              id="navbar-logo-container"
            >
              <a
                href="#pocetna"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('pocetna');
                }}
                className="focus:outline-none block max-h-[70px] w-auto"
                id="navbar-logo-link"
              >
                <Logo iconSize="sm" className="max-h-[70px] w-auto" />
              </a>
            </div>

            {/* Center: Navigation menu, never wraps, collapses below 1024px */}
            <nav 
              className="hidden lg:flex items-center justify-center gap-6 xl:gap-9 flex-1 px-4" 
              id="desktop-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`relative font-sans text-[13px] xl:text-[14px] font-medium tracking-wide transition-colors duration-300 focus:outline-none hover:text-gold-500 whitespace-nowrap ${
                    activeSection === link.id ? 'text-gold-500 font-semibold' : 'text-slate-700'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gold-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Right: Phone number + CTA button + language selector/icon */}
            <div 
              className="hidden lg:flex items-center justify-end gap-4 xl:gap-6 flex-shrink-0" 
              id="navbar-cta-section"
            >
              <a
                href="tel:+38761509570"
                className="flex items-center gap-2 text-[13px] xl:text-[14px] text-slate-700 hover:text-gold-500 transition-colors duration-300 font-sans font-medium whitespace-nowrap"
                id="navbar-tel-link"
              >
                <div className="p-2 rounded-full bg-gold-50/80 border border-gold-200/40 text-gold-500 flex-shrink-0">
                  <Phone size={14} className="animate-pulse" />
                </div>
                <span>+387 61 509 570</span>
              </a>

              <button
                onClick={() => handleLinkClick('kontakt')}
                className="relative overflow-hidden group bg-gold-500 text-white px-4 xl:px-5 py-2.5 rounded-full text-[12px] xl:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-md shadow-gold-500/20 hover:shadow-lg hover:shadow-gold-500/35 hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
                id="navbar-cta-button"
              >
                <span className="relative z-10">Kontaktirajte nas</span>
                <span className="absolute inset-0 bg-gold-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
              </button>

              {/* Language Selector Indicator */}
              <div 
                className="flex items-center gap-1.5 text-slate-600 hover:text-gold-500 cursor-pointer text-[13px] font-medium transition-colors border-l border-slate-200 pl-4 h-5 flex-shrink-0"
                id="language-selector"
              >
                <Globe size={15} className="text-slate-500" />
                <span>BS</span>
              </div>
            </div>

            {/* Mobile/Tablet Controls (Screens below 1024px) */}
            <div 
              className="flex items-center lg:hidden gap-2 sm:gap-4 flex-shrink-0" 
              id="navbar-mobile-toggle"
            >
              {/* Keep CTA button accessible and prominent */}
              <button
                onClick={() => handleLinkClick('kontakt')}
                className="bg-gold-500 text-white px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-[12px] font-semibold tracking-wider uppercase transition-all shadow-md shadow-gold-500/10 hover:bg-gold-600 whitespace-nowrap"
                id="navbar-mobile-cta"
              >
                Kontaktirajte nas
              </button>

              <a
                href="tel:+38761509570"
                className="p-2 rounded-full bg-gold-50 text-gold-500 border border-gold-100/50 hover:bg-gold-100 transition-colors"
                aria-label="Pozovite nas"
              >
                <Phone size={15} />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-800 hover:bg-gold-50 hover:text-gold-600 transition-colors duration-300 flex items-center justify-center"
                aria-label="Otvori meni"
                id="mobile-menu-trigger"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-45 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            id="mobile-nav-backdrop"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between border-l border-gold-500/10"
              onClick={(e) => e.stopPropagation()}
              id="mobile-nav-drawer"
            >
              <div className="mt-14">
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <Logo iconSize="sm" showText={true} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-full hover:bg-slate-100 text-slate-500"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-4 mt-8" id="mobile-nav-links">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.id);
                      }}
                      className={`block py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                        activeSection === link.id
                          ? 'bg-gold-50 text-gold-600 font-semibold border-l-4 border-gold-500 pl-3'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-gold-500'
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <Phone size={16} className="text-gold-500" />
                    <span>+387 61 509 570</span>
                  </div>
                  <button
                    onClick={() => handleLinkClick('kontakt')}
                    className="w-full text-center bg-gold-500 text-white py-3 rounded-xl font-semibold tracking-wider uppercase text-sm shadow-md shadow-gold-500/10 hover:bg-gold-600 transition-colors"
                  >
                    Kontaktirajte nas
                  </button>
                  <div className="flex justify-center items-center gap-2 text-xs text-slate-400 mt-2">
                    <Heart size={12} className="text-gold-500 fill-gold-500" />
                    <span>Profesionalna kućna njega u Tuzli</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
