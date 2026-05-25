import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

interface ContactPageProps {
  onAddContactMessage: (msg: { name: string; email: string; phone: string; subject: string; message: string }) => void;
}

export default function ContactPage({ onAddContactMessage }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Course Query',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full identity name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Corporate email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email format description.';
    }
    if (formData.phone && !/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      tempErrors.phone = 'Kindly input a logical phone format (minimum 10 digits).';
    }
    if (!formData.message.trim()) tempErrors.message = 'Query explanation message is required.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent("Hi, I want to inquire about WeConnect consulting solutions. Can you help?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onAddContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Course Query',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form Section (Gets 7 Columns) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight tracking-tight text-slate-900">
              Get in Touch
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Have specific constraints, group registration query, or custom syllabus requirements? Drop our executive team a detailed note.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-100/50 rounded-2xl flex items-start gap-4 text-emerald-800 animate-scale-up-fade">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mt-1 shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-sm">Query Forwarded Successfully!</h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Thank you for submitting. Our admissions panel has recorded your details and mapped it to our queue. We aim to response back inside our 24 hours commitment window.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Full Identity Name</span>
                  <input
                    type="text"
                    required
                    placeholder="Siddharth Roy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.name ? 'border-rose-400' : 'border-slate-200'
                    } rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary`}
                  />
                  {errors.name && <p className="text-[10px] font-semibold text-rose-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Professional Email Address</span>
                  <input
                    type="email"
                    required
                    placeholder="siddharth.roy@tcs.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.email ? 'border-rose-400' : 'border-slate-200'
                    } rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary`}
                  />
                  {errors.email && <p className="text-[10px] font-semibold text-rose-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">WhatsApp Contact Number (Optional)</span>
                  <input
                    type="tel"
                    placeholder="+91 98765 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.phone ? 'border-rose-400' : 'border-slate-200'
                    } rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary`}
                  />
                  {errors.phone && <p className="text-[10px] font-semibold text-rose-500">{errors.phone}</p>}
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Select Query Subject</span>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-55 border border-slate-200 rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary cursor-pointer font-sans"
                  >
                    <option value="General Course Query">General Solution / Admissions Query</option>
                    <option value="Corporate / Bulk Training">Corporate Bulk Registrations</option>
                    <option value="Syllabus Consultation Sync">Diagnostic Call Modification</option>
                    <option value="Payment Gateway Assistance">Indian Gateway Support</option>
                    <option value="Other Issues">Other Operational Issues</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Describe your query / trajectory in detail</span>
                <textarea
                  rows={4}
                  required
                  placeholder="Hello, I wanted to inquire if your Technical PM course can accommodate candidates with core Manual Testing backgrounds who are currently located in Delhi..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 bg-slate-50 border ${
                    errors.message ? 'border-rose-400' : 'border-slate-200'
                  } rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary`}
                />
                {errors.message && <p className="text-[10px] font-semibold text-rose-500">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-slate-900 border border-slate-900 hover:bg-brand-primary hover:border-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Transmit Corporate Message</span>
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Right Column: Direct Info Row (Gets 5 Columns) */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-8">
          
          {/* Direct channels */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Accelerate Channels</span>
              <h3 className="text-xl font-bold font-display leading-tight">Direct Connections</h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Would you rather skip standard forms and speak directly? We are active over multiple Indian communication rails.
            </p>

            <div className="space-y-4 pt-1 text-xs">
              
              {/* WhatsApp direct link */}
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-between group cursor-pointer" onClick={handleWhatsAppRedirect}>
                <div className="flex gap-3.5 items-center">
                  <div className="p-2.5 rounded-full bg-emerald-500 text-slate-900">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">WhatsApp Admins Link</h4>
                    <p className="text-[11px] text-emerald-400 font-medium">Click to chat instantly over mobile</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Email direct */}
              <div className="flex items-start gap-4 p-2">
                <div className="p-2.5 rounded-xl bg-slate-800 text-brand-secondary">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Registered Corporate Support</h4>
                  <p className="text-slate-400 mt-0.5">support@weconnect.in</p>
                </div>
              </div>

              {/* Telephone direct */}
              <div className="flex items-start gap-4 p-2">
                <div className="p-2.5 rounded-xl bg-slate-800 text-brand-secondary">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Admissions Desk Direct</h4>
                  <p className="text-slate-400 mt-0.5">+91 98765 43210 (Admissions)</p>
                </div>
              </div>

              {/* Support Commitment */}
              <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-800 text-slate-400 leading-relaxed font-sans text-[11px] flex gap-2.5">
                <div className="w-2 h-2 rounded-full bg-brand-secondary animate-ping mt-1 shrink-0" />
                <div>
                  <strong>Response Commitment pledge:</strong> We reply within 24 business hours to all general incoming admissions queries.
                </div>
              </div>

            </div>
          </div>

          {/* Location physical */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md space-y-4">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <MapPin className="w-5 h-5 text-brand-secondary" />
              <span>Corporate Hub Venue</span>
            </h4>
            <div className="space-y-1 text-xs">
              <p className="font-bold text-slate-700">WeConnect HQ India</p>
              <p className="text-slate-500 leading-relaxed font-sans">
                Level 4, Corporate Suites, MG Road Near Metro Station, Bengaluru, Karnataka - 560001
              </p>
            </div>
            
            <div className="h-36 bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
              {/* Map Illustration standard mock */}
              <div className="absolute inset-0 bg-slate-900 opacity-12 bg-cover bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600')]" />
              <div className="absolute inset-x-0 bottom-4 text-center z-10">
                <span className="bg-slate-900 text-white font-bold font-mono text-[9px] px-2 py-1 rounded shadow-md uppercase">
                  MG ROAD CENTRAL HUB BENGALURU
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
