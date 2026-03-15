# Teletalk Digital Engagement Partnership Proposal

An HTML-based presentation deck proposing the integration of digital services into the **MyTeletalk Super App** by **Orbit Digital Solutions Ltd**.

## Slide Deck (18 slides)

| Slide | Title |
|-------|-------|
| 01 | Cover – Digital Engagement Partnership Proposal |
| 02 | Telecom Apps Are Becoming Super Apps |
| 03 | About Orbit Digital Solutions |
| 04 | Partnership Vision – Digital Services Ecosystem |
| 05 | Integration Inside MyTeletalk Super App |
| 06 | Service 1 – ToofanGames (Skill-Based Gaming) |
| 07 | ToofanGames – Strategic Value for Teletalk |
| 08 | Service 2 – Kabbik (Audiobook & Spoken Content) |
| 09 | Service 3 – Daily News Feed |
| 10 | Service 4 – Prayer Time & Islamic Utility |
| 11 | Service 5 – Utility Services |
| 12 | Expandable Digital Service Ecosystem |
| 13 | Training Services – Learning & Career Skills |
| 14 | Hajj & Umrah Updates – Religious Travel Info |
| 15 | Combined Engagement Value |
| 16 | Monetisation Opportunities |
| 17 | Integration Approach |
| 18 | Strategic Value for Teletalk |

## Getting Started

No build step is required. The slides are standalone HTML files that use CDN-hosted Tailwind CSS, Font Awesome, and Google Fonts.

### Run the presentation

Open `index.html` in any modern browser (Chrome, Edge, Safari, Firefox).

- **→** or **Space** — next slide
- **←** — previous slide
- **Home** — first slide
- **End** — last slide
- **F11** — toggle browser fullscreen for best experience

### Run via local server (optional)

```bash
npx serve . -p 3000
```

Then open [http://localhost:3000](http://localhost:3000).

## Export to PDF

### Option 1: Browser (no install)

1. Open `export-pdf.html` in Chrome or Edge.
2. Wait a few seconds for all slides to load.
3. Click **"Save as PDF"** (or press `Ctrl+P` / `Cmd+P`).
4. In the print dialog:
   - **Destination:** Save as PDF
   - **Layout:** Landscape
   - **Margins:** None
5. Save — you get one PDF with 18 pages.

### Option 2: Node script (one command)

Requires [Node.js](https://nodejs.org/) (v18+).

```bash
npm install
npm run pdf
```

Generates `teletalk-presentation.pdf` in the project folder.

## Project Structure

```
teletalk-presentation/
├── index.html           # Presentation player (keyboard navigation)
├── export-pdf.html      # Browser-based PDF export page
├── generate-pdf.js      # Node script for automated PDF generation
├── package.json         # Dependencies (puppeteer, pdf-merger-js)
├── slide1.html          # Cover slide
├── slide2.html          # Market opportunity
├── ...                  # Slides 3–18
└── slide18.html         # Strategic value
```

## Tech Stack

- **HTML/CSS** — Each slide is a self-contained HTML file
- **Tailwind CSS** (CDN) — Utility-first styling
- **Font Awesome** (CDN) — Icons
- **Google Fonts** — Poppins + Inter
- **Puppeteer + pdf-merger-js** — Automated PDF export

## Credits

- **Orbit Digital Solutions Ltd** — [toofangames.com](https://toofangames.com)
- Slides generated with Grnspark AI, beautified and customised for this proposal.
