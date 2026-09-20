---
name: Yhdessä
description: Warm, geometric, restrained speech therapy website
colors:
  primary: "#466434"
  primary-hover: "#344b27"
  background: "#faf8f1"
  secondary: "#dd8d7c"
  accent: "#e2c40b"
  accent-hover: "#f0d438"
  text: "#262b23"
  line: "#d3d7c9"
  field-border: "#7f896f"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Jost, sans-serif"
    fontSize: "clamp(42px, 4.9vw, 70px)"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Jost, sans-serif"
    fontSize: "clamp(32px, 3.1vw, 44px)"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Jost, sans-serif"
    fontSize: "25px"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Jost, sans-serif"
    fontSize: "18px"
    lineHeight: 1.65
  label:
    fontFamily: "Jost, sans-serif"
    fontSize: "17px"
    fontWeight: 500
rounded:
  button: "4px"
  field: "3px"
spacing:
  section: "96px"
  section-mobile: "56px"
  content-gap: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "12px 27px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-mustard:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text}"
    rounded: "{rounded.button}"
    padding: "12px 27px"
  button-mustard-hover:
    backgroundColor: "{colors.accent-hover}"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
---

# Design System: Yhdessä

## Overview

The implemented direction is warm, geometric and restrained. The supplied Yhdessä logo anchors the identity; generous cream space, geometric typography and natural-light still lifes support it. The presentation gives children, young people and adults equal weight.

**Key Characteristics:**

- Authentic outlined logo artwork, never recreated as type.
- Open sections and ruled service lists.
- Flat cream, salmon and green surfaces.
- Visible navigation and language controls at every width.

This records the current public Home, About and Contact implementation. Sources are `client/src/index.css`, the shared Navbar, Footer and ContactInvitation components, and those three pages. The approved direction is recorded in `.impeccable/direction.md`.

## Colors

Primary green carries headings, primary actions, the contact invitation and footer. Salmon provides the therapy and approach section backgrounds, with dark text. Mustard marks the closing contact action, selection and focus against green. Cream is the page surface; white distinguishes the form and primary button text. Light rules separate content; the stronger field border identifies editable controls.

The manual's orange is declared in CSS but is not used on the current public pages, so it is not part of the active token set above.

## Typography

Jost is self-hosted from `client/public/fonts/jost-variable.ttf`, with a sans-serif fallback and `font-display: swap`. Its OFL license permits this implementation substitute for the unavailable licensed Brandon Grotesque/Futura webfonts. Change the shared family when approved licensed files become available.

Display and section headings use medium weight and balanced wrapping. Body text uses comfortable line spacing; the lead is 21px and becomes 19px on mobile. At 760px and below, body text becomes 17px. Service titles become 22px. Labels retain their names and medium weight; uppercase is limited to the compact FI/SV/EN language controls.

## Layout

The shared container is capped at 1280px, with 56px side margins. Margins reduce to 32px at 1100px and 20px at 760px. Standard section padding reduces from the desktop to the mobile spacing token.

Desktop layouts use two columns for the hero, therapy content, practical information, About intro and Contact. These stack at 760px; text precedes photography in the mobile hero and therapy section. The service list remains two columns until 430px. Header navigation stays visible on its own second row below 760px; there is no collapsed menu.

The desktop hero photograph has a fixed cropped height of 580px, 530px at the intermediate breakpoint and 630px from 1500px. Mobile uses a 1.15 aspect ratio. Other photography uses rectangular crops; the Contact image is hidden on mobile. Text is separate from images.

## Elevation & Depth

Public surfaces have no shadows, gradients or glass effects. Background color changes, whitespace and thin rules provide separation. The form is a white bordered rectangle rather than a raised card.

## Shapes

The authentic logo supplies the organic character. Photography, sections and service rows remain rectangular. Buttons and fields have only the small radii recorded above. The favicon crops the original logo's Y path; it is not a newly drawn symbol.

## Components

**Buttons:** Primary actions use green with white text; the closing invitation uses mustard with dark text. Both have a minimum 52px height, centered labels and a 160ms background-color transition. Disabled buttons use half opacity and a not-allowed cursor.

**Links and navigation:** Text links are underlined with a 6px offset and thicken on hover. Navigation uses a 2px underline for hover and the active route. FI/SV/EN buttons expose their selected state through `aria-pressed`, weight and underline, with at least 44px height. The header includes a focus-revealed skip link.

**Fields:** Visible labels precede full-width white controls. Inputs have a minimum 50px height; the textarea has a minimum 160px height and resizes vertically. The field-border token is the corrected contrast treatment. Native required/email validation remains in use. The form displays its disconnected-delivery notice before submission and in a live status region after submission; it does not claim successful delivery.

**Service rows:** Thin top rules, green titles and open spacing distinguish each service without enclosing cards or badges.

**Contact invitation and footer:** A shared green close uses cream text, a mustard action and the cream logo variant. Focus outlines become mustard on these green surfaces.

**Imagery:** Two generated still lifes show tactile materials in consistent natural daylight. Their provenance JSON remains beside the images in `client/public/images`. They are decorative supporting images, not evidence of an actual clinic or session. About reserves a clearly labeled frame for a real therapist portrait; biography and contact details remain pending.

**Keyboard and motion:** Focus-visible uses a 3px outline with 5px offset. There are no decorative entrance animations. Reduced-motion preference removes transitions and smooth scrolling.

## Do's and Don'ts

- Do reuse the extracted SVG logo and the shared container, typography and button treatments.
- Do preserve visible labels, keyboard focus and all three language controls.
- Do keep generated supporting imagery separate from factual therapist or clinic evidence.
- Don't generate a therapist portrait or invent missing biography and contact details.
- Don't add shadows, glass, gradients or decorative entrance animation to this established direction.
- Don't replace open service rows with decorative card grids.
