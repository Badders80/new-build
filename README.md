# Evolution Stables — Brand Kit & Integration Guide

---

## ✂️ Brand Kit (Copy for Reference)

### Visual Style

- **Color Palette**
  - **Primary:** Deep black backgrounds for a premium, sophisticated feel.
  - **Accent (Gold):** `#d4a964` — warm, modern, for highlights, buttons, and important text.
  - **Gray:** `#747474` (icons/secondary elements), `#B0B0B0` (subtle/secondary text)
  - **White:** `#FFFFFF` — main text, logo, and highlights.

- **Typography**
  - **Header Font:** Bw Gradual Medium (Brand)
  - **Web fallback:** Inter, Helvetica Neue, Arial, sans-serif
  - Use a clean, modern sans-serif. Vary weights (light/regular/medium).
  - Key words: gold and/or italic for emphasis.
  - Hierarchy: Large, spacious headers, clear separation for sections.

- **Layout**
  - Minimalist, lots of whitespace, grid-based sections for structure.
  - Balanced, centered composition.
  - Clean nav with left (logo), center (nav links), right (auth/buttons).

### Interactive Elements

- **Buttons**
  - Black background, gold border/text, gold fill on hover.
  - On hover: gold background, white text, scale up (`scale-105`), subtle shadow.

- **Links**
  - White text, gold on hover, animated underline.
  - Transition: `ease-in-out`, 200–300ms.

- **Section Animation**
  - Fade and slide in on scroll (opacity/translateY).
  - Parallax backgrounds for hero/feature images.
  - Key headings: letter-by-letter or word-by-word animated reveal.

- **Transitions**
  - Use `cubic-bezier(0.4, 0, 0.2, 1)` for smooth, natural animations.
  - Animations should feel light, fast (responsive), but elegant.

---

## Brand Archetypes (Reference for Copy & UI Tone)

- **Explorer:** Breaking barriers, evolving ownership.
- **Everyman:** Accessible for all, welcoming.
- **Revolutionary:** Boldly transforming tradition.
- **Sage (Tokinvest):** Quiet expertise, trust, and compliance.

---

## Usage Examples

- **Headers:** Large, spaced, key terms in gold/italic, animated reveal on scroll.
- **Buttons:** Black background, gold border; gold fill/white text/scale+shadow on hover.
- **Links:** White to gold on hover, underline animation.
- **Sections:** Animate on scroll, parallax where it adds immersion.

---

## Dev/Design Checklist

- [ ] Use `#d4a964` for gold accents (add to `tailwind.config.js` as `gold`).
- [ ] Fonts: Bw Gradual Medium for branding (or closest fallback/inter).
- [ ] Minimalist layout: whitespace, grid, clear sections.
- [ ] All interactive elements have smooth, gold-accented hover/active states.
- [ ] No abrupt or janky transitions—use only approved easing.

---

## Quick Copy/Paste for Tailwind Config

Add to `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        gold: '#d4a964',
        graybrand: '#747474',
      },
      fontFamily: {
        brand: ['"Bw Gradual Medium"', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
};
```

---

## Known Issues & Integration Gotchas

### Authentication & Futureverse SDK

- **Use only SDK hooks** — Always use `useAuth()` from `@futureverse/auth-react` for authentication and state management. The hook provides `signIn`, `signOutPass`, and `userSession`.

- **SignIn parameters required** — The `signIn()` method requires `SignInOptions` parameter. Use `await signIn({ type: 'custodial' })` for the simplest authentication method.

- **Available hooks in v5.0.0**:
  - `useAuth()` — Main authentication hook with signIn, signOutPass, userSession
  - `useConnector()` — For wallet connections  
  - `useFutureverseSigner()` — For signing operations

- **Module resolution errors** — If you see `Module not found: Can't resolve 'pino-pretty'`, install it as a dev dependency:
  ```bash
  npm install pino-pretty --legacy-peer-deps
  ```

### Build & Dependencies

- **Duplicate declarations** — Always check for duplicate variable declarations (e.g., `navLinks`, `handleNavClick`) after merges or file recreations. Remove or rename as needed.

- **Single lockfile** — Next.js 15.x projects should have only one lockfile (`package-lock.json`) in the project root. Remove any extra lockfiles to avoid dependency conflicts.

- **Legacy peer deps** — Use `--legacy-peer-deps` flag when installing Futureverse packages to handle React 19.x compatibility:
  ```bash
  npm install @futureverse/auth @futureverse/auth-react --legacy-peer-deps
  ```

### Next.js Specific

- **ESM externals** — Add experimental ESM externals to `next.config.ts` for Futureverse SDK compatibility:
  ```typescript
  experimental: {
    esmExternals: 'loose'
  }
  ```

- **Node.js polyfills** — Configure webpack fallbacks for Node.js modules in `next.config.ts`:
  ```typescript
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
    };
    return config;
  }
  ```

### Code Quality

- **Apostrophe escaping** — For JSX text content, escape apostrophes as `&apos;` or use double quotes to avoid linting errors.

- **Component exports** — Always use `export default function ComponentName()` for React components to ensure proper module resolution.

- **File structure** — Keep authentication configuration in separate files (`config/futureverse.ts`) and import only what's needed in components.

### Debugging Tips

- **Build first, auth later** — When integrating complex SDKs, establish a working build with simplified components before adding full authentication logic.

- **Incremental implementation** — Add authentication features incrementally rather than all at once to isolate potential issues.

- **Provider placement** — Authentication providers should wrap the entire app in `layout.tsx`, not individual components.

---

## Team Notes

- Use this guide for any new page/component/layout.
- Keep this README updated with any new design decisions.
- When encountering new integration issues, document them in the "Known Issues" section above.
