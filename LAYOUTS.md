# Funstage Slidev Layouts

Use the following layouts via front matter (`layout: name`) on a slide. Each layout mirrors a corresponding page in `FunstageSlides.pptx` and pulls brand assets from `assets/funstage/`.

## cover

```
---
layout: cover
title: Funstage Product Vision
eyebrow: Executive Briefings
subtitle: A closer look at our 2025 goals
presenter: Presented by Lisa Novak
footerNote: Funstage GmbH | Confidential
---
```

## chapter

```
---
layout: chapter
chapter: 02
strapline: Platform
title: Levelling up player engagement
summary: Deep dive into matchmaking, live-ops, and VIP loyalty.
---
- Roadmap alignment
- Milestone review
```

## pattern-slide

```
---
layout: pattern-slide
variant: medium
eyebrow: Feature Snapshot
title: New retention cohort
subtitle: Early VIP indicators improved by 14%
---
- 8.3% weekly returning players
- +12% store conversion
```

Supported variants: `large`, `medium`, `small`, `none`.

## overview-board

```
---
layout: overview-board
items:
  - label: Company
    description: Facts and figures
  - label: Products
    description: Highlight catalogue
  - label: Strategy
    description: 2025 roadmap
  - label: Outlook
    description: Hiring & operations
---
Optional lead paragraph here.
```

## team-overview

```
---
layout: team-overview
title: Leadership Team
intro: Multi-disciplinary leaders with a focus on player value.
members:
  - name: Anna Schmidt
    role: Managing Director
    focus: Corporate strategy
  - name: Milan Popovic
    role: Head of Product
    focus: Live-ops & game economy
---
```

## single-detail

```
---
layout: single-detail
image: /avatars/milestone.png
caption: Launch milestone, February 2025
metric: +26% DAU lift
description: Optional additional context
---
Add the bullet list or markdown body here.
```

## q-and-a

```
---
layout: q-and-a
subtitle: Reach out for follow-up demos and partnership decks.
contacts:
  - label: Funstage GmbH
    value: Wiedner Hauptstrasse 94, A-1050 Vienna
  - label: Email
    value: business@funstage.com
    href: mailto:business@funstage.com
  - label: Phone
    value: +43 1 90 171
footerNote: Thank you for your time!
---
```
