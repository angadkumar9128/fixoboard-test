
import { GalleryItem } from '../types/product';

export const initialGalleryItems: GalleryItem[] = [
  {
    id: 'g1',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
    category: 'Application',
    title: { en: 'Modern Modular Kitchen Installation' },
    createdAt: new Date().toISOString(),
    isActive: true
  },
  {
    id: 'g2',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185138a0470?auto=format&fit=crop&q=80&w=800',
    category: 'Product',
    title: { en: 'High Density PVC WPC Ply Boards' },
    createdAt: new Date().toISOString(),
    isActive: true
  },
  {
    id: 'g3',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    category: 'Manufacturing',
    title: { en: 'State-of-the-art Silvassa Factory' },
    createdAt: new Date().toISOString(),
    isActive: true
  },
  {
    id: 'g4',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    category: 'Installation',
    title: { en: 'WPC Solid Door in Residential Project' },
    createdAt: new Date().toISOString(),
    isActive: true
  },
  {
    id: 'g5',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    category: 'Application',
    title: { en: 'Corporate Office Partitioning' },
    createdAt: new Date().toISOString(),
    isActive: true
  },
  {
    id: 'g6',
    imageUrl: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800',
    category: 'Product',
    title: { en: 'PVC Marble Sheet - High Gloss Finish' },
    createdAt: new Date().toISOString(),
    isActive: true
  }
];
