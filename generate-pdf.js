#!/usr/bin/env node
/**
 * Generates a single PDF from all slide HTML files.
 * Run: npm install && npm run pdf
 * Output: teletalk-presentation.pdf
 */

const path = require('path');
const fs = require('fs');
const os = require('os');

const SLIDES = [
  'slide1.html', 'slide2.html', 'slide3.html', 'slide4.html', 'slide5.html',
  'slide6.html', 'slide7.html', 'slide8.html', 'slide9.html', 'slide10.html',
  'slide11.html', 'slide12.html', 'slide13.html', 'slide14.html', 'slide15.html',
  'slide16.html', 'slide17.html', 'slide18.html'
];

const dir = __dirname;
const outputPath = path.join(dir, 'teletalk-presentation.pdf');

async function main() {
  let puppeteer;
  let PDFMerger;
  try {
    puppeteer = require('puppeteer');
    PDFMerger = require('pdf-merger-js');
  } catch (e) {
    console.error('Missing dependencies. Run: npm install');
    process.exit(1);
  }

  const merger = new PDFMerger();
  const tempFiles = [];
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    for (let i = 0; i < SLIDES.length; i++) {
      const file = SLIDES[i];
      const filePath = path.join(dir, file);
      if (!fs.existsSync(filePath)) {
        console.warn('Skip (not found):', file);
        continue;
      }
      const url = 'file://' + path.resolve(filePath).replace(/\\/g, '/');
      process.stdout.write('  ' + (i + 1) + '/' + SLIDES.length + ' ' + file + ' ... ');
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 10000 });
      const pdfBuf = await page.pdf({
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
      });
      const tempPath = path.join(os.tmpdir(), 'teletalk-slide-' + i + '.pdf');
      fs.writeFileSync(tempPath, pdfBuf);
      tempFiles.push(tempPath);
      await merger.add(tempPath);
      console.log('ok');
    }

    await browser.close();
    await merger.save(outputPath);
    console.log('\nSaved: ' + outputPath);
  } finally {
    for (const f of tempFiles) {
      try {
        fs.unlinkSync(f);
      } catch (_) {}
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
