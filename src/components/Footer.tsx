import React, { useState } from 'react';
import { Mail, Phone, MapPin, Youtube, Linkedin, ArrowUp, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
}

export default function Footer({ setCurrentPage, onOpenBooking }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: About WeConnect */}
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
              We<span className="text-brand-secondary">Connect</span>
            </span>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              High-impact professional skills bootcamps and consulting tailored specifically for India’s ambitious corporate candidates, tech leads, and managers. Guided by veteran leaders.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors">Home Page</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors">About Story & Values</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('courses')} className="hover:text-white transition-colors">Curricula & Courses</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('blog')} className="hover:text-white transition-colors">Resources & Expert Articles</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors">Contact Support</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts & IST Availability */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Connect Directly</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span className="text-slate-400">Bengaluru Corporate Hub, MG Road, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
                <a href="mailto:support@weconnect.in" className="text-slate-400 hover:text-white">support@weconnect.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-400">+91 98765 43210 (Mon-Sat, 9AM-7PM IST)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Stay Ahead</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We publish rigorous career insights, interview specs, and upcoming class schedules once every fortnightly.
            </p>
            {subscribed ? (
              <div className="p-3.5 bg-brand-secondary/10 border border-brand-secondary/20 rounded-xl flex items-center gap-2.5 text-brand-secondary">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-xs font-medium">Successfully enrolled! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter professional email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:ring-1 focus:ring-brand-secondary focus:border-brand-secondary outline-hidden placeholder-slate-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-brand-secondary text-slate-900 hover:bg-brand-secondary/90 transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-500">No spam. Unsubscribe with 1 click anytime.</span>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WeConnect Coaching Services Private Limited. India. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <button onClick={() => alert('Mock legal term')} className="hover:text-slate-400">Terms of Use</button>
            <button onClick={() => alert('Mock privacy term')} className="hover:text-slate-400">Privacy Policy</button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-all shadow-xs flex items-center justify-center gap-1"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
