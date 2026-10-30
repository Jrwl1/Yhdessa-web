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

The homepage introduces speech therapy in the Turku region, with a focus on children and young people. Adults are welcome. The "Osaamisalueeni" section lists six areas by title only: interaction, speech motor skills and articulation, feeding skills, AAC (spelled out with the acronym in brackets), developmental language disorder, and speech therapy for multilingual children. Descriptions were removed at the customer's request.

## Typography and layout

Jost is self-hosted under OFL from client/public/fonts/jost-variable.ttf, pending licensed Brandon Grotesque/Futura webfonts. Headings use weight 500, balanced wrapping and -0.025em tracking. Body text uses 18px with 1.65 line-height; mobile uses 17px.

The shared container is capped at 1280px with 56px desktop margins, 32px at 1100px, and 20px at 760px. Section spacing is 96px desktop and 56px mobile. Existing two-column layouts stack at 760px. The services heading sits above the two-column entries at every width; entries stack at 760px. The desktop header is 152px high with a 320px logo, and shares the green surface with the homepage hero, separated by a 1px white rule at 30% opacity aligned to the content margins. The hero photo stays inside the content column, aligned with the header rule, and fills the hero height. The hero grid sets the height (min(660px, viewport height minus the 152px header), never below 480px; 560px/440px at 1100px) so the photo ends at the fold on laptop screens; the image itself uses height 0 and min-height 100% so its aspect ratio cannot stretch the row. below 760px it stacks under the copy and runs edge to edge (equal 20px overhang on both sides). Do not bleed it with 100vw: Chrome's classic scrollbar makes 100vw wider than the page, and a one-sided bleed makes wide screens look right-heavy. Navigation stays visible on its own row below 900px. Navigation, language controls, and text links have at least 44px touch targets.

## Components

- Header: pink vector logo (client/public/brand/yhdessa-logo-pink.svg, the manual's paths recoloured) on green, white route links and FI/SV/EN controls with white underlines for active and hover.
- Buttons: pink background with black text and a black 1px boundary; white background on hover; no colour transition. Minimum height 52px, radius 4px. Keyboard focus uses a 3px outline with 5px offset, white on green and black in the footer.
- Services: a semantic list (ul/li with role="list") of title-only entries in a two-column grid with a thin rule above each entry and one closing rule under the list, white 25px medium text (22px mobile) on green, wrapping between words only; one column at 760px like the other two-column layouts.
- Homepage: green header, hero and Osaamisalueeni (separated by white 30% rules), then the pink footer. The hero image (client/public/images/hero-speech-bubbles.webp) is a generated still life of two glazed ceramic speech bubbles, green and yellow, on pale oak: a conversation metaphor, chosen on 2026-10-30 to replace the rustic table still life. Working approach and service-language details remain on About and Contact.
- Footer: pink with the green vector logo (link sized to the logo, not the row), black 16px text and direct email and phone links. The footer contact button is green with white text and a black border, black on hover. On Home and About, the contact button and supporting sentence share the footer row with the logo and contact details. There is no separate contact heading or section. The footer stacks at 760px.
- Hero actions: the pink contact button with a white underlined text link to About beside it, using the nav label "Tietoa minusta".
- Contact page: H1 only (no lead paragraph, at Frida's request), labelled email and "phone and text message" links, then two practical notes under a thin rule: therapy takes place in the client's everyday environment or at the practice, and parents can get in touch before a Kela decision. No disconnected form or success state.
- About: biography and experience (three paragraphs at the original sentence boundaries) on green with the approved therapist portrait and a caption with her first name and title ("Frida, puheterapeutti"), followed by the client-centred approach and the approved service-language sentence (home.languagesText, same as Contact), stacked under its heading in one 96px section with text capped at 720px, separated by a white 30% rule. On mobile the portrait follows the introduction, before the experience text.

## Assets and constraints

The site uses SVG logos built from the manual's original vector paths: yhdessa-logo-pink.svg (header) and yhdessa-logo-green.svg (footer). The customer-supplied PNG logos (yhdessa_orange.png, yhdessa_pink.png) remain in client/public/brand but are no longer referenced. JPG/PDF/EPS originals live in yhdessa_assets/originals, outside the public build. Preserve their artwork and proportions.

Existing generated still-life photos remain decorative; they do not represent an actual clinic or session. Do not generate a therapist portrait. No shadows, gradients, decorative badges or entrance animation. Reduced-motion preference removes transitions. Keep visible focus, underlined text links and all three language controls.

On a first visit with no saved choice, browsers set to Swedish start in Swedish; all others start in Finnish. Therapy is available in Finnish and Swedish. English covers guidance for the client's support network. Do not add clinic locations, insurance or self-funded arrangements without confirmation.
