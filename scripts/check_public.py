"""Validate a built portfolio and its public resume. Requires pypdf."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import subprocess
from pypdf import PdfReader
from check_ascii_art import verify_ascii_art

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / '_site'
CONTACT = re.compile(r'[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|mailto:|tel:|\(?\d{3}\)?[ .-]\d{3}[ .-]\d{4}', re.I)
EXPECTED = {'https://www.linkedin.com/in/anishgeorge97',
            'https://github.com/ANISHG-26', 'https://anishg-26.github.io/'}
SOURCE_RISK = re.compile(
    r'career[_ -]?hunter|(?:sibling\s+)?career repository|[A-Za-z]:\\Users\\|'
    r'/Users/[^/\s]+|(?:Dropbox|AppData)[\\/]|BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY|'
    r'AKIA[0-9A-Z]{16}|gh[pousr]_[A-Za-z0-9_]{20,}|'
    r'github_pat_[A-Za-z0-9_]{20,}|AIza[0-9A-Za-z_-]{30,}|'
    r'xox[baprs]-[A-Za-z0-9-]+',
    re.I,
)

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []
    def handle_starttag(self, tag, attrs):
        self.urls.extend(v for k, v in attrs if k in ('href', 'src') and v)

assert SITE.is_dir(), 'Run a Jekyll build first'
git_files = subprocess.run(
    ['git', 'ls-files'], cwd=ROOT, check=False, capture_output=True, text=True
)
if git_files.returncode == 0:
    tracked = git_files.stdout.splitlines()
    assert not any(path == '.context' or path.startswith('.context/') for path in tracked), \
        'Private context must never be tracked'
else:
    excluded_roots = {'.context', '.git', '_site', 'node_modules', 'tmp', 'vendor'}
    tracked = [
        str(path.relative_to(ROOT)) for path in ROOT.rglob('*')
        if path.is_file() and not excluded_roots.intersection(path.relative_to(ROOT).parts)
    ]
for relative in tracked:
    if relative == 'scripts/check_public.py':
        continue  # This file necessarily contains the signatures it detects.
    path = ROOT / relative
    try:
        source = path.read_text(encoding='utf-8-sig')
    except (UnicodeDecodeError, OSError):
        continue
    assert not SOURCE_RISK.search(source), f'Private-source marker in tracked file: {relative}'
for excluded in ['docs', 'scripts', 'tmp', '.context', 'AGENTS.md', 'CHANGELOG.md']:
    assert not (SITE / excluded).exists(), f'Private/build-only path in output: {excluded}'
pages = list(SITE.rglob('*.html'))
assert len(pages) >= 9, 'Expected homepage, five sections, three articles'
for page in pages:
    source = page.read_text(encoding='utf-8-sig')
    assert not CONTACT.search(source), f'Contact pattern in {page.relative_to(SITE)}'
    parser = Links()
    parser.feed(source)
    for url in parser.urls:
        parsed = urlsplit(url)
        if parsed.scheme or parsed.netloc or not parsed.path:
            continue
        target = (SITE / unquote(parsed.path).lstrip('/')) if parsed.path.startswith('/') else (page.parent / unquote(parsed.path))
        if target.is_dir():
            target /= 'index.html'
        assert target.exists(), f'Broken local link: {page.name} -> {url}'
verify_ascii_art()
source_pdf = ROOT / 'assets/resume/anish-george-resume.pdf'
assert source_pdf.read_bytes() == (SITE / 'assets/resume/anish-george-resume.pdf').read_bytes(), 'Stale deployed resume'
reader = PdfReader(source_pdf)
assert len(reader.pages) == 2, 'Public resume should be two pages'
text = '\n'.join(page.extract_text() or '' for page in reader.pages)
uris = [str(a.get_object().get('/A', {}).get('/URI', '')) for page in reader.pages for a in page.get('/Annots', [])]
assert set(uris) == EXPECTED, 'Resume links must be exactly LinkedIn, GitHub, portfolio'
assert not CONTACT.search(text + str(reader.metadata) + ' '.join(uris)), 'Private contact in resume'
names = reader.trailer['/Root'].get('/Names', {})
if hasattr(names, 'get_object'):
    names = names.get_object()
assert '/EmbeddedFiles' not in names, 'Unexpected PDF attachment'
assert 'foundation-hero' in (SITE / 'assets/css/portfolio.css').read_text(encoding='utf-8-sig'), 'Wrong stylesheet'
print(f'PASS: {len(pages)} HTML pages; tracked-source privacy scan; local links/assets; output exclusions; public two-page resume and contact checks')
