# Changelog

Each iteration has a dated entry and a corresponding local Git commit. Entries
describe actual changes; they do not imply public deployment or content approval.

## 2026-09-04 — I003 — Foundations First

- Rebuilt the homepage around foundation-first philosophy, a `cat values.yaml`
  panel, Linux-style directory navigation, and a featured evolution story.
  Preserved the charcoal/light palettes, ambient color fields, and compact identity.
- Reworked About into principles and a delivery-to-reproducibility-to-platform
  throughline. Made the direction article more restrained and public-facing.
- Added the user-confirmed guitar interest alongside bass, manual GLI, Japanese
  food, and home cooking. Kept private source narratives out of the repository.
- Added Home navigation on all pages and accurate promotion chronology from the
  canonical record. Generalized the student client's project name.
- Replaced the inherited resume with a two-page public version built from current
  canonical evidence. Included only LinkedIn, GitHub, and portfolio contact links.
  Retained public-safe LaTeX source and build instructions outside published output.
- Removed unused old design CSS and fixed a generated-theme stylesheet collision
  by using `portfolio.css`. Added graceful handling for blocked browser storage,
  readable content without JavaScript, and reduced-motion behavior.
- Added a public-output validation script and excluded documentation, scripts,
  temporary builds, and private workspace directories from Jekyll output.
- Validation: production Jekyll build; JavaScript syntax; nine HTML pages and all
  their local links/assets; public-output exclusions; two-page PDF text, links,
  metadata, attachment check, and visual inspection of both rendered pages.
  Browser checks covered desktop and mobile, light and dark themes, navigation,
  keyboard focus, and horizontal overflow. Reduced-motion and unavailable-storage
  initialization passed a Node smoke check. No live OS reduced-motion toggle was
  used; that branch was checked with an emulated media preference and CSS review.
- Excluded claims: unsupported production isolation, formal on-call/SLO ownership,
  unapproved numerical outcomes, and client/private implementation details. The
  portfolio changes do not modify canonical career facts or the original resume.
- Status: local feedback iteration, not pushed or deployed. Await user feedback
  before the next design iteration.

## 2026-09-04 — I002 — Inherited Draft Checkpoint

- Preserved the inherited homepage, section pages, field notes, shared templates,
  styles, and JavaScript before the terminal redesign.
- Validation: reviewed source and existing diffs; staged whitespace check.
  This is an unverified draft checkpoint, not a validated release.
- Excluded the inherited resume PDF because a public version without direct
  contact details is required. Consequently this historical checkpoint alone
  does not supply its linked resume asset. Generated site output is also excluded.
- The following iteration will review public wording, replace the resume, and
  validate the redesigned site. Nothing is published by this checkpoint.

## 2026-09-04 — I001 — Workflow And Design Contracts

- Added `AGENTS.md` with mandatory per-iteration local commits, explicit staging,
  preserved checkpoints, validation requirements, and handoff reporting.
- Added `docs/design-contract.md` to preserve the portfolio premise, established
  constraints, and the user's reference roles before implementation resumes.
- Established this changelog and a requirement to checkpoint the inherited site
  draft separately before further site changes.
- Validation: reviewed the documentation diff, verified referenced repository
  paths, and ran the staged whitespace check. No site build was required because
  this iteration changes documentation only.
- Boundary: inherited site edits remain uncommitted in this iteration. They are
  not a recovered historical version and have not been revalidated here. Earlier
  unrecorded visual iterations cannot be reconstructed from Git history.
- Outstanding: separate baseline checkpoint; detailed visual reference review;
  resolve resume candidate approval before public deployment. No site redesign,
  push, merge, or deployment is part of this iteration.
