import React from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Sparkles,
  Heart,
  Clock,
} from 'lucide-react';

function ViberIcon({ size = 16 }: { size?: number }) {
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

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-50/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section (centered) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest justify-center">
            <Sparkles size={14} />
            <span>Kontakt informacije</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Obratite nam se s povjerenjem
          </h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mx-auto" />
          <p className="font-sans text-slate-500 font-light text-sm sm:text-base leading-relaxed">
            Naš stručni tim vam stoji na raspolaganju za sve informacije, stručne savjete i organizaciju kućne njege u Tuzli i okolini. Tu smo da saslušamo vaše potrebe i osiguramo vrhunsku brigu za Vaše najmilije.
          </p>
        </div>

        {/* Reorganized contact panel grid without form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Column 1: Core Contact Details (Phone, Email, Location) */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold text-slate-900 border-l-4 border-gold-500 pl-3">
              Direktni kontakti
            </h3>
            
            <div className="space-y-6" id="contact-cards">
              {/* Phone Card */}
              <a
                href="tel:+38761509570"
                className="flex items-center gap-5 p-6 rounded-2xl border border-slate-100 hover:border-gold-300 hover:bg-gold-50/15 transition-all duration-300 group shadow-sm bg-slate-50/30"
              >
                <div className="p-4 rounded-xl bg-gold-50 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone size={22} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400">Telefon</h4>
                  <p className="font-display text-xl font-bold text-slate-900 mt-1">+387 61 509 570</p>
                  <span className="font-sans text-xs text-gold-600 font-medium">Pozovite nas direktno</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:goldencare.tuzla@gmail.com"
                className="flex items-center gap-5 p-6 rounded-2xl border border-slate-100 hover:border-gold-300 hover:bg-gold-50/15 transition-all duration-300 group shadow-sm bg-slate-50/30"
              >
                <div className="p-4 rounded-xl bg-gold-50 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</h4>
                  <p className="font-display text-xl font-bold text-slate-900 mt-1 break-all">goldencare.tuzla@gmail.com</p>
                  <span className="font-sans text-xs text-gold-600 font-medium">Pošaljite nam upit</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-5 p-6 rounded-2xl border border-slate-100 shadow-sm bg-slate-50/30">
                <div className="p-4 rounded-xl bg-gold-50 text-gold-500 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400">Sjedište</h4>
                  <p className="font-display text-xl font-bold text-slate-900 mt-1">Tuzla, Bosna i Hercegovina</p>
                  <span className="font-sans text-xs text-slate-500 font-light">Usluga dostupna širom BiH i EU</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Working Hours & Socials */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold text-slate-900 border-l-4 border-gold-500 pl-3">
              Radno vrijeme & Povezivanje
            </h3>

            {/* Working Hours Card */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/30 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-gold-500">
                <Clock size={20} />
                <h4 className="font-display text-sm font-bold text-slate-900">Naše radno vrijeme</h4>
              </div>
              <div className="space-y-2.5 divide-y divide-slate-100 font-sans text-sm text-slate-600">
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-slate-700">Ponedjeljak - Petak:</span>
                  <span>08:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-slate-700">Subota:</span>
                  <span>08:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-slate-700">Nedjelja:</span>
                  <span className="text-gold-600 font-medium bg-gold-50 px-2 py-0.5 rounded text-xs">Dežurni telefon za hitne slučajeve 24/7</span>
                </div>
              </div>
            </div>

            {/* Social Networks Panel */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/30 shadow-sm space-y-4" id="social-buttons-panel">
              <h4 className="font-display text-sm font-bold text-slate-900 tracking-wide">
                Kontaktirajte nas putem društvenih mreža
              </h4>
              <p className="font-sans text-xs text-slate-400 font-light">
                Kliknite na neku od opcija ispod kako biste započeli direktan chat ili posjetili naš profil.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="social-cta-buttons">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/38761509570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-500 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-emerald-500/10"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Chat</span>
                </a>

                {/* Viber Button */}
                <a
                  href="viber://chat?number=%2B38761509570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#7360F2] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#5946D2] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-indigo-500/10"
                >
                  <ViberIcon size={16} />
                  <span>Viber Chat</span>
                </a>

                {/* Facebook Button */}
                <a
                  href="https://www.facebook.com/profile.php?id=61591861043872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1877F2] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1565C0] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-blue-500/10"
                >
                  <Facebook size={16} />
                  <span>Facebook profil</span>
                </a>

                {/* Instagram Button */}
                <a
                  href="https://www.instagram.com/goldencare_tuzla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-purple-500/10"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Information Card below */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-200/30 bg-gradient-to-r from-gold-50/40 via-white to-gold-50/20 p-8 sm:p-10 shadow-sm text-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100/10 rounded-full blur-2xl" />
            
            <div className="relative max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-50 text-gold-500 mb-2">
                <Heart size={20} className="fill-gold-500 text-gold-500 animate-pulse" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Imate pitanja ili trebate savjet?
              </h3>
              <p className="font-sans text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                Pozovite nas telefonom, pošaljite email ili nam se javite putem WhatsAppa ili Vibera. Naš tim će Vam odgovoriti u najkraćem mogućem roku.
              </p>
              <div className="pt-2 text-xs text-gold-600 font-semibold uppercase tracking-wider">
                Golden Care tim je tu za Vas
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Responsive embedded Google Maps styled iframe centered on Tuzla, Bosnia */}
        <div className="mt-16 rounded-[2.5rem] overflow-hidden shadow-lg border border-gold-200/10 h-[400px] relative group" id="contact-google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.8058474251703!2d18.665780511874284!3d44.537233770953934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759a37e1d5eb85b%3A0xb23d6a7d5fa222b4!2sTuzla%2C%20Bosnia%20and%20Herzegovina!5e0!3m2!1sen!2sba!4v1700000000000"
            className="w-full h-full border-none grayscale-[20%] sepia-[10%] group-hover:grayscale-0 transition-all duration-[2000ms]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Golden Care Tuzla Lokacija"
          />
          {/* Subtle gold overlay vignette frame */}
          <div className="absolute inset-0 border-[8px] border-white pointer-events-none rounded-[2.5rem]" />
          <div className="absolute top-4 left-4 glass-card px-4 py-2.5 rounded-xl border border-gold-200/20 text-[11px] font-bold text-slate-800 tracking-wider uppercase shadow-md pointer-events-none flex items-center gap-2">
            <MapPin size={12} className="text-gold-500" />
            <span>Tuzla, Bosna i Hercegovina</span>
          </div>
        </div>

      </div>
    </section>
  );
}
