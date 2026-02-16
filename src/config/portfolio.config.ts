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
  name: 'Timothy Jake Flordelis',
  title: 'SW Engineer | Full Stack Developer | Mobile Developer | AI Enthusiast',
  subtitle: 'Building modern applications with passion',
  bio: 'Experienced Software Engineer with more than 18 years in IT, specializing in Full Stack Development for web, mobile, and desktop applications. Skilled in leading development, testing, and implementation, with a strong track record of enhancing functionality, performance, and code quality through reviews, troubleshooting, and optimized solutions. Currently a Senior Developer at Bloomerang through Full Scale Philippines, driving Full Stack Development initiatives. Proficient in C#, .NET, Java, JavaScript, TypeScript, Kotlin, and Python.',
  email: 'jake.flordelis@gmail.com',
  location: 'Cebu City, Philippines',
  avatar: '/avatar-placeholder.jpg',
  resumeUrl: 'https://docs.google.com/document/d/1w-oOItELPBPm_-6EDh699Sy5qmXqlqiG/edit?usp=sharing&ouid=104666018290464652073&rtpof=true&sd=true',
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = [
  {
    platform: 'github' as const,
    url: 'https://github.com/jekeytimoy29',
    label: 'GitHub',
  },
  {
    platform: 'linkedin' as const,
    url: 'https://www.linkedin.com/in/timothy-jake-flordelis/',
    label: 'LinkedIn',
  },
  {
    platform: 'twitter' as const,
    url: 'https://twitter.com/jekeytimoy29',
    label: 'Twitter',
  },
  {
    platform: 'email' as const,
    url: 'mailto:jake.flordelis@gmail.com',
    label: 'Email',
  },
];

