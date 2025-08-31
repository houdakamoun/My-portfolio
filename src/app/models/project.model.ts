export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  year?: number;
  category?: 'web' | 'mobile' | 'design' | 'other';
  featured?: boolean;
  highlights?: string[];
}
