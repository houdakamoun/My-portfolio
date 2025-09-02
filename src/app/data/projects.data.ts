import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'pfe',
    title: 'My School',
    subtitle: 'Design and development of a private school management platform',
    description:
      'Web application for managing classes, courses, and assignments, with authentication and user roles.',
    tech: ['Angular', 'Node.js', 'Express', 'MONGODB'],
    image: 'assets/img/pfe-cover.jpg',
    demoUrl: 'https://ton-domaine-ou-demo.netlify.app',
    githubUrl: 'https://github.com/houdakamoun/Project_PFE',
    year: 2025,
    category: 'web',
    featured: true,
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

    tech: ['Angular', 'Node.js', 'Express', 'MONGODB'],
    image: 'assets/img/soccer.jpg',
    demoUrl: 'https://ton-domaine-ou-demo.netlify.app',
    githubUrl: 'https://github.com/houdakamoun/soccer',
    year: 2025,
    category: 'web',
    featured: false,
    highlights: [
      'JWT authentication ',
      'CRUD for classes & courses',
      'Assignments and filtered search',
      'Secure REST API + validations',
      'CI/CD (automatic deployment)',
    ],
  },
];
