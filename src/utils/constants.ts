import Azeez from '../assets/mentors/azeez.png';
import Carol from '../assets/mentors/carol.png';
import YpLai from '../assets/mentors/Mr. YP Lai.jpg';
import Brandon from '../assets/mentors/brandon.png';
import Imran from '../assets/mentors/imran.png';
import Rahat from '../assets/mentors/rahat.png';
import Doria from '../assets/mentors/Doria-Cordova-Yellow-Sitting-BEST.jpg';
import Gunter from '../assets/mentors/gunter.jpeg';
import KcSee from '../assets/mentors/see.png';
import Qin from '../assets/mentors/qin.png';
import Yen from '../assets/mentors/yen.png';
import Soni from '../assets/mentors/soni.png';
import Vance from '../assets/mentors/vance.png';
import Isaac from '../assets/mentors/isaac.png';
import Jani from '../assets/mentors/jani.png';
import Deepak from '../assets/mentors/deepak.webp';
import Hamano from '../assets/mentors/hamano.png';
import Steve from '../assets/mentors/steve.webp';
import Sivem from '../assets/mentors/sivem.png';
import Gregg from '../assets/mentors/gregg.png';
import Jeiyan from '../assets/mentors/jeiyan.png';

// Historical Event Gallery Imports
import Event1 from '../assets/events/2012 DC.jpeg';
import Event2 from '../assets/events/2015 Project Valarchi.jpeg';
import Event3 from '../assets/events/2022 award.jpeg';
import Event4 from '../assets/events/CEO M&Y 2015.jpeg';
import Event5 from '../assets/events/Event - 2025.jpeg';
import Event6 from '../assets/events/Event 2014.jpeg';
import Event7 from '../assets/events/Group - IIF Prelude.jpeg';
import Event8 from '../assets/events/IIF 2025.jpeg';
import Event9 from '../assets/events/M&Y 1.jpeg';
import Event10 from '../assets/events/M&Y 2015.jpg';
import Event11 from '../assets/events/M&Y KL.jpeg';
import Event12 from '../assets/events/SG 2.jpeg';
import Event13 from '../assets/events/Sabah -1.jpeg';
import Event14 from '../assets/events/Sabah 2012.jpeg';
import Event15 from '../assets/events/Utah Forum.jpeg';
import Event16 from '../assets/events/Utah.jpeg';
import Event17 from '../assets/events/past pics.jpeg';

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

