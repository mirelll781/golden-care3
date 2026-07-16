import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Send,
  CheckCircle,
  Heart,
  Sparkles,
} from 'lucide-react';
import { ContactFormData } from '../types';

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
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    serviceInterest: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Posredovanje pri zapošljavanju njegovatelja',
    'Organizacija kućne njege',
    'Njega starijih osoba',
    'Pomoć u domaćinstvu',
    'Priprema obroka',
    'Kupovina i nabavka',
    'Pratnja ljekaru',
    'Zamjena njegovatelja',
    'Savjetovanje porodica',
    'Podrška tokom cijelog angažmana',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        serviceInterest: '',
      });
    }, 1800);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="kontakt" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-50/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info & Actions */}
          <div className="lg:col-span-5 space-y-10" id="contact-info-panel">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest">
                <Sparkles size={14} />
                <span>Kontakt informacije</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Obratite nam se s povjerenjem
              </h2>
              <div className="h-1 w-20 bg-gold-gradient rounded-full" />
              <p className="font-sans text-slate-500 font-light text-sm sm:text-base leading-relaxed">
                Naš stručni tim vam stoji na raspolaganju za sve informacije, stručne savjete i organizaciju kućne njege u Tuzli i okolini. Tu smo da saslušamo vaše potrebe.
              </p>
            </div>

            {/* Direct Contact Blocks */}
            <div className="space-y-6" id="contact-cards">
              {/* Phone Card */}
              <a
                href="tel:+38761509570"
                className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-gold-300 hover:bg-gold-50/15 transition-all duration-300 group"
              >
                <div className="p-4 rounded-xl bg-gold-50 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone size={20} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400">Telefon</h4>
                  <p className="font-display text-lg font-bold text-slate-900 mt-1">+387 61 509 570</p>
                  <span className="font-sans text-xs text-gold-600 font-medium">Pozovite nas direktno</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:goldencare.tuzla@gmail.com"
                className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-gold-300 hover:bg-gold-50/15 transition-all duration-300 group"
              >
                <div className="p-4 rounded-xl bg-gold-50 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</h4>
                  <p className="font-display text-lg font-bold text-slate-900 mt-1 break-all">goldencare.tuzla@gmail.com</p>
                  <span className="font-sans text-xs text-gold-600 font-medium">Pošaljite nam upit</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100">
                <div className="p-4 rounded-xl bg-gold-50 text-gold-500 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400">Sjedište</h4>
                  <p className="font-display text-lg font-bold text-slate-900 mt-1">Tuzla, Bosna i Hercegovina</p>
                  <span className="font-sans text-xs text-slate-500 font-light">Usluga dostupna širom BiH i EU</span>
                </div>
              </div>
            </div>

            {/* Social & Communication Actions */}
            <div className="space-y-4" id="social-buttons-panel">
              <h4 className="font-display text-sm font-bold text-slate-900 tracking-wide">Povežite se s nama putem mreža:</h4>
              <div className="flex flex-wrap gap-4" id="social-cta-buttons">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/38761509570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-emerald-500/10"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Chat</span>
                </a>

                {/* Viber Button */}
                <a
                  href="viber://chat?number=%2B38761509570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#7360F2] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#5946D2] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-indigo-500/10"
                >
                  <ViberIcon size={16} />
                  <span>Viber Chat</span>
                </a>

                {/* Facebook Button */}
                <a
                  href="https://www.facebook.com/profile.php?id=61591861043872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1877F2] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1565C0] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-blue-500/10"
                >
                  <Facebook size={16} />
                  <span>Facebook profil</span>
                </a>

                {/* Instagram Button */}
                <a
                  href="https://www.instagram.com/goldencare_tuzla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-purple-500/10"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="relative bg-gradient-to-b from-slate-50/60 to-slate-50/20 rounded-[2.5rem] border border-slate-100 p-8 sm:p-10 shadow-sm overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="golden-care-inquiry-form"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display text-xl font-bold text-slate-900">Pošaljite nam direktnu poruku</h3>
                      <p className="font-sans text-xs text-slate-400 font-light">Ispunite formu ispod i naš koordinator će Vas ubrzo pozvati.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700">Ime i Prezime *</label>
                        <input
                          required
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="npr. Amila Mujkić"
                          className="px-5 py-3.5 rounded-2xl border border-slate-200 bg-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all text-sm"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700">Telefon *</label>
                        <input
                          required
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="npr. +387 61 123 456"
                          className="px-5 py-3.5 rounded-2xl border border-slate-200 bg-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700">Email adresa</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="npr. amila@example.com"
                          className="px-5 py-3.5 rounded-2xl border border-slate-200 bg-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all text-sm"
                        />
                      </div>

                      {/* Service Dropdown */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="serviceInterest" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700">Usluga koja Vas zanima *</label>
                        <select
                          required
                          id="serviceInterest"
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleInputChange}
                          className="px-5 py-3.5 rounded-2xl border border-slate-200 bg-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all text-sm appearance-none cursor-pointer"
                        >
                          <option value="">-- Odaberite uslugu --</option>
                          {servicesList.map((service, idx) => (
                            <option key={idx} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700">Opis Vaših potreba / Poruka *</label>
                      <textarea
                        required
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Molimo vas opišite nam potrebe Vašeg člana porodice (zdravstveno stanje, obim brige, vremenski raspored...)"
                        className="px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden group bg-gold-500 disabled:bg-gold-300 text-white py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-500/10 hover:shadow-xl hover:shadow-gold-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Slanje u toku...</span>
                        </>
                      ) : (
                        <>
                          <span>Pošaljite zahtjev</span>
                          <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6"
                    id="contact-form-success-overlay"
                  >
                    <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-gold-500/20">
                      <CheckCircle size={36} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-slate-900">Uspješno poslano!</h3>
                      <p className="font-sans text-sm text-slate-600 max-w-sm leading-relaxed">
                        Zahvaljujemo se na Vašem povjerenju. Naš koordinator za kućnu njegu u Tuzli će Vas kontaktirati telefonskim putem u najkraćem roku (obično unutar 2 sata).
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gold-600 font-semibold uppercase tracking-wider bg-gold-50 border border-gold-100 px-4 py-2 rounded-full">
                      <Heart size={12} className="fill-gold-500 text-gold-500 animate-pulse" />
                      <span>Golden Care tim je tu za Vas</span>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-gold-500 transition-colors"
                    >
                      Pošaljite novi upit
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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
