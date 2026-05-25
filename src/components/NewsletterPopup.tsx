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
      const hasInteraction = localStorage.getItem('weconnect_newsletter_dismissed');
      if (!hasInteraction) {
        setIsVisible(true);
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('weconnect_newsletter_dismissed', 'true');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      localStorage.setItem('weconnect_newsletter_dismissed', 'true');
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
          <div className="mx-auto w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">Career Upgrades Scheduled</h4>
          <p className="text-xs text-slate-500">
            Check your professional inbox for our curriculum guidelines and welcome pack shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div className="flex items-center gap-2 text-brand-secondary">
            <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase">Free Master Guide</span>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-md font-bold text-slate-800 leading-snug">
              Unlock the "Tech Leader Promotion Blueprint"
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get our exclusive, peer-reviewed 45-page playbook with the top stakeholder negotiations templates used at top Indian unicorns.
            </p>
          </div>

          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary focus:bg-white outline-hidden placeholder-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-brand-primary hover:bg-brand-primary/95 text-xs text-white font-semibold transition-all hover:shadow-lg"
          >
            Claim Free Blueprint & Join Newsletter
          </button>
          
          <p className="text-[10px] text-center text-slate-400">
            Zero junk. Unconditional privacy. Secure & un-spammy.
          </p>
        </form>
      )}
    </div>
  );
}
