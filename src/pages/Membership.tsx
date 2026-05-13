/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../constants';

export default function Membership() {
  const plans = [
    { ...MEMBERSHIP_PLANS[0], title: 'Apprentice Month', subtitle: '1 Month Access', recommended: false },
    { ...MEMBERSHIP_PLANS[1], title: 'Curator Season', subtitle: '6 Months Access', recommended: true },
    { ...MEMBERSHIP_PLANS[2], title: 'Proprietor Year', subtitle: '1 Year Full Access', recommended: false },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-coffee-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Exclusive Guild</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 italic">The Gilded <span className="text-gold/80">Memberships</span></h1>
          <p className="text-coffee-muted max-w-2xl mx-auto text-sm italic leading-relaxed">
            Join the inner circle of coffee craft. Our memberships are designed for those who view brewing not just as a routine, but as an art form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-12 flex flex-col group transition-all duration-500 ${
                plan.recommended 
                  ? 'bg-coffee-border border-2 border-gold scale-105 z-10 shadow-[0_0_50px_rgba(212,175,55,0.1)]' 
                  : 'bg-coffee-dark border border-coffee-border hover:border-gold/50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-coffee-black text-[9px] uppercase tracking-widest px-6 py-1.5 font-black">
                  Most Refined
                </div>
              )}
              
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-serif italic text-white mb-2">{plan.title}</h3>
                <p className={`text-[10px] uppercase tracking-[0.2em] font-bold ${plan.recommended ? 'text-gold' : 'text-coffee-muted'}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="text-center mb-12">
                <span className="text-4xl font-mono text-white">{plan.price}</span>
              </div>

              <div className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-4 text-xs text-coffee-muted italic">
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.recommended ? 'bg-gold' : 'bg-coffee-border'}`} />
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${
                plan.recommended 
                  ? 'bg-gold text-coffee-black hover:bg-white' 
                  : 'bg-transparent text-gold border border-gold/30 hover:border-gold hover:bg-gold/5'
              }`}>
                {plan.recommended ? 'Request Invitation' : 'Subscribe'}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 border-t border-coffee-border pt-20">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                 <h4 className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-6">Corporate & Events</h4>
                 <h2 className="text-4xl font-serif italic text-white mb-6">Bespoke Brewing Solutions</h2>
                 <p className="text-coffee-muted text-sm italic leading-relaxed mb-8">
                    Elevate your workspace or next event with our master baristas and premium selection. We offer custom packages for corporate guilds and private gatherings.
                 </p>
                 <button className="text-[10px] uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-gold hover:text-gold transition-all">
                    Inquire About Bespoke Plans
                 </button>
              </div>
              <div className="relative aspect-video overflow-hidden border border-coffee-border">
                 <img 
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Corporate Coffee"
                 />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
