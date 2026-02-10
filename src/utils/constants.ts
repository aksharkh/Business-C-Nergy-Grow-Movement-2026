import DoriaCordova from '../assets/Doria-Cordova-Yellow-Sitting-BEST.jpg';
import YPLai from '../assets/Mr. YP Lai.jpg';
import KCSee from '../assets/Mr. KC See.png';
import GunterConrad from '../assets/Mr Guntur conard.webp';
import Gina from '../assets/Gina.jpeg';

// Color Scheme - Purple, White & Gold
export const colors = {
  primary: '#6B2D8C',      // Rich Purple
  dark: '#2D1B3D',         // Dark Purple
  light: '#FFFFFF',        // White
  lightBg: '#F8F8F8',      // Off White
  accentGold: '#D4AF37',   // Gold
  accentPurple: '#8B4BA8', // Lighter Purple
  purple: '#6B2D8C',       // Primary Purple
};

// Animations
export const animations = {
  staggerDelay: 100,
  revealDuration: 1000,
  hoverDuration: 300,
  transitionDuration: 500,
};

// Mentors Data
export const mentorsData = [
  { 
    name: 'Dame Doria Cordova', 
    role: 'Excellerated Business School, USA', 
    bio: 'Founder and CEO of Excellerated Business School. Pioneer in conscious business education with 30+ years of experience transforming entrepreneurs into leaders.',
    linkedin: 'https://www.linkedin.com/in/dccordova/', 
    photo: DoriaCordova 
  },
  { 
    name: 'Mr YP Lai', 
    role: 'Work Less Earn More Academy, Malaysia - Australia', 
    bio: 'Business strategist helping entrepreneurs create scalable, sustainable businesses that generate wealth while maintaining work-life balance.',
    linkedin: 'https://www.linkedin.com/in/yplai/', 
    photo: YPLai 
  },
  { 
    name: 'Mr KC See', 
    role: 'Quest AI, Malaysia', 
    bio: 'Technology innovator and AI expert. Empowering businesses in Southeast Asia to leverage AI for growth and competitive advantage.',
    linkedin: 'https://www.linkedin.com/in/kcsee/', 
    photo: KCSee 
  },
  { 
    name: 'Mr Gunter Conrad', 
    role: 'Business Advisor, Germany', 
    bio: 'Global business strategist with expertise in European-Asian market bridges. Facilitates cross-border investments and strategic partnerships.',
    linkedin: 'https://www.linkedin.com/in/g%C3%BCnter-conrad-82655067/', 
    photo: GunterConrad 
  },
  { 
    name: 'Ms Gina', 
    role: 'Impact Leader, Malaysia', 
    bio: 'Advocate for conscious business and sustainable development. Connects passionate entrepreneurs with impact-driven investment opportunities.',
    linkedin: 'https://www.linkedin.com/in/gina-phan/', 
    photo: Gina
  },
];

// Navigation Links
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Register', href: '#register' },
];

// Stats for Impact Section
export const impactStats = [
  {
    icon: 'Users',
    number: '5000+',
    label: 'Leaders Impacted',
    subtext: 'Empowering a new generation of conscious leaders across the ASEAN region to drive sustainable economic growth and positive social impact.',
    span: 'lg:col-span-2',
  },
  {
    icon: 'Briefcase',
    number: '400+',
    label: 'Projects Matched',
    subtext: 'Connecting visionary projects with impact-driven capital, mentorship, and strategic partnerships needed to scale globally.',
    span: '',
  },
  {
    icon: 'Globe',
    number: '80+',
    label: 'Global Expansions',
    subtext: 'Facilitating international market entry and cross-border collaborations for Malaysian and ASEAN businesses.',
    span: '',
  },
  {
    icon: 'Heart',
    number: '100+',
    label: 'Children Funded',
    subtext: 'Direct education funding for rural and special needs children through our conscious business social initiatives.',
    span: '',
  },
];

// Form Configuration
export const formConfig = {
  interestOptions: [
    'Business Leader',
    'Entrepreneur',
    'Service Provider',
    'Trainer/Coach',
    'Consultant',
    'Investor',
    'Other'
  ],
  referralSources: [
    'LinkedIn',
    'Social Media',
    'Friend/Colleague',
    'Business Network',
    'Media/Press',
    'Search Engine',
    'Other'
  ]
};

// FAQ Data (structured for reusability)
export const faqData = [
  {
    question: 'What is the Business C-Nergy & Growth Movement 2026?',
    category: 'General',
    answer: 'It\'s a national initiative aligned with Visit Malaysia 2026 that brings together corporate leaders, entrepreneurs, and investors to build conscious, sustainable business practices. We focus on creating partnerships, sharing knowledge, and driving impact across the ASEAN region.'
  },
  {
    question: 'Who should join this movement?',
    category: 'Membership',
    answer: 'Business leaders seeking growth opportunities, entrepreneurs looking for mentorship and investment, service providers wanting to connect with a network of conscious businesses, trainers and coaches, consultants, and impact investors. If you believe business can be a force for good, you belong here.'
  },
  {
    question: 'What will I gain from membership?',
    category: 'Benefits',
    answer: 'Direct access to 30+ global mentors, quarterly business growth sessions, strategic partnership opportunities, business certifications and recognition, media visibility to enhance thought leadership, and an investment-ready acceleration program to scale your business.'
  },
  {
    question: 'How is this different from other business networks?',
    category: 'Positioning',
    answer: 'We emphasize conscious capitalism—where purpose and profit coexist. Our focus isn\'t just on transactions, but on transformations. We bridge Malaysia to Asia, and Asia to the World, creating a truly global community of leaders committed to sustainable, ethical business practices.'
  }
];

// Testimonials for future use
export const testimonials = [
  {
    author: 'John Doe',
    role: 'CEO, Tech Startup',
    text: 'Being part of this movement changed how I view business. It\'s not just about profit—it\'s about purpose.',
    image: 'https://via.placeholder.com/80x80?text=John'
  },
  {
    author: 'Sarah Chen',
    role: 'Founder, Social Enterprise',
    text: 'The mentorship and network access has been invaluable. We\'ve made strategic partnerships that propelled our growth 3x in a year.',
    image: 'https://via.placeholder.com/80x80?text=Sarah'
  }
];
