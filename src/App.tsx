import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Search, Bell, Trophy, ExternalLink, Calendar, LayoutGrid, Zap, Filter } from 'lucide-react';

export default function App() {
  const contests = [
    { id: 1, title: "AI 서비스 아이디어 공모전", host: "구글코리아", dDay: "D-15", prize: "1,000만원", category: "IT/SW", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400" },
    { id: 2, title: "캐릭터 디자인 어워즈", host: "라인프렌즈", dDay: "D-7", prize: "500만원", category: "디자인", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" },
    { id: 3, title: "문화 마케팅 전략 공모전", host: "문체부", dDay: "D-21", prize: "300만원", category: "기획", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400" },
    { id: 4, title: "에코 시티 공공디자인", host: "서울시청", dDay: "D-12", prize: "700만원", category: "디자인", img: "https://images.unsplash.com/photo-1449156059586-7620ad1b927b?w=400" },
  ];

  useEffect(() => {
    // 1. 초기 상태 설정: 애니메이션 전에는 살짝 아래에 있고 투명하게
    gsap.set(".fade-in", { opacity: 0, y: 30 });

    // 2. 애니메이션 실행: 위로 올라오면서 선명해짐 (끝난 뒤 상태 유지)
    gsap.to(".fade-in", { 
      opacity: 1, 
      y: 0, 
      stagger: 0.2, 
      duration: 1, 
      ease: "power4.out",
      delay: 0.5 // 화면 로딩 후 자연스럽게 시작
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white neon-gradient pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-dark/50 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <LayoutGrid size={22} className="text-[#00E0FF]" />
          <span className="text-lg font-black tracking-tighter uppercase">Challenge Hub</span>
        </div>
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
          {['Dashboard', 'Discover', 'Community'].map((item, idx) => (
            <button key={item} className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${idx === 0 ? 'bg-[#00E0FF] text-black' : 'text-slate-400 hover:text-white'}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Search size={18} className="text-slate-400 cursor-pointer" />
          <div className="w-10 h-10 bg-gradient-to-tr from-[#00E0FF] to-blue-400 rounded-2xl flex items-center justify-center">
            <User size={20} className="text-black" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 container mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-20 text-center fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full mb-6 text-xs font-extrabold text-[#00E0FF]">
            <Zap size={12} fill="currentColor"/> LIVE UPDATES
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
            Find Your Next <br/><span className="text-[#00E0FF]">Big Challenge.</span>
          </h1>
        </div>

        {/* Dashboard Header */}
        <div className="flex justify-between items-end mb-10 fade-in border-b border-white/5 pb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">🔥 인기 공모전</h2>
            <p className="text-slate-500 text-sm">현재 가장 주목받는 기회들입니다</p>
          </div>
          <button className="px-5 py-2.5 bg-white/5 rounded-xl text-sm font-bold border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all">
            <Filter size={16}/> Filter
          </button>
        </div>

        {/* Contest Grid - 이 부분이 이제 사라지지 않습니다 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contests.map((item) => (
            <div key={item.id} className="fade-in group bg-[#121212] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#00E0FF]/40 transition-all duration-500 shadow-xl">
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-black text-[#00E0FF] border border-[#00E0FF]/20 uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-7">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1.5 text-rose-500 font-black">
                    <Calendar size={14}/> <span className="text-xs">{item.dDay}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">{item.host}</span>
                </div>
                <h3 className="text-lg font-bold mb-6 line-clamp-2 leading-tight group-hover:text-[#00E0FF] transition-colors">{item.title}</h3>
                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-yellow-400" />
                    <span className="text-sm font-black">{item.prize}</span>
                  </div>
                  <button className="p-2.5 bg-white/5 rounded-xl group-hover:bg-[#00E0FF] group-hover:text-black transition-all">
                    <ExternalLink size={16}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// 아이콘을 위한 User 컴포넌트 추가
function User({ size, className }: { size: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
