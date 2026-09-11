/**
 * Web Surface Screen Capture Helper (Playwright / Puppeteer Fallback)
 * 
 * Usage:
 *   node scripts/capture-screen.js <url> <output_path>
 * 
 * Example:
 *   node scripts/capture-screen.js http://localhost:3000/docs docs/04-ui-design/verification/legal-actual.png
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const url = process.argv[2] || 'http://localhost:3000';
const outputPath = process.argv[3] || 'docs/04-ui-design/verification/screen-actual.png';

// Ensure output directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

console.log(`📸 Capturing web surface screenshot from ${url} -> ${outputPath}...`);

try {
  // Use npx playwright screenshot if playwright is installed, or curl fallback
  const cmd = `npx playwright screenshot "${url}" "${outputPath}" --full-page`;
  execSync(cmd, { stdio: 'inherit' });
  console.log(`✅ Web surface screenshot captured successfully at ${outputPath}`);
} catch (err) {
  console.warn(`⚠️ Playwright CLI capture failed or not installed. Please save a screenshot of ${url} manually to ${outputPath}.`);
}
