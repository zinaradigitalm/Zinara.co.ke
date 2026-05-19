# Zinara Digital — Design Brainstorm

## Context
Zinara Digital is a Kenyan digital marketing agency targeting SMBs (real estate, retail, clinics, schools, hospitality). The brand uses orange (#E85D04) as the primary accent, with dark navy and clean white. The goal: look credible, approachable, and results-driven — not corporate-cold.

---

<response>
<probability>0.07</probability>
<idea>
**Design Movement:** Afro-Modern Minimalism — clean Swiss grid meets warm East African warmth

**Core Principles:**
1. Warm off-white backgrounds (#FAFAF7) with rich charcoal text — never pure white/black
2. Asymmetric split layouts: text-left, visual-right with generous breathing room
3. Orange (#E85D04) used sparingly as a signal color, not decoration
4. Every section earns its space — no filler content

**Color Philosophy:**
- Background: warm off-white `oklch(0.98 0.008 85)` — feels premium, not clinical
- Foreground: deep charcoal `oklch(0.18 0.012 60)` — authoritative
- Primary/CTA: vibrant orange `oklch(0.65 0.19 45)` — energy, action
- Accent: deep navy `oklch(0.22 0.04 260)` — trust, depth
- Muted: warm sand `oklch(0.92 0.015 80)` — section backgrounds

**Layout Paradigm:**
- Sticky top nav with logo left, links center, CTA button right
- Hero: 55% text left / 45% image right, no full-width hero image
- Services: 3-column card grid with left-aligned text
- Diagonal section dividers using CSS clip-path for visual flow
- Contact: 2-column — form left, info right

**Signature Elements:**
1. Thin horizontal rule lines with orange dot accents
2. Large bold section numbers (01, 02, 03) in muted orange as decorative anchors
3. Orange underline on hover for nav links

**Interaction Philosophy:**
- Buttons scale(0.97) on active, 160ms ease-out
- Cards lift with subtle shadow on hover (translateY -4px)
- Nav links slide-underline on hover

**Animation:**
- Fade-up entrance for sections (opacity 0→1, translateY 20px→0, 400ms)
- Stagger 60ms between cards
- Smooth scroll behavior

**Typography System:**
- Display: `Syne` (bold, geometric, modern) — headings
- Body: `DM Sans` (clean, readable, warm) — paragraphs
- Accent: `Syne` italic for pull quotes
</idea>
</response>

<response>
<probability>0.06</probability>
<idea>
**Design Movement:** Bold Editorial — newspaper-meets-digital, high contrast, typographic-led

**Core Principles:**
1. Black and white base with orange as the ONLY color
2. Large, oversized typography as the primary visual element
3. Strict grid with intentional rule breaks for emphasis
4. Credibility through density — information-rich, not sparse

**Color Philosophy:**
- Background: pure white
- Text: near-black `oklch(0.12 0 0)`
- Accent: orange `oklch(0.65 0.19 45)` — used only for CTAs and key stats
- Dividers: thin black lines

**Layout Paradigm:**
- Full-width sections with contained content columns
- Hero: massive headline spanning 80% viewport width
- Services: alternating left/right image-text blocks
- Stats bar: full-width orange band with white numbers

**Signature Elements:**
1. Oversized section labels in light gray behind content
2. Orange horizontal rules between sections
3. Bold stat callouts with orange numerals

**Typography System:**
- Display: `Bebas Neue` (ultra-bold, condensed)
- Body: `Source Sans 3` (neutral, readable)
</idea>
</response>

<response>
<probability>0.05</probability>
<idea>
**Design Movement:** Warm Professional — approachable agency feel, Kenyan SMB-friendly

**Core Principles:**
1. Warm cream backgrounds with navy and orange palette
2. Photography-forward — real African business imagery
3. Rounded corners and soft shadows for approachability
4. Clear visual hierarchy with generous whitespace

**Color Philosophy:**
- Background: cream `oklch(0.97 0.01 80)`
- Text: dark navy `oklch(0.2 0.04 260)`
- Primary: orange `oklch(0.65 0.19 45)`
- Secondary: navy `oklch(0.28 0.06 260)`

**Typography System:**
- Display: `Plus Jakarta Sans` (modern, African-designed feel)
- Body: `Nunito Sans` (friendly, readable)
</idea>
</response>

---

## CHOSEN DESIGN: Afro-Modern Minimalism (Response 1)

**Rationale:** This approach balances credibility (for B2B SMB buyers) with warmth (Kenyan market context). The asymmetric layouts prevent the "AI slop" centered-grid look. Syne + DM Sans is a distinctive pairing that signals sophistication without being cold. Orange is used as a signal color — directing attention to CTAs and key stats — not as decoration.
