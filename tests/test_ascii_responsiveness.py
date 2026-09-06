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

EXPECTED_BASSLINE = """G|--------------------------------|
D|------5---5---------------------|
A|--5-7---7---7-5-----------------|
E|----------------7-5-3---5-7-----|"""


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


if __name__ == '__main__':
    unittest.main()
