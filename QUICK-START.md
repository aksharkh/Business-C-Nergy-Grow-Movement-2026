# ⚡ Quick Start Guide

## 🚀 Get Running in 2 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
```
http://localhost:5173
```

**Done!** 🎉 Your website is running!

---

## 🎨 Customize in 5 Minutes

### Change Colors
Edit: `src/utils/constants.ts`

```typescript
export const colors = {
  primary: '#0F52BA',        // ← Change to your color
  dark: '#020617',
  light: '#f0f4f8',
  // ... more colors
};
```

### Update Mentors
Edit: `src/utils/constants.ts`

```typescript
export const mentorsData = [
  { name: 'Your Mentor', role: 'Their Role' },
  { name: 'Another Mentor', role: 'Their Role' },
  // Add your mentors
];
```

### Change Navigation Links
Edit: `src/utils/constants.ts`

```typescript
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Mentors', href: '#mentors' },
  // Add your links
];
```

---

## 📁 Main Files to Know

| File | Purpose | Edit? |
|------|---------|-------|
| `src/App.tsx` | Main layout | ✅ If adding sections |
| `src/utils/constants.ts` | Data & colors | ✅ Yes, customize here |
| `src/components/` | Reusable components | ✅ If modifying design |
| `src/sections/` | Page sections | ✅ If changing content |

---

## 🎯 Common Tasks

### Add a New Section

1. **Create file**: `src/sections/MySection.tsx`

```tsx
const MySection = () => {
  return (
    <section id="mysection" className="py-32 bg-white">
      {/* Your content here */}
    </section>
  );
};

export default MySection;
```

2. **Import in App.tsx**:
```tsx
import MySection from './sections/MySection';
```

3. **Add to layout**:
```tsx
<main className="relative z-10">
  <Hero />
  <Impact />
  <MySection />  {/* ← Add here */}
  {/* ... */}
</main>
```

### Change Button Style

Edit: `src/components/CustomButton.tsx`

Look for the `className` with colors and modify to your liking.

### Update Form Fields

Edit: `src/sections/Register.tsx`

Add new input fields:
```tsx
<input
  type="text"
  className="w-full bg-white/5 border border-white/10 rounded-lg p-3"
  placeholder="Your field"
/>
```

### Add Animation to Element

Use the `Reveal` component:

```tsx
import Reveal from '../components/Reveal';

<Reveal delay={200} direction="up">
  <h1>Hello World</h1>
</Reveal>
```

Direction options: `up`, `down`, `left`, `right`, `zoom`

---

## 🔨 Build & Deploy

### Build for Production
```bash
npm run build
```

Output goes to: `dist/` folder

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

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

---

## 🐛 Troubleshooting

### Website won't start?
```bash
npm install          # Reinstall dependencies
npm run dev         # Try again
```

### Styles look wrong?
```bash
# Clear cache
rm -rf node_modules/.vite
npm run dev
```

### Port 5173 already in use?
```bash
npm run dev -- --port 3000  # Use different port
```

### TypeScript errors?
These are usually safe to ignore during development. They'll be caught at build time.

---

## 📚 File Structure Reminder

```
src/
├── components/       ← Reusable components
├── sections/         ← Page sections
├── types/            ← TypeScript types
├── utils/            ← Helper functions & data
├── hooks/            ← Custom hooks
├── App.tsx          ← Main app
└── index.css        ← Global styles
```

---

## 💡 Pro Tips

1. **Use Chrome DevTools** to inspect components
2. **Use VS Code Extensions**: 
   - Tailwind CSS IntelliSense
   - ES7+ React/Redux/React-Native
   - Thunder Client (for API testing)
3. **Check console** for errors (`F12` → Console tab)
4. **Test on mobile** using DevTools (`F12` → `Ctrl+Shift+M`)

---

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📞 Questions?

Read these files for more details:
1. `README-REFACTORED.md` - Complete guide
2. `STRUCTURE.md` - Architecture overview
3. `FILE-TREE.md` - Detailed file structure
4. `REFACTORING-SUMMARY.md` - Full summary

---

## ✅ You're Ready!

Your website is:
- ✅ Fully functional
- ✅ Production-ready
- ✅ Easy to customize
- ✅ Scalable
- ✅ Well-structured

**Time to ship!** 🚀

---

**Last Updated**: January 2026  
**Status**: ✅ Ready to Go  
**Questions?** Check the other documentation files!
