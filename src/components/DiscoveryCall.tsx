import React, { useState } from 'react';
import { Booking } from '../types';
import { 
  Calendar as CalendarIcon, Clock, ShieldAlert, CheckCircle2, 
  ChevronDown, ArrowRight, HelpCircle, AlertCircle, Info, Search, Check, Download 
} from 'lucide-react';

interface DiscoveryCallProps {
  onAddBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => void;
  preselectedTopic?: string | null;
}

export default function DiscoveryCall({ onAddBooking, preselectedTopic }: DiscoveryCallProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: preselectedTopic || 'Technical Product Management Bootcamp',
    notes: ''
  });
  
  const [successBooking, setSuccessBooking] = useState<boolean>(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  
  // Search and selector state for FAQs
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('All');

  // Quick helper to generate next 7 days in YYYY-MM-DD
  const getNext7Days = () => {
    const list = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 1; i <= 8; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      // Skip Sundays since our staff is off
      if (d.getDay() === 0) continue;

      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      
      list.push({
        value: `${yyyy}-${mm}-${dd}`,
        label: `${weekdays[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`
      });
    }
    return list;
  };

  const datesList = getNext7Days();

  // 30-min Indian IST Time slots
  const timeSlots = [
    '10:00 AM - 10:30 AM IST',
    '11:00 AM - 11:30 AM IST',
    '12:00 PM - 12:30 PM IST',
    '02:30 PM - 03:00 PM IST',
    '03:30 PM - 04:00 PM IST',
    '04:30 PM - 05:00 PM IST',
    '06:00 PM - 06:30 PM IST'
  ];

  // FAQ structured dataset with categories
  const faqs = [
    {
      category: 'General',
      q: 'Is this discovery call really free? Will you hard-sell me?',
      a: 'Yes, it is 100% free with absolutely zero obligation. The primary purpose is diagnostic: we will review your current salary benchmark, tech competencies, and gap assessment. We only recommend our courses if they are a perfect fit for your career trajectory.'
    },
    {
      category: 'Logistics',
      q: 'Who will conduct this call? Will it be Dyaneshwar?',
      a: 'We pride ourselves on founder excellence. Over 75% of discovery calls are directly conducted by Dyaneshwar himself or senior head coaches who have built technical setups in top Indian tech giants.'
    },
    {
      category: 'Preparation',
      q: 'What should I prepare before the call?',
      a: 'Please have a PDF copy of your current resume or a link to your LinkedIn profile handy. Think about your target salary hike, target roles (e.g. Lead, TPM, Agile Coach), and primary operational challenges.'
    },
    {
      category: 'Logistics',
      q: 'Can I reschedule the appointment after booking?',
      a: 'Absolutely. You will receive an instant email and mock WhatsApp/SMS confirmation containing scheduling nodes.'
    },
    {
      category: 'General',
      q: 'What programs do you offer?',
      a: 'We offer specialized courses in Soft Skills, Behavioral Training, Public Speaking, Selling Skills, and Startup Coaching, all optimized for high-impact executive career transitions.'
    },
    {
      category: 'Preparation',
      q: 'Is there any diagnostic survey before we speak?',
      a: 'No formal test is required, but entering your Specific Goals or Challenges in the booking form allows us to custom-prepare files and benchmarks beforehand.'
    }
  ];

  // Search and category matching logic
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedFaqCategory === 'All' || faq.category === selectedFaqCategory;
    const matchesSearch = faq.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(faqSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Real-time Field Validation Helpers
  const validateName = (name: string) => {
    if (!name) return { valid: false, message: 'Name is required' };
    if (name.trim().length < 3) return { valid: false, message: 'Name must be at least 3 characters' };
    return { valid: true, message: 'Looks perfect!' };
  };

  const validateEmail = (email: string) => {
    if (!email) return { valid: false, message: 'Email identifier is required' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return { valid: false, message: 'Ensure you enter a valid email format' };
    return { valid: true, message: 'Email format is verified' };
  };

  const validatePhone = (phone: string) => {
    if (!phone) return { valid: false, message: 'Mobile number is required' };
    const cleaned = phone.replace(/[^0-9]/g, '');
    if (cleaned.length < 10) return { valid: false, message: 'Phone must contain at least 10 digits' };
    return { valid: true, message: 'Looks like a valid phone number' };
  };

  // Live evaluated states
  const nameVal = validateName(formData.name);
  const emailVal = validateEmail(formData.email);
  const phoneVal = validatePhone(formData.phone);
  const isFormValid = nameVal.valid && emailVal.valid && phoneVal.valid;

  // Real-time classes helper
  const getInputClasses = (value: string, isValid: boolean) => {
    const base = "w-full px-4 py-3 border rounded-xl text-xs text-slate-800 transition-all duration-200 outline-hidden ";
    if (!value) {
      return base + "bg-slate-50 border-slate-200 focus:bg-white focus:ring-1 focus:ring-brand-primary focus:border-brand-primary";
    }
    if (isValid) {
      return base + "bg-emerald-50/15 border-emerald-300 focus:bg-white focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500";
    } else {
      return base + "bg-rose-50/15 border-rose-300 focus:bg-white focus:ring-1 focus:ring-rose-500 focus:border-rose-500";
    }
  };

  // client-side ICS generator
  const downloadICS = () => {
    const name = formData.name;
    const topic = formData.topic;
    const dateStr = selectedDate;
    const slotStr = selectedTimeSlot;

    const yyyymmdd = dateStr.replace(/-/g, '');
    let startHour = 10;
    let startMin = 0;
    let endHour = 10;
    let endMin = 30;

    const timeMatch = slotStr.match(/(\d+):(\d+)\s*(AM|PM)\s*-\s*(\d+):(\d+)\s*(AM|PM)/i);
    if (timeMatch) {
      let sh = parseInt(timeMatch[1], 10);
      const sm = parseInt(timeMatch[2], 10);
      const s_ampm = timeMatch[3].toUpperCase();
      let eh = parseInt(timeMatch[4], 10);
      const em = parseInt(timeMatch[5], 10);
      const e_ampm = timeMatch[6].toUpperCase();

      if (s_ampm === 'PM' && sh !== 12) sh += 12;
      if (s_ampm === 'AM' && sh === 12) sh = 0;
      if (e_ampm === 'PM' && eh !== 12) eh += 12;
      if (e_ampm === 'AM' && eh === 12) eh = 0;

      startHour = sh;
      startMin = sm;
      endHour = eh;
      endMin = em;
    }

    const pad = (num: number) => String(num).padStart(2, '0');

    let startD = new Date(`${dateStr}T${pad(startHour)}:${pad(startMin)}:00+05:30`);
    let endD = new Date(`${dateStr}T${pad(endHour)}:${pad(endMin)}:00+05:30`);
    
    if (isNaN(startD.getTime())) {
      startD = new Date();
      endD = new Date(startD.getTime() + 30 * 60 * 1000);
    }

    const formatUTC = (d: Date) => {
      return d.getUTCFullYear() +
        pad(d.getUTCMonth() + 1) +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) +
        pad(d.getUTCMinutes()) +
        pad(d.getUTCSeconds()) + 'Z';
    };

    const startFormatted = formatUTC(startD);
    const endFormatted = formatUTC(endD);

    const icsMessage = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//WeConnect//Discovery Call//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `DTSTART:${startFormatted}`,
      `DTEND:${endFormatted}`,
      `SUMMARY:WeConnect 1-on-1: ${topic}`,
      `DESCRIPTION:WeConnect Discovery Call with ${name}\\nTopic: ${topic}\\nTime slot: ${slotStr}\\n\\nZoom/Teams node link sent in email confirmation.`,
      'LOCATION:Microsoft Teams (Online)',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'BEGIN:VALARM',
      'TRIGGER:-PT15M',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsMessage], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'weconnect-discovery-call.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot) {
      alert('Kindly choose a valid Date and Time Slot on the calendar first!');
      return;
    }

    if (!isFormValid) {
      alert('Please resolve any validation errors on your fields first!');
      return;
    }

    onAddBooking({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      topic: formData.topic,
      date: selectedDate,
      timeSlot: selectedTimeSlot
    });

    setSuccessBooking(true);
  };

  const resetForm = () => {
    setSelectedDate('');
    setSelectedTimeSlot('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'Technical Product Management Bootcamp',
      notes: ''
    });
    setSuccessBooking(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Accelerate Your Trajectory</span>
          <h1 className="text-3xl sm:text-4.5xl font-extrabold font-display leading-tight text-slate-900 tracking-tight">
            Schedule a Free 1-on-1 Discovery Call
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed font-sans">
            Secure a 30-minute diagnostic audit with an executive tech director. Absolutely free, default IST times.
          </p>
        </div>

        {/* Form Container Grid */}
        {successBooking ? (
          /* Confirmation Success View */
          <div className="bg-white border border-slate-100 max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-scale-up-fade">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 font-display">Appointment Confirmed!</h2>
              <p className="text-sm text-slate-500">
                Hi <strong className="text-slate-700">{formData.name}</strong>, your diagnostic call has been logged successfully inside the WeConnect calendar database. 
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl text-left text-xs space-y-3.5 border border-slate-100 animate-fade-in">
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-400">Selected Course Align</span>
                <span className="font-semibold text-slate-800">{formData.topic}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-400">Date Logged</span>
                <span className="font-semibold text-slate-800">{selectedDate}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-400">Assigned Time Slot</span>
                <span className="font-semibold text-brand-primary">{selectedTimeSlot}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-slate-400">Registered Email</span>
                <span className="font-semibold text-slate-800">{formData.email}</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 leading-relaxed">
              👉 <span className="font-bold text-slate-600">Reminder Action:</span> Calendar invite sent to your address. Connect promptly on Microsoft Teams or Zoom using your dashboard node in <strong>{selectedDate}</strong>.
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={downloadICS}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download .ics File</span>
              </button>
              <button
                onClick={resetForm}
                className="px-5 py-2.5 border rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                Book Another Conversation
              </button>
            </div>
          </div>
        ) : (
          /* Calendar Booking Split View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Box: Value bullets */}
            <div className="lg:col-span-5 bg-brand-primary text-white p-8 sm:p-10 rounded-3xl space-y-8 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-bold text-brand-secondary tracking-widest uppercase">Diagnostic Scope</span>
                <h3 className="text-2xl font-extrabold font-display leading-tight">What to expect from this call</h3>
                <p className="text-xs text-slate-300">Your career trajectory is unique. Let’s evaluate the bottlenecks systematically.</p>
              </div>

              {/* Bullet checklist */}
              <div className="space-y-6 relative z-10 text-xs sm:text-sm">
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-secondary font-bold font-mono">
                    1
                  </div>
                  <div className="space-y-1 mt-0.5">
                    <h4 className="font-bold text-white">Salary Benchmark Audit</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Map your current compensation package against latest top tier hiring budgets in Bangalore & Hyderabad.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-secondary font-bold font-mono">
                    2
                  </div>
                  <div className="space-y-1 mt-0.5">
                    <h4 className="font-bold text-white">Syllabus Mapping</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Confirm exactly which training modules maps to your next strategic target role (Tech Lead, TPM, Agile Coach).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-secondary font-bold font-mono">
                    3
                  </div>
                  <div className="space-y-1 mt-0.5">
                    <h4 className="font-bold text-white">Hands-on PRD Assessment</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Learn how our capstone projects create ironclad portfolio proof ready to impress senior screening committees.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-secondary font-bold font-mono">
                    4
                  </div>
                  <div className="space-y-1 mt-0.5">
                    <h4 className="font-bold text-white">No Obligations, Free</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">If WeConnect is not a logical match, we will happy guide you to alternative free platforms.</p>
                  </div>
                </div>

              </div>

              {/* Safeguard banner */}
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex gap-3 relative z-10 items-center">
                <ShieldAlert className="w-5 h-5 text-brand-secondary shrink-0" />
                <p className="text-[11px] text-slate-400">
                  Privacy Pledge: We strictly respect corporate confidentiality. No credentials or current company data is shared publicly.
                </p>
              </div>

            </div>

            {/* Right Box: Calendar selection and Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-8">
              
              {/* Step 1: Select Date */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CalendarIcon className="w-4.5 h-4.5 text-brand-secondary" />
                  <span>1. Choose an Available Date (IST Default)</span>
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {datesList.map((dt) => {
                    const isSelected = selectedDate === dt.value;
                    return (
                      <button
                        type="button"
                        key={dt.value}
                        onClick={() => {
                          setSelectedDate(dt.value);
                          setSelectedTimeSlot(''); // reset slot
                        }}
                        className={`py-3.5 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          isSelected
                            ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50'
                        }`}
                      >
                        {dt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select time (conditional on date) */}
              <div className={`space-y-4 transition-all ${selectedDate ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4.5 h-4.5 text-brand-secondary" />
                  <span>2. Select a 30-Min Time Slot</span>
                </label>
                
                {selectedDate ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-3 px-2 rounded-xl border text-xs font-semibold text-center transition-all ${
                            isSelected
                              ? 'bg-brand-secondary border-brand-secondary text-slate-900 shadow-md font-bold'
                              : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                          }`}
                        >
                          {slot.replace(' IST', '')}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">Please select a date above to display available time blocks.</p>
                )}
              </div>

              {/* Step 3: Contact Details Form */}
              <div className={`space-y-4 transition-all ${selectedTimeSlot ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4.5 h-4.5 text-brand-secondary" />
                  <span>3. Provide Your Contact Credentials</span>
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field with real-time feedback */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500">Full Name</span>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Aniket Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={!selectedTimeSlot}
                        className={getInputClasses(formData.name, nameVal.valid)}
                      />
                      {formData.name !== '' && (
                        <span className="absolute right-3.5 top-1/2 -translate-y-[52%] flex items-center">
                          {nameVal.valid ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-rose-500" />
                          )}
                        </span>
                      )}
                    </div>
                    {formData.name !== '' && (
                      <p className={`text-[10px] font-medium flex items-center gap-1 mt-0.5 ${nameVal.valid ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {nameVal.message}
                      </p>
                    )}
                  </div>

                  {/* Email field with real-time feedback */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500">Corporate Email ID</span>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="aniket@wipro.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={!selectedTimeSlot}
                        className={getInputClasses(formData.email, emailVal.valid)}
                      />
                      {formData.email !== '' && (
                        <span className="absolute right-3.5 top-1/2 -translate-y-[52%] flex items-center">
                          {emailVal.valid ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-rose-500" />
                          )}
                        </span>
                      )}
                    </div>
                    {formData.email !== '' && (
                      <p className={`text-[10px] font-medium flex items-center gap-1 mt-0.5 ${emailVal.valid ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {emailVal.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone field with real-time feedback */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500">WhatsApp Mobile Number</span>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="+91 91090 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        disabled={!selectedTimeSlot}
                        className={getInputClasses(formData.phone, phoneVal.valid)}
                      />
                      {formData.phone !== '' && (
                        <span className="absolute right-3.5 top-1/2 -translate-y-[52%] flex items-center">
                          {phoneVal.valid ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-rose-500" />
                          )}
                        </span>
                      )}
                    </div>
                    {formData.phone !== '' && (
                      <p className={`text-[10px] font-medium flex items-center gap-1 mt-0.5 ${phoneVal.valid ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {phoneVal.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500">Area of Corporate Interest</span>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      disabled={!selectedTimeSlot}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary focus:border-brand-primary cursor-pointer"
                    >
                      <option value="Technical Product Management Bootcamp">Technical PM Bootcamp</option>
                      <option value="Executive Presence & Soft Skills Mastery">Executive Presence & Soft Skills</option>
                      <option value="High-Impact Agile Leadership Certification">Agile Leadership Certification</option>
                      <option value="Advanced System Architecture for Tech Tech Leads">Advanced Arch for Tech Leads</option>
                      <option value="Corporate Consultation Framework Alignment">General Corporate Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-500">Specific Goals / Challenges (Optional)</span>
                  <textarea
                    rows={2}
                    placeholder="Stuck in L2 support, target leading team of senior backend developers and getting 45% hike."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    disabled={!selectedTimeSlot}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>
              </div>

              {/* Submit trigger button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTimeSlot || !isFormValid}
                  className="w-full py-4 bg-slate-900 hover:bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-95 disabled:opacity-32 disabled:pointer-events-none flex items-center justify-center gap-1.5"
                >
                  <span>Confirm Free Discovery Booking</span>
                  <ArrowRight className="w-4 h-4 text-brand-secondary" />
                </button>
              </div>

            </form>

          </div>
        )}

        {/* FAQ Section with real-time category filtering and dynamic search query key matching */}
        <div className="max-w-4xl mx-auto space-y-6 pt-8 border-t border-slate-200">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-slate-800 font-display">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-500">General queries about Indian executive transition programs.</p>
          </div>

          {/* Search bar and category selector dropdown */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100 max-w-2xl mx-auto">
            <div className="relative w-full sm:w-2/3">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search frequently asked questions..."
                value={faqSearchQuery}
                onChange={(e) => {
                  setFaqSearchQuery(e.target.value);
                  setActiveFaqIndex(null); // Reset open accordion index to avoid confusion
                }}
                className="w-full pl-10 pr-4 py-2 text-xs text-slate-800 bg-white border border-slate-200 rounded-xl outline-hidden focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
              />
            </div>
            
            <div className="w-full sm:w-1/3">
              <select
                value={selectedFaqCategory}
                onChange={(e) => {
                  setSelectedFaqCategory(e.target.value);
                  setActiveFaqIndex(null); // Reset open accordion index to avoid confusion
                }}
                className="w-full px-3 py-2 text-xs text-slate-600 bg-white border border-slate-200 rounded-xl outline-hidden focus:ring-1 focus:ring-slate-900 focus:border-slate-900 cursor-pointer"
              >
                <option value="All">All Categories</option>
                <option value="General">General</option>
                <option value="Logistics">Logistics</option>
                <option value="Preparation">Preparation</option>
              </select>
            </div>
          </div>

          {/* Rendered Accordion of FAQs */}
          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs animate-fade-in">
                    <button
                      onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                      className="w-full text-left p-5 flex items-center justify-between font-bold text-xs sm:text-sm text-slate-705 hover:bg-slate-50/50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-brand-secondary shrink-0" />
                        <span className="text-slate-800 leading-snug">{faq.q}</span>
                        <span className="hidden sm:inline-block text-[9px] font-bold text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded-full font-sans">
                          {faq.category}
                        </span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-5 bg-slate-50/40 border-t border-slate-50 text-xs text-slate-500 leading-relaxed font-sans">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })
            ) : (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-100 space-y-2">
                <AlertCircle className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="text-xs font-semibold text-slate-550">No FAQs matched search criteria.</p>
                <p className="text-[10px] text-slate-400">Try searching for keywords like "free", "conduct", "prepare", "reschedule", or change the category.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
