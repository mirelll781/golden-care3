import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: 'test-1',
      author: 'Amela Mujkić',
      relation: 'Kći korisnice',
      rating: 5,
      text: 'Pronalazak njegovateljice za našu majku preko Golden Care agencije bio je spas za našu porodicu. Gospođa Amira, koja nam je dodijeljena, je izuzetno stručna, topla i predivna osoba. Moja majka se ponovo smije i osjeća sigurno.',
      date: 'Novembar, 2025.',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 'test-2',
      author: 'Haris Selimović',
      relation: 'Sin korisnika',
      rating: 5,
      text: 'Izuzetno profesionalan pristup posredovanju i kućnoj organizaciji. Cijeli proces je organizovan za manje od dva dana nakon našeg poziva. Podrška agencije tokom cijelog angažmana nam pruža nevjerovatan mir i pouzdanost.',
      date: 'Februar, 2026.',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 'test-3',
      author: 'Emina Delić',
      relation: 'Unuka korisnice',
      rating: 5,
      text: 'Svaka preporuka za Golden Care tim. Moja baka je dobila ne samo vrhunsku medicinsku njegu i pomoć u domaćinstvu, već i iskrenu prijateljicu i društvo. Komunikacija sa agencijom je brza, transparentna i topla.',
      date: 'Maj, 2026.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    },
  ];

  return (
    <section id="svjedocenja" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold-50/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-gold-100/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Iskustva Naših Korisnika</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Riječi koje nas inspirišu i obavezuju
          </h2>
          <div className="h-1 w-24 bg-gold-gradient mx-auto rounded-full" />
          <p className="font-sans text-slate-500 font-light text-base leading-relaxed">
            Ponosni smo na povjerenje koje gradimo sa porodicama širom Tuzlanskog kantona. Njihovo zadovoljstvo je dokaz našeg kvaliteta.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {reviews.map((testimonial, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={testimonial.id}
              className="relative bg-gradient-to-b from-gold-50/20 to-white border border-slate-100 hover:border-gold-500/10 hover:shadow-xl rounded-[2.5rem] p-8 transition-all duration-500 flex flex-col justify-between"
              id={`testimonial-card-${testimonial.id}`}
            >
              {/* Giant elegant quote mark */}
              <div className="absolute top-6 right-8 text-gold-500/10 pointer-events-none">
                <Quote size={56} className="fill-gold-500/5 stroke-[1.5]" />
              </div>

              <div className="space-y-6">
                {/* Star Ratings */}
                <div className="flex items-center gap-1" id={`rating-${testimonial.id}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold-500 fill-gold-500 stroke-[1.5]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-light italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-200/40 bg-gold-50">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900 leading-tight">
                    {testimonial.author}
                  </h4>
                  <p className="font-sans text-[11px] text-gold-600 font-semibold uppercase tracking-wider mt-0.5">
                    {testimonial.relation}
                  </p>
                  <p className="font-sans text-[10px] text-slate-400 mt-0.5">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
