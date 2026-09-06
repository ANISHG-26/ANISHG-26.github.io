"""Verify rendered ASCII art against its plain-text sources."""
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / '_site'


class AsciiArt(HTMLParser):
    def __init__(self):
        super().__init__()
        self.current = None
        self.art = {}

    def handle_starttag(self, tag, attrs):
        classes = dict(attrs).get('class', '').split()
        if tag == 'pre' and 'portrait-cats' in classes:
            self.current = 'cats'
            self.art[self.current] = ''
        elif tag == 'pre' and 'gli-art' in classes:
            self.current = 'gli'
            self.art[self.current] = ''

    def handle_endtag(self, tag):
        if tag == 'pre':
            self.current = None

    def handle_data(self, data):
        if self.current:
            self.art[self.current] += data


def verify_ascii_art():
    parser = AsciiArt()
    parser.feed((SITE / 'about/index.html').read_text(encoding='utf-8-sig'))
    for name in ('cats', 'gli'):
        expected = (ROOT / f'_includes/ascii/{name}.txt').read_text(encoding='utf-8-sig').rstrip('\r\n')
        actual = parser.art.get(name, '').rstrip('\r\n')
        assert actual == expected, f'{name} ASCII differs from its source file'


if __name__ == '__main__':
    verify_ascii_art()
    print('PASS: rendered cats and GLI match their plain-text sources')
