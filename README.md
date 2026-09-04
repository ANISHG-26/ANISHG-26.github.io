# Anish George — Portfolio

An evidence-bounded personal portfolio built with Jekyll and hosted on GitHub Pages.

## Structure

- `_data/` keeps experience and project content separate from layout.
- `_layouts/` contains the shared HTML shell and metadata.
- `assets/css/` contains the visual system.
- `assets/js/` contains the light, dark, and system theme controller.
- `index.html` defines the initial single-page portfolio structure.
- `_drafts/` and `_posts/` reserve a clean path for future engineering writing.

## Local preview

Open the repository in its dev container, then run:

```bash
bundle exec jekyll serve --livereload --host 0.0.0.0
```

The site is available at `http://localhost:4000`.

## Direction

The first release stays focused on a strong home page. A later writing index and
individual project case studies can deepen the site without changing its identity.

Public deployment remains gated on content, link, privacy, and security review.
