# CreatorFolio
A no-framework, vanilla JavaScript portfolio builder for content creators and influencers. Edit your profile, gallery, brand collaborations, stats, testimonials, skills, and services in a live side-by-side editor, then preview the generated portfolio page in real time.

## Features
- **Live two-panel editor** — edit fields on the left, see the portfolio update instantly on the right
- **Profile section** — name, profession/niche, bio, location, contact info, and social links (Instagram, YouTube, LinkedIn, X)
- **Photo upload** — profile avatar and gallery thumbnails via local file picker
- **Featured Work gallery** — add/edit projects with title, brand, category, description, and engagement stats
- **Brand Collaborations** — showcase past campaigns with reach, views, and engagement rate
- **Stats & Highlights** — key numbers like followers, total reach, and campaign count
- **Testimonials** — client reviews with a 1–5 star rating
- **Skills tags** — quick-add skill chips
- **Services** — list offerings with icon, description, and starting price
- **Theme customization** — primary/accent colors, font, and corner radius
- **Section toggles** — show or hide individual portfolio sections
- **Copy Link / Reset** controls in the top bar
  
> **Note:** The **Export** button is currently a placeholder ("coming soon") and does not yet generate a downloadable file. There's also no built-in save/persistence — refreshing the page resets the editor to its sample data.

## Tech Stack
- HTML5
- CSS3 (custom properties for theming, dark/light mode)
- Vanilla JavaScript (ES6+, no frameworks or build step)
- [Phosphor Icons](https://phosphoricons.com/) (via CDN)
- Google Fonts: Syne & Inter

## Project Structure
```
.
├── index.html      # App shell, editor panel, preview panel, and modals
├── style.css       # All styling, theme variables, dark/light mode
└── app.js          # State management, rendering, and event handling
```

## Getting Started
This is a static site — no build tools or dependencies to install.

### Option 1: Open directly
Just open `index.html` in your browser.

### Option 2: Run a local server (recommended)
Some browsers restrict file uploads/fonts when opened via `file://`. A simple local server avoids that:

```bash
# Using Python
python3 -m http.server 8000

# Using Node (npx)
npx serve .
```
Then visit `http://localhost:8000` in your browser.

## Usage
1. Use the left **Edit** panel and the section tabs (Profile, Gallery, Collabs, Stats, Reviews, Skills, Services, Contact, Theme, Sections) to fill in your details.
2. Switch to the **Preview** tab in the top bar to see the full rendered portfolio.
3. Use **Copy Link** to copy the current page URL, or **Reset** to restore the default sample data.

## License

This project doesn't currently include a license. Add a `LICENSE` file (e.g. MIT) if you plan to share or open-source it.
