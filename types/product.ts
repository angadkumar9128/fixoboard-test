
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  applications: string[];
  features: string[];
  certifications: string[];
  images: string[];
  specifications: Record<string, string>;
  isHero?: boolean;
}

export interface Application {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  recommendedProducts: string[]; // slug references
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: 'Product' | 'Application' | 'Manufacturing' | 'Installation';
  title: {
    en: string;
    hi?: string;
    ta?: string;
  };
  createdAt: string;
  isActive: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: {
    en: string;
    hi?: string;
    ta?: string;
  };
  summary: {
    en: string;
    hi?: string;
    ta?: string;
  };
  content: {
    en: string;
    hi?: string;
    ta?: string;
  };
  category: 'Company' | 'Product' | 'Certification' | 'Event' | 'Press';
  tags: string[];
  featuredImage: string;
  publishDate: string;
  isPublished: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}
