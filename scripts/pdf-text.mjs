// PDF text extraction can insert whitespace between positioned glyphs on Linux.
// Compare all authored characters while allowing layout-generated whitespace.
export function pdfTextIncludes(extracted, expected) {
  const compact = (text) => text.normalize('NFC').replace(/\s+/gu, '');
  return compact(extracted).includes(compact(expected));
}
