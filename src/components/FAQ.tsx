import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Kako funkcioniše proces posredovanja i odabira njegovatelja?',
      answer: 'Proces je prilagođen Vašem vremenu i potrebama. Prvo obavljamo detaljne, besplatne konsultacije kako bismo razumjeli zdravstveno stanje i navike korisnika. Zatim vršimo selekciju najboljih kandidata iz naše baze koji odgovaraju Vašem profilu i organizujemo upoznavanje. Nakon Vašeg izbora, mi preuzimamo administraciju i organizujemo početak rada.',
    },
    {
      id: 'faq-2',
      question: 'Kako garantujete sigurnost i pouzdanost njegovatelja u našem domu?',
      answer: 'Sigurnost i mir naših klijenata su nam na prvom mjestu. Svi njegovatelji prolaze kroz strogi selekcijski postupak koji uključuje provjeru identiteta, detaljan pregled medicinske i psihološke podobnosti, provjeru krivičnog dosijea, te obavezno usmeno kontaktiranje i verifikaciju preporuka od strane prethodnih poslodavaca.',
    },
    {
      id: 'faq-3',
      question: 'Šta se dešava ako njegovatelj ode na bolovanje ili godišnji odmor?',
      answer: 'Ovo je jedna od najvećih prednosti saradnje sa Golden Care. U slučaju bolesti, nepredviđenih okolnosti ili planiranog godišnjeg odmora prvobitnog njegovatelja, mi odmah i bez ikakvih dodatnih troškova organizujemo kvalifikovanu i odgovarajuću zamjenu kako bi kontinuitet njege bio potpuno neometan.',
    },
    {
      id: 'faq-4',
      question: 'Koje gradove i opštine pokriva agencija Golden Care?',
      answer: 'Naše glavno sjedište se nalazi u Tuzli. Uslugama posredovanja i organizacije kućne njege pokrivamo cijelu teritoriju Tuzlanskog kantona (Tuzla, Lukavac, Živinice, Srebrenik, Gradačac, Gračanica, Banovići, Kalesija, Kladanj i ostala mjesta), a po potrebi i zahtjevu porodica posredujemo i u drugim dijelovima Bosne i Hercegovine.',
    },
    {
      id: 'faq-5',
      question: 'Koliko brzo se može organizovati dolazak njegovatelja na adresu?',
      answer: 'Zahvaljujući stalno ažuriranoj i proaktivnoj bazi kvalifikovanih kandidata, proces možemo započeti u roku od 24 do 48 sati od trenutka sklapanja dogovora, što je izuzetno važno kod hitnih izlazaka pacijenata iz bolnice ili naglih promjena zdravstvenog stanja.',
    },
    {
      id: 'faq-6',
      question: 'Da li je moguće izmijeniti dogovorene usluge tokom saradnje?',
      answer: 'Apsolutno. Zdravstveno stanje korisnika se može mijenjati, pa tako i potreba za njegom. Fleksibilni smo i spremni prilagoditi ugovor, uvesti dodatne sate, promijeniti raspored obavljanja kućnih poslova ili organizovati dodatnu medicinsku pratnju kad god se ukaže potreba.',
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#fbfaf5] relative overflow-hidden">
      {/* Subtle decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold-50/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Česta Pitanja</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Tu smo da otklonimo svaku dilemu
          </h2>
          <div className="h-1 w-24 bg-gold-gradient mx-auto rounded-full" />
          <p className="font-sans text-slate-500 font-light text-base leading-relaxed">
            Izdvojili smo odgovore na najčešća pitanja koja nam porodice postavljaju prilikom organizacije njege za svoje najmilije.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4" id="faq-accordion-container">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-gold-300 shadow-md shadow-gold-500/5'
                    : 'border-slate-100 hover:border-gold-200'
                }`}
                id={`accordion-item-${faq.id}`}
              >
                {/* Trigger head */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  id={`accordion-trigger-${faq.id}`}
                >
                  <span className="font-display text-base font-bold text-slate-900 pr-4 leading-normal sm:text-base">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-gold-500 text-white rotate-180' : 'bg-gold-50 text-gold-500'
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Content body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-light border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
