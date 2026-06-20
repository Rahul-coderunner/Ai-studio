import React, { useState, useEffect } from 'react';
import { X, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Show after 10 seconds of user interaction
    const timer = setTimeout(() => {
      // Check if user has already dismissed or subscribed in local storage to respect their experience
      const hasInteraction = localStorage.getItem('alandimauli_newsletter_dismissed');
      if (!hasInteraction) {
        setIsVisible(true);
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('alandimauli_newsletter_dismissed', 'true');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      localStorage.setItem('alandimauli_newsletter_dismissed', 'true');
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm w-full mx-4 sm:mx-0 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 animate-slide-in-up">
      <button 
        onClick={handleDismiss} 
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50 shrink-0"
        title="Close dialog"
      >
        <X className="w-4 h-4" />
      </button>

      {subscribed ? (
        <div className="text-center py-4 space-y-3">
          <div className="mx-auto w-12 h-12 rounded-full bg-amber-50 text-brand-secondary flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-orange-600" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 font-display">राम कृष्ण हरी!</h4>
          <p className="text-xs text-slate-600">
            You are successfully subscribed to the Daily Abhang & Ekadashi alarm. May Lord Panduranga bless you always.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div className="flex items-center gap-2 text-brand-secondary">
            <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase">हरिपाठ आणि अभंग संदेश</span>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-md font-bold text-slate-800 font-display leading-snug">
              मिळवा रोज एक चिंतन अभंग आणि एकादशी आठवण!
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Subscribe to receive beautiful, daily spiritual thoughts by Sant Tukaram Maharaj and Mauli Dnyaneshwar, complete with meaning and upcoming Ekadashi tithi notifications in Marathi and English.
            </p>
          </div>

          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-orange-600/60" />
            <input
              type="email"
              required
              placeholder="तुमचा ईमेल टाका (your-email@gmail.com)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-1 focus:ring-orange-600 focus:border-orange-600 focus:bg-white outline-hidden placeholder-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-xs text-white font-semibold transition-all hover:shadow-lg"
          >
            सदस्य व्हा (Subscribe for Daily Abhangs)
          </button>
          
          <p className="text-[10px] text-center text-slate-400">
            निष्काम आणि मोफत सेवा | No spam. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
