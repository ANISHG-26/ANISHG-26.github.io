# Portfolio Agent Contract

Read this file, `docs/design-contract.md`, and the local-only
`.context/private/privacy.md` before changing this portfolio. Maintain the local-only
`.context/private/CHANGELOG.md` for every iteration. If either private file is absent,
recreate a conservative local copy before working; never move it into the tracked tree.
The user's latest explicit direction takes precedence; update these contracts when
that direction changes.

## Privacy Boundary

- Treat every tracked file, commit message, branch name, Issue, pull request, build
  artifact, and generated page as public. Git deletion does not remove prior commits.
- Do not copy restricted material from the career repository or any other repository
  into this one. Restricted material includes direct contact details, home addresses,
  raw career narratives, private reflections, job-search or application status,
  compensation, recruiter or networking records, private correspondence, credentials,
  confidential client or product details, and local filesystem paths.
- Import career claims only from approved canonical evidence and reduce them to the
  minimum public-safe wording needed by the site. Public identity, approved biography,
  professional history, education, portfolio interests, GitHub, LinkedIn, and this
  portfolio URL are allowed only when intentionally selected for publication.
- Never place raw source material in this repository, even temporarily. Use an ignored
  path under `.context/private/` for private review notes and delete disposable copies
  when they are no longer needed.
- Before committing, scan the staged diff and generated site for email addresses,
  phone numbers, `mailto:`/`tel:` links, secrets, local paths, and unintended personal
  details. Inspect PDF text, links, attachments, and metadata separately.
- A privacy audit may report findings but does not authorize publishing, pushing,
  rewriting Git history, or deleting private source material.

## Iterations And Git History

- An iteration is one coherent, reviewable change to design, content, behavior,
  or repository workflow. Do not batch several distinct design directions into
  one iteration.
- Inspect the branch, status, and relevant diffs before editing. Preserve existing
  work and distinguish inherited changes from the current iteration.
- Before the next site implementation, checkpoint the inherited uncommitted site
  work in a separate local baseline commit after reviewing the exact staged files.
  Label it as an inherited draft, not an approved design or approved public content.
  Exclude generated output, secrets, and private material. Record any excluded
  files and outstanding review in the changelog.
- Every completed iteration MUST end with a local Git commit. Update the local-only
  changelog before committing the iteration's tracked files. The changelog itself must
  remain ignored and must not be staged. Local commits are authorized by this contract;
  do not repeatedly ask whether to commit.
- Stage explicit paths or reviewed hunks. Never use blanket staging to absorb
  unrelated work. Inspect the staged diff and run `git diff --cached --check`.
- Use descriptive commit messages, for example `feat: restore terminal navigation`
  or `docs: define portfolio iteration contracts`.
- Preserve earlier checkpoints. Do not amend, squash, reset, or otherwise rewrite
  iteration history unless the user explicitly requests it. Restore a previous
  direction through a new commit.
- If an iteration cannot be validated, fix it before calling it complete. A useful
  unfinished checkpoint may be committed as `wip:` with failures and limitations
  recorded. If committing is blocked, report the blocker and remaining changes;
  do not silently move on to another iteration.
- Report the commit hash, changes, validation actually performed, and any remaining
  uncommitted files at handoff.
- Committing locally does not authorize pushing, merging, or deployment. Keep
  this work local until the user asks for those actions.
- Before pushing to a remote, run the repository's local Jekyll build followed
  by `npm run validate` (which runs the visual tests, frozen-artwork tests, and
  public-output audit). Do not push when a required check fails; record
  unavailable checks and their reason in the local changelog.

## Changelog

- Add a dated entry with a stable iteration ID for every iteration, newest first.
- Record what changed, why, validation results, and unresolved issues or exclusions.
- Distinguish planned work, inherited/unverified state, and completed changes.
- Do not invent historical entries for lost iterations. A handoff's reported
  validation is historical context, not a check run by the current agent.
- Keep entries public-safe. Do not include private career narratives, credentials,
  internal client information, or local personal paths.
- The entry remains local-only; record the resulting commit hash in it after commit.

## Implementation And Validation

- Agree on the scope against the design contract before implementation. Do not
  reinterpret a small request as permission for a full redesign.
- Preserve the current Jekyll stack and data-driven experience/project content
  unless the user explicitly chooses a migration.
- For visual changes, build Jekyll and inspect affected pages in a browser at
  desktop and mobile widths, in light and dark themes. Check keyboard focus,
  navigation, reduced motion, and overflow where affected.
- For JavaScript changes, run a syntax check and verify affected interactions.
- For content or route changes, build Jekyll and check affected routes and links.
- Documentation-only iterations require a diff/whitespace review and verification
  of referenced local paths; they do not require a site build.
- Never claim a check passed unless it ran successfully. Record unavailable checks.

## Career Evidence And Publication

- Use the sibling career repository's canonical experience, approved metrics,
  skills, education, and career profile as the authority for career claims.
- Never invent ownership, scale, tools, outcomes, or proficiency. Keep academic,
  team, learning, and professional work distinct; preserve official titles.
- Canonical fact changes and new numerical claims require user approval. Keep
  confidential client/product details and private reflections out of this repo.
- A local checkpoint does not approve a resume or career claim for publication.
  The inherited resume's candidate-approval status must be resolved before public
  deployment. Do not infer approval from its presence in `assets/resume/`.
- Public resume contact details must be limited to LinkedIn, GitHub, and the
  portfolio URL. Rebuild from public-safe source; check extracted text, annotations,
  and metadata for email/phone data before committing the PDF. Never commit the
  inherited contact-bearing PDF or raw private notes.
