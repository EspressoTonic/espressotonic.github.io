# Stitch-generated design system — unapproved concept

This is the generator's proposed system, not an owner-approved implementation specification. Refer to REVIEW.md for required corrections and source-of-truth content.

## Brand & Style

The design system establishes a restrained, high-end editorial identity for bioinformatics scholarship. Moving away from standard SaaS or developer portfolio templates, the visual language mirrors archival scientific journals, bespoke academic monographs, and institutional publication houses. The interface prioritizes typographic authority, density control, and structural discipline over decorative tech flourishes.

Targeting academic collaborators, institutional directors, computational biologists, and fellowship committees, the aesthetic communicates intellectual rigor, quiet confidence, and enduring scholarly depth. The design language draws from Swiss architectural publication systems and warm literary minimalism: razor-sharp rule lines, tactile warm-paper fields, intentional negative space, and disciplined asymmetric hierarchy that treats computational code, genomic identifiers, and published papers as archival artifacts.

## Layout & Spacing

The layout is structured around an asymmetrical editorial grid inspired by academic broadsheets and institutional monographs rather than standard modular card grids:

- **Grid Architecture:** Desktop displays deploy an asymmetric 12-column grid. Key layouts assign 4 columns for sticky contextual marginalia (abstract metadata, date indexes, subdiscipline coordinates) and 8 columns for expansive thesis copy, figures, and publication records.
- **Section Rhythm:**
  - *Current Focus:* Wide asymmetrical layout pairing a high-scale serif thesis statement against structured technical methodology notes.
  - *Software & Computational Tools:* Clean dual-column workbench gallery framed by horizontal rule boundaries, highlighting repo telemetry and algorithmic scope.
  - *Research Directions:* Editorial ledger rows separated by crisp hairline boundaries, expandable without nested card containers.
  - *Publications Index:* Monographic bibliographic list with tabular typographic alignment for year, journal, DOI citation, and co-author index.
- **Breakpoints:**
  - Mobile (`< 768px`): Collapses to single-column sequential reading with unified 1.25rem page margins and 1rem column gap. Marginalia collapses to top metadata banners.
  - Tablet (`768px - 1024px`): 6-column grid with 2rem margins.
  - Desktop (`> 1024px`): Full 12-column asymmetric layout with 4rem outer canvas margins and maximum content width capped at 1340px for comfortable reading lines.

## Elevation & Depth

This design system avoids dropped shadows, blurred glass, and floating container elevations entirely. All depth is structural, planar, and conveyed through graphic delineation:

- **Planar Framing:** Spatial hierarchy is established through hairline rule lines (1px solid `#E5E5E2`), alternating paper fills (`#F7F6F2` canvas versus `#FBFBFA` active panel plates), and intentional whitespace distribution.
- **Interactive State Layers:** Hover states do not raise elements on the Z-axis. Instead, interactive rows and citation anchors respond with subtle fill shifts to warm bone (`#EFECE6`), faint hair-rule darkening (`#C8C7C0`), or typographic weight/color engagement via `#2B4C4B`.
- **Modals & Overlays:** Drawer components and long-form manuscript inspection plates slide in as sharp, opaque paper leaves backed by a faint 40% ink scrim (`#121316` at 0.35 opacity), edged with an assertive 1px border.

## Components

- **Action Buttons & Links:**
  - *Primary Button:* Architectural black slab (`#121316`) with sharp edges, crisp bone-white monospace text (`#F7F6F2`), zero border radius, and precise padding (`0.625rem 1.25rem`). Hover state shifts to muted slate teal (`#2B4C4B`).
  - *Secondary / Citation Action:* Hairline bordered box (1px `#121316`), transparent background, charcoal text. Hover fills the box with `#121316` and inverts label to white.
  - *Editorial Link:* Serif italic or monospace anchor featuring a persistent hairline underline positioned 4px below text baseline, turning teal on hover.

