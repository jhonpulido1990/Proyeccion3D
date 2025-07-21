export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  imageAlt: string;
  link: string;
  featured?: boolean;
}

export type ProjectCategory = 'all' | 'product' | 'automotive' | 'medical' | 'architecture';

export interface ProjectTab {
  id: ProjectCategory;
  label: string;
  count?: number;
}

