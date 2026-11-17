# slidev-theme-funstage

The Funstage 2025 Google Slides template as a [Slidev](https://sli.dev) theme.

Every layout reproduces its Google Slides counterpart on a 1280×720 canvas: same positions, colours,
type sizes and line metrics. Quicksand is bundled with the theme, so decks work offline.

## Use it in a deck

You do not add slides to this repository. Create your own Slidev project and install the theme into it.

```bash
npm init slidev@latest
```

```bash
npm install github:FunstageGmbH/slidev-theme-funstage
```

Then set the theme in the headmatter of your `slides.md`:

```md
---
theme: funstage
layout: cover
---

# My presentation
```

With bun, use `bun create slidev` and `bun add github:FunstageGmbH/slidev-theme-funstage`.

The repository is private, so the machine installing it needs GitHub access to the FunstageGmbH
organisation. To pick up a newer version of the theme, run the install command again.

## Layouts

In the text layouts, `# Heading` fills the title placeholder, `## Heading` the bold subtitle line, and
everything else flows into the body placeholder. Lists, **bold** and links are styled; nested list
levels get smaller, as in the template.

| Layout | Google Slides name | What you write |
| --- | --- | --- |
| `cover` | COVER | title |
| `chapter` | CHAPTER | `number:`, title, one line of body |
| `overview` | OVERVIEW PAGE | `items:` (up to 10 labels), optional `heading:` |
| `default` (alias `no-pattern`) | NO PATTERN/LONG TEXT | title, subtitle, body |
| `l-pattern`, `m-pattern`, `s-pattern` | L / M / S PATTERN | title, subtitle, body |
| `main-pattern` | not in the template: the multicolour pattern with the M PATTERN geometry | title, subtitle, body |
| `team` | TEAM OVERVIEW | title, `members:` (up to 5) |
| `single-detail` | SINGLE DETAIL | title, body, `image:` |
| `table` | BASIC TABLE 2 | title, subtitle, body, `headers:`, slots `::col1::` to `::col6::` |
| `picture` | Picture with Header | `image:` |
| `full-media` | Full Media Layout | `image:` or `video:`, or any content |
| `last-words` | LAST WORDS | title, body |
| `qa` | Q.A. | title, body, optional `company:` and `address:` |
| `empty` | none: a blank slide for embeds and diagrams | anything; `showLogo:`, `showRibbon:`, `ribbonColor:` |

The first slide of a deck uses `cover` and every other slide uses `default` unless you set `layout:`.

### Examples

Cover:

```md
---
layout: cover
---

# Funstage deck title
```

Chapter divider. A number is padded to two digits:

```md
---
layout: chapter
number: 1
---

# Chapter title

Short line about this chapter
```

Overview with numbered sections:

```md
---
layout: overview
items: [Intro, Numbers, Product, Team, Roadmap, Risks, Budget, Hiring, Next steps, Q&A]
---
```

Content slide. `default`, `l-pattern`, `m-pattern`, `s-pattern` and `main-pattern` differ only in the
pattern at the bottom right and in how wide the text column is:

```md
---
layout: l-pattern
---

# Title

## Subtitle in bold

Body text.

- Bullet one
- Bullet two
  - Nested level
```

Team:

```md
---
layout: team
members:
  - { name: Ada Example, role: CEO, image: /team/ada.jpg }
  - { name: Bo Example, role: CTO, image: /team/bo.jpg }
---

# Team overview
```

One person or item in detail:

```md
---
layout: single-detail
image: /team/ada.jpg
---

# Ada Example

Body text next to the round picture.
```

Six-column table:

```md
---
layout: table
headers: [One, Two, Three, Four, Five, Six]
---

# Title

## Subtitle

Intro text above the columns.

::col1::

Cell text one

::col2::

Cell text two
```

Full-slide picture or video:

```md
---
layout: picture
image: /photos/office.jpg
---
```

```md
---
layout: full-media
video: /clips/demo.mp4
---
```

Closing slide and contact slide:

```md
---
layout: last-words
---

# Last words

Closing statement.
```

```md
---
layout: qa
---

# Q&A

Thank you for listening
```

Images referenced with a leading `/` live in your deck's `public/` folder.

## Customising

Colours, text metrics and insets are CSS variables at the top of [styles/base.css](styles/base.css),
for example `--fs-blue`, `--fs-mint` and `--fs-royal`. Override them in your deck's `style.css`.

The theme sets `canvasWidth: 1280`. Keep it: all layout coordinates are in that canvas.

Slidev's built-in layouts that this theme does not define (`center`, `two-cols`, `image-right` and so
on) still work, but they use Slidev's default look, not the Funstage one.

## Coming from version 1

Decks written for the previous version keep working: `content-l`, `content-m`, `content-s`,
`table-of-content`, `team-overview` and `empty` still exist and map onto the layouts above, and
`chapter:`, `photo:` and `focus:` are still accepted.

Three things were removed because a theme should only carry appearance:

- the progress bar (`showProgress` is accepted and ignored),
- the brand-decor addon,
- the Excalidraw addon. Add `slidev-addon-excalidraw` to your own deck if you use it.

Fonts are no longer loaded from Google Fonts at runtime.

## Working on the theme

```bash
bun install
```

```bash
bun run dev
```

That opens [slides.md](slides.md), a demo deck with every layout, using the theme from this folder
(`theme: ./`). `bun run screenshot` exports each demo slide as a PNG.

The geometry comes from the template's `.pptx` export (1 px = 9525 EMU, 1 pt = 4/3 px) and was
checked against its PDF export; text and images sit within half a pixel of it. `last-words` departs
from the template on purpose: the artwork is 70% of its original size and the text column is wider.
