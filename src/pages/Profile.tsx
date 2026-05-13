/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { User, Mail, Camera, Save, LogOut, Settings, Award, X, ShieldCheck, Coffee, Sparkles, ChevronRight } from 'lucide-react';

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [authData, setAuthData] = React.useState({ email: '', password: '' });
  const [profile, setProfile] = React.useState({
    displayName: 'Revaldi Kurniawan',
    email: 'revaldikrnwn@gmail.com',
    bio: 'Coffee enthusiast and home barista. Always exploring new origins and brewing methods from the equatorial belt.',
    membershipStatus: 'premium',
    photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  });

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handlePhotoClick = () => {
    if (isEditing) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, photoURL: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignIn = () => {
    if (authData.email && authData.password) {
      setIsLoggedIn(true);
      if (isSignUp) {
        setProfile(prev => ({ ...prev, email: authData.email }));
      }
    } else {
      alert('Please fill in both email and password.');
    }
  };

  const [brews, setBrews] = React.useState([
    { id: '1', name: 'Morning Ethiopia V60', ratio: '1:15', temp: '94°C', grams: '20g', date: '2026-05-12' },
    { id: '2', name: 'Afternoon Espresso', ratio: '1:2', temp: '93°C', grams: '19g', date: '2026-05-12' }
  ]);

  const [newBrew, setNewBrew] = React.useState({ name: '', ratio: '', temp: '', grams: '', notes: '' });

  const addBrew = () => {
    if (newBrew.name) {
      setBrews([{ ...newBrew, id: Date.now().toString(), date: new Date().toISOString().split('T')[0] }, ...brews]);
      setNewBrew({ name: '', ratio: '', temp: '', grams: '', notes: '' });
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center p-4 bg-coffee-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[100px] rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-coffee-dark w-full max-w-md p-12 border border-coffee-border relative z-10"
        >
          <div className="flex flex-col items-center mb-12">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 shadow-xl shadow-gold/20">
              <User className="text-coffee-black w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif italic text-white">{isSignUp ? 'Join the Guild' : 'The Guild Entrance'}</h2>
            <p className="text-coffee-muted text-[10px] uppercase tracking-[0.3em] mt-4 font-bold">
              {isSignUp ? 'Create your artisan account' : 'Sign in to your account'}
            </p>
          </div>

          <div className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-[9px] uppercase tracking-[0.3em] font-black text-gold mb-3">Display Name</label>
                <input 
                  type="text" 
                  className="w-full bg-coffee-black/50 border border-coffee-border p-4 text-sm focus:outline-none focus:border-gold transition-all font-mono text-white"
                  placeholder="The Coffee Master"
                  onChange={(e) => setProfile(prev => ({ ...prev, displayName: e.target.value }))}
                />
              </div>
            )}
            <div>
              <label className="block text-[9px] uppercase tracking-[0.3em] font-black text-gold mb-3">Member Identifier</label>
              <input 
                type="email" 
                className="w-full bg-coffee-black/50 border border-coffee-border p-4 text-sm focus:outline-none focus:border-gold transition-all font-mono text-white"
                placeholder="revaldi@guild.com"
                value={authData.email}
                onChange={(e) => setAuthData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-[9px] uppercase tracking-[0.3em] font-black text-gold mb-3">Secret Key</label>
              <input 
                type="password" 
                className="w-full bg-coffee-black/50 border border-coffee-border p-4 text-sm focus:outline-none focus:border-gold transition-all font-mono text-white"
                placeholder="••••••••"
                value={authData.password}
                onChange={(e) => setAuthData(prev => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <button 
              onClick={handleSignIn}
              className="w-full bg-gold text-coffee-black font-black uppercase tracking-[0.3em] py-5 text-[10px] hover:bg-white transition-all shadow-xl shadow-gold/10 mt-4"
            >
              {isSignUp ? 'Enroll in Guild' : 'Authorize Entry'}
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-coffee-border flex flex-col gap-4">
            <button 
              className="w-full py-4 border border-coffee-border text-[10px] uppercase tracking-widest font-bold text-coffee-muted hover:text-white hover:border-white transition-all flex items-center justify-center gap-3"
              onClick={() => setIsLoggedIn(true)}
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-3 h-3 grayscale contrast-200" />
              Sign in with Google
            </button>
            <p className="text-center text-[9px] text-coffee-muted uppercase tracking-widest font-medium">
              {isSignUp ? 'Already a member?' : 'Not a member?'} 
              <span 
                className="text-gold font-black cursor-pointer hover:text-white transition-colors ml-2"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Sign In' : 'Apply for Guild'}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-coffee-black selection:bg-gold selection:text-coffee-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-coffee-border pb-12">
          <div>
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-black mb-4 block">Personal Atelier</span>
            <h1 className="text-5xl font-serif text-white italic tracking-tight">The Profile of <span className="text-gold/80">Revaldi</span></h1>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-coffee-muted hover:text-gold transition-colors text-[10px] font-black uppercase tracking-[0.3em] border border-coffee-border px-6 py-3"
          >
            <LogOut className="w-3.5 h-3.5" />
            Retire Session
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-coffee-border border border-coffee-border">
          {/* Profile Sidebar */}
          <div className="lg:col-span-4 bg-coffee-sub p-12 flex flex-col items-center border-r border-coffee-border">
            <div className="relative group mb-10">
              <div 
                className={`w-48 h-48 rounded-none border border-gold p-1 shadow-2xl relative overflow-hidden bg-coffee-black ${isEditing ? 'cursor-pointer' : ''}`}
                onClick={handlePhotoClick}
              >
                <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                {isEditing && (
                  <div className="absolute inset-0 bg-coffee-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-gold text-coffee-black p-3 rounded-full hover:scale-110 transition-transform">
                      <Camera className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange} 
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-coffee-black p-3 text-xs font-mono font-black italic">
                {profile.displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
              </div>
            </div>
            
            <div className="text-center w-full">
              <h3 className="text-2xl font-serif italic text-white mb-2">{profile.displayName}</h3>
              <div className="flex items-center justify-center gap-2 text-gold text-[10px] uppercase tracking-[0.2em] font-black mb-10">
                <Award className="w-3 h-3" />
                Annual Master
              </div>
              
              <div className="space-y-4 text-left w-full pt-10 border-t border-coffee-border">
                 <div className="p-6 bg-coffee-dark border border-coffee-border relative overflow-hidden group hover:border-gold transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                       <Settings className="w-12 h-12 rotate-12" />
                    </div>
                    <h4 className="text-[9px] uppercase tracking-[0.2em] font-black text-coffee-muted mb-4 block">Guild Status</h4>
                    <p className="text-lg font-serif italic text-white">Full Proprietor</p>
                    <p className="text-[10px] font-mono text-gold mt-1">Exp: May 2027</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-8 bg-coffee-dark p-12">
            <div className="flex justify-between items-center mb-16">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gold">Identity Parameters</h4>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-gold transition-colors flex items-center gap-3 group"
              >
                {isEditing ? <X className="w-3.5 h-3.5" /> : <Settings className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform" />}
                {isEditing ? 'Cancel Edit' : 'Modify Data'}
              </button>
            </div>

            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.3em] font-black text-coffee-muted mb-4">Nom de Plume</label>
                  {isEditing ? (
                    <input 
                      className="w-full bg-coffee-black/50 border border-coffee-border p-4 text-sm font-mono text-white focus:border-gold outline-none transition-all"
                      defaultValue={profile.displayName}
                    />
                  ) : (
                    <p className="text-white text-xl font-serif italic border-l border-gold/30 pl-4">{profile.displayName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.3em] font-black text-coffee-muted mb-4">Registry Email</label>
                  <p className="text-white text-sm font-mono flex items-center gap-3 bg-coffee-black/30 p-4 border border-coffee-border">
                    {profile.email}
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-[0.3em] font-black text-coffee-muted mb-4">Brewing Philosophy</label>
                {isEditing ? (
                  <textarea 
                    rows={4}
                    className="w-full bg-coffee-black/50 border border-coffee-border p-5 text-sm font-mono text-white focus:border-gold outline-none transition-all resize-none"
                    defaultValue={profile.bio}
                  />
                ) : (
                  <p className="text-coffee-muted text-sm leading-relaxed italic border-l border-coffee-border pl-6 py-2">
                    "{profile.bio}"
                  </p>
                )}
              </div>

              {isEditing && (
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setIsEditing(false)}
                  type="button"
                  className="w-full bg-gold text-coffee-black font-black uppercase tracking-[0.3em] py-5 text-[10px] hover:bg-white transition-all shadow-xl shadow-gold/10 flex items-center justify-center gap-3"
                >
                  <Save className="w-4 h-4" />
                  Synchronize Identity
                </motion.button>
              )}
            </form>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-coffee-border">
               {[
                 { label: 'Cups Brewed', value: '1,248', icon: Coffee },
                 { label: 'Origins Found', value: '24', icon: Award },
                 { label: 'Points Gained', value: '4.8k', icon: Sparkles }
               ].map((stat, sIdx) => (
                 <div key={sIdx} className="bg-coffee-sub p-8 flex flex-col items-center group hover:bg-coffee-black transition-colors">
                    <stat.icon className="w-5 h-5 text-gold/30 group-hover:text-gold transition-colors mb-4" />
                    <div className="text-3xl font-serif italic text-white mb-1">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-[0.2em] font-black text-coffee-muted">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Brewing Logbook Section */}
        <div className="mt-32">
           <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
              <div className="max-w-xl">
                 <h2 className="text-4xl font-serif italic text-white mb-6">Artisan Logbook</h2>
                 <p className="text-coffee-muted text-sm italic leading-relaxed">
                    Document your experiments with precision. Track extraction variables and refine your brewing philosophy with every cup.
                 </p>
              </div>
              <button 
                onClick={() => setIsEditing(true)}
                className="bg-gold text-coffee-black px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-all shadow-xl shadow-gold/10"
              >
                 Record New Brew
              </button>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* New Entry Form */}
              <div className="lg:col-span-1">
                 <div className="bg-coffee-dark border border-coffee-border p-10 sticky top-32">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gold mb-8">Manual Entry</h4>
                    <div className="space-y-6">
                       <div>
                          <label className="block text-[8px] uppercase tracking-[0.2em] font-black text-coffee-muted mb-3">Origin / Method</label>
                          <input 
                            value={newBrew.name}
                            onChange={(e) => setNewBrew({...newBrew, name: e.target.value})}
                            className="w-full bg-coffee-black/50 border border-coffee-border p-4 text-xs font-mono text-white focus:border-gold outline-none"
                            placeholder="e.g. Kenya Wash V60"
                          />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                             <label className="block text-[8px] uppercase tracking-[0.2em] font-black text-coffee-muted mb-3">Ratio</label>
                             <input 
                               value={newBrew.ratio}
                               onChange={(e) => setNewBrew({...newBrew, ratio: e.target.value})}
                               className="w-full bg-coffee-black/50 border border-coffee-border p-4 text-xs font-mono text-white focus:border-gold outline-none"
                               placeholder="1:15"
                             />
                          </div>
                          <div>
                             <label className="block text-[8px] uppercase tracking-[0.2em] font-black text-coffee-muted mb-3">Temp (°C)</label>
                             <input 
                               value={newBrew.temp}
                               onChange={(e) => setNewBrew({...newBrew, temp: e.target.value})}
                               className="w-full bg-coffee-black/50 border border-coffee-border p-4 text-xs font-mono text-white focus:border-gold outline-none"
                               placeholder="94"
                             />
                          </div>
                       </div>
                       <div>
                          <label className="block text-[8px] uppercase tracking-[0.2em] font-black text-coffee-muted mb-3">Philosophy / Notes</label>
                          <textarea 
                            value={newBrew.notes}
                            onChange={(e) => setNewBrew({...newBrew, notes: e.target.value})}
                            rows={3}
                            className="w-full bg-coffee-black/50 border border-coffee-border p-4 text-xs font-mono text-white focus:border-gold outline-none resize-none"
                            placeholder="Flavor notes..."
                          />
                       </div>
                       <button 
                         onClick={addBrew}
                         className="w-full bg-coffee-border text-white hover:bg-gold hover:text-coffee-black py-4 text-[10px] uppercase tracking-widest font-black transition-all"
                       >
                          Archive Entry
                       </button>
                    </div>
                 </div>
              </div>

              {/* Log List */}
              <div className="lg:col-span-2">
                 <div className="space-y-6">
                    {brews.map((brew, idx) => (
                       <motion.div 
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: idx * 0.1 }}
                         key={brew.id} 
                         className="bg-coffee-sub border border-coffee-border p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-gold/50 transition-colors"
                       >
                          <div>
                             <span className="text-[8px] font-mono text-gold mb-1 block tracking-tighter">{brew.date}</span>
                             <h5 className="text-xl font-serif italic text-white group-hover:text-gold transition-colors">{brew.name}</h5>
                          </div>
                          <div className="flex gap-10">
                             <div className="text-center">
                                <div className="text-[9px] uppercase tracking-widest text-coffee-muted mb-1">Ratio</div>
                                <div className="text-sm font-mono text-white">{brew.ratio || '—'}</div>
                             </div>
                             <div className="text-center">
                                <div className="text-[9px] uppercase tracking-widest text-coffee-muted mb-1">Temp</div>
                                <div className="text-sm font-mono text-white">{brew.temp}{brew.temp && '°C'}</div>
                             </div>
                             <div className="text-center">
                                <div className="text-[9px] uppercase tracking-widest text-coffee-muted mb-1">Dose</div>
                                <div className="text-sm font-mono text-white">{brew.grams || '—'}</div>
                             </div>
                          </div>
                          <button className="text-coffee-muted hover:text-white transition-colors">
                             <ChevronRight className="w-4 h-4" />
                          </button>
                       </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
