# Export presentation to PDF

You can get a single PDF with all 18 slides in two ways.

---

## Option 1: Browser (no install)

1. **Open** `export-pdf.html` in Chrome or Edge (File → Open, or drag the file into the browser).
2. **Wait** a few seconds for all slides to load in the background.
3. Click **“Save as PDF”** (or press `Ctrl+P` / `Cmd+P`).
4. In the print dialog:
   - **Destination:** “Save as PDF” or “Microsoft Print to PDF”.
   - **Layout:** Landscape.
   - **Paper size:** e.g. A4 or “Fit to page” so each slide is one page.
5. Click **Save** and choose where to store the file.

Result: one PDF with 18 pages (one slide per page).

---

## Option 2: Node script (one command)

Generates `teletalk-presentation.pdf` in the project folder.

1. **Install dependencies** (once):
   ```bash
   npm install
   ```
2. **Generate the PDF**:
   ```bash
   npm run pdf
   ```
3. Open **`teletalk-presentation.pdf`** in the same folder.

Requires Node.js. If slides use CDN fonts/CSS, an internet connection is needed the first time you run it.
