import React, { useState } from 'react';
import { Course, CourseCategory } from '../types';
import { Star, Clock, Sparkles, BookOpen, CheckCircle, ChevronRight, User, X, Landmark } from 'lucide-react';

interface CoursesPageProps {
  courses: Course[];
  onOpenBookingWithCourse: (courseTitle: string) => void;
}

export default function CoursesPage({ courses, onOpenBookingWithCourse }: CoursesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All'>('All');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(0);

  const categories: (CourseCategory | 'All')[] = ['All', 'Technical', 'Soft Skills', 'Leadership'];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  const handleOpenDetail = (course: Course) => {
    setSelectedCourse(course);
    setActiveModuleIndex(0); // reset accordion expand index
  };

  const formattedPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-800">
      
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="max-w-4xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold tracking-wider text-brand-secondary">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
            <span>Structured Career Acceleration</span>
          </div>
          <h1 className="text-3xl sm:text-4.5xl font-extrabold font-display tracking-tight leading-tight">
            Our Training Solutions & Bootcamps
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300">
            Intense, live cohort curricula with industry veteran mentoring designed to give you concrete, demonstrable engineering and governance capabilities.
          </p>
        </div>
      </section>

      {/* Main content with Course Grid and Category filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-brand-primary text-white shadow-md scale-102'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-brand-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8">
            <p className="text-slate-500 font-medium">No courses launched in this category yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
              >
                
                {/* Course Image Wrapper */}
                <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-primary shadow-xs">
                    {course.category}
                  </span>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>

                {/* Course Card Details */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  
                  {/* Rating + Duration row */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
                      <strong>{course.rating.toFixed(1)}</strong> ({course.reviewsCount})
                    </span>
                    <span className="flex items-center gap-1 bg-slate-50 px-20 py-0.5 rounded-md font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Title & Level */}
                  <div className="space-y-1">
                    <span className={`text-[10px] font-semibold tracking-wider uppercase ${
                      course.level === 'Advanced' ? 'text-rose-500 bg-rose-50' : 'text-slate-500 bg-slate-50'
                    } px-2 py-0.5 rounded`}>
                      {course.level} Syllabus
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-brand-primary transition-colors leading-snug">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  {/* Pricing and Action Alignment */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">Course Fees</span>
                      <span className="text-lg font-extrabold text-[#112240] font-sans">{formattedPrice(course.price)}</span>
                    </div>
                    
                    <button
                      onClick={() => handleOpenDetail(course)}
                      className="px-4.5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-brand-primary transition-all flex items-center gap-1.5"
                    >
                      <span>Explore Outline</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Course Detail Full-Screen Overlay Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-up-fade">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 z-20 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-50 rounded-full"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Course Header Banner inside Modal */}
            <div className="relative h-48 bg-slate-900 text-white flex items-end p-8">
              <img 
                src={selectedCourse.image} 
                alt={selectedCourse.title}
                className="absolute inset-0 w-full h-full object-cover opacity-32"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/20" />
              
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-secondary text-slate-900 px-3 py-1 rounded-full">
                  {selectedCourse.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold font-display leading-tight">{selectedCourse.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              
              {/* Core Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Duration</span>
                  <span className="text-sm font-bold text-slate-800">{selectedCourse.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Experience Level</span>
                  <span className="text-sm font-bold text-slate-800">{selectedCourse.level}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Course Fee</span>
                  <span className="text-sm font-bold text-brand-primary">{formattedPrice(selectedCourse.price)}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Instructed By</span>
                  <span className="text-sm font-bold text-slate-800">{selectedCourse.instructorName}</span>
                </div>
              </div>

              {/* Description & Syllabus Progress Dynamics */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-800 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                  <BookOpen className="w-5 h-5 text-brand-secondary" />
                  <span>Syllabus Overview</span>
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {selectedCourse.description}
                </p>

                {/* Relative Topic Duration & Cumulative Progress Visualizer */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4 mt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                      Program Pace & Topic Weight
                    </span>
                    <span className="text-[10px] bg-brand-primary/5 text-brand-primary font-mono px-2 py-0.5 rounded-full font-bold">
                      {selectedCourse.duration} Program
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {(() => {
                      const durationMatch = selectedCourse.duration.match(/(\d+)/);
                      const totalWeeks = durationMatch ? parseInt(durationMatch[1], 10) : selectedCourse.syllabus.length;
                      let currentWeekSum = 0;

                      return selectedCourse.syllabus.map((step, idx) => {
                        const parts = step.split(':');
                        const weekLabel = parts[0]?.trim() || `Step ${idx + 1}`;
                        const topicDesc = parts[1]?.trim() || step;

                        const weekMatch = weekLabel.match(/Week\s*(\d+)(?:\s*-\s*(\d+))?/i);
                        let stepWeeks = 1;
                        if (weekMatch) {
                          const start = parseInt(weekMatch[1], 10);
                          const end = weekMatch[2] ? parseInt(weekMatch[2], 10) : start;
                          stepWeeks = (end - start) + 1;
                        }

                        currentWeekSum += stepWeeks;
                        const relativePercentage = (stepWeeks / totalWeeks) * 100;
                        const cumulativeProgress = (currentWeekSum / totalWeeks) * 100;

                        return (
                          <div key={idx} className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                              <span className="font-bold text-slate-700 truncate pr-2 max-w-[65%]">
                                {weekLabel}: <span className="font-medium text-slate-500">{topicDesc.split('-')[0]}</span>
                              </span>
                              <div className="flex items-center gap-1.5 shrink-0 text-[10px] text-slate-500">
                                <span className="font-mono text-slate-400 font-semibold">
                                  {stepWeeks} {stepWeeks === 1 ? 'wk' : 'wks'} ({Math.round(relativePercentage)}%)
                                </span>
                                <span className="text-slate-300">|</span>
                                <span className="font-mono bg-teal-50 text-brand-secondary font-bold px-1.5 py-0.2 rounded text-[9px]">
                                  Cum. {Math.round(cumulativeProgress)}%
                                </span>
                              </div>
                            </div>
                            
                            {/* Elegant Progress bar depicting topic weight and cumulative progression */}
                            <div className="relative h-2 bg-slate-200/60 rounded-full overflow-hidden flex">
                              {/* Left filler represents the current topic's relative duration weight */}
                              <div 
                                style={{ width: `${relativePercentage}%` }} 
                                className="h-full bg-brand-secondary rounded-l transition-all duration-500" 
                                title={`Topic duration takes ${Math.round(relativePercentage)}% of curriculum`}
                              />
                              {/* The rest progress gauge trail */}
                              <div 
                                style={{ width: `${Math.max(0, cumulativeProgress - relativePercentage)}%` }} 
                                className="h-full bg-brand-primary opacity-40 transition-all duration-500" 
                                title={`Completing this adds up to ${Math.round(cumulativeProgress)}% total course progress`}
                              />
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>
                  
                  {/* Progress Indicator Legend */}
                  <div className="flex items-center gap-4 pt-2.5 text-[10px] text-slate-400 border-t border-slate-200/50">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-brand-secondary rounded" />
                      <span>Topic weight</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-brand-primary opacity-40 rounded" />
                      <span>Cumulative progress</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes Checklist with Checkmarks */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle className="w-5 h-5 text-brand-secondary" />
                  <span>Key Skill Outcomes</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                  {selectedCourse.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold text-sm leading-none mt-0.5">•</span>
                      <span className="text-slate-600 text-xs leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum Modules Accordion */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-800">Complete Weekly Breakdown</h3>
                <div className="space-y-2">
                  {selectedCourse.syllabus.map((syllabusStep, idx) => {
                    const isOpen = activeModuleIndex === idx;
                    return (
                      <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setActiveModuleIndex(isOpen ? null : idx)}
                          className="w-full text-left p-4 bg-slate-55 flex items-center justify-between font-medium text-xs text-slate-700 hover:bg-slate-100/50 transition-colors"
                        >
                          <span className="font-semibold">{syllabusStep.split(':')[0]}</span>
                          <span className="text-xs text-brand-secondary font-bold">{isOpen ? 'Hide' : 'Show Details'}</span>
                        </button>
                        {isOpen && (
                          <div className="p-4 bg-white text-xs text-slate-500 leading-relaxed border-t border-slate-100/70">
                            {syllabusStep.split(':')[1] || 'Includes rigorous diagnostic portfolio checks, live review templates, and comprehensive QA assignments.'}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Instructor Bio Spot */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-lg uppercase font-bold shrink-0">
                  <User className="w-5 h-5 text-brand-primary" />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-xs font-bold text-slate-800">
                    Syllabus Coordinated by {selectedCourse.instructorName}
                  </h4>
                  <p className="text-[10px] text-brand-secondary uppercase font-semibold">{selectedCourse.instructorRole}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Personal assessment parameters, career mapping worksheets, and dynamic corporate review checkpoints.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Landmark className="w-4 h-4 text-emerald-600" />
                  <span>Corporate tax benefits & GST invoicing available on billing</span>
                </div>
                
                <button
                  id="modal_enroll_btn"
                  onClick={() => {
                    onOpenBookingWithCourse(`Syllabus Alignment: ${selectedCourse.title}`);
                    setSelectedCourse(null);
                  }}
                  className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-xl text-xs hover:bg-brand-primary/95 transition-all text-center shrink-0 w-full sm:w-auto"
                >
                  Book Free Call to Enroll
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
