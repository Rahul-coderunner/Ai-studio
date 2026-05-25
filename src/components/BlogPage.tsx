import React, { useState } from 'react';
import { BlogPost, BlogCategory } from '../types';
import { Search, Calendar, Clock, ArrowRight, X, Sparkles, BookOpen, User } from 'lucide-react';

interface BlogPageProps {
  initialBlogs: BlogPost[];
}

export default function BlogPage({ initialBlogs }: BlogPageProps) {
  const [blogs] = useState<BlogPost[]>(initialBlogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const categories: (BlogCategory | 'All')[] = ['All', 'Career Growth', 'Industry Trends', 'Success Stories', 'Tips'];

  // Filtering Logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredBlog = blogs.find(b => b.isFeatured) || blogs[0];
  const regularBlogs = filteredBlogs.filter(b => b.id !== featuredBlog.id);

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-800">
      
      {/* Page Header Banner */}
      <section className="bg-brand-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="max-w-4xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full text-xs font-semibold tracking-wider text-brand-secondary">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
            <span>Curated Business Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4.5xl font-extrabold font-display tracking-tight leading-tight">
            WeConnect Industry Insights & Resource Labs
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300">
            Strategic advice, actionable negotiations hacks, and career blueprint logs penned by veteran industry experts.
          </p>
        </div>
      </section>

      {/* Grid Content with Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Left Column: Filter Sidebar & Search */}
        <div className="space-y-8 lg:sticky lg:top-24 h-fit">
          
          {/* Search Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-800">Search Resources</h3>
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Negotiations, PM, QA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
              />
            </div>
          </div>

          {/* Categories Filter Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-800">Topics & Categories</h3>
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-100 text-brand-primary font-bold border-l-3 border-brand-secondary'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Popular articles panel */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-800">Trending Reads</h3>
            <ul className="space-y-4 text-xs">
              {blogs.slice(0, 3).map((article) => (
                <li key={article.id} className="group cursor-pointer" onClick={() => setSelectedArticle(article)}>
                  <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider block mb-0.5">
                    {article.category}
                  </span>
                  <p className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors leading-snug">
                    {article.title}
                  </p>
                  <span className="text-[10px] text-slate-400 block mt-1">{article.date}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right Column: Featured article & Grid of matches */}
        <div className="lg:col-span-3 space-y-12">
          
          {/* Show Featured Article only if search are empty and selected tag is All */}
          {searchQuery === '' && selectedCategory === 'All' && featuredBlog && (
            <div 
              className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-lg transition-all grid grid-cols-1 md:grid-cols-2 group cursor-pointer"
              onClick={() => setSelectedArticle(featuredBlog)}
            >
              <div className="h-64 md:h-full relative overflow-hidden bg-slate-100">
                <span className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-brand-accent text-white text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1 shadow-md">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Featured Insight</span>
                </span>
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3.5">
                  <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest">{featuredBlog.category}</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-display leading-tight text-slate-800 group-hover:text-brand-primary transition-colors">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[11px] text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-slate-600">By {featuredBlog.author}</span>
                    <span>•</span>
                    <span>{featuredBlog.readTime}</span>
                  </div>
                  <span className="flex items-center gap-1 font-bold text-brand-primary group-hover:gap-1.5 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Regular Lists & Cards */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2.5">
              {searchQuery || selectedCategory !== 'All' ? 'Matched Resources' : 'Recent Curricula Releases'}
            </h3>

            {filteredBlogs.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8">
                <p className="text-slate-500 font-medium">No resource article matches your search parameters. Try using simpler tags!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* De-duplicate the featured one if showing raw catalog */}
                {(searchQuery !== '' || selectedCategory !== 'All' ? filteredBlogs : regularBlogs).map((blog) => (
                  <div 
                    key={blog.id}
                    onClick={() => setSelectedArticle(blog)}
                    className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all h-full flex flex-col cursor-pointer group"
                  >
                    <div className="h-44 overflow-hidden relative bg-slate-100 shrink-0">
                      <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 rounded bg-white/95 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                        {blog.category}
                      </span>
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1 space-y-3.5">
                      <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-4 border-t border-slate-100/70 mt-auto">
                        <span className="font-medium text-slate-600">By {blog.author}</span>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 shrink-0" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Static Inline Newsletter CTA between resources view */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 text-center relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
            <div className="relative z-10 space-y-4 max-w-xl mx-auto">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-secondary">Career Toolkit Updates</span>
              <h4 className="text-xl sm:text-2xl font-extrabold font-display leading-tight">Join WeConnect Insights Club</h4>
              <p className="text-xs text-slate-400">
                10,000+ ambitious Indian developers and agile directors receive our weekly strategy guide on negotiating promotions, transitioning roles, and drafting system docs.
              </p>
              
              <div className="pt-2">
                <button 
                  onClick={() => alert('Please enroll via our sub newsletter prompts!')}
                  className="px-6 py-3 bg-brand-secondary text-slate-950 text-xs font-bold rounded-xl hover:bg-brand-secondary/90 transition-all shadow-md"
                >
                  Join Insights Club Now & Get Checklist PDF
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Immersive Article Reading Overlay Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-up-fade">
            
            {/* Close */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 z-20 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-50 rounded-full"
              title="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner block inside reader */}
            <div className="relative h-60 bg-slate-900 text-white flex items-end p-8 sm:p-10">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-24"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/20" />
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] tracking-wider font-bold uppercase bg-brand-secondary text-slate-900 px-3 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
                <h2 className="text-xl sm:text-2.5xl font-extrabold font-display leading-tight">{selectedArticle.title}</h2>
              </div>
            </div>

            {/* Article stats row */}
            <div className="px-8 sm:px-10 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-slate-400" />
                <span>Written by: <strong className="text-slate-700">{selectedArticle.author}</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {selectedArticle.readTime}
                </span>
              </div>
            </div>

            {/* Render Article markdown-like copy cleanly */}
            <div className="p-8 sm:p-10 space-y-6">
              
              <div className="prose prose-sm font-sans max-w-none text-slate-600 space-y-4">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  
                  // Simple mock header parse
                  if (trimmed.startsWith('###')) {
                    return <h3 key={index} className="text-base font-bold text-slate-800 tracking-tight pt-3">{trimmed.replace('###', '').trim()}</h3>;
                  }
                  if (trimmed.startsWith('##')) {
                    return <h2 key={index} className="text-lg font-extrabold text-slate-900 tracking-tight pt-4 border-b border-slate-100 pb-1">{trimmed.replace('##', '').trim()}</h2>;
                  }
                  if (trimmed.startsWith('*')) {
                    return (
                      <ul key={index} className="list-disc pl-5 space-y-1 text-xs leading-relaxed text-slate-500">
                        {trimmed.split('\n').map((li, liIdx) => (
                          <li key={liIdx}>{li.replace('*', '').trim()}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={index} className="text-xs sm:text-sm leading-relaxed text-slate-650">{trimmed}</p>;
                })}
              </div>

              {/* Close CTAs */}
              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 bg-slate-100 text-slate-800 text-xs font-semibold rounded-xl hover:bg-slate-200"
                >
                  Finished Reading
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
