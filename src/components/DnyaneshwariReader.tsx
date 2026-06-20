import React, { useState } from 'react';
import { DnyaneshwariChapter, DnyaneshwariVerse } from '../types';
import { DNYANESHWARI_DATA } from '../data';
import { 
  BookOpen, Search, Sparkles, ChevronRight, Book, 
  Quote, Heart, Flame, Lightbulb, Compass, Award 
} from 'lucide-react';

export default function DnyaneshwariReader() {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(18); // Default to Ch 18 (Pasayadan)
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteVerses, setFavoriteVerses] = useState<string[]>([]);
  const [readingPledgeAccepted, setReadingPledgeAccepted] = useState(false);

  const chapters: DnyaneshwariChapter[] = DNYANESHWARI_DATA;
  const currentChapter = chapters.find(ch => ch.id === selectedChapterId) || chapters[0];

  const toggleFavorite = (verseId: string) => {
    setFavoriteVerses(prev => 
      prev.includes(verseId) 
        ? prev.filter(id => id !== verseId) 
        : [...prev, verseId]
    );
  };

  // Search filter across ALL chapters and verses
  const matchedVerses = chapters.flatMap(ch => 
    ch.verses.map(v => ({
      chapterId: ch.id,
      chapterTitle: ch.title,
      ...v
    }))
  ).filter(v => 
    v.original.includes(searchQuery) || 
    v.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.meaning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-24 text-slate-800 font-sans">
      
      {/* Devotional Banner */}
      <section className="relative px-4 py-16 bg-gradient-to-br from-orange-700 to-amber-900 text-white text-center overflow-hidden">
        {/* Abstract lotus backdrop pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#fb923c_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/40 border border-orange-500/20 text-xs font-semibold tracking-wider uppercase text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>भावार्थ दीपिका स्वाध्याय</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight text-amber-100">
            श्रीमद्भगवद्गीता : ज्ञानेश्वरी ग्रंथराज
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-amber-200/90 leading-relaxed font-sans font-medium">
            Explore the deep self-realization commentary written by Sant Dnyaneshwar Mauli in 1290 CE. It contains Marathi "Owis" translating complex Sanskrit Upanishadic metaphors into sweet, colloquial devotional truth.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left sidebar: Chapter Selection & Seekers Search */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Seeker Reading Pledge Card */}
          {!readingPledgeAccepted && (
            <div className="p-5 bg-amber-50 rounded-3xl border border-amber-200 text-xs space-y-3 shadow-xs">
              <h4 className="font-bold text-amber-950 flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-600 animate-pulse" />
                <span>Niyama Pledge before Reading (नियम)</span>
              </h4>
              <p className="text-amber-800/90 leading-relaxed">
                As a mark of spiritual respect to Sant Dnyaneshwar Maharaj, we pledge to sit comfortably, mute outer notifications, read with a calm, humble heart, and contemplate how these teachings can dissolve pride and ego.
              </p>
              <button 
                onClick={() => setReadingPledgeAccepted(true)}
                className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors shrink-0"
              >
                नियम स्वीकारणे (Accept Pledge & Begin)
              </button>
            </div>
          )}

          {/* Search Card */}
          <div className="bg-white rounded-3xl border border-amber-100 p-5 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <Search className="w-4 h-4 text-orange-600" />
              <span>Search Holy Verses (शोध घ्या)</span>
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Type keywords (e.g., 'Ganesha', 'soul', 'friendship')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-orange-600 focus:border-orange-600 focus:bg-white"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs py-1"
                >
                  Clear
                </button>
              )}
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              *Searching parses through both Devnagri Marathi lyrics, English translations, and explanations.
            </p>
          </div>

          {/* Chapter Links list */}
          <div className="bg-white rounded-3xl border border-amber-100 p-5 shadow-xs space-y-3 shrink-0">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2 pb-2 border-b border-amber-50">
              <BookOpen className="w-4.5 h-4.5 text-orange-600" />
              <span>Chapters Selector (अध्याय निवड)</span>
            </h3>
            
            <div className="space-y-1.5 max-h-[350px] overflow-y-auto pr-1">
              {chapters.map((ch) => {
                const isSelected = ch.id === selectedChapterId && !searchQuery;
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setSelectedChapterId(ch.id);
                      setSearchQuery('');
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl text-xs font-semibold flex items-center justify-between border transition-all ${
                      isSelected
                        ? 'bg-amber-500/10 border-orange-500/30 text-orange-950 font-bold scale-[1.01]'
                        : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50 text-slate-600 hover:text-orange-950'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-orange-600/10 text-orange-800 flex items-center justify-center font-mono text-[10px] font-extrabold">
                        {ch.id}
                      </span>
                      <span className="truncate max-w-[180px] text-slate-800 font-medium">
                        {ch.title.split(' ')[0]} <span className="text-[10px] text-orange-700 block font-normal">{ch.title.split('(')[1]?.replace(')', '') || ''}</span>
                      </span>
                    </span>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-orange-600' : 'text-slate-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right side: Interactive Reading Board */}
        <div className="lg:col-span-8 space-y-8">
          
          {searchQuery ? (
            /* Search Results View */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold font-display text-slate-900 border-l-4 border-orange-600 pl-3">
                  Found {matchedVerses.length} matches for "{searchQuery}"
                </h2>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-lg"
                >
                  Return to Chapters
                </button>
              </div>

              {matchedVerses.length === 0 ? (
                <div className="bg-white border p-12 text-center rounded-3xl text-slate-400 space-y-2">
                  <Book className="w-12 h-12 mx-auto text-slate-200" />
                  <p className="text-sm font-semibold text-slate-600">No verses match your search text.</p>
                  <p className="text-xs">Try simplified terms like "peace", "surrender", "intellect", or Marathi Devnagri letters like "ॐ".</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {matchedVerses.map((verse) => (
                    <div 
                      key={verse.id} 
                      className="bg-white rounded-3xl p-6 border border-amber-100/80 shadow-xs space-y-4 hover:border-orange-500/20 transition-all"
                    >
                      <div className="flex items-center justify-between border-b pb-2 text-[10px] text-slate-400 font-semibold uppercase">
                        <span>Chapter {verse.chapterId} : {verse.chapterTitle}</span>
                        <span className="bg-orange-600/10 text-orange-850 px-2.5 py-0.5 rounded-md">Verse {verse.verseNumber}</span>
                      </div>
                      
                      {/* Original Verse */}
                      <p className="text-md sm:text-lg font-bold font-sans text-center text-orange-950 bg-amber-50/40 p-5 rounded-2xl border border-amber-100 leading-loose">
                        {verse.original}
                      </p>

                      <div className="space-y-2 text-xs">
                        <strong className="text-slate-800 font-display italic block">Translation:</strong>
                        <p className="text-slate-600 italic leading-relaxed">{verse.translation}</p>
                      </div>

                      <div className="space-y-2 text-xs p-4 bg-slate-50 rounded-2xl">
                        <strong className="text-orange-900 font-semibold flex items-center gap-1.5">
                          <Lightbulb className="w-4.5 h-4.5 text-orange-600 shrink-0" />
                          <span>Spiritual Meaning:</span>
                        </strong>
                        <p className="text-slate-500 leading-relaxed font-sans">{verse.meaning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Chapter Reader View */
            <div className="space-y-8 animate-fade-in">
              
              {/* Chapter Detail Header Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-xs space-y-4 relative overflow-hidden">
                <span className="text-[11px] uppercase font-bold text-orange-600 tracking-wider flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-orange-600 animate-spin-slow shrink-0" />
                  CHAPTER SUMMARY (अध्याय ओळख)
                </span>
                
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-slate-900">
                    {currentChapter.marathiTitle}
                  </h2>
                  <h3 className="text-md font-medium text-amber-800 font-sans tracking-wide">
                    {currentChapter.title}
                  </h3>
                </div>

                <div className="h-0.5 w-full bg-gradient-to-r from-orange-500/30 via-slate-100 to-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-1.5">
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">
                      {currentChapter.description}
                    </p>
                    <div className="pt-2 text-[11px] text-slate-400">
                      Total verses inside this study block: <strong className="text-slate-700 font-mono">{currentChapter.totalVerses} Owis</strong>
                    </div>
                  </div>
                  
                  {/* Highlighted Takeaway Card */}
                  <div className="md:col-span-4 p-4 bg-orange-600/5 rounded-2xl border border-orange-500/10 space-y-1">
                    <span className="text-[9px] uppercase font-bold text-orange-800 tracking-widest block">Core Essence</span>
                    <p className="text-xs font-bold text-slate-800 leading-snug">
                      {currentChapter.keyTakeaway}
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Pasayadan Dedication Header for Chapter 18 */}
              {selectedChapterId === 18 && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-6 border border-orange-200 flex gap-4 items-start shadow-xs animate-pulse">
                  <Quote className="w-8 h-8 text-orange-500 stroke-[1.5] shrink-0 mt-1" />
                  <div className="space-y-1.5 text-xs">
                    <h4 className="font-extrabold text-orange-950 font-display">Special Feature: The Pasayadan (पसायदान)</h4>
                    <p className="text-orange-800/95 leading-relaxed font-medium">
                      At the end of his masterly commentary, Sant Dnyaneshwar Mauli asks his Guru for a global "Pledge of Grace" (Pasayadan). This is the supreme Varkari prayer chanted at every temple gathering to bring peace, spiritual wisdom, and friendship to all living souls on Earth.
                    </p>
                  </div>
                </div>
              )}

              {/* Verses Grid */}
              <div className="space-y-6">
                {currentChapter.verses.map((verse) => {
                  const isFav = favoriteVerses.includes(verse.id);
                  return (
                    <div 
                      key={verse.id} 
                      className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-xs relative flex flex-col justify-between space-y-5 hover:shadow-md hover:border-orange-500/20 transition-all duration-300"
                    >
                      {/* Floating Indicator */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-orange-850 px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                          Owi {verse.verseNumber}
                        </span>
                        
                        <button 
                          onClick={() => toggleFavorite(verse.id)}
                          className="p-2 rounded-full hover:bg-slate-50 transition-colors cursor-pointer group"
                          title={isFav ? "Remove from favorite verses" : "Add to favorite verses"}
                        >
                          <Heart 
                            className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                              isFav ? 'fill-rose-500 text-rose-500' : 'text-slate-350 hover:text-rose-500'
                            }`} 
                          />
                        </button>
                      </div>

                      {/* Marathi Devnagri Verse */}
                      <p className="text-lg sm:text-xl font-bold font-sans text-orange-950 text-center leading-loose tracking-wide py-2 select-text selection:bg-orange-200">
                        {verse.original}
                      </p>

                      {/* English translation */}
                      <div className="space-y-2.5 pt-1.5">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1 font-mono">
                          <Compass className="w-3.5 h-3.5 text-slate-400" />
                          <span>MANTRA TRANSLATION</span>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-600 font-display italic">
                          "{verse.translation}"
                        </p>
                      </div>

                      {/* Spiritual commentary */}
                      <div className="space-y-2 p-5 bg-[#faf8f4] border border-amber-50 rounded-2xl">
                        <div className="text-[10px] font-bold text-orange-850 uppercase tracking-widest flex items-center gap-1.5 font-mono">
                          <Lightbulb className="w-3.5 h-3.5 text-orange-650" />
                          <span>Spiritual Contemplation (भावार्थ निरूपण)</span>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-550 font-sans">
                          {verse.meaning}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* End of Chapter Dedication Footer */}
              <div className="bg-slate-50 border border-amber-100 p-6 rounded-3xl text-center space-y-2">
                <Award className="w-8 h-8 text-orange-600/30 mx-auto" />
                <h4 className="text-sm font-bold text-slate-800 font-display">इति श्रीमद्भगवद्गीता ज्ञानदेवी निरूपण समाप्त</h4>
                <p className="text-[11px] text-slate-400">
                  May checking this chapter fill you with pure devotion and clear inner strength. Read continuously to build character and selfless poise.
                </p>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
