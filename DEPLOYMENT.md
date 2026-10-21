# GitHub and Vercel Deployment Guide

This project is a static Vite application. Vite transforms the React source and produces browser-ready HTML, CSS, JavaScript, and local assets in `dist/`. Git records the source changes, GitHub hosts the repository, and Vercel builds and serves the static output. There is no application server, database, API, or runtime secret.

## 1. Prerequisites

- A current Node.js LTS release and npm
- Git installed and configured with your name and email
- A GitHub account
- A Vercel account

Check local versions:

```bash
node --version
npm --version
git --version
```

## 2. Install and run locally

From the project root:

```bash
npm install
npm run dev
```

Vite prints a local development URL (usually `http://localhost:5173`). The development server provides fast feedback; it is not the production build.

Before the first deployment, verify the actual production build:

```bash
npm run lint
npm run build
npm run preview
```

Open the preview URL and check the built site. The commands have distinct purposes:

- `npm run dev` runs Vite’s development server with development-time behavior and hot updates.
- `npm run build` compiles the project into static files under `dist/`. A successful development session does not prove this build will succeed.
- `npm run preview` serves the contents of `dist/` locally so you can inspect the production output before deployment. It is not a replacement for testing the deployed site.

Do not edit `dist/` directly; it is generated again by the build.

## 3. Prepare Git and GitHub

First review the project files and ensure you have replaced personal placeholders you do not want to publish. Check the staged file list before committing; never stage credentials or private material.

If the project directory does **not** already contain Git history, initialize it and make the first commit:

```bash
git init
git status --short --branch
git add .
git status --short
git commit -m "chore: create portfolio starter"
git branch -M main
```

- `git init` starts repository history in this directory.
- `git status` shows untracked, modified, and staged files. Review it before adding files.
- `git add .` stages the current project files; `.gitignore` excludes dependencies and generated output. Review `git status` again before committing.
- `git commit` records the staged snapshot locally.
- `git branch -M main` names the branch `main`.

Create an empty GitHub repository named `siddharth-portfolio` in your own account. If GitHub offers to add a README, license, or `.gitignore`, leave those unchecked for this existing local starter; otherwise the histories may need to be reconciled before the first push.

Inspect remotes before adding one:

```bash
git remote -v
```

