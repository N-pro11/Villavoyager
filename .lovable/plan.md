

## Havanza — Luxury Travel Villa Website

### Overview
Build the complete homepage with all 6 sections matching your Figma designs, plus additional pages derived from the navbar. Typography: Playfair Display (94%) + Inter (5%). Teal/emerald accent color scheme.

### Homepage Sections (in order from your screenshots)

1. **Navbar** — Logo "Havanza" centered, left: VILLAS, EXPERIENCES, DINING. Right: GALLERY, DINING, RESERVE button. Sticky, transparent over hero, white on scroll.

2. **Hero Section** — Full-screen background image of Indonesian coastline. Left side: destination name "INDONESIA" + description + "Book Now" button. Right side: vertical image carousel with prev/next arrows + heart/favorite icon. Bottom: search bar with Where, Check-in, Check-out, Who fields + teal Search button.

3. **Our Villas** — Centered heading + subtitle. 3-card carousel with rounded cards showing villa image, name, duration, rating. Left/right navigation arrows below.

4. **Explore** — Full-width villa image with large "EXPLORE" text. **Parallax scroll animation**: the text starts visible and scrolls behind the mountain/building as user scrolls down (using CSS `background-attachment: fixed` or JS scroll-driven positioning with layered elements).

5. **Curated Experiences + Meetings & Events** — Two side-by-side asymmetric sections. Each has: a category tab bar (SPA & WELLNESS, DINING, etc.), a heading, description, "Learn more" button, and overlapping images. Mirror layout for the second block.

6. **Testimonials** — "Loved. By those who've stayed." heading + subtitle. 3 review cards with star ratings, quote text, avatar, name, location.

7. **CTA / Booking Footer** — Background image with "Your Perfect Escape Awaits" text + same search bar as hero.

8. **Footer** — Standard links, copyright, social icons.

### Additional Pages (from navbar)

- **/villas** — Villa listing grid with filters
- **/experiences** — Experiences listing
- **/dining** — Restaurant/dining options
- **/gallery** — Photo gallery (masonry layout)
- **/reserve** — Reservation/booking form

Each page will share the same Navbar and Footer. Pages will have placeholder content matching the luxury aesthetic.

### Technical Details

- **Fonts**: Add Google Fonts (Playfair Display + Inter) via index.html
- **Colors**: Teal accent `#0d9488` for buttons/accents, white/cream backgrounds, dark text
- **Explore parallax**: Use `useEffect` + scroll event listener to translate the "EXPLORE" text upward at a slower rate than scroll, creating the behind-mountain effect using `clip-path` or layered z-index with a foreground mountain cutout
- **Carousel**: Use Embla (already installed) for hero image slider and villas carousel
- **Images**: Use high-quality Unsplash URLs for villa/travel imagery (not your uploaded screenshots)
- **Components**: Navbar, Hero, VillasSection, ExploreSection, ExperiencesSection, TestimonialsSection, BookingCTA, Footer
- **Responsive**: Mobile-first with hamburger menu on mobile

### Explore Parallax Detail
Three layers stacked with absolute positioning:
1. Background: villa/landscape image (fixed)
2. Middle: "EXPLORE" text (scrolls slower via `transform: translateY`)
3. Foreground: bottom portion of image (mountain/building silhouette) that covers the text as user scrolls

This creates the illusion of text sliding behind the mountains.

