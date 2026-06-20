export type AdmissionCourseCategory = 'Kirtan' | 'Mridanga' | 'Bhajan_Taal' | 'Prasthantrayi';

export interface AdmissionCourse {
  id: string;
  title: string;
  category: AdmissionCourseCategory | string;
  duration: string;
  eligibility?: string;
  description: string;
  syllabus: string[];
  instructor?: string;
  instructorTitle?: string;
  image: string;
  level?: string;
  price?: number;
  rating?: number;
  reviewsCount?: number;
  instructorName?: string;
  instructorRole?: string;
  outcomes?: string[];
}

// For CMS compatibility mapping
export type Course = AdmissionCourse;

// Spiritual insights blog articles
export type BlogCategory = 'Saints' | 'Festival' | 'Pothi' | 'History' | 'Tips' | 'Career Growth' | 'Industry Trends' | 'Success Stories';

export interface BlogPost {
  id: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  isFeatured?: boolean;
}

// Ashram admission interview aligned booking
export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  topic: string; // Course name
  date: string; // appointment day
  timeSlot: string; // hours block
  status: 'confirmed' | 'cancelled';
  createdAt: string;
}

// General office inquiries submitted by pilgrims or volunteers
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface DnyaneshwariVerse {
  id: string;
  verseNumber: string;
  original: string; // Marathi lyrics
  translation: string; // English translation
  meaning: string; // Detailed meaning
}

export interface DnyaneshwariChapter {
  id: number;
  title: string;
  marathiTitle: string;
  totalVerses: number;
  description: string;
  keyTakeaway: string;
  verses: DnyaneshwariVerse[];
}

export interface AbhangBhajan {
  id: string;
  title: string;
  marathiTitle: string;
  saint: string;
  lyrics: string; // Marathi text
  translation: string; // English meaning
  rag: string; // Raga info (e.g. Yaman, Bhairavi, Bhupali)
  tall: string; // Tala info (e.g. Kerwa, Dadra, Bhajani Tala)
  audioPreset: 'harmony' | 'peaceful' | 'chant' | 'ecstasy';
}

export interface DailyRojnishi {
  time: string;
  activity: string;
  marathiActivity: string;
  significance: string;
  icon: string;
}

export interface AdmissionInquiry {
  id: string;
  studentName: string;
  age: number;
  education: string;
  parentName: string;
  email: string;
  phone: string;
  selectedCourseId: string;
  spiritualBackground: string;
  nativePlace: string;
  referenceGuru: string;
  status: 'pending' | 'reviewing' | 'interview_scheduled' | 'admitted';
  createdAt: string;
}

export interface DevotionalThought {
  id: string;
  author: string;
  quote: string;
  marathiQuote: string;
  source: string;
}

export interface EventCalendarItem {
  id: string;
  title: string;
  marathiTitle: string;
  date: string; // e.g. "Ashadhi Ekadashi"
  details: string;
  significance: string;
}
