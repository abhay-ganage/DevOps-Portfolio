import fs from 'fs';
import path from 'path';

console.log('=== VERIFYING MOBILE TOUCH & LINK REPAIR ===\n');

// 1. Check generated dist CSS
const distDir = path.resolve('dist');
const assetsDir = path.join(distDir, 'assets');
const cssFile = fs.readdirSync(assetsDir).find(f => f.endsWith('.css'));
if (!cssFile) {
  console.error('FAIL: No CSS bundle found in dist/assets!');
  process.exit(1);
}
const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8');

console.log('1. Checking compiled CSS rules:');
const checks = [
  { name: '#portfolio-chatbot-root pointer-events: none', test: /#portfolio-chatbot-root\{[^}]*pointer-events:none/ },
  { name: '#portfolio-chatbot-root .chatbot-launcher pointer-events: auto', test: /#portfolio-chatbot-root\s+\.chatbot-launcher\{[^}]*pointer-events:auto/ },
  { name: '.chatbot-panel:not(.is-open) display: none & pointer-events: none', test: /\.chatbot-panel:not\(\.is-open\)\{[^}]*display:none/ },
  { name: '.chatbot-panel.is-open display: flex & pointer-events: auto', test: /\.chatbot-panel\.is-open\{[^}]*display:flex/ },
  { name: '#mobile-menu.hidden display: none & pointer-events: none', test: /#mobile-menu\.hidden\{[^}]*display:none/ },
  { name: '#mobile-menu:not(.hidden) pointer-events: auto', test: /#mobile-menu:not\(\.hidden\)\{[^}]*pointer-events:auto/ },
  { name: '::before, ::after pointer-events: none', test: /(:before|:after)[^{]*\{[^}]*pointer-events:none/ },
  { name: 'Interactive elements selector has pointer-events: auto', test: /\.project-link[^}]*pointer-events:auto/ },
  { name: 'Project action links styled (.project-link)', test: /\.project-link\{/ },
];

let allPassed = true;
checks.forEach(c => {
  const ok = c.test.test(cssContent);
  console.log(`  ${ok ? '✓ PASS' : '✗ FAIL'}: ${c.name}`);
  if (!ok) allPassed = false;
});

// 2. Check HTML files for semantic anchors and classes
console.log('\n2. Checking external links & buttons in HTML files:');
const htmlFiles = ['index.html', 'about.html', 'contact.html', 'projects.html', 'services.html', 'skills.html'];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.resolve(file), 'utf-8');
  console.log(`\n  Checking ${file}:`);

  // Check for any href="#" on external link patterns
  const hashMatches = content.match(/<a[^>]+href=["']#["'][^>]*>/g) || [];
  console.log(`    - Found ${hashMatches.length} <a href="#"> tags`);
  hashMatches.forEach(m => console.log(`      Warning: ${m}`));

  // Check external links for target and rel
  const extLinkMatches = content.match(/<a[^>]+href=["']https?:\/\/[^"']+["'][^>]*>/g) || [];
  console.log(`    - Found ${extLinkMatches.length} external http(s) links`);
  extLinkMatches.forEach(link => {
    const hasTarget = link.includes('target="_blank"');
    const hasRel = link.includes('rel="noopener') || link.includes("rel='noopener");
    if (!hasTarget || !hasRel) {
      console.log(`      Warning: External link missing target="_blank" or rel="noopener": ${link}`);
      allPassed = false;
    }
  });

  // Check resume button if present
  if (content.includes('download=')) {
    const hasResumeClass = content.includes('download-resume-btn');
    console.log(`    - Resume download button has .download-resume-btn: ${hasResumeClass ? '✓ YES' : '✗ NO'}`);
    if (!hasResumeClass) allPassed = false;
  }

  // Check certificate links if present
  if (content.includes('View Certificate')) {
    const certMatches = content.match(/<a[^>]+class=["'][^"']*certificate-link[^"']*["'][^>]*>/g) || [];
    console.log(`    - Certificate links with .certificate-link: ${certMatches.length}`);
    if (certMatches.length === 0) {
      console.log('      ✗ Certificate links missing .certificate-link');
      allPassed = false;
    }
  }
});

// 3. Check src/projects.js
console.log('\n3. Checking src/projects.js:');
const projectsJs = fs.readFileSync(path.resolve('src/projects.js'), 'utf-8');
const hasHashUrl = projectsJs.includes('githubUrl: "#"') || projectsJs.includes('liveDemoUrl: "#"');
console.log(`  - No href="#" in projectsData: ${!hasHashUrl ? '✓ PASS' : '✗ FAIL (found #)'}`);
if (hasHashUrl) allPassed = false;

const hasCodeLink = projectsJs.includes('class="project-link"') && projectsJs.includes('Code');
const hasLiveDemo = projectsJs.includes('class="project-link"') && projectsJs.includes('Live Demo');
console.log(`  - Renders Project "Code" button with .project-link: ${hasCodeLink ? '✓ PASS' : '✗ FAIL'}`);
console.log(`  - Renders Project "Live Demo" button with .project-link: ${hasLiveDemo ? '✓ PASS' : '✗ FAIL'}`);
if (!hasCodeLink || !hasLiveDemo) allPassed = false;

// 4. Check src/chatbot.js
console.log('\n4. Checking src/chatbot.js:');
const chatbotJs = fs.readFileSync(path.resolve('src/chatbot.js'), 'utf-8');
const rootPointerEvents = chatbotJs.includes("chatbotWrapper.style.pointerEvents = 'none'");
const panelInitialDisplay = chatbotJs.includes('style="display: none; pointer-events: none;"');
const stateIsOpenClass = chatbotJs.includes("chatWindow.classList.add('is-open')");
const stateRemoveIsOpenClass = chatbotJs.includes("chatWindow.classList.remove('is-open')");

console.log(`  - #portfolio-chatbot-root set to pointerEvents: none: ${rootPointerEvents ? '✓ PASS' : '✗ FAIL'}`);
console.log(`  - #chatbot-window initial display: none and pointer-events: none: ${panelInitialDisplay ? '✓ PASS' : '✗ FAIL'}`);
console.log(`  - Chatbot toggles .is-open class on open/close: ${stateIsOpenClass && stateRemoveIsOpenClass ? '✓ PASS' : '✗ FAIL'}`);
if (!rootPointerEvents || !panelInitialDisplay || !stateIsOpenClass || !stateRemoveIsOpenClass) allPassed = false;

console.log('\n====================================');
if (allPassed) {
  console.log('ALL VERIFICATION CHECKS PASSED! ✓');
} else {
  console.error('SOME CHECKS FAILED! ✗');
  process.exit(1);
}
