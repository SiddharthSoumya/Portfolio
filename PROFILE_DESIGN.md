# Portfolio design & content

The portfolio shares its charcoal, warm-white, and mint visual identity with the GitHub profile at [SiddharthSoumya/SiddharthSoumya](https://github.com/SiddharthSoumya/SiddharthSoumya).

## Content

The owner's supplied technical profile is the primary source. Public project source and the original portfolio supply project links, credentials, and scholarship context. Project-backed skills, the broader toolkit, exploration, and planned mobile work are separated. No performance metrics, production-readiness claims, or client testimonials are invented.

Edit `src/data/portfolio.js` for project descriptions, status, stack, and links. Edit `src/Profile.jsx` for the page structure, experience, and biography. The original sections remain available in `src/components/` for reference; the current app loads `Profile.jsx` and `profile.css`.

## Behavior

- Filter projects between all work, Java backends, and full-stack applications.
- Expand the engineering decisions for each project.
- Switch between dark and light themes; the choice is stored locally.
- Pause decorative motion; the choice is stored locally. Operating-system reduced-motion preferences are also respected.
- The mobile navigation is a keyboard-accessible disclosure; Escape closes it and restores focus.

## Design references

Original layouts and artwork, informed by the restrained dark-grid approach and terminal vocabulary in these references:

- [Developer Dark Grid Portfolio — Nicolas Meuzard](https://dribbble.com/shots/9809111-Developer-Dark-Grid-Portfolio)
- [Terminal UI Portfolio — Teo Choong Ching](https://dribbble.com/shots/27272226-Terminal-UI-Portfolio-web-concept)

## Development

```sh
npm ci
npm run dev
npm run build
```

Existing Vite and Vercel build conventions are preserved. The production output is `dist/`. No backend, credentials, analytics, or form service is required.
