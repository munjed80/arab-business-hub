#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const htmlFiles = fs
  .readdirSync(projectRoot)
  .filter((file) => file.endsWith('.html'));

const now = new Date();
const pad = (num) => num.toString().padStart(2, '0');
const buildStamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
const versionQuery = `v=${buildStamp}`;

const pages = [
  'index',
  'about',
  'services',
  'pricing',
  'contact',
  'privacy',
  'terms',
  'apply',
  'dashboard'
];

const updateAssetUrls = (content) => {
  const cssPattern = /href="\/?css\/style\.css(?:\?[^\"]*)?"/g;
  const jsPattern = /src="\/?js\/([^"]+?\.js)(?:\?[^\"]*)?"/g;
  const faviconPattern = /href="favicon\.svg"/g;

  let updated = content.replace(cssPattern, `href="/css/style.css?${versionQuery}"`);
  updated = updated.replace(jsPattern, (match, fileName) => `src="/js/${fileName}?${versionQuery}"`);
  updated = updated.replace(faviconPattern, 'href="/favicon.svg"');

  return updated;
};

const updateInternalLinks = (content) => {
  const pagePattern = new RegExp(`href=\"(?:\/)?(${pages.join('|')})\.html([^\"]*)\"`, 'g');
  return content.replace(pagePattern, (match, page, suffix) => `href="/${page}.html${suffix}"`);
};

const updateBuildMarker = (content) => {
  const markerRegex = /<!-- build: \d{4}-\d{2}-\d{2}-\d{4} -->/;
  const marker = `<!-- build: ${buildStamp} -->`;

  if (markerRegex.test(content)) {
    return content.replace(markerRegex, marker);
  }

  const footerClose = '</footer>';
  const insertion = `${marker}\n    ${footerClose}`;

  if (content.includes(footerClose)) {
    return content.replace(footerClose, insertion);
  }

  return `${content}\n${marker}\n`;
};

htmlFiles.forEach((file) => {
  const filePath = path.join(projectRoot, file);
  const original = fs.readFileSync(filePath, 'utf8');

  let updated = updateAssetUrls(original);
  updated = updateInternalLinks(updated);

  if (file === 'index.html') {
    updated = updateBuildMarker(updated);
  }

  if (updated !== original) {
    fs.writeFileSync(filePath, updated);
    console.log(`Updated ${file} with version ${versionQuery}`);
  } else {
    console.log(`No changes needed for ${file}`);
  }
});
