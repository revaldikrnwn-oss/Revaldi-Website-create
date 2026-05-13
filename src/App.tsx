/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Brewing from './pages/Brewing';
import RecipeDetail from './pages/RecipeDetail';
import Membership from './pages/Membership';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-stone-900 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brewing" element={<Brewing />} />
            <Route path="/brewing/:id" element={<RecipeDetail />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        
        <footer className="bg-coffee-black border-t border-coffee-border py-32 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex items-center gap-3">
                <div className="bg-gold p-1 rounded-full">
                  <div className="w-4 h-4 bg-coffee-black rounded-full" />
                </div>
                <span className="font-serif italic text-2xl font-medium text-white tracking-tight">Bean & Brew</span>
              </div>
              <div className="flex gap-12 text-[9px] uppercase tracking-[0.4em] font-black text-coffee-muted">
                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors">Registry</a>
                <a href="#" className="hover:text-gold transition-colors">Contact</a>
              </div>
              <p className="text-coffee-muted text-[10px] font-mono tracking-tighter">© 2026 THE GILDED BEAN STUDIO. EST. 1892</p>
            </div>
            <div className="mt-16 text-center">
               <p className="text-[8px] uppercase tracking-[0.6em] text-coffee-border font-bold">Exotic Roasts • Traditional Methods</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
