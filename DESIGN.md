---
name: Yhdessä
description: Pink and orange speech therapy website
colors:
  primary: "#1c201a"
  background: "#dd8d7c"
  secondary: "#d36820"
  accent: "#faf8f1"
  text: "#1c201a"
  line: "#1c201a40"
typography:
  family: "Jost, sans-serif"
  body: "18px / 1.65"
  display: "clamp(42px, 4.9vw, 70px) / 1.13"
---

# Design System: Yhdessä

## Direction

Customer-approved September 21, 2026: pink page backgrounds with the supplied orange logo, reversed in the orange footer with the pink logo. The manual's pink (#dd8d7c) and orange (#d36820) define the page surfaces. Dark text (#1c201a) carries readable content and controls. Orange on pink is reserved for the logo, not text or control boundaries.

The homepage introduces speech therapy in the Turku region, with a focus on children and young people. Adults are welcome. The four service entries cover interaction, speech motor skills and articulation, feeding skills, and AAC.

## Typography and layout

Jost is self-hosted under OFL from client/public/fonts/jost-variable.ttf, pending licensed Brandon Grotesque/Futura webfonts. Headings use weight 500, balanced wrapping and -0.025em tracking. Body text uses 18px with 1.65 line-height; mobile uses 17px.

The shared container is capped at 1280px with 56px desktop margins, 32px at 1100px, and 20px at 760px. Section spacing is 96px desktop and 56px mobile. Existing two-column layouts stack at 760px. Service entries stack at 430px. Navigation stays visible on its own mobile row.

## Components

- Header: supplied orange transparent PNG on pink, plain route links and FI/SV/EN controls.
- Buttons: dark background with pink text; the closing contact button uses cream with dark text. Minimum height 52px, radius 4px. Hover darkens the primary button; keyboard focus uses a 3px dark outline with 5px offset.
- Services: open two-column list with thin rules and dark headings, with wrapping for long translated titles.
- Therapy and About approach: orange sections with dark text and service-language details beside the photo. The homepage has no separate Kela/languages strip.
- Contact invitation: pink with dark text. Footer: orange with the supplied pink logo and direct email and phone links.
- Contact page: labelled email and phone links. No disconnected form or success state.
- About: supplied biography and experience, followed by client-centred approach and language information. A labelled frame remains for the real therapist portrait.

## Assets and constraints

The customer-supplied PNG logos live in client/public/brand/yhdessa_orange.png and yhdessa_pink.png. JPG/PDF/EPS originals live in yhdessa_assets/originals, outside the public build. Preserve their artwork and proportions.

Existing generated still-life photos remain decorative; they do not represent an actual clinic or session. Do not generate a therapist portrait. No shadows, gradients, decorative badges or entrance animation. Reduced-motion preference removes transitions. Keep visible focus, underlined text links and all three language controls.

Therapy is available in Finnish and Swedish. English covers guidance for the client's support network. Do not add clinic locations, insurance or self-funded arrangements without confirmation.
