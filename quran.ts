export interface Surah {
  number: number;
  nameArabic: string;
  nameEnglish: string;
  nameTranslation: string;
  revelationType: 'Meccan' | 'Medinan';
  revelationTypeAr: 'مكية' | 'مدنية';
  numberOfAyahs: number;
  juzNumber: number;
  audioDurationSec?: number;
}

export interface Reciter {
  id: string;
  nameArabic: string;
  nameEnglish: string;
  style: string;
  styleAr: string;
  avatarUrl: string;
  serverUrl: string;
  bio?: string;
}

export interface PlayerState {
  isPlaying: boolean;
  currentSurah: Surah | null;
  currentReciter: Reciter | null;
  currentTime: number;
  duration: number;
  playbackRate: number;
  volume: number;
  isLooping: boolean;
}

export type NavTab = 'home' | 'bookmark' | 'reciters' | 'settings';
