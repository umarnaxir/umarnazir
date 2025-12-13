export interface Project {
  id: string;
  number: string;
  year: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  visualVariant?: 'default' | 'alt' | 'alt2';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  date: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  tags: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  projects: Project[];
  experiences: ExperienceItem[];
  about: string;
  contact: {
    headline: string;
    description: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Umar Nazir',
    title: 'SOFTWARE ENGINEER & SEO EXECUTIVE',
    headline: 'Building\nDigital Solutions',
    description:
      'Software Engineer & SEO Executive with 2+ years of experience creating high-performance web applications, optimizing digital presence, and delivering scalable solutions that drive business growth.',
    email: 'erumarnazir@gmail.com',
    phone: '+91 705-173-2616',
    location: 'Baramulla, J&K India',
    github: '@umarnazir',
    linkedin: '/in/umarnazir',
  },
  projects: [
    {
      id: '1',
      number: '001',
      year: '2024',
      category: 'AI / ML PLATFORM',
      title: 'AI-Mployed',
      description:
        'AI/ML Talent & Career Platform connecting job seekers with opportunities in artificial intelligence and machine learning. Built with React.js and Next.js for optimal performance and user experience.',
      tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'AI/ML', 'FIREBASE'],
      visualVariant: 'default',
    },
    {
      id: '2',
      number: '002',
      year: '2024',
      category: 'LOGISTICS / E-COMMERCE',
      title: 'EliteExpress Courier',
      description:
        'Delivery & Logistics System for managing shipments, tracking packages, and optimizing delivery routes. Features real-time tracking, automated notifications, and comprehensive admin dashboard.',
      tags: ['REACT', 'NEXT.JS', 'NODE.JS', 'MONGODB', 'FIREBASE'],
      visualVariant: 'alt',
    },
    {
      id: '3',
      number: '003',
      year: '2024',
      category: 'TOURISM / BOOKING',
      title: 'NineMash',
      description:
        'Tourism & Online Booking Platform for Kashmir region. Enables users to book hotels, tours, and experiences with seamless payment integration and real-time availability.',
      tags: ['REACT', 'NEXT.JS', 'STRIPE', 'MONGODB', 'SEO'],
      visualVariant: 'alt2',
    },
    {
      id: '4',
      number: '004',
      year: '2024',
      category: 'HEALTHCARE / PORTFOLIO',
      title: 'Dr. Jibran Bashir',
      description:
        'Professional portfolio website for Orthopedic Surgeon featuring appointment booking, patient testimonials, and medical service information with responsive design and SEO optimization.',
      tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'SEO', 'RESPONSIVE'],
      visualVariant: 'default',
    },
    {
      id: '5',
      number: '005',
      year: '2024',
      category: 'TRAVEL / BOOKING',
      title: 'Kashmir Tickets',
      description:
        'Travel & Ticket Booking System for Kashmir region. Comprehensive platform for booking flights, buses, and travel packages with secure payment processing and booking management.',
      tags: ['REACT', 'NEXT.JS', 'PAYMENT GATEWAY', 'MONGODB'],
      visualVariant: 'alt',
    },
    {
      id: '6',
      number: '006',
      year: '2024',
      category: 'NGO / NON-PROFIT',
      title: 'Kindness Towards Humanity',
      description:
        'NGO Website for humanitarian organization. Features donation system, volunteer registration, event management, and impact stories with multi-language support and accessibility features.',
      tags: ['REACT', 'NEXT.JS', 'DONATION SYSTEM', 'ACCESSIBILITY'],
      visualVariant: 'alt2',
    },
    {
      id: '7',
      number: '007',
      year: '2024',
      category: 'LOGISTICS / COURIER',
      title: 'Rush Expected Courier',
      description:
        'All Critical Shipments courier service platform. Specialized in handling urgent and time-sensitive deliveries with real-time tracking, priority booking, and customer support integration.',
      tags: ['REACT', 'NEXT.JS', 'REAL-TIME TRACKING', 'FIREBASE'],
      visualVariant: 'default',
    },
    {
      id: '8',
      number: '008',
      year: '2024',
      category: 'ENTERPRISE / HR',
      title: 'Office Management System',
      description:
        'HR & Workflow Automation system for managing employee data, attendance, payroll, and workflow processes. Features role-based access control, reporting dashboards, and automated notifications.',
      tags: ['REACT', 'NODE.JS', 'MONGODB', 'AUTOMATION', 'HR SYSTEM'],
      visualVariant: 'alt',
    },
    {
      id: '9',
      number: '009',
      year: '2024',
      category: 'HOSPITALITY / BOOKING',
      title: 'Hotel Sea View',
      description:
        'Hospitality Booking Website for hotel reservations. Features room availability, online booking, payment processing, and guest management system with beautiful UI/UX design.',
      tags: ['REACT', 'NEXT.JS', 'BOOKING SYSTEM', 'PAYMENT', 'UI/UX'],
      visualVariant: 'alt2',
    },
    {
      id: '10',
      number: '10',
      year: '2024',
      category: 'HEALTHCARE / MEDICAL',
      title: 'Altaf Hospital',
      description:
        'Healthcare & Medical Services Website for hospital. Includes appointment booking, doctor profiles, department information, and patient portal with secure data handling and HIPAA compliance considerations.',
      tags: ['REACT', 'NEXT.JS', 'HEALTHCARE', 'APPOINTMENT SYSTEM', 'SECURITY'],
      visualVariant: 'default',
    },
    {
      id: '11',
      number: '11',
      year: '2024',
      category: 'DIGITAL MARKETING / AGENCY',
      title: 'Digitlia',
      description:
        'Digital marketing agency specializing in web development and SEO. Showcases services, portfolio, client testimonials, and case studies with integrated contact forms and lead generation features.',
      tags: ['REACT', 'NEXT.JS', 'SEO', 'DIGITAL MARKETING', 'LEAD GENERATION'],
      visualVariant: 'alt',
    },
  ],
  experiences: [
    {
      id: '1',
      company: 'Saibbyweb',
      role: 'Software Engineer',
      date: 'Jan 2025 - Present',
      location: 'On-Site',
      type: 'Full-time',
      description:
        'Building high-performance React/Next.js applications with focus on SEO optimization, page speed, and exceptional user experience.',
      responsibilities: [
        'Build high-performance React/Next.js applications',
        'Improve SEO structure, page speed, and user experience',
        'Develop reusable components and optimized UI patterns',
        'Integrate APIs, Firebase services, and backend logic',
      ],
      tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'SEO', 'FIREBASE', 'API INTEGRATION'],
    },
    {
      id: '2',
      company: 'NexGen Developers',
      role: 'Founder & CEO',
      date: 'May 2025 - Present',
      location: 'Part-Time',
      type: 'Part-Time',
      description:
        'Leading technical development across websites, apps & AI tools. Building custom automation & chatbot systems while managing branding, SEO, client communication & digital strategy.',
      responsibilities: [
        'Lead technical development across websites, apps & AI tools',
        'Build custom automation & chatbot systems',
        'Manage branding, SEO, client communication & digital strategy',
        'Deliver full-stack software tailored to business growth',
      ],
      tags: ['LEADERSHIP', 'AI TOOLS', 'AUTOMATION', 'CHATBOTS', 'DIGITAL STRATEGY'],
    },
    {
      id: '3',
      company: 'Harmukh Technologies Pvt Ltd',
      role: 'Software Engineer & SEO Executive',
      date: 'July 2023 - Aug 2025',
      location: 'On-Site',
      type: 'Full-time',
      description:
        'Designed and developed responsive websites while improving digital presence through SEO execution and UI/UX enhancements for better conversions.',
      responsibilities: [
        'Designed and developed responsive websites',
        'Improved digital presence through SEO execution',
        'Provided UI/UX enhancements for better conversions',
        'Collaborated with cross-functional teams',
      ],
      tags: ['REACT', 'SEO', 'UI/UX', 'RESPONSIVE DESIGN', 'TEAM COLLABORATION'],
    },
  ],
  about:
    'Software Engineer with 2+ years of experience in Software Development, SEO Optimization, and building scalable digital products. Skilled in creating high-performance web applications using React.js, Next.js, TypeScript, and modern UI frameworks.\n\nI specialize in full-stack development, focusing on creating responsive, SEO-optimized websites and applications that deliver exceptional user experiences. My expertise includes integrating APIs, Firebase services, and implementing modern UI patterns that drive conversions and engagement.\n\nActively seeking opportunities to contribute and innovate in a growth-focused environment. When I\'m not coding, I work on personal projects, contribute to open-source initiatives, and stay updated with the latest web technologies and SEO best practices.',
  contact: {
    headline: "Let's Build Something Together",
    description:
      'Open to collaboration on web development projects, SEO optimization, full-stack development opportunities, or consulting work. Let\'s build something amazing together.',
  },
};

