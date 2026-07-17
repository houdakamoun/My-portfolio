import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'pfe',
    title: 'HHTecKUP',
    subtitle:
      'Design and development of a Career and Skills Management Platform',
    description:
      'HHTecKup is a career and competency management platform designed to help organizations manage employee skills, career development, training, and performance. It provides a secure and user-friendly environment that supports talent growth and strategic workforce management.',
    tech: [
      'TypeScript',
      'HTML',
      'CSS',
      'Angular',
      'Node.js',
      'Express',
      'Mysql',
      'Devops',
      'Docker',
    ],
    image: 'assets/img/HHteckup.jpg',
    demoUrl: 'https://ton-domaine-ou-demo.netlify.app',
    githubUrl: 'https://github.com/houdakamoun/Gestion-cariere',
    year: 2026,
    category: 'web',
    featured: true,
    highlights: [
      'JWT authentication (admin / HR / employee)',
      'CRUD for training programs',
      'Assignments and filtered search',
      'Secure REST API + validations',
      'CI/CD (automatic deployment)',
    ],
  },

  {
    id: 'MyScool',
    title: 'My School',
    subtitle: 'Design and development of a private school management platform',
    description:
      'Web application for managing classes, courses, and assignments, with authentication and user roles.',

    tech: [
      'TypeScript',
      'HTML',
      'CSS',
      'Angular',
      'Node.js',
      'Express',
      'MONGODB',
    ],

    image: 'assets/img/pfe-cover.jpg',

    githubUrl: 'https://github.com/houdakamoun/Project_PFE',

    year: 2025,
    category: 'web',
    featured: false,

    highlights: [
      'JWT authentication (admin / Teacher / Student / Parent )',
      'CRUD for classes & courses',
      'Assignments and filtered search',
      'Secure REST API + validations',
      'CI/CD (automatic deployment)',
    ],
  },
  {
    id: 'portfolio',
    title: 'My Portfolio',
    subtitle: 'Personal showcase website',
    description:
      'Responsive portfolio built with Angular, showcasing my education, skills, and projects.',
    tech: [
      'Angular',
      'TypeScript',
      'HTML',
      'CSS',
      'Node.js',
      'Express',
      'MONGODB',
    ],
    image: 'assets/img/portfolio.jpg',
    githubUrl: 'https://github.com/houdakamoun/My-portfolio',
    year: 2025,
    category: 'web',
  },
  {
    id: 'Soccer',
    title: 'Soccer',
    subtitle: 'Design & Development of a Soccer Management Platform',
    description:
      'A responsive web application for managing soccer matches, teams, and player data, featuring authentication, user roles, and an intuitive interface.',

    tech: [
      'TypeScript',
      'HTML',
      'CSS',
      'Angular',
      'Node.js',
      'Express',
      'MONGODB',
    ],
    image: 'assets/img/soccer.jpg',

    githubUrl: 'https://github.com/houdakamoun/soccer',
    year: 2025,
    category: 'web',
    featured: false,
    highlights: [
      'JWT authentication (admin / coach / player)',
      'CRUD for teams & matches',
      'Player stats and filtered search',
      'Secure REST API + validations',
      'Responsive interface',
    ],
  },

  {
    id: 'HHFitness',
    title: 'HH Fitness',
    subtitle: 'Design & Development of an E-commerce Platform',
    description:
      'A complete e-commerce web application for selling fitness products, including clothing and nutritional items. The platform supports user authentication, shopping cart management, order processing, and a simulated credit card payment interface.',

    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],

    image: 'assets/img/hhfitness.jpg',

    githubUrl: 'https://github.com/houdakamoun/Ecommerce',

    year: 2026,
    category: 'web',
    featured: false,

    highlights: [
      'User registration & login system',
      'Session-based shopping cart',
      'Product management with database',
      'Order & command handling',
      'Simulated credit card payment UI',
      'Responsive and modern design',
    ],
  },
];