If there is no `origin`, add your own repository URL (replace the username):

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/siddharth-portfolio.git
git push -u origin main
```

`git remote add` does not overwrite a remote. If `origin` already exists, verify that it points to the intended repository before pushing; do not add or replace it blindly. The `-u` option sets the upstream branch so later pushes can use `git push`.

If you deliberately created a GitHub repository with an initial commit, inspect both histories before combining them. Do not force-push to resolve a mismatch.

## 4. Make and publish an update

After editing and checking your changes:

```bash
npm run lint
npm run build
git status --short
git diff --check
git diff
git add src/data/portfolio.js
git diff --staged
git commit -m "content: update portfolio details"
git push
```

Stage the files you intended to change; adjust the example path if your update affects other files. `git diff` reviews unstaged edits, `git diff --staged` reviews what will be committed, and `git diff --check` detects whitespace errors.

Inspect history and branch state:

```bash
git status --short --branch
git log --oneline --decorate -10
git diff HEAD~1
```

## 5. Import the GitHub repository into Vercel

1. Confirm `npm run lint` and `npm run build` pass locally, then push the branch to GitHub.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Verify the project root directory is the directory containing `package.json`.
4. Use these project settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Vite |
   | Install command | `npm install` |
   | Build command | `npm run build` |
   | Output directory | `dist` |
   | Root directory | Project root |

5. Inspect the deployment configuration and build log, then deploy. No environment variables are required.
6. Vercel provides a deployment URL when the build succeeds. Confirm the site loads and review the production checklist below.

The exact repository, root directory, and branch depend on your Vercel project settings. Do not assume a production branch: in Vercel’s project **Settings → Git**, verify which branch is configured as the **Production Branch** before relying on automatic production deployments.

## 6. Continuous deployment and rollback

- Vercel watches the connected GitHub repository. A push to the configured production branch normally creates a production deployment.
- A push to another branch or a pull request normally creates a preview deployment. Preview deployments let you review changes before merging; confirm the branch and pull-request settings in your Vercel project.
- Each deployment is associated with a source commit. In Vercel’s project **Deployments** view, inspect the deployment status, commit, and build logs. Compare its commit with `git log` or the latest GitHub commit to verify that it contains your latest changes.
- If a new production deployment causes a problem, use Vercel’s deployment controls to promote or roll back to a known-good deployment. Verify the resulting production URL afterward, then fix the source and deploy a new commit; do not treat a rollback as a source-code fix.

## 7. Production verification checklist

Visit the actual HTTPS deployment on desktop and a small mobile viewport:

- [ ] Homepage and all sections load without a blank screen.
- [ ] Desktop and mobile layouts have no horizontal overflow or clipped content.
- [ ] Navigation links reach the correct sections; the mobile menu opens, closes after a link, and closes with Escape.
- [ ] Light and dark themes work; a selected theme persists after refresh.
- [ ] Profile photograph loads and has appropriate alternative text.
- [ ] Resume link works after you add a real `public/resume.pdf`; before then, the controls should indicate it is unavailable.
- [ ] GitHub and LinkedIn links point to your real profiles.
- [ ] Email opens the intended `mailto:` address.
- [ ] Browser console has no uncaught errors; Network panel has no unexpected failed assets.
- [ ] Static assets load from the deployed site and the browser shows HTTPS.
- [ ] Keyboard focus is visible, links and controls are understandable, and reduced-motion preferences are respected.
- [ ] Use browser accessibility and performance tools to check the deployed page. This checklist is not a formal WCAG conformance claim.

## 8. Troubleshooting

### Dependency installation fails

Read the complete first npm error and identify the package and version conflict it reports. Check `node --version` and `npm --version`, compare the dependency’s peer requirements, and use the committed `package-lock.json` for reproducible installs:

```bash
npm ci
```

Do not delete the lockfile as a first response. If you intentionally change dependencies, use npm to update the manifest and lockfile together, then run lint and build.

### JavaScript or lint errors

Run:

```bash
npm run lint
npm run build
```

Start with the first meaningful error and trace it to its import, variable, component, or syntax. Fix the cause; do not hide it by disabling lint checks globally or weakening project settings without a specific reason.

### Vite production build fails

Check the first reported module or syntax error. Verify import paths, filename capitalization, installed package names, and that the referenced file exists. Linux build environments are case-sensitive even when a local filesystem is not.

### It works locally but fails on Vercel

Compare the Vercel build log with the local command and inspect:

- Case-sensitive import paths
- Node.js version used by the build
- Install and build commands
- Output directory (`dist`)
- Project root directory
- Files committed to Git and the lockfile used by the deployment
- Unintended environment assumptions
- Asset paths, especially public assets referenced from the site root

### Broken profile image

Check that the file exists in `public/`, that the `src` in the Hero component matches its exact filename and capitalization, and that the deployed Network request succeeds. A root-level public asset is referenced as `/filename.ext` (for example `/profile-placeholder.svg`).

### Stale deployment

Confirm the commit was pushed, the intended GitHub repository is connected, and the pushed branch matches the Vercel production-branch setting. Inspect the latest deployment’s commit and status. A successful older deployment does not contain a newer unbuilt commit.

### Missing resume

The resume is intentionally not bundled. Add your real PDF at `public/resume.pdf`, set `resumePath: "/resume.pdf"` in `src/data/portfolio.js`, run a production build, and verify that `https://YOUR_DEPLOYMENT_HOST/resume.pdf` loads after deployment.

### Theme flashes on page load

The document head reads the stored theme (or system preference) before the React app mounts. If you change the storage key or theme names, update both the initializer in `index.html` and the hook in `src/hooks/useTheme.js`. The theme still functions for the current page if browser storage is blocked.

### Build succeeds but the page is broken

The build checks compilation, not every browser interaction. Check the browser console for runtime errors and the Network panel for missing files or failed imports. Test the production preview and deployed URL, not only the Vite development server.

## 9. Static hosting notes

This single-page site has no client-side router, so it does not need a Vercel rewrite configuration. If you add routes later, configure rewrites only if those URLs must serve the app’s entry point directly.

Static frontend code is public after deployment. Do not put secrets in source files or environment variables intended for client code. This portfolio intentionally uses no server-side credentials or visitor tracking.
