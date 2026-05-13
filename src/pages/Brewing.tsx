/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Droplets, Thermometer, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COFFEE_RECIPES } from '../constants';

export default function Brewing() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', name: 'Original Menu' },
    { id: 'espresso', name: 'Espresso' },
    { id: 'filter', name: 'Filter' },
    { id: 'milk-based', name: 'Silky Milk' }
  ];

  const filteredRecipes = selectedCategory === 'all' 
    ? COFFEE_RECIPES 
    : COFFEE_RECIPES.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-coffee-black selection:bg-gold selection:text-coffee-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-serif text-white mb-6 italic">Artisanal Menu</h1>
              <p className="text-coffee-muted text-sm italic leading-relaxed">
                Explore our curated selection of brewing techniques. Each method is calibrated to extract the most delicate flavor notes from our premium roasts.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                    selectedCategory === cat.id 
                      ? 'bg-gold text-coffee-black border-gold shadow-lg shadow-gold/20' 
                      : 'bg-transparent text-coffee-muted border-coffee-border hover:text-white hover:border-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-coffee-border mt-12" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-coffee-border border border-coffee-border">
          {filteredRecipes.map((recipe, idx) => (
            <motion.div
              layout
              key={recipe.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-coffee-dark p-10 flex flex-col justify-between hover:bg-coffee-sub transition-all group cursor-pointer h-[400px] relative overflow-hidden"
            >
               {/* Background Decorative Number */}
               <div className="absolute -bottom-10 -right-5 text-[12rem] font-serif italic text-white/[0.03] pointer-events-none group-hover:text-gold/[0.05] transition-colors leading-none">
                 {(idx + 1).toString().padStart(2, '0')}
               </div>

              <div className="relative z-10">
                <span className="text-gold text-xs font-mono uppercase tracking-[0.3em] mb-8 block">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-3xl font-serif italic text-white group-hover:text-gold transition-colors">{recipe.name}</h3>
                   <div className="bg-coffee-border p-2 rounded-full group-hover:bg-gold group-hover:text-coffee-black transition-all">
                      <Coffee className="w-4 h-4" />
                   </div>
                </div>
                
                <p className="text-coffee-muted text-sm italic mb-10 leading-relaxed line-clamp-3">
                  {recipe.description}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center justify-between mt-auto pt-8 border-t border-coffee-border group-hover:border-gold/30 transition-colors">
                <div className="flex gap-6">
                   <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-widest text-coffee-muted">Ratio</span>
                      <span className="text-xs font-mono">{recipe.ratio || '—'}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-widest text-coffee-muted">Temp</span>
                      <span className="text-xs font-mono">{recipe.temperature || '—'}</span>
                   </div>
                </div>
                <Link
                   to={`/brewing/${recipe.id}`}
                   className="text-xs uppercase tracking-widest font-bold text-gold border-b border-gold/30 pb-0.5 hover:border-gold transition-all"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
