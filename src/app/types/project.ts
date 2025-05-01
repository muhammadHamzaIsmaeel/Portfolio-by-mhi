// F:\hamza\portfolio\src\app\types\project.ts
import { PortableTextBlock } from '@portabletext/types';

export interface SanityAsset {
  _id: string;
  url: string;
  _type: 'sanity.imageAsset' | 'sanity.fileAsset';
  // Add other asset properties as needed
}

export interface VideoAsset {
  asset: {
    _ref: string;
    _type: 'reference';
    // Add this to indicate it will be expanded
  };
}

export interface ExpandedVideoAsset {
  asset: SanityAsset;
}

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

// This is the type we'll use for our fetched project
export interface FetchedProject extends Omit<Project, 'mobileVideo' | 'desktopVideo'> {
  mobileVideo: ExpandedVideoAsset;
  desktopVideo: ExpandedVideoAsset;
}