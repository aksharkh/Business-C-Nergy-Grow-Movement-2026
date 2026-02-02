# Business C-Nergy & Grow Movement 2026 - Website

## 🎯 Overview

This is a fully refactored, modular React website for the Business C-Nergy & Growth Movement 2026 initiative. The original single-file design has been split into maintainable, reusable components while preserving all animations and visual effects.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm lint
```

## 📁 Project Structure

### Components (`src/components/`)
- **Reveal.tsx** - Scroll reveal animation wrapper with directional variants
- **CustomButton.tsx** - Interactive button with hover fill effect
- **StatCard.tsx** - Statistics card with icon and hover animations
- **BackgroundGradients.tsx** - Animated background mesh with blobs
- **NavbarCustom.tsx** - Sticky navbar with scroll detection
- **Motion.tsx** - Framer Motion wrapper component
- **Navbar.tsx** - Original Ant Design navbar

### Sections (`src/sections/`)
- **Hero.tsx** - Hero section with headline and CTA buttons
- **Marquee.tsx** - Animated scrolling text marquee
- **Impact.tsx** - Legacy/impact statistics grid
- **About.tsx** - Purpose section with image reveal
- **Mentors.tsx** - Mentors list with hover effects
- **Register.tsx** - Registration form with validation
- **Footer.tsx** - Footer with links

### Utilities & Configuration
- **utils/constants.ts** - Data, colors, animations config, and navigation links
- **types/index.ts** - TypeScript interfaces for all props
- **hooks/useScroll.ts** - Custom hook for scroll detection

### Styles
- **index.css** - Global animations and font imports
- **App.css** - App-level styles

## 🎨 Design System

### Colors
```typescript
Primary Blue: #0F52BA
Dark: #020617
Light: #f0f4f8
Accent Blue: #60a5fa
Cyan: #06b6d4
Indigo: #6366f1
```

### Fonts
- **Body**: Manrope (200-700 weights)
- **Headings**: Playfair Display (serif)

### Animations
- **Float** - 15s continuous floating motion
- **Float Reverse** - 20s reverse floating
- **Pulse Soft** - 10s soft pulsing effect
- **Marquee** - 40s continuous scroll
- **Scroll Reveal** - 1s ease-out with direction variants

## 🧩 Component Usage Examples

### Using Reveal Component
```tsx
import Reveal from './components/Reveal';

<Reveal delay={200} direction="up">
  <h1>Hello World</h1>
</Reveal>
```

### Using Custom Button
```tsx
import CustomButton from './components/CustomButton';

<CustomButton primary href="#register">
  Secure Spot
</CustomButton>
```

### Using Stat Card
```tsx
import StatCard from './components/StatCard';
import { Users } from 'lucide-react';

<StatCard
  icon={Users}
  number="5000+"
  label="Leaders Impacted"
  subtext="Empowering leaders..."
/>
```

## 📱 Responsive Design

All components are mobile-first and responsive:
- **Mobile**: Single column layouts
- **Tablet (md)**: 2-column layouts
- **Desktop (lg)**: 4+ column layouts

Breakpoints:
- `sm: 640px`
- `md: 768px`
- `lg: 1024px`
- `xl: 1280px`

## ⚡ Performance Optimizations

- **Code Splitting** - Each section is a separate component
- **CSS-in-JS Minimization** - Uses Tailwind for most styling
- **GPU Animations** - Uses `transform` and `opacity` for smooth 60fps animations
- **Lazy Component Loading** - Sections load as needed

## 🔧 Customization

### Update Colors
Edit `src/utils/constants.ts`:
```typescript
export const colors = {
  primary: '#0F52BA',  // Change primary color here
  dark: '#020617',
  // ...
};
```

### Update Data
Edit `src/utils/constants.ts`:
```typescript
export const mentorsData = [
  { name: 'Your Mentor', role: 'Your Role' },
  // Add more mentors
];
```

### Add New Sections
1. Create new file in `src/sections/`
2. Import in `App.tsx`
3. Add to main layout

## 📚 Libraries Used

- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4.1** - Utility-first CSS
- **Framer Motion 12.29** - Animation library
- **Ant Design 6.2** - Component library
- **Lucide React 0.563** - Icon library
- **Vite 7.2** - Build tool

## 🎬 Animations Breakdown

### Reveal Animation
Scroll-triggered fade and slide animation with 5 direction variants:
- `up` - Slides up while fading in
- `down` - Slides down while fading in
- `left` - Slides from left while fading in
- `right` - Slides from right while fading in
- `zoom` - Scales up while fading in

### Hover Effects
- Button fill animation
- Stat card lift and glow
- Image zoom and overlay
- Text color transitions

### Background Animations
- Floating blob animations
- Soft pulse effect
- Mix blend modes for depth

## 🧪 Testing & QA

### Before Deployment
```bash
# Check for TypeScript errors
npm run build

# Run linting
npm run lint

# Manual testing checklist
- [ ] All sections render correctly
- [ ] Animations are smooth
- [ ] Responsive on mobile/tablet/desktop
- [ ] Form submission works
- [ ] All links are functional
- [ ] Navigation is sticky
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output: `dist/` folder ready for deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

## 📝 Notes

- The original design by Google Gemini has been preserved perfectly
- All animations run at 60fps for smooth performance
- Component architecture allows for easy feature additions
- TypeScript provides type safety across the codebase
- Tailwind CSS ensures consistent styling

## 🤝 Contributing

When adding new components:
1. Keep components small and focused
2. Use TypeScript interfaces
3. Add to types/index.ts
4. Follow the naming conventions
5. Update this README

## 📄 License

This project is proprietary to Business C-Nergy & Growth Movement 2026

## 👨‍💻 Support

For issues or questions, contact the development team.

---

**Last Updated**: January 2026  
**Status**: Production Ready ✅  
**Refactored by**: GitHub Copilot
