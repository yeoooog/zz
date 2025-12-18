
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ContestCard from './components/ContestCard';
import WinnersSection from './components/WinnersSection';
import CommunitySection from './components/CommunitySection';
import RoadmapSection from './components/RoadmapSection';
import MembershipSection from './components/MembershipSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { SAMPLE_CONTESTS } from './data/sampleData';
import { Category } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredContests = useMemo(() => 
    SAMPLE_CONTESTS.filter(c => c.isFeatured), 
  []);

  const filteredContests = useMemo(() => {
    return SAMPLE_CONTESTS.filter((contest) => {
      const matchesCategory = activeCategory === Category.ALL || contest.category === activeCategory;
      const matchesSearch = contest.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            contest.host.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavChange = (cat: Category) => {
    if (cat === Category.WINNER) {
      scrollToSection('winners');
    } else if (cat === Category.COMMUNITY) {
      scrollToSection('community');
    } else if (cat === Category.ROADMAP) {
      scrollToSection('roadmap');
    } else if (cat === Category.PERKS) {
      scrollToSection('perks');
    } else {
      setActiveCategory(cat);
      scrollToSection('contest-list');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-[#007BFF] selection:text-white cursor-none">
      <CustomCursor />
      
      <Header 
        activeCategory={activeCategory} 
        onCategoryChange={handleNavChange} 
      />

      <main className="relative z-10">
        <Hero featuredContests={featuredContests} />

        <div className="relative -mt-20 z-20">
          <FilterBar 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <section id="contest-list" className="max-w-7xl mx-auto px-4 pb-32">
            <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
              <div>
                <h2 className="text-4xl font-black text-white tracking-tighter">
                  {activeCategory === Category.ALL ? 'EXPLORE ALL' : activeCategory.toUpperCase()}
                </h2>
                <p className="text-slate-500 font-medium mt-2">당신에게 영감을 줄 2025년의 새로운 도전들을 만나보세요.</p>
              </div>
              <div className="bg-slate-900 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-ping"></span>
                <span className="text-xs font-black text-slate-400 uppercase">{filteredContests.length} Challenges Found</span>
              </div>
            </div>

            {filteredContests.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredContests.map((contest) => (
                  <ContestCard key={contest.id} contest={contest} />
                ))}
              </div>
            ) : (
              <div className="py-40 text-center bg-slate-900/20 backdrop-blur-md rounded-[3rem] border border-dashed border-white/10">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-slate-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tighter">NO RESULTS FOUND</h3>
                <p className="text-slate-500 mt-2 font-medium">검색 결과가 없습니다. 다른 키워드를 입력해보세요.</p>
              </div>
            )}
          </section>

          {/* Core Sections */}
          <RoadmapSection />
          <WinnersSection />
          <MembershipSection />
          <CommunitySection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
