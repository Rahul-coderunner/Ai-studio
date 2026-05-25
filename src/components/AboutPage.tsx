import React from 'react';
import { FOUNDER_PROFILE, CORE_VALUES, TIMELINE_MILESTONES } from '../data';
import { 
  GraduationCap, ShieldCheck, Award, Users, Linkedin, Sparkles, 
  Building2, Quote, Landmark, Home, ShoppingBag, Coffee, Calendar, Hammer 
} from 'lucide-react';

export default function AboutPage() {
  
  // Helper to map string naming to Lucide icons
  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-brand-secondary" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-brand-secondary" />;
      case 'Award': return <Award className="w-6 h-6 text-brand-secondary" />;
      case 'Users': return <Users className="w-6 h-6 text-brand-secondary" />;
      default: return <GraduationCap className="w-6 h-6 text-brand-secondary" />;
    }
  };

  const sectors = [
    {
      title: 'Government',
      description: 'Custom policy guidelines alignment, communication frameworks, and public sector workforce development projects.',
      icon: <Landmark className="w-5 h-5 text-brand-secondary" />
    },
    {
      title: 'Strata and Residential',
      description: 'Systematized strata operational training, community leadership, conflict resolution, and compliance communication protocols.',
      icon: <Home className="w-5 h-5 text-brand-secondary" />
    },
    {
      title: 'Retail',
      description: 'Customer service soft skills mastery, active selling techniques, team cohesion, and retail store leadership bootcamps.',
      icon: <ShoppingBag className="w-5 h-5 text-brand-secondary" />
    },
    {
      title: 'Hospitality',
      description: 'High-level business etiquette, guest interpersonal relations, professional brand styling, and crisis communication guidelines.',
      icon: <Coffee className="w-5 h-5 text-brand-secondary" />
    },
    {
      title: 'Events',
      description: 'Public speaking control, staging posture engineering, coordinator communications, and high-impact audience engagements.',
      icon: <Calendar className="w-5 h-5 text-brand-secondary" />
    },
    {
      title: 'Construction',
      description: 'Project manager leadership coaching, proactive risk communications, and team safety compliance alignment templates.',
      icon: <Hammer className="w-5 h-5 text-brand-secondary" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Hero Header */}
      <section className="relative px-4 py-20 bg-brand-primary text-white overflow-hidden text-center">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs font-semibold tracking-wider uppercase text-brand-secondary">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>The Future of Simplified Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight">
            Empowering Indian Professionals <br /> to Command the Next-Tier Boardroom.
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            We are not just training; we are building bridges. Bridge the critical gap between raw technical competence and mature executive authority.
          </p>
        </div>
      </section>

      {/* Narrative Section - Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual left */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-48 h-48 bg-brand-secondary/10 rounded-3xl -z-1" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-brand-accent/10 rounded-3xl -z-1" />
            <img 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800" 
              alt="Coaching session" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[450px]"
              referrerPolicy="no-referrer"
            />
            {/* Visual Callout block */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md text-white px-6 py-5 rounded-2xl border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary text-slate-900 flex items-center justify-center font-bold">
                  2K+
                </div>
                <div>
                  <h4 className="text-sm font-bold">Careers Transformed</h4>
                  <p className="text-xs text-slate-400">Placed in top Scaleups & Fortune Enterprises in India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Story content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold font-display text-slate-800 tracking-tight">The WeConnect Origin</h2>
            <div className="h-1 w-20 bg-brand-secondary" />
            
            <p className="text-slate-600 text-sm leading-relaxed">
              In 2021, while steering top engineering setups in Bangalore, our founder Dyaneshwar noticed a repeatable, disheartening pattern: incredibly brilliant software developers getting repeatedly passed over for career advancement in favor of far less-skilled candidates who simple spoke with more gravitas and executive presence.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our academic system produces coding marvels but struggles to explain stakeholder mapping, financial risk assessment, PRD engineering, or boardroom composure. This gap costs candidates millions in lifetime wealth.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We started WeConnect to build a rigorous, live-mentored ecosystem. We do not sell pre-recorded video dumps. Our classrooms are hotbeds of active negotiation, PRD critiques, mock boards, and direct corporate challenges.
            </p>

            {/* Inset Quote card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex gap-4">
              <Quote className="w-8 h-8 text-brand-secondary stroke-[1.5] shrink-0" />
              <blockquote className="text-xs italic text-slate-600 leading-relaxed font-sans mt-1">
                "Technical prowess opens the interview gates, but executive presence and structural business thinking are what command the senior manager, director, and partner paygrades. We teach exactly that."
                <cite className="block not-italic font-bold text-slate-800 text-xs mt-2.5">— Dyaneshwar, Founder</cite>
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* Founder Profile - Dyaneshwar */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold font-display text-slate-900 tracking-tight">Meet Our Founder</h2>
            <p className="text-slate-500 text-sm">Direct leadership from industry frontlines.</p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-xs max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              
              {/* Photo */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-brand-secondary rotate-3 scale-102" />
                  <img 
                    src={FOUNDER_PROFILE.image} 
                    alt={FOUNDER_PROFILE.name} 
                    className="relative z-10 rounded-2xl w-48 h-48 md:w-56 md:h-56 object-cover shadow-lg border border-white"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mt-1">{FOUNDER_PROFILE.name}</h3>
                  <p className="text-xs font-medium text-brand-secondary">{FOUNDER_PROFILE.title}</p>
                </div>
                <a 
                  href={FOUNDER_PROFILE.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-semibold hover:bg-slate-900 transition-colors flex items-center gap-2 shadow-xs"
                >
                  <Linkedin className="w-4 h-4 text-brand-secondary" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              {/* Bio & credentials */}
              <div className="md:col-span-2 space-y-5">
                <div className="flex items-center gap-2 text-slate-400">
                  <Building2 className="w-5 h-5 text-slate-400" />
                  <span className="text-xs font-medium font-mono uppercase tracking-widest text-[#112240]">Executive Profile</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  {FOUNDER_PROFILE.bio}
                </p>
                
                {/* 4 bullet pointers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-brand-secondary font-bold text-sm mt-0.5">•</span>
                    <span className="text-slate-600 text-xs font-medium">Ex-Principal Architecture Lead</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-brand-secondary font-bold text-sm mt-0.5">•</span>
                    <span className="text-slate-600 text-xs font-medium">Coached 2,000+ Indian Executives</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-brand-secondary font-bold text-sm mt-0.5">•</span>
                    <span className="text-slate-600 text-xs font-medium">B2C Transition Expert</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-brand-secondary font-bold text-sm mt-0.5">•</span>
                    <span className="text-slate-600 text-xs font-medium">Focus on hands-on Boardroom Playbooks</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold font-display text-slate-800 tracking-tight">Core Values Supporting our Journey</h2>
          <p className="text-slate-500 text-sm">Our promises to the professionals who trust us with their careers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center mb-5 shrink-0">
                {renderValueIcon(value.icon)}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{value.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Integrated Solutions Across Key Sectors */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest block font-mono">Trusted Integrated Solutions Partner</span>
            <h2 className="text-3xl font-extrabold font-display text-slate-900 tracking-tight">Custom Solutions Across Broad Sectors</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              We engineer specialized corporate and workforce communication programs perfectly adapted for specific industry operational constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100/80 hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0 mt-1 shadow-xs border border-slate-200/40">
                  {sector.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-800">{sector.title}</h3>
                  <p className="text-xs text-slate-550 leading-relaxed font-sans">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="bg-slate-900 text-white py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-white">The Journey Milestones</h2>
            <p className="text-slate-400 text-sm">Where we came from, and where we are empowering next.</p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
            {TIMELINE_MILESTONES.map((milestone, idx) => (
              <div key={idx} className="relative pl-10 md:-translate-x-1">
                
                {/* Years badge aligned left for desktop */}
                <span className="hidden md:block absolute right-full mr-12 top-0 text-right">
                  <span className="text-2xl font-bold text-brand-secondary block leading-none">{milestone.year}</span>
                </span>

                {/* Bubble node */}
                <div className="absolute left-0 -translate-x-[50%] top-1.5 w-4.5 h-4.5 rounded-full bg-brand-secondary border-4 border-slate-900 z-10 shadow-xs" />

                <div className="space-y-1.5">
                  <span className="md:hidden text-lg font-bold text-brand-secondary block">{milestone.year}</span>
                  <h3 className="text-lg font-bold text-slate-100">{milestone.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
