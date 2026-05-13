/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, User, Menu, X, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Brewing', path: '/brewing' },
    { name: 'Membership', path: '/membership' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-coffee-black/90 backdrop-blur-md border-b border-coffee-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gold p-1.5 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
              <Coffee className="text-coffee-black w-5 h-5" />
            </div>
            <span className="font-serif italic text-2xl tracking-tight text-white">Bean & Brew</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${
                  location.pathname === link.path ? 'text-gold' : 'text-coffee-muted hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-px bg-coffee-border mx-2" />
            <Link
              to="/profile"
              className={`p-2 rounded-full border transition-all ${
                location.pathname === '/profile' ? 'border-gold text-gold' : 'border-coffee-border text-coffee-muted hover:text-white hover:border-white'
              }`}
            >
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-coffee-muted"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-coffee-black border-b border-coffee-border overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-xs uppercase tracking-widest font-medium text-coffee-muted hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-4 text-xs uppercase tracking-widest font-medium text-coffee-muted hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
              >
                <User className="w-4 h-4" />
                Profile
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
