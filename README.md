# Siddharth Soumya — Portfolio

A static, single-page portfolio starter built with React, JavaScript, Vite, Tailwind CSS v4, shadcn/ui source components, Motion for React, and Lucide icons. It has no backend, environment variables, analytics, or third-party image dependencies.

The supplied profile details are limited to the facts provided: a B.Sc. Computer Science student in India and a software development intern. Bracketed fields, empty links, skills, and project entries are editable starter content—not verified claims. Review them before publishing.

## Run locally

Use a current Node.js LTS release and npm. From the project root:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To verify the production output:

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` creates the deployable static site in `dist/`. `npm run preview` serves that built output locally; it is not the development server.

## Personalize before publishing

1. **Profile photograph:** replace `public/profile-placeholder.svg` with your own optimized image, or add `public/profile.jpg` and update the image path and alternative text in [`src/components/sections/Hero.jsx`](./src/components/sections/Hero.jsx). Keep the existing portrait-shaped frame in mind.
2. **Contact and social profiles:** fill `email`, `github`, and `linkedin` in [`src/data/portfolio.js`](./src/data/portfolio.js). Blank values deliberately render as unavailable text rather than broken or invented links.
3. **Resume:** add your real PDF as `public/resume.pdf`, then set `resumePath: "/resume.pdf"` in `src/data/portfolio.js`. Until both steps are complete, the resume controls are visibly unavailable.
4. **Projects:** confirm each project’s description, problem, contribution, technologies, status, repository, and demo in `src/data/portfolio.js`. The three initial entries are prompts, not claims about completed functionality.
5. **Experience and education:** replace bracketed organization, institution, and date fields with verified information. Add only responsibilities you can substantiate.
6. **Skills:** remove technologies you have not used. The initial groups are suggestions, not proficiency ratings.
7. **Achievements:** add verified items to the `achievements` array. The section is intentionally complete and presentable while the array is empty.
8. **Metadata:** update the title and description in `index.html` if your preferred public-facing wording changes. Add a canonical URL and absolute Open Graph image only after you know the production domain.

## Project map

```text
public/
  favicon.svg                 Local site icon
  profile-placeholder.svg     Replace with a real portrait before publishing
src/
  components/
    sections/                 One component per portfolio section
    ui/                       Source-owned shadcn/ui component files
    Navbar.jsx, Footer.jsx    Site-wide layout
  data/portfolio.js           Editable personal content
  hooks/useTheme.js           Theme state and persistence
  lib/utils.js                Shared class-name helper
  App.jsx                     Page composition
  index.css                   Theme tokens, responsive styling, and motion preferences
  main.jsx                    React entry point
components.json               shadcn/ui CLI style, aliases, and JavaScript settings
jsconfig.json                 Editor path aliases for JavaScript
vite.config.js                Vite, React, Tailwind v4, and source alias configuration
eslint.config.js              JavaScript, React Hooks, and React refresh lint rules
index.html                    Static document shell, SEO metadata, and early theme setup
package.json                  Dependencies and npm scripts
package-lock.json             Exact npm dependency resolution
```

The UI components in `src/components/ui/` were added with the official shadcn CLI and are source files you own and can edit. Their styles are adapted to this portfolio’s semantic CSS variables. Tailwind CSS v4 is integrated through its Vite plugin; this project intentionally does not use a Tailwind v3 configuration file.

### Important configuration files

- `package.json` defines the project scripts and direct dependencies. `npm run dev` starts Vite, `npm run lint` checks JavaScript, `npm run build` creates static production assets, and `npm run preview` serves those assets locally.
- `package-lock.json` records the exact dependency tree used by npm. Commit it and use `npm ci` in clean or automated installs.
- `vite.config.js` enables React and Tailwind CSS v4 and maps `@/` imports to `src/`.
- `jsconfig.json` teaches editors about the JavaScript `@/` alias. ESLint performs the code-quality checks; no TypeScript compiler or TypeScript source is used.
- `index.html` provides the browser document, metadata, favicon, and a small early theme initializer to reduce theme flashing.
- `src/main.jsx` mounts React and loads the global stylesheet.
- `src/App.jsx` composes the page sections.
- `src/index.css` defines light/dark semantic colors, layout, responsive breakpoints, focus styles, and reduced-motion behavior.
- `components.json` configures the shadcn CLI for JavaScript components, Tailwind v4, and project aliases.
- `.gitignore` keeps dependencies, build output, local environment files, and machine clutter out of Git.

## Themes, accessibility, and motion

The first visit follows the operating system’s light/dark preference. A manual choice is saved in `localStorage`; if storage is unavailable, the current page still changes theme. Navigation works with keyboard controls, the mobile menu closes on selection or Escape, and focus states and a skip link are provided. Animations are subtle and respect `prefers-reduced-motion`.

The portfolio is a client-rendered React page. Its HTML shell includes a small fallback heading, but search crawlers that do not execute JavaScript may not see the full portfolio content. Revisit metadata and indexing after deployment; server rendering is intentionally outside this static starter’s scope.

## Git, GitHub, and Vercel

For step-by-step instructions—including safe first-push guidance, continuous deployment, production verification, and troubleshooting—see [`DEPLOYMENT.md`](./DEPLOYMENT.md).

The current workspace is not initialized as a Git repository. No repository, remote, commit, or live deployment has been created for you.
