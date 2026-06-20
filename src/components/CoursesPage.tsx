import React, { useState } from 'react';
import { AdmissionCourse, AdmissionCourseCategory } from '../types';
import { Star, Clock, Sparkles, BookOpen, CheckCircle, ChevronRight, User, X, Landmark, Heart, FileText } from 'lucide-react';

interface CoursesPageProps {
  courses: AdmissionCourse[];
  onOpenBookingWithCourse: (courseTitle: string) => void;
}

export default function CoursesPage({ courses, onOpenBookingWithCourse }: CoursesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<AdmissionCourseCategory | 'All'>('All');
  const [selectedCourse, setSelectedCourse] = useState<AdmissionCourse | null>(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(0);

  const categories: (AdmissionCourseCategory | 'All')[] = ['All', 'Kirtan', 'Mridanga', 'Bhajan_Taal', 'Prasthantrayi'];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  const handleOpenDetail = (course: AdmissionCourse) => {
    setSelectedCourse(course);
    setActiveModuleIndex(0); // reset accordion expand index
  };

  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-24 font-sans text-slate-800">
      
      {/* Devotional Page Header */}
      <section className="bg-gradient-to-br from-orange-850 to-orange-750 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-950/40 border border-orange-500/20 text-xs font-semibold tracking-wider text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>निःशुल्क धार्मिक निवासी अभ्यासक्रम</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight text-amber-100">
            Residential Gurukul Curricula
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-orange-100/90 leading-relaxed font-sans font-medium">
            Discover our comprehensive, fully sponsored 1 to 4 year residential career programs. Students receive intensive scriptural guidance, moral discipline, and live presentation training.
          </p>
        </div>
      </section>

      {/* Main content with Course Grid and Category filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-orange-200/40 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-orange-650 text-white shadow-md scale-102 border border-orange-650'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-500/10 hover:text-orange-950'
              }`}
            >
              {cat === 'All' ? 'सर्व अभ्यासक्रम (All)' : cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8">
            <p className="text-slate-500 font-medium font-mono text-xs">No active courses launched in this category for this session. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-3xl border border-amber-100 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
              >
                
                {/* Course Image Wrapper with fallback */}
                <div className="relative h-48 overflow-hidden bg-[#faf8f4] shrink-0">
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[9px] font-extrabold uppercase tracking-wider text-orange-700 shadow-xs border border-orange-100">
                    {course.category}
                  </span>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // fallback representation
                      e.currentTarget.src = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600";
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>

                {/* Course Card Details */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  
                  {/* Category Status & Duration */}
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1 bg-orange-600/5 text-orange-900 px-2 rounded-md font-bold py-0.5 border border-orange-500/10">
                      <Heart className="w-3 h-3 text-orange-600 animate-pulse fill-orange-600" />
                      Free Education
                    </span>
                    <span className="flex items-center gap-1 bg-amber-500/10 text-orange-850 px-2 py-0.5 rounded-md font-extrabold">
                      <Clock className="w-3.5 h-3.5 text-orange-750 shrink-0" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Title & Eligibility */}
                  <div className="space-y-1">
                    <h3 className="text-md sm:text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-sans tracking-wide truncate">
                      🚩 Eligibility: {course.eligibility}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans line-clamp-2">
                    {course.description}
                  </p>

                  {/* Instructor Credentials and Action alignment */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">मार्गदर्शक (Acharya)</span>
                      <span className="text-xs font-extrabold text-slate-800 tracking-wide font-sans">{course.instructor.split(' ')[2] || course.instructor}</span>
                    </div>
                    
                    <button
                      onClick={() => handleOpenDetail(course)}
                      className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-650 hover:text-white text-white text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Curriculum</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Course Detail Overlay Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-[#fffdfa] rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-up-fade text-xs flex flex-col">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 z-20 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-50 rounded-full cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5 text-white sm:text-slate-800" />
            </button>

            {/* Course Header Banner */}
            <div className="relative h-48 bg-slate-900 text-white flex items-end p-6 sm:p-8 shrink-0">
              <img 
                src={selectedCourse.image} 
                alt={selectedCourse.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-950/10" />
              
              <div className="relative z-10 space-y-1.5">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-orange-600 text-white px-3 py-1 rounded-full border border-orange-500/10">
                  {selectedCourse.category} Curricula
                </span>
                <h2 className="text-lg sm:text-2xl font-extrabold font-display leading-tight">{selectedCourse.title}</h2>
              </div>
            </div>

            {/* Modal Content Scroll Room */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
              
              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4.5 bg-amber-500/5 rounded-2xl border border-orange-500/10">
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">Duration</span>
                  <span className="text-xs font-bold text-slate-800 font-sans">{selectedCourse.duration}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">Sponsorship</span>
                  <span className="text-xs font-semibold text-orange-700 font-sans">100% Free (मुफत)</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">Student Boarding</span>
                  <span className="text-xs font-bold text-slate-800 font-sans">Full Residential</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">Lead Acharya</span>
                  <span className="text-xs font-bold text-slate-800 font-sans">{selectedCourse.instructor}</span>
                </div>
              </div>

              {/* Course details & eligibility */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-150 pb-2.5">
                  <FileText className="w-4.5 h-4.5 text-orange-600" />
                  <span>अभ्यासक्रम विमोचन (Overview & Eligibility)</span>
                </h3>
                <p className="text-xs text-slate-550 leading-relaxed font-sans">
                  {selectedCourse.description}
                </p>
                <div className="p-3.5 bg-rose-50/25 border border-rose-100 rounded-xl text-slate-700 leading-normal font-sans">
                  🚨 <strong>प्रवेश पात्रता नियम (Eligibility):</strong> {selectedCourse.eligibility}
                </div>
              </div>

              {/* Curriculum Modules */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Syllabus Steps & Phases (टप्पे)</h3>
                <div className="space-y-2">
                  {selectedCourse.syllabus.map((detail, idx) => {
                    const isOpen = activeModuleIndex === idx;
                    return (
                      <div key={idx} className="border border-orange-100 rounded-xl overflow-hidden bg-white">
                        <button
                          onClick={() => setActiveModuleIndex(isOpen ? null : idx)}
                          className="w-full text-left p-4 bg-slate-50/50 flex items-center justify-between font-bold text-xs text-slate-750 hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <span>{detail.split(':')[0]}</span>
                          <span className="text-[10px] text-orange-600 font-bold uppercase">{isOpen ? 'Hide description' : 'View studies'}</span>
                        </button>
                        {isOpen && (
                          <div className="p-4 bg-white text-xs text-slate-550 leading-relaxed border-t border-slate-100 font-sans font-medium">
                            {detail.split(':')[1] || 'Detailed syllabus includes rigorous verbal exams, pronunciation training, rhythm loops execution, and live Alandi temple presentations supervised by senior Acharyas.'}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Instructor Bio Spot inside Gurukul */}
              <div className="bg-amber-50/40 rounded-2xl p-5 border border-orange-100 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-orange-600/15 flex items-center justify-center text-orange-850 shrink-0 mt-0.5">
                  <User className="w-5 h-5 text-orange-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900">
                    Syllabus supervised by {selectedCourse.instructor}
                  </h4>
                  <p className="text-[9px] text-orange-700 uppercase font-bold tracking-widest">{selectedCourse.instructorTitle}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    Guiding students in proper posture, breathing coordination, memory optimization methods, and devotional sincerity.
                  </p>
                </div>
              </div>

              {/* Modal footer CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-slate-450 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Alandi Residential Seat intake restricted to 15 candidates</span>
                </div>
                
                <button
                  onClick={() => {
                    onOpenBookingWithCourse(`${selectedCourse.title} Admission inquiry`);
                    setSelectedCourse(null);
                  }}
                  className="px-6 py-3 bg-orange-650 hover:bg-orange-750 text-white font-bold uppercase tracking-wide rounded-xl text-center shrink-0 w-full sm:w-auto cursor-pointer"
                >
                  Apply For Admission
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
