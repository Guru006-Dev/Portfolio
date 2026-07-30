import React from 'react';
import { contentCreation } from '../data/portfolioData';
import TiltCard from './TiltCard';

const categoryIcons = [
  // Distributed Systems Icon (Lightning / Distributed Node)
  <svg key="distributed" className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Zero-Knowledge Security Icon (Encrypted Shield / Lock)
  <svg key="security" className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
  // Applied AI & NLP Icon (Neural Synapse / AI Brain)
  <svg key="ai" className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  // Testing & Reliability Icon (Security Check Shield)
  <svg key="testing" className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
];

const CreatorCard = ({ category, index }) => (
  <TiltCard 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 group flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 transition-all duration-300">
          {categoryIcons[index] || categoryIcons[0]}
        </div>
        <span className="text-white/30 text-xs font-mono font-bold tracking-widest uppercase py-1 px-2 border border-white/5 rounded-full">
          {category.stats}
        </span>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors">
        {category.title}
      </h3>
      <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
        {category.description}
      </p>
    </div>
  </TiltCard>
);

const ContentCreator = () => {
  return (
    <section id="creator" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            {contentCreation.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {contentCreation.heading}
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            {contentCreation.description}
          </p>
        </div>

        {/* Content Creation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contentCreation.categories.map((category, index) => (
            <CreatorCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContentCreator;
