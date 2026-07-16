import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Heart, MapPin, Sparkles } from 'lucide-react';
import aboutImage from '../assets/images/about_caregiver_elderly_1784196065211.jpg';

export default function About() {
  const values = [
    {
      icon: <Award className="w-5 h-5 text-gold-500" />,
      title: 'Profesionalni Standardi',
      desc: 'Zapošljavamo i posredujemo isključivo provjerene, tople i iskusne osobe koje cijene dostojanstvo korisnika.',
    },
    {
      icon: <Compass className="w-5 h-5 text-gold-500" />,
      title: 'Naša Misija',
      desc: 'Pružiti porodicama sigurnost i mir, a njegovateljima priliku za profesionalan angažman kroz odgovorno i kvalitetno posredovanje.',
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold-500" />,
      title: 'Lokalni Fokus, Globalni Nivo',
      desc: 'Ponosno djelujemo sa sjedištem u Tuzli, donoseći evropske standarde i transparentnost u kućnu njegu.',
    },
  ];

  return (
    <section id="o-nama" className="py-24 bg-white relative overflow-hidden">
      {/* Light subtle decorative shapes */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold-50/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image / Composition */}
          <div className="lg:col-span-5 relative" id="about-left-visual">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border border-gold-200/20"
            >
              <img
                src={aboutImage}
                alt="Profesionalna i topla kućna njega starijih osoba - Golden Care"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Elegant floating gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-900/40 via-transparent to-transparent" />
              
              {/* Small floating badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl border border-gold-200/30">
                <p className="font-sans text-xs text-slate-800 leading-relaxed font-medium text-center italic">
                  &ldquo;Briga o starijima nije samo naš posao, to je naš poziv i moralna odgovornost.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8" id="about-right-content">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest">
                <Sparkles size={14} />
                <span>Upoznajte nas</span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
              >
                Dobro došli u Golden Care.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 w-20 bg-gold-gradient rounded-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-slate-600 font-sans text-base leading-relaxed font-light"
            >
              <p>
                <strong>Golden Care</strong> je ekskluzivna agencija koja pruža profesionalne usluge posredovanja između porodica kojima je potrebna vrhunska njega i kvalifikovanih, empatičnih njegovatelja i njegovateljica.
              </p>
              <p>
                Svjesni smo da je pronalazak odgovarajuće osobe za brigu o Vašim najmilijima jedna od najvažnijih odluka koje donosite. Zato našem radu pristupamo sa najvišim stepenom profesionalizma, transparentnosti i, iznad svega, ljudskosti.
              </p>
            </motion.div>

            {/* Structured Values / Mission list */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pt-4" id="about-values">
              {values.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-gold-500/10 hover:bg-gold-50/20 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-gold-50 text-gold-600 flex-shrink-0 border border-gold-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
