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

### I051 — Linux Journey Directory, 2026-09-06

- Represent the About-page journey as a `tree ./journey/` directory navigator.
- Keep “The Tools Changed. The Instinct Stayed.” on one line at roomy widths,
  with a responsive wrap on narrow screens to prevent overflow.
- Present each journey theme as a selectable directory whose public-safe content
  appears as the corresponding `README.md` output.
- Keep the controls keyboard-accessible and preserve a readable first-panel
  fallback when JavaScript is unavailable.

### I052 — About Reading Alignment, 2026-09-06

- Extend the homepage’s inter-word justification treatment to About-page body
  paragraphs in the principles cards, journey output, and direction callout.
- Keep terminal commands, headings, and the short principles quote left-aligned.

### I053 — Journey Cat Reveal, 2026-09-06

- Animate the selected journey directory’s `cat .../README.md` command on click,
  then reveal its content as terminal output.
- Keep the interaction keyboard-accessible and show the complete content
  immediately for reduced-motion users.

### I055 — Compact Animation Control, 2026-09-06

- Match the animation toggle’s dimensions, radius, icon scale, and visual weight
  to the adjacent theme controls in the header.

### I056 — Responsive Animation Control, 2026-09-06

- Keep the animation toggle beside the theme control at responsive header widths
  instead of allowing it to stretch into a separate grid row.

### I057 — Grouped Header Controls, 2026-09-06

- Group the theme and animation controls as one header item so the responsive
  grid preserves their compact side-by-side layout at every width.

### I058 — Small Header And Bassline Polish, 2026-09-06

- Add a small left separation before the animation control.
- Use `# guess the bassline` as the bassline terminal comment while preserving
  the approved transcription.

### I060 — About Direction Card, 2026-09-06

- Remove the duplicate About-page link to the longer Platform Engineering story,
  which is already featured on the homepage.
- Present the existing “Still Learning” content in the homepage’s terminal-card
  pattern while retaining its distinct “On Growing Deliberately” link.

### I061 — Direction Label And Light Header Contrast, 2026-09-06

- Remove the repeated “# Still Learning” corner label from the direction card.
- Give the light-mode navigation bar a modestly darker surface for clearer
  separation from the page while leaving dark mode unchanged.

### I062 — Softer Light Header Contrast, 2026-09-06

- Reduce the light-mode header contrast to a subtle 94/6 surface mix after
  visual review, preserving the gentle separation without a strong band.

### I063 — Curiosity Icon, 2026-09-06

- Replace the chemistry-oriented lab bottle icon on the Curiosity card with a
  search icon that better represents asking questions and looking deeper.

### I064 — About Copy Tightening, 2026-09-06

- Remove the awkward “And” from the About description.
- Tighten the direction-card sentence to a single clean line on wider layouts
  without changing its meaning.

### I065 — Restore Direction Copy Spacing, 2026-09-06

- Restore the full user-approved direction-card sentence.
- Keep the direction paragraph left-aligned so justification does not create
  awkward word spacing.

### I070 — Constant Profile Picture, 2026-09-07

- Keep the About portrait card at a constant `20rem` profile width on layouts
  that can support it, with a fluid fallback on narrower screens.
- Center the profile card when the layout stacks at smaller widths.

### I071 — Circular Profile Picture, 2026-09-07

- Present the bounded About portrait as an inset circular profile picture inside
  the existing terminal-style card.
- Preserve the card frame, public-profile caption, and centered cat footer.

### I072 — Square Avatar Sizing, 2026-09-07

- Ensure the GitHub profile image keeps its intrinsic 1:1 sizing by allowing its
  rendered height to follow its responsive width before applying the circle crop.

### I073 — Avatar Inset Spacing, 2026-09-07

- Increase the circular avatar’s even inset within the portrait card so the
  image has clearer breathing room above and below the caption.

### I074 — About Page Freeze, 2026-09-07

- Freeze the current About page as the approved direction before moving to the
  next page.
- Preserve its terminal/Linux hierarchy, justified reading copy, journey tree
  interaction, animation control, direction card, and circular profile card.
- Do not make further About-page edits unless the user explicitly reopens it.

### I069 — Bounded Portrait Card, 2026-09-07

### I068 — Natural Portrait Card Height, 2026-09-07

- Keep the About portrait card at its natural content height instead of
  stretching it to match the adjacent profile terminal.
