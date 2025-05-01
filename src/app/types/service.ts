// F:\hamza\portfolio\src\app\types\service.ts
import { PortableTextBlock } from '@portabletext/types';

export interface Service {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  description: string
  content: PortableTextBlock[] // Replaced any[] with proper PortableText type
  image?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  features?: string[]
  technologies?: Array<{
    _ref: string
    _type: 'reference'
    _key: string
  }>
  priceRange?: 'budget' | 'midrange' | 'premium' | 'custom'
}

// Expanded version for queries that populate references
export interface PopulatedService extends Omit<Service, 'technologies'> {
  technologies?: {
    _id: string
    name: string
    slug: {
      current: string
    }
    logo?: {
      asset?: {
        url?: string
      }
    }
    category: string
  }[]
}

// Add this interface for the related services type
export interface RelatedService {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  image?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
}