// ============================================
// WORK EXPERIENCE
// ============================================
export const experiences = [
  {
    id: '1',
    company: 'FullScale Teams PH, Inc. - assigned to Bloomerang',
    role: 'Senior Full Stack Developer',
    location: 'Cebu City, Philippines (Remote)',
    startDate: '2024-05',
    endDate: 'Present',
    description: [
      'Offshore Development Company that helps businesses build software faster with high-performing engineering teams.',
      'Serves as a Senior Developer with Full Scale, providing offshore software development expertise directly to Bloomerang, a leader in donor management and fundraising solutions for non-profits.',
      'Involves comprehensive development, from crafting user interfaces with React to building robust backend services using both ASP.NET (monolith) and .NET Core and NestJS (microservices). I leverage AWS cloud computing and manage databases like PostgreSQL and MySQL to deliver scalable solutions, often utilizing AI tools such as Claude Code, CoPilot and Gemini to enhance efficiency.',
      'Contributes to the development and launch of several Bloomerang CRM features particularly on Integrated Email Builder and Journey Automation. This is to help in email marketing tools designed for non-profits to create, segment, and send campaigns directly from the donor database.',
      'Provides expert solution and implementation support for CRM integrations, ensuring our clients effectively achieve their fundraising goals. This dynamic environment allows me to blend established architectures with modern cloud technologies to create impactful software.',
    ],
    technologies: ['C# | .Net', 'NestJS', 'React', 'AWS', 'MySQL', 'PostgreSQL', 'Claude Code', 'GitHub CoPilot', 'Docker', 'Kafka', 'Redis', 'BullMQ', 'Honeycomb'],
  },
  {
    id: '2',
    company: 'Maharishi International University',
    role: 'Professional Development | CS Graduate Student Assistant | Lab Monitor',
    location: 'Faifield, Iowa, United States',
    startDate: '2022-11',
    endDate: '2024-04',
    description: [
      'Pursued my Master\'s in Computer Science, specializing in Advanced and Fundamental Programming, including Object-oriented and Functional Programming, Data Structures, Algorithms, and Design Patterns. Additionally, I\'m focused on enhancing my skills in Full-Stack Development, particularly in Cloud Computing, AI, ML, and Microservices Architecture, aiming to stay abreast of technological advancements and make impactful contributions to the tech industry.',
      'Worked part-time as a Graduate Student Assistant for the Cloud Computing course, I provided support to faculty and students, facilitating learning and ensuring the smooth operation of academic activities.',
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'React', 'Node.js', 'Andoid', 'Kotlin', 'MS SQL', 'Data Structures and Algorithms', 'Microservices', 'Event-Driven', 'CQRS', 'Cloud Computing'],
  },
  {
    id: '3',
    company:'',
    role: 'Freelance Software Engineer - Part Time',
    location: 'Cebu City, Philippines (Remote)',
    startDate: '2023-10',
    endDate: '2024-02',
    description: [
      'Dynamic and innovative freelance software engineer with a passion for driving impactful change in software development.',
      'Proficient in AWS Cloud Services, React TS, Angular, Python, Docker, and Cypress.',
      'Collaborates effectively to streamline testing and development processes, delivering high-quality, scalable solutions.',
    ],
    technologies: ['Python | Django | Flask', 'AWS', 'React', 'Cypress', 'PostgreSQL', 'GitLab', 'VS Code'],
  },
  {
    id: '4',
    company: 'Lexmark Research and Development Corp.',
    role: 'Software Engineer | Mobile Developer',
    location: 'Cebu City, Philippines',
    startDate: '2021-08',
    endDate: '2022-10',
    description: [
      'Global leader in imaging and output technology solutions.',
      'Played a pivotal role to development and successful launch of the Lexmark Print Plugin for Android, using Java with traditional Android view layout XML to facilitate seamless integration of partner mobile apps with Lexmark Print technologies, enhancing functionality and user experience.',
      'Contributed to developing and launching of Lexmark Print 3.0 for Android, utilizing Java, Kotlin, Android Jetpack components, and VMWare Airwatch MDM for enhanced functionality and manageability.',
      'Contributed to the launch of Lexmark Print 3.0 for iOS, employing Swift, Objective-C, and RxSwift to empower iOS users with Lexmark\'s mobile printing capabilities.',
      'Designed and tested features while collaborating with mobile developers, testers, and UX engineers.',
      'Performed troubleshooting and problem-solving for critical technology issues including application deployment using CI/CD Tools such as Jenkins, GitHub, Google Playstore Console, and Apple TestFlight.',
      'Reviewed code of other mobile developers using GitHub.',
    ],
    technologies: ['Java', 'Kotlin', 'Swift', 'Android Jetpack', 'RxSwift', 'GitHub', 'Jenkins', 'Android Studio', 'XCode', 'Microsoft Azure', 'VMWare AirWatch MDM'],
  },
  {
    id: '5',
    company: 'NCR (National Cash Register) Cebu Development Center, Inc.',
    role: 'Software Engineer III',
    location: 'Cebu City, Philippines',
    startDate: '2007-09',
    endDate: '2021-05',
    description: [
      'Technology company specializing in transforming, connecting, and running technology platforms.]',
      'Pioneered NCR Remote Attendant Program as a Service (RaaS) and NextGen Mobile RAP (NGMR) for customer interaction management in the Fastlane System, using .Net Framework, Xamarin, HTML, CSS, jQuery, and JavaScript, implementing an Event-Driven Message Queue architecture.',
      'Played a crucial role in NCR solutions, such as FastLane Fusion, Scan Portal, and FastLane Core Application, employing C++, C#, and .Net, which enhanced the retail experience, and improved cost-efficiency.',
      'Contributed to the transition to NCR\'s NextGen User Interface, utilizing WPF and MVVM, and following UI/UX design specs to modernize the NCR Fastlane System.',
      'Contributed to the development and testing of Enterprise Item Security in the NCR Fastlane System, utilizing Java, Spring Framework, SQL Server, Adobe Flex, and FlexMonkey for automation, integrating centralized solutions and enhancing item security in self-checkout environments.',
      'Played a crucial role in developing The POS Emulator, a Java-based tool within the Transaction Broker Software Development Kit (TB SDK) Package, facilitating FastLane Testing and Transaction Broker Development by simulating POS client functionality in both Linux and Windows environments.',
      'Contributed to NCR Enterprise Reporting, a robust web application utilizing Java, Spring Framework, Hibernate, MySQL, JSP, HTML, CSS, JavaScript, JQuery, Apache Tomcat, and JasperReports for clients to efficiently manage and access transaction reports within the NCR FastLane System.',
      'Received Research and Development Award for NCR NextGen RAP and NCR Fastlane Fusion.',
    ],
    technologies: ['Java', 'Adobe Flex', 'C# | .Net', 'C++', 'JavaScript', 'Xamarin', 'jQuery', 'ActiveMQ', 'Visual Studio', 'WPF', 'GitHub', 'Jenkins', 'MFC', 'XML', 'SVN', 'Apache Tomcat', 'Spring', 'Hibernate'],
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
  title: 'Portfolio | Software Engineer',
  description: 'Professional portfolio showcasing development projects and skills',
  siteUrl: 'https://jekeytimoy29.github.io/my-portfolio-v3-gen-ai-web-portfolio/',
  ogImage: '/og-image.png',
};
