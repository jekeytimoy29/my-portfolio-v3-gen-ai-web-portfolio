// Profile types
export interface Profile {
  name: string;
  title: string;
  subtitle?: string;
  bio: string;
  email: string;
  location: string;
  avatar?: string;
  resumeUrl?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website';
  url: string;
  label: string;
}

// Experience types
export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
  logo?: string;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  category?: string;
}

// Skill types
export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Education types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

// Chat types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  isLoading?: boolean;
}

export interface ResumeData {
  name?: string;
  email?: string;
  phone?: string;
  summary?: string;
  experience: WorkExperience[];
  education: Education[];
  skills: string[];
  rawText: string;
}
