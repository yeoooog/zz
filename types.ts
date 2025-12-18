
export enum Category {
  ALL = '전체',
  DESIGN = '디자인',
  PLANNING = '기획',
  IT_SW = 'IT/SW',
  EXTRACURRICULAR = '대외활동',
  WINNER = '수상작',
  COMMUNITY = '커뮤니티',
  ROADMAP = '로드맵',
  PERKS = '혜택'
}

export interface Contest {
  id: number;
  title: string;
  host: string;
  category: Category;
  prize: string;
  deadline: string;
  dDay: number;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface WinnerWork {
  id: number;
  title: string;
  contestName: string;
  winnerName: string;
  imageUrl: string;
  rank: string;
}

export interface CommunityPost {
  id: number;
  type: 'interview' | 'review';
  title: string;
  author: string;
  tag: string;
  content: string;
  date: string;
  avatarUrl: string;
}

export interface RoadmapItem {
  month: string;
  title: string;
  desc: string;
  color: string;
}
