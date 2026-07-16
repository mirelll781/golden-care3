import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  ShieldAlert,
  Heart,
  Home,
  Utensils,
  ShoppingCart,
  CalendarDays,
  RefreshCw,
  MessageSquare,
  Sparkles,
  PhoneCall,
  Search,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'core' | 'support' | 'household';
  categoryLabel: string;
  icon: React.ReactNode;
}

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const services: ServiceItem[] = [
    {
      id: 'posredovanje',
      title: 'Posredovanje pri zapošljavanju njegovatelja',
      description: 'Povezivanje porodica sa provjerenim i licenciranim njegovateljima i njegovateljicama koji u potpunosti odgovaraju vašim specifičnim porodičnim zahtjevima.',
      category: 'core',
      categoryLabel: 'Glavne usluge',
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: 'organizacija',
      title: 'Organizacija kućne njege',
      description: 'Strukturiranje i nadzor kompletnog plana kućne njege prilagođenog zdravstvenom stanju, rutinama i životnom tempu Vašeg člana porodice.',
      category: 'core',
      categoryLabel: 'Glavne usluge',
      icon: <PhoneCall className="w-6 h-6" />,
    },
    {
      id: 'njega',
      title: 'Njega starijih osoba',
      description: 'Sveobuhvatna i pažljiva podrška za starije, bolesne i polupokretne osobe sa fokusom na njihovu sigurnost, higijenu, dostojanstvo i emocionalno blagostanje.',
      category: 'core',
      categoryLabel: 'Glavne usluge',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 'domacinstvo',
      title: 'Pomoć u domaćinstvu',
      description: 'Održavanje čistoće stambenog prostora, peglanje, pranje i obavljanje sitnih kućanskih poslova kako bi životni prostor ostao čist i ugodan.',
      category: 'household',
      categoryLabel: 'Kućna pomoć',
      icon: <Home className="w-6 h-6" />,
    },
    {
      id: 'obroci',
      title: 'Priprema obroka',
      description: 'Planiranje i priprema zdravih, svježih i nutricionistički balansiranih jela u skladu sa prehrambenim potrebama i ljekarskim preporukama korisnika.',
      category: 'household',
      categoryLabel: 'Kućna pomoć',
      icon: <Utensils className="w-6 h-6" />,
    },
    {
      id: 'kupovina',
      title: 'Kupovina i nabavka',
      description: 'Odlazak u nabavku namirnica, higijenskih potrepština, lijekova i plaćanje računa, osiguravajući da domaćinstvo uvijek ima sve što je potrebno.',
      category: 'household',
      categoryLabel: 'Kućna pomoć',
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      id: 'pratnja',
      title: 'Pratnja ljekaru',
      description: 'Sigurna pratnja i organizacija transporta do zdravstvenih ustanova, ljekarskih pregleda, terapija ili apoteke, uz izvještavanje porodice.',
      category: 'core',
      categoryLabel: 'Glavne usluge',
      icon: <CalendarDays className="w-6 h-6" />,
    },
    {
      id: 'zamjena',
      title: 'Zamjena njegovatelja',
      description: 'Brzo i bezbrižno rješavanje zamjenskog njegovatelja u slučajevima godišnjih odmora, bolovanja ili nepredviđenih okolnosti bez prekida kontinuiteta njege.',
      category: 'support',
      categoryLabel: 'Podrška',
      icon: <RefreshCw className="w-6 h-6" />,
    },
    {
      id: 'savjetovanje',
      title: 'Savjetovanje porodica',
      description: 'Stručno usmjeravanje i savjetovanje o organizaciji njege, rješavanju kriznih situacija i prilagođavanju životnog prostora potrebama oboljele osobe.',
      category: 'support',
      categoryLabel: 'Podrška',
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      id: 'podrska',
      title: 'Podrška tokom cijelog angažmana',
      description: 'Neprestana administrativna, logistička i ljudska podrška našeg tima tokom cijelog trajanja saradnje, garantujući potpunu sigurnost i mir.',
      category: 'support',
      categoryLabel: 'Podrška',
      icon: <ShieldAlert className="w-6 h-6" />,
    },
  ];

  const categories = [
    { value: 'all', label: 'Sve usluge' },
    { value: 'core', label: 'Glavne usluge' },
    { value: 'household', label: 'Kućna pomoć' },
    { value: 'support', label: 'Podrška i savjetovanje' },
  ];

  const filteredServices = services.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="usluge" className="py-24 bg-[#fbfaf5] relative overflow-hidden">
      {/* Background soft circles */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-gold-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-gold-50/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Naš Spektar Usluga</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Profesionalna podrška u svakom trenutku
          </h2>
          <div className="h-1 w-24 bg-gold-gradient mx-auto rounded-full" />
          <p className="font-sans text-slate-500 font-light text-base leading-relaxed">
            Nudimo cjelokupna i prilagođena rješenja njege kako bismo Vašim najmilijima omogućili dostojanstvenu i sigurnu svakodnevnicu u udobnosti vlastitog doma.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 bg-white p-4 rounded-3xl border border-gold-200/10 shadow-sm" id="services-controls">
          {/* Categories Tab bar */}
          <div className="flex flex-wrap gap-2" id="services-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 focus:outline-none cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-gold-500 text-white shadow-md shadow-gold-500/15'
                    : 'text-slate-600 hover:bg-gold-50 hover:text-gold-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs" id="services-search-container">
            <input
              type="text"
              placeholder="Pretražite usluge..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-sm border border-slate-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 focus:outline-none transition-all placeholder:text-slate-400"
            />
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Services Grid with Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="services-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={service.id}
                className="group flex flex-col justify-between bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-gold-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                id={`service-card-${service.id}`}
              >
                {/* Thin gold decorative line on top hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="space-y-6">
                  {/* Category label badge */}
                  <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-100">
                    {service.categoryLabel}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gold-50 text-gold-500 border border-gold-100/50 flex items-center justify-center transition-all duration-500 group-hover:bg-gold-500 group-hover:text-white group-hover:scale-110 shadow-sm">
                    {service.icon}
                  </div>

                  {/* Text */}
                  <div className="space-y-3">
                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-gold-600 transition-colors duration-300 min-h-[56px] flex items-center">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card footer CTA link */}
                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center text-gold-500 text-xs font-semibold tracking-wider uppercase group-hover:text-gold-600 transition-colors gap-1 cursor-pointer">
                  <span>Saznajte više</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200"
            id="services-empty-state"
          >
            <p className="text-slate-500 font-sans">Nismo pronašli usluge sa traženim pojmom.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-gold-500 hover:text-gold-600"
            >
              Prikaži sve usluge
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
