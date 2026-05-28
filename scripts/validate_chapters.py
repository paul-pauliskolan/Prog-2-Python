#!/usr/bin/env python3
"""
Validate chapter HTML files to ensure each file contains exactly one HTML document.
Checks for multiple <!DOCTYPE or <html occurrences.
Usage: python3 scripts/validate_chapters.py
Exits with code 0 if all good, 1 otherwise.
"""
import sys
from pathlib import Path

errors = []
chapters_dir = Path(__file__).resolve().parents[1] / 'chapters'
if not chapters_dir.exists():
    print('No chapters/ directory found; skipping.')
    sys.exit(0)

for f in sorted(chapters_dir.glob('*.html')):
    text = f.read_text(encoding='utf-8')
    doctype_count = text.lower().count('<!doctype')
    html_tag_count = text.lower().count('<html')
    if doctype_count != 1 or html_tag_count != 1:
        errors.append((f, doctype_count, html_tag_count))

if not errors:
    print('All chapter HTML files look good (one DOCTYPE and one <html> each).')
    sys.exit(0)

print('Found HTML validation issues:')
for f, dcount, hcount in errors:
    print(f' - {f}: <!doctype>={dcount}, <html>={hcount}')
print('\nPlease fix duplicates before publishing.')
sys.exit(1)
