# armends-page

Personal portfolio site for Armend Ukehaxhaj, built with React, TypeScript, and Vite.

Live at: https://armendu.github.io/armends-page/

## Stack

- **React 18** + **TypeScript**
- **Vite 6** — dev server and build tooling
- **FontAwesome** — icons
- Plain CSS with custom properties — no CSS framework
- **gh-pages** — deployment to GitHub Pages

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173/armends-page/
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build locally
npm run deploy   # build and push to GitHub Pages
```

## Project structure

```
armends-page/
├── index.html                          # Entry HTML (Vite root)
├── vite.config.ts                      # Vite config (base path, plugin)
├── tsconfig.json                       # TypeScript config
├── public/
│   └── favicon.svg                     # SVG monogram favicon (AU)
└── src/
    ├── index.tsx                       # App entry point
    ├── index.css                       # Global reset + smooth scroll
    └── components/
        ├── AppComponent/               # Root layout, CSS custom properties, dark mode vars
        ├── HeaderComponent/            # Fixed nav, active section tracking, theme toggle
        ├── HeroComponent/              # Name, title, bio, GitHub + LinkedIn links
        ├── ExperienceComponent/        # Work history (5 roles with stack tags)
        ├── SkillsComponent/            # Grouped tech skills grid
        ├── EducationComponent/         # Degrees + languages
        └── FooterComponent/            # Social links, dark footer
```

Each component folder contains a `.tsx` file and a co-located `.css` file. All colours and spacing are driven by CSS custom properties defined in `App.css`.
