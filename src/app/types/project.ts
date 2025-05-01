// src/app/types/project.ts
import { PortableTextBlock } from '@portabletext/types';

export interface SanityAsset {
  _id: string;
  url: string;
  _type: 'sanity.imageAsset' | 'sanity.fileAsset';
}

export interface VideoAsset {
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface ExpandedVideoAsset {
  asset: SanityAsset;
}

// Base project interface with reference to videos
export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  body?: PortableTextBlock[];
  mobileVideo: VideoAsset;
  desktopVideo: VideoAsset;
  link: string;
  githubLink?: string;
  technologies: string[];
  features?: string[];
  challenges?: string[];
  screenshots?: Array<{
    _key: string;
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
    caption?: string;
  }>;
}

// For the project slider that needs direct URLs
export interface ProjectWithVideoUrls extends Omit<Project, 'mobileVideo' | 'desktopVideo'> {
  mobileVideo: string;
  desktopVideo: string;
}

// For the project detail page with expanded assets
export interface FetchedProject extends Omit<Project, 'mobileVideo' | 'desktopVideo'> {
  mobileVideo: ExpandedVideoAsset;
  desktopVideo: ExpandedVideoAsset;
}