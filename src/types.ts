export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'njega' | 'organizacija' | 'domacinstvo' | 'podrska';
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  relation: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  aspectRatio: 'aspect-square' | 'aspect-[4/5]' | 'aspect-[16/10]' | 'aspect-[4/3]';
  sizeClass: string; // Tailwind size for masonry
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  serviceInterest: string;
}