- **Status & Domain Indicators:**
  - Pure text indices or small square glyphs (not pill badges).
  - Rendered in `meta-mono-sm` uppercase. Prefixed with a monospace index token (e.g., `[PUB.2024]`, `[PREPRINT]`, `[TOOL]`).
  - Subtle tinted background (`#EAE8E1`) with sharp borders and burnt umber or slate teal lettering.

- **Editorial List Rows (Research Directions & Bibliography):**
  - Seamless horizontal rows bounded by 1px hairline top and bottom dividers.
  - Asymmetric columns within the row: Year/Index (Monospace, left), Paper Title & Abstract (Serif, center), Journal & Access Links (Monospace/Sans, right).
  - Hover triggers an entire row shift to warm parchment background without vertical expansion.

- **Software & Tool Gallery Plates:**
  - Flush-mount modular tiles bounded by hairline dividers instead of elevated floating cards.
  - Top header provides GitHub/Bioconductor status in monospace; main body details algorithmic contribution in `body-md`; bottom footer presents direct shell install script snippet inside a solid warm-grey code strip.

- **Input Fields & Search / Filters:**
  - Minimal horizontal baseline field with a bottom-only 1px ink line, or a crisp 1px bordered box with no corner rounding.
  - Placeholders set in `Inter` body-sm with high-legibility muted soot tone.
  - Active focus transitions the border to solid slate teal `#2B4C4B` without glow or halo rings.

- **Interactive Citation & Code Blocks:**
  - Monospace code and BibTeX snippets rendered in dedicated recessed panels (`#EFECE6`), outlined in hairline grey, equipped with a top-right flush "COPY DOI" / "COPY BIBTEX" unrounded text button.

## Generated tokens

