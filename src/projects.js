/**
 * Projects Data Definition
 * Centralized data store for Featured Projects
 * Easily editable technology badges and repository / live demo links
 */
export const projectsData = [
  {
    id: "aws-three-tier-architecture",
    number: "01",
    name: "Deploying Secure and Scalable Three-Tier Architecture Using AWS",
    description:
      "Designed and implemented a highly scalable and fault-tolerant three-tier architecture on AWS, leveraging EC2 Auto Scaling for the compute layer, Amazon RDS Multi-AZ for the data layer, and Amazon S3 for secure, durable storage and backups.",
    technologies: ["AWS", "EC2", "Auto Scaling", "Amazon RDS", "Multi-AZ", "Amazon S3"],

    // Visual area styling: Blue / Dark gradient
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #111827 100%)",

    iconSvg: `
    <svg class="w-14 h-14 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M8 13h8M8 16h6"
      />
    </svg>
  `,
  },
  {
    id: "jenkins-aws-web-app",
    number: "02",
    name: "Web Application Deployment using Jenkins on AWS",
    description:
      "Containerized a Python Flask application using Docker to ensure deployment consistency and portability across environments. Deployed the application to an AWS EC2 instance via SSH, configuring the instance and security groups to make the containerized application accessible through its public IP address.",
    technologies: ["AWS", "EC2", "Jenkins", "Docker", "Python", "Flask", "SSH"],

    // Visual area styling: Purple / Indigo gradient
    gradient: "linear-gradient(135deg, #4C1D95 0%, #111827 100%)",

    iconSvg: `
    <svg class="w-14 h-14 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  `,
  },
  {
    id: "terraform-gitlab-ci-cd",
    number: "03",
    name: "Fully Automated DevOps Deployment using Terraform & GitLab CI/CD",
    description:
      "Built an end-to-end DevOps pipeline using Terraform and GitLab CI/CD to automate infrastructure provisioning, Docker deployment, and application testing on AWS. Implemented secure artifact handling, health checks, and manual infrastructure controls while resolving real-world Terraform, SSH, and EC2 challenges.",
    technologies: ["Terraform", "GitLab CI/CD", "AWS", "EC2", "Docker", "Docker Compose", "Infrastructure as Code", "Shell Scripting"],

    // Visual area styling: Teal / Cyan gradient
    gradient: "linear-gradient(135deg, #0F766E 0%, #111827 100%)",

    iconSvg: `
    <svg class="w-14 h-14 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  `,
  },
  {
    id: "kubernetes-kind-voting-app",
    number: "04",
    name: "Kubernetes Kind Voting App",
    description:
      "Deployed a Kubernetes cluster using Kind on an AWS EC2 instance and integrated Argo CD to enable GitOps-driven continuous delivery. Configured the environment with Docker, Kind, and kubectl, deployed and managed applications using the Kubernetes Dashboard, and implemented Argo CD for automated GitOps-based application deployment and streamlined management of containerized applications.",
    technologies: ["AWS EC2", "Kubernetes", "Kind", "Docker", "kubectl", "Kubernetes Dashboard", "Argo CD", "GitOps", "CI/CD"],

    // Visual area styling: Kubernetes Blue / Dark Navy gradient
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #0F172A 100%)",

    iconSvg: `
    <svg class="w-14 h-14 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" stroke-width="1.8" />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M12 3v3m0 12v3M3 12h3m12 0h3m-2.636-6.364l-2.121 2.121m-8.486 8.486l-2.121 2.121m0-12.728l2.121 2.121m8.486 8.486l2.121 2.121"
      />
      <circle cx="12" cy="12" r="8" stroke-width="1.8" />
    </svg>
  `,
  }
];

/**
 * Initialize Projects Section: Renders project cards dynamically & attaches scroll reveal observer
 */
export function initProjects() {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  renderProjectsGrid(container);
  setupProjectScrollReveal();
  setupSmoothScroll();
}

/**
 * Render all project cards dynamically from projectsData
 */
function renderProjectsGrid(container) {
  container.innerHTML = projectsData.map((project, index) => {
    return renderProjectCard(project, index);
  }).join('');
}

/**
 * Render an individual project card HTML string
 */
function renderProjectCard(project, index) {
  const delay = index * 120;

  // Technology badge pills
  const techBadgesHtml = project.technologies.map(tech => `
    <span class="project-tech-pill">
      ${tech}
    </span>
  `).join('');

  return `
    <article 
      class="project-card group flex flex-col justify-between"
      style="transition-delay: ${delay}ms;"
      data-project="${project.id}"
      tabindex="0"
      aria-label="${project.name}"
    >
      <div>
        <!-- Top Project Visual Area (220px Height with Unique Gradient & Animated Floating Circle) -->
        <div 
          class="project-visual-area relative w-full h-[220px] overflow-hidden flex items-center justify-center select-none"
          style="background: ${project.gradient};"
        >
          <!-- Animated Floating Background Circle -->
          <div class="project-animated-circle pointer-events-none" aria-hidden="true"></div>

          <!-- Centered Large Project Icon (Above animated circle with z-index: 1) -->
          <div class="project-icon-wrapper relative z-10 flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300" aria-hidden="true">
            ${project.iconSvg}
          </div>
        </div>

        <!-- Project Content Section (25px Padding) -->
        <div class="project-content-area p-[25px] flex flex-col">
          
          <!-- Project Number (Small, Purple, font-weight 600) -->
          <span class="project-number text-[13px] font-semibold text-purple-400 mb-1 tracking-wider">
            ${project.number}
          </span>

          <!-- Project Title (~23px, Bold, White in dark mode / Dark in light mode) -->
          <h3 class="project-title text-[23px] font-bold text-primary-theme mb-3 group-hover:text-purple-400 transition-colors">
            ${project.name}
          </h3>

          <!-- Project Description (Muted gray, line-height 1.7, ~14px) -->
          <p class="project-description text-[14px] text-muted-theme leading-[1.7] mb-5">
            ${project.description}
          </p>

          <!-- Technology Badges -->
          <div class="project-tech-list flex flex-wrap gap-2">
            ${techBadgesHtml}
          </div>

        </div>
      </div>
    </article>
  `;
}

/**
 * Set up Scroll Reveal animations with IntersectionObserver & Reduced Motion handling
 */
function setupProjectScrollReveal() {
  const cards = document.querySelectorAll('.project-card');
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

/**
 * Smooth scrolling for any internal project navigation links
 */
function setupSmoothScroll() {
  const projectNavLinks = document.querySelectorAll('a[href="#projects"], a[href="/#projects"]');
  projectNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetElement = document.getElementById('projects');
      if (targetElement) {
        // If on the same page, scroll smoothly
        if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '') {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, '', '#projects');
        }
      }
    });
  });
}
