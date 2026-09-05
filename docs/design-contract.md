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
- Keep the compact `>_ ~/ag` identity in the upper-left header as an About link.
  The positioning statement is static content in the homepage terminal panel;
  it is not revealed by hover or focus.
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

### I006 — Static Terminal Thesis, 2026-09-04

- Remove the positioning statement's hover/focus reveal and homepage auto-peek.
- Present the statement as the primary static output in a framed `$` terminal,
  with a blinking caret and Lucide terminal chrome.
- Remove the separate `Build The Foundation.` / `Give good things somewhere to
  grow.` hero branding and wrap the `ls ./portfolio/` directory in matching
  terminal chrome.
- Keep the compact `>_ ~/ag` About link, values YAML panel, palette, navigation,
  and existing content model.
- Reference role applied: Sofka as terminal hierarchy and presentation
  inspiration; no Sofka operational content is reproduced.

### I007 — Specific Homepage Throughline, 2026-09-04

- Replace the vague homepage field-notes summary with a public-safe synthesis of
  recurring work across reusable CI/CD, containerized test infrastructure, and
  Kubernetes delivery.
- Keep the copy grounded in the approved throughline of runnable, deployable,
  observable systems and reduced developer friction.

### I008 — Build Reflect Improve Tagline, 2026-09-04

- Use `Build · Reflect · Improve` as the homepage field-notes tagline.
- Rewrite the supporting paragraph with short, direct sentences that describe
  experimentation, learning from friction, and deliberate improvement before
  connecting the pattern to Platform Engineering.

### I009 — Welcoming Geek-Out And Theme Icons, 2026-09-04

- Replace the homepage `geek-out/` directory description with a warmer invitation
  to find common interests.
- Show light and dark theme controls as Lucide sun/moon icon buttons. Keep the
  system preference as the default behavior and preserve explicit overrides.

### I010 — Warmer Directory Descriptions, 2026-09-04

- Rewrite the homepage `ls ./portfolio/` descriptions as warmer, first-person
  invitations while preserving the existing routes and terminal structure.

### I011 — Executing Hero Terminal And Light Hue, 2026-09-04

- Animate the homepage `cat README.md` command before revealing the thesis as
  terminal output, with reduced-motion fallback preserved.
- Add a subtle cool hue to light mode while keeping the existing neutral palette,
  contrast, and ambient-color approach.

### I012 — Executing Values Terminal, 2026-09-04

- Extend the terminal command sequence to the `cat values.yaml` panel: type the
  command, pause briefly, then reveal the YAML output.
- Preserve immediate content for reduced-motion users and no-JavaScript fallback.

### I013 — Consistent Directory Typography, 2026-09-04

- Normalize the homepage `ls ./portfolio/` descriptions to the terminal code
  font and a consistent line-height across desktop and mobile widths.

### I014 — Unified Motion And Reading Scale, 2026-09-05

- Use the same finite blinking-cursor behavior for the README and YAML command
  sequences.
- Set the homepage reflection paragraph in the terminal code font and increase
  the general reading scale and directory-description size.

### I015 — Homepage Type Scale, 2026-09-05

- Reduce the hero thesis slightly so the full statement has more breathing room.
- Increase navigation and button type sizes and padding.
- Increase YAML text sizing by approximately two CSS points while retaining
  responsive adjustments for intermediate and mobile widths.

### I016 — Rounded Theme Control, 2026-09-05

- Add a rounded segmented-control treatment to the light/dark theme toggle.
- Give the control a small right margin so it sits slightly left within the
  expanded top navigation bar.

### I017 — Header Wordmark Alignment, 2026-09-05

- Move the compact `>_ ~/ag` wordmark slightly right within the top navigation
  bar without changing its About-link behavior.

### I018 — Social Icons And Field Note Terminal, 2026-09-05

- Add recognizable Lucide GitHub and LinkedIn icons to the existing labeled
  social buttons.
- Present the homepage field-note preview as a small Linux-style file terminal
  window with a path bar and field-note metadata.

### I019 — Working Icons And Path Scale, 2026-09-05

- Use a valid Lucide UMD release so the existing icon placeholders render across
  the homepage controls, terminal chrome, and navigation affordances.
- Increase and vertically align the workspace path text to match the terminal
  typography scale.

### I020 — Wrapped Homepage Reflection, 2026-09-05

- Keep the homepage reflection text inside its grid column by allowing grid
  children to shrink and wrapping long technical terms safely.

### I021 — Justified Homepage Reflection, 2026-09-05

- Apply Word-style inter-word justification to the homepage reflection paragraph
  while keeping its final line left-aligned and preserving safe wrapping.

### I022 — Homepage Freeze, 2026-09-05

- Treat the homepage as approved and frozen for the next page iterations.
- Carry its established principles forward: terminal/Linux hierarchy, restrained
  color, unified readable typography, purposeful motion, accessible controls, and
  a warm personal voice.
- Do not make further homepage edits unless the user explicitly reopens it.

### I023 — About Page Revamp, 2026-09-05

- Revamp only the About page into a clearer profile → principles → throughline
  → direction flow, using the homepage terminal language as the visual system.
- Add the user's public GitHub avatar as a temporary profile image.
- Keep the homepage frozen and preserve the existing public-safe About content.

### I025 — Interior Terminal Typography, 2026-09-05

- Apply the homepage terminal font system to interior page content so commands,
  headings, labels, subtitles, cards, and supporting copy use one consistent
  typographic family.
- Preserve the existing size hierarchy, spacing, colors, and frozen homepage.

### I028 — About Foundation Output Column, 2026-09-05

- Use the open space inside the About profile terminal for a second
  `foundation.yaml` output column.
- Show dependable runtime, repeatable delivery, observable systems, and the
  `build / reflect / improve` working loop without adding new career claims.
- Stack the output below the profile copy on smaller screens.

### I029 — EY-Grounded About Message, 2026-09-05

- Keep the existing About terminal and `foundation.yaml` visual treatment.
- Replace repeated foundation prose with a concise, personal account grounded in
  verified EY platform-delivery work.
- Use simple sentences to connect friction reduction, developer enablement, and
  the experimenter’s build / reflect / improve loop without adding unsupported
  claims.

### I026 — Animated About Profile Terminal, 2026-09-05

- Present the About profile introduction in a terminal window with an animated
  `$ whoami` command followed by the profile output.
- Balance the portrait and terminal panel as stretch-height columns for wider
  laptop layouts while preserving the mobile stack.

### I027 — Holistic About Identity And Foundations, 2026-09-05

- Use `Platform Engineer · Builder · Bassist · Car Nerd` as the About identity
  line while keeping Platform Engineer first.
- Keep “Dependable” in the main heading and turn the foundation sentence into a
  numbered list of a place to run, a path to deploy, and a way to understand.
- Justify the supporting About copy and use the terminal panel space for the
  structured foundation output.

For each iteration, state the concrete scope and the applicable reference role.
If a request conflicts with an established constraint, identify the conflict and
resolve it with the user before implementing that dependent change. Once the user
has chosen, update this file and the local-only changelog during the same iteration.
Do not treat an agent's proposal as an approved design decision.

Before another iteration starts, its predecessor must have a recoverable Git
checkpoint. This contract is the stable reference; the local-only changelog records
change, and Git preserves the actual versions.