```json
{
  "bodyFont": "INTER",
  "bodyFontFamily": "Inter",
  "colorMode": "LIGHT",
  "colorVariant": "FIDELITY",
  "customColor": "#121316",
  "designMd": "---\nname: Academic Monograph & Index\ncolors:\n  surface: '#faf9f5'\n  surface-dim: '#dbdad6'\n  surface-bright: '#faf9f5'\n  surface-container-lowest: '#ffffff'\n  surface-container-low: '#f5f4f0'\n  surface-container: '#efeeea'\n  surface-container-high: '#e9e8e4'\n  surface-container-highest: '#e3e2df'\n  on-surface: '#1b1c1a'\n  on-surface-variant: '#46464b'\n  inverse-surface: '#30312e'\n  inverse-on-surface: '#f2f1ed'\n  outline: '#76777b'\n  outline-variant: '#c7c6cb'\n  surface-tint: '#5e5e62'\n  primary: '#000000'\n  on-primary: '#ffffff'\n  primary-container: '#1b1b1f'\n  on-primary-container: '#848387'\n  inverse-primary: '#c7c6ca'\n  secondary: '#436463'\n  on-secondary: '#ffffff'\n  secondary-container: '#c3e7e5'\n  on-secondary-container: '#476867'\n  tertiary: '#000000'\n  on-tertiary: '#ffffff'\n  tertiary-container: '#311300'\n  on-tertiary-container: '#b07751'\n  error: '#ba1a1a'\n  on-error: '#ffffff'\n  error-container: '#ffdad6'\n  on-error-container: '#93000a'\n  primary-fixed: '#e3e2e6'\n  primary-fixed-dim: '#c7c6ca'\n  on-primary-fixed: '#1b1b1f'\n  on-primary-fixed-variant: '#46464a'\n  secondary-fixed: '#c6e9e8'\n  secondary-fixed-dim: '#aacdcc'\n  on-secondary-fixed: '#00201f'\n  on-secondary-fixed-variant: '#2b4c4b'\n  tertiary-fixed: '#ffdbc7'\n  tertiary-fixed-dim: '#fbb88e'\n  on-tertiary-fixed: '#311300'\n  on-tertiary-fixed-variant: '#693b1b'\n  background: '#faf9f5'\n  on-background: '#1b1c1a'\n  surface-variant: '#e3e2df'\ntypography:\n  display-xl:\n    fontFamily: Newsreader\n    fontSize: 56px\n    fontWeight: '400'\n    lineHeight: 64px\n    letterSpacing: -0.02em\n  display-xl-mobile:\n    fontFamily: Newsreader\n    fontSize: 38px\n    fontWeight: '400'\n    lineHeight: 44px\n    letterSpacing: -0.015em\n  display-lg:\n    fontFamily: Newsreader\n    fontSize: 40px\n    fontWeight: '400'\n    lineHeight: 48px\n    letterSpacing: -0.015em\n  display-lg-mobile:\n    fontFamily: Newsreader\n    fontSize: 30px\n    fontWeight: '400'\n    lineHeight: 36px\n    letterSpacing: -0.01em\n  headline-md:\n    fontFamily: Newsreader\n    fontSize: 26px\n    fontWeight: '400'\n    lineHeight: 34px\n  headline-sm:\n    fontFamily: Newsreader\n    fontSize: 20px\n    fontWeight: '500'\n    lineHeight: 28px\n  title-editorial:\n    fontFamily: Newsreader\n    fontSize: 18px\n    fontWeight: '400'\n    lineHeight: 26px\n    letterSpacing: 0.01em\n  body-lg:\n    fontFamily: Inter\n    fontSize: 17px\n    fontWeight: '400'\n    lineHeight: 28px\n  body-md:\n    fontFamily: Inter\n    fontSize: 15px\n    fontWeight: '400'\n    lineHeight: 24px\n  body-sm:\n    fontFamily: Inter\n    fontSize: 13px\n    fontWeight: '400'\n    lineHeight: 20px\n  meta-mono:\n    fontFamily: JetBrains Mono\n    fontSize: 12px\n    fontWeight: '400'\n    lineHeight: 18px\n    letterSpacing: 0.02em\n  meta-mono-sm:\n    fontFamily: JetBrains Mono\n    fontSize: 11px\n    fontWeight: '500'\n    lineHeight: 16px\n    letterSpacing: 0.04em\n  citation-code:\n    fontFamily: JetBrains Mono\n    fontSize: 13px\n    fontWeight: '400'\n    lineHeight: 20px\nspacing:\n  gutter: 2rem\n  gutter-mobile: 1rem\n  margin: 4rem\n  margin-mobile: 1.25rem\n  space-xs: 0.25rem\n  space-sm: 0.5rem\n  space-md: 1rem\n  space-lg: 1.75rem\n  space-xl: 3rem\n---\n\n## Brand & Style\n\nThe design system establishes a restrained, high-end editorial identity for bioinformatics scholarship. Moving away from standard SaaS or developer portfolio templates, the visual language mirrors archival scientific journals, bespoke academic monographs, and institutional publication houses. The interface prioritizes typographic authority, density control, and structural discipline over decorative tech flourishes.\n\nTargeting academic collaborators, institutional directors, computational biologists, and fellowship committees, the aesthetic communicates intellectual rigor, quiet confidence, and enduring scholarly depth. The design language draws from Swiss architectural publication systems and warm literary minimalism: razor-sharp rule lines, tactile warm-paper fields, intentional negative space, and disciplined asymmetric hierarchy that treats computational code, genomic identifiers, and published papers as archival artifacts.\n\n## Colors\n\nThe palette is rooted in the tactile neutrality of archival paper and printer's ink, avoiding synthetic high-gamut hues.\n\n- **Background & Canvas:** Primary canvas uses warm unbleached paper tone `#F7F6F2`, with `#FBFBFA` reserved for inner editorial plates and elevated research readouts.\n- **Ink & Neutral Hierarchy:** Primary body copy and headers use deep ink charcoal `#121316` for high-contrast legibility without the harshness of pure digital black. Secondary metadata uses subdued soot `#57585D`, while structural hair lines and boundary rules use warm grey parchment tones `#E5E5E2` and `#D8D7D1`.\n- **Intellectual Accents:** Applied with extreme discipline. A deep archival slate teal (`#2B4C4B`) indicates active research domains, computational links, and terminal hover states. A warm burnt umber (`#8C5835`) functions strictly for indexing statuses, publication volume tags, and peer-reviewed preprint markers.\n- **Dark Mode Philosophy:** The system defaults to light mode to honor physical print traditions. When rendered in dark mode, the canvas converts to deep matte graphite (`#141517`) with bone paper ink (`#EAE9E4`) and muted olive rules (`#2A2B2E`), avoiding high-emission OLED blacks.\n\n## Typography\n\nThe tripartite typographic scale balances literary authority, functional legibility, and computational rigor:\n\n- **Display & Section Openers (`Newsreader`):** Utilizes optical sizing qualities of an editorial serif. Applied to author nameplates, paper titles, research themes, and longform abstract openers. Features italicized scholarly annotations where appropriate.\n- **Body & Structural Interface (`Inter`):** A modern, neutral grotesque that guarantees optimal optical clarity across dense scientific abstracts, multi-author listings, and interface operational controls.\n- **Indices & Systematic Data (`JetBrains Mono`):** Applied to bioinformatic accession numbers, DOI references, status labels, Git hashes, timestamp coordinates, and genomic algorithm metrics. Rendered deliberately in smaller, tracked point sizes to function as structural marginalia.\n\n## Layout & Spacing\n\nThe layout is structured around an asymmetrical editorial grid inspired by academic broadsheets and institutional monographs rather than standard modular card grids:\n\n- **Grid Architecture:** Desktop displays deploy an asymmetric 12-column grid. Key layouts assign 4 columns for sticky contextual marginalia (abstract metadata, date indexes, subdiscipline coordinates) and 8 columns for expansive thesis copy, figures, and publication records.\n- **Section Rhythm:**\n  - *Current Focus:* Wide asymmetrical layout pairing a high-scale serif thesis statement against structured technical methodology notes.\n  - *Software & Computational Tools:* Clean dual-column workbench gallery framed by horizontal rule boundaries, highlighting repo telemetry and algorithmic scope.\n  - *Research Directions:* Editorial ledger rows separated by crisp hairline boundaries, expandable without nested card containers.\n  - *Publications Index:* Monographic bibliographic list with tabular typographic alignment for year, journal, DOI citation, and co-author index.\n- **Breakpoints:**\n  - Mobile (`< 768px`): Collapses to single-column sequential reading with unified 1.25rem page margins and 1rem column gap. Marginalia collapses to top metadata banners.\n  - Tablet (`768px - 1024px`): 6-column grid with 2rem margins.\n  - Desktop (`> 1024px`): Full 12-column asymmetric layout with 4rem outer canvas margins and maximum content width capped at 1340px for comfortable reading lines.\n\n## Elevation & Depth\n\nThis design system avoids dropped shadows, blurred glass, and floating container elevations entirely. All depth is structural, planar, and conveyed through graphic delineation:\n\n- **Planar Framing:** Spatial hierarchy is established through hairline rule lines (1px solid `#E5E5E2`), alternating paper fills (`#F7F6F2` canvas versus `#FBFBFA` active panel plates), and intentional whitespace distribution.\n- **Interactive State Layers:** Hover states do not raise elements on the Z-axis. Instead, interactive rows and citation anchors respond with subtle fill shifts to warm bone (`#EFECE6`), faint hair-rule darkening (`#C8C7C0`), or typographic weight/color engagement via `#2B4C4B`.\n- **Modals & Overlays:** Drawer components and long-form manuscript inspection plates slide in as sharp, opaque paper leaves backed by a faint 40% ink scrim (`#121316` at 0.35 opacity), edged with an assertive 1px border.\n\n## Shapes\n\nThe shape system embraces architectural sharpness (`roundedness: 0`). \n\nAll corners for cards, plates, button surfaces, input fields, tags, and tabular blocks are strictly 0px (unrounded). This geometric rigor honors physical sheet paper, bound publications, and lab notebooks. Any rounded elements are confined exclusively to biological diagrammatic visualizations or raw mathematical schemas embedded within the portfolio content.\n\n## Components\n\n- **Action Buttons & Links:**\n  - *Primary Button:* Architectural black slab (`#121316`) with sharp edges, crisp bone-white monospace text (`#F7F6F2`), zero border radius, and precise padding (`0.625rem 1.25rem`). Hover state shifts to muted slate teal (`#2B4C4B`).\n  - *Secondary / Citation Action:* Hairline bordered box (1px `#121316`), transparent background, charcoal text. Hover fills the box with `#121316` and inverts label to white.\n  - *Editorial Link:* Serif italic or monospace anchor featuring a persistent hairline underline positioned 4px below text baseline, turning teal on hover.\n\n- **Status & Domain Indicators:**\n  - Pure text indices or small square glyphs (not pill badges). \n  - Rendered in `meta-mono-sm` uppercase. Prefixed with a monospace index token (e.g., `[PUB.2024]`, `[PREPRINT]`, `[TOOL]`).\n  - Subtle tinted background (`#EAE8E1`) with sharp borders and burnt umber or slate teal lettering.\n\n- **Editorial List Rows (Research Directions & Bibliography):**\n  - Seamless horizontal rows bounded by 1px hairline top and bottom dividers.\n  - Asymmetric columns within the row: Year/Index (Monospace, left), Paper Title & Abstract (Serif, center), Journal & Access Links (Monospace/Sans, right).\n  - Hover triggers an entire row shift to warm parchment background without vertical expansion.\n\n- **Software & Tool Gallery Plates:**\n  - Flush-mount modular tiles bounded by hairline dividers instead of elevated floating cards.\n  - Top header provides GitHub/Bioconductor status in monospace; main body details algorithmic contribution in `body-md`; bottom footer presents direct shell install script snippet inside a solid warm-grey code strip.\n\n- **Input Fields & Search / Filters:**\n  - Minimal horizontal baseline field with a bottom-only 1px ink line, or a crisp 1px bordered box with no corner rounding.\n  - Placeholders set in `Inter` body-sm with high-legibility muted soot tone.\n  - Active focus transitions the border to solid slate teal `#2B4C4B` without glow or halo rings.\n\n- **Interactive Citation & Code Blocks:**\n  - Monospace code and BibTeX snippets rendered in dedicated recessed panels (`#EFECE6`), outlined in hairline grey, equipped with a top-right flush \"COPY DOI\" / \"COPY BIBTEX\" unrounded text button.",
  "font": "NEWSREADER",
  "headlineFont": "NEWSREADER",
  "headlineFontFamily": "Newsreader",
  "labelFont": "JETBRAINS_MONO",
  "labelFontFamily": "JetBrains Mono",
  "namedColors": {
    "background": "#faf9f5",
    "error": "#ba1a1a",
    "error_container": "#ffdad6",
    "inverse_on_surface": "#f2f1ed",
    "inverse_primary": "#c7c6ca",
    "inverse_surface": "#30312e",
    "on_background": "#1b1c1a",
    "on_error": "#ffffff",
    "on_error_container": "#93000a",
    "on_primary": "#ffffff",
    "on_primary_container": "#848387",
    "on_primary_fixed": "#1b1b1f",
    "on_primary_fixed_variant": "#46464a",
    "on_secondary": "#ffffff",
    "on_secondary_container": "#476867",
    "on_secondary_fixed": "#00201f",
    "on_secondary_fixed_variant": "#2b4c4b",
    "on_surface": "#1b1c1a",
    "on_surface_variant": "#46464b",
    "on_tertiary": "#ffffff",
    "on_tertiary_container": "#b07751",
    "on_tertiary_fixed": "#311300",
    "on_tertiary_fixed_variant": "#693b1b",
    "outline": "#76777b",
    "outline_variant": "#c7c6cb",
    "primary": "#000000",
    "primary_container": "#1b1b1f",
    "primary_fixed": "#e3e2e6",
    "primary_fixed_dim": "#c7c6ca",
    "secondary": "#436463",
    "secondary_container": "#c3e7e5",
    "secondary_fixed": "#c6e9e8",
    "secondary_fixed_dim": "#aacdcc",
    "surface": "#faf9f5",
    "surface_bright": "#faf9f5",
    "surface_container": "#efeeea",
    "surface_container_high": "#e9e8e4",
    "surface_container_highest": "#e3e2df",
    "surface_container_low": "#f5f4f0",
    "surface_container_lowest": "#ffffff",
    "surface_dim": "#dbdad6",
    "surface_tint": "#5e5e62",
    "surface_variant": "#e3e2df",
    "tertiary": "#000000",
    "tertiary_container": "#311300",
    "tertiary_fixed": "#ffdbc7",
    "tertiary_fixed_dim": "#fbb88e"
  },
  "overrideNeutralColor": "#f7f6f2",
  "overridePrimaryColor": "#121316",
  "overrideSecondaryColor": "#2b4c4b",
  "overrideTertiaryColor": "#8c5835",
  "spacing": {
    "gutter": "2rem",
    "gutter-mobile": "1rem",
    "margin": "4rem",
    "margin-mobile": "1.25rem",
    "space-lg": "1.75rem",
    "space-md": "1rem",
    "space-sm": "0.5rem",
    "space-xl": "3rem",
    "space-xs": "0.25rem"
  },
  "spacingScale": 2,
  "typography": {
    "body-lg": {
      "fontFamily": "Inter",
      "fontSize": "17px",
      "fontWeight": "400",
      "lineHeight": "28px"
    },
    "body-md": {
      "fontFamily": "Inter",
      "fontSize": "15px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "body-sm": {
      "fontFamily": "Inter",
      "fontSize": "13px",
      "fontWeight": "400",
      "lineHeight": "20px"
    },
    "citation-code": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "13px",
      "fontWeight": "400",
      "lineHeight": "20px"
    },
    "display-lg": {
      "fontFamily": "Newsreader",
      "fontSize": "40px",
      "fontWeight": "400",
      "letterSpacing": "-0.015em",
      "lineHeight": "48px"
    },
    "display-lg-mobile": {
      "fontFamily": "Newsreader",
      "fontSize": "30px",
      "fontWeight": "400",
      "letterSpacing": "-0.01em",
      "lineHeight": "36px"
    },
    "display-xl": {
      "fontFamily": "Newsreader",
      "fontSize": "56px",
      "fontWeight": "400",
      "letterSpacing": "-0.02em",
      "lineHeight": "64px"
    },
    "display-xl-mobile": {
      "fontFamily": "Newsreader",
      "fontSize": "38px",
      "fontWeight": "400",
      "letterSpacing": "-0.015em",
      "lineHeight": "44px"
    },
    "headline-md": {
      "fontFamily": "Newsreader",
      "fontSize": "26px",
      "fontWeight": "400",
      "lineHeight": "34px"
    },
    "headline-sm": {
      "fontFamily": "Newsreader",
      "fontSize": "20px",
      "fontWeight": "500",
      "lineHeight": "28px"
    },
    "meta-mono": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "12px",
      "fontWeight": "400",
      "letterSpacing": "0.02em",
      "lineHeight": "18px"
    },
    "meta-mono-sm": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "11px",
      "fontWeight": "500",
      "letterSpacing": "0.04em",
      "lineHeight": "16px"
    },
    "title-editorial": {
      "fontFamily": "Newsreader",
      "fontSize": "18px",
      "fontWeight": "400",
      "letterSpacing": "0.01em",
      "lineHeight": "26px"
    }
  }
}
```
