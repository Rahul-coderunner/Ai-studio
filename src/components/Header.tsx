import React, { useState } from 'react';
import { Menu, X, PhoneCall, Bot, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Solutions/Courses' },
    { id: 'blog', label: 'Blog & Insights' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'admin', label: 'CMS Admin', icon: Bot }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="text-2xl font-bold tracking-tight text-brand-primary flex items-center gap-1.5">
              We<span className="text-brand-secondary">Connect</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 py-2 relative ${
                    isActive
                      ? 'text-brand-primary font-semibold'
                      : 'text-slate-600 hover:text-brand-primary'
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-brand-secondary' : 'text-slate-400'}`} />}
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="header_cta_booking_btn"
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-brand-primary hover:bg-brand-primary/95 text-white shadow-xs transition-all hover:scale-102 hover:shadow-md flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-brand-secondary" />
              <span>Book Free Call</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-3">
            <button
              id="header_mobile_cta_btn"
              onClick={onOpenBooking}
              className="p-2 bg-brand-primary/5 text-brand-primary rounded-full hover:bg-brand-primary/10"
              title="Book Free Call"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-brand-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-inner animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center gap-3 ${
                  isActive
                    ? 'bg-slate-50 text-brand-primary font-semibold border-l-4 border-brand-secondary'
                    : 'text-slate-600 hover:bg-slate-50/50 hover:text-brand-primary'
                }`}
              >
                {Icon && <Icon className="w-5 h-5 text-slate-400" />}
                <span>{item.label}</span>
              </button>
            )}
          )}
          <div className="pt-4 px-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl text-center text-sm font-semibold bg-brand-primary text-white flex items-center justify-center gap-2 shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-brand-secondary" />
              <span>Book Free Discovery Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