// Mentors Data - Strictly Mapped in Explicit Order
export const mentorsData = [
  { name: 'Dr.h.c. AZEEZA JALALUDEEN', role: 'Founder - Director\nMovement Lead', photo: Azeez, flag: 'SG', linkedin: 'https://www.linkedin.com/in/azeezajalaludeen/' },
  { name: 'CAROL KHOO', role: 'Finance Lead', photo: Carol, flag: 'SG', linkedin: 'https://www.linkedin.com/in/carol-khoo-005008103/?skipRedirect=true' },
  { name: 'YP LAI', role: 'BNI Global Trainer\nFounder, WLEM Academy\nCo-Organiser BCG Movement', photo: YpLai, flag: 'AU', linkedin: 'https://www.linkedin.com/in/yplai/' },
  { name: 'BRANDON CHIN', role: 'Founder & CEO\nBorneo Referral Group Sdn Bhd\nBorneo Expo 2.0\nCo-Partner, BCG Movement', photo: Brandon, flag: 'MY', linkedin: 'https://www.linkedin.com/in/brandon-chin-sw/' },
  { name: 'MUHAMMAD IMRAN KUNA', role: 'Founder, Dream to Aspire\nSenior Para Legal', photo: Imran, flag: 'SG', linkedin: 'https://www.linkedin.com/in/mohammad-imran-kuna-a2276528/' },
  { name: 'FARHTHEEBA RAHAT KHAN', role: 'Marketing Partner\nBangladesh', photo: Rahat, flag: 'BD', linkedin: 'http://linkedin.com/in/farhtheeba-rahat-khan-06437414/' },
  { name: 'DAME DORIA CORDOVA', role: 'Mentor of Global Mentors\nCEO & Co-Founder\nExcellerated Business School\nMoney & You Program, USA', photo: Doria, flag: 'US', linkedin: 'https://www.linkedin.com/in/dccordova/' },
  { name: 'GUNTER CONRAD', role: 'Global Mentor - Advisor\nBCG Movement\nFounder, GIGA Trend\nGermany', photo: Gunter, flag: 'DE', linkedin: 'https://www.linkedin.com/in/g%C3%BCnter-conrad-82655067/' },
  { name: 'KC SEE', role: 'Global Mentor - Advisor\nBCG Movement\nFounder, Quest Learning\nMastery Asia. Malaysia', photo: KcSee, flag: 'MY', linkedin: 'https://www.linkedin.com/in/kcsee/' },
  { name: 'WOO HUI QIN', role: 'Program Delivery Lead\nBCG Movement\nFounder, WHQ Learning Hub', photo: Qin, flag: 'MY', linkedin: 'https://www.linkedin.com/in/woohuiqin/?skipRedirect=true' },
  { name: 'KONG CHOON YEN', role: 'Founder, Birth Discovery', photo: Yen, flag: 'SG', linkedin: 'https://www.linkedin.com/in/choon-yen-kong-b5562a311/?skipRedirect=true' },
  { name: 'DIVESH SONI', role: 'India Lead, BCG Movement\nFounder, Purpose Genie', photo: Soni, flag: 'IN', linkedin: 'https://www.linkedin.com/in/purposegenie-divesh-soni/' },
  { name: 'LLEWELLAN VANCE', role: 'Co-Founder\nAsia Innovate Hub\nAI Native Expert', photo: Vance, flag: 'SG', linkedin: 'https://www.linkedin.com/in/llewellan-vance-innovation/' },
  { name: 'RTN. JENNIFER ISAAC', role: 'Director,\nAuriga Corporate Advisory\nDirector\nCrossAsyst Infotech', photo: Isaac, flag: 'IN', linkedin: 'https://www.linkedin.com/in/jenniferisaac/' },
  { name: 'Advocate JANI JERMANS', role: 'Tamil Nadu Chapter President\nAsia Africa Chamber of Commerce', photo: Jani, flag: 'IN', linkedin: 'https://www.linkedin.com/in/adv-jani-jermans-b-sc-mba-hrm-ll-b-54382837/' },
  { name: 'DEEPAK SHANKARAPA', role: 'Co-Founder\nBlue Santos Pvt Ltd\nBusiness Mentor\nGRC Services', photo: Deepak, flag: 'IN', linkedin: 'https://www.linkedin.com/in/deepak-reach-grc/' },
  { name: 'Dr. SHINICHI HAMANO', role: 'Director DACACA\nBusiness Mentor\nFinance and F&B', photo: Hamano, flag: 'JP', linkedin: 'https://www.linkedin.com/in/shinichi-hamano-a809b57/' },
  { name: 'STEVE NATHANIEL SAN', role: 'BCG Movement\nLead - Events\nCo-Founder\nBlue Santos Pvt Ltd', photo: Steve, flag: 'IN', linkedin: 'https://www.linkedin.com/in/stevenathanielsan/' },
  { name: 'Dr. SIVEM DORAIRAJAH', role: 'Founder, Nivahs Global\nGOGLOBAL Mentor\n& Stragetic Partner\nMalaysia', photo: Sivem, flag: 'MY', linkedin: 'https://www.linkedin.com/in/sivem-dorairajah-icps-8663902a/' },
  { name: 'GREGG JACLIN', role: 'Managing Director\nExchange Listing LLC, USA\nGOGLOBAL Mentor\nIPO & Investment', photo: Gregg, flag: 'US', linkedin: 'https://www.linkedin.com/in/gregg-jaclin-a6835b2/' },
  { name: 'JEIYAN SATHIASEELAN', role: 'Founder, Beezeebee Hub\nCommunity Partner\nMalaysia', photo: Jeiyan, flag: 'MY', linkedin: 'https://www.linkedin.com/in/jeiyan-sathiaseelan-34902479/' }
];

export const galleryData = [
  { img: Event1, title: "DC Convention", year: "2012" },
  { img: Event2, title: "Project Valarchi", year: "2015" },
  { img: Event3, title: "Leadership Award", year: "2022" },
  { img: Event4, title: "CEO Money & You", year: "2015" },
  { img: Event5, title: "Business C-Nergy Event", year: "2025" },
  { img: Event6, title: "Global Summit", year: "2014" },
  { img: Event7, title: "IIF Prelude Group Panel", year: "Recent" },
  { img: Event8, title: "IIF Business Conference", year: "2025" },
  { img: Event9, title: "Money & You Summit", year: "Past" },
  { img: Event10, title: "Money & You Showcase", year: "2015" },
  { img: Event11, title: "Money & You Kuala Lumpur", year: "Past" },
  { img: Event12, title: "Singapore Expansion", year: "Past" },
  { img: Event13, title: "Sabah Regional Forum", year: "Recent" },
  { img: Event14, title: "Sabah Business Convention", year: "2012" },
  { img: Event15, title: "Utah Mentorship Forum", year: "Past" },
  { img: Event16, title: "Utah Global Partnership", year: "Past" },
  { img: Event17, title: "Historic Milestone Retrospective", year: "Various" },
];

// Navigation Links
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Mentors', href: '#mentors' },
  // { label: 'FAQ', href: '#faq' },
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
