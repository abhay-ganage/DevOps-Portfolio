/**
 * Services Data Definition
 * Centralized data store for all portfolio services
 */
export const servicesData = [
  {
    id: "cloud-infrastructure",
    number: "01",
    icon: "☁️",
    title: "Cloud Infrastructure",
    description: "Design and manage reliable cloud infrastructure using AWS services with a focus on scalability, security, and availability.",
    technologies: ["AWS", "EC2", "S3", "RDS", "IAM"]
  },
  {
    id: "cicd-automation",
    number: "02",
    icon: "🔄",
    title: "CI/CD Automation",
    description: "Automate build, testing, and deployment workflows to deliver applications faster and more reliably.",
    technologies: ["Jenkins", "GitLab CI/CD", "GitHub", "Pipeline Automation"]
  },
  {
    id: "containerization",
    number: "03",
    icon: "📦",
    title: "Containerization",
    description: "Build, manage, and deploy portable containerized applications across different environments.",
    technologies: ["Docker", "Docker Compose", "Kubernetes", "Kind"]
  },
  {
    id: "infrastructure-as-code",
    number: "04",
    icon: "🏗️",
    title: "Infrastructure as Code",
    description: "Provision and manage cloud infrastructure efficiently using version-controlled infrastructure automation.",
    technologies: ["Terraform", "AWS", "IaC", "Automation"]
  }
];

/**
 * Initialize Services Section: Renders service cards dynamically & attaches scroll reveal observer
 */
export function initServices() {
  const container = document.getElementById('services-grid-container');
  if (!container) return;

  renderServicesGrid(container);
  setupScrollReveal();
}

/**
 * Render all service cards dynamically from servicesData
 */
function renderServicesGrid(container) {
  container.innerHTML = servicesData.map((service, index) => {
    return renderServiceCard(service, index);
  }).join('');
}

/**
 * Render an individual service card HTML string
 */
function renderServiceCard(service, index) {
  const delay = index * 100;
  const techBadgesHtml = service.technologies.map(tech => `
    <span class="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
      ${tech}
    </span>
  `).join('');

  return `
    <article 
      class="service-card flex flex-col justify-between group"
      style="transition-delay: ${delay}ms;"
      data-service="${service.id}"
      tabindex="0"
      aria-label="${service.title}"
    >
      <div>
        <!-- Top Row: Icon Container & Number Badge -->
        <div class="flex items-center justify-between mb-8">
          <div class="service-icon service-icon-wrapper" aria-hidden="true">
            ${service.icon}
          </div>
          <span class="text-xs font-semibold uppercase tracking-wider text-purple-400/80 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Service ${service.number}
          </span>
        </div>

        <!-- Service Title -->
        <h2 class="service-title text-2xl sm:text-3xl font-bold text-primary-theme mb-4 group-hover:text-purple-400 transition-colors">
          ${service.title}
        </h2>

        <!-- Service Description -->
        <p class="service-description text-base sm:text-lg text-muted-theme leading-relaxed mb-6">
          ${service.description}
        </p>
      </div>

      <!-- Technologies Badges Footer -->
      <div class="flex flex-wrap gap-2 pt-4 border-t border-theme">
        ${techBadgesHtml}
      </div>
    </article>
  `;
}

/**
 * Set up Scroll Reveal animations with IntersectionObserver & Reduced Motion handling
 */
function setupScrollReveal() {
  const cards = document.querySelectorAll('.service-card');
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
