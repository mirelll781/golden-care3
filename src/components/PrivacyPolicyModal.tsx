import React from 'react';
import { motion } from 'motion/react';
import { X, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm" id="privacy-policy-overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative bg-white max-w-2xl w-full rounded-[2rem] border border-gold-200/20 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
        id="privacy-policy-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gold-50 text-gold-500">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">Politika Privatnosti</h3>
              <p className="font-sans text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Golden Care Tuzla</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            aria-label="Zatvori politiku"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6 text-slate-600 font-sans text-sm leading-relaxed font-light overflow-y-auto" id="privacy-policy-content">
          <p>
            Zadnje ažuriranje: <strong>15. Juli, 2026.</strong>
          </p>

          <p>
            U agenciji <strong>Golden Care Tuzla</strong>, izuzetno cijenimo Vašu privatnost i obavezujemo se na zaštitu Vaših ličnih podataka, kao i podataka članova Vaše porodice o kojima se brine naša mreža njegovatelja. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, štitimo i dijelimo informacije dobivene putem našeg veb sajta i formulara za upit.
          </p>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">1. Koje informacije prikupljamo?</h4>
            <p>
              Prilikom slanja upita za organizaciju njege ili posredovanja, prikupljamo isključivo podatke koje nam dobrovoljno dostavite: ime i prezime kontakt osobe, broj telefona, email adresu, željeni oblik njege, te specifične opise zdravstvenih potreba korisnika njege kako bismo mogli izvršiti što precizniju selekciju kadra.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">2. Svrha korištenja podataka</h4>
            <p>
              Prikupljeni podaci koriste se isključivo za:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Uspostavljanje kontakta sa Vama radi dogovora o uslugama,</li>
              <li>Procjenu specifičnih zdravstvenih i socijalnih potreba korisnika,</li>
              <li>Selekciju i preporuku najadekvatnijeg njegovatelja iz naše baze,</li>
              <li>Pružanje stalne logističke podrške tokom trajanja angažmana.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">3. Zaštita i povjerljivost podataka</h4>
            <p>
              Svi podaci koje unesete tretiraju se kao stroga medicinska i poslovna tajna. Podaci su zaštićeni savremenim sigurnosnim SSL enkripcijama na našim serverima. Nikada ne prodajemo, ne iznajmljujemo niti neovlašteno dijelimo lične informacije trećim stranama. Pristup Vašim podacima imaju isključivo ovlašteni koordinatori agencije Golden Care.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">4. Vaša prava</h4>
            <p>
              U svakom trenutku imate pravo zatražiti uvid u podatke koje čuvamo o Vama, njihovu ispravku ili potpuno brisanje iz našeg sistema slanjem emaila na: <strong>goldencare.tuzla@gmail.com</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">5. Kolačići (Cookies)</h4>
            <p>
              Naš sajt koristi minimalne analitičke kolačiće kako bi osigurao optimalan rad, brže učitavanje stranice i bolje korisničko iskustvo. Ovi kolačići ne prikupljaju nikakve lične identifikacione podatke.
            </p>
          </div>
        </div>

        {/* Footer info inside modal */}
        <div className="border-t border-slate-100 pt-4 mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Heart size={12} className="text-gold-500 fill-gold-500" />
            <span>Profesionalnost i povjerenje</span>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-md cursor-pointer"
          >
            Slažem se i prihvatam
          </button>
        </div>
      </motion.div>
    </div>
  );
}
