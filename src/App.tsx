import React, { useState, useEffect } from 'react';
import { 
  AdmissionCourse, DnyaneshwariChapter, AbhangBhajan, 
  DailyRojnishi, DevotionalThought, EventCalendarItem, Booking 
} from './types';
import { 
  SANSTHAN_HERITAGE, CORE_VALUES, DAILY_ROJNISHI, 
  ADMISSION_COURSES, DNYANESHWARI_DATA, BHAJAN_DATA, 
  DEVOTIONAL_THOUGHTS, VARKARI_CALENDAR, SISTER_PORTALS 
} from './data';

// Import Custom Devotional Views
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import NewsletterPopup from './components/NewsletterPopup';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import ContactPage from './components/ContactPage';
import DiscoveryCall from './components/DiscoveryCall';
import DnyaneshwariReader from './components/DnyaneshwariReader';
import BhajanPlayer from './components/BhajanPlayer';
import AdminPanel from './components/AdminPanel';

// Icons 
import { 
  Flame, Bell, BookOpen, Droplet, Music, Sun, 
  MapPin, Landmark, ExternalLink, Calendar as CalendarIcon, 
  Heart, Sparkles, AlertCircle, Quote, Star, CheckCircle, Smartphone,
  ArrowRight, ChevronRight
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [bookings, setBookings] = useState<Booking[]>(() => {
    // Initialise bookings with dummy admissions and look up local storage
    const saved = localStorage.getItem('alandimauli_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fall through
      }
    }
    return [
      {
        id: 'b_1',
        name: 'अमित ज्ञानेश्वर दिघे',
        email: 'amit.dighe@work.com',
        phone: '+91 98335 12546',
        topic: 'कीर्तन शास्त्र अभ्यासक्रम (4-Year Intensive) | Age: 17 | Born: आळंदी',
        date: '2026-06-03',
        timeSlot: '10:30 AM - 11:30 AM IST',
        status: 'confirmed',
        createdAt: '25/05/2026 10:45:00'
      },
      {
        id: 'b_2',
        name: 'विठ्ठल पांडुरंग देवकर',
        email: 'vitthal.deokar@gmail.com',
        phone: '+91 90224 88354',
        topic: 'मृदंग / पखवाज वादन (3-Year Residential) | Age: 16 | Born: पंढरपूर',
        date: '2026-06-04',
        timeSlot: '03:00 PM - 04:00 PM IST',
        status: 'confirmed',
        createdAt: '25/05/2026 11:15:10'
      }
    ];
  });

  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const [preselectedTopic, setPreselectedTopic] = useState<string | null>(null);
  
  // Realtime time ticker for Alandi schedule
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    localStorage.setItem('alandimauli_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // refresh every 30 seconds
    return () => clearInterval(timer);
  }, []);

  // Sync scroll on navigating
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Handle adding a new booking
  const handleAddNewBooking = (newBookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    const freshBooking: Booking = {
      ...newBookingData,
      id: `b_dynamic_${Date.now()}`,
      status: 'confirmed',
      createdAt: new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN')
    };
    setBookings(prev => [freshBooking, ...prev]);
  };

  // Update status (Confirm / Cancel) in state
  const handleUpdateBookingStatus = (id: string, status: 'confirmed' | 'cancelled') => {
    setBookings(prev => prev.map(book => {
      if (book.id === id) {
        return { ...book, status };
      }
      return book;
    }));
  };

  const handleAddContactMessage = (msgData: { name: string; email: string; phone: string; subject: string; message: string }) => {
    const freshMsg = {
      ...msgData,
      id: `msg_${Date.now()}`,
      createdAt: new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN')
    };
    setContactMessages(prev => [freshMsg, ...prev]);
  };

  const triggerBookingWithContext = (contextTopic: string | null) => {
    setPreselectedTopic(contextTopic);
    setCurrentPage('discovery_call');
  };

  // Active student schedule highlight helper (Calculated dynamically)
  const getActiveRojnishiNow = () => {
    // Convert current hour and minute to standard comparison
    const hrs = currentTime.getHours();
    const mins = currentTime.getMinutes();
    const decimalTime = hrs + mins / 60;

    // Mapping timeline intervals
    if (decimalTime >= 4.5 && decimalTime < 5.5) return DAILY_ROJNISHI[0];
    if (decimalTime >= 5.5 && decimalTime < 7) return DAILY_ROJNISHI[1];
    if (decimalTime >= 7 && decimalTime < 9.5) return DAILY_ROJNISHI[2];
    if (decimalTime >= 9.5 && decimalTime < 10.5) return DAILY_ROJNISHI[3];
    if (decimalTime >= 10.5 && decimalTime < 13) return DAILY_ROJNISHI[4];
    if (decimalTime >= 13 && decimalTime < 15.5) return DAILY_ROJNISHI[5];
    if (decimalTime >= 15.5 && decimalTime < 17) return DAILY_ROJNISHI[6];
    if (decimalTime >= 17 && decimalTime < 19) return DAILY_ROJNISHI[7];
    if (decimalTime >= 19 && decimalTime < 21) return DAILY_ROJNISHI[8];
    // Night shej aarti
    return DAILY_ROJNISHI[9];
  };

  const currentActiveRojnishi = getActiveRojnishiNow();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomepage();
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage courses={ADMISSION_COURSES} onOpenBookingWithCourse={triggerBookingWithContext} />;
      case 'dnyaneshwari':
        return <DnyaneshwariReader />;
      case 'bhajan':
        return <BhajanPlayer />;
      case 'contact':
        return <ContactPage onAddContactMessage={handleAddContactMessage} />;
      case 'discovery_call':
        return <DiscoveryCall onAddBooking={handleAddNewBooking} preselectedTopic={preselectedTopic} />;
      case 'admin':
        return (
          <AdminPanel 
            courses={ADMISSION_COURSES} 
            onAddCourse={(newC) => {}}
            blogs={[]} 
            onAddBlog={(newB) => {}}
            bookings={bookings} 
            onUpdateBookingStatus={handleUpdateBookingStatus}
            onBulkSeedCourses={() => {}}
            contactMessages={contactMessages}
          />
        );
      default:
        return renderHomepage();
    }
  };

  const renderRojnishiIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bell': return <Bell className="w-5 h-5 text-orange-600 shrink-0" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-sky-600 shrink-0" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-orange-700 shrink-0" />;
      case 'Flame': return <Flame className="w-5 h-5 text-orange-500 shrink-0" />;
      case 'Music': return <Music className="w-5 h-5 text-amber-600 shrink-0" />;
      default: return <Sun className="w-5 h-5 text-orange-400 shrink-0" />;
    }
  };

  // Beautiful spiritual Home screen view
  const renderHomepage = () => {
    return (
      <div className="font-sans text-slate-800 animate-fade-in divide-y divide-amber-200/20">
        
        {/* HERO SECTION - Immersive spiritual layout */}
        <section className="relative py-20 px-4 sm:py-24 bg-orange-950 overflow-hidden text-orange-100 flex items-center min-h-[85vh] border-b border-orange-900">
          <div className="absolute inset-0 bg-[radial-gradient(#fdba74_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-900/60 border border-orange-500/20 text-xs font-bold uppercase tracking-wider text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse animate-spin-slow" />
                <span>शतकोत्तर वारकरी सांप्रदायिक परंपरा मंदिर</span>
              </div>

              <h1 className="text-3.5xl sm:text-5.5.xl font-extrabold font-display leading-[1.12] tracking-tight text-amber-50">
                भक्ती आणि ज्ञानाची पवित्र <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 font-serif">
                  आळंदी ज्ञानेश्वर माउली
                </span> <br />
                निवासी गुरुकुल संस्था.
              </h1>

              <p className="text-xs sm:text-sm text-orange-200/95 leading-relaxed font-sans max-w-xl">
                Established in 1917 by Sadguru Jog Maharaj, the **Varkari Shikshan Sansthan** offers totally sponsored, residential training in sacred Kirtan scriptures, Pakhavaj drumming, and Dnyaneshwari commentaries near the holy banks of quiet Indrayani River.
              </p>

              {/* Admission & Navigation CTA cluster */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4.5 pt-4">
                <button
                  onClick={() => triggerBookingWithContext(null)}
                  className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-orange-500 hover:bg-orange-600 text-[#2c1303] shadow-lg shadow-orange-500/10 transition-all text-center cursor-pointer"
                >
                  Apply For Free Admission (प्रवेश अर्ज)
                </button>
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-widest border border-orange-700 bg-orange-900/30 hover:bg-orange-900 text-amber-100 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>See Residential Courses</span>
                  <BookOpen className="w-4 h-4 text-orange-400" />
                </button>
              </div>

              {/* Heritage numbers list */}
              <div className="pt-6 border-t border-orange-900 grid grid-cols-3 gap-6 text-left max-w-lg font-medium">
                <div>
                  <span className="text-xl sm:text-2.5xl font-extrabold text-amber-200 block">१००+ वर्ष</span>
                  <span className="text-[10px] text-orange-200/50 font-bold uppercase tracking-wider mt-0.5 block">Nurturing Saints</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2.5xl font-extrabold text-amber-200 block">१०,०००+</span>
                  <span className="text-[10px] text-orange-200/50 font-bold uppercase tracking-wider mt-0.5 block">Alumni Keertankars</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2.5xl font-extrabold text-amber-200 block">0/- FEE</span>
                  <span className="text-[10px] text-orange-200/50 font-bold uppercase tracking-wider mt-0.5 block">Pure Free Seva</span>
                </div>
              </div>

            </div>

            {/* Right Visual Spot: Dignified Vitthal-Rakhumai Artwork Portrait */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-orange-400/20 to-amber-500/25 blur-md -z-1" />
              <div className="bg-orange-900/60 p-3 rounded-3xl border border-orange-500/10 relative">
                
                {/* Visual Unsplash placeholder representing Traditional Holy Scriptures/Spiritual atmosphere */}
                <img 
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600&h=700" 
                  alt="Traditional Indian spiritual scriptures manuscript"
                  className="rounded-2xl shadow-2xl w-full h-[360px] object-cover border border-orange-950"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800";
                  }}
                />
                
                {/* Embedded overlay representation of our deity prayer */}
                <div className="absolute bottom-6 left-6 right-6 bg-orange-950/90 backdrop-blur-md p-4 rounded-xl border border-orange-850 space-y-1.5 text-center">
                  <p className="text-[11px] font-bold text-amber-300 uppercase tracking-widest font-serif">।। विठ्ठल रखुमाई ।।</p>
                  <p className="text-[10px] text-orange-200/85 italic leading-tight">"सुंदर ते ध्यान उभे विटेवरी । कर कटावरी ठेवूनियां ।।"</p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* REAL-TIME DAILY INTERACTIVE GURUKUL ROJNISHI TRACKER (नित्य दिनचर्या) */}
        <section className="bg-[#fffdfa] py-16 px-4 border-b border-orange-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600/5 text-orange-900 text-xs font-bold uppercase tracking-wider">
                <Sun className="w-3.5 h-3.5 text-orange-600 animate-spin-slow" />
                <span>निवासी विठ्ठल आश्रम दिनचर्या</span>
              </div>
              <h3 className="text-2xl sm:text-3.5xl font-extrabold font-display leading-tight text-slate-900 tracking-tight">
                Live Daily Rojnishi (विद्यार्थी दिनक्रम)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                Gurukul discipline is built on an unbreakable spiritual code of conduct. Based on your current system clock, here is what our residential students are doing on the banks of Alandi Devachi waters right now:
              </p>

              {/* Dynamic Live Activity Panel card */}
              {currentActiveRojnishi && (
                <div className="p-5 rounded-2xl bg-amber-500/5 border border-orange-500/10 space-y-3.5 animate-scale-up-fade">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-orange-600 text-white rounded-lg text-[9px] uppercase font-bold tracking-widest leading-none">
                      Active Right Now 🔔
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} IST</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-white border border-amber-100 rounded-xl">
                      {renderRojnishiIcon(currentActiveRojnishi.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">नित्य विठ्ठल सेवा</h4>
                      <h3 className="text-sm font-extrabold text-orange-950 font-serif leading-none mt-1">{currentActiveRojnishi.marathiActivity}</h3>
                      <p className="text-[11px] text-slate-500 font-sans mt-0.5">{currentActiveRojnishi.activity}</p>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-normal font-sans pt-2 border-t border-orange-100/55 italic">
                    "{currentActiveRojnishi.significance}"
                  </p>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-orange-650 text-white font-bold uppercase tracking-wider rounded-xl text-xs transition-colors cursor-pointer inline-flex items-center gap-1 shadow-xs"
                >
                  <span>Read Complete Ashram Rules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Scrollable Timetable list */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 shadow-sm space-y-4 max-h-[500px] overflow-y-auto">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Alandi Gurukul Hour Map</h4>
              <div className="divide-y divide-slate-100">
                {DAILY_ROJNISHI.map((item, idx) => {
                  const isActive = currentActiveRojnishi?.activity === item.activity;
                  return (
                    <div 
                      key={idx} 
                      className={`py-4 flex gap-4 pr-3 transition-colors ${
                        isActive 
                          ? 'bg-amber-500/5 -mx-4 px-4 rounded-xl border-l-4 border-orange-600' 
                          : 'opacity-75 '
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-600/5 flex items-center justify-center shrink-0">
                        {renderRojnishiIcon(item.icon)}
                      </div>
                      
                      <div className="flex-grow space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 font-serif">{item.marathiActivity}</span>
                          <span className="text-[10px] font-bold text-orange-700 font-sans whitespace-nowrap">{item.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-sans leading-relaxed">{item.significance}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* KEY HIGHLIGHT: SACRED DNYANESHWARI READING & BHAJAN DRONE PORTLET */}
        <section className="bg-[#fcfaf4] py-20 px-4 border-b border-orange-100 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-extrabold text-orange-700 uppercase tracking-widest block">आध्यात्मिक अभ्यास विभाग</span>
              <h3 className="text-2xl sm:text-4.2xl font-extrabold font-display leading-tight text-slate-950 tracking-tight">
                ज्ञानेश्वरी पारायण व कीर्तन अभंग संग्रह
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed max-w-lg mx-auto">
                Explore our smart interactive modules designed for autonomous study. Select a tool to start practicing verse recitation with translations directly:
              </p>
            </div>

            {/* Features Split Board */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              
              {/* Box 1: Dnyaneshwari self study */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-md text-left space-y-4 group">
                <div className="w-12 h-12 bg-orange-600/5 text-orange-700 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-md sm:text-lg font-bold text-slate-950 font-serif">ज्ञानेश्वरी पारायण (Self Reader)</h4>
                  <p className="text-xs text-slate-450 uppercase font-bold tracking-wider leading-none">Chanting Self Evaluator</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Study all 18 chapters of Bhavartha Deepika. Features Marathi verse lyrics, side-by-side English translations, spiritual context commentaries, and a searchable registry.
                </p>
                
                <button
                  onClick={() => setCurrentPage('dnyaneshwari')}
                  className="px-4.5 py-3 rounded-lg bg-slate-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-orange-650 transition-colors cursor-pointer w-full text-center"
                >
                  Start Reading (ज्ञानेश्वरी वाचन)
                </button>
              </div>

              {/* Box 2: Bhajan Player with audio */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-md text-left space-y-4 group">
                <div className="w-12 h-12 bg-orange-600/5 text-orange-700 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Music className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-md sm:text-lg font-bold text-slate-950 font-serif">अभंग व कीर्तन भजन (Audio Player)</h4>
                  <p className="text-xs text-slate-450 uppercase font-bold tracking-wider leading-none">Interactive Drone Ambient</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Listen to timeless verses penned by Sant Tukaram, Sant Dnyaneshwar, and Sant Janabai. Includes deep Raga notes, Tala guidelines, and a live web audio Tanpura drone generator.
                </p>
                
                <button
                  onClick={() => setCurrentPage('bhajan')}
                  className="px-4.5 py-3 rounded-lg bg-orange-650 text-white text-xs font-bold uppercase tracking-wider hover:bg-orange-700 transition-colors cursor-pointer w-full text-center"
                >
                  Open Bhajan Player (अभंग संकीर्तन)
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* FEATURED GURUKUL RESIDENTIAL TRACKS - 3 PREVIEWS */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-orange-700 uppercase tracking-widest pl-0.2">निवासी सुवर्ण अभ्यासक्रम (Tracks)</span>
                <h3 className="text-2xl sm:text-3.5xl font-extrabold font-display leading-tight text-slate-900 tracking-tight">
                  Featured Educational Disciplines
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-xl">
                  Discover customized residential courses providing high value. Food and hostel lodging are completely free of charge.
                </p>
              </div>

              <button
                onClick={() => setCurrentPage('courses')}
                className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-orange-650 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Full Curricula Specs</span>
                <ChevronRight className="w-4 h-4 text-orange-200 shrink-0" />
              </button>
            </div>

            {/* Render top 3 ADMISSION_COURSES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ADMISSION_COURSES.slice(0, 3).map((course) => (
                <div 
                  key={course.id}
                  className="bg-white rounded-3xl border border-amber-100 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full group"
                >
                  <div className="h-44 bg-slate-100 relative overflow-hidden shrink-0">
                    <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 bg-orange-650 text-[9px] font-bold text-white rounded-full uppercase tracking-wider font-sans">
                      {course.category}
                    </span>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600";
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-500/5 px-2 py-0.5 rounded-md border border-emerald-500/10">
                        100% Free
                      </span>
                      <span className="font-bold text-orange-700">{course.duration}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-orange-650 transition-colors leading-snug">
                      {course.title}
                    </h4>

                    <p className="text-xs text-slate-550 leading-relaxed font-sans line-clamp-2">
                      {course.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 block pb-0.5">Primary Instructor</span>
                        <strong className="text-slate-800 font-mono text-[11px] block pr-1 leading-tight">{course.instructor.split(' ')[2] || course.instructor}</strong>
                      </div>
                      
                      <button
                        onClick={() => setCurrentPage('courses')}
                        className="text-orange-700 font-extrabold hover:text-orange-600 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Learn Syllabus</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CORE VARKARI CALENDAR & SISTER SITES REFERENCE BLOCK */}
        <section className="bg-[#fcfaf4] py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left box - Calendar with upcoming Ekadashis/tithis */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 shadow-md space-y-6">
              <div className="flex items-center gap-3 border-b border-orange-100 pb-4">
                <CalendarIcon className="w-5 h-5 text-orange-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-serif">वारकरी उत्सव आणि एकादशी दिनदर्शिका (Spiritual Calendar)</h4>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest font-sans">Alandi and Pandharpur Sacred Dates</p>
                </div>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {VARKARI_CALENDAR.map((cal) => (
                  <div key={cal.id} className="py-4 flex gap-4 pr-2">
                    <div className="w-14 h-14 bg-orange-600/5 border border-orange-500/10 rounded-2xl flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] uppercase font-mono font-bold text-orange-800 leading-none">Holy</span>
                      <span className="text-[13px] font-extrabold text-slate-800 font-serif mt-0.5">Tithi</span>
                    </div>
                    <div className="space-y-1 flex-grow">
                      <div className="flex items-center justify-between gap-2.5">
                        <h4 className="font-extrabold text-slate-900 text-xs font-serif">{cal.marathiTitle}</h4>
                        <span className="text-[10px] font-sans font-bold text-slate-405">{cal.date}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-sans leading-snug">{cal.details}</p>
                      <p className="text-[10px] text-orange-700 italic font-medium">Significance: {cal.significance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right box - Sister Portals & Partner Reference Links */}
            <div className="lg:col-span-5 bg-orange-950 text-orange-200 p-8 rounded-3xl space-y-6 border border-orange-900 shadow-lg relative min-h-[400px]">
              <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
              
              <div className="relative z-10 space-y-1.5">
                <span className="text-[9px] uppercase font-bold text-amber-300 tracking-wider">डिजिटल संदर्भ व्यासपीठ</span>
                <h3 className="text-xl font-bold font-serif text-white">Warkari Rojnishi Reference</h3>
                <p className="text-xs text-orange-200/70 leading-relaxed font-sans">
                  The Varkari tradition encourages all practitioners to maintain a physical or digital **Rojnishi** (Daily Devotional Diary) to audit prayers, record chanting numbers (नामजप), and stay updated on Alandi festivals. Visit our sister portals and chief reference sites:
                </p>
              </div>

              {/* Sister sites links list */}
              <div className="space-y-4 pt-2 relative z-10 text-xs">
                {SISTER_PORTALS.map((portal, pi) => (
                  <a 
                    key={pi} 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-orange-900/40 hover:bg-orange-900 border border-orange-550/20 hover:border-orange-500/30 rounded-xl block transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-white text-md font-serif group-hover:underline">{portal.name}</h4>
                      <ExternalLink className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </div>
                    <p className="text-[11px] text-orange-200/70 font-sans mt-0.5 leading-normal">{portal.description}</p>
                  </a>
                ))}
              </div>

              <div className="p-4 bg-orange-950 rounded-2xl border border-orange-900 relative z-10 text-[11px] text-orange-200/50 text-center uppercase tracking-widest font-bold">
                🚩 राम कृष्ण हरी 🚩
              </div>
            </div>

          </div>
        </section>

      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfaf6] text-slate-800 selection:bg-orange-600/20 selection:text-orange-900">
      
      {/* Devotional Newsletter slide-in popup */}
      <NewsletterPopup />

      {/* Floating Marathi-respectful WhatsApp Action Node */}
      <WhatsAppButton />

      {/* Persistent Navigation Header */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenBooking={() => triggerBookingWithContext(null)} 
      />

      {/* Main Dynamic Viewport Root */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Persistent Footer and credits link to warkarirojnishi.in */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        onOpenBooking={() => triggerBookingWithContext(null)} 
      />

    </div>
  );
}
