// F:\hamza\portfolio\src\app\types\technology.ts
import { PortableTextBlock } from '@portabletext/types';

export interface Technology {
  _id: string
  name: string
  slug: {
    current: string
  }
  description: string
  logo?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  category: string
  aboutContent: PortableTextBlock[] // Replaced any[] with proper PortableText type
  whyWeUse: string[]
  experienceLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  projectsCompleted: number
  preferredFor: string[]
}

// Add this interface for related projects
export interface RelatedProject {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  mainImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
}