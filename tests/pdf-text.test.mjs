import test from 'node:test';
import assert from 'node:assert/strict';
import { pdfTextIncludes } from '../scripts/pdf-text.mjs';

test('Linux PDF glyph spacing preserves author checks without accepting missing characters', () => {
  const extracted = 'Yo o jung Hwang, Woo Young Cho, Emilio Río s,\nSvenja Scho rlemmer.';
  for (const author of ['Yoojung Hwang', 'Woo Young Cho', 'Emilio Ríos', 'Svenja Schorlemmer'])
    assert.equal(pdfTextIncludes(extracted, author), true);
  for (const author of ['Woojung Lee', 'Yoojung Hwan', 'Emilio Rios', 'Svenja Schorlemer']) {
    // The shortened surname is checked with its following author delimiter.
    assert.equal(pdfTextIncludes(extracted, author + ','), false);
  }
});
