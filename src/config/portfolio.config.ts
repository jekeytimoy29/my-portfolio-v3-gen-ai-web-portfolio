import ProfilePic from '../images/profile-pic.jpeg'

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
  avatar: ProfilePic,
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
  {
    id: '6',
    company: 'Nozomi Fortune Services, Inc.',
    role: 'R & D Technical Support Staff',
    location: 'Cebu City, Philippines',
    startDate: '2006-02',
    endDate: '2007-08',
    description: [
      'Performed system tests for Lexmark printers.',
      'Verified printer quality and standards while ensuring installation of software driver in operation system.',
     	'Documented results in Excel file and reported issues found.',
      'Contributed to Quality Assurance team during release of several printers.',
    ],
    technologies: ['System Testing', 'Test Planning', 'Windows', 'MacOS'],
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
      { name: 'HTML/CSS', level: 5 as const },
      { name: 'Tailwind CSS', level: 4 as const },
      { name: 'Next.js', level: 3 as const },
      { name: 'Windows Presentation Foundation (WPF)', level: 4 as const },
      { name: 'Adobe Flex', level: 4 as const },
      { name: 'Java Swing', level: 3 as const },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'C# | .Net', level: 5 as const },
      { name: 'Java | Spring', level: 4 as const },
      { name: 'Node.js', level: 5 as const },
      { name: 'NestJS', level: 5 as const },
      { name: 'Express.js', level: 5 as const },
      { name: 'Python | Django | Flask', level: 4 as const },
      { name: 'GraphQL', level: 3 as const },
      { name: 'REST APIs', level: 5 as const },
    ],
  },
  {
    name: 'Software Architecture',
    skills: [
      { name: 'Model View Controller (MVC)', level: 5 as const },
      { name: 'Model View ViewModel (MVVM)', level: 5 as const },
      { name: 'Microservices', level: 5 as const },
      { name: 'Event-Driven Architecture', level: 5 as const },
      { name: 'Command Query Responsibility Segration (CQRS)', level: 3 as const },
      { name: 'Load Balancing | Circuit Breaker', level: 3 as const },
      { name: 'Applied Artificial Intelligence (AI)', level: 3 as const },
    ],
  },
  {
    name: 'Mobile',
    skills: [
      { name: 'Android Java', level: 5 as const },
      { name: 'Android Studio', level: 5 as const },
      { name: 'Kotlin', level: 4 as const },
      { name: 'Swift', level: 3 as const },
      { name: 'XCode', level: 4 as const },
      { name: 'Xamarin', level: 4 as const },
      { name: 'React Native', level: 3 as const },
      { name: 'Flutter', level: 3 as const },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 5 as const },
      { name: 'MongoDB | NoSQL', level: 3 as const },
      { name: 'Redis', level: 3 as const },
      { name: 'MySQL', level: 5 as const },
      { name: 'MS SQL', level: 5 as const },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 4 as const },
      { name: 'AWS', level: 4 as const },
      { name: 'Git', level: 5 as const },
      { name: 'CI/CD', level: 3 as const },
      { name: 'Linux', level: 4 as const },
    ],
  },
  {
    name: 'AI/ML',
    skills: [
      { name: 'Claude Code', level: 4 as const },
      { name: 'GitHub CoPilot', level: 4 as const },
      { name: 'LangChain', level: 2 as const },
      { name: 'RAG Systems', level: 2 as const },
      { name: 'OpenAI API', level: 3 as const },
      { name: 'Vector Databases', level: 2 as const },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 5 as const },
      { name: 'Team Leadership', level: 4 as const },
      { name: 'Communication', level: 4 as const },
      { name: 'Agile/Scrum', level: 5 as const },
      { name: 'Kanban', level: 4 as const },
    ],
  },
];

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    id: '1',
    title: 'AI-Powered Resume-to-Portfolio Website (In Progress...)',
    description: 'A portfolio website enhanced with applied AI that automatically converts resumes into a structured personal website, while also showcasing my professional profile, including work experience, technical skills, and personal projects.',
    longDescription: 'Built a portfolio website enhanced with applied AI that automatically converts resumes into a structured and visually consistent personal website. The platform extracts and organizes key professional information from resumes and presents it alongside a comprehensive portfolio that showcases my work experience, technical skills, and personal projects. This project demonstrates the practical application of AI in automating content transformation while maintaining clarity, structure, and a strong personal branding focus.',
    image: '',
    technologies: ['Claude Code', 'React', 'Tailwind CSS', 'Applied AI', 'PostgreSQL', 'Redis', 'AWS', 'LangChain', 'OpenAI API'],
    liveUrl: 'https://jekeytimoy29.github.io/my-portfolio-v3-gen-ai-web-portfolio/',
    sourceUrl: 'https://github.com/jekeytimoy29/my-portfolio-v3-gen-ai-web-portfolio',
    featured: true,
    category: 'AI/ML',
  },
  {
    id: '2',
    title: 'My Portfolio Hosted in AWS',
    description: 'My Developer Portfolio Website built with Next.js, React, Bootstrap, and hosted in AWS Cloud that helps showcase my work and skills as a Software Engineer.',
    longDescription: '',
    image: '',
    technologies: ['React', 'AWS', 'Next.js', 'Bootstrap', 'GitHub Actions'],
    liveUrl: 'https://jekeytimoy29.github.io/my-portfolio-v2-with-aws/',
    sourceUrl: 'https://github.com/jekeytimoy29/my-portfolio-v2-with-aws',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: '3',
    title: 'Personal Website',
    description: 'Designed personal website hosted on GitHub.io. Implemented client frontend and server backend development. Utilized HTML, CSS, JavaScript, jQuery, Node.js, Express, and EJS.',
    longDescription: '',
    image: '',
    technologies: ['JavaScript', 'HTML/CSS', 'NodeJS', 'ExpressJS', 'EJS', 'jQuery'],
    liveUrl: 'https://jekeytimoy29.github.io/my-portfolio-v1/',
    sourceUrl: 'https://github.com/jekeytimoy29/my-portfolio-v1',
    featured: true,
    category: 'Frontend',
  },
  {
    id: '4',
    title: 'Camila and Amber Movies Mobile App',
    description: 'Another client app developed using React-Native to create mobile apps for iOS and Android. This will support GraphQL API with AWS DynamoDB to retrieve and search for movies. It also includes features for login/logout and register user using AWS Cognito. The backend GraphQL API and AWS Cognito for this client app is the same with Movies Web App',
    image: '',
    technologies: ['React Native', 'Android', 'iOS', 'AWS Cognito', 'GraphQL'],
    sourceUrl: 'https://github.com/jekeytimoy29/CamilaAmberMoviesReactNative',
    featured: false,
    category: 'Mobile',
  },
  {
    id: '5',
    title: 'Camila and Amber Movies App hosted with AWS Amplify',
    description: 'An app where it shows movies collection and user can register, add their comments about each movie. An admin account can manage movies and users of the app. Implemented the whole MERN stack app. Utilized AWS, React, Node, Express, MongoDB and Docker.',
    image: '',
    technologies: ['React', 'AWS Amplify', 'AWS Cognito', 'GraphQL', 'Cloud Computing'],
    sourceUrl: 'https://github.com/jekeytimoy29/CamilaAndAmberMoviesAWSAmplify',
    featured: false,
    category: 'Full Stack',
  },
  {
    id: '6',
    title: 'Data Analytics System',
    description: 'A microservices system that allows participation of data, analysis of data, and generating analysis report. Implemented the Data Input Services where it sends messages to the broker. Utilized Spring Boot, MongoDB, Kafka, and React.',
    image: '',
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'Kafka', 'Microservices', 'Event-Driven Architecture'],
    sourceUrl: 'https://github.com/jekeytimoy29/DataInputService',
    featured: false,
    category: 'Backend',
  },
  {
    id: '7',
    title: 'Library System',
    description: 'Created system to manage library functionalities as part of team. Utilized Java and Swing.',
    image: '',
    technologies: ['Java', 'Swing'],
    sourceUrl: 'https://github.com/jekeytimoy29/LibrarySystem',
    featured: false,
    category: 'Desktop',
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
