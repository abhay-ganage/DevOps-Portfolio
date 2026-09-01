import { skillCategories, fallbackSvgIcon } from './skillsData.js';

/**
 * Initialize Skills Section: Renders cards & sets up scroll reveal animations
 */
export function initSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  renderSkillsGrid(container);
  setupScrollReveal();
}

/**
 * Render all category cards dynamically from skillCategories data
 */
function renderSkillsGrid(container) {
  container.innerHTML = skillCategories.map((category, index) => {
    return renderSkillCategoryCard(category, index);
  }).join('');

  attachImgFallbackListeners(container);
}

/**
 * Programmatically attach error fallbacks for skill icons
 */
function attachImgFallbackListeners(container) {
  const images = container.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('error', () => {
      img.src = fallbackSvgIcon;
    }, { once: true });
  });
}

/**
 * Render an individual skill category card HTML string
 */
function renderSkillCategoryCard(category, index) {
  const badgesHtml = category.skills.map((skill) => renderSkillBadge(skill)).join('');

  return `
    <article 
      class="skill-card theme-surface rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 glow-box-sm hover:glow-box hover:-translate-y-1 group flex flex-col justify-between"
      style="transition-delay: ${index * 80}ms;"
      data-category="${category.id}"
    >
      <div>
        <!-- Category Title & Emoji -->
        <h3 class="text-xl sm:text-2xl font-bold text-primary-theme mb-6 flex items-center gap-3 border-b border-theme pb-4">
          <span class="text-2xl sm:text-3xl">${category.emoji}</span>
          <span>${category.title}</span>
        </h3>

        <!-- Technology Badges Flex Wrapper -->
        <div class="flex flex-wrap gap-3 sm:gap-3.5 items-center">
          ${badgesHtml}
        </div>
      </div>
    </article>
  `;
}

/**
 * Render an individual skill badge HTML string
 */
function renderSkillBadge(skill) {
  return `
    <div class="skill-badge inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/60 hover:bg-purple-500/15 hover:shadow-purple-glow-sm hover:scale-[1.04] active:scale-95 transition-all duration-300 cursor-default group/badge">
      <img 
        src="${skill.icon}" 
        alt="${skill.name} icon" 
        loading="lazy"
        class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain shrink-0 filter drop-shadow-sm group-hover/badge:scale-110 transition-transform duration-300"
      />
      <span class="text-xs sm:text-sm md:text-base font-semibold text-primary-theme tracking-tight">
        ${skill.name}
      </span>
    </div>
  `;
}

/**
 * Set up Scroll Reveal animations with IntersectionObserver & Reduced Motion handling
 */
function setupScrollReveal() {
  const cards = document.querySelectorAll('.skill-card');
  if (!cards.length) return;

  // Check if reduced motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
    cards.forEach((card) => card.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => observer.observe(card));
}
