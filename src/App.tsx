import './index.css'; // 이 줄이 있어야 디자인이 입혀집니다!
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Search, User, Calendar, Trophy, ExternalLink } from 'lucide-react';

// --- 하위 컴포넌트들을 여기에 다 합쳤습니다 (폴더 필요 없음) ---
const Header = () => (
  <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
    <div className="text-2xl font-bold tracking-tighter text-[#007BFF]">CHALLENGE HUB</div>
    <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
      {['전체', '디자인', '기획', 'IT/SW'].map((item) => (
        <a key={item} href="#" className="hover:text-[#007BFF] transition-colors">{item}</a>
      ))}
    </nav>
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-white/5 rounded-full"><Search size={20} /></button>
      <button className="p-2 bg-[#007BFF] rounded-full text-white"><User size={20} /></button>
    </div>
  </header>
);

const ContestCard = ({ item }) => (
  <div className="contest-card group bg-white/5 rounded-3xl overflow-hidden border border-white/10 transition-all hover:border-[#007BFF]/50">
    <div className="aspect-[4/3] overflow-hidden">
      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs text-rose-500 font-bold">{item.dDay}</span>
        <span className="text-xs text-slate-500">{item.host}</span>
      </div>
      <h4 className="text-lg font-bold mb-4 line-clamp-1 group-hover:text-[#007BFF]">{item.title}</h4>
      <div className="flex items-center justify-between border-t border-white/10 mt-2 pt-2">
        <span className="text-sm font-medium flex items-center gap-1 text-slate-300"><Trophy size={14}/> {item.prize}</span>
        <button className="text-[#007BFF]"><ExternalLink size={18}/></button>
      </div>
    </div>
  </div>
);

// --- 메인 페이지 ---
export default function App() {
  const contests = [
    { id: 1, title: "AI 서비스 아이디어 공모전", host: "구글", dDay: "D-15", prize: "1,000만원", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400" },
    { id: 2, title: "캐릭터 디자인 어워즈", host: "라인", dDay: "D-7", prize: "500만원", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" },
    { id: 3, title: "문화 마케팅 전략 공모전", host: "문체부", dDay: "D-21", prize: "300만원", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400" },
    { id: 4, title: "에코 시티 공공디자인", host: "서울시", dDay: "D-12", prize: "700만원", img: "https://images.unsplash.com/photo-1449156059586-7620ad1b927b?w=400" },
  ];

  useEffect(() => {
    gsap.to(".hero-card", { y: -20, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut", stagger: 0.3 });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">당신의 도전을 <span className="text-[#007BFF]">현실</span>로.</h1>
        <div className="flex justify-center gap-6 mt-10">
          {[1, 2, 3].map(i => (
            <div key={i} className="hero-card w-48 h-60 bg-white/10 rounded-2xl border border-white/20"></div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contests.map(item => <ContestCard key={item.id} item={item} />)}
      </section>
      <footer className="py-10 text-center text-slate-500 border-t border-white/10 mt-20">
        © 2025 Challenge Hub.
      </footer>
    </div>
  );
}
