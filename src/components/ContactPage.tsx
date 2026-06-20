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
    subject: 'Admissions & Rules Syllabus',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'नाम टाका (Full Name is required).';
    if (!formData.email.trim()) {
      tempErrors.email = 'ईमेल संपर्क आवश्यक आहे (Email is required).';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'कृपया अचूक ईमेल फॉरमॅट टाका (Invalid email format).';
    }
    if (formData.phone && !/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      tempErrors.phone = 'Kindly input a valid phone format (minimum 10 digits).';
    }
    if (!formData.message.trim()) tempErrors.message = 'संदेश संदेश आवश्यक आहे (Message cannot be empty).';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent("राम कृष्ण हरी! मला वारकरी शिक्षण संस्थेला आधार किंवा देणगी देण्याबद्दल अधिक माहिती हवी आहे.");
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
        subject: 'Admissions & Rules Syllabus',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="bg-[#fdfbf7] min-h-screen py-16 px-4 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form Section */}
        <div className="lg:col-span-12 xl:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-md space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold text-orange-700 tracking-widest pl-0.2 block">संस्था मुख्य संपर्क</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight tracking-tight text-slate-900">
              Get in Touch (कार्यालय संपर्क)
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              आश्रमातील प्रवेश नियम, धान्य किंवा भांडी देणगी देणे किंवा इतर कोणत्याही चौकशीसाठी आम्हाला त्वरित संदेश पाठवा.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-100/50 rounded-2xl flex items-start gap-4 text-emerald-800 animate-scale-up-fade">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mt-1 shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-sm">संदेश यशस्वीरीत्या पाठवला आहे!</h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  राम कृष्ण हरी. तुमचा संदेश आळंदी येथील मुख्य कार्यालयामध्ये नोंदवला गेला असून आमची व्यवस्थापन समिती लवकरच आपल्याशी संपर्क साधेल.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Your Full Name (तुमचे नाव) *</span>
                  <input
                    type="text"
                    required
                    placeholder="उदा. ज्ञानेश्वर माउली पाटील "
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.name ? 'border-rose-400' : 'border-slate-200'
                    } rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-orange-600`}
                  />
                  {errors.name && <p className="text-[10px] font-semibold text-rose-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Contact Email (ईमेल आयडी) *</span>
                  <input
                    type="email"
                    required
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.email ? 'border-rose-400' : 'border-slate-200'
                    } rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-orange-600`}
                  />
                  {errors.email && <p className="text-[10px] font-semibold text-rose-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">WhatsApp Number (संपर्क क्रमांक)</span>
                  <input
                    type="tel"
                    placeholder="+91 98000 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.phone ? 'border-rose-400' : 'border-slate-200'
                    } rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-orange-600`}
                  />
                  {errors.phone && <p className="text-[10px] font-semibold text-rose-500">{errors.phone}</p>}
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Inquiry Topic (चौकशीचा विषय)</span>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-55 border border-slate-200 rounded-xl text-xs text-slate-800 focus:bg-white cursor-pointer"
                  >
                    <option value="Admissions & Rules Syllabus">प्रवेश आणि अभ्यासक्रम चौकशी</option>
                    <option value="Cereal & Food Grain Donation (अन्नदान)">अन्नदान व धान्य साहाय्य देणे</option>
                    <option value="Pothi-Granth Book Distribution Desk">धार्मिक ग्रंथ/पुस्तकांची मागणी</option>
                    <option value="Support Alandi Ashram Construction">आश्रम इमारत बांधकाम मदत</option>
                    <option value="Other Spiritual Seva Enquiry">इतर आध्यात्मिक सेवा</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Your Message (सविस्तर मजकूर) *</span>
                <textarea
                  rows={4}
                  required
                  placeholder="राम कृष्ण हरी, मला आळंदी येथील निवासी विद्यार्थ्यांच्या अन्नदानासाठी गव्हाची आणि तांदळाची गोणी पाठवायची आहे, कृपया योग्य पत्ता आणि तारीख कळवावी ही नम्र विनंती..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 bg-slate-50 border ${
                    errors.message ? 'border-rose-400' : 'border-slate-200'
                  } rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-orange-600`}
                />
                {errors.message && <p className="text-[10px] font-semibold text-rose-500">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-650 hover:bg-orange-750 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-orange-200 shrink-0" />
                  <span>संदेश पाठवा (Transmit Spiritual Query)</span>
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Right Column: Direct Info Row */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-6">
          
          {/* Direct channels */}
          <div className="bg-orange-950 text-orange-100 rounded-3xl p-8 border border-orange-900 shadow-xl space-y-6">
            <div className="space-y-1.5 animate-pulse">
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">विठ्ठल सेवा कक्ष</span>
              <h3 className="text-xl font-bold font-display leading-tight text-amber-100">Direct Office Connections</h3>
            </div>

            <p className="text-xs text-orange-200/70 leading-relaxed font-sans">
              संस्थेला सहकार्य करण्यासाठी किंवा प्रवेशासंबंधी तातडीने संवाद साधण्यासाठी खालील संपर्क माध्यमांचा वापर करा.
            </p>

            <div className="space-y-4 pt-1 text-xs">
              
              {/* WhatsApp direct link */}
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-between group cursor-pointer" onClick={handleWhatsAppRedirect}>
                <div className="flex gap-3.5 items-center">
                  <div className="p-2.5 rounded-full bg-emerald-500 text-[#112240]">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">WhatsApp direct Link</h4>
                    <p className="text-[11px] text-emerald-400 font-medium font-sans">Click to chat instantly over WhatsApp</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Email direct */}
              <div className="flex items-start gap-4 p-2 font-medium">
                <div className="p-2.5 rounded-xl bg-orange-900 text-orange-300 border border-orange-850">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-100 uppercase tracking-widest text-[9px]">Registered Support</h4>
                  <p className="text-slate-200 mt-0.5 font-sans">contact@warkarirojnishi.in</p>
                </div>
              </div>

              {/* Telephone direct */}
              <div className="flex items-start gap-4 p-2 font-medium">
                <div className="p-2.5 rounded-xl bg-orange-900 text-orange-300 border border-orange-850">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-100 uppercase tracking-widest text-[9px]">Admission Helpline</h4>
                  <p className="text-slate-200 mt-0.5 font-sans">+९१ ९८७६५ ४३२१० (Mon-Sat, 9AM-7PM IST)</p>
                </div>
              </div>

              {/* Support Commitment */}
              <div className="p-4 bg-orange-900/40 rounded-2xl border border-orange-800 text-orange-200/70 leading-relaxed font-sans text-[11px] flex gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping mt-1 shrink-0" />
                <div>
                  <strong>Alandi office speed pledge:</strong> We respond to all holy volunteers, donors, and parents within 24 standard working hours.
                </div>
              </div>

            </div>
          </div>

          {/* Location physical */}
          <div className="bg-white rounded-3xl p-6 border border-amber-100 shadow-md space-y-4">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <MapPin className="w-5 h-5 text-orange-600" />
              <span>Alandi Ashram Location (पत्ता)</span>
            </h4>
            <div className="space-y-1 text-xs">
              <p className="font-bold text-slate-700">वारकरी शिक्षण संस्था मुख्य भवन</p>
              <p className="text-slate-500 leading-relaxed font-sans">
                इंद्रायणी नदीकाठ, महाद्वार घाटाजवळ, आळंदी देवाची, तालुका खेड, जिल्हा पुणे, महाराष्ट्र - ४१२१०५
              </p>
            </div>
            
            <div className="h-32 bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
              <div className="absolute inset-0 bg-slate-900 opacity-15 bg-cover bg-[url('https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=500')]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-3 text-center z-10">
                <span className="bg-orange-700 text-white font-bold text-[8px] pl-2 px-1 rounded shadow-md uppercase tracking-widest font-sans">
                  ALANDI DEVACHI GURUKUL HQ PUNE
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
