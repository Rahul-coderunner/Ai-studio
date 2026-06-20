import React, { useState } from 'react';
import { Booking } from '../types';
import { 
  Calendar as CalendarIcon, Clock, ShieldAlert, CheckCircle2, 
  ChevronDown, ArrowRight, HelpCircle, AlertCircle, Info, Search, Check, Download, Landmark, Eye 
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
    topic: preselectedTopic || 'कीर्तन शास्त्र अभ्यासक्रम (Residential 4-Year)',
    notes: '',
    age: '16',
    musicalExp: 'Basic understand of rhythm / None',
    nativeCity: ''
  });
  
  const [successBooking, setSuccessBooking] = useState<boolean>(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('All');

  // Search previous applications
  const [searchInquiryEmail, setSearchInquiryEmail] = useState('');
  const [foundInquiry, setFoundInquiry] = useState<any | null>(null);

  const getNext7Days = () => {
    const list = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 1; i <= 9; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      // Skip Sundays
      if (d.getDay() === 0) continue;

      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      
      list.push({
        value: `${yyyy}-${mm}-${dd}`,
        label: `${d.getDate()} ${months[d.getMonth()]} (${weekdays[d.getDay()]})`
      });
    }
    return list;
  };

  const datesList = getNext7Days();

  // Selection slot hours for Alandi office desk evaluation
  const timeSlots = [
    '09:00 AM - 10:00 AM IST',
    '10:30 AM - 11:30 AM IST',
    '12:00 PM - 01:00 PM IST',
    '03:00 PM - 04:00 PM IST',
    '04:30 PM - 05:30 PM IST',
    '06:00 PM - 07:00 PM IST'
  ];

  // Ashram Admissions FAQ list
  const faqs = [
    {
      category: 'Admission',
      q: 'वारकरी शिक्षण संस्थेमध्ये प्रवेश घेण्यासाठी फी किती आहे?',
      a: 'संस्थेतील सर्व निवासी शिक्षण, भोजन, आणि निवारा पूर्णपणे मोफत (FREE) असतो. दानशूर आणि विठ्ठल भक्तांच्या उदार देणगीतून हा खर्च भागवला जातो.'
    },
    {
      category: 'Rules',
      q: 'What is the age criteria for residential students?',
      a: 'We accept young male students between the ages of 14 and 22. This enables long term dedicated molding in memory training, Pakhavaj rhythm loops, and devotional self discipline.'
    },
    {
      category: 'Ashram Life',
      q: 'भोजनाची व राहण्याची सोय कशी असते?',
      a: 'आश्रम परिसरात पूर्णपणे सात्त्विक आणि शाकाहारी भोजन दिले जाते. दररोज पहाटे ४ वाजता उठून इंद्रायणी नदीवर किंवा आश्रमामध्ये स्नान करावे लागते आणि काकड आरतीला उपस्थित राहणे अनिवार्य आहे.'
    },
    {
      category: 'Rules',
      q: 'मोबाईल फोन वापरण्यास परवानगी आहे का?',
      a: 'नाही. निवासी विद्यार्थ्यांसाठी स्मार्टफोन वापरण्यास पूर्णपणे बंदी आहे. वर्षातून ठराविक सुट्ट्यांच्या कालावधीतच पालकांशी बोलण्याची मुभा दिली जाते जेणेकरून त्यांच्या चित्तामध्ये गोंधळ निर्माण होणार नाही.'
    },
    {
      category: 'Admission',
      q: 'प्रवेशासाठी संगीत किंवा गायनाची पूर्वीची माहिती असावी का?',
      a: 'तशी अट नाही. भक्तीची ओढ, विनम्रता, आणि प्रामाणिकपणे शास्त्र शिकण्याची तयारी इतकेच आवश्यक आहे. सर्व प्राथमिक शिक्षण इथे शून्यापासून दिले जाते.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedFaqCategory === 'All' || faq.category === selectedFaqCategory;
    const matchesSearch = faq.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(faqSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Real-time Validation
  const validateName = (name: string) => {
    if (!name) return { valid: false, message: 'Student Name is required' };
    if (name.trim().length < 3) return { valid: false, message: 'Enter full legal name' };
    return { valid: true, message: 'Verified' };
  };

  const validateEmail = (email: string) => {
    if (!email) return { valid: false, message: 'Email identifier is required' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return { valid: false, message: 'Ensure correct format' };
    return { valid: true, message: 'Valid format' };
  };

  const validatePhone = (phone: string) => {
    if (!phone) return { valid: false, message: 'Guardian Phone number is required' };
    const cleaned = phone.replace(/[^0-9]/g, '');
    if (cleaned.length < 10) return { valid: false, message: 'Must contain at least 10 digits' };
    return { valid: true, message: 'Valid phone' };
  };

  const nameVal = validateName(formData.name);
  const emailVal = validateEmail(formData.email);
  const phoneVal = validatePhone(formData.phone);
  const isFormValid = nameVal.valid && emailVal.valid && phoneVal.valid && formData.nativeCity.trim() !== '';

  const getInputClasses = (value: string, isValid: boolean) => {
    const base = "w-full px-4 py-3 border rounded-xl text-xs text-slate-800 transition-all duration-200 outline-hidden ";
    if (!value) {
      return base + "bg-slate-50 border-slate-200 focus:bg-white focus:ring-1 focus:ring-orange-600 focus:border-orange-600";
    }
    if (isValid) {
      return base + "bg-emerald-50/10 border-emerald-300 focus:bg-white focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500";
    } else {
      return base + "bg-rose-50/10 border-rose-300 focus:bg-white focus:ring-1 focus:ring-rose-500 focus:border-rose-500";
    }
  };

  const downloadICS = () => {
    const name = formData.name;
    const topic = formData.topic;
    const dateStr = selectedDate;
    const slotStr = selectedTimeSlot;

    const pad = (num: number) => String(num).padStart(2, '0');
    let startD = new Date(`${dateStr}T10:00:00+05:30`);
    let endD = new Date(`${dateStr}T11:00:00+05:30`);

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
      'PRODID:-//Varkari Sansthan//Admission Desk//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `DTSTART:${startFormatted}`,
      `DTEND:${endFormatted}`,
      `SUMMARY:Varkari Gurukul Meeting: ${name}`,
      `DESCRIPTION:Residential Admission interview & voice assessment for ${name}. Track: ${topic}. Please reach Alandi Office by ${slotStr} with original Marksheets, Aadhaar card, and Parents reference.`,
      'LOCATION:Indrayani river banks, Alandi Office, Pune',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsMessage], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'warkari-gurukul-admission-appointment.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot) {
      alert('Kindly choose an interview date and time slot first on the calendar!');
      return;
    }

    if (!isFormValid) {
      alert('Please fill out all mandatory fields correctly first!');
      return;
    }

    onAddBooking({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      topic: `${formData.topic} | Age: ${formData.age} | Born: ${formData.nativeCity}`,
      date: selectedDate,
      timeSlot: selectedTimeSlot
    });

    setSuccessBooking(true);
  };

  const handleSearchCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInquiryEmail.trim()) return;

    // Check with standard fake validation storage or retrieve from localStorage
    const savedInquiries = JSON.parse(localStorage.getItem('alandimauli_bookings') || '[]');
    const match = savedInquiries.find((b: any) => b.email.toLowerCase() === searchInquiryEmail.toLowerCase().trim());
    
    if (match) {
      setFoundInquiry(match);
    } else {
      setFoundInquiry({ notFound: true, email: searchInquiryEmail });
    }
  };

  const resetForm = () => {
    setSelectedDate('');
    setSelectedTimeSlot('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'कीर्तन शास्त्र अभ्यासक्रम (Residential 4-Year)',
      notes: '',
      age: '16',
      musicalExp: 'Basic understand of rhythm / None',
      nativeCity: ''
    });
    setSuccessBooking(false);
  };

  return (
    <div className="bg-[#fdfbf7] min-h-screen py-16 px-4 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Banner Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-700">विद्यार्थी प्रवेश नोंदणी</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight text-slate-950 tracking-tight">
            Apply for Alandi Residential Gurukul
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
            Secure a sacred seat in our generations-old residential program. Free of cost education, boarding, lodging, with intense training in Tukaram Gatha, Dnyaneshwari, Kirtanik arts, and rhythm structures.
          </p>
        </div>

        {/* Form Container */}
        {successBooking ? (
          /* Confirmation Success View */
          <div className="bg-white border border-amber-200 max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-scale-up-fade">
            <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-2 border border-orange-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-950 font-display">राम कृष्ण हरी! नोंदणी झाली.</h2>
              <p className="text-sm text-slate-500">
                Hi <strong className="text-slate-800">{formData.name}</strong>, your residential inquiry has been successfully submitted to the Alandi Sanstha Office.
              </p>
            </div>

            <div className="bg-amber-50/30 p-6 rounded-2xl text-left text-xs space-y-3.5 border border-orange-100/50 animate-fade-in">
              <div className="flex justify-between border-b border-orange-100 pb-2">
                <span className="text-slate-400">Chosen Curricula</span>
                <span className="font-semibold text-slate-800">{formData.topic}</span>
              </div>
              <div className="flex justify-between border-b border-orange-100 pb-2">
                <span className="text-slate-400">Interview Date</span>
                <span className="font-semibold text-slate-800">{selectedDate}</span>
              </div>
              <div className="flex justify-between border-b border-orange-100 pb-2">
                <span className="text-slate-400">Appointed Time Block</span>
                <span className="font-semibold text-orange-700">{selectedTimeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-orange-100 pb-2">
                <span className="text-slate-400">Guardian Contact</span>
                <span className="font-semibold text-slate-800">{formData.phone}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-slate-400">Native Town</span>
                <span className="font-semibold text-slate-800">{formData.nativeCity}</span>
              </div>
            </div>

            <div className="text-xs text-orange-850/90 leading-relaxed font-sans bg-orange-600/5 p-4 rounded-xl border border-orange-500/10">
              🚩 <strong>पुढील पायरी (Instructions):</strong> Please bring the student’s printed Aadhaar Card, 8th or 10th standard mark-sheets, and a character endorsement reference letter from your village Sarpanch or local Varkari Bhajan group leader to the Alandi office at the chosen hour.
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={downloadICS}
                className="px-5 py-2.5 bg-orange-650 hover:bg-orange-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Export Appointment (.ics)</span>
              </button>
              <button
                onClick={resetForm}
                className="px-5 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-650 hover:bg-slate-50"
              >
                Submit New Admission Form
              </button>
            </div>
          </div>
        ) : (
          /* Calendar Admissions Booking Split View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Box: Value bullets */}
            <div className="lg:col-span-5 bg-gradient-to-br from-orange-850 to-orange-750 text-white p-8 sm:p-10 rounded-3xl space-y-6 relative overflow-hidden shadow-xl border border-orange-950">
              <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
              
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-bold text-amber-300 tracking-widest uppercase">प्रवेश नियम व पात्रता</span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display leading-tight text-white">Ashram Admission Rules</h3>
                <p className="text-xs text-orange-200">Before scheduling your Alandi office seat exam, ensure you understand our core disciplinary constraints:</p>
              </div>

              {/* Bullet checklist */}
              <div className="space-y-5 relative z-10 text-xs sm:text-sm">
                
                <div className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300 font-bold font-mono text-xs">
                    १
                  </div>
                  <div className="space-y-1 mt-0.5">
                    <h4 className="font-bold text-white">वय मर्यादा आणि शिक्षण (Age Range)</h4>
                    <p className="text-orange-200 text-xs leading-relaxed">Students must be between 14 and 22 years of age and completed basic schooling of standard 7th onwards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300 font-bold font-mono text-xs">
                    २
                  </div>
                  <div className="space-y-1 mt-0.5">
                    <h4 className="font-bold text-white">सात्त्विक दिनचर्या (Discipline)</h4>
                    <p className="text-orange-200 text-xs leading-relaxed">Mandatory early morning cold river baths, strict Devnagri manuscript memorizing, and continuous seva contribution inside our kitchen room.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300 font-bold font-mono text-xs">
                    ३
                  </div>
                  <div className="space-y-1 mt-0.5">
                    <h4 className="font-bold text-white">व्यसनमुक्ती आणि नो-फोन नियम</h4>
                    <p className="text-orange-200 text-xs leading-relaxed">Smartphone possession is strictly forbidden inside the residential area to cultivate pure focused spiritual contemplation (एकाग्रता).</p>
                  </div>
                </div>

              </div>

              {/* Safeguard banner */}
              <div className="p-4 bg-orange-950 rounded-2xl border border-orange-900 flex gap-3 relative z-10 items-start">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-orange-255 leading-normal">
                  <strong>महत्त्वाची नोंद (Purity Note):</strong> Any bad habits, back-biting, or showing continuous disrespect to our senior Acharyas will result in immediate discharge from the Gurukul.
                </p>
              </div>

            </div>

            {/* Right Box: Calendar selection and Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-md space-y-8">
              
              {/* Step 1: Select Date */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CalendarIcon className="w-4.5 h-4.5 text-orange-700" />
                  <span>१. मुलाखतीची तारीख निवडा (Choose Interview Date)</span>
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
                          setSelectedTimeSlot('');
                        }}
                        className={`py-3 px-2 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-orange-650 border-orange-650 text-white shadow-md'
                            : 'border-slate-200 hover:border-orange-500/20 text-slate-600 bg-[#fffdfa]'
                        }`}
                      >
                        {dt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select time */}
              <div className={`space-y-4 transition-all ${selectedDate ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4.5 h-4.5 text-orange-700" />
                  <span>२. उपलब्ध वेळ निवडा (Choose Hour slot)</span>
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
                          className={`py-3 px-1 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-orange-100 border-orange-500 text-orange-900 shadow-xs'
                              : 'border-slate-200 hover:border-orange-500/20 text-slate-600 bg-white'
                          }`}
                        >
                          {slot.replace(' IST', '')}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic font-mono pl-1">Please select an interview date above to load times.</p>
                )}
              </div>

              {/* Step 3: Contact Details Form */}
              <div className={`space-y-4 transition-all ${selectedTimeSlot ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4.5 h-4.5 text-orange-700" />
                  <span>३. विद्यार्थ्याची अचूक माहिती (Student & Guardian Credentials)</span>
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500">Student Name (पूर्ण नाव) *</span>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="उदा. राहुल ज्ञानेश्वर कुळकर्णी"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={!selectedTimeSlot}
                        className={getInputClasses(formData.name, nameVal.valid)}
                      />
                    </div>
                  </div>

                  {/* Native City */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500">Native Town / City (गाव/शहर) *</span>
                    <input
                      type="text"
                      required
                      placeholder="उदा. आळंदी, पंढरपूर, कोल्हापूर"
                      value={formData.nativeCity}
                      onChange={(e) => setFormData({ ...formData, nativeCity: e.target.value })}
                      disabled={!selectedTimeSlot}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Guardian Mobile */}
                  <div className="space-y-1 sm:col-span-2">
                    <span className="text-[10px] font-bold uppercase text-slate-500">WhatsApp Mobile (पालकांचा संपर्क) *</span>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98000 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={!selectedTimeSlot}
                      className={getInputClasses(formData.phone, phoneVal.valid)}
                    />
                  </div>

                  {/* Age */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500">Age (विद्यार्थ्याचे वय) *</span>
                    <select
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      disabled={!selectedTimeSlot}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 cursor-pointer"
                    >
                      <option value="14">14 Years</option>
                      <option value="15">15 Years</option>
                      <option value="16">16 Years</option>
                      <option value="17">17 Years</option>
                      <option value="18">18 Years</option>
                      <option value="19">19 Years</option>
                      <option value="20">20 Years</option>
                      <option value="21">21 Years</option>
                      <option value="22">22 Years</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Primary Email */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500">Guardian Email Address *</span>
                    <input
                      type="email"
                      required
                      placeholder="guardian-name@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={!selectedTimeSlot}
                      className={getInputClasses(formData.email, emailVal.valid)}
                    />
                  </div>

                  {/* Course Track Selection */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500">Course Track Choice *</span>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      disabled={!selectedTimeSlot}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 cursor-pointer"
                    >
                      <option value="कीर्तन शास्त्र अभ्यासक्रम (4-Year Intensive)">कीर्तन शास्त्र (Kirtan Science)</option>
                      <option value="मृदंग / पखवाज वादन (3-Year Residential)">मृदंग वादन (Pakhavaj Academy)</option>
                      <option value="गायन व संगीत प्रावीण्य (2-Year Vocal training)">अभंग गायन (Spiritual Vocal)</option>
                      <option value="प्रस्थानत्रयी संत साहित्य (2-Year Literature Degree)">ज्ञानेश्वरी/भागवत शास्त्र (Sanskrit-Veda)</option>
                    </select>
                  </div>
                </div>

                {/* Specific reference or character remarks */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-500">Guru / Local Village Reference Endorsement (भजन मंडळ किंवा गावातील संदर्भ)</span>
                  <textarea
                    rows={2}
                    placeholder="उदा. आमच्या गावातील विठ्ठल मंदिर भजनी मंडळाचे प्रमुख ह.भ.प. हरी पाटील यांचा संदर्भ आहे."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    disabled={!selectedTimeSlot}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTimeSlot || !isFormValid}
                  className="w-full py-4 bg-orange-650 hover:bg-orange-750 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.01] active:scale-95 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>प्रवेश अर्ज नोंदवा (Record Admission Request)</span>
                  <ArrowRight className="w-4 h-4 text-orange-200" />
                </button>
              </div>

            </form>

          </div>
        )}

        {/* Existing Application LookUp tool - EXTREMELY HELPFUL PERSISTENCE DESK */}
        <div className="max-w-xl mx-auto bg-amber-500/5 p-6 rounded-3xl border border-orange-500/10 space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-4.5 h-4.5 text-orange-600 animate-pulse" />
              <span>प्रवेश अर्जाची स्थिती तपासा (Check Application Status)</span>
            </h3>
            <p className="text-[11px] text-slate-500">
              Submit your guardian email identifier to fetch status of previous records directly from our local state node.
            </p>
          </div>

          <form onSubmit={handleSearchCheck} className="flex gap-2.5">
            <input 
              type="email" 
              required
              placeholder="Enter registered guardian email id..."
              value={searchInquiryEmail}
              onChange={(e) => setSearchInquiryEmail(e.target.value)}
              className="px-3 py-2.5 text-xs bg-white border border-slate-200 rounded-xl flex-grow outline-hidden focus:ring-1 focus:ring-orange-600"
            />
            <button 
              type="submit"
              className="px-4 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
            >
              Verify Status
            </button>
          </form>

          {foundInquiry && (
            <div className="p-4 bg-white rounded-2xl border border-slate-100/90 text-xs text-slate-600 space-y-2 animate-fade-in">
              {foundInquiry.notFound ? (
                <p className="text-[11px] text-rose-500 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  No admission record found under <strong>{foundInquiry.email}</strong> yet. Try again or submit a new inquiry.
                </p>
              ) : (
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center bg-orange-600/5 px-2.5 py-1.5 rounded-lg border border-orange-500/10">
                    <span className="font-bold text-orange-950">Status: ✅ Registered</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">ID: {foundInquiry.id}</span>
                  </div>
                  <p className="text-[11px]">Student Registered: <strong className="text-slate-800">{foundInquiry.name}</strong></p>
                  <p className="text-[11px]">Course Interest Track: <strong className="text-slate-800">{foundInquiry.topic}</strong></p>
                  <p className="text-[11px]">Appointed Alandi Desk Date: <strong className="text-slate-800">{foundInquiry.date} ({foundInquiry.timeSlot})</strong></p>
                  <p className="text-[11px] text-slate-400">Our evaluation board holds this record in active status. Reach office promptly.</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-6 pt-8 border-t border-orange-200/40">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-slate-900 font-display">प्रवेश आणि शिस्त नियम शिदोरी (FAQ)</h3>
            <p className="text-xs text-slate-500">Rules about Alandi boarding and residential traditional courses.</p>
          </div>

          {/* Search bar and category selector */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-[#fffdfa] p-4 rounded-2xl border border-orange-200/50 max-w-2xl mx-auto">
            <div className="relative w-full sm:w-2/3">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500/60" />
              <input 
                type="text" 
                placeholder="Search FAQ keywords..."
                value={faqSearchQuery}
                onChange={(e) => {
                  setFaqSearchQuery(e.target.value);
                  setActiveFaqIndex(null);
                }}
                className="w-full pl-10 pr-4 py-2 text-xs text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-hidden"
              />
            </div>
            
            <div className="w-full sm:w-1/3">
              <select
                value={selectedFaqCategory}
                onChange={(e) => {
                  setSelectedFaqCategory(e.target.value);
                  setActiveFaqIndex(null);
                }}
                className="w-full px-3 py-2 text-xs text-slate-600 bg-white border border-slate-200 rounded-xl cursor-pointer"
              >
                <option value="All">All Topics</option>
                <option value="Admission">Admission & Cost</option>
                <option value="Rules">Strict Rules</option>
                <option value="Ashram Life">Gurukul Food & Seva</option>
              </select>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <div key={index} className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-xs animate-fade-in hover:border-orange-500/10">
                    <button
                      onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                      className="w-full text-left p-5 flex items-center justify-between font-bold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-orange-600 shrink-0" />
                        <span className="text-slate-800 leading-snug">{faq.q}</span>
                        <span className="hidden sm:inline-block text-[9px] font-bold text-orange-850 bg-orange-600/15 px-2.5 py-0.5 rounded-full font-sans">
                          {faq.category}
                        </span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-5 bg-amber-50/10 border-t border-amber-50 text-xs text-slate-650 leading-relaxed font-sans font-medium">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })
            ) : (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-100">
                <AlertCircle className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="text-xs font-semibold text-slate-500">No matching questions on cost, rules, or food found.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