- Preserve the responsive stack and centered terminal-cat footer treatment.

### I067 — Foundations Intro Width, 2026-09-07

- Let the Foundations First intro description use the available horizontal
  space instead of the narrower interior-page text cap.
- Preserve the existing wording, typography, and responsive wrapping.

### I066 — Direction Card Width, 2026-09-06

- Allow the direction-card paragraph to use the available card width instead of
  inheriting the narrower long-form text limit.
- Preserve the original wording and natural left-aligned spacing.

### I059 — Light Hue And Header Spacing, 2026-09-06

- Shift the grouped theme and animation controls slightly left from the header
  edge with a small right margin.
- Increase the light-mode ambient cyan, purple, and pink hue fields modestly
  while preserving the neutral foundation and dark-mode palette.

### I054 — Global Animation Control, 2026-09-06

- Add a persistent header control that turns site animations on or off.
- Keep animations enabled by default, respect the system reduced-motion setting,
  and make the control keyboard-accessible with an explicit pressed state.
- When disabled, reveal content immediately while preserving all navigation and
  content interactions.

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

### I030 — Evolution Across Projects, 2026-09-05

- Reframe the About message around the recurring pattern across Accenture,
  Morgan Stanley, and later platform-delivery work rather than centering EY.
- Keep the existing terminal, YAML highlight, visual layout, and simple-sentence
  tone.
- Describe only verified delivery, onboarding-automation, test-reproducibility,
  Kubernetes, artifact, release, and observability experience.

### I031 — Animated Foundation And Bass Output, 2026-09-05

- Keep the About message natural and centered on the evolution across projects.
- Animate `cat foundation.yaml`, reveal its YAML output line by line, then run a
  delayed `cat bassline.txt` easter egg underneath it.
- Use an original bass riff rather than reproducing copyrighted song notation.
- Preserve the existing visual system and respect reduced-motion preferences.

### I032 — Terminal Music Easter Eggs, 2026-09-05

- Extend the delayed About terminal sequence with the user-provided bass-note
  change and the label “Try and make a groove out of this”.
- Follow the groove with animated `cat GLI.txt` and `cat rock-on.txt` ASCII output
  to use the remaining terminal space.
- Keep the additions original, lightweight, and compatible with reduced motion.

### I033 — Refined Terminal Easter Eggs, 2026-09-05

- Remove the rock-on ASCII block and its delayed animation.
- Correct the GLI ASCII output and keep it as the final delayed terminal reveal.
- Stretch the bass tab horizontally while preserving the user-provided note idea.

### I034 — GLI ASCII Treatment, 2026-09-05

- Rework the GLI ASCII mark toward the provided reference’s large, spaced,
  red-letter treatment.
- Keep it terminal-native, animated, and compatible with the existing Linux theme.

### I035 — Restore GLI And Bass Output, 2026-09-05

- Restore the smaller GLI treatment from the earlier terminal iteration.
- Restore the earlier compact bass groove and its original note spacing.
- Leave the terminal sequencing and GLI animation behavior unchanged.

### I036 — Sequential Bass Notes And Reduced GLI, 2026-09-05

- Place the E-string notes after the A-string phrase so the tab reads as a
  single-note groove rather than simultaneous notes or chords.
- Restore the reference-inspired GLI treatment at a smaller terminal size.
- Preserve the existing delayed output sequence.

### I037 — Linked Terminal Command Sequence, 2026-09-05

- Link the About commands into one ordered sequence: `whoami`, `foundation.yaml`,
  `bassline.txt`, then subtle `.gli` output.
- Keep each command visible while typing and reveal only its output after the
  command completes.
- Preserve the existing animation style and reduced-motion behavior.

### I038 — Subtle VW Mark And Profile Cats, 2026-09-05

- Rename the subtle GLI terminal file to `.vw`.
- Add one block to the I in the reference-inspired GLI ASCII mark.
- Use the open profile-card space for a small terminal-style pair of cats.

### I039 — Repair GLI And Cat ASCII, 2026-09-05

- Repair the profile cats’ escaped characters so the ears render consistently.
- Add the missing vertical GLI block and keep the reduced reference-inspired
  styling.

### I040 — Rendering Reliability Rule, 2026-09-05

- Treat visual elements as assets that need failure handling, not only markup
  that looks correct in source.
