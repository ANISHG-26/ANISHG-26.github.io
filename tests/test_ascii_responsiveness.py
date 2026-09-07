"""Regression tests for frozen terminal art and its responsive presentation."""
from pathlib import Path
import re
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))

from check_ascii_art import verify_ascii_art  # noqa: E402


EXPECTED_CATS = " /\\_/\\      /\\_/\\\n( o.o )    ( -.- )\n > ^ <      > ^ <"

EXPECTED_GLI = """ ██████    ██       ██████
██         ██         ██
██  ███    ██         ██
██   ██    ██         ██
 ██████    ██████   ██████"""

EXPECTED_BASSLINE = """G|----------------------------------------------------|
D|------------------------3---4-----------------------|
A|--------3---5---x---------------5-------------------|
D|--0----------------------------------0----2---3---2-|"""


class FrozenAsciiTests(unittest.TestCase):
    def test_approved_sources_are_unchanged(self):
        self.assertEqual(EXPECTED_CATS, self._source('cats'))
        self.assertEqual(EXPECTED_GLI, self._source('gli'))
        self.assertEqual(EXPECTED_BASSLINE, self._source('bassline'))

    def test_about_template_uses_escaped_source_files(self):
        template = (ROOT / 'about.html').read_text(encoding='utf-8-sig')
        for name in ('cats', 'gli', 'bassline'):
            self.assertIn(f'include ascii/{name}.txt', template)
        self.assertIn('{{ cats_art | escape }}', template)
        self.assertIn('{{ gli_art | escape }}', template)
        self.assertIn('{{ bass_art | escape }}', template)

    def test_built_page_matches_source_files(self):
        verify_ascii_art()

    def test_drop_d_bassline_rows_are_aligned(self):
        rows = self._source('bassline').splitlines()
        self.assertEqual(['G', 'D', 'A', 'D'], [row[0] for row in rows])
        self.assertEqual(1, len({len(row) for row in rows}))
        self.assertTrue(all(row.endswith('|') for row in rows))

    @staticmethod
    def _source(name):
        return (ROOT / f'_includes/ascii/{name}.txt').read_text(
            encoding='utf-8-sig'
        ).rstrip('\r\n')


class ResponsiveContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.css = (ROOT / 'assets/css/portfolio.css').read_text(
            encoding='utf-8-sig'
        )

    def test_art_and_tab_are_never_wrapped(self):
        rule = re.search(r'\.bass-tab, \.gli-art\s*\{([^}]*)\}', self.css)
        self.assertIsNotNone(rule)
        declarations = rule.group(1)
        self.assertIn('white-space: pre !important', declarations)
        self.assertIn('overflow-wrap: normal !important', declarations)
        self.assertIn('overflow-x: auto', declarations)

    def test_tablet_breakpoint_stacks_terminal_output(self):
        media = re.search(
            r'@media \(min-width: 801px\) and \(max-width: 1180px\)\s*\{(.*?)\n\}',
            self.css,
            re.DOTALL,
        )
        self.assertIsNotNone(media)
        rules = media.group(1)
        self.assertRegex(
            rules,
            r'\.about-profile-terminal\s*\{\s*grid-template-columns:\s*1fr;',
        )
        self.assertRegex(
            rules,
            r'\.about-profile-output\s*\{[^}]*border-left:\s*0;',
        )

    def test_confirmed_art_is_centered(self):
        cats = re.search(r'^\.portrait-cats\s*\{([^}]*)\}', self.css, re.MULTILINE)
        gli = re.search(r'^\.gli-art\s*\{([^}]*)\}', self.css, re.MULTILINE)
        self.assertIsNotNone(cats)
        self.assertIsNotNone(gli)
        self.assertIn('place-items: center', cats.group(1))
        self.assertIn('width: max-content', gli.group(1))
        self.assertIn('margin-inline: auto !important', gli.group(1))


if __name__ == '__main__':
    unittest.main()
