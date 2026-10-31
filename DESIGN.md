---
name: Yhdessä
description: Green and pink speech therapy website
colors:
  background: "#466434"
  accent: "#dd8d7c"
  text: "#ffffff"
  ink: "#000000"
  line: "#ffffff4d"
typography:
  family: "Jost, sans-serif"
  body: "18px / 1.65"
  display: "clamp(42px, 4.9vw, 70px) / 1.13"
---

# Design System: Yhdessä

## Direction

Approved by the client on 2026-10-30: two palette colours plus white and black. Green (#466434) is the surface for every page (header, hero, Osaamisalueeni, About, Contact); there are no white section backgrounds. White (#ffffff) is the text, heading, rule (30%), nav underline and focus colour on green (6.70:1). Pink (#dd8d7c) is the accent: the header logo, the hero/page buttons (black text and black border, 8.18:1; white on hover) and the footer surface. Black (#000000) is the text on pink, button boundaries, footer focus and the skip link. The footer is pink with the green logo and a green button with white text (black on hover). Orange and yellow are not used. Pink on green (2.61:1) is reserved for the logo and button fills, never text or underlines.

The homepage introduces speech therapy in the Turku region, with a focus on children and young people. Adults are welcome. The "Osaamisalueeni" section lists ten areas in Frida's order (feeding, interaction, speech motor, multilingual children, developmental language disorder, AAC, play, emotional skills, guiding the close community, adult neurology). Each area opens to show the trainings Frida has completed under the label "Käydyt koulutukset" (client decisions, 2026-10-31). Course names stay in their original language on every page and abbreviations such as OPT 1 and PRT are not spelled out. Area descriptions were removed at the customer's request.

## Typography and layout

Jost is self-hosted under OFL from client/public/fonts/jost-variable.ttf, pending licensed Brandon Grotesque/Futura webfonts. Headings use weight 500, balanced wrapping and -0.025em tracking. Body text uses 18px with 1.65 line-height; mobile uses 17px.

The shared container is capped at 1280px with 56px desktop margins, 32px at 1100px, and 20px at 760px. Section spacing is 96px desktop and 56px mobile. Existing two-column layouts stack at 760px. The Osaamisalueeni heading spans the full width; the ten areas sit below it in two independent lists of five that use the hero's grid (1.07fr / 1fr, 72px gap, 40px at 1100px), so the left list aligns with the hero text and the right with the portrait. They stack into one list at 760px. The desktop header is 152px high with a 320px logo, and shares the green surface with the homepage hero, separated by a 1px white rule at 30% opacity aligned to the content margins. The hero photo stays inside the content column, aligned with the header rule, and fills the hero height. The hero grid sets the height (min(660px, viewport height minus the 152px header), never below 480px; 560px/440px at 1100px) so the photo ends at the fold on laptop screens (hero copy has 48px vertical padding so the three hero paragraphs fit at 1280×720); the portrait sits in a flex-column figure (image flex: 1 1 0, min-height 0, object-position center 25%) so its aspect ratio cannot stretch the row, with the caption below it. Below 760px it stacks under the copy and runs edge to edge (equal 20px overhang on both sides). Do not bleed it with 100vw: Chrome's classic scrollbar makes 100vw wider than the page, and a one-sided bleed makes wide screens look right-heavy. Navigation stays visible on its own row below 900px. Navigation, language controls, and text links have at least 44px touch targets.

## Components

- Header: pink vector logo (client/public/brand/yhdessa-logo-pink.svg, the manual's paths recoloured) on green, white route links and FI/SV/EN controls with white underlines for active and hover.
- Buttons: pink background with black text and a black 1px boundary; white background on hover; no colour transition. Minimum height 52px, radius 4px. Keyboard focus uses a 3px outline with 5px offset, white on green and black in the footer.
- Services (Osaamisalueeni): two semantic lists (ul/li with role="list"), split in half so the first five areas are in the left column and the rest in the right; each list grows independently, so opening a row never leaves a gap beside it. Each area is a native details/summary row: white 21px regular title (19px mobile), 16/18px row padding, a thin rule above each row and one closing rule under each list (one shared closing rule when stacked), and a CSS-drawn plus that becomes a minus when open (no glyphs). Hover underlines the title on pointer devices only. The open row shows the 16px/500 "Käydyt koulutukset" label (6px above, so the focus ring clears it) and a 17px course list. Each course is stored once in translations.js as { name, lang } and rendered with its lang attribute (fi default; English and Swedish titles tagged) so screen readers pronounce it correctly; course lists use manual hyphenation, and suffixes such as " -verkkokoulutus" use a non-breaking space and hyphen. Opening animates height where interpolate-size is supported and is instant elsewhere and with reduced motion.
- Homepage: green header, hero and Osaamisalueeni (separated by white 30% rules), then the pink footer. The hero shows Frida's approved portrait (client/public/images/frida-portrait.webp) with the caption "Frida Lindström, puheterapeutti", so a person is the first thing visitors see (client decision, 2026-10-30). The generated still life of two ceramic speech bubbles on oak (hero-speech-bubbles.webp) moved to About. The service-language sentence (home.languagesText) appears in the hero as well as on About and Contact (client decision, 2026-10-31).
- Language controls show FI/SV/EN with the full language name as screen-reader-only text, so the accessible name starts with the visible label (WCAG 2.5.3).
- Footer: pink with the green vector logo (link sized to the logo, not the row), black 16px text and direct email and phone links (hidden on /contact, where they are the page content). The footer contact button is green with white text and a black border, black on hover. On Home and About, the contact button shares the footer row with the logo and contact details, with no supporting sentence (removed at the client's request). There is no separate contact heading or section. A full-width bottom row on every page, under a black 20% rule, shows the bilingual Kela|Fpa logo on a white 4px-radius plate (12/16px padding, 120px logo) beside Frida's Kela provider statement (`footer.kelaProvider`, 16px black, max 60ch); the logo has alt "Kela" and is not a link. The footer stacks at 760px, with the Kela logo above its sentence.
- Hero copy: the intro is split into the audience sentence (21px) and a quieter contract note (17px, 12px above), same words as `home.description`, followed by the service-language sentence in the same 17px style.
- Hero actions: the pink contact button with a white underlined text link to About beside it, using the nav label "Tietoa minusta".
- Contact page: H1 only (no lead paragraph, at Frida's request), labelled email and "phone and text message" links, then two practical notes under a thin rule: therapy takes place in the client's everyday environment or at the practice in central Turku, and parents can get in touch before a Kela decision. No disconnected form or success state.
- About: one section on green: biography, then the experience (three paragraphs, separated from the intro by a 30% rule and 40px gap), then the service languages (25px h2 "Palvelukielet" 36px below the experience, home.languagesText 14px under it, same as Contact), with the decorative speech-bubble still life beside the text (below it on mobile). The page goes straight into the footer. The separate "Työskentelytapani" (working approach) section was removed at John's request on 2026-10-31.

## Assets and constraints

The site uses SVG logos built from the manual's original vector paths: yhdessa-logo-pink.svg (header) and yhdessa-logo-green.svg (footer). The customer-supplied PNG logos (yhdessa_orange.png, yhdessa_pink.png) remain in client/public/brand but are no longer referenced. The Kela logo (client/public/brand/kela-fpa.svg) is converted from Kela's official bilingual CMYK EPS (kela.fi/pictures-and-logos) to SVG with Kela's web RGB colours (#003580 blue, #fdb916 yellow); keep its artwork, proportions and white plate, and do not hotlink Kela's files. JPG/PDF/EPS originals live in yhdessa_assets/originals, outside the public build. Preserve their artwork and proportions.

Existing generated still-life photos remain decorative; they do not represent an actual clinic or session. Do not generate a therapist portrait. No shadows, gradients, decorative badges or entrance animation. Reduced-motion preference removes transitions. Keep visible focus, underlined text links and all three language controls.

On a first visit with no saved choice, browsers set to Swedish start in Swedish; all others start in Finnish. Therapy is available in Finnish and Swedish. English covers guidance for the client's support network. The practice is in central Turku (client-confirmed). Do not add other locations, reply times, insurance or self-funded arrangements without confirmation.