- Prefer local, versioned images and icon assets; when an external source is
  retained, provide a local fallback, explicit dimensions, and meaningful alt
  text or accessible text.
- Keep ASCII inside `<pre>` blocks, escape HTML-sensitive characters, use stable
  monospace line lengths, and test at the target desktop and mobile widths.
- Verify each visual iteration in light, dark, reduced-motion, and unavailable
  external-asset states before calling it complete.

### I041 — Plain ASCII Fallbacks, 2026-09-05

- Keep the sequential bass tab unchanged because its spacing intentionally
  places the E-string phrase after the A-string phrase.
- Replace fragile backslash-based cat art with plain ASCII characters that do
  not depend on HTML entity rendering.

### I042 — Restore Complete Bass Pattern, 2026-09-05

- Restore the missing two `5` notes on the D string.
- Keep the complete user-provided D, A, and E note pattern in sequence rather
  than aligning notes vertically as chords.

### I043 — Freeze GLI And Cat Art, 2026-09-06

- Restore the confirmed three-line pair of cats with literal backslashes.
- Remove the two unintended vertical rows from the GLI mark, leaving one
  continuous horizontal bar at the top and bottom of the I.
- Treat `_includes/ascii/cats.txt` and `_includes/ascii/gli.txt` as the editable
  sources of truth, render them through HTML escaping, and validate that the
  generated page remains byte-for-text faithful to those sources.
- Leave the bass tab unchanged until its earlier versions are reviewed with the
  user.

### I044 — Even GLI I Bars, 2026-09-06

- Widen only the GLI letter I's top and bottom horizontal bars from five blocks
  to six so they appear even.
- Preserve the G, L, I stem, confirmed cats, raw-source workflow, and bass tab.

### I045 — Responsive ASCII Presentation, 2026-09-06

- Keep the approved GLI and cat source text unchanged.
- Stack the About terminal's internal copy and output columns at tablet widths so
  neither is compressed inside the outer profile layout.
- Never wrap ASCII art or tablature lines. Scale the bass tab conservatively on
  narrow screens and retain horizontal scrolling as a last-resort safeguard.
- Version the local stylesheet URL per site build so browsers load responsive
  changes instead of retaining an earlier cached layout.
- Validate representative phone, tablet portrait and landscape, laptop, and
  desktop widths without changing the frozen artwork.

### I046 — Automated Artwork Regression Tests, 2026-09-06

- Test the approved cat and GLI text as frozen golden sources.
- Test that the About template includes and HTML-escapes those sources, that the
  built page preserves them exactly, and that the responsive no-wrap and tablet
  stacking rules remain present.
- Run the regression suite and existing public-output validator in the GitHub
  Pages build before its artifact can be uploaded or deployed.
- Render the About page in Chromium at representative phone, tablet, laptop, and
  desktop viewports. Fail on changed artwork line counts, wrapping, clipping,
  incorrect tablet column layout, or page-level overflow, and capture a full-page
  screenshot whenever a visual test fails.

### I047 — Freeze Correct Bassline, 2026-09-06

- Use the extended I033 bass pattern as the musical source, remove its first
  E-string `5-7`, and retain the later `7-5-3---5-7` phrase.
- Preserve the original 32-character tab width and the D- and A-string timing.
- Treat `_includes/ascii/bassline.txt` as the editable source of truth, render it
  through HTML escaping, and include it in source, generated-page, and visual
  regression checks.

### I048 — Drop-D Bassline, 2026-09-06

- Replace the earlier groove with the user-provided Drop-D transcription using
  `G–D–A–D` tuning and no hammer-on notation.
- Keep the A-string dead note, omit the dead note before the upper D-string
  `3–4`, and align every closing bar in the same character column.
- Freeze the approved text in the existing bassline source and test its exact
  content, tuning, row lengths, closing bars, generated output, and responsive
  browser presentation.
- Scale the longer tab against its containing output panel so it remains intact
  in both stacked tablet and split laptop layouts without changing its source.

### I049 — Center Confirmed Art, 2026-09-06

- Center the confirmed cat pair horizontally and vertically within its portrait
  footer panel while keeping the profile caption left-aligned.
- Center the confirmed GLI artwork horizontally beneath `.vw` while keeping its
  terminal command left-aligned.
- Preserve every character in the frozen cats, GLI, and bassline sources and add
  structural and browser-geometry assertions for the centered artwork.

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
