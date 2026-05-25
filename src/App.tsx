import React, { useState, useEffect } from 'react';
import { Course, BlogPost, Booking, Testimonial, ContactMessage } from './types';
import { 
  INITIAL_COURSES, INITIAL_BLOGS, INITIAL_BOOKINGS, 
  INITIAL_TESTIMONIALS, CORE_VALUES 
} from './data';

// Import Custom Subviews
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import NewsletterPopup from './components/NewsletterPopup';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import DiscoveryCall from './components/DiscoveryCall';
import AdminPanel from './components/AdminPanel';

// Icons for Home sections
import { 
  Star, PhoneCall, ChevronRight, GraduationCap, ShieldCheck, 
  Award, Users, MessageSquare, ArrowRight, Sparkles, Building2, HelpCircle 
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [blogs, setBlogs] = useState<BlogPost[]>(INITIAL_BLOGS);
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [testimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [preselectedTopic, setPreselectedTopic] = useState<string | null>(null);

  // Sync scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Helper to append a booking
  const handleAddNewBooking = (newBookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    const freshBooking: Booking = {
      ...newBookingData,
      id: `b_dynamic_${Date.now()}`,
      status: 'confirmed',
      createdAt: new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN')
    };
    setBookings([freshBooking, ...bookings]);
  };

  // Helper to cancel or confirm in Admin
  const handleUpdateBookingStatus = (id: string, status: 'confirmed' | 'cancelled') => {
    setBookings(prev => prev.map(book => {
      if (book.id === id) {
        return { ...book, status };
      }
      return book;
    }));
  };

  // Helper to add a course from Admin Panel CMS
  const handleAddCourse = (newCourse: Course) => {
    setCourses([newCourse, ...courses]);
  };

  // Helper to add a blog post from Admin Panel CMS
  const handleAddBlog = (newBlog: BlogPost) => {
    setBlogs([newBlog, ...blogs]);
  };

  // Helper to record contact messages from the validated form
  const handleAddContactMessage = (msgData: { name: string; email: string; phone: string; subject: string; message: string }) => {
    const freshMsg: ContactMessage = {
      ...msgData,
      id: `msg_${Date.now()}`,
      createdAt: new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN')
    };
    setContactMessages([freshMsg, ...contactMessages]);
  };

  // Helper to bulk seed a course to demonstrate CMS flexibility instantly
  const handleBulkSeed = () => {
    const demoPMCourse: Course = {
      id: `c_seed_${Date.now()}`,
      title: 'Scrum Alliance Certified Product Owner (CSPO) Masterclass',
      category: 'Leadership',
      duration: '4 Weeks',
      level: 'Advanced',
      description: 'Get formally endorsed by international scrum standards. Covers daily sprint alignment hacks and custom product roadmap simulations with industry teams.',
      price: 21999,
      rating: 4.8,
      reviewsCount: 31,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      instructorName: 'Amit Sharma',
      instructorRole: 'Certified Scrum Coach Trainer',
      syllabus: [
        'Week 1: Product Backlog Deep-Dive: Refinement, prioritizing and scaling user stories.',
        'Week 2: Product Goal & Vision definition parameters aligned to real sprint matrices.',
        'Week 3: Corporate mock simulations with real developers raising operational feedback.',
        'Week 4: Professional LinkedIn resume audit and certification validation instructions.'
      ],
      outcomes: [
        'Officially unlock scrum alliance master badges',
        'Acquire structural Jira workflow templates ready for live deployment',
        'Learn how to solve sprint scope-creep and bottleneck escalations seamlessly'
      ]
    };

    setCourses([demoPMCourse, ...courses]);
    alert('Mock CMS Bulk seed success! An additional Agile CSPO Masterclass is now live in the Solution catalog grids.');
  };

  // Triggers Booking redirection with preset data
  const triggerBookingWithContext = (contextTopic: string | null) => {
    setPreselectedTopic(contextTopic);
    setCurrentPage('discovery_call');
  };

  // Render correct Page State
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomepage();
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage courses={courses} onOpenBookingWithCourse={triggerBookingWithContext} />;
      case 'blog':
        return <BlogPage initialBlogs={blogs} />;
      case 'contact':
        return <ContactPage onAddContactMessage={handleAddContactMessage} />;
      case 'discovery_call':
        return <DiscoveryCall onAddBooking={handleAddNewBooking} preselectedTopic={preselectedTopic} />;
      case 'admin':
        return (
          <AdminPanel 
            courses={courses} 
            onAddCourse={handleAddCourse}
            blogs={blogs} 
            onAddBlog={handleAddBlog}
            bookings={bookings} 
            onUpdateBookingStatus={handleUpdateBookingStatus}
            onBulkSeedCourses={handleBulkSeed}
            contactMessages={contactMessages}
          />
        );
      default:
        return renderHomepage();
    }
  };

  // Map values icon name to elements inside values preview grid
  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-brand-secondary" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-brand-secondary" />;
      case 'Award': return <Award className="w-5 h-5 text-brand-secondary" />;
      case 'Users': return <Users className="w-5 h-5 text-brand-secondary" />;
      default: return <GraduationCap className="w-5 h-5 text-brand-secondary" />;
    }
  };

  // Render the core Homepage layout (Page 1)
  const renderHomepage = () => {
    return (
      <div className="font-sans text-slate-800 animate-fade-in divide-y divide-slate-100">
        
        {/* HERO SECTION */}
        <section className="relative px-4 py-24 sm:py-32 bg-slate-900 overflow-hidden text-white flex items-center min-h-[80vh]">
          {/* Subtle decoration dots background */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-xs font-semibold uppercase tracking-wider text-brand-secondary">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                <span>India’s Leading Executive Skills Hub</span>
              </div>

              <h1 className="text-4xl sm:text-5.5.xl font-extrabold font-display leading-[1.12] tracking-tight">
                Bridge the Gap Between <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-secondary">
                  Raw Technical Code
                </span> <br />
                and Boardroom Authority.
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
                WeConnect offers intensive, live-coached bootcamps that translate individual software expertise into highly compensated Product Leadership, Tech Lead design roles, and Agile executive presences. Secure your breakthrough.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4.5 pt-4">
                <button
                  id="hero_booking_cta_btn"
                  onClick={() => triggerBookingWithContext(null)}
                  className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-secondary hover:bg-brand-secondary/90 text-slate-950 shadow-lg hover:shadow-brand-secondary/20 transition-all text-center"
                >
                  Book Free Discovery Call
                </button>
                <button
                  id="hero_solutions_cta_btn"
                  onClick={() => setCurrentPage('courses')}
                  className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Explore Our Courses</span>
                  <ChevronRight className="w-4 h-4 text-brand-secondary" />
                </button>
              </div>

              {/* Dynamic counter logs */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-6 text-left max-w-lg">
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-white block">2,000+</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 block">Alumni Multi-Hikes</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-white block">4.9 ★</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 block">Alumni Review average</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-white block">100% LIVE</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 block">Interactive Cohort slots</span>
                </div>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute -inset-1.5 bg-brand-secondary/15 rounded-3xl -z-1" />
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800" 
                alt="Product management dashboard"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover object-center border border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </section>

        {/* TRUST INDICATORS & SOCIAL PROOF */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-2 mb-12">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Credibility & Trust indicators</p>
              <h2 className="text-2xl font-bold text-slate-800 font-display">
                Endorsed by Fast-Growing Indian Executives & Developers
              </h2>
            </div>

            {/* Testimonials horizontal scrolling cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {INITIAL_TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col justify-between h-full space-y-4 shadow-2xs hover:shadow-md transition-all">
                  <div className="space-y-3">
                    {/* Star ratings */}
                    <div className="flex text-amber-500 gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <blockquote className="text-xs text-slate-600 italic leading-relaxed font-sans">
                      "{t.quote}"
                    </blockquote>
                  </div>

                  {/* Candidate Bio Portrait */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                    <img 
                      src={t.image} 
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0 bg-slate-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{t.name}</h4>
                      <p className="text-[10px] text-slate-500 font-medium">{t.role}</p>
                      <p className="text-[9px] text-brand-secondary font-bold uppercase tracking-wider">{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted logs line */}
            <p className="text-xs text-slate-400 text-center font-sans tracking-wide">
              Trusted by tech leads from <strong>TCS, Wipro, Razorpay, Swiggy, and Infosys alumni</strong> transitions.
            </p>
          </div>
        </section>

        {/* SERVICES / COURSES SOLUTIONS PREVIEW (3 CARDS) */}
        <section className="bg-slate-50 py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest">Immediate Career Upgrades</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-slate-800">
                  Featured Executive Bootcamps
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-xl">
                  Explore our live solutions designed specifically to address India’s macroeconomic product standards and hiring demands.
                </p>
              </div>

              <button
                onClick={() => setCurrentPage('courses')}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-brand-primary text-white text-xs font-semibold hover:shadow-lg transition-all flex items-center gap-1.5 self-start md:self-auto"
              >
                <span>View Full Curricula Catalog</span>
                <ChevronRight className="w-4 h-4 text-brand-secondary shrink-0" />
              </button>
            </div>

            {/* Quick 3 Course Cards preview grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.slice(0, 3).map((course) => (
                <div 
                  key={course.id}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full group"
                >
                  <div className="h-44 bg-slate-100 relative overflow-hidden shrink-0">
                    <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 bg-brand-primary/95 text-[9px] font-bold text-white rounded-full uppercase tracking-wider">
                      {course.category}
                    </span>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-semibold text-slate-600 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">
                        ★ {course.rating.toFixed(1)}
                      </span>
                      <span>{course.duration}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-800 group-hover:text-brand-primary transition-colors leading-snug">
                      {course.title}
                    </h4>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 block">Tuition fee</span>
                        <strong className="text-slate-800 font-sans">
                          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(course.price)}
                        </strong>
                      </div>
                      
                      <button
                        onClick={() => setCurrentPage('courses')}
                        className="text-brand-primary font-bold hover:text-brand-secondary transition-colors inline-flex items-center gap-1"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-3.5 h-3.5 mt-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WHY CHOOSE US (VALUES GRID) */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description columns */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest block">The WeConnect Standards</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-slate-900 tracking-tight">
                Why Ambitious Leaders Choose our Live Formats
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Pre-recorded corporate video dumps do not translate to promotion hikes. It takes active live evaluations, curriculum pressure, direct design checks, and vocal gravitas coaching to transform trajectories.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md inline-flex items-center gap-1"
                >
                  <span>Our Heritage & Founder Story</span>
                  <ArrowRight className="w-4 h-4 text-brand-secondary shrink-0" />
                </button>
              </div>
            </div>

            {/* Right 2x2 Values grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CORE_VALUES.slice(0, 4).map((value, i) => (
                <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-4 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/5 flex items-center justify-center mb-1 shrink-0">
                    {renderValueIcon(value.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{value.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* INTERACTIVE INLINE WHATSAPP BOARD PROMPT */}
        <section className="bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">Quick Direct Access</span>
            <h3 className="text-2xl sm:text-3.5xl font-extrabold font-display leading-tight text-white tracking-tight">
              Prefer Messaging over WhatsApp?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Skip standard forms and speak directly to our MG Road admissions desk. Tell us your current corporate background and ask about syllabus custom changes.
            </p>

            <button
              onClick={() => {
                const number = '919876543210';
                const text = encodeURIComponent("Hi, I'm interested in WeConnect courses. Can you help?");
                window.open(`https://wa.me/${number}?text=${text}`, '_blank', 'noreferrer,noopener');
              }}
              className="px-8 py-4.5 rounded-xl font-bold uppercase text-xs tracking-wider bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-md inline-flex items-center gap-2"
            >
              <span>Instant Chat with Support Admins</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </section>

      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 text-slate-800 selection:bg-brand-secondary/30 selection:text-brand-primary">
      
      {/* Dynamic Exit-Intent Slide-in popup */}
      <NewsletterPopup />

      {/* Floating Pulse WhatsApp Key Interaction Button */}
      <WhatsAppButton />

      {/* Sticky Header with active indicators */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenBooking={() => triggerBookingWithContext(null)} 
      />

      {/* Primary Dynamic Main Body View */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Shared Footer with contextual callback maps */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        onOpenBooking={() => triggerBookingWithContext(null)} 
      />

    </div>
  );
}
