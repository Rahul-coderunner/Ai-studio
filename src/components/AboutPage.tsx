import React from 'react';
import { SANSTHAN_HERITAGE, CORE_VALUES, DAILY_ROJNISHI, SISTER_PORTALS } from '../data';
import { 
  GraduationCap, ShieldCheck, Award, Users, Sparkles, 
  MapPin, Quote, Landmark, Calendar, Bell, Heart, BookOpen
} from 'lucide-react';

export default function AboutPage() {
  
  // Helper to map spiritual core value icons
  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-orange-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-orange-600" />;
      case 'Users': return <Users className="w-5 h-5 text-orange-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-orange-600" />;
      default: return <Heart className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-24 text-slate-800 font-sans">
      
      {/* Devotional Hero Header */}
      <section className="relative px-4 py-20 bg-gradient-to-br from-orange-850 to-orange-750 text-white text-center overflow-hidden">
        {/* Abstract pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/40 border border-orange-500/20 text-xs font-semibold tracking-wider uppercase text-orange-200">
            <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>वारकरी शिक्षण संस्था - आळंदी देवाची</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight text-amber-100">
            {SANSTHAN_HERITAGE.name}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-orange-100/90 leading-relaxed font-sans font-medium">
            Preserving and propagating the sweet, egoless saint wisdom of Maharashtra since generations. Located in Alandi, the sacred land of Sant Dnyaneshwar Maharaj's Sanjeevan Samadhi.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Aesthetic Spiritual Card Image layout */}
          <div className="relative space-y-4">
            <div className="absolute -top-4 -left-4 w-48 h-48 bg-orange-600/5 rounded-3xl -z-1" />
            
            {/* Main Image Banner with fallback reference */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-amber-900 border border-orange-200 h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1609137144814-1fbc8f2603fc?auto=format&fit=crop&q=80&w=800" 
                alt="Alandi Devachi Temple" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to high value spiritual representation
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-400" />
                   पवित्र आळंदी क्षेत्र (Pune, Maharashtra)
                </span>
                <h4 className="text-md font-bold text-amber-100">Alandi Sanjeevan Samadhi Mandir</h4>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Our ashram operates on the holy banks of Indrayani River, adjacent to Mauli’s Eternal Shrine.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
              Our Sacred Heritage (संस्थेचा इतिहास)
            </h2>
            <div className="h-1 w-20 bg-orange-600 rounded" />
            
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {SANSTHAN_HERITAGE.history}
            </p>

            {/* Holy Quote Block */}
            <div className="bg-amber-50/50 p-6 rounded-2xl border border-orange-200/40 shadow-xs flex gap-4">
              <Quote className="w-8 h-8 text-orange-500 stroke-[1.5] shrink-0 mt-1" />
              <blockquote className="text-xs italic text-slate-700 leading-relaxed font-sans">
                "तुका म्हणे घालू पाया | उभारू देउळा | संतांचे जे पायरीचे दगड | तेचि सर्व गोड ॥"
                <span className="block not-italic font-bold text-orange-950 text-xs mt-2.5">
                  — Sant Tukaram Maharaj (building the holy mandir of spiritual companionship)
                </span>
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* Founder Profile - Sant/Acharya Biography */}
      <section className="bg-white border-y border-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase font-bold text-orange-700 tracking-widest block font-mono">मार्गदर्शक प्रेरणा</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">Founder & Acharya Heritage</h2>
          </div>

          <div className="bg-amber-50/30 rounded-3xl p-6 sm:p-10 border border-orange-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              {/* Photo & Honorific Title */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-orange-600 rotate-6 scale-102 opacity-10" />
                  <img 
                    src={SANSTHAN_HERITAGE.founderImage} 
                    alt={SANSTHAN_HERITAGE.founderName} 
                    className="relative z-10 rounded-full w-40 h-40 object-cover shadow-lg border-2 border-orange-500/20 bg-white"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{SANSTHAN_HERITAGE.founderName}</h3>
                  <p className="text-[10px] font-bold text-orange-700 uppercase tracking-widest mt-1">
                    {SANSTHAN_HERITAGE.founderTitle}
                  </p>
                </div>
              </div>

              {/* Bio Details */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Landmark className="w-4.5 h-4.5 text-orange-600" />
                  <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-slate-500">
                    Spiritual Biography (जीवाचा ध्यास)
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {SANSTHAN_HERITAGE.founderBio}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Ashram Daily Schedule (Rojnishi) - Essential feature extracted from warkarirojnishi.in */}
      <section className="bg-amber-50/20 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] uppercase font-bold text-orange-600 tracking-widest block">आश्रम दिनचर्या (निष्ठा)</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">Gurukul Daily Schedule</h2>
            <p className="text-slate-500 text-xs font-sans">
              True learning happens when spiritual schedule is held unbroken. Here is our daily routine followed by residential students:
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-orange-200/50 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DAILY_ROJNISHI.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 hover:bg-amber-50/30 rounded-2xl transition-all border border-slate-50 items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-600/10 text-orange-850 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    <Bell className="w-4.5 h-4.5 text-orange-600" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold font-mono text-orange-800">{item.time}</span>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{item.activity}</h4>
                    <p className="text-[11px] text-slate-400 font-sans">{item.significance}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-orange-600/5 rounded-2xl text-[11px] text-orange-950 border border-orange-500/10 text-center max-w-2xl mx-auto">
              🚩 <strong>Ekadashi fast notes:</strong> During Ekadashi days, special all-night continuous Harinam Kirtan and Nagar Pradakshina of Alandi town replaces standard scripture lectures.
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 tracking-tight">
            Our Spiritual Tenets (वारकरी मूल्य)
          </h2>
          <p className="text-slate-500 text-xs">Unconditional pillars upon which the Varkari life is built.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((val, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-amber-100 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-orange-600/10 flex items-center justify-center mb-5 shrink-0">
                {renderValueIcon(val.icon)}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">{val.title}</h3>
              <p className="text-xs text-slate-550 leading-relaxed font-sans">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sister Portals & References - Important linking for warkarirojnishi.in */}
      <section className="bg-white border-t border-amber-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold text-orange-700 tracking-widest block">संदर्भ आणि सुसंगती</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">Reference Sites & Portals</h2>
            <p className="text-slate-500 text-xs max-w-lg mx-auto">
              We highly recommend connecting with our holy sister nodes and digital initiatives dedicated to spreading Maharashtrian sainthood:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {SISTER_PORTALS.map((portal, idx) => (
              <a 
                key={idx}
                href={portal.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-50 border border-slate-100 hover:border-orange-500/20 hover:bg-[#fffdfa] rounded-2xl p-5 text-left transition-all flex flex-col justify-between h-full group hover:shadow-md cursor-pointer"
              >
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold text-orange-900 group-hover:text-orange-600 transition-colors">
                    {portal.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-normal font-sans">
                    {portal.description}
                  </p>
                </div>
                <div className="pt-3 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase transition-colors group-hover:text-orange-600">
                  <span>Visit website</span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
