# Public Resume

`anish-george-public.tex` is the general-purpose, public-safe Platform Engineering
resume grounded in reviewed career evidence and checked for
content coherence on 2026-09-07. It uses the established two-page application-resume
format while keeping the positioning broad enough for Platform, Infrastructure,
select SRE, and technically aligned forward-deployed conversations.

Only LinkedIn, GitHub, and portfolio contact links are included. Internal product
and client names are generalized. The GenAI, test-infrastructure, and academic
project descriptions preserve their collaborative and non-production boundaries.
No numerical outcome is used except the approved conservative branch count.
Consulting strengths appear as requirements discovery, systems thinking, technical
communication, and cross-functional delivery; they support the engineering story
without changing the primary Platform Engineering position.

The source intentionally contains only material selected for the public resume.
Project links and additional skills can be added later when they are useful to a
reader and ready for publication.

Build from the portfolio root using an installed LaTeX environment:

```sh
mkdir -p tmp/pdf
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=tmp/pdf docs/resume/anish-george-public.tex
pdftoppm -png tmp/pdf/anish-george-public.pdf tmp/pdf/resume
```

Inspect both rendered pages before copying the PDF to
`assets/resume/anish-george-resume.pdf`. Build Jekyll and run
`python scripts/check_public.py` with pypdf installed. This directory and temporary
build files are excluded from the public site. Local iteration approval does not
constitute authorization to deploy the portfolio.
