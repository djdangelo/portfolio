export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  isPrivate: boolean;
  type: 'own' | 'participated';
}

export const publicProjects: Project[] = [
  {
    id: 'challenge-app-todo',
    name: 'Challenge App Todo',
    description: 'A complete To-Do application built with modern web technologies.',
    url: 'https://github.com/djdangelo/challenge-app-todo',
    isPrivate: false,
    type: 'own'
  },
  {
    id: 'scan-qr-app',
    name: 'Scan QR App',
    description: 'An application to scan and process QR codes efficiently.',
    url: 'https://github.com/djdangelo/scan_qr_app',
    isPrivate: false,
    type: 'own'
  },
  {
    id: 'test-seguros-continental',
    name: 'Seguros Continental Test',
    description: 'Technical test/implementation for Seguros Continental.',
    url: 'https://github.com/djdangelo/test_seguros_continental',
    isPrivate: false,
    type: 'own'
  },
  {
    id: 'web-admin-continental',
    name: 'Web Admin Continental',
    description: 'Administrative web portal for Continental.',
    url: 'https://github.com/djdangelo/web-admin-continental',
    isPrivate: false,
    type: 'own'
  }
];

export const privateProjects: Project[] = [
  {
    id: 'nexo-services',
    name: 'Nexo Services',
    description: 'Private core service application. Demo available upon request.',
    isPrivate: true,
    type: 'own'
  },
  {
    id: 'emergency-info-app',
    name: 'Emergency Info App',
    description: 'Application for managing emergency information. Demo available upon request.',
    isPrivate: true,
    type: 'own'
  },
  {
    id: 'syscafe',
    name: 'SysCafe',
    description: 'Comprehensive system for coffee production and management.',
    isPrivate: true,
    type: 'participated'
  }
];
