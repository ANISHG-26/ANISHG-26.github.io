# Anish George — Portfolio

An evidence-bounded personal portfolio built with Jekyll and hosted on GitHub Pages.

## Structure

- `_data/` keeps experience and project content separate from layout.
- `_layouts/` contains the shared HTML shell, metadata, and story layout.
- `assets/css/` contains the visual system.
- `assets/js/` contains the theme controller and reduced-motion-aware page animation.
- `assets/resume/` contains the public default resume linked from the home page.
- `index.html` defines the compact portfolio hub.
- `about.html`, `experience.html`, `projects.html`, `field-notes.html`, and
  `geek-out.html` keep the main sections focused instead of relying on one long page.
- `_posts/` contains public field notes on engineering philosophy, growth, and direction.

## Local preview

Open the repository in its dev container, then run:

```bash
bundle exec jekyll serve --livereload --host 0.0.0.0
```

The site is available at `http://localhost:4000`.

## Direction

The current visual direction combines a modern developer blog with terminal-inspired
interaction language, a neutral gray dark mode, and cyan, teal, pink, and purple accents.
A later writing index and individual project case studies can deepen the site without
changing its identity.

Public deployment remains gated on content, link, privacy, and security review.
