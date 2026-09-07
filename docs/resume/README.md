# Public Resume

`anish-george-public.tex` is a public-safe derivative grounded in the career
repository's canonical evidence as reviewed on 2026-09-04. It replaces the older
networking draft in the portfolio without changing the original career repository.

Only LinkedIn, GitHub, and portfolio contact links are included. Internal product
and client names are generalized. The GenAI, test-infrastructure, and academic
project descriptions preserve their collaborative and non-production boundaries.
No numerical outcome is used except the approved conservative branch count.

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
