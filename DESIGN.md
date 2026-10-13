---
name: Yhdessä
description: Pink and orange speech therapy website
colors:
  primary: "#000000"
  action: "#466434"
  background: "#dd8d7c"
  secondary: "#d36820"
  accent: "#ffffff"
  text: "#000000"
  line: "#00000040"
typography:
  family: "Jost, sans-serif"
  body: "18px / 1.65"
  display: "clamp(42px, 4.9vw, 70px) / 1.13"
---

# Design System: Yhdessä

## Direction

The approved direction uses the supplied palette with distinct roles: gammelrosa (#dd8d7c) for the large header, homepage hero, About introduction and Contact page; white (#ffffff) for services and the About reading area; green (#466434) for action buttons; orange (#d36820) for the footer; and black (#000000) for text, focus and button boundaries. The supplied orange logo sits on pink, reversed to the pink logo in the orange footer. Orange on pink is reserved for the logo, not text or control boundaries.

The homepage introduces speech therapy in the Turku region, with a focus on children and young people. Adults are welcome. The four service entries cover interaction, speech motor skills and articulation, feeding skills, and AAC.

## Typography and layout

Jost is self-hosted under OFL from client/public/fonts/jost-variable.ttf, pending licensed Brandon Grotesque/Futura webfonts. Headings use weight 500, balanced wrapping and -0.025em tracking. Body text uses 18px with 1.65 line-height; mobile uses 17px.

The shared container is capped at 1280px with 56px desktop margins, 32px at 1100px, and 20px at 760px. Section spacing is 96px desktop and 56px mobile. Existing two-column layouts stack at 760px. The services heading sits above the two-column entries at every width; entries stack at 430px. The desktop header is 152px high with a 320px logo, and shares an uninterrupted pink surface with the homepage hero. Navigation stays visible on its own row below 900px. Navigation, language controls, and text links have at least 44px touch targets.

## Components

- Header: supplied orange transparent PNG on pink, plain route links and FI/SV/EN controls.
- Buttons: green background with white text and a black 1px boundary. Minimum height 52px, radius 4px. Hover uses black; keyboard focus uses a 3px black outline with 5px offset.
- Services: open two-column list with thin rules and dark headings, with wrapping for long translated titles.
- Homepage: pink header and hero, white services, then the orange footer. Working approach and service-language details remain on About and Contact.
- Footer: orange with the supplied pink logo and direct email and phone links. On Home and About, the contact button and supporting sentence share the footer row with the logo and contact details. There is no separate contact heading or section. The footer stacks at 760px.
- Contact page: labelled email and phone links. No disconnected form or success state.
- About: pink biography and experience with the approved therapist portrait, followed by a white reading area for the client-centred approach and language information. On mobile the portrait follows the introduction, before the experience text.

## Assets and constraints

The customer-supplied PNG logos live in client/public/brand/yhdessa_orange.png and yhdessa_pink.png. JPG/PDF/EPS originals live in yhdessa_assets/originals, outside the public build. Preserve their artwork and proportions.

Existing generated still-life photos remain decorative; they do not represent an actual clinic or session. Do not generate a therapist portrait. No shadows, gradients, decorative badges or entrance animation. Reduced-motion preference removes transitions. Keep visible focus, underlined text links and all three language controls.

Therapy is available in Finnish and Swedish. English covers guidance for the client's support network. Do not add clinic locations, insurance or self-funded arrangements without confirmation.
