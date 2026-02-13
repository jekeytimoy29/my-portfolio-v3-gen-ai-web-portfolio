/**
 * Portfolio Configuration
 *
 * Edit this file to customize your portfolio content.
 * All sections of the website pull data from this single file.
 */

// ============================================
// PERSONAL PROFILE
// ============================================
export const profile = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  subtitle: 'Building modern web applications with passion',
  bio: 'I am a passionate Full Stack Developer with expertise in building scalable web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences backed by robust server-side solutions.',
  email: 'your.email@example.com',
  location: 'City, Country',
  avatar: '/avatar-placeholder.jpg',
  resumeUrl: '/resume.pdf',
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = [
  {
    platform: 'github' as const,
    url: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    platform: 'linkedin' as const,
    url: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    platform: 'twitter' as const,
    url: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
  {
    platform: 'email' as const,
    url: 'mailto:your.email@example.com',
    label: 'Email',
  },
];

// ============================================
// WORK EXPERIENCE
// ============================================
export const experiences = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    role: 'Senior Full Stack Developer',
    location: 'San Francisco, CA (Remote)',
    startDate: '2022-01',
    endDate: 'Present',
    description: [
      'Led development of microservices architecture serving 1M+ daily active users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored team of 5 junior developers and conducted code reviews',
      'Collaborated with product team to define technical requirements and roadmap',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: '2',
    company: 'Startup Labs',
    role: 'Full Stack Developer',
    location: 'New York, NY',
    startDate: '2020-03',
    endDate: '2021-12',
    description: [
      'Built customer-facing dashboard from scratch using React and Redux',
      'Developed RESTful APIs handling 10K+ requests per minute',
      'Integrated third-party payment systems and analytics tools',
      'Reduced page load time by 40% through performance optimization',
    ],
    technologies: ['React', 'Redux', 'Express.js', 'MongoDB', 'Redis', 'GCP'],
  },
  {
    id: '3',
    company: 'Digital Agency Co.',
    role: 'Frontend Developer',
    location: 'Austin, TX',
    startDate: '2018-06',
    endDate: '2020-02',
    description: [
      'Developed responsive web applications for enterprise clients',
      'Created reusable component library used across 10+ projects',
      'Implemented accessibility standards (WCAG 2.1) across all projects',
      'Collaborated with UX designers to implement pixel-perfect designs',
    ],
    technologies: ['JavaScript', 'Vue.js', 'SCSS', 'Webpack', 'Jest'],
  },
];

// ============================================
// SKILLS
// ============================================
export const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 5 as const },
      { name: 'TypeScript', level: 5 as const },
      { name: 'Next.js', level: 4 as const },
      { name: 'Vue.js', level: 4 as const },
      { name: 'Tailwind CSS', level: 5 as const },
      { name: 'HTML/CSS', level: 5 as const },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 5 as const },
      { name: 'NestJS', level: 4 as const },
      { name: 'Express.js', level: 5 as const },
      { name: 'Python', level: 4 as const },
      { name: 'GraphQL', level: 4 as const },
      { name: 'REST APIs', level: 5 as const },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 5 as const },
      { name: 'MongoDB', level: 4 as const },
      { name: 'Redis', level: 4 as const },
      { name: 'MySQL', level: 4 as const },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 4 as const },
      { name: 'AWS', level: 4 as const },
      { name: 'Git', level: 5 as const },
      { name: 'CI/CD', level: 4 as const },
      { name: 'Linux', level: 4 as const },
    ],
  },
  {
    name: 'AI/ML',
    skills: [
      { name: 'LangChain', level: 3 as const },
      { name: 'RAG Systems', level: 3 as const },
      { name: 'OpenAI API', level: 4 as const },
      { name: 'Vector Databases', level: 3 as const },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 5 as const },
      { name: 'Team Leadership', level: 4 as const },
      { name: 'Communication', level: 5 as const },
      { name: 'Agile/Scrum', level: 4 as const },
    ],
  },
];

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    longDescription: 'Built a scalable e-commerce solution handling thousands of daily transactions. Features include real-time inventory management, Stripe payment integration, order tracking, and a comprehensive admin panel for managing products and orders.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    liveUrl: 'https://example-ecommerce.com',
    sourceUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'AI Chat Application',
    description: 'An intelligent chatbot powered by LLMs with RAG capabilities for contextual conversations.',
    longDescription: 'Developed an AI-powered chat application using Claude API with RAG (Retrieval Augmented Generation) for accurate, context-aware responses. Features include document upload, conversation history, and topic filtering.',
    image: '/projects/ai-chat.jpg',
    technologies: ['React', 'NestJS', 'Claude API', 'pgvector', 'PostgreSQL'],
    liveUrl: 'https://example-aichat.com',
    sourceUrl: 'https://github.com/yourusername/ai-chat',
    featured: true,
    category: 'AI/ML',
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'A collaborative project management tool with real-time updates and team workspaces.',
    longDescription: 'Created a Trello-like task management system with drag-and-drop functionality, real-time collaboration using WebSockets, team workspaces, and detailed analytics dashboards.',
    image: '/projects/task-manager.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    liveUrl: 'https://example-tasks.com',
    sourceUrl: 'https://github.com/yourusername/task-manager',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: '4',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with customizable widgets and data visualization.',
    image: '/projects/analytics.jpg',
    technologies: ['React', 'D3.js', 'Node.js', 'ClickHouse', 'Redis'],
    sourceUrl: 'https://github.com/yourusername/analytics',
    featured: false,
    category: 'Data Visualization',
  },
];

// ============================================
// SITE METADATA (for SEO)
// ============================================
export const siteMetadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'Professional portfolio showcasing web development projects and skills',
  siteUrl: 'https://yourportfolio.com',
  ogImage: '/og-image.png',
};
