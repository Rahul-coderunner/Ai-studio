export type CourseCategory = 'Technical' | 'Soft Skills' | 'Leadership';

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  syllabus: string[];
  outcomes: string[];
  price: number; // in INR
  rating: number;
  reviewsCount: number;
  image: string;
  instructorName: string;
  instructorRole: string;
}

export type BlogCategory = 'Career Growth' | 'Industry Trends' | 'Success Stories' | 'Tips';

export interface BlogPost {
  id: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  content: string; // Markdown supported
  date: string;
  readTime: string;
  author: string;
  image: string;
  isFeatured?: boolean;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  topic: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g., "11:00 AM - 11:30 AM"
  status: 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}
