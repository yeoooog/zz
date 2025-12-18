
import { Contest, Category, WinnerWork, CommunityPost, RoadmapItem } from '../types';

export const SAMPLE_CONTESTS: Contest[] = [
  {
    id: 1,
    title: "2025 AI 퓨처 해커톤: Next Generation",
    host: "Global Tech Lab",
    category: Category.IT_SW,
    prize: "총 상금 1억원",
    deadline: "2025-03-20",
    dDay: 45,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: 2,
    title: "제 12회 K-디자인 브랜딩 어워드",
    host: "한국디자인진흥원",
    category: Category.DESIGN,
    prize: "대상 2,000만원",
    deadline: "2025-04-15",
    dDay: 72,
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: 3,
    title: "2025 MZ 마케팅 전략 기획전",
    host: "Trend Leaders",
    category: Category.PLANNING,
    prize: "정규직 채용 기회",
    deadline: "2025-02-28",
    dDay: 25,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: 4,
    title: "숏폼 크리에이티브 영상 공모전",
    host: "Media Works",
    category: Category.DESIGN,
    prize: "아이패드 프로 + 1,000만원",
    deadline: "2025-03-10",
    dDay: 35,
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "대학생 IT 서포터즈 7기 모집",
    host: "Future Cloud",
    category: Category.EXTRACURRICULAR,
    prize: "활동비 200만원 보조",
    deadline: "2025-02-15",
    dDay: 12,
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  }
];

export const WINNERS_DATA: WinnerWork[] = [
  {
    id: 1,
    title: "Eco-Smart City UI/UX",
    contestName: "2024 공공디자인 공모전",
    winnerName: "팀 그린에코",
    rank: "대상",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Zero-Waste Branding",
    contestName: "제 11회 디자인 어워드",
    winnerName: "김지우",
    rank: "금상",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "AI Mental Care App",
    contestName: "미래 기술 아이디어전",
    winnerName: "이지훈",
    rank: "은상",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

export const COMMUNITY_DATA: CommunityPost[] = [
  {
    id: 1,
    type: 'interview',
    title: "비전공자가 대기업 해커톤에서 우승한 비결",
    author: "박상준 (2024 우승자)",
    tag: "인터뷰",
    content: "팀워크와 문제 정의 단계가 가장 중요했습니다. 특히 기술보다는 실현 가능성에 집중했죠.",
    date: "2025.01.10",
    avatarUrl: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    type: 'review',
    title: "IT 서포터즈 6기 수료 후기: 성장의 지름길",
    author: "최예린",
    tag: "서포터즈 후기",
    content: "실무진 멘토링이 정말 큰 도움이 되었어요! 실제 클라우드 환경을 다뤄본 게 큰 자산입니다.",
    date: "2025.01.05",
    avatarUrl: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    type: 'interview',
    title: "디자인 공모전, 폰트 하나로 당락이 결정된다?",
    author: "강다희 (심사위원)",
    tag: "전문가 조언",
    content: "시각적 밸런스와 레이아웃의 디테일이 수상의 핵심입니다. 작은 차이가 명품을 만들죠.",
    date: "2025.01.12",
    avatarUrl: "https://i.pravatar.cc/150?u=3"
  }
];

export const ROADMAP_DATA: RoadmapItem[] = [
  { month: '02', title: 'Season Opening', desc: '대규모 IT 서포터즈 및 기획 공모전 집중 기간', color: '#007BFF' },
  { month: '03', title: 'Tech Hackathons', desc: '상반기 메이저 글로벌 해커톤 시리즈 시작', color: '#22d3ee' },
  { month: '05', title: 'Design Awards', desc: 'K-디자인 및 브랜딩 어워드 출품 마감', color: '#6366f1' },
  { month: '07', title: 'Summer Challenge', desc: '방학 집중 대외활동 및 실무 인턴십 연계 공모', color: '#007BFF' }
];
