# My Book Wiki — GitHub Pages Ready

Static bilingual book/wiki template.

## Quick Start (GitHub Pages — Project Site)

1. Create a new GitHub repository (public or private).
2. Upload all files in this folder to the repo root (or push via git).
3. In **Settings → Pages**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` and folder `/ (root)`
4. Wait for the green check. Your site will be live at:
   - `https://<your-username>.github.io/<repo-name>/`

> This template uses **relative paths**, so it works for both user sites and project sites.

### Optional: GitHub Actions workflow

If you prefer deploying to a `gh-pages` branch with Actions, add this file:
`.github/workflows/pages.yml` (uncomment in this repo and push).

## Add Chapters

- Duplicate `chapters/chapter-01.html` to create `chapter-03.html`, etc.
- Update the sidebar in each page (search for the `<aside>` block) to add new chapter links.
- Keep using `.pair` blocks to align Italian and translation.

## Notes

- `.nojekyll` disables Jekyll processing (so folders like `assets/` work as-is).
- `404.html` provides a friendly not-found page.