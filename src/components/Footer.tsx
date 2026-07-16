import React, { useState } from 'react';
import { Facebook, Instagram, MessageCircle, Heart, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import PrivacyPolicyModal from './PrivacyPolicyModal';

function ViberIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className="inline-block"
      aria-hidden="true"
    >
      <path d="M12.015 0C5.394 0 0 4.862 0 10.843c0 2.276.791 4.394 2.146 6.13-.385 1.543-.915 3.328-1.572 4.904a.6.6 0 00.751.785c1.861-.635 3.935-1.127 5.485-1.4 1.6.467 3.3.724 5.205.724 6.621 0 12.015-4.862 12.015-10.843C24.03 4.862 18.636 0 12.015 0zm6.052 14.808c-.464.717-1.385 1.135-2.28 1.135-.55 0-1.14-.153-1.637-.367-1.316-.566-2.584-1.488-3.565-2.47s-1.904-2.25-2.47-3.565a4.2 4.2 0 01-.367-1.637c0-.895.418-1.816 1.135-2.28a.954.954 0 011.237.147l1.176 1.176a.956.956 0 01.12 1.196c-.206.353-.448.657-.732.915a.4.4 0 00-.077.493c.316.64.757 1.256 1.3 1.8.544.543 1.16 1 1.8 1.3a.4.4 0 00.493-.077c.258-.284.562-.526.915-.732a.956.956 0 011.196.12l1.176 1.176a.954.954 0 01.147 1.237zm1.191-5.187a.5.5 0 01-.5-.5c0-1.99-1.62-3.61-3.61-3.61a.5.5 0 010-1c2.541 0 4.61 2.069 4.61 4.61a.5.5 0 01-.5.5zm-1.805 0a.5.5 0 01-.5-.5c0-1.025-.83-1.855-1.855-1.855a.5.5 0 010-1c1.574 0 2.855 1.281 2.855 2.855a.5.5 0 01-.5.5z"/>
    </svg>
  );
}

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const quickLinks = [
    { label: 'Početna', id: 'pocetna' },
    { label: 'O nama', id: 'o-nama' },
    { label: 'Usluge', id: 'usluge' },
    { label: 'Zašto Golden Care', id: 'zasto-mi' },
    { label: 'Galerija', id: 'galerija' },
    { label: 'Česta pitanja', id: 'faq' },
    { label: 'Kontakt', id: 'kontakt' },
  ];

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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-gold-500/10 pt-20 pb-10" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer split columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5" id="footer-upper">
          
          {/* Logo & Info column */}
          <div className="lg:col-span-5 space-y-6" id="footer-col-logo">
            <Logo iconSize="md" light={true} showText={true} />
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-light mt-4">
              Golden Care je licencirana agencija posvećena spajanju porodica s najpouzdanijim i najtoplijim njegovateljima u Tuzlanskoj regiji. Donosimo mir Vama i dostojanstvo Vašim najmilijima.
            </p>
            {/* Quick mini info details */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-gold-500" />
                <span>Tuzla, Bosna i Hercegovina</span>
              </div>
              <a href="tel:+38761509570" className="flex items-center gap-2.5 hover:text-gold-400 transition-colors">
                <Phone size={14} className="text-gold-500" />
                <span>+387 61 509 570</span>
              </a>
              <a href="mailto:goldencare.tuzla@gmail.com" className="flex items-center gap-2.5 hover:text-gold-400 transition-colors">
                <Mail size={14} className="text-gold-500" />
                <span>goldencare.tuzla@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="lg:col-span-3 space-y-6" id="footer-col-links">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase border-l-2 border-gold-500 pl-3">
              Brze Veze
            </h4>
            <ul className="grid grid-cols-1 gap-3 text-sm font-light">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-gold-400 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Support & Media icons column */}
          <div className="lg:col-span-4 space-y-6" id="footer-col-support">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase border-l-2 border-gold-500 pl-3">
              Korisnička Podrška
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Dostupni smo za hitne slučajeve i savjetovanje 24 sata dnevno, 7 dana u sedmici. Pišite nam direktno ili nas pratite:
            </p>

            {/* Social Icons panel */}
            <div className="flex items-center gap-4" id="footer-social-icons">
              {/* WhatsApp icon */}
              <a
                href="https://wa.me/38761509570"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle size={18} />
              </a>

              {/* Viber icon */}
              <a
                href="viber://chat?number=%2B38761509570"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#7360F2] hover:text-white hover:border-[#7360F2] transition-all duration-300"
                aria-label="Viber Chat"
              >
                <ViberIcon size={18} />
              </a>

              {/* Facebook icon */}
              <a
                href="https://www.facebook.com/profile.php?id=61591861043872"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300"
                aria-label="Facebook Profil"
              >
                <Facebook size={18} />
              </a>

              {/* Instagram icon */}
              <a
                href="https://www.instagram.com/goldencare_tuzla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent transition-all duration-300"
                aria-label="Instagram Profil"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Lower footer: copyright and policy modal triggers */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-slate-500" id="footer-lower">
          <div className="flex items-center gap-1.5 order-2 sm:order-1">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-semibold text-gold-500/80 uppercase tracking-widest text-[10px]">Golden Care Tuzla</span>
            <span>• Sva prava zadržana.</span>
          </div>

          <div className="flex items-center gap-6 order-1 sm:order-2">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-gold-400 transition-colors cursor-pointer font-medium"
              id="footer-privacy-trigger"
            >
              Politika Privatnosti
            </button>
            <button
              onClick={handleScrollTop}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
              aria-label="Vrati se na vrh"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Politika Privatnosti Modal */}
      <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
