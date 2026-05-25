import React, { useState } from 'react';
import { Course, BlogPost, Booking, ContactMessage } from '../types';
import { 
  Bot, LayoutDashboard, FileSpreadsheet, PlusCircle, Calendar, 
  Settings, CheckCircle2, TrendingUp, Users, MessageSquare, 
  UploadCloud, Play, Globe, Eye, RefreshCw, Layers 
} from 'lucide-react';

interface AdminPanelProps {
  courses: Course[];
  onAddCourse: (course: Course) => void;
  blogs: BlogPost[];
  onAddBlog: (blog: BlogPost) => void;
  bookings: Booking[];
  onUpdateBookingStatus: (id: string, status: 'confirmed' | 'cancelled') => void;
  onBulkSeedCourses: () => void;
  contactMessages: ContactMessage[];
}

export default function AdminPanel({
  courses,
  onAddCourse,
  blogs,
  onAddBlog,
  bookings,
  onUpdateBookingStatus,
  onBulkSeedCourses,
  contactMessages
}: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'analytics' | 'courses' | 'blogs' | 'bookings'>('analytics');
  
  // Course Form State
  const [courseForm, setCourseForm] = useState({
    title: '',
    category: 'Technical' as 'Technical' | 'Soft Skills' | 'Leadership',
    duration: '8 Weeks',
    level: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
    description: '',
    price: 25000,
    instructorName: 'Dyaneshwar',
    instructorRole: 'Founder & Head Coach',
    syllabus: 'Week 1-2: Fundamentals & Business Context\nWeek 3-4: Tech Architect & System specs\nWeek 5-6: Live Project & Portfolio Case Review',
    outcomes: 'Write production-ready PRDs\nLead tech stakeholder alignments\nSecure immediate top-tier recruiter vetting',
    metaTitle: '',
    metaDescription: '',
    scheduleDate: ''
  });

  // Blog Form State
  const [blogForm, setBlogForm] = useState({
    title: '',
    category: 'Tips' as 'Career Growth' | 'Industry Trends' | 'Success Stories' | 'Tips',
    excerpt: '',
    content: '',
    author: 'Dyaneshwar',
    metaTitle: '',
    metaDescription: '',
    publishLaterDate: ''
  });

  const [notification, setNotification] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 5000);
  };

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseForm.title.trim()) {
      alert('Kindly fill out the Course Title first.');
      return;
    }

    const syllabusArray = courseForm.syllabus.split('\n').filter(s => s.trim() !== '');
    const outcomeArray = courseForm.outcomes.split('\n').filter(o => o.trim() !== '');

    const newCourse: Course = {
      id: `c_custom_${Date.now()}`,
      title: courseForm.title,
      category: courseForm.category,
      duration: courseForm.duration,
      level: courseForm.level,
      description: courseForm.description || 'Excellent WeConnect curated curriculum structured directly for the Indian corporate standards.',
      price: Number(courseForm.price),
      rating: 4.8,
      reviewsCount: 1,
      image: courseForm.category === 'Technical' 
        ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
        : 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
      instructorName: courseForm.instructorName,
      instructorRole: courseForm.instructorRole,
      syllabus: syllabusArray,
      outcomes: outcomeArray
    };

    onAddCourse(newCourse);
    triggerNotification(`Course "${courseForm.title}" successfully compiled, mapped with SEO meta, and scheduled to live DB!`);
    
    // reset form
    setCourseForm({
      title: '',
      category: 'Technical',
      duration: '8 Weeks',
      level: 'Intermediate',
      description: '',
      price: 25000,
      instructorName: 'Dyaneshwar',
      instructorRole: 'Founder & Head Coach',
      syllabus: 'Week 1-2: Fundamentals & Business Context\nWeek 3-4: Tech Architect & System specs\nWeek 5-6: Live Project & Portfolio Case Review',
      outcomes: 'Write production-ready PRDs\nLead tech stakeholder alignments\nSecure immediate top-tier recruiter vetting',
      metaTitle: '',
      metaDescription: '',
      scheduleDate: ''
    });
  };

  const handleCreateBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title.trim()) {
      alert('Kindly fill out the Blog Post Title first.');
      return;
    }

    const newBlog: BlogPost = {
      id: `b_custom_${Date.now()}`,
      title: blogForm.title,
      category: blogForm.category,
      excerpt: blogForm.excerpt || 'Recent executive guide launch on WeConnect resource labs.',
      content: blogForm.content || 'Draft content queued for publication.',
      date: blogForm.publishLaterDate ? `Scheduled: ${blogForm.publishLaterDate}` : 'May 24, 2026',
      readTime: '5 min read',
      author: blogForm.author,
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800'
    };

    onAddBlog(newBlog);
    triggerNotification(`Blog "${blogForm.title}" queued for schedule and injected into index feeds!`);
    
    // reset form
    setBlogForm({
      title: '',
      category: 'Tips',
      excerpt: '',
      content: '',
      author: 'Dyaneshwar',
      metaTitle: '',
      metaDescription: '',
      publishLaterDate: ''
    });
  };

  // Drag-drop mockup handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      triggerNotification(`Validated & converted "${e.dataTransfer.files[0].name}" into optimized SVG/WebP locally!`);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-800">
      
      {/* Top Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 shadow-md relative overflow-hidden shrink-0 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-primary rounded-xl text-xs font-semibold tracking-wider text-brand-secondary">
              <Bot className="w-4 h-4 text-brand-secondary shrink-0" />
              <span>Developer Panel & Content Console</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight tracking-tight text-white">
              WeConnect Admin CMS Suite
            </h1>
            <p className="text-xs text-slate-400">
              Mock Strapi/WordPress administrative dashboard mimicking course database mapping, event tracking logs, and publication calendars.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={onBulkSeedCourses}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Bulk Seed Syllabus (Demo)</span>
            </button>
            <div className="px-3.5 py-1.5 bg-slate-800 rounded-xl border border-slate-700 text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>DB LIVE CONNECTED: 0.0.0.0:3000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Administrative Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Dynamic banner notification */}
        {notification && (
          <div className="mb-6 p-4 bg-brand-secondary/15 border border-brand-secondary/30 rounded-2xl flex items-center gap-3 text-brand-secondary text-xs font-medium animate-slide-in-up shadow-sm">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center border-b border-slate-200 pb-4 gap-2 mb-10">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'analytics'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Analytics & Clicks Log</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'courses'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>SEO Course Upload</span>
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'blogs'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Blog Scheduler</span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'bookings'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Bookings & Leads Queue ({bookings.length})</span>
          </button>
        </div>

        {/* Tab 1: Analytics event tracking dashboard */}
        {activeTab === 'analytics' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* GA4 Real-time Event counters block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex items-center gap-4">
                <div className="p-3 bg-brand-primary/5 rounded-2xl text-brand-primary">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">GA4 Active Sessions</span>
                  <span className="text-xl font-extrabold text-slate-800 font-sans">4,192</span>
                  <p className="text-[9px] text-emerald-500 font-medium mt-0.5">↑ 14% past week</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-500 rounded-2xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">Course Inquiries</span>
                  <span className="text-xl font-extrabold text-slate-800 font-sans">142 Clicks</span>
                  <p className="text-[9px] text-slate-400 mt-0.5">CTA conversion: 4.8%</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex items-center gap-4">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">WhatsApp Clicks</span>
                  <span className="text-xl font-extrabold text-slate-800 font-sans">284 Clicks</span>
                  <p className="text-[9px] text-emerald-500 font-medium mt-0.5">Primary Indian Lead channel</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex items-center gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">Calendar Signups</span>
                  <span className="text-xl font-extrabold text-slate-800 font-sans">{bookings.length} Booked</span>
                  <p className="text-[9px] text-slate-400 mt-0.5">Diagnostics IST schedule queue</p>
                </div>
              </div>

            </div>

            {/* Custom live event logs registered during session */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Message queue list */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-800 pb-2 border-b">
                  Incoming Contact Form Messages ({contactMessages.length})
                </h3>
                
                {contactMessages.length === 0 ? (
                  <p className="text-xs text-slate-400 italic py-6 text-center">No messages submitted yet. Try typing inside the Contact Page form!</p>
                ) : (
                  <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                    {contactMessages.map((msg) => (
                      <div key={msg.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100/70 space-y-2 text-xs text-slate-600 leading-relaxed">
                        <div className="flex justify-between font-bold text-slate-800 border-b pb-1">
                          <span>{msg.name} ({msg.subject})</span>
                          <span className="text-[10px] font-mono text-slate-400">{msg.createdAt}</span>
                        </div>
                        <p className="font-sans italic">"{msg.message}"</p>
                        <div className="pt-2 text-[10px] text-slate-400 border-t flex justify-between">
                          <span>Email: <strong className="text-slate-600">{msg.email}</strong></span>
                          <span>Phone: <strong className="text-slate-600">{msg.phone || 'N/A'}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Event logging ledger */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-800 pb-2 border-b">Google Search Console Diagnostics & SEO Stats</h3>
                
                <div className="p-5 bg-slate-900 text-slate-300 font-mono text-[11px] rounded-2xl space-y-3 leading-relaxed">
                  <p className="text-[#0D9488]"># crawler config check loaded from robots.txt</p>
                  <p className="text-emerald-400">User-agent: * <br />Allow: / <br />Sitemap: https://weconnect.in/sitemap.xml</p>
                  
                  <div className="pt-3 border-t border-slate-800 space-y-2">
                    <p className="text-slate-400">{`>`} indexing status: Active</p>
                    <p className="text-slate-400">{`>`} mobile usability: PASS (Opt. for Indian smartphone bandwidth)</p>
                    <p className="text-slate-400">{`>`} core web vitals speed index: LCP 1.1s (Excellent range)</p>
                  </div>
                  
                  <div className="p-2.5 bg-slate-800 text-brand-secondary rounded border border-slate-700 text-[10px] uppercase font-bold text-center mt-2">
                    Google Index Crawled: Success (May 2026)
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: CMS Course Upload */}
        {activeTab === 'courses' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl max-w-4xl mx-auto animate-fade-in">
            <div className="border-b pb-4 mb-6 space-y-1">
              <h3 className="text-lg font-bold text-slate-800">SEO-Optimized Course Schema Injection Tool</h3>
              <p className="text-xs text-slate-400">Add custom professional bootcamps, configure GST prices, and set SEO Meta keywords in one dashboard.</p>
            </div>

            <form onSubmit={handleCreateCourse} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Course Title</span>
                  <input
                    type="text"
                    required
                    placeholder="Python & Generative AI for Executives"
                    value={courseForm.title}
                    onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Category</span>
                  <select
                    value={courseForm.category}
                    onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value as any })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary cursor-pointer font-sans"
                  >
                    <option value="Technical">Technical</option>
                    <option value="Soft Skills">Soft Skills/Corporate</option>
                    <option value="Leadership">Leadership Frameworks</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Duration Description</span>
                  <input
                    type="text"
                    required
                    placeholder="8 Weeks"
                    value={courseForm.duration}
                    onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Experience Grade Level</span>
                  <select
                    value={courseForm.level}
                    onChange={(e) => setCourseForm({ ...courseForm, level: e.target.value as any })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary cursor-pointer font-sans"
                  >
                    <option value="Beginner">Beginner Level</option>
                    <option value="Intermediate">Intermediate Level</option>
                    <option value="Advanced">Advanced Executive Level</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Course Fee Amount (INR)</span>
                  <input
                    type="number"
                    required
                    placeholder="25000"
                    value={courseForm.price}
                    onChange={(e) => setCourseForm({ ...courseForm, price: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white focus:ring-1 focus:ring-brand-primary"
                  />
                </div>

              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Short Course Abstract Description (2 lines)</span>
                <textarea
                  rows={2}
                  required
                  placeholder="Acquire immediately relevant coding skills to coordinate AI models inside automated software pipelines."
                  value={courseForm.description}
                  onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 outline-hidden focus:bg-white"
                />
              </div>

              {/* Drag Drop Mockup file upload for course thumbnails */}
              <div 
                onDragEnter={handleDrag} 
                onDragOver={handleDrag} 
                onDragLeave={handleDrag} 
                onDrop={handleDrop}
                className={`py-6 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
                  dragActive ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100/30'
                }`}
                onClick={() => triggerNotification('Opening local operating system directory picker...')}
              >
                <UploadCloud className="w-8 h-8 text-slate-400" />
                <span className="text-xs font-semibold text-slate-600">Simulate Image Drag & Drop</span>
                <span className="text-[10px] text-slate-400">Strictly converts PNG/JPEG to WebP, auto-resized on upload</span>
              </div>

              {/* Syllabus and outcome specs fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center pb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Syllabus Steps (New line per Week)</span>
                    <span className="text-[9px] text-slate-400">Form: "Week X: description"</span>
                  </div>
                  <textarea
                    rows={4}
                    value={courseForm.syllabus}
                    onChange={(e) => setCourseForm({ ...courseForm, syllabus: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-[10px] text-slate-700 outline-hidden focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Key Outcomes (New line per feature)</span>
                  <textarea
                    rows={4}
                    value={courseForm.outcomes}
                    onChange={(e) => setCourseForm({ ...courseForm, outcomes: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-[10px] text-slate-700 outline-hidden focus:bg-white"
                  />
                </div>

              </div>

              {/* SEO Meta Fields mapping */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Google Index & SEO Snippet Schema Settings</span>
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500">SEO Custom Meta Title</span>
                    <input
                      type="text"
                      placeholder="Best Python & Generative AI Bootcamp on MG Road, India"
                      value={courseForm.metaTitle}
                      onChange={(e) => setCourseForm({ ...courseForm, metaTitle: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Scheduled Date to Publish Outlines</span>
                    <input
                      type="date"
                      value={courseForm.scheduleDate}
                      onChange={(e) => setCourseForm({ ...courseForm, scheduleDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Create */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 hover:bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  Publish and Inject Syllabus toLive Solutions Card Layout
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Tab 3: CMS Blog Scheduler */}
        {activeTab === 'blogs' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl max-w-4xl mx-auto animate-fade-in">
            <div className="border-b pb-4 mb-6 space-y-1">
              <h3 className="text-lg font-bold text-slate-800">Resources & Blog Article Scheduler</h3>
              <p className="text-xs text-slate-400">Queue Career logs and Success stories. Supports scheduled publishing later parameters.</p>
            </div>

            <form onSubmit={handleCreateBlog} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Article Title</span>
                  <input
                    type="text"
                    required
                    placeholder="Agile Ceremonies Mistakes that keep teams stuck"
                    value={blogForm.title}
                    onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                  />
                </div>
                
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Category Tag</span>
                  <select
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value as any })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 cursor-pointer font-sans"
                  >
                    <option value="Career Growth">Career Growth consejos</option>
                    <option value="Industry Trends">Industry Trends analysis</option>
                    <option value="Success Stories">Success Stories review</option>
                    <option value="Tips">Actionable Tips & Hacks</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Excerpt summary (Under 2 sentences)</span>
                <input
                  type="text"
                  required
                  placeholder="Review common sprint leakage mistakes and how agile leads can handle them professionally."
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Detailed Article Outline (Paragraph content)</span>
                <textarea
                  rows={5}
                  required
                  placeholder="### 1. The Sprint Commit Myth... \nOur team repeatedly maps stories without verifying dynamic database schemas first..."
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-sans leading-relaxed"
                />
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Release Scheduling Parameters (Publish Later)</span>
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Pick Target Launch Date</span>
                    <input
                      type="date"
                      value={blogForm.publishLaterDate}
                      onChange={(e) => setBlogForm({ ...blogForm, publishLaterDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 cursor-pointer"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Assigned Author Signature</span>
                    <input
                      type="text"
                      value={blogForm.author}
                      onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800"
                    />
                  </div>
                </div>

                <div className="p-3 bg-slate-100 rounded-xl text-[10px] text-slate-500 font-mono">
                  INFO: Scheduling is calculated based on Indian Standard Time. Sitemaps will auto update upon published timing.
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 hover:bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  Schedule Resources Post and Update Map
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Tab 4: Leads queue list */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl max-w-5xl mx-auto space-y-6 animate-fade-in col-span-1">
            <div className="border-b pb-4 mb-2 space-y-1">
              <h3 className="text-lg font-bold text-slate-800">Admissions Discovery & Consultation Database Leads</h3>
              <p className="text-xs text-slate-400">Review schedule slots, email addresses, and toggle confirmation flags in real-time.</p>
            </div>

            {bookings.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-10 text-center">No bookings logged yet. Visit the Discovery Call page to book a slot first!</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider text-[10px] border-b border-slate-100">
                      <th className="p-4">Candidate & Phone</th>
                      <th className="p-4">Target Course</th>
                      <th className="p-4">Selected Slot</th>
                      <th className="p-4">Scheduling Status</th>
                      <th className="p-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-sans">
                    {bookings.map((book) => (
                      <tr key={book.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4">
                          <div className="space-y-0.5">
                            <span className="font-bold text-slate-800 block">{book.name}</span>
                            <span className="text-[11px] text-slate-600 block">{book.email}</span>
                            <span className="text-[10px] text-slate-400 font-mono block">{book.phone}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-slate-700">{book.topic}</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-0.5 font-mono text-[11px]">
                            <span className="font-semibold text-slate-700 block">{book.date}</span>
                            <span className="text-[10px] text-slate-400 block">{book.timeSlot}</span>
                          </div>
                        </td>
                        <td className="p-4 text-center md:text-left">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            book.status === 'confirmed' 
                              ? 'bg-emerald-50 text-emerald-600' 
                              : 'bg-rose-50 text-rose-500'
                          }`}>
                            {book.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => {
                                onUpdateBookingStatus(book.id, 'confirmed');
                                triggerNotification(`Leads verified: ${book.name} is now CONFIRMED! Calendar invite auto issued.`);
                              }}
                              className="px-2.5 py-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-emerald-100 transition-colors"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => {
                                onUpdateBookingStatus(book.id, 'cancelled');
                                triggerNotification(`Leads updated: ${book.name} is now CANCELLED.`);
                              }}
                              className="px-2.5 py-1.5 bg-rose-50 text-rose-600 text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-rose-100 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
}
