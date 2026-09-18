/**
 * Services Data Definition
 * Centralized data store for all portfolio services
 */
export const servicesData = [
  {
    id: "cloud-infrastructure",
    number: "01",
    icon: "cloud",
    title: "Cloud Infrastructure",
    description: "Design, configure, and manage scalable cloud environments on AWS with high availability, secure VPC networking, IAM governance, and automated backups.",
    technologies: ["AWS", "EC2", "S3", "RDS", "VPC", "IAM"]
  },
  {
    id: "cicd-automation",
    number: "02",
    icon: "git-branch",
    title: "CI/CD Pipeline Automation",
    description: "Build automated, reproducible deployment workflows with Jenkins, GitLab CI/CD, and GitHub to deliver tested releases with zero downtime.",
    technologies: ["Jenkins", "GitLab CI/CD", "GitHub", "Shell Scripting"]
  },
  {
    id: "containerization",
    number: "03",
    icon: "boxes",
    title: "Containerization & Orchestration",
    description: "Containerize microservices with Docker, streamline multi-container setups via Docker Compose, and orchestrate workloads with Kubernetes.",
    technologies: ["Docker", "Docker Compose", "Kubernetes", "Kind"]
  },
  {
    id: "infrastructure-as-code",
    number: "04",
    icon: "cpu",
    title: "Infrastructure as Code (IaC)",
    description: "Provision and manage cloud resources declaratively using Terraform for version-controlled, auditable, and repeatable infrastructure.",
    technologies: ["Terraform", "AWS IaC", "GitOps", "Automation"]
  }
];

/**
 * Initialize Services Section: Renders service cards dynamically & attaches scroll reveal observer
 */
export function initServices() {
  const container = document.getElementById('services-grid-container');
  if (!container) return;

  renderServicesGrid(container);
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
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
  const delay = index * 80;
  const techBadgesHtml = service.technologies.map(tech => `
    <span class="project-tech-pill">
      ${tech}
    </span>
  `).join('');

  return `
    <article 
      class="service-card flex flex-col justify-between"
      style="transition-delay: ${delay}ms;"
      data-service="${service.id}"
      tabindex="0"
      aria-label="${service.title}"
    >
      <div>
        <!-- Top Row: Icon & Number Badge -->
        <div class="flex items-center justify-between mb-5">
          <div class="service-icon-wrapper flex items-center justify-center" aria-hidden="true">
            <i data-lucide="${service.icon}" class="w-5 h-5 text-primary-theme"></i>
          </div>
          <span class="font-mono text-xs font-semibold tracking-wider text-muted-theme uppercase">
            #${service.number}
          </span>
        </div>

        <!-- Service Title -->
        <h3 class="text-xl sm:text-2xl font-bold text-primary-theme mb-3">
          ${service.title}
        </h3>

        <!-- Service Description -->
        <p class="text-sm sm:text-base text-muted-theme leading-relaxed mb-6">
          ${service.description}
        </p>
      </div>

      <!-- Technologies Badges Footer -->
      <div class="flex flex-wrap gap-1.5 pt-4 border-t border-theme">
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
