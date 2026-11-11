export interface Testimonial {
  id: string;
  author: string;
  avatarText: string;
  rating: number;
  reviewDate: string;
  text: string;
  source: 'Google';
  isLocalGuide?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'category-a' | 'category-b' | 'instructor';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  code: 'A' | 'B';
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  badge: string;
  features: string[];
  whatsappMessage: string;
}
