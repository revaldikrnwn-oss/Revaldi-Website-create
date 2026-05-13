/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Home() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200', title: 'Perfect Extraction' },
    { url: 'https://images.unsplash.com/photo-144215432d645-736293307e9d?auto=format&fit=crop&q=80&w=1200', title: 'Artisanal Roasts' },
    { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200', title: 'Morning Ritual' }
  ];

  return (
    <div className="min-h-screen bg-coffee-black selection:bg-gold selection:text-coffee-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=2400"
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Hero Coffee"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-black/20 via-coffee-black/60 to-coffee-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block text-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-6 font-bold">
              The Artisan Coffee Studio
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-none mb-10">
              The Gilded <br />
              <span className="italic font-light text-gold/80">Bean.</span>
            </h1>
            <div className="flex flex-wrap gap-5">
              <Link
                to="/brewing"
                className="bg-gold text-coffee-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all flex items-center gap-2 group shadow-xl shadow-gold/10"
              >
                Brewing Guide
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/membership"
                className="bg-transparent text-white border border-coffee-border px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-coffee-border transition-all"
              >
                Premium Guild
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-coffee-muted"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Explore</span>
        </motion.div>
      </section>

      {/* Featured Gallery */}
      <section className="py-32 bg-coffee-sub">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                 <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Artisanal Gallery</h2>
                 <p className="text-coffee-muted text-sm leading-relaxed">
                    Captured moments of precision, dedication, and the pursuit of the perfect cup. Every frame tells a story of origin and craft.
                 </p>
              </div>
              <Link to="/brewing" className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold border-b border-gold/30 pb-1 hover:border-gold transition-all">
                 View Menu Index
              </Link>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-[4/5] overflow-hidden group cursor-pointer border border-coffee-border bg-coffee-dark"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-coffee-black via-coffee-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-[10px] font-mono uppercase tracking-widest mb-2 block">Featured Capture</span>
                  <h3 className="text-white font-serif text-2xl italic">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-coffee-black text-white py-40 border-y border-coffee-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 italic">The Guild Philosophy</h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { icon: Coffee, title: "Precision Brewing", desc: "Measured parameters for peak extraction and clarity." },
              { icon: ShieldCheck, title: "Curated Origins", desc: "Direct trade beans from the world's most elite estates." },
              { icon: Heart, title: "Selective Society", desc: "A refined space for dedicated coffee professionals." },
              { icon: Sparkles, title: "Gilded Standards", desc: "Setting the benchmark for modern café culture." }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-coffee-dark border border-coffee-border flex items-center justify-center mb-8 group hover:border-gold transition-colors">
                  <feature.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xl font-serif italic mb-4">{feature.title}</h4>
                <p className="text-coffee-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
