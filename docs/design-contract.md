# Portfolio Design Contract

## Premise

Anish George's portfolio expresses engineering philosophy through Platform
Engineering: foundation-first thinking, empathy for developers, honest ownership,
and a willingness to build, test assumptions, and improve systems.

Core positioning:

> I build the delivery paths, runtime foundations, and developer workflows that help teams ship with confidence.

The site should feel like an engineer's personal workspace, with reflective writing
and individual interests. Terminal styling must shape the interface consistently,
rather than appear only as command labels on an otherwise unrelated design.

## Reference Roles

These roles are user-selected inspirations, not instructions to clone a site or
adopt its content. Inspect the relevant reference before implementing an aspect
of it; do not infer unseen details from a URL or a handoff.

| Reference | Role | Boundary |
| --- | --- | --- |
| [Kapil Mirchandani](https://kapilm26.github.io/) | Portfolio structure and organization | Preserve Anish's existing personal flavour and section model. |
| [Om Bharatiya — About](https://www.ombharatiya.com/about) | Long-term direction | Future depth, not an immediate requirement to rebuild the site. Specific patterns need inspection first. |
| [Sofka](https://sofka.rs/) | Primary terminal-theme inspiration | Translate terminal hierarchy and presentation to a personal portfolio; do not reproduce Kubernetes product content or imply a live system. |
| [Fienestar source](https://github.com/fienestar/jekyll-terminal-theme) | Jekyll terminal-theme implementation inspiration | No dependency adoption or theme replacement is implied. Check licensing and attribution before reusing code/assets. |
| [Fienestar demo](https://fienestar.github.io/jekyll-terminal-theme/) | Terminal-themed publishing reference | Keep readable articles and ordinary link navigation. |

Reference review on 2026-09-04: Sofka, Kapil, and Fienestar pages were accessible
as text. Om's About URL returned no extractable body text, so its detailed design
has not been verified. This is a reference-role contract, not a completed visual audit.

## Established Design Constraints

- Neutral charcoal dark mode, with cyan, teal, pink, and purple used deliberately
  as accents. Keep light mode usable.
- No green-tinted base theme or checkerboard background. Ambient color fields
  remain subtle and secondary to content.
- Terminal influence should inform typography, hierarchy, spacing, borders,
  navigation, and command/output grouping. Exact implementation comes in a
  separate iteration; no fake operational metrics or mandatory command entry.
- Keep the compact `>_ ~/ag` identity in the upper-left header. It links to About,
  reveals the positioning statement on hover/focus, and briefly animates on the
  homepage with reduced-motion support.
- Do not substitute a large terminal window for that identity without an explicit
  design decision from the user.
- Keep full navigation available on every page, including small screens.
- Use Initial Caps headings, sparse consistent Lucide icons, restrained motion,
  keyboard-accessible controls, and readable long-form text.
- Preserve a compact homepage hub and `/about/`, `/experience/`, `/projects/`,
  `/field-notes/`, and `/geek-out/` pages.
- Keep experience in `_data/experience.yml` and projects in `_data/projects.yml`.
- Preserve meaningful project color semantics: cyan for technical/interactive
  elements, purple for indexing/metadata, pink for status.
- Keep the engineering philosophy and personal interests. Visual iterations must
  not silently rewrite career positioning or replace the user's voice.

## How To Change This Contract

### I003 — User Direction, 2026-09-04

- Make foundation-first philosophy the brand, expressed through a terminal/Linux
  interface and a `cat values.yaml` panel. Keep the existing colors and ambient
  background. Preserve the small header identity alongside this content panel.
- Convey the career evolution through public-safe lessons from canonical evidence.
  Private notes can inform broad themes only; never copy private narratives into
  this repository or the built site.
- Keep the tone friendly, personal, and restrained. A public portfolio should
  invite conversation without exposing private motivations or employer criticism.
- Public resume contact links are limited to LinkedIn, GitHub, and this portfolio.
  No phone number, email, mailto/tel link, or embedded private contact data.
- User-confirmed interests: manual Volkswagen GLI, Japanese food, being a foodie
  and home cook, guitar, and bass. These are approved personal portfolio details,
  not additions to canonical professional evidence.
- This iteration is for local feedback. Commit it and wait for feedback before
  starting another design direction; no push or publication is authorized.

For each iteration, state the concrete scope and the applicable reference role.
If a request conflicts with an established constraint, identify the conflict and
resolve it with the user before implementing that dependent change. Once the user
has chosen, update this file and the local-only changelog during the same iteration.
Do not treat an agent's proposal as an approved design decision.

Before another iteration starts, its predecessor must have a recoverable Git
checkpoint. This contract is the stable reference; the local-only changelog records
change, and Git preserves the actual versions.
