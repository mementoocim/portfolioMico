# Mico Balmaceda — Portfolio

A project-led portfolio built with the existing Next.js App Router, React, TypeScript, and Tailwind stack.

## Development

```sh
npm install
npm run dev
npm run build
npm run start
npm run typecheck
npm run format:check
```

On PowerShell machines that block `npm.ps1`, use `npm.cmd` instead of `npm`.

## Content and architecture

- `data/portfolioData.ts` owns personal information, projects, skills, and experience. Project summaries are editorial restatements of the existing content. No external demo or social URLs are invented.
- `components/portfolio/Introduction.tsx` is the opening typographic composition.
- `SelectedWork.tsx` contains the flagship feature and interactive project index; `ProjectDialog.tsx` provides the full project descriptions and screenshots.
- `Profile.tsx` integrates the biography, technology index, expandable experience records, education, and certification.
- `Contact.tsx` preserves email and telephone links and adds a copy-email action.
- `Navigation.tsx` provides anchor navigation, a section indicator, and persistent theme selection.

## Visual system

`app/globals.css` owns all visual tokens and component styles. The palette uses warm paper, charcoal ink, and vermilion, with a dark profile spread and orange contact spread. Space Grotesk supplies display type, Inter supports body text, Georgia supplies italic contrast, and system monospace is reserved for metadata. Next.js self-hosts the Google fonts after the initial build downloads them.

Layouts share a 1440px maximum width, fluid gutters, fine one-pixel rules, and predominantly square surfaces. Responsive compositions change at 1100, 800, and 520px. All information remains accessible without hover. Images use Next.js responsive optimization and lazy loading. The native project dialog supports focus containment, Escape, backdrop dismissal, and focus restoration. Motion uses short CSS transitions and respects reduced-motion preferences; native scrolling remains intact.
