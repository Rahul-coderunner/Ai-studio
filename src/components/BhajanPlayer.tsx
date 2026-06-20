import React, { useState, useEffect, useRef } from 'react';
import { AbhangBhajan } from '../types';
import { BHAJAN_DATA } from '../data';
import { 
  Music, Volume2, Search, Sliders, Play, Pause, 
  Sparkles, SkipForward, ChevronRight, HelpCircle, Heart, Star 
} from 'lucide-react';

export default function BhajanPlayer() {
  const [selectedBhajanId, setSelectedBhajanId] = useState<string>('abhang_1');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDronePlaying, setIsDronePlaying] = useState(false);
  const [droneVolume, setDroneVolume] = useState(0.2); // safe default volume
  const [activeTab, setActiveTab] = useState<'lyrics' | 'translation' | 'metadata'>('lyrics');
  const [likes, setLikes] = useState<string[]>([]);

  const bhajans: AbhangBhajan[] = BHAJAN_DATA;
  const currentBhajan = bhajans.find(b => b.id === selectedBhajanId) || bhajans[0];

  // Web Audio API refs for Tanpura / Meditative chords synthesizer
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Initialize and stop Synthesizer
  const stopDroneSynthesizer = () => {
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (err) {
        // already stopped
      }
    });
    oscillatorsRef.current = [];
  };

  const startDroneSynthesizer = () => {
    try {
      // Create audio context if it doesn't exist
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      // Resume context if suspended
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      
      // Master Gain Node for volume control
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(droneVolume * 0.1, ctx.currentTime); // keep synth volume soft
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Base Frequency C2 = 65.41 Hz or G2 = 98 Hz
      // Varkari tanpuras generally drone in Sa-Pa (C and G)
      const baseFreq = 130.81; // C3 (root Sa)
      const Pa = 196.00; // G3 (perfect fifth Pa)
      const SaLow = 65.41; // C2 (sub-bass root)
      
      const frequencies = [SaLow, SaLow * 2, Pa, baseFreq * 1.5, baseFreq * 2]; // Rich harmonic series

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        // Use Triangle or Sine waves for sweet meditative ambient drone sounds
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Subtle frequency modulation / detuning to simulate wood resonance and dynamic string vibrations
        const detuneAmount = (idx % 2 === 0 ? 1 : -1) * (3 + idx * 1.5);
        osc.detune.setValueAtTime(detuneAmount, ctx.currentTime);

        // Low volume for individual channels to prevent clipping
        const itemVol = 0.08 - (idx * 0.012);
        oscGain.gain.setValueAtTime(itemVol, ctx.currentTime);
        
        // Connect nodes
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        
        osc.start();
        oscillatorsRef.current.push(osc);
      });

    } catch (err) {
      console.error("Web Audio API not supported or blocked: ", err);
    }
  };

  const handleToggleDrone = () => {
    if (isDronePlaying) {
      stopDroneSynthesizer();
      setIsDronePlaying(false);
    } else {
      startDroneSynthesizer();
      setIsDronePlaying(true);
    }
  };

  // Adjust volume dynamically
  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(droneVolume * 0.15, audioCtxRef.current.currentTime);
    }
  }, [droneVolume]);

  const toggleLike = (bhajanId: string) => {
    setLikes(prev => 
      prev.includes(bhajanId) 
        ? prev.filter(id => id !== bhajanId) 
        : [...prev, bhajanId]
    );
  };

  // Clean oscillators on unmount
  useEffect(() => {
    return () => {
      stopDroneSynthesizer();
    };
  }, []);

  const filteredBhajans = bhajans.filter(b => 
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.marathiTitle.includes(searchQuery) ||
    b.saint.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-24 text-slate-800 font-sans">
      
      {/* Page Header */}
      <section className="relative px-4 py-16 bg-gradient-to-br from-orange-850 to-orange-700 text-white text-center overflow-hidden">
        {/* Abstract pattern backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-850 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/40 border border-orange-500/20 text-xs font-semibold tracking-wider uppercase text-orange-200">
            <Music className="w-3.5 h-3.5 text-orange-300" />
            <span>नामसंकीर्तन आणि टाळ ताल</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-amber-100">
            विठ्ठल भजनी अभंग केंद्र
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-orange-100/90 leading-relaxed font-sans font-medium">
            Read details, sing along with proper lyrics, understand philosophical meanings, and immerse in a traditional mandir space with our background Tanpura generator.
          </p>
        </div>
      </section>

      {/* Main Interactive Space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left column: Browse & Chords settings */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Tanpura drone panel */}
          <div className="bg-white border border-orange-200 rounded-3xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-700 uppercase tracking-widest flex items-center gap-2">
                <Sliders className="w-4 h-4 animate-spin-slow text-orange-600" />
                <span>Tanpura Meditation Drone</span>
              </span>
              <span className={`h-2 w-2 rounded-full ${isDronePlaying ? 'bg-emerald-500 animate-ping' : 'bg-slate-300'}`} />
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {isDronePlaying ? '🕉️ Spiritual Chords Active' : '🔇 Play Ashram Drone Sound'}
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                We use the Web Audio API to synthesize a pure traditional Tampura chord sequence (Sa-Pa scale) directly inside your card chip. Play it in the background while chanting to experience true Alandi temple resonance.
              </p>
            </div>

            <button
              onClick={handleToggleDrone}
              className={`w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 border shadow-sm cursor-pointer ${
                isDronePlaying 
                  ? 'bg-orange-650 border-orange-650 text-white hover:bg-orange-700' 
                  : 'bg-white border-orange-200 text-orange-600 hover:bg-orange-50'
              }`}
            >
              {isDronePlaying ? (
                <>
                  <Pause className="w-4.5 h-4.5" />
                  <span>Mute Sound Drone</span>
                </>
              ) : (
                <>
                  <Play className="w-4.5 h-4.5 text-orange-600 animate-pulse" />
                  <span>Start Meditative Tanpura</span>
                </>
              )}
            </button>

            {/* Audio configuration sliders */}
            {isDronePlaying && (
              <div className="pt-3.5 border-t border-slate-100 space-y-3.5 animate-slide-in-up">
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase">
                  <span>Volume level</span>
                  <span className="font-mono text-slate-800">{Math.round(droneVolume * 100)}%</span>
                </div>
                <div className="relative flex items-center">
                  <Volume2 className="w-4 h-4 text-orange-500 mr-2.5 shrink-0" />
                  <input 
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={droneVolume}
                    onChange={(e) => setDroneVolume(parseFloat(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Abhang list with search */}
          <div className="bg-white rounded-3xl border border-amber-100 p-5 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <Search className="w-4 h-4 text-orange-600" />
              <span>Browse Abhangs (अभंग यादी)</span>
            </h3>
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Filter by Sant or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-orange-600 focus:border-orange-600 focus:bg-white"
            />

            {/* Abhang Buttons */}
            <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
              {filteredBhajans.map((b) => {
                const isSelected = b.id === selectedBhajanId;
                const liked = likes.includes(b.id);
                return (
                  <button
                    key={b.id}
                    onClick={() => {
                      setSelectedBhajanId(b.id);
                      setActiveTab('lyrics');
                    }}
                    className={`w-full text-left p-3 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${
                      isSelected
                        ? 'bg-amber-500/10 border-orange-500/20 text-orange-950 font-bold'
                        : 'border-slate-50 bg-slate-50/50 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <div className="space-y-0.5 truncate pr-2">
                      <span className="truncate block font-semibold text-slate-900 leading-snug">{b.title}</span>
                      <span className="text-[10px] text-orange-700 block font-normal">{b.saint}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {liked && <Star className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />}
                      <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-orange-600' : 'text-slate-300'}`} />
                    </div>
                  </button>
                );
              })}
              {filteredBhajans.length === 0 && (
                <p className="text-xs text-slate-400 italic text-center py-6">No matching chants found.</p>
              )}
            </div>
          </div>

        </div>

        {/* Right column: Primary Lyrics board */}
        <div className="lg:col-span-8 animate-fade-in">
          
          <div className="bg-white rounded-3xl border border-amber-100 shadow-xs overflow-hidden flex flex-col min-h-[500px]">
            
            {/* Lyrics Header Banner */}
            <div className="p-6 bg-amber-500/5 border-b border-amber-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[9px] uppercase font-bold text-orange-800 tracking-widest pl-0.2 block">
                  {currentBhajan.saint} अभंगवाणी
                </span>
                <h2 className="text-xl font-bold text-slate-900 font-display">
                  {currentBhajan.title}
                </h2>
              </div>

              {/* Action nodes */}
              <div className="flex gap-2 shrink-0">
                <button 
                  onClick={() => toggleLike(currentBhajan.id)}
                  className={`p-2 rounded-xl flex items-center justify-center cursor-pointer transition-colors border ${
                    likes.includes(currentBhajan.id) 
                      ? 'bg-rose-50 border-rose-100 text-rose-500' 
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-400 hover:text-rose-500'
                  }`}
                  title={likes.includes(currentBhajan.id) ? "Liked" : "Like this abhanga"}
                >
                  <Heart className={`w-4 h-4 ${likes.includes(currentBhajan.id) ? 'fill-rose-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Quick specifications line */}
            <div className="grid grid-cols-3 text-center border-b border-slate-100 text-[11px] py-3.5 text-slate-500 bg-slate-50/50 font-medium">
              <div>
                <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wider">रचयिता (Scribe)</span>
                <strong className="text-slate-700">{currentBhajan.saint.split(' ')[1] || currentBhajan.saint}</strong>
              </div>
              <div className="border-x border-slate-200/60">
                <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wider">राग (Melody)</span>
                <strong className="text-slate-700">{currentBhajan.rag}</strong>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wider">ताल (Beat cycle)</span>
                <strong className="text-slate-700">{currentBhajan.tall}</strong>
              </div>
            </div>

            {/* Sub-view Content Tabs */}
            <div className="flex border-b border-slate-100 text-xs">
              <button
                onClick={() => setActiveTab('lyrics')}
                className={`flex-1 py-3 text-center font-bold tracking-wide border-b-2 transition-all ${
                  activeTab === 'lyrics' 
                    ? 'border-orange-600 text-orange-950 bg-amber-500/5' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50/30'
                }`}
              >
                अभंग संहिते (Marathi Lyrics)
              </button>
              <button
                onClick={() => setActiveTab('translation')}
                className={`flex-1 py-3 text-center font-bold tracking-wide border-b-2 transition-all ${
                  activeTab === 'translation' 
                    ? 'border-orange-600 text-orange-950 bg-amber-500/5' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50/30'
                }`}
              >
                English Meaning
              </button>
            </div>

            {/* Inner text area container */}
            <div className="p-8 flex-grow flex items-center justify-center bg-[#fdfdfc]/50">
              
              {activeTab === 'lyrics' && (
                <div className="text-center space-y-6 text-md sm:text-lg font-bold font-sans text-orange-950 leading-loose py-4 tracking-wide max-w-xl animate-fade-in whitespace-pre-line">
                  {currentBhajan.lyrics}
                </div>
              )}

              {activeTab === 'translation' && (
                <div className="text-left space-y-4 max-w-xl text-xs sm:text-sm animate-fade-in leading-relaxed font-sans text-slate-650 p-6 bg-[#faf9f5] border border-amber-100 rounded-3xl">
                  <div className="flex gap-2 text-orange-850 font-bold font-display uppercase tracking-widest text-[10px] items-center mb-1">
                    <Sparkles className="w-4 h-4 text-orange-650 animate-pulse" />
                    <span>LITERAL ENGLISH TRANSLATION</span>
                  </div>
                  <p className="italic text-slate-650 font-display">
                    {currentBhajan.translation}
                  </p>
                </div>
              )}

            </div>

            {/* Shared Bhajani Legend Note */}
            <div className="p-5 bg-slate-50 border-t border-slate-100/80 text-[10px] sm:text-xs text-slate-400 flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-slate-350 shrink-0" />
              <span>
                <strong>Traditional accompaniment context:</strong> These songs are traditionally sung by throwing hands up with dindi flags, continuous high pitch taal cymbals and micro improvising on the Pakhavaj drum.
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
