import React, { useState } from 'react';
import { Menu, X, Landmark, Compass, Music, ShieldCheck, Heart, UserCheck } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'मुख्य पृष्ठ', subtitle: 'Home' },
    { id: 'about', label: 'इतिहास व नियम', subtitle: 'About Us' },
    { id: 'courses', label: 'प्रवेश प्रक्रिया', subtitle: 'Admissions' },
    { id: 'dnyaneshwari', label: 'ज्ञानेश्वरी स्वाध्याय', subtitle: 'Self Study', icon: Compass },
    { id: 'bhajan', label: 'भजन व अभंग', subtitle: 'Bhajans', icon: Music },
    { id: 'contact', label: 'कार्यालय संपर्क', subtitle: 'Contact' },
    { id: 'admin', label: 'व्यवस्थापन', subtitle: 'Admin', icon: UserCheck }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fdfbf7]/95 backdrop-blur-md border-b border-orange-500/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Orange Flag symbol */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2" onClick={() => handleNavClick('home')}>
            <span className="text-2xl animate-pulse">🚩</span>
            <div className="flex flex-col">
              <span className="text-md sm:text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                वारकरी <span className="text-orange-600">शिक्षण संस्था</span>
              </span>
              <span className="text-[10px] font-bold text-orange-700 font-sans tracking-wide">
                आळंदी देवाची (पुणे) | Established 1917
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 flex flex-col items-center group transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-orange-950'
                      : 'text-slate-600 hover:text-orange-600'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                    {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-600 animate-spin-slow' : 'text-slate-450'}`} />}
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-medium tracking-normal leading-none font-sans block mt-0.5">
                    {item.subtitle}
                  </span>
                  
                  {isActive ? (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />
                  ) : (
                    <span className="absolute -bottom-1 left-12 right-12 h-0.5 bg-orange-600/0 group-hover:bg-orange-600/30 rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Inquiry Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-orange-650 hover:bg-orange-700 text-white shadow-xs transition-all hover:shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Landmark className="w-4 h-4 text-orange-200" />
              <span>प्रवेश चौकशी अर्जी</span>
            </button>
          </div>

          {/* Mobile Navigation Toggler & Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="p-2.5 bg-orange-600/10 text-orange-700 rounded-lg hover:bg-orange-600/15"
              title="Apply for Admission"
            >
              <Landmark className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-orange-600 focus:outline-none"
              aria-label="Toggle mobile drawer menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfbf7] border-b border-orange-500/10 px-4 pt-2 pb-6 space-y-2 shadow-inner animate-fade-in text-xs font-bold uppercase tracking-wider">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-amber-500/10 text-orange-950 font-bold border-l-4 border-orange-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="w-4 h-4 text-orange-650" />}
                  <span>{item.label}</span>
                </div>
                <span className="text-[10px] text-slate-450 tracking-normal lowercase font-sans">
                  {item.subtitle}
                </span>
              </button>
            )}
          )}
          <div className="pt-4 px-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-widest bg-orange-650 text-white flex items-center justify-center gap-2 shadow-xs"
            >
              <Landmark className="w-4 h-4 text-orange-200" />
              <span>प्रवेश चौकशी नोंदणी</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
