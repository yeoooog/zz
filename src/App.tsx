import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Search, User, Trophy, ExternalLink, Calendar } from 'lucide-react';

export default function App() {
  const contests = [
    { id: 1, title: "AI 서비스 아이디어 공모전", host: "구글", dDay: "D-15", prize: "1,000만원", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400" },
    { id: 2, title: "캐릭터 디자인 어워즈", host: "라인", dDay: "D-7", prize: "500만원", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" },
    { id: 3, title: "문화 마케팅 전략 공모전", host: "문체부", dDay: "D-21", prize: "300만원", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400" },
    { id: 4, title: "에코 시티 공공디자인", host: "서울시", dDay: "D-12", prize: "700만원", img: "https://images.unsplash.com/photo-1449156059586-7620ad1b927b?w=400" },
  ];

  useEffect(() => {
    // 히어로 섹션 카드 애니메이션
    gsap.to(".hero-card", { 
      y: -20, 
      duration: 2, 
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut", 
      stagger: 0.3 
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-5 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter text-[#007BFF]">CHALLENGE HUB</div>
        <div className="flex items-center gap-6">
          <Search size={22} className="text-slate-400 cursor-pointer hover:text-white transition-colors" />
          <div className="w-10 h-10 bg-[#007BFF] rounded-full flex items-center justify-center cursor-pointer shadow-lg shadow-[#007BFF]/30">
            <User size={20} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
          당신의 도전을<br />
          <span className="text-[#007BFF]">현실</span>로 만드세요.
        </h1>
        <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
          가장 핫한 공모전 정보를 한눈에 확인하고, 디자인부터 기획까지 당신의 커리어를 한 단계 업그레이드하세요.
        </p>
        
        <div className="flex justify-center gap-6 mb-32">
          {[1, 2, 3].map(i => (
            <div key={i} className="hero-card w-40 h-52 bg-gradient-to-br from-[#007BFF]/20 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm"></div>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-6 pb-32">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold">인기 공모전</h2>
          <button className="text-sm text-[#007BFF] font-semibold hover:underline">전체 보기</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contests.map(item => (
            <div key={item.id} className="group relative bg-white/[0.03] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#007BFF]/30 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-rose-500/10 text-rose-500 text-[10px] font-black rounded-full border border-rose-500/20">{item.dDay}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{item.host}</span>
                </div>
                <h3 className="text-xl font-bold mb-6 line-clamp-2 leading-snug group-hover:text-[#007BFF] transition-colors">{item.title}</h3>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Trophy size={16} className="text-yellow-500" />
                    <span className="text-sm font-bold">{item.prize}</span>
                  </div>
                  <ExternalLink size={20} className="text-slate-600 group-hover:text-[#007BFF] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-sm">
        © 2025 Challenge Hub. All rights reserved.
      </footer>
    </div>
  );
}
