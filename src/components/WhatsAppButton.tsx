import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUpRight, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a helpful tip 3 seconds after load to engage the user
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent("Hi, I'm interested in WeConnect courses. Can you help?");
    const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-3.5 mr-1 max-w-[260px] bg-slate-900 text-white rounded-2xl p-3.5 shadow-2xl border border-slate-800 flex items-start gap-2.5 animate-bounce">
          <div className="text-xs font-sans">
            <span className="font-semibold text-emerald-400 block mb-0.5">💬 Support Active</span>
            Have questions about our curricula? Let’s chat over WhatsApp instantly!
          </div>
          <button 
            onClick={() => setShowTooltip(false)} 
            className="text-slate-400 hover:text-white shrink-0 p-0.5"
            title="Close help bubble"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Primary Floating Key Action Button */}
      <button
        onClick={handleWhatsAppRedirect}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95"
        title="Chat on WhatsApp"
      >
        {/* Radar Ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping" />
        
        {/* WhatsApp Icon placeholder svg or custom lucide */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 fill-white transition-all group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.62.962 3.21 1.442 4.814 1.443 5.483.002 9.943-4.453 9.946-9.939.002-2.657-1.03-5.155-2.906-7.034C16.622 1.747 14.12 1.714 11.517 1.71 6.033 1.712 1.57 6.167 1.567 11.653c-.001 1.705.452 3.37 1.312 4.821L1.87 21.05l4.777-1.496z" />
        </svg>

        {/* Floating Mini text description appearing only on hover */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all origin-right bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-lg font-medium whitespace-nowrap flex items-center gap-1">
          Chat on WhatsApp <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
        </span>
      </button>

    </div>
  );
}
