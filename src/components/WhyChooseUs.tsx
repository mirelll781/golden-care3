import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Award,
  Users,
  Activity,
  MessageSquareShare,
  Zap,
  Fingerprint,
  Sparkles,
} from 'lucide-react';

interface ReasonItem {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgSize: string; // Tailwind grid span
}

export default function WhyChooseUs() {
  const reasons: ReasonItem[] = [
    {
      id: 'profesionalnost',
      num: '01',
      title: 'Profesionalnost',
      description: 'Zastupamo najviše standarde u selekciji osoblja. Svaki korak našeg posredovanja je pravno regulisan, diskretan i usmjeren na obezbjeđivanje apsolutne sigurnosti i poštovanja.',
      icon: <Award className="w-5 h-5 text-gold-500" />,
      bgSize: 'md:col-span-2 lg:col-span-8',
    },
    {
      id: 'sigurnost',
      num: '02',
      title: 'Sigurnost',
      description: 'Vaš mir je naš imperativ. Garantujemo potpunu legalnost, provjeru preporuka i stalni administrativni nadzor tokom cijelog trajanja angažmana.',
      icon: <ShieldCheck className="w-5 h-5 text-gold-500" />,
      bgSize: 'md:col-span-1 lg:col-span-4',
    },
    {
      id: 'provjereni',
      num: '03',
      title: 'Provjereni kandidati',
      description: 'Svi njegovatelji prolaze kroz rigorozne procese provjere identiteta, zdravstvenih i psiholoških sposobnosti, dosadašnjeg iskustva i ličnih preporuka.',
      icon: <Users className="w-5 h-5 text-gold-500" />,
      bgSize: 'md:col-span-1 lg:col-span-4',
    },
    {
      id: 'podrska',
      num: '04',
      title: '24/7 podrška',
      description: 'Za hitne slučajeve, izmjene ili brze konsultacije naš tim je dostupan u bilo koje doba dana i noći, pružajući vam stalni oslonac.',
      icon: <Activity className="w-5 h-5 text-gold-500" />,
      bgSize: 'md:col-span-2 lg:col-span-8',
    },
    {
      id: 'komunikacija',
      num: '05',
      title: 'Transparentna komunikacija',
      description: 'Nema skrivenih troškova niti nejasnih ugovora. Radimo potpuno transparentno, otvoreno izvještavajući porodicu o napretku i stanju korisnika.',
      icon: <MessageSquareShare className="w-5 h-5 text-gold-500" />,
      bgSize: 'md:col-span-1 lg:col-span-4',
    },
    {
      id: 'organizacija',
      num: '06',
      title: 'Brza organizacija',
      description: 'Zahvaljujući velikoj bazi spremnih i licenciranih njegovatelja, u mogućnosti smo organizovati i pokrenuti njegu u najkraćem roku, čak i u hitnim okolnostima.',
      icon: <Zap className="w-5 h-5 text-gold-500" />,
      bgSize: 'md:col-span-1 lg:col-span-4',
    },
    {
      id: 'pristup',
      num: '07',
      title: 'Individualan pristup',
      description: 'Svaka porodica je jedinstvena. Kreiramo poseban plan posredovanja prilagođen isključivo željama, navikama i zdravstvenim potrebama korisnika.',
      icon: <Fingerprint className="w-5 h-5 text-gold-500" />,
      bgSize: 'md:col-span-2 lg:col-span-4',
    },
  ];

  return (
    <section id="zasto-mi" className="py-24 bg-white relative overflow-hidden">
      {/* Light subtle visual gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold-100/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Zašto Izabrati Golden Care</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Postavljamo zlatne standarde u kućnoj njezi
          </h2>
          <div className="h-1 w-24 bg-gold-gradient mx-auto rounded-full" />
          <p className="font-sans text-slate-500 font-light text-base leading-relaxed">
            Spajamo vrhunsku stručnost sa iskrenom empatijom kako bismo Vam pružili osjećaj sigurnosti, a Vašim najdražima ugodnu i dostojanstvenu starost.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6" id="why-choose-us-bento-grid">
          {reasons.map((reason, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              key={reason.id}
              className={`${reason.bgSize} group p-8 rounded-[2rem] border border-slate-100 bg-slate-50/40 hover:bg-white hover:border-gold-500/15 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col justify-between`}
              id={`bento-item-${reason.id}`}
            >
              {/* Corner decorative light effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-100/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  {/* Icon Frame */}
                  <div className="w-11 h-11 rounded-xl bg-gold-50 text-gold-500 border border-gold-100/40 flex items-center justify-center transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
                    {reason.icon}
                  </div>
                  {/* Subtle index number */}
                  <span className="font-mono text-sm font-semibold text-slate-300 tracking-wider">
                    {reason.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-gold-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Minimal bullet decoration */}
              <div className="mt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400"></span>
                <span className="h-1.5 w-5 rounded-full bg-gold-500"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
