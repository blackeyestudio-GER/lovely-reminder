#!/usr/bin/env node
/**
 * Generates PWA icons (192x192, 512x512) from the logo SVG.
 * Run: node scripts/generate-pwa-icons.mjs
 * Requires: npm install sharp --save-dev
 */
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// SVG with fixed colors for PNG export (pink heart theme)
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <path fill="#E91E8C" d="M32 50 C32 50 6 36 6 18 C6 8 14 4 22 4 C28 4 32 10 32 10 C32 10 36 4 42 4 C50 4 58 8 58 18 C58 36 32 50 32 50 Z"/>
  <g transform="translate(20, 10) scale(0.6)">
    <rect x="0" y="0" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.8"/>
    <path d="M3 6 L5.5 8.5 L10 3" stroke="#ffffff" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="16" y1="6" x2="36" y2="6" stroke="#ffffff" stroke-width="1.8"/>
    <rect x="0" y="18" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.8"/>
    <line x1="16" y1="24" x2="36" y2="24" stroke="#ffffff" stroke-width="1.8"/>
    <rect x="0" y="36" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.8"/>
    <line x1="16" y1="42" x2="36" y2="42" stroke="#ffffff" stroke-width="1.8"/>
  </g>
</svg>`;

async function generate() {
  const buf = Buffer.from(logoSvg);
  for (const size of [192, 512]) {
    const outPath = join(publicDir, `pwa-${size}x${size}.png`);
    await sharp(buf)
      .resize(size, size)
      .png()
      .toFile(outPath);
    console.log(`Generated ${outPath}`);
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
