# Oro Noir Restaurant Website

Oro Noir is a responsive restaurant website for a fine dining venue. The site
presents the restaurant atmosphere, menu, gallery, contact details, and a table
reservation form with a polished dark-and-gold visual style.

## Pages

- Home page with animated hero image, menu preview, gallery preview, about
  section, chef section, and contact preview.
- About page with restaurant story and history.
- Menu page with specials, wine and beer, and non-alcoholic drinks.
- Gallery page with cuisine, restaurant, and team image sections.
- Contact page with address, opening hours, reservation guidance, and guest
  notes.
- Reservation page with validated booking form and animated success modal.

## Features

- Responsive layout for mobile, tablet, and desktop.
- Mobile burger navigation with animated open/close state.
- Shared header and footer partials.
- Animated home hero image carousel.
- About section image rotation animation triggered when the section is visible.
- Reservation form with current date/time defaults.
- Reservation validation for required fields, guest count, email, and phone.
- Animated success modal that redirects to the home page after confirmation.
- Reusable button, link, border, and color styles.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Vite
- vite-plugin-html-inject for HTML partials
- Google Fonts:
  - Cormorant Upright
  - Open Sans

## Project Structure

```text
src/
  css/                 CSS partials for base, layout, pages, header, footer
  img/                 Restaurant images and SVG sprite
  js/                  Interactive scripts
  partials/            Shared header, footer, and back link markup
  index.html           Home page
  page-about.html      About page
  page-contact.html    Contact page
  page-gallery.html    Gallery page
  page-menu.html       Menu page
  page-reservation.html Reservation page
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Design Notes

The website uses a luxury restaurant palette built around a dark background,
gold accents, soft glowing separators, and serif headings. Buttons use a
three-dimensional gold style, while page sections share consistent typography,
spacing, and responsive behavior.
