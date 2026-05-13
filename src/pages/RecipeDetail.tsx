import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Thermometer, Box, Droplets, Clock, Activity, FileText, ChevronRight } from 'lucide-react';
import { COFFEE_RECIPES } from '../constants';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = COFFEE_RECIPES.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-coffee-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-white mb-4">Recipe Not Found</h2>
          <Link to="/brewing" className="text-gold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">
            Return to Brewing Guild
          </Link>
        </div>
      </div>
    );
  }

  const specs = [
    { label: 'Ratio', value: recipe.ratio, icon: Activity },
    { label: 'Temperature', value: recipe.temperature, icon: Thermometer },
    { label: 'Grammage', value: recipe.grammage, icon: Box },
    { label: 'Water', value: recipe.waterAmount, icon: Droplets },
    { label: 'Grind Size', value: recipe.grindSize, icon: Activity },
    { label: 'Brew Time', value: recipe.brewTime, icon: Clock },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-coffee-black selection:bg-gold selection:text-coffee-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link 
          to="/brewing" 
          className="inline-flex items-center gap-2 text-coffee-muted hover:text-gold transition-colors text-[10px] uppercase tracking-[0.3em] font-black mb-12 group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Archives
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Visuals & Header */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[4/5] overflow-hidden border border-coffee-border mb-10"
            >
              <img 
                src={recipe.imageUrl} 
                alt={recipe.name} 
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-black mb-2 block">{recipe.category}</span>
                <h1 className="text-5xl font-serif italic text-white tracking-tight">{recipe.name}</h1>
              </div>
            </motion.div>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-coffee-muted border-b border-coffee-border pb-4">Brewing Philosophy</h4>
              <p className="text-white text-sm italic leading-relaxed opacity-80">
                "{recipe.notes || recipe.description}"
              </p>

              {recipe.recommendedBeans && (
                <div className="mt-12 bg-coffee-dark border border-coffee-border p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Droplets className="w-16 h-16" />
                  </div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] font-black text-gold mb-4">Recommended Terroir</h4>
                  <p className="text-lg font-serif italic text-white mb-2">{recipe.recommendedBeans.origin}</p>
                  <p className="text-xs text-coffee-muted italic leading-relaxed">
                    {recipe.recommendedBeans.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Technical Specs & Directions */}
          <div className="lg:col-span-7 space-y-16">
            {/* Technical Parameters Grid */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.4em] text-gold font-black mb-8">Technical Parameters</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-coffee-border border border-coffee-border">
                {specs.map((spec, idx) => (
                  <div key={idx} className="bg-coffee-sub p-8 group hover:bg-coffee-black transition-colors">
                    <spec.icon className="w-4 h-4 text-gold/40 mb-4 group-hover:text-gold transition-colors" />
                    <div className="text-[9px] uppercase tracking-[0.2em] font-black text-coffee-muted mb-1">{spec.label}</div>
                    <div className="text-lg font-mono text-white">{spec.value || 'N/A'}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Ingredients */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.4em] text-gold font-black mb-8">Required Elements</h2>
              <div className="space-y-4">
                {recipe.ingredients.map((ingredient, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-sm text-white italic border-b border-coffee-border/30 pb-4">
                    <span className="text-gold font-mono text-[10px]">0{idx + 1}</span>
                    {ingredient}
                  </div>
                ))}
              </div>
            </section>

            {/* Methodology */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.4em] text-gold font-black mb-8">Methodology</h2>
              <div className="space-y-10">
                {recipe.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-12 group">
                    <div className="absolute left-0 top-0 text-3xl font-serif italic text-coffee-border group-hover:text-gold transition-colors duration-500">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="pt-2">
                       <p className="text-coffee-muted text-sm leading-relaxed italic group-hover:text-white transition-colors duration-500">
                         {step}
                       </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Artisan Actions */}
            <div className="pt-10 flex flex-col sm:flex-row gap-6">
               <button className="bg-gold text-coffee-black px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-all shadow-xl shadow-gold/10">
                  Begin Timer
               </button>
               <button className="border border-coffee-border text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-black hover:border-gold hover:text-gold transition-all">
                  Synchronize to Kettle
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
