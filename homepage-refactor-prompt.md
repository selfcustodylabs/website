# Homepage Audit & Refactor Prompt

Audit and refactor the homepage of this Docusaurus site to make it visually stunning and modern.

## Context

- This is a Docusaurus project. Explore the full repo structure first.
- The goal is a complete homepage redesign, not incremental tweaks.

## Step 1: Audit

Before writing any code, review the current homepage and produce a short written audit covering:

- Visual hierarchy and first-impression impact
- Hero section effectiveness
- Layout, spacing, and typography issues
- Use of color, contrast, and whitespace
- Mobile responsiveness gaps
- Component structure and reusability
- How well Tailwind CSS is (or isn't) being leveraged across the project

## Step 2: Refactor Plan

Based on the audit, propose a concrete refactor plan before implementing. List every component you'll create or modify, and what each will look like. Wait for my approval before proceeding.

## Step 3: Implementation

Implement the approved plan with these priorities:

### Hero Section

- Large, bold, attention-grabbing layout with clear headline hierarchy
- Subtle animated elements (CSS-only or lightweight JS, no heavy libraries)
- Strong primary CTA with visual weight, optional secondary CTA
- Consider a gradient, mesh background, or abstract geometric motif

### Overall Design Direction

- Clean, modern, high-end SaaS aesthetic (think Linear, Vercel, Resend)
- Generous whitespace, large type, tight content density
- Smooth scroll-triggered reveals for sections below the fold
- Dark/light mode must both look polished

### Tailwind CSS

- Maximize Tailwind utility classes for all styling
- Extend the Tailwind config with a custom color palette, font stack, and any needed keyframes
- Check if Docusaurus supports Tailwind natively or needs a plugin/swizzle; set it up correctly either way
- Avoid arbitrary inline styles; use Tailwind's `@apply` only when necessary for Docusaurus overrides

### Sections to Include (adapt as appropriate)

1. Hero with headline, subheadline, CTA(s)
2. Social proof / logos / trust badges (if applicable)
3. Feature highlights: use cards or a bento grid layout
4. How-it-works or workflow section
5. Testimonials or community callout (if applicable)
6. Final CTA / footer lead-in

### Quality Bar

- Every section should feel intentional, with no filler, no generic placeholder energy
- Transitions and hover states should feel tactile and responsive
- The page should load fast, with no unnecessary dependencies
- Responsive down to 320px; test at mobile, tablet, and desktop breakpoints

## Constraints

- Do NOT add React component libraries (no Chakra, MUI, etc.)
- Do NOT use heavy animation libraries (no Framer Motion, GSAP). CSS animations and Tailwind `animate-*` utilities only.
- Preserve all existing routing and docs functionality; only the homepage is being redesigned
- Keep all content in components (no hardcoded HTML walls in a single file)
