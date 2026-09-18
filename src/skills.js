import { skillCategories, fallbackSvgIcon } from './skillsData.js';

/**
 * Initialize Skills Section: Renders cards & sets up scroll reveal
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
      class="skill-card flex flex-col justify-between"
      style="transition-delay: ${index * 60}ms;"
      data-category="${category.id}"
    >
      <div>
        <!-- Category Header -->
        <div class="mb-4 pb-3 border-b border-theme">
          <h3 class="text-sm sm:text-base font-semibold text-primary-theme leading-tight">
            ${category.title}
          </h3>
          ${category.subtitle ? `<p class="text-xs text-muted-theme mt-0.5">${category.subtitle}</p>` : ''}
        </div>

        <!-- Technology Badges Flex Wrapper -->
        <div class="flex flex-wrap gap-2 items-center">
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
    <div class="skill-badge-classic">
      <img 
        src="${skill.icon}" 
        alt="${skill.name} icon" 
        loading="lazy"
        class="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0"
      />
      <span class="text-xs font-medium text-primary-theme">
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

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
    cards.forEach((card) => card.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
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
