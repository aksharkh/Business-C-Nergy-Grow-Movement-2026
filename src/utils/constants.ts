import DoriaCordova from '../assets/Doria-Cordova-Yellow-Sitting-BEST.jpg';
import YPLai from '../assets/Mr. YP Lai.jpg';
import KCSee from '../assets/Mr. KC See.png';
import GunterConrad from '../assets/Mr Guntur conard.webp';
// import Gina from '../assets/mentors/gina.jpg';

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
  { name: 'Dame Doria Cordova', role: 'Excellerated Business School, USA', linkedin: 'https://www.linkedin.com/in/dccordova/', photo:  DoriaCordova },
  { name: 'Mr YP Lai', role: 'Work Less Earn More Academy', linkedin: 'https://www.linkedin.com/in/yplai/', photo: YPLai },
  { name: 'Mr KC See', role: 'Quest AI, Malaysia', linkedin: 'https://www.linkedin.com/in/kcsee/', photo: KCSee },
  { name: 'Mr Gunter Conrad', role: 'Germany', linkedin: 'https://www.linkedin.com/in/g%C3%BCnter-conrad-82655067/', photo: GunterConrad },
  { name: 'Ms Gina', role: 'Impact Leader, Malaysia', linkedin: 'https://www.linkedin.com/in/gina-malaysia/', photo: 'https://via.placeholder.com/200x200?text=Ms+Gina' },
];

// Navigation Links
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Mentors', href: '#mentors' },
];

// Stats for Impact Section
export const impactStats = [
  {
    icon: 'Users',
    number: '5000+',
    label: 'Leaders Impacted',
    subtext: 'Empowering a new generation of conscious leaders across the ASEAN region to drive sustainable economic growth.',
    span: 'lg:col-span-2',
  },
  {
    icon: 'Briefcase',
    number: '400+',
    label: 'Projects Matched',
    subtext: 'Connecting visionary projects with the capital needed to scale globally.',
    span: '',
  },
  {
    icon: 'Globe',
    number: '80+',
    label: 'Global Expansions',
    subtext: 'Facilitating international market entry for Malaysian businesses.',
    span: '',
  },
  {
    icon: 'Heart',
    number: '100+',
    label: 'Children Funded',
    subtext: 'Direct education funding for rural and special needs children.',
    span: '',
  },
];
