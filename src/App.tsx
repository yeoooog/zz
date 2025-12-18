import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Search, Bell, Trophy, ExternalLink, Calendar, LayoutGrid, Zap } from 'lucide-react';

export default function App() {
  const contests = [
    { id: 1, title: "AI 서비스 아이디어 공모전", host: "구글코리아", dDay: "D-15", prize: "1,000만원", category: "IT/SW", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400" },
    { id: 2, title: "캐릭터 디자인 어워즈", host: "라인프렌즈", dDay: "D-7", prize: "500만원", category: "디자인", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" },
    { id: 3, title: "문화 마케팅 전략 공모전", host: "문체부", dDay: "D-21", prize: "300만원", category: "기획", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400" },
    { id: 4, title: "에코 시티 공공디자인", host: "서울시청", dDay: "D-12", prize: "700만원", category: "디자인", img: "https://images.unsplash.com/photo-1449156059586-7620ad1b927b?w=400" },
  ];

  useEffect(() => {
    // 사진처럼 부드럽게 나타나는 애니메이션
    gsap.from(".fade-in", { opacity: 0, y: 20, stagger: 0.15, duration: 0.8, ease: "power2.out" });
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white neon-gradient">
      {/* 상단 네비게이션 바 */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-dark/50 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <LayoutGrid size={22} className="text-neon" /> {/* 로고 아이콘 변경 */}
          <span className="text-lg font-black tracking-tighter">CHALLENGE HUB</span>
        </div>
        {/* 사진 속 메뉴 스타일 */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
          {['Dashboard', 'Discover', 'Community'].map((item, idx) => (
            <button key={item} className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${idx === 0 ? 'bg-neon text-dark shadow-neon-glow' : 'text-slate-400 hover:text-white'}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="p-2.5 border border-white/10 rounded-xl hover:bg-white/5 cursor-pointer text-slate-400"><Search size={18}/></div>
          <div className="relative p-2.5 border border-white/10 rounded-xl hover:bg-white/5 cursor-pointer text-slate-400">
            <Bell size={18}/><div className="absolute top-2 right-2 w-2 h-2 bg-neon rounded-full shadow-neon-glow"></div>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 영역 */}
      <main className="pt-28 pb-20 container mx-auto px-6">
        {/* 히어로 섹션 */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="fade-in inline-flex items-center gap-2 px-4 py-1.5 bg-neon/10 border border-neon/30 rounded-full mb-6 text-xs font-extrabold text-neon tracking-wider">
            <Zap size={12} fill="currentColor"/> NEW SEASON OPENED
          </div>
          <h1 className="fade-in text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
            Unlock Your <br/><span className="text-neon drop-shadow-[0_0_15px_rgba(0,224,255,0.5)]">Potential.</span>
          </h1>
          <p className="fade-in text-slate-400 text-lg">가장 트렌디한 공모전 아카이브. 당신의 커리어를 빛낼 기회를 발견하세요.</p>
        </div>

        {/* 대시보드 헤더 */}
        <div className="fade-in flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">🔥 실시간 인기 공모전</h2>
          <button className="text-sm font-bold text-neon hover:underline flex items-center gap-1">
            View All <ExternalLink size={14}/>
          </button>
        </div>

        {/* 공모전 카드 그리드 (사진 스타일 적용) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contests.map((item) => (
            <div key={item.id} className="fade-in group bg-card border border-white/5 rounded-[2rem] overflow-hidden hover:border-neon/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,224,255,0.1)]">
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* 카테고리 뱃지 */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-dark/80 backdrop-blur rounded-full text-[10px] font-black text-neon border border-neon/20 uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                {/* D-Day 및 주최사 */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1.5 text-rose-500 font-black">
                    <Calendar size={14}/> <span className="text-xs">{item.dDay}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-bold uppercase">{item.host}</span>
                </div>
                {/* 제목 */}
                <h3 className="text-lg font-bold mb-6 line-clamp-2 leading-tight group-hover:text-neon transition-colors">{item.title}</h3>
                {/* 상금 및 버튼 */}
                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-yellow-400" />
                    <span className="text-sm font-black">{item.prize}</span>
                  </div>
                  <button className="p-2.5 bg-white/5 rounded-xl group-hover:bg-neon group-hover:text-dark transition-all">
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
