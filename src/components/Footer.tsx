import React, { useState } from 'react';
import { Mail, Phone, MapPin, Youtube, ArrowUp, Send, CheckCircle2 } from 'lucide-react';

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
    <footer className="bg-orange-950 text-orange-200/90 pt-16 pb-8 border-t border-orange-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-orange-900/60">
          
          {/* Column 1: About Varkari Shikshan Sansthan */}
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-amber-100 flex items-center gap-1">
              🚩 वारकरी <span className="text-orange-400">शिक्षण संस्था</span>
            </span>
            <p className="text-xs text-orange-200/70 leading-relaxed font-sans">
              Dedicated to preserving Marathi saint heritage, scriptures, and residential Gurukul wisdom. Providing systematic spiritual education in Vedas, Dnyaneshwari, Kirtanik art, and rhythmic pakhavaj accompaniment in Alandi Devachi.
            </p>
            
            {/* Spiritual YouTube resource links */}
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-xl bg-orange-900/40 text-orange-200 hover:text-white hover:bg-orange-900 transition-all flex items-center gap-1.5 text-xs font-semibold border border-orange-500/10"
              >
                <Youtube className="w-4 h-4 text-orange-450" />
                <span>दर्शन व कीर्तन चॅनेल</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-amber-100 font-bold text-xs uppercase tracking-widest mb-5">संस्था मार्गदर्शन</h3>
            <ul className="space-y-3.5 text-xs">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors">मुख्य पृष्ठ (Home)</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors">इतिहास व नियम (About)</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('courses')} className="hover:text-white transition-colors">प्रवेश आणि अभ्यासक्रम (Admissions)</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('dnyaneshwari')} className="hover:text-white transition-colors">ज्ञानेश्वरी स्वाध्याय (Self Study)</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('bhajan')} className="hover:text-white transition-colors">कीर्तन व अभंग संग्रह (Bhajans)</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors">संपर्क केंद्र (Support)</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Alandi Location Desk */}
          <div className="space-y-4">
            <h3 className="text-amber-100 font-bold text-xs uppercase tracking-widest mb-5">मुख्य कार्यालय</h3>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-orange-200/70 leading-relaxed">
                  इंद्रायणी नदीकाठ, घाटाजवळ, आळंदी देवाची, तालुका खेड, जिल्हा पुणे, महाराष्ट्र - ४१२१०५
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 shrink-0" />
                <a href="mailto:contact@warkarirojnishi.in" className="text-orange-200/70 hover:text-white">contact@warkarirojnishi.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                <span className="text-orange-200/70">+९१ ९८७६५ ४३२१० (अलंकारिक कार्यालय वेळ)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Reference & Sister Portals */}
          <div className="space-y-4">
            <h3 className="text-amber-150 font-bold text-xs uppercase tracking-widest mb-5">डिजिटल संदर्भ</h3>
            <p className="text-xs text-orange-200/70 leading-relaxed">
              For complete daily devotional schedules and Alanditithi Panchangs, check out our chief partner portals:
            </p>
            <ul className="space-y-3.5 text-xs font-semibold">
              <li>
                <a 
                  href="https://warkarirojnishi.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white block text-orange-400 font-serif text-sm hover:underline"
                >
                  📖 warkarirojnishi.in
                </a>
              </li>
              <li>
                <span className="text-[10px] text-orange-200/50 block font-normal uppercase leading-none">Primary reference site</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-orange-200/50">
          <p>© {new Date().getFullYear()} वारकरी शिक्षण संस्था. आळंदी देवाची. All Sacred Rights Reserved.</p>
          
          <div className="flex items-center gap-4 mt-4 sm:mt-0 font-medium">
            <a href="https://warkarirojnishi.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Warkari Rojnishi Reference Link
            </a>
            <span className="text-orange-950">|</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-orange-900/40 text-orange-200 hover:text-white transition-all flex items-center justify-center gap-1 cursor-pointer border border-orange-500/10"
              title="Scroll back up"
            >
              <span>वर जा</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